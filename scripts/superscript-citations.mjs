#!/usr/bin/env node
/**
 * Superscript citation transform (Grokipedia-style, A4b).
 *
 * Converts inline `[n]` citation markers in docs/ pages to superscript links
 * that jump to the page's Sources section:  <sup><a href="#sources">[n]</a></sup>
 *
 * Rules:
 * - Only the body (everything before the `## Sources` heading) is transformed.
 *   Sources entries themselves (`- [n] Author…`) are left untouched.
 * - Files without a `## Sources` heading are skipped (the anchor must exist).
 * - Idempotent: existing sup wrappers are unwrapped before re-wrapping.
 * - `--dry` prints the per-file marker count without writing.
 *
 * Usage: node scripts/superscript-citations.mjs [--dry]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const DRY = process.argv.includes('--dry');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile() && /\.mdx?$/.test(e.name)) out.push(full);
  }
  return out;
}

const CITATION_RE = /\[(\d{1,3})\]/g;
const WRAPPED_RE = /<sup><a href="#sources">\[(\d{1,3})\]<\/a><\/sup>/g;
let filesChanged = 0;
let markersTotal = 0;

for (const file of walk(DOCS)) {
  const src = fs.readFileSync(file, 'utf8');
  const cut = src.search(/^## Sources\s*$/m);
  if (cut === -1) continue; // no anchor target — skip the file

  const body = src.slice(0, cut);
  const tail = src.slice(cut);

  // Idempotency: unwrap any previous transform, then re-wrap bare markers.
  const bare = body.replace(WRAPPED_RE, (m, n) => `[${n}]`);

  let count = 0;
  const newBody = bare.replace(CITATION_RE, (m, n) => {
    count++;
    return `<sup><a href="#sources">[${n}]</a></sup>`;
  });
  if (count === 0) continue;

  if (!DRY) fs.writeFileSync(file, newBody + tail, 'utf8');
  filesChanged++;
  markersTotal += count;
  console.log(`${DRY ? 'would change' : 'changed'} ${path.relative(ROOT, file)}: ${count} markers`);
}

console.log(`${DRY ? 'DRY RUN — ' : ''}${filesChanged} files, ${markersTotal} markers`);
