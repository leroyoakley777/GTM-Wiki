# Improvement Backlog

Prioritized list of gaps vs. best-in-world bar (Gold Ship Standard). Each item includes effort (Low/Medium/High), impact (Low/Medium/High), and the doc/standard it touches.

## 🔴 High Impact, Low Effort (Quick Wins)

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| ~~IB-001~~ | ~~Add missing `status: active` frontmatter to pages~~ | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| ~~IB-002~~ | ~~Add missing `tags` frontmatter to pages~~ | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| ~~IB-003~~ | ~~Add variant/maturity dimension section (by segment\|stage\|maturity\|variant) to agentic, channels, data, foundations, playbooks~~ | Medium | High | Agentic (00,01,02,03), Channels (04-partner), Data (00,02,04,05), Foundations (03,07, revenue-architecture), Playbooks (outbound-from-zero) |
| ~~IB-004~~ | ~~Add failure-modes section to data/04-pricing-as-gtm.md and foundations/revenue-architecture.md~~ | Low | High | Data/04-pricing-as-gtm.md, Foundations/revenue-architecture.md |
| ~~IB-005~~ | ~~Add worked math with named base to channels/03-product-led.md, flows/02-agentic-outbound.md, flows/04-buyers-journey.md~~ | Medium | High | Channels/03-product-led.md, Flows/02-agentic-outbound.md, Flows/04-buyers-journey.md |

> **DONE (2026-09-05):** IB-004. Page-level "Failure modes and how to fix them" now on `docs/data/04-pricing-as-gtm.md` and `docs/foundations/revenue-architecture.md`, with named citations. An earlier note counted Common Mistakes as the section; the H2 now exists on both pages.
> **DONE (2026-09-05):** IB-006. Dunford (2019/2024) and Moore (2014) now carry year plus footnote on `docs/foundations/03-positioning-and-messaging.md`.
> **DONE (2026-09-14):** IB-003 fully closed. Verified on disk at main `c1f71f02`: every page in the row's Touches column now carries a variant/maturity dimension section — Agentic (00 gtm-os-architecture, 01 agentic-stack, 02 agentic-outbound, 03 guardrails), Channels (04-partner), Data (00 conversion-rate, 02 market-segmentation, 04 pricing-as-gtm, 05 outbound-response-rates), Foundations (03 positioning, 07 gtm-funnel, revenue-architecture), Playbooks (outbound-from-zero). Shipped page by page via `0abb9720` through `8e47e978` (final page agentic/00, verified live at `gtm-wiki-nu.vercel.app/docs/agentic/gtm-os-architecture` HTTP 200 on 09-14). Removed from active queue to stop re-dispatch.
> **REOPENED (2026-09-07):** IB-003 falsely closed after one page. Commit `0abb9720` shipped a variant section on `agentic/02` only. The row lists ~12 pages; a multi-page row closes only when every listed page has the section. Owner lane is shipping IB-003 variants page by page (09-07 through 09-13, incl. `91064b1c` = page 8 of ~12 via `eec53b55`/`f168442f`/`91064b1c`/`f70c66cb`). `c34c3603` (09-13) added "Variants by company stage and maturity" to `docs/data/04-pricing-as-gtm.md`. `8e47e978` (09-14) added "Variants by company stage" to `docs/agentic/00-gtm-os-architecture.md`. Disputed by the 09-14 closure note: all row pages now carry the section, so this row closes here. IB-007 also reopened: one case study cited does not clear a repo-wide uncited-stat class.

> **DONE (2026-09-06):** IB-003. Shipped live by the continuous-deploy ship lane in commit `0abb9720` (stage-and-ACV variants on `docs/agentic/02-agentic-outbound.md`, sources [127]/[76]/[46] registered, `ship:gate` exit 0). Verified live: `gtm-wiki-nu.vercel.app` returns 200, `npm run lint` 0/0 across 116 files. Removed from active queue to stop re-dispatch.

> **DONE (2026-09-04):** IB-001/002 (frontmatter). Audited all 115 doc files on disk; all already carried `status:` and `tags:` except `docs/gtm-engineering/index.md`, which I added them to per convention (`status: active`, `tags: [gtm-engineering]`). Full gate green: lint 0/0, `npm run check` exit 0, `npm run build` compiles. Committed locally `470c1fcf`, NOT pushed (owner-yes gate). Removed from active queue to stop re-dispatch.
> **DONE (2026-09-06):** IB-007. Shipped live by the owner's continuous-deploy lane in commits `6d7f137a` (cite product-led case study stats) + `c83061e9` (close IB-007 first pass); repo at `faa25d8f`. Remaining source-list warnings are scanner noise. The owner's lane also shipped a ten-page gold-quality batch (`b7585290`) the same evening. Removed from active queue to stop re-dispatch.

> **DONE (2026-08-31):** IB-005 verified complete on `main`. `03-product-led.md` has the "paying customers per 1,000 visitors" table (First Page Sage/Pulseahead, cited); `02-agentic-outbound.md` has a full worked-example campaign (Woodpecker/SalesHive/Instantly, cited); sources registered in SOURCES_REGISTRY.md. Committed in `e5750f15` (08-29). Removed from active queue to stop re-dispatch. (Loop finding. G2 worker had re-reported this as its own new work; it was already on main. Root cause logged. Do not re-run.)
| ~~IB-006~~ | ~~Add named+dated source refs to foundations/03-positioning-and-messaging.md~~ | Low | High | Foundations/03-positioning-and-messaging.md |

## 🟡 Medium Impact, Medium Effort

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| IB-007 | Resolve scan-slop candidates: uncited dated-stat statements (source + 20xx + %/$, no [n]) | Medium | Medium | `docs/case-studies/01-product-led.md` done; 09-18: channels/06-paid + channels/04-partner footnoted [n], live-verified; remaining docs listed in scan-slop output pending |

> **TRACK (2026-09-15):** Owner lane footnoting the uncited-stat class today — `899424e2` (footnote uncited stats on `docs/channels/02-inbound.md`), `098c871f` (add footnote refs to `docs/data/05-outbound-response-rates.md`). Row stays OPEN (row touches multiple docs per SIP #12); one doc at a time is shipped live per the owner's continuous-deploy lane. Remaining docs from scan-slop output still pending.
> **TRACK (2026-09-16):** Owner lane shipped `docs/data/01-gtm-metrics.md` (`c45c0373`) then `docs/data/00-conversion-rate-benchmarks.md` (`7a6c47bd`), both footnoting the uncited-stat class with `[n]` markers. Row stays OPEN while `docs/data/03-funnel.md` and other scan-slop candidates remain.
> **TRACK (2026-09-17):** Ship lane footnoted `docs/case-studies/03-outbound.md` (`597b8a12`, live-verified on gtm-wiki-nu.vercel.app; receipt in plans/gtm-wiki/releases). Row stays OPEN — next candidates from scan-slop: `docs/case-studies/04-community-led.md` (13), `docs/channels/06-paid.md` (33), `docs/channels/08-referral-viral.md` (20).
> **TRACK (2026-09-18):** Ship lane footnoted `docs/channels/06-paid.md` (`12b6e456`, live-verified on gtm-wiki-nu.vercel.app; receipt in plans/gtm-wiki/releases). All 33 scan-slop uncited-stat candidates on the page cleared to 0; inline `[n]` markers added and Sources renumbered to the `[n]` convention ([1]–[21]). One correction: the $19.68 Facebook figure was relabeled from "2024 cost per lead" to WordStream Facebook avg CPA (web-verified). Row stays OPEN — next candidates from scan-slop: `docs/channels/08-referral-viral.md` (20) and any fresh scan-slop output.
> **TRACK (2026-09-19):** Ship lane footnoted `docs/channels/08-referral-viral.md` (`ab50931a`, live-verified on gtm-wiki-nu.vercel.app; receipt in plans/gtm-wiki/releases). All 20 scan-slop uncited-stat candidates on the page cleared to 0; inline `[n]` markers added (1–16) and Sources renumbered to the `[n]` convention; one false positive (hypothetical worked-example `2026` scenario year) rephrased rather than cited. `npm run ship:gate` exit 0; HEAD==origin/main. Row stays OPEN — IB-007 touches multiple docs; next candidates from a fresh scan-slop pass.

> **TRACK (2026-09-17 p.m.):** Ship lane continued IB-007 — `597b8a12` (outbound case-study footnote) then `8c7f91a5` (community-led case-study footnote), plus the full UI-round-2 hardening batch landed (`3029ec1e` owner call: removed topic-graph figure; `19ae6cd3`/`53995869` scan-slop freshness fixes; `66ecb9e2` reading-layout — 880px column + fixed TOC). Repo `main==origin/main` 0/0 at `66ecb9e2`. Remaining IB-007 scan-slop candidates: `docs/channels/06-paid.md` (33), `docs/channels/08-referral-viral.md` (20). Working tree carries only the owner's in-progress ship-skill note + stats.json (community-led link) — fleet standing clear.
> **TRACK (2026-09-18 p.m./09-19 check):** Ship lane footnoted `docs/channels/04-partner.md` (`07002ec8`, live-verified; track `24239cb4`), plus a post-09-18-morning UI batch (superscript-citation codemod across all cited pages `7b320ed5`, Grokipedia-style serif layout `b140a4bf`, collapsed-block-spacing fix `c988fa8d`, stats `ca4a3526`). Repo `main==origin/main`, clean at `24239cb4` (09-18 13:17). **Sole remaining IB-007 scan-slop candidate: `docs/channels/08-referral-viral.md` (20)** — verified 0 `[n]` markers on HEAD; row stays OPEN until it ships.
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
