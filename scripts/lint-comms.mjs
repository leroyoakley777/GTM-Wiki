// lint-comms.mjs — GTM Wiki comms-standard gate (hard fail on violation).
// OWNS: banned AI-tell tokens, forced rule-of-three, passive-voice scent,
// hypothetical-future phrasing, performative honesty.
// Does NOT own: em dashes (scan-slop.mjs), anaphora/promise-listing (lint.mjs),
// structural rules (lint.mjs). Add new rules here ONLY if they fit the list
// above; otherwise put them in the owning scanner.
// Scans docs/**/*.md for Google-style deviations: banned AI-tell tokens,
// passive-voice scent, hypothetical future, performative honesty, forced rule-of-three.
// Heap-safe + loop-safe: uses String.includes (no regex exec loops, no full-file split).
// Exit 1 on any violation so it blocks `npm run check` and the Vercel build.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BANNED = [
  "leverage", "robust", "seamless", "pivotal", "unlock", "empower",
  "streamline", "foster", "navigate", "showcase", "underscore",
  "landscape", "testament", "delve", "demotivat", "demoraliz",
  "you're absolutely right", "you're right", "that's fair", "good catch",
  "great question", "hope this helps", "let me know if you need anything else",
  "here's the thing", "let me be clear", "the truth is",
  "performative honesty", "this compounds", "that's the compounding play",
  "sharpening the axe", "the system is a system",
];

const RE_RULE3 = /\b(three things|three ways|three reasons|three parts|three steps|in three)\b/i;
const RE_HYP = /\bwould then\b|\bcould then\b/i;
const RE_PASSIVE = /\b(is|was|were|be|been)\s+\w+(ed|en|t)\s+by\b/i;
const RE_HONEST = /\b(honestly|to be honest|frankly|truth be told)\b/i;

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (e.endsWith(".md")) out.push(p);
  }
  return out;
}

const docs = join(process.cwd(), "docs");
const standards = join(process.cwd(), "STANDARDS");
const research = join(process.cwd(), "RESEARCH");
const roots = [docs, standards, research];
// SOURCES_REGISTRY.md is structured data (source name + claim + page list),
// not prose. A voice gate must not rewrite a source's recorded claim (e.g.
// "in three months" is the vendor's own wording). Exclude the one data file;
// all prose files walk the voice gate.
const files = roots.flatMap((r) => walk(r)).filter((f) => !f.endsWith("SOURCES_REGISTRY.md"));
let count = 0;
const MAX_REPORT = 200;
let reported = 0;

for (const f of files) {
  const text = readFileSync(f, "utf8");
  const low = text.toLowerCase();

  // banned tokens — O(n) per token via indexOf line scan (no regex loop)
  for (const tok of BANNED) {
    let idx = low.indexOf(tok);
    while (idx !== -1) {
      // compute line number without splitting whole file
      let lineNo = 1;
      for (let i = 0; i < idx; i++) if (text.charCodeAt(i) === 10) lineNo++;
      if (reported < MAX_REPORT) {
        console.log(`  ${f}:${lineNo} [banned] ${tok.trim()}`);
        reported++;
      }
      count++;
      idx = low.indexOf(tok, idx + tok.length);
    }
  }

  // line heuristics — bounded line scan
  let start = 0;
  let lineNo = 1;
  while (start < text.length) {
    let nl = text.indexOf("\n", start);
    if (nl === -1) nl = text.length;
    const line = text.slice(start, nl);
    if (RE_RULE3.test(line)) { if (reported < MAX_REPORT) { console.log(`  ${f}:${lineNo} [style] forced rule-of-three`); reported++; } count++; }
    if (RE_HYP.test(line)) { if (reported < MAX_REPORT) { console.log(`  ${f}:${lineNo} [tense] hypothetical would/could then`); reported++; } count++; }
    if (RE_PASSIVE.test(line)) { if (reported < MAX_REPORT) { console.log(`  ${f}:${lineNo} [voice] passive-voice scent`); reported++; } count++; }
    if (RE_HONEST.test(line)) { if (reported < MAX_REPORT) { console.log(`  ${f}:${lineNo} [filler] performative honesty`); reported++; } count++; }
    start = nl + 1;
    lineNo++;
  }
}

if (count > 0) {
  console.error(`\nCOMMS LINT FAILED: ${count} violation(s) (showing up to ${MAX_REPORT}). Fix before deploy.`);
  process.exit(1);
}
console.log("COMMS LINT PASS: no violations across docs/, STANDARDS/, RESEARCH/");
process.exit(0);
