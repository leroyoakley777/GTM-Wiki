---
title: "GE Standard: Implementation Plan"
tags: [gtm-wiki, plan, master-chief, fizz, bumble, honey, deploy]
status: active
created: 2026-08-19
last_updated: 2026-08-19
---

# GE Standard: Implementation Plan

Owner: **Master Chief** (accountable for sequencing + verification). Inputs:
`STANDARDS/GE_STANDARD.md` and `RESEARCH/gtm-wiki/GE_AUDIT_PRIORITIZED.md`.

This plan was written after an **independent on-disk re-scan** of `docs/`, not
from the audit's self-report. See "Verified state" below; one error in the
audit was found and fixed here.

---

## Verified state (Master Chief independence check)

Re-ran a structural scan over all 63 `.md` files in `docs/`:

- **19 index hubs** (`index.md` files). **44 content pages** = the
  denominator. Matches the audit's `n=44` exactly.
- Headline counts confirmed byte-for-byte against my scan:
  - Sources section: **27/44**
  - `>=1 [n]` footnote: **3/44**
  - `last_updated` stamp: **9/44**
  - `>=1` code fence: **28/44**
  - Has Sources but **zero** `[n]`: **24/44** (enumerated identically)
- Build break: **resolved, do not re-open.** Master Chief proved it was a
  stale `.docusaurus`/Webpack cache (`npm run clear` → rebuild → exit 0, 166
  pages). Honey retracted her earlier false "content defect" attribution. The
  standing rule: `npm run clear` before chasing content. No code blocker
  exists for shipping.

### Error found and fixed in the audit
`foundations/06-revenue-operations.md` was listed in **both** P0 and P1.
Scan shows it is 2,903 words (above the 2,500 foundation floor) with 1 code
fence (artifact present) and 0 footnotes. That is a **P1 surgical job**
(footnoting + freshness), not a P0 rebuild. Removed from P0 → **P0 = 21**.

### Self-report accuracy flag (internal)
The audit's delivery message claimed "P0 (23)" and "P1 (18)". The file it
produced says P0 = 22 (now 21) and P1 = 24 (18 pure + 6 already in P0/P2).
The message mis-stated its own output. Fizz/Bumble: report the file's
numbers, not round recollections. The plan below uses the file.

---

## Scope (all 44 content pages, deduplicated)

| Tier | Count | Pages |
|------|-------|-------|
| DONE | 1 | flows/03-sales-process-meddpicc (the reference) |
| P3 | 2 | foundations/00-what-is-gtm, foundations/00-gtm-strategy-framework |
| P2 | 2 | agentic/06-agent-vs-human-workflows, agentic/07-building-a-gtm-copilot |
| P0 | 21 | see audit P0 table (after revenue-ops removal) |
| P1-pure | 18 | the 18 surgical-only footnoting pages in audit P1 |

21 + 18 + 2 + 2 + 1 = **44**. Fully accounts for the denominator.

---

## Work streams

Two independent streams (both gated by Bumble + Honey), one rounding stream.

### Stream A: P0 rebuilds (Fizz, 21 pages)
Rebuild each to GE anatomy: footnoted stats, shipped artifact, depth floor,
`last_updated`, clean voice. Sub-order:

1. **Top-level entry points first** (trust at the door):
   `intro.md`, `contributing.md`, `map.md`.
2. **Foundations + agentic load-bearing**:
   `foundations/01-gtm-channels-bullseye`, `02-icp-definition`,
   `03-positioning-and-messaging`, `05-gtm-metrics`, `07-gtm-funnel`,
   `revenue-architecture`; `agentic/00`, `01`, `02`, `03`.
3. **Flagship flows + channels + data**:
   `flows/01-outbound`, `02-agentic-outbound`, `04-buyers-journey`;
   `channels/01-outbound`, `07-events-field`;
   `data/02-market-segmentation`, `04-pricing-as-gtm`, `05-outbound-response-rates`.
4. **Case study**: `case-studies/04-community-led`.

### Stream B: P1 footnoting pass (Bumble-led, 18 pages)
Surgical only: add numbered `[n]` markers to every bare stat, make the
Sources section numbered, register anything missing, add `last_updated`.
**No full rebuild.** This is the cheapest pass; it makes
`check:sources --strict` non-vacuous on 18 more pages. Launch **in parallel
with Stream A** from the start.

The 18 pure targets (from audit P1):
case-studies/01, 02, 03, 05; channels/02, 03, 04, 05, 06, 08, 09;
data/00, 01, 03, 06; playbooks/outbound-from-zero.
(The other 6 P1 pages: channels/01, data/02, data/04, data/05, agentic/06,
agentic/07 get footnoted as part of their P0/P2 work, not here.)

### Stream C: P2/P3 rounding (Fizz, 4 pages)
P2: `agentic/06`, `agentic/07`: add footnoted stats + a 2nd artifact.
P3: `foundations/00-what-is-gtm`, `00-gtm-strategy-framework`: add 2+
footnotes + a worked run-through / 2nd artifact.

---

## Per-page gate (HARD, every page, before commit)

| Gate | Owner | Bar |
|------|-------|-----|
| Source truth | **Bumble** | every `[n]` resolves to a registered `SOURCES_REGISTRY.md` row; `npm run check:sources --strict` exits 0 pre-land |
| Slop | **Honey** | lint 2b + 2b2 = 0; no em dash, no "X is not Y. It is Z.", no vague promise ("where the depth lives"), no "The"-opening heading; rendered-HTML cadence pass |
| Anatomy | **Fizz** | depth floor met for domain, >=1 artifact in-page, `last_updated` current, >=3 `[n]` on stat-bearing pages |
| Deploy verify | **Deploy** | per-page check on the `*.vercel.app` origin; **never** claim "live on gtmwiki.com" until the DNS flip |

A page is GE-READY only when all four are green.

---

## Open owner decisions (Leroy: not my call, surfaced)

1. **Hero humility**: keep the home hero humble until the reference page
   proves the bar? (flagged earlier in thread)
2. **"Exceed" confirmation**: the standard defines exceed = depth + breadth
   + citation discipline + freshness stamp + artifacts-in-page. Awaiting his
   yes so Fizz/Bumble build to the right target.
3. **gtmwiki.com DNS flip** (dotblock, owner boundary): every ship is
   invisible on the brand URL until this flips. Deploy holds the claim.

---

## Acceptance

All 44 content pages clear the GE bar. Re-audit after each stream; target
end state: Sources 44/44, footnotes 44/44, freshness 44/44, artifacts
44/44, depth 44/44. Anything short is tracked GE-debt, not "done."

---

## Handoff (action items)

- **Fizz**: run Stream A (21) + Stream C (4). Build to the GE anatomy.
- **Bumble**: run Stream B (18) + register every source Stream A/C footnotes
  pre-land. `--strict` must exit 0 before any page ships.
- **Honey**: slop-gate every page from A/B/C before it lands. You are the
  human-eye backstop the machine gate cannot see.
- **Deploy**: verify per-page on vercel.app; hold gtmwiki.com claims.
- **Master Chief**: track the 44-page checklist, re-audit counts per stream,
  force self-improvement loops on any missed gate.
