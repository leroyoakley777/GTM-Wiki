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
 */
const fs = require('fs');
const path = require('path');

const DOCS = path.join(__dirname, '..', 'docs');

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

const stats = {
  pages: String(allPages.length),
  sections: String(sectionDirs.length),
  openSource: '100%',
  vendorDecks: '0',
  generatedAt: new Date().toISOString().slice(0, 10),
};

const out = path.join(__dirname, '..', 'src', 'pages', 'stats.json');
fs.writeFileSync(out, JSON.stringify(stats, null, 2) + '\n');
console.log(`stats.json: ${allPages.length} pages, ${sectionDirs.length} sections`);
