---
title: "The Grokipedia-Exceeding Standard (GE Standard)"
tags: [standard, grokipedia, quality, depth, breadth, fizz, bumble]
status: active
created: 2026-08-19
last_updated: 2026-08-19
---

# The Grokipedia-Exceeding Standard (GE Standard)

**Owner:** Fizz (depth/build) + Bumble (truth/data). Set by Leroy
(2026-08-19): "create a new standard to meet or exceed that of grokipedia
in terms of quality and depth and breadth per page."

**The bar to exceed:** Grokipedia's `Agent-led growth` page
(<https://grokipedia.com/page/Agent-led_growth>), measured on disk: ~53K
clean chars, 10+ deep sections (definition, history, mechanisms, forecasts,
ethics, references), and **36 hyperlinked `[n]` footnotes** all resolving to
a numbered Sources list. That is the citation discipline and breadth we have
to beat.

**Our standing moat grokipedia does not have:** artifacts shipped *in* the
page, not summarized. Grokipedia describes the motion; we publish the copy,
the template, the worked math with a named base, and the agentic SOP/prompt
that runs it. The GE standard keeps that moat and adds grokipedia-scale
depth and breadth to every page.

---

## The definition of "exceed"

A page exceeds grokipedia when it beats it on **all four axes**:

1. **Depth**  -  as many words and worked sections as the topic needs; the
   reference `Agent-led growth` page sets the floor for a flagship topic.
2. **Breadth**  -  covers the variants, not one path: history, comparison,
   mechanism, failure modes, segment/maturity differences, references.
3. **Citation discipline**  -  every named+dated stat carries a numbered
   `[n]` footnote resolving to a Sources section whose URLs are registered
   in SOURCES_REGISTRY.md. Grokipedia has 36; we must be at least as
   disciplined on every page that carries figures.
4. **Artifacts in the page**  -  the moat they lack. The template, the math,
   the SOP, the prompt: shown, runnable, not described.

Depth alone is not the bar (a 10k-word page with bare stats is not
exceeding). Citation discipline alone is not the bar (grokipedia has it).
The GE standard is the intersection: deep, broad, footnoted, AND artifact-
bearing.

---

## The GE page anatomy (every page, in order)

1. **Definition**  -  what the topic is, one concrete sentence.
2. **Why it matters**  -  the stakes, named, not throat-clearing.
3. **Depth sections**  -  the mechanism broken into parts, each taught to the
   point the reader can act. As many as the topic needs, never padded.
4. **Breadth sections**  -  variants: by segment, stage, and maturity; the
   comparison to adjacent topics; the failure modes and how to fix them.
5. **The artifact**  -  shown in the page, not summarized: template, grid,
   deck skeleton, worked deal with arithmetic on a named base.
6. **Named + dated stats, footnoted**  -  every figure is a numbered `[n]`
   marker tied to a Sources section; every source registered. No bare stat.
7. **Agentic layer**  -  where an agent can operate the motion, ship the
   reusable SOP/prompt. (The `Agent-led growth` page has zero of these; we
   do.)
8. **Run it today**  -  one section an operator can execute now.
9. **Sources**  -  numbered list, `[Name](url)`, every URL registered.
10. **Freshness stamp**  -  `last_updated: <date>` in frontmatter (the `_`
    form, the anatomy key). A stale source is replaced and the replacement dated.

## The measurable gate per page (the "exceeds grokipedia" bar)

Every content page must clear all of these, or it is not GE-ready:

- **Sources section present** with `[n]` markers in the prose that resolve
  to it. Reference target: at least one footnote per named stat, and at
  least **3 `[n]` footnotes** on any page that carries benchmark figures.
  The `Agent-led growth` page carries 36; our floor is per-page substance,
  not a fixed count, but a page with zero footnotes does not exceed it.
- **`check:sources --strict` exits 0**  -  no unregistered citation. (True
  gate; Bumble registers every source pre-landing.)
- **At least one artifact in-page** (code-fence template, grid, worked math
  with a named base, SOP, or prompt)  -  the moat grokipedia lacks. A page
  with zero code fences and zero worked arithmetic does not exceed it.
- **Freshness stamp** `last_updated` present and current.
- **Depth floor** scaled to topic weight (see below).
- **No AI slop** (Honey gates): zero banned words/patterns, zero
  promise-listing, zero two-fragment "X is not Y. It is Z." tells, zero
  em dashes, zero "The"-opening headings.

## Depth floor by domain (words + sections)

Topic weight sets the floor; a thin page does not exceed grokipedia even if
its prose is clean.

| Domain | Word floor | H2 sections | Why |
|--------|-----------|-------------|-----|
| flows/ (flagship motion) | 4,000 | 10 | The reference (MEDDPICC, 4,371 w / 14 H2) is the model. A flagship motion page below it is not exceeding. |
| foundations/ (load-bearing) | 2,500 | 8 | Concepts the whole wiki builds on. |
| case-studies/ | 3,500 | 12 | Worked examples are the proof; depth here is the moat. |
| channels/ | 3,000 | 12 | Each channel is a full motion. |
| data/ | 2,000 | 8 | Benchmark pages: citation discipline is everything. |
| agentic/ | 2,000 | 8 | Should already carry the agentic layer. |
| playbooks/ | 3,500 | 10 | Step-by-step executable. |
| top-level (intro/map/contributing) | 800 | 4 | Orientation, not depth  -  but still footnoted if they cite. |

A page below its floor is GE-debt, not GE-complete, no matter how clean the
voice.

## The audit (Fizz + Bumble, 2026-08-19)

Full tiered list with per-page recommended fixes:
`RESEARCH/gtm-wiki/GE_AUDIT_PRIORITIZED.md`. Counts at current HEAD:

- **n = 44** content pages (excludes 19 index hubs + 4 phantom pages). The
  earlier "43" undercounted agentic (5 → 6: `07-building-a-gtm-copilot.md`
  exists).
- Sources section: 27/44 have one; 17 do not (the True gate cannot check
  them  -  they pass `--strict` vacuously).
- Numbered `[n]` footnotes: only **3/44** pages carry any (the reference
  MEDDPICC, foundations/00-what-is-gtm, foundations/00-gtm-strategy-
  framework). 41/44 have zero footnotes  -  the citation moat is not met
  anywhere outside the reference.
- Freshness stamp `last_updated`: 9/44.
- Artifact (≥1 code fence): 28/44; 16 have none.
- Depth: 12/44 below their domain word floor.

## Priority: what to fix first

1. **P0  -  thin + unfootnoted flagship/foundation pages** (they read as
   liabilities at the top of the topic graph): foundations/01-channels-
   bullseye (431 w), 02-icp-definition, 03-positioning, 05-gtm-metrics,
   07-gtm-funnel, revenue-architecture, data/02, data/04-pricing-as-gtm,
   channels/01-outbound, channels/07-events-field.
2. **P0  -  top-level orientation**: intro.md (230 w), map.md, contributing.md
   (109 w). These are the first thing a reader sees; thin + sloppy here
   costs trust before any content page is read.
3. **P1  -  footnoting pass across the 24 pages that have a Sources section
   but zero `[n]` markers.** The gate can see them; the reader cannot link
   them. Fold every bare stat into a numbered footnote and register.
4. **P2  -  the two near-reference pages** (agentic/06, agentic/07): one
   small structural gap each, cheap to clear.
5. **P3  -  the two already-clean pages** (foundations/00-what-is-gtm,
   foundations/00-gtm-strategy-framework): minor depth/artifact rounding.

See `GE_AUDIT_PRIORITIZED.md` for the row-by-row list.
