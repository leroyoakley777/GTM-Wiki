#!/usr/bin/env node
/**
 * check-freshness.mjs — enforce the Gold Standard "living" freshness gate.
 *
 * Scans docs/ for content pages (non-index .md) and checks each has a
 * `last_updated` frontmatter stamp within its cadence window:
 *   - data/ + benchmark pages: 90 days
 *   - everything else: 6 months (180 days)
 *   - case-studies: 12 months (365 days)
 *
 * Exit codes:
 *   0  = no pages missing/stale (or --quiet with nothing)
 *   1  = violations found (used as a hard gate with --strict)
 *
 * Like check-depth and scan-slop, this is warn-only by default and promotes
 * to a hard gate with --strict. Wire into vercel.json buildCommand if you
 * want stale freshness to block deploys.
 */
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.join(import.meta.dirname, '..', 'docs');
const STRICT = process.argv.includes('--strict');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile() && /\.mdx?$/.test(e.name) && e.name !== 'index.md') out.push(full);
  }
  return out;
}

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : '';
}

function stamp(fm) {
  const m = fm.match(/last[-_]?updated:\s*([\d-]{4,10})/);
  return m ? m[1] : null;
}

function cadenceDays(file) {
  const rel = file.replace(DOCS + path.sep, '');
  if (/^data\//.test(rel)) return 90;
  if (/^case-studies\//.test(rel)) return 365;
  return 180;
}

const today = new Date();
const violations = [];
let checked = 0;

for (const file of walk(DOCS)) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = frontmatter(text);
  const s = stamp(fm);
  checked++;
  if (!s) {
    violations.push({ file, reason: `missing last_updated (cadence ${cadenceDays(file)}d)` });
    continue;
  }
  const d = new Date(s + 'T00:00:00Z');
  if (isNaN(d.getTime())) {
    violations.push({ file, reason: `malformed last_updated: ${s}` });
    continue;
  }
  const ageDays = Math.floor((today - d) / 86400000);
  if (ageDays > cadenceDays(file)) {
    violations.push({ file, reason: `stale ${ageDays}d (cadence ${cadenceDays(file)}d)` });
  }
}

if (violations.length) {
  console.log(`check-freshness: ${violations.length} of ${checked} content pages need a freshness update.`);
  for (const v of violations.slice(0, 60)) console.log(`  ${v.reason.padEnd(45)} ${v.file}`);
  if (violations.length > 60) console.log(`  ... and ${violations.length - 60} more`);
  if (STRICT) { console.log('check-freshness FAILED (--strict).'); process.exit(1); }
  console.log('check-freshness: warn-only (pass --strict to gate deploys).');
} else {
  console.log(`check-freshness: all ${checked} content pages have a current last_updated.`);
}
process.exit(0);
