# Design POV — GTM Wiki

Written 2026-08-14. This document translates Mitch's quality bar into
concrete, auditable criteria. The word "ELITE" means nothing to an agent.
This is what it means.

## The thesis

The GTM Wiki is the definitive reference manual for go-to-market —
the book every GTM operator keeps on their desk. Not a blog. Not a SaaS
marketing page. Not a docs template. It is what you get when MIT-grade
technical clarity meets heritage-editorial polish.

Two sources of truth:
1. **The reader trusts the source instantly.** Trust comes from
   typographic discipline, editorial restraint, and completeness.
   Nothing decorative. Everything purposeful.
2. **It carries the same design DNA as the flagship property.** Flying
   Tigers Co uses the Heritage American system: cream/parchment
   background, ink text, navy + gold accents, Fraunces serif. The wiki
   shares that DNA. It is part of the same body of work, not an orphan.

## What "ELITE" translates to

| Mitch says | This means | Auditable criterion |
|---|---|---|
| Elite | Typographic discipline | Defined type system: one serif display (Fraunces), one sans body. Body ≥17px, line-height ≥1.7. No default system stack. |
| Stunning | Composition works at every zoom | Generous whitespace, reading rhythm, visual anchors (diagrams, cards, designed tables). No cramped default layout. |
| Beautiful | Color with intent | Heritage palette: cream/parchment bg, ink text, navy/gold accents. No default Docusaurus teal. Dark mode is designed, not inverted. |
| Hermes-Bible-level | Looks designed on purpose | Nothing feels assembled by default. Every surface has an opinion. |
| Complete | Nothing feels like a placeholder | No "coming soon" visible to the public. Every page has title hierarchy, TOC, cross-links, further reading. |

## Measurable bar (pass/fail, audited per page)

1. **Type system**: Fraunces (or equivalent serif) for headings, a
   defined sans for body. Body ≥17px, line-height ≥1.7. Type scale
   documented. PASS = no default font stack on any page.
2. **Color system**: cream/parchment background, ink text, navy + gold
   accents defined and applied. PASS = zero default teal links.
3. **Landing page**: real hero (headline + thesis + entry points), stats,
   explore grid, featured content, Cmd+K search. PASS = Phase 3 checklist
   complete, not default intro page.
4. **Sidebar**: custom icons, designed active/hover states. PASS = no
   default chevrons-only.
5. **Tables**: designed cards or styled tables. PASS = no gray-border
   HTML-table look.
6. **Whitespace**: spacing scale (4/8/12/16/24/32/48/64) applied. PASS =
   content breathes; no cramped text against sidebar.
7. **Dark mode**: intentional palette. PASS = dark mode is designed.
8. **Editorial completeness**: every page has title hierarchy, TOC,
   cross-links, further reading. PASS = no dead ends, no stubs.

## Audit method

Reviewer loads the live URL, screenshots each key page (landing,
foundations index, one content page, dark mode), and scores each
criterion 0 or 1. **Pass = all 1s.** Any 0 = FAIL, named in the review
with the specific page and element. The wiki is not "at bar" until the
full matrix passes.

## What is NOT the bar

- Not a blog aesthetic (casual, image-led).
- Not SaaS marketing (gradients, illustration-heavy, conversion-focused).
- Not "pretty enough for a docs site." Default Docusaurus, no matter how
  clean, fails by definition — it is the baseline we are proving against.

## How this document is used

- The taste reviewer audits against this matrix, not against the word
  "ELITE."
- The wiki builder reads it before any UI work. Design decisions trace
  back to a criterion here.
- Discussion about "are we at bar" = walk the matrix. Numbers, not vibes.
