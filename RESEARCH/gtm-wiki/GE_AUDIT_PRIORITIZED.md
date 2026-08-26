---
title: "GE Standard Audit: Prioritized Fix List"
tags: [gtm-wiki, audit, standard, fizz, bumble, priority]
status: active
created: 2026-08-19
last_updated: 2026-08-19
---

# GE Standard Audit: Prioritized Fix List

Audit against the Grokipedia-Exceeding (GE) Standard
(`STANDARDS/GE_STANDARD.md`). Owner: Fizz (depth/build) + Bumble
(truth/data). Set by Leroy 2026-08-19. Master Chief turns this into the
implementation plan; Honey gates the slop on every rebuild.

**Denominator = 44 content pages** (excludes 19 index hubs + 4 phantom
pages). Measured on disk at current HEAD with a structural scan (word count,
Sources section, `[n]` footnotes, code-fence artifacts, `last_updated`
freshness stamp, H2 breadth). Note: the verified-state's "agentic 5" is an
undercount: `agentic/07-building-a-gtm-copilot.md` exists, so agentic is 6.

## Headline counts (the gap at a glance)

| Signal | Met | Out of 44 | The gap |
|--------|-----|-----------|---------|
| Sources section present | 27 | 44 | 17 pages the True gate cannot inspect (pass `--strict` vacuously) |
| Numbered `[n]` footnotes | 3 | 44 | 41 pages have zero footnote markers in prose |
| Freshness stamp `last_updated` | 9 | 44 | 35 pages lack the anatomy freshness key |
| Artifact (≥1 code fence) | 28 | 44 | 16 pages ship no runnable artifact |
| Word floor met | 32 | 44 | 12 pages are below their domain depth floor |

Only 1 page (the reference MEDDPICC) clears the full GE bar today. 2 more
(foundations/00-what-is-gtm, foundations/00-gtm-strategy-framework) are
close (P3).

---

## P0: thin flagship/foundation + top-level pages (fix first)

These read as liabilities where readers start. Fix = rebuild to GE anatomy:
footnote every stat (Bumble registers), ship an artifact, hit the word
floor, add `last_updated`, keep voice clean.

| Page | Words | Fixes needed |
|------|-------|--------------|
| `contributing.md` | 109 | Top-level, near-empty. Rebuild to ≥800 w: how to contribute, editing workflow, gate stack, sign-off rules. Footnote any claim. |
| `intro.md` | 230 | First thing a reader sees. Rebuild to ≥800 w orientation; link the graph; no slop. |
| `map.md` | 1,123 | Top-level. Already de-slopped (2c1c22bc). Needs ≥800-floor depth, more orientation, footnote any claim. |
| `foundations/01-gtm-channels-bullseye.md` | 431 | Flagship foundation, 431 w. Rebuild to ≥2,500 w + 8 H2: ship the bullseye grid artifact, footnoted benchmark, worked example. |
| `foundations/02-icp-definition.md` | 2,563 | Solid length but 0 Sources / 0 footnotes / 0 artifact. Add the 4-layer ICP template artifact + footnoted stats. |
| `foundations/03-positioning-and-messaging.md` | 2,714 | 0 Sources / 0 footnotes / 0 artifact / no math. Ship the messaging canvas + footnoted positioning stats. |
| `foundations/05-gtm-metrics.md` | 3,510 | 0 footnotes / 0 artifact despite 8 H2. Footnoted metrics table + worked example. |
| `foundations/07-gtm-funnel.md` | 2,858 | 0 Sources / 0 footnotes / 0 artifact. Footnoted funnel + worked conversion math. |
| `foundations/revenue-architecture.md` | 1,145 | Thin for a foundation. Rebuild to ≥2,500 w; 0 footnotes. |
| `data/02-market-segmentation.md` | 1,128 | Sources yes, but 0 footnotes / 0 artifact / below floor. |
| `data/04-pricing-as-gtm.md` | 993 | Below floor; 0 footnotes / 0 artifact. |
| `channels/01-outbound.md` | 1,022 | Sources yes, 0 footnotes / 0 artifact, below floor. Footnoted funnel + template. |
| `channels/07-events-field.md` | 3,594 | 0 Sources / 0 footnotes. Footnoted benchmark + event checklist artifact. |
| `agentic/00-agentic-gtm-overview.md` | 2,191 | Freshness yes, but 0 Sources / 0 footnotes / 0 artifact. |
| `agentic/01-agentic-stack.md` | 1,719 | 0 Sources / 0 footnotes / 0 artifact. |
| `agentic/02-agentic-outbound.md` | 2,058 | 0 Sources / 0 footnotes / 0 artifact. |
| `agentic/03-guardrails-and-measurement.md` | 2,368 | 0 Sources / 0 footnotes / 0 artifact. |
| `flows/01-outbound.md` | 4,121 | Flagship, 4,371-w ceiling met, but 0 Sources / 0 footnotes / 0 freshness. Footnoted + registered. |
| `flows/02-agentic-outbound.md` | 3,878 | 0 Sources / 0 footnotes / 0 freshness despite 4 code fences. |
| `flows/04-buyers-journey.md` | 4,272 | 0 Sources / 0 footnotes / 0 freshness. |
| `case-studies/04-community-led.md` | 7,436 | Long, but 0 footnotes / 0 freshness / 0 artifact. Footnote the growth stats. |
| `data/05-outbound-response-rates.md` | 2,039 | Below floor; 0 footnotes despite the whole page being numbers. |

## P1: footnoting pass (24 pages have a Sources section but zero `[n]`)

These are the cheapest win: the gate already sees the source; the reader
cannot link it. Fold every bare stat into a numbered `[n]` footnote, make
the Sources section numbered, register anything missing (Bumble), and the
True gate becomes non-vacuous everywhere. Does not require a full rebuild:
surgical. 6 of the 24 are already captured in P0/P2 (channels/01-outbound,
data/02, data/04, data/05, agentic/06, agentic/07); the 18 below are the
pure footnoting targets. Pages (words, current code-fence count):

`case-studies/02-abm` (3,491, 2), `03-outbound` (4,006, 1),
`01-product-led` (4,896, 3), `05-referral-viral` (6,628, 2),
`channels/02-inbound` (4,930, 1), `03-product-led` (4,010, 1),
`04-partner` (3,616, 1), `05-community-led` (4,415, 1), `06-paid` (5,113, 1),
`08-referral-viral` (6,163, 1), `09-abm` (4,155, 1),
`data/00-conversion-rate-benchmarks` (3,636, 1), `03-funnel` (2,842, 1),
`data/01-gtm-metrics` (2,997, 2), `06-sales-cycle-benchmarks` (2,675, 7),
`playbooks/outbound-from-zero` (3,923, 5), `foundations/06-revenue-operations`
(2,903, 1).

## P2: near-reference (one small gap each)

| Page | Gap |
|------|-----|
| `agentic/06-agent-vs-human-workflows.md` | Sources yes, freshness yes, 1 code fence; add footnoted stats + a 2nd artifact. |
| `agentic/07-building-a-gtm-copilot.md` | Sources yes, freshness yes, 1 fence; add footnoted stats + worked example. |

## P3: already-clean (minor rounding)

| Page | Gap |
|------|-----|
| `foundations/00-what-is-gtm.md` | 1 footnote, 1 fence, freshness yes. Add 2+ more footnoted stats + a second artifact. |
| `foundations/00-gtm-strategy-framework.md` | 3 footnotes, 1 fence, freshness yes. Add a worked run-through. |

## DONE: the reference (the bar is met here)

| Page | Notes |
|------|-------|
| `flows/03-sales-process-meddpicc.md` | 4,371 w, 14 H2, 3 footnotes, 6 code fences, freshness yes, 12/12 depth. The model every page is measured against. |

---

## Priority rationale

1. **P0 first** because a thin flagship or top-level page actively costs
   trust at the entry points of the topic graph, the exact opposite of
   Leroy's "everything not true/tasteful/insightful is a liability."
2. **P1 is the highest-value cheap pass**: 24 pages go from
   gate-invisible to gate-visible with surgical footnoting, no full rebuild.
3. **P2/P3** close the last few near-clean pages.

## Handoff

- **Fizz:** owns the depth/build rebuilds (P0 flagship/foundation/top-level)
  and the P1 footnoting pass, per the fan-out batches.
- **Bumble:** registers every source each rebuild footnotes, pre-landed so
  `check:sources --strict` passes. Every new footnote must resolve to a
  registry row before the page ships.
- **Master Chief:** turns this into the ordered implementation plan.
- **Honey:** gates every rebuilt page against the slop list before it ships.
- **Deploy:** verifies per-page on the vercel.app origin; holds
  "live on gtm-wiki-nu.vercel.app" claims until the DNS flip.
