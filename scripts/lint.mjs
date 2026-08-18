#!/usr/bin/env node
/**
 * gtm-wiki L2 lint — turns the Tasteful gate's banned list + the build traps
 * into machine rules. Hard failures exit non-zero so CI / pre-commit / the
 * Vercel build gate can treat them as blockers. Soft checks print WARN only.
 *
 * Division of labor (see Gold Ship Standard):
 *   - lint.mjs      (this)  = L2 taste + build-trap rules (Honey's banned list → code)
 *   - check-depth.mjs       = L1 structural depth / page contract (Fizz)
 *   - validate-sources.py   = Bumble's True-gate registry check (wired separately)
 *
 * Usage:
 *   node scripts/lint.mjs                # docs/ + src/pages (all reader-facing copy)
 *   node scripts/lint.mjs --staged       # only files from `git diff --cached`
 *   node scripts/lint.mjs <file>...      # explicit files
 *
 * Exit codes: 0 = clean, 1 = hard violations (block), 2 = usage/scan error.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, extname, basename, normalize } from 'node:path';
import { execSync } from 'node:child_process';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = normalize(join(process.cwd(), 'docs'));
const SRC = normalize(join(process.cwd(), 'src'));
// Reader-facing React pages are copy too — they ship to the live site and must
// clear the same taste gate as docs/. The home hero is the highest-traffic
// surface; excluding it let slop reach production. Scan it.
const SRC_PAGES = normalize(join(process.cwd(), 'src', 'pages'));
const PAGE_EXT = /\.(md|mdx|js|jsx|tsx)$/;

// Internal-team meta must NEVER ship as reader-facing docs/. The Gold Ship
// Standard used to live here with a carve-out ("the spec, not a ship page")
// and quietly shipped to the live site. It now lives in STANDARDS/ (outside
// the docs/ tree, so lint never walks it). Any future page carrying these
// markers is internal coordination, not content, and hard-fails the build.
const INTERNAL_META = [
  /What this means for the team/i,
  /@(?:Honey|Bumble|Fizz|Deploy|Channel)\b/,
  /the bar Leroy set/i,
  /on a resume as work in progress/i,
];

// Tasteful-gate banned list, machine-checkable subset. Judgment-only rules
// (real-family filler, semicolon-joined prose) stay human; these are exact.
const BANNED = [
  /\bactual\b/i,
  /seamlessly/i,
  /holistically/i,
  /supercharge/i,
  /game[- ]chang/i,
  /world[- ]class/i,
  /best[- ]in[- ]class/i,
  /highest[- ]signal/i,
  /unlock(?: the)? potential/i,
  /cutting[- ]edge/i,
  /state[- ]of[- ]the[- ]art/i,
  /\bunlock\b/i, // per Gold Standard: no "unlock" marketing voice
];

const BANNED_LABELS = [
  '"actual"', '"seamlessly"', '"holistically"', '"supercharge"',
  '"game-changer"', '"world-class"', '"best-in-class"', '"highest-signal"',
  '"unlock the potential"', '"cutting-edge"', '"state-of-the-art"', '"unlock"',
];

// MDX build trap: a bare `<digit` (e.g. `<15 min`, `<5%`) parses as a JSX tag
// and fails the Docusaurus build. Must be `&lt;15` or rephrased.
const MDX_DIGIT_TRAP = /<(?=\d)/g;

// Tasteful gate: headings never open with "The".
const THE_OPENING = /^#{1,6}\s+The\s+/i;

// Em dash ban (Tasteful). EN dash (–) is allowed for ranges.
const EM_DASH = /—/g;

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
  return [...walk(ROOT), ...walk(SRC), ...walk(SRC_PAGES, [], PAGE_EXT)];
}

// ---------------------------------------------------------------------------
// Fenced-code tracking: taste rules scan prose only.
// ---------------------------------------------------------------------------

function scanProse(content, line) {
  // returns array of {line, text} prose-only lines, code fences dropped
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

// Extract reader-facing prose from a .js/.jsx file: string literals used as
// copy (the `sections` array descs, title strings) and JSX text nodes (the
// home-page hero <p>, labels). Returns [{line, text}] so the taste rules run
// on the same shape as markdown prose.
function scanJsxProse(content) {
  // Reader-facing copy in a .js/.jsx file lives in two places: string literals
  // used as copy (the `sections` array descs / titles) and JSX text nodes (the
  // hero <p>, labels, stat labels, the manifesto blockquote). Strip everything
  // that is code, tags, attributes, and JSX expressions; what remains is prose.
  const prose = [];
  let c = content
    .replace(/\/\*[\s\S]*?\*\//g, '')          // block comments
    .replace(/\/\/[^\n]*/g, '')                     // line comments
    .replace(/import[^;]*;/g, ' ')                    // import lines
    .replace(/^\s*const\s+\w+\s*=\s*/gm, ' ')    // `const x =`
    .replace(/[{}()=>;]/g, ' ')                       // code punctuation
    .replace(/\{[^}]*\}/g, ' ')                     // JSX expressions
    .replace(/<[^>]*>/g, ' ')                         // tags + attributes
    .replace(/['"`]/g, ' ');                          // quote chars
  const lines = c.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    // Keep lines that read like prose (multiple words), not stray identifiers.
    if (t.length > 4 && /\s/.test(t) && /[A-Za-z]{3}/.test(t) && !/^[\d./]/.test(t)) {
      prose.push({ line: i + 1, text: t });
    }
  }
  return prose;
}

// ---------------------------------------------------------------------------
// Cross-link resolution (Docusaurus NN-slug stripping aware)
// ---------------------------------------------------------------------------

const INTERNAL_SLUG = /^[\/.]/;
const LINK_RE = /\]\(([^)]+)\)/g;

// Does a file path resolve? Handles exact file, index.md dirs, and the
// Docusaurus NN- prefix stripping (01-outbound.md -> slug "outbound").
function fileExistsBySlug(abs) {
  const candidates = [abs + '.md', abs + '.mdx', join(abs, 'index.md')];
  for (const c of candidates) if (existsSync(c)) return true;
  const dir = dirname(abs);
  const want = basename(abs);
  if (!want) return false;
  try {
    for (const f of readdirSync(dir)) {
      const m = f.match(/^(\d{2}-)?(.+?)\.mdx?$/);
      if (m && m[2] === want) return true;
    }
  } catch {
    /* dir not found */
  }
  return false;
}

// Resolve a link target from the source file's location. Links in this repo
// are either site-rooted (/flows/outbound, /docs/foo) or relative to the
// current file (../channels/02-inbound.md).
function linkTargetExists(sourceFile, slug) {
  let s = slug.split('#')[0].split('?')[0].replace(/\.mdx?$/, '');
  if (!s) return false;
  let abs;
  if (s.startsWith('/')) {
    s = s.replace(/^\/+/, '');
    if (!s.startsWith('docs/')) s = 'docs/' + s;
    abs = normalize(join(process.cwd(), s));
  } else {
    abs = normalize(join(dirname(sourceFile), s));
  }
  return fileExistsBySlug(abs);
}

function checkLinks(file, content, report) {
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(content)) !== null) {
    const target = m[1];
    if (!target) continue;
    if (/^https?:\/\//.test(target)) continue; // external
    if (/^(mailto:|tel:|#)/.test(target)) continue; // anchors / mail
    if (INTERNAL_SLUG.test(target)) {
      if (!linkTargetExists(file, target)) {
        report(file, `broken cross-link [${target}]`, 'ERROR');
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Per-file lint
// ---------------------------------------------------------------------------

function lintFile(file, report) {
  const rel = normalize(file);
  const repoRel = normalize(`./${rel.replace(process.cwd(), '').replace(/^\//, '')}`);
  const exempt = false; // no carve-outs: every docs/ page is a ship page and gets the full taste gate
  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    report(file, 'could not read file', 'ERROR');
    return;
  }

  const isJs = /\.(js|jsx)$/.test(file);
  const lines = content.split('\n');
  // JSX files: extract reader-facing string literals + JSX text nodes. Markdown:
  // strip fenced code. Either way the taste rules see only what a reader sees.
  const prose = isJs ? scanJsxProse(content) : scanProse(content, 1);

  if (!exempt) {
    // 1. Em dashes — scan entire file (prose + code): banned everywhere.
    for (const { line, text } of prose) {
      if (EM_DASH.test(text)) {
        report(file, `em dash (—) on line ${line}`, 'ERROR');
      }
    }
    // 2. Banned tokens.
    for (const { line, text } of prose) {
      for (let i = 0; i < BANNED.length; i++) {
        if (BANNED[i].test(text)) {
          report(file, `banned token "${BANNED_LABELS[i]}" on line ${line}`, 'ERROR');
        }
      }
    }
    // 2b. Structural taste: promise-listing anaphora. "The X gives you the Y.
    // The Z gives you the W. The Q gives you the R." in one breath is the
    // AI-marketing cadence that reads as slop even when each item is concrete.
    // Caught by density, not bare count, so a lone "gives you" (legit) or a
    // factual enumeration across a page stays clear. Hard-fail >=3 in a
    // ~400-char window.
    const PROMISE_ANAPHORA = /\b(gives|lets|shows|teaches|walks|takes|hands|offers) you\b/gi;
    {
      // Join prose into one buffer so JSX line-wraps don't hide the cadence.
      const proseText = prose.map((p) => p.text).join(' ');
      const marks = [];
      let pm;
      PROMISE_ANAPHORA.lastIndex = 0;
      while ((pm = PROMISE_ANAPHORA.exec(proseText)) !== null) marks.push(pm.index);
      let maxDensity = 0;
      for (let i = 0; i < marks.length; i++) {
        let n = 1;
        for (let j = i + 1; j < marks.length && marks[j] - marks[i] <= 400; j++) n++;
        if (n > maxDensity) maxDensity = n;
      }
      if (maxDensity >= 3) {
        const snippet = proseText.slice(marks[0], marks[0] + 120).replace(/\s+/g, ' ').trim();
        report(file, `promise-listing anaphora (>=3 "X gives you Y" in one breath): "${snippet}..."`, 'ERROR');
      }
    }
    // 3. MDX bare-<digit build trap (whole file: it is a build breaker).
    lines.forEach((text, i) => {
      MDX_DIGIT_TRAP.lastIndex = 0;
      if (MDX_DIGIT_TRAP.test(text)) {
        report(file, `bare <digit MDX trap (use &lt;) on line ${i + 1}: ${text.trim().slice(0, 60)}`, 'ERROR');
      }
    });
    // 4. "The"-opening headings (markdown headings only).
    if (!isJs) {
      for (const { line, text } of prose) {
        if (THE_OPENING.test(text)) {
          report(file, `heading opens with "The" on line ${line}`, 'ERROR');
        }
      }
    }
    // 5. Internal-team meta leak guard: any docs/ page carrying coordination
    // markers is internal, not content. Hard fail = it can never ship live.
    for (let i = 0; i < INTERNAL_META.length; i++) {
      if (INTERNAL_META[i].test(content)) {
        report(file, `internal-team meta leak detected (marker ${i}) - move out of docs/`, 'ERROR');
      }
    }
  }

  // 6. Cross-links always checked (even exempt files may link).
  checkLinks(file, content, report);

  // 7. Soft: frontmatter completeness (WARN, not blocking). Markdown pages
  // only — JSX page components carry no frontmatter and must not be flagged.
  if (/\.(md|mdx)$/.test(file)) {
    if (!/^title:/m.test(content)) report(file, 'missing frontmatter `title:`', 'WARN');
    if (!/^description:/m.test(content)) report(file, 'missing frontmatter `description:`', 'WARN');
    if (!/^sidebar_position:/m.test(content)) report(file, 'missing frontmatter `sidebar_position:`', 'WARN');
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const files = targetFiles(process.argv.slice(2));
if (!files.length) {
  console.error('lint: no files to check');
  process.exit(2);
}

const rows = [];
const report = (file, msg, level) => rows.push({ file, msg, level });

for (const f of files) lintFile(f, report);

const errors = rows.filter((r) => r.level === 'ERROR');
const warns = rows.filter((r) => r.level === 'WARN');

// Summarize per file
const byFile = new Map();
for (const r of rows) {
  if (!byFile.has(r.file)) byFile.set(r.file, []);
  byFile.get(r.file).push(r);
}
for (const [file, rs] of byFile) {
  const e = rs.filter((r) => r.level === 'ERROR').length;
  const w = rs.filter((r) => r.level === 'WARN').length;
  const badge = e ? 'FAIL' : 'ok';
  console.log(`${badge}  ${file}  (${e} err, ${w} warn)`);
  for (const r of rs) console.log(`     ${r.level}  ${r.msg}`);
}

console.log(`\n${errors.length} hard error(s), ${warns.length} warning(s) across ${files.length} file(s).`);
if (errors.length) {
  console.log('\nlint FAILED — blocking violations present. Fix before commit/deploy.');
  process.exit(1);
}
console.log('\nlint passed.');
