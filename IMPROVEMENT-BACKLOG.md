# Improvement Backlog

Prioritized list of gaps vs. best-in-world bar (Gold Ship Standard). Each item includes effort (Low/Medium/High), impact (Low/Medium/High), and the doc/standard it touches.

## 🔴 High Impact, Low Effort (Quick Wins)

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| ~~IB-001~~ | ~~Add missing `status: active` frontmatter to pages~~ | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| ~~IB-002~~ | ~~Add missing `tags` frontmatter to pages~~ | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| IB-003 | Add variant/maturity dimension section (by segment|stage|maturity|variant) to agentic, channels, data, foundations, playbooks | Medium | High | Agentic (00,01,02,03), Channels (04-partner), Data (00,02,04,05), Foundations (03,07, revenue-architecture), Playbooks (outbound-from-zero) |
| ~~IB-004~~ | ~~Add failure-modes section to data/04-pricing-as-gtm.md and foundations/revenue-architecture.md~~ | Low | High | Data/04-pricing-as-gtm.md, Foundations/revenue-architecture.md |
| ~~IB-005~~ | ~~Add worked math with named base to channels/03-product-led.md, flows/02-agentic-outbound.md, flows/04-buyers-journey.md~~ | Medium | High | Channels/03-product-led.md, Flows/02-agentic-outbound.md, Flows/04-buyers-journey.md |

> **DONE (2026-09-05):** IB-004. Page-level "Failure modes and how to fix them" now on `docs/data/04-pricing-as-gtm.md` and `docs/foundations/revenue-architecture.md`, with named citations. An earlier note counted Common Mistakes as the section; the H2 now exists on both pages.
> **DONE (2026-09-05):** IB-006. Dunford (2019/2024) and Moore (2014) now carry year plus footnote on `docs/foundations/03-positioning-and-messaging.md`.
> **REOPENED (2026-09-07):** IB-003 falsely closed after one page. Commit `0abb9720` shipped a variant section on `agentic/02` only. The row lists ~12 pages; a multi-page row closes only when every listed page has the section. IB-007 also reopened: one case study cited does not clear a repo-wide uncited-stat class.

> **DONE (2026-09-06):** IB-003. Shipped live by the continuous-deploy ship lane in commit `0abb9720` (stage-and-ACV variants on `docs/agentic/02-agentic-outbound.md`, sources [127]/[76]/[46] registered, `ship:gate` exit 0). Verified live: `gtm-wiki-nu.vercel.app` returns 200, `npm run lint` 0/0 across 116 files. Removed from active queue to stop re-dispatch.

> **DONE (2026-09-04):** IB-001/002 (frontmatter). Audited all 115 doc files on disk; all already carried `status:` and `tags:` except `docs/gtm-engineering/index.md`, which I added them to per convention (`status: active`, `tags: [gtm-engineering]`). Full gate green: lint 0/0, `npm run check` exit 0, `npm run build` compiles. Committed locally `470c1fcf`, NOT pushed (owner-yes gate). Removed from active queue to stop re-dispatch.
> **DONE (2026-09-06):** IB-007. Shipped live by the owner's continuous-deploy lane in commits `6d7f137a` (cite product-led case study stats) + `c83061e9` (close IB-007 first pass); repo at `faa25d8f`. Remaining source-list warnings are scanner noise. The owner's lane also shipped a ten-page gold-quality batch (`b7585290`) the same evening. Removed from active queue to stop re-dispatch.

> **DONE (2026-08-31):** IB-005 verified complete on `main`. `03-product-led.md` has the "paying customers per 1,000 visitors" table (First Page Sage/Pulseahead, cited); `02-agentic-outbound.md` has a full worked-example campaign (Woodpecker/SalesHive/Instantly, cited); sources registered in SOURCES_REGISTRY.md. Committed in `e5750f15` (08-29). Removed from active queue to stop re-dispatch. (Loop finding. G2 worker had re-reported this as its own new work; it was already on main. Root cause logged. Do not re-run.)
| ~~IB-006~~ | ~~Add named+dated source refs to foundations/03-positioning-and-messaging.md~~ | Low | High | Foundations/03-positioning-and-messaging.md |

## 🟡 Medium Impact, Medium Effort

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| IB-007 | Resolve scan-slop candidates: uncited dated-stat statements (source + 20xx + %/$, no [n]) | Medium | Medium | `docs/case-studies/01-product-led.md` done; remaining docs listed in scan-slop output pending |
| IB-008 | Resolve scan-slop candidates: two-fragment contrast \"X is not Y. It is Z.\" | Medium | Medium | Multiple docs (see scan-slop output) |
| IB-009 | Ensure every paragraph earns its place (Gate 4: Engaging) – remove filler, throat-clearing intros | Medium | Medium | All pages |
| IB-010 | Ensure headings never open with \"The\" and name the concrete thing (Gate 2: Tasteful) | Low | Medium | All pages |

## 🔵 Lower Impact, Higher Effort (Strategic)

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| IB-011 | Expand topic graph with depth-gated, source-verified pages (ongoing) | High | High | New pages in foundations/, flows/, playbooks/, etc. |
| IB-012 | Improve agentic layer (SOP/prompt) visibility on more pages | Medium | Medium | Agentic, Flows, Playbooks |
| IB-013 | Measure and optimize rendered output (images/SVG/boxes, no overflow/clipping) | Low | Low | All pages with visuals |
| IB-014 | Ensure cross-links resolve (no orphan pages, no broken links) | Low | Low | All pages |

## Notes
- Effort: Low (<1 hour), Medium (1-4 hours), High (>4 hours or coordination)
- Impact: based on contribution to Gold Ship Standard gates (True, Tasteful, Insightful, Engaging)
- The known depth items (variant/maturity + failure-modes) cover ~24 pages as reported by check-depth.
- Scan-slop candidates (224) are warnings, not hard gate failures, but improving them raises taste and truth bar.
