#!/usr/bin/env node
/**
 * Generate docs/map.md from the live docs/ tree.
 *
 * Walks docs/, reads each top-level section's index.md frontmatter
 * (title + description) and counts its pages. Emits a markdown table
 * into docs/map.md so the Map page always reflects the real structure.
 *
 * Adding a section to docs/ is all you need to do: it shows up on the
 * next build with no manual map editing.
 */
const fs = require('fs');
const path = require('path');

const DOCS = path.resolve(__dirname, '..', 'docs');
const OUT = path.resolve(__dirname, '..', 'docs', 'map.md');

// Intended reading order (matches the sidebar / homepage grid).
const ORDER = [
  'foundations', 'channels', 'playbooks', 'agentic', 'roles', 'skills',
  'tools', 'data', 'gtm-engineering', 'flows', 'case-studies', 'process',
  'culture', 'enablement', 'product-marketing', 'recruiting', 'glossary',
  'resources', 'support',
];

function parseFrontmatter(file) {
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return fm;
}

function countPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let n = 0;
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md') {
      n += 1;
    } else if (e.isDirectory() && e.name !== 'RESEARCH') {
      const sub = path.join(dir, e.name);
      if (fs.existsSync(path.join(sub, 'index.md'))) {
        n += 1;
      } else {
        n += countPages(sub);
      }
    }
  }
  return n;
}

function sectionLanding(dir, name) {
  // Prefer the section index page; fall back to the first real page so the
  // link is never broken even for sections without an index.md.
  if (fs.existsSync(path.join(dir, 'index.md'))) return `/docs/${name}`;
  const first = fs.readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .sort()[0];
  if (first) {
    // Docusaurus strips the NN- prefix and .md from the slug.
    return `/docs/${name}/${first.name.replace(/^\d+-/, '').replace(/\.md$/, '')}`;
  }
  return `/docs/${name}`;
}

const sections = [];
const collect = (dir, name) => {
  const index = path.join(dir, 'index.md');
  const fm = fs.existsSync(index) ? parseFrontmatter(index) : {};
  const description = (fm.description || '').replace(/^["']|["']$/g, '');
  // Skip placeholder stub sections (no real content) so the map only shows
  // what is actually published and navigable.
  if (/placeholder/i.test(description)) return;
  sections.push({
    slug: name,
    title: fm.title || name.charAt(0).toUpperCase() + name.slice(1),
    description: description || `The ${name} section of the wiki.`,
    pages: Math.max(1, countPages(dir)),
    path: sectionLanding(dir, name),
  });
};

for (const name of ORDER) {
  const dir = path.join(DOCS, name);
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) collect(dir, name);
}

const seen = new Set(sections.map((s) => s.slug));
for (const e of fs.readdirSync(DOCS, { withFileTypes: true })) {
  if (e.isDirectory() && !seen.has(e.name) && e.name !== 'RESEARCH') {
    collect(path.join(DOCS, e.name), e.name);
  }
}

const totalPages = sections.reduce((a, s) => a + s.pages, 0);
const date = new Date().toISOString().slice(0, 10);

const rows = sections
  .map((s, i) => `| ${String(i + 1).padStart(2, '0')} | [${s.title}](${s.path}) | ${s.pages} | ${s.description} |`)
  .join('\n');

const md = `---
sidebar_position: 2
title: Map
description: "The whole wiki in one view: every section, its pages, and what it covers."
status: active
tags: ['map', 'gtm']
---

# Map

The whole wiki in one view. This page is generated from the docs tree, so it always matches what is published. Add a section to \`docs/\` and it appears here on the next build.

| # | Section | Pages | What it covers |
|---|---------|-------|----------------|
${rows}

**${sections.length} sections · ${totalPages} pages · generated ${date}**
`;

fs.writeFileSync(OUT, md);
console.log(`docs/map.md: ${sections.length} sections, ${totalPages} pages`);
