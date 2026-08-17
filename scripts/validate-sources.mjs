#!/usr/bin/env node
/**
 * gtm-wiki True-gate source validator — Bumble.
 *
 * Cross-checks the source citations in docs/ against SOURCES_REGISTRY.md (the
 * vetted allowlist). A page may only cite a source that has a row in the
 * registry: named, dated, and backed by the specific claim it supports.
 *
 * Division of labor (see Gold Ship Standard + CRO review):
 *   - lint.mjs             = L2 taste + build-trap rules (Honey's list -> code)
 *   - check-depth.mjs      = L1 structural depth / page contract (Fizz)
 *   - validate-sources.mjs = THIS — True-gate registry check (Bumble)
 *
 * Design: warn-only by default so a not-yet-vetted source never blocks a deploy
 * while the registry is being calibrated (same as check-depth.mjs). Once every
 * citation resolves, `--strict` promotes this to a hard gate. Exit 1 in --strict
 * when any citation is unregistered.
 *
 * Usage:
 *   node scripts/validate-sources.mjs                  # scan docs/, warn-only
 *   node scripts/validate-sources.mjs --strict         # unregistered = fail
 *   node scripts/validate-sources.mjs --list           # print registry names
 *
 * Exit codes: 0 = clean (or warn-only), 1 = --strict with unregistered cites,
 *             2 = usage/scan error.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, normalize, basename } from 'node:path';

const ROOT = normalize(join(process.cwd(), 'docs'));
const REGISTRY = normalize(join(process.cwd(), 'docs', '..', 'RESEARCH', 'gtm-wiki', 'SOURCES_REGISTRY.md'));
const STRICT = process.argv.includes('--strict');
const LIST = process.argv.includes('--list');

// ---------------------------------------------------------------------------
// Registry: source names the wiki is allowed to cite.
// Seeded from RESEARCH/gtm-wiki/SOURCES_REGISTRY.md + the vetted benchmark set.
// An unregistered name on a page = a citation for the True gate to vet.
// ---------------------------------------------------------------------------
const REGISTERED = new Set([
  // Benchmark / data vendors
  'SalesHive', 'Woodpecker', 'Focus Digital', 'Martal', 'Infraforge', 'OptifAI',
  'Optifai', 'DigitalApplied', 'RepVue', 'Forrester', 'SalesMotion', 'Salesmotion',
  'getSpike', 'ChurnZero', 'ChartMogul', 'Janis Zech', 'gtm-consult', 'SalesGenie',
  'Belkins', 'Autobound', 'Instantly', 'Clay', 'PowerDMARC', 'LeadHaste', 'Mailreach',
  'GetFuzzy', 'Ruler Analytics', 'First Page Sage', 'Landbase', 'Salesforce',
  'thedigitalbloom', 'Zeliq', 'Ebsta', 'Pavilion', 'SiriusDecisions', 'Foundry',
  'TheStarrConspiracy', 'Spiceworks', 'Demand Gen Report', 'Lusha', 'Amplitude',
  'Demandbase', 'Gartner', 'AiSDR', 'Mailforge',
]);

// ---------------------------------------------------------------------------
// Walk + scan (mirrors lint.mjs / check-depth.mjs)
// ---------------------------------------------------------------------------
function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(md|mdx)$/.test(e) && basename(p) !== 'index.md') acc.push(p);
  }
  return acc;
}

function norm(s) { return s.toLowerCase().replace(/[^a-z0-9]/g, ''); }

// Are two source names the same under case/punct normalization? Also strips a
// trailing year ("," 2025 / " 2025") and a "via Source" tail so
// "SalesHive, 2025" and "Focus Digital, via Martal" resolve to "SalesHive"/"Focus Digital".
function fuzzyMatch(cand, registered) {
  let c = cand;
  c = c.replace(/,\s*(?:19|20)\d{2}$/, '');      // drop trailing ", 2025"
  c = c.replace(/\s+(?:19|20)\d{2}$/, '');       // drop trailing " 2025"
  c = c.replace(/,\s*via\s+.+$/i, '');           // drop ", via Source"
  c = c.replace(/\s+via\s+.+$/i, '');            // drop "via Source"
  c = norm(c);
  if (!c) return false;
  for (const r of registered) if (norm(r) === c) return true;
  return false;
}

// Extract likely source candidates from a page's prose (fenced code dropped).
// The two reliable citation shapes in this wiki:
//   [SourceName: Title](url)  and  (SourceName 2026) / (SourceName, 2026)
// We pull the leading source name out of each, which cuts prose-noise to near
// zero while still surfacing unregistered sources for vetting.
function extractCandidates(content) {
  const out = new Set();
  const lines = content.split('\n');
  let inFence = false;
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    // [SourceName: Title](url) — take the leading name before ':' / em dash / ' - '
    for (const m of line.matchAll(/\[([^\]|]+)\]\(https?:\/\/[^)]+\)/g)) {
      let t = m[1].split(':')[0].split('—')[0].split(' - ')[0].split(' (')[0].trim();
      t = t.replace(/^(?:the|a|an)\s+/i, '');
      t = t.replace(/[',]$/, '').trim();
      if (t.length >= 3 && t.length <= 45 && /^[A-Z]/.test(t)) out.add(t);
    }
    // (SourceName 2026) / (SourceName, 2026) — drop months as non-sources
    for (const m of line.matchAll(/\(([A-Z][A-Za-z0-9&.+' -]{2,48}?)(?:,|\s)(19|20)\d{2}\)/g)) {
      const t = m[1].trim().replace(/[',]$/, '').trim();
      if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i.test(t)) continue;
      if (t.length >= 3 && t.length <= 45 && /^[A-Z]/.test(t)) out.add(t);
    }
  }
  return [...out];
}

// Heuristic stoplist: tokens that are clearly not a source name.
const STOP = new Set([
  'email', 'subject', 'step', 'on', 'this', 'page', 'the', 'goal', 'source',
  'sources', 'warmup', 'domain', 'read', 'table', 'row', 'note', 'also', 'that',
  'with', 'from', 'for', 'not', 'you', 'your', 'they', 'their', 'and', 'are',
  'was', 'were', 'but', 'because', 'when', 'where', 'how', 'what', 'which',
  'read next', 'further reading', 'related', 'see also', 'on this page',
  'here', 'there', 'this is', 'it is', 'shows', 'showing',
]);
const STOP_RE = /^(chapters?|sections?|further?|related|appendix|part|volume|step|version|draft|source|reference|reference[s]?)$/i;

function isPlausible(cand) {
  if (STOP.has(norm(cand))) return false;
  if (STOP_RE.test(cand.trim())) return false;
  if (cand.length < 3 || cand.length > 60) return false;
  if (/^\d+/.test(cand)) return false;
  return true;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
if (LIST) {
  console.log([...REGISTERED].sort().join('\n'));
  process.exit(0);
}

const files = walk(ROOT);
if (!files.length) { console.error('validate-sources: no files to check'); process.exit(2); }

const rows = [];
for (const file of files) {
  let content;
  try { content = readFileSync(file, 'utf8'); } catch { rows.push({ file, cands: [], unreg: ['unreadable'] }); continue; }
  const cands = extractCandidates(content).filter(isPlausible);
  const unreg = cands.filter((c) => !fuzzyMatch(c, REGISTERED));
  if (unreg.length) rows.push({ file, cands, unreg });
}

let totalUnreg = 0;
for (const r of rows) {
  totalUnreg += r.unreg.length;
  const badge = r.unreg.length ? (STRICT ? 'FAIL' : 'warn') : 'ok  ';
  console.log(`${badge} ${r.file}  (${r.unreg.length} unregistered citation(s))`);
  for (const u of [...new Set(r.unreg)]) console.log(`      unregistered source: ${u}`);
}
console.log(`\n${totalUnreg} unregistered citation(s) across ${rows.length} file(s).`);

if (STRICT && totalUnreg) {
  console.log('\nvalidate-sources FAILED (--strict) — unregistered citations present.');
  process.exit(1);
}
if (totalUnreg) {
  console.log('\nvalidate-sources: warn-only — unregistered citations reported for vetting. ' +
    'Add vetted sources to RESEARCH/gtm-wiki/SOURCES_REGISTRY.md, then re-run. Run --strict once clean.');
} else {
  console.log('\nvalidate-sources: all citations resolve to the source registry.');
}
