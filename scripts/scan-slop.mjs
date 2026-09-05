#!/usr/bin/env node
/**
 * gtm-wiki S9 slop scan — turns the AI-slop tell list into a machine gate.
 * Author: Honey (slop gate). Part of TEAM_CULTURE.md S9: the slop scan is a
 * mandatory gate, not a courtesy. Every human catch should become a rule.
 *
 * OWNS: em dashes (sole owner — lint.mjs and lint-comms.mjs must NOT add
 * em-dash rules), "The"-opening headings, uncited dated stats.
 * SHARED with lint.mjs: anaphora/promise-listing (kept in both: this file's
 * version scans src/pages too). Do NOT add banned-token or rule-of-three
 * rules here — those belong to lint-comms.mjs.
 *
 * Device split (matches the Gold Ship boundary: exact rules are hard,
 * judgment rules are surfaced for the human eye):
 *
 *   HARD (exit 1)  — deterministic, unambiguous, cannot false-flag good prose:
 *     A. Em dashes (—) anywhere in prose
 *     B. "The"-opening headings
 *     C. Promise-listing / parallel-predicate anaphora
 *        ("The X gives you Y. The Z gives you W.", same delivery verb 3+ times)
 *
 *   WARN (exit 0, printed as candidates) — judgment devices where a blanket
 *   gate would false-flag accepted reference prose. Surfaced so the human eye
 *   closes each one (S9: vigilance is the backup, the machine catches the
 *   deterministic class):
 *     D. Two-fragment contrast "X is not Y. It is Z."
 *        (often legit reference voice: "The gap is not the customer's fault.
 *        It is a missing mechanism." — the tell is the vague punchy form:
 *        "Discounting is not neutral. It is a pipeline-quality tax.")
 *     E. Uncited dated-stat: a source + 20xx year + %/$ figure with no [n]
 *        marker on the line. This is the audit's "True gate cannot see it"
 *        tell. (True-gate registration is Bumble's; this is the reader-facing
 *        complement that surfaces the stat for a footnote.)
 *
 * The colon-opener "**Label:**" device is intentionally NOT a rule: it is
 * overwhelmingly functional schema ("**Acceptance gate for Step 3:**",
 * "**Result:**") that the reference page uses and the taste gate accepts.
 * A blanket gate would false-flag ~180 legit labels. It stays human-eye.
 *
 * Usage:
 *   node scripts/scan-slop.mjs                # docs/ + src/pages (reader-facing)
 *   node scripts/scan-slop.mjs --strict       # promote WARN devices to exit 1
 *   node scripts/scan-slop.mjs --staged       # only files from `git diff --cached`
 *   node scripts/scan-slop.mjs <file>...      # explicit files
 *
 * Exit codes: 0 = clean (or WARN candidates only), 1 = hard violations,
 * 2 = usage/scan error. Always prints a real file count (never a vacuous
 * "0 files" witness).
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename, normalize } from 'node:path';
import { execSync } from 'node:child_process';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = normalize(join(process.cwd(), 'docs'));
const SRC = normalize(join(process.cwd(), 'src'));
const SRC_PAGES = normalize(join(process.cwd(), 'src', 'pages'));
const PAGE_EXT = /\.(md|mdx|js|jsx|tsx)$/;

// S9 closes the whole hole: internal STANDARDS//RESEARCH/ prose is scanned
// too, so "24 em dashes in GE_STANDARD" can never again be a human hand-count
// (the morning's failure). The "The"-opening heading rule stays scoped to
// reader-facing docs: internal files legitimately use descriptive "The ..."
// headings (e.g. "The GE page anatomy"), and a blanket gate on them would
// false-flag reference prose. Em dashes and promise-listing are unambiguous
// slop everywhere, so they scan internal files too.
const STANDARDS = normalize(join(process.cwd(), 'STANDARDS'));
const RESEARCH = normalize(join(process.cwd(), 'RESEARCH'));
const INTERNAL_ROOTS = [STANDARDS, RESEARCH];

const EM_DASH = /—/g;

const THE_OPENING = /^#{1,6}\s+The\s+/i;

// Delivery predicates — the proven AI-marketing tell class (see lint.mjs 2b/2b2).
const DELIVERY_VERBS = '(?:gives|lets|shows|teaches|walks|takes|hands|offers|includes|carries|runs|brings|holds|delivers|provides|contains|ships|features|packs|loads|puts)';

// Two-fragment contrast: "X is not Y. It is Z."
const TWO_FRAGMENT = /\bis not\b[^.]*\.\s+It is\b/gi;

// Uncited-stat heuristic: a line with a % / $ figure and a source-like
// proper noun, with no [n] marker on the line.
const FOOTNOTE = /\[\d+\]/;

// ---------------------------------------------------------------------------
// Collect files
// ---------------------------------------------------------------------------

function walk(dir, acc = [], extRe = /\.(md|mdx)$/) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc, extRe);
    else if (extRe.test(e)) acc.push(p);
  }
  return acc;
}

function stagedFiles() {
  const out = execSync('git diff --cached --name-only --diff-filter=ACM', {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
  return out.split('\n').filter((l) => /\.(md|mdx|js|jsx)$/.test(l)).map((l) => normalize(l));
}

function targetFiles(args) {
  if (args.includes('--staged')) return stagedFiles();
  const explicit = args.filter((a) => !a.startsWith('--'));
  if (explicit.length) return explicit.map((a) => normalize(a));
  return [
    ...walk(ROOT),
    ...walk(SRC),
    ...walk(SRC_PAGES, [], PAGE_EXT),
    ...INTERNAL_ROOTS.flatMap((r) => walk(r)),
  ];
}

// ---------------------------------------------------------------------------
// Prose extraction: strip fenced code so taste rules scan what a reader sees.
// ---------------------------------------------------------------------------

function scanProse(content, line) {
  const prose = [];
  const lines = content.split('\n');
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*(```|~~~)/.test(l)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence) prose.push({ line: line + i, text: l });
  }
  return prose;
}

function scanJsxProse(content) {
  const prose = [];
  let c = content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(/import[^;]*;/g, ' ')
    .replace(/^\s*const\s+\w+\s*=\s*/gm, ' ')
    .replace(/[{}()=>;]/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/['"`]/g, ' ');
  const lines = c.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.length > 4 && /\s/.test(t) && /[A-Za-z]{3}/.test(t) && !/^[\d./]/.test(t)) {
      prose.push({ line: i + 1, text: t });
    }
  }
  return prose;
}

// ---------------------------------------------------------------------------
// Device checkers
// ---------------------------------------------------------------------------

function checkEmDash(prose, report) {
  for (const { line, text } of prose) {
    EM_DASH.lastIndex = 0;
    if (EM_DASH.test(text)) report('em dash (—)', line, text, 'HARD');
  }
}

function checkTheHeading(prose, report) {
  for (const { line, text } of prose) {
    if (THE_OPENING.test(text)) report('heading opens with "The"', line, text, 'HARD');
  }
}

function checkPromiseListing(prose, report) {
  const proseText = prose.map((p) => p.text).join(' ');
  // 2b: "The X gives you Y" / "<verb> you" density >=3 in ~400 chars.
  const marks = [];
  let m;
  const PROMISE_YOU = new RegExp(`\\b${DELIVERY_VERBS}\\s+you\\b`, 'gi');
  const PROMISE_THE = new RegExp(`\\bThe\\s+[\\w-]+(?:\\s+[\\w-]+)?\\s+${DELIVERY_VERBS}\\s+(?:the|you)\\b`, 'gi');
  PROMISE_YOU.lastIndex = 0;
  while ((m = PROMISE_YOU.exec(proseText)) !== null) marks.push(m.index);
  PROMISE_THE.lastIndex = 0;
  while ((m = PROMISE_THE.exec(proseText)) !== null) marks.push(m.index);
  marks.sort((a, b) => a - b);
  const dedup = [];
  for (const x of marks) {
    if (!dedup.length || x - dedup[dedup.length - 1] > 50) dedup.push(x);
  }
  let maxDensity = 0;
  for (let i = 0; i < dedup.length; i++) {
    let n = 1;
    for (let j = i + 1; j < dedup.length && dedup[j] - dedup[i] <= 400; j++) n++;
    if (n > maxDensity) maxDensity = n;
  }
  if (maxDensity >= 3) {
    const snippet = proseText.slice(dedup[0], dedup[0] + 120).replace(/\s+/g, ' ').trim();
    report('promise-listing anaphora (>=3 delivery clauses in one breath)', -1, snippet, 'HARD');
  }
  // 2b2: same delivery verb repeated 3+ times across "The X <verb> ...".
  const PREDICATE = new RegExp(`\\bThe\\s+[\\w-]+(?:\\s+[\\w-]+)?\\s+(${DELIVERY_VERBS})\\b`, 'gi');
  const hits = [];
  let pm;
  PREDICATE.lastIndex = 0;
  while ((pm = PREDICATE.exec(proseText)) !== null) hits.push({ index: pm.index, verb: pm[1].toLowerCase() });
  const byVerb = new Map();
  for (const h of hits) {
    if (!byVerb.has(h.verb)) byVerb.set(h.verb, []);
    byVerb.get(h.verb).push(h.index);
  }
  for (const [verb, idxs] of byVerb) {
    idxs.sort((a, b) => a - b);
    for (let i = 0; i < idxs.length; i++) {
      let n = 1;
      for (let j = i + 1; j < idxs.length && idxs[j] - idxs[i] <= 400; j++) n++;
      if (n >= 3) {
        const snippet = proseText.slice(idxs[i], idxs[i] + 120).replace(/\s+/g, ' ').trim();
        report(`parallel-predicate anaphora (same delivery verb "${verb}" 3+ times)`, -1, snippet, 'HARD');
        break;
      }
    }
  }
}

function checkTwoFragment(prose, report) {
  for (const { line, text } of prose) {
    TWO_FRAGMENT.lastIndex = 0;
    let m;
    while ((m = TWO_FRAGMENT.exec(text)) !== null) {
      const start = Math.max(0, m.index - 40);
      const snippet = text.slice(start, m.index + 120).replace(/\s+/g, ' ').trim();
      report('two-fragment contrast "X is not Y. It is Z."', line, snippet, 'WARN');
    }
  }
}

function checkUncitedStat(prose, report) {
  for (const { line, text } of prose) {
    // Target the audit's real tell: a NAMED + DATED stat with no footnote.
    // Signature = a 4-digit year (20xx) + a % or $ figure + a source-like
    // proper noun, on a prose line with no [n] marker and no "Source:".
    // Operational thresholds ("delivery under 97%") and tables are guidance,
    // not dated claims, and are deliberately skipped to keep the list reviewable.
    const t = text.trim();
    if (!t || /^[#{|>]/.test(t)) continue;            // heading / table / blockquote / code
    if (FOOTNOTE.test(t)) continue;                    // already footnoted
    if (/Source\s*:/i.test(t)) continue;               // already sourced inline
    if (/^\d+\.\s*\[[^\]]+\]\(https?:/.test(t)) continue; // numbered source-list entry
    if (!/\b20\d\d\b/.test(t)) continue;               // must carry a dated year
    if (!/[%$]/.test(t)) continue;                     // must carry a % or $ figure
    const hasProper = /\b[A-Z][a-z]{2,}\b/.test(t.replace(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/gi, ' '));
    if (!hasProper) continue;
    const snippet = t.slice(0, 100).replace(/\s+/g, ' ').trim();
    report('uncited dated-stat candidate (source + 20xx + %,$, no [n] on line)', line, snippet, 'WARN');
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const STRICT = args.includes('--strict');
const files = targetFiles(args);

if (!files.length) {
  console.error('scan-slop: no files to check');
  process.exit(2);
}

const rows = [];

for (const f of files) {
  let content;
  try {
    content = readFileSync(f, 'utf8');
  } catch {
    rows.push({ file: f, device: 'unreadable', line: -1, snippet: f, level: 'HARD' });
    continue;
  }
  const report = (device, line, snippet, level) => rows.push({ file: f, device, line, snippet, level });
  const isJs = /\.(js|jsx)$/.test(f);
  const isInternal = INTERNAL_ROOTS.some((r) => normalize(f).startsWith(r + '/') || normalize(f) === r);
  const prose = isJs ? scanJsxProse(content) : scanProse(content, 1);
  checkEmDash(prose, report);
  if (!isJs && !isInternal) checkTheHeading(prose, report);
  checkPromiseListing(prose, report);
  checkTwoFragment(prose, report);
  checkUncitedStat(prose, report);
}

const hard = rows.filter((r) => r.level === 'HARD');
const warns = rows.filter((r) => r.level === 'WARN');

// Per-file summary is intentionally omitted to keep output tight; counts are
// global. The hard violations above carry file context when the caller passes
// files explicitly (or --staged).

console.log(`\nscan-slop: ${hard.length} hard violation(s), ${warns.length} candidate(s) across ${files.length} file(s).`);
for (const r of hard) {
  console.log(`  HARD  ${r.file}  ${r.device}${r.line > 0 ? ` (line ${r.line})` : ''}: ${r.snippet.slice(0, 120)}`);
}
for (const r of warns) {
  console.log(`  WARN  ${r.file}  ${r.device}${r.line > 0 ? ` (line ${r.line})` : ''}: ${r.snippet.slice(0, 120)}`);
}

if (hard.length) {
  console.log('\nscan-slop FAILED — blocking slop violations present. Fix before commit/deploy.');
  process.exit(1);
}
if (STRICT && warns.length) {
  console.log('\nscan-slop --strict FAILED — candidates promoted to blocking.');
  process.exit(1);
}
console.log('\nscan-slop passed.');
