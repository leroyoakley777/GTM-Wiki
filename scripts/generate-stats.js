#!/usr/bin/env node
/**
 * Generate src/pages/stats.json from the live docs/ tree.
 *
 * Computes the REAL page and section counts so the homepage is always
 * accurate — no more hand-edited "98 pages / 16 sections" that drift.
 *
 * Denominator rule (matches the Master Chief audit): a content page is a
 * non-index .md/.mdx file under docs/. index.md hubs are excluded (they are
 * landing pages, not content pages). A section is a top-level directory under
 * docs/ that contains at least one content page.
 *
 * Recent updates come from git log on docs/, grouped by day, so the
 * homepage refreshes itself on every deploy. When git is unavailable
 * (shallow export), the previous updates carry over.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const OUT = path.join(ROOT, 'src', 'pages', 'stats.json');

function walk(dir, base) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      pages.push(...walk(full, base));
    } else if (e.isFile() && /\.mdx?$/.test(e.name) && e.name !== 'index.md') {
      pages.push(path.relative(base, full).replace(/\.mdx?$/, ''));
    }
  }
  return pages;
}

// All content pages across the whole tree (full slug).
const allPages = walk(DOCS, DOCS);

// Sections = top-level dirs under docs/ that hold >=1 content page.
const sectionDirs = fs.readdirSync(DOCS, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .filter((name) => {
    const dir = path.join(DOCS, name);
    return walk(dir, dir).length > 0;
  });

function summarizeDay(subjects) {
  const shipped = subjects.filter((s) => /^docs:/.test(s)).length;
  const ids = [...new Set(subjects.flatMap((s) => s.match(/IB-\d{3}/g) || []))];
  const parts = [];
  if (shipped > 0) {
    parts.push(`shipped ${shipped} reviewed page${shipped === 1 ? '' : 's'}`);
  }
  if (ids.length > 0) {
    parts.push(`advanced ${ids.join(', ')}`);
  }
  if (parts.length === 0) {
    const first = subjects[0].replace(/^(fix|feat|research|chore):\s*/, '');
    parts.push(first.charAt(0).toLowerCase() + first.slice(1));
  }
  const text = parts.join('; ');
  return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

function recentUpdates(prev) {
  try {
    const raw = execFileSync(
      'git',
      ['log', '--date=short', '--pretty=format:%ad%x01%s', '-80', '--', 'docs/'],
      { encoding: 'utf8', cwd: ROOT }
    ).trim();
    if (!raw) return prev;
    const byDate = new Map();
    for (const line of raw.split('\n')) {
      const tab = line.indexOf('\x01');
      if (tab < 0) continue;
      const date = line.slice(0, tab);
      const subject = line.slice(tab + 1);
      if (!byDate.has(date)) byDate.set(date, []);
      byDate.get(date).push(subject);
    }
    const generated = [...byDate.entries()]
      .slice(0, 4)
      .map(([date, subjects]) => ({ date, text: summarizeDay(subjects) }));
    const previousByDate = new Map((prev || []).map((item) => [item.date, item]));
    return generated.map((item) => {
      const previous = previousByDate.get(item.date);
      const generatedCount = item.text.match(/Shipped (\\d+) reviewed pages?/i);
      const previousCount = previous?.text.match(/Shipped (\\d+) reviewed pages?/i);
      if (generatedCount && previousCount && Number(previousCount[1]) > Number(generatedCount[1])) {
        return previous;
      }
      return item;
    });
  } catch {
    return prev;
  }
}

let prev = { updates: [] };
try {
  prev = JSON.parse(fs.readFileSync(OUT, 'utf8'));
} catch {
  prev = { updates: [] };
}

const updates = recentUpdates(Array.isArray(prev.updates) ? prev.updates : []);
if (updates.length === 0 && prev.updates.length > 0) {
  updates.push(...prev.updates);
}

const stats = {
  pages: String(allPages.length),
  sections: String(sectionDirs.length),
  openSource: '100%',
  vendorDecks: '0',
  generatedAt: new Date().toISOString().slice(0, 10),
  updates,
};

fs.writeFileSync(OUT, JSON.stringify(stats, null, 2) + '\n');
console.log(`stats.json: ${allPages.length} pages, ${sectionDirs.length} sections, ${updates.length} updates`);
