#!/usr/bin/env node
/**
 * gtm-wiki L1 depth/schema checker — machine-checks the structural page
 * contract behind the Gold Ship Standard's Insightful + Engaging gates.
 *
 * A page that is long-but-empty (padding to clear a line-count gate) is
 * exactly what this catches: it fails the depth slots even when its `wc -l`
 * looks healthy. This is the "depth gate, not just coverage gate" floor.
 *
 * Design note: this runs WARN-only (exit 0) so existing pages never block a
 * deploy while it is being calibrated. `lint.mjs` (hard taste + build-trap
 * rules) is the blocking gate. Once every page clears the depth floor, a
 * `--strict` flag can promote this to a hard gate.
 *
 * Usage:
 *   node scripts/check-depth.mjs
 *   node scripts/check-depth.mjs --strict     # missing slots exit 1
 *   node scripts/check-depth.mjs <file>...
 *
 * Exit codes: 0 = floor met (or warn-only), 1 = --strict and slots missing,
 *             2 = usage/scan error.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, normalize, basename } from 'node:path';

const ROOT = normalize(join(process.cwd(), 'docs'));
const STRICT = process.argv.includes('--strict');

// Per-page-type required slots. Each entry: { name, check(content)->bool }.
// These are the machine-checkable proxies for the depth artifacts. The
// directory name maps to a canonical page type.
const SLOT_DEFS = {
  // Every page, every type.
  _common: [
    { name: 'frontmatter:title', check: (c) => /^title:/m.test(c) },
    { name: 'frontmatter:description', check: (c) => /^description:/m.test(c) },
    { name: 'frontmatter:status', check: (c) => /^status:/m.test(c) },
    { name: 'frontmatter:tags', check: (c) => /^tags:/m.test(c) },
    {
      name: '>=4 H2 sections (structure floor)',
      check: (c) => (c.match(/^##\s+/gm) || []).length >= 4,
    },
    {
      name: 'shown artifact (fenced block or table)',
      check: (c) => /^\s*(```|~~~)/m.test(c) || /\|.*\|/m.test(c),
    },
    {
      name: 'named+dated source refs (True proxy: 20xx year + citation)',
      check: (c) => (c.match(/20\d{2}/g) || []).length >= 2 && /\]\((https?|\.)/.test(c),
    },
    {
      name: 'failure-modes section (fail/when it breaks/pitfall/risk/objection)',
      check: (c) => /#{2,3}\s+.*(fail|when it breaks|pitfall|break|risk|objection|mistake)/im.test(c),
    },
    {
      name: 'variant/maturity dimension (by segment|stage|maturity|variant)',
      check: (c) => /(by segment|by stage|by maturity|variants|differen\w* by|for (seed|series|enterprise))/im.test(c),
    },
  ],
  // Channel pages: the motion must be runnable + agentically operable.
  channels: [
    {
      name: 'agentic layer (agent/SOP/prompt heading or block)',
      check: (c) => /#{2,3}\s+.*(agentic|agent|SOP|prompt)/im.test(c) || /```/m.test(c),
    },
    {
      name: 'worked math with named base',
      check: (c) => /(throughput|revenue|cost|ROI|unit econ|\$|%)\b[^\n]{0,80}(20\d{2}|[A-Z][a-z]+ \d{4})/im.test(c),
    },
  ],
  flows: [
    { name: 'runnable steps (ordered list or gate headings)', check: (c) => /(^##\s+\d+\.|^\d+\.)/m.test(c) },
    { name: 'agentic layer (agent/SOP/prompt)', check: (c) => /#{2,3}\s+.*(agentic|SOP|prompt|agent harness)/im.test(c) },
    { name: 'worked math with named base', check: (c) => /(throughput|revenue|cost|ROI|volume|\$|%)\b[^\n]{0,80}(20\d{2}|[A-Z][a-z]+ \d{4})/im.test(c) },
  ],
  playbooks: [
    { name: 'agentic layer (agent/SOP/prompt)', check: (c) => /#{2,3}\s+.*(agentic|SOP|prompt|agent harness)/im.test(c) },
    { name: 'worked example', check: (c) => /(worked (example|run)|for example|e\.g\.)/im.test(c) || /```/m.test(c) },
  ],
  case_studies: [
    { name: 'worked example / run', check: (c) => /(worked (example|run)|case|run|result)/im.test(c) },
    { name: 'measured result (metric)', check: (c) => /(%|\$|X|times|[0-9]+\.[0-9]+)/m.test(c) },
  ],
  agentic: [
    { name: 'SOP / prompt shown', check: (c) => /```/m.test(c) || /SOP|prompt/i.test(c) },
    { name: 'guardrails / measurement', check: (c) => /(guardrail|measure|metric|eval)/im.test(c) },
  ],
  foundations: [],
  data: [
    { name: 'named base + as-of (every table row sourced)', check: (c) => /20\d{2}/.test(c) },
  ],
  roles: [],
  tools: [],
};

function pageType(file) {
  const rel = normalize(file).replace(/\\/g, '/');
  const seg = rel.split('/');
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i].toLowerCase().replace(/[^a-z]/g, '_');
    if (s === 'channels') return 'channels';
    if (s === 'case_studies') return 'case_studies';
    if (s === 'playbooks') return 'playbooks';
    if (s === 'flows') return 'flows';
    if (s === 'agentic') return 'agentic';
    if (s === 'data') return 'data';
    if (s === 'foundations') return 'foundations';
    if (s === 'roles') return 'roles';
    if (s === 'tools') return 'tools';
  }
  return 'foundations';
}

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(md|mdx)$/.test(e) && basename(p) !== 'index.md') acc.push(p);
  }
  return acc;
}

const files = process.argv.slice(2).filter((a) => !a.startsWith('--')).length
  ? process.argv.slice(2).filter((a) => !a.startsWith('--'))
  : walk(ROOT);

let anyMiss = false;
for (const file of files) {
  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    console.log(`ERR  ${file}  (unreadable)`);
    continue;
  }
  const type = pageType(file);
  const slots = [...SLOT_DEFS._common, ...(SLOT_DEFS[type] || [])];
  const misses = [];
  for (const s of slots) {
    if (!s.check(content)) misses.push(s.name);
  }
  const n = slots.length;
  const missed = misses.length;
  const met = n - missed;
  const pct = Math.round((met / n) * 100);
  if (misses.length) anyMiss = true;
  const badge = misses.length === 0 ? 'ok  ' : (STRICT ? 'FAIL' : 'warn');
  console.log(`${badge} ${file}  [${type}]  depth ${met}/${n} (${pct}%)`);
  for (const m of misses) console.log(`      missing: ${m}`);
}

if (STRICT && anyMiss) {
  console.log('\ndepth check FAILED (--strict) — missing slots present.');
  process.exit(1);
}
if (anyMiss) {
  console.log('\ndepth check: warn-only — missing slots reported, not blocking. Run --strict once pages clear.');
} else {
  console.log('\ndepth check: all pages meet the contract.');
}
