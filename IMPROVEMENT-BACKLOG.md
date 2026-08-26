# Improvement Backlog

Prioritized list of gaps vs. best-in-world bar (Gold Ship Standard). Each item includes effort (Low/Medium/High), impact (Low/Medium/High), and the doc/standard it touches.

## 🔴 High Impact, Low Effort (Quick Wins)

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| IB-001 | Add missing `status: active` frontmatter to pages | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| IB-002 | Add missing `tags` frontmatter to pages | Low | High | Foundations, Agentic, Channels, Data, Flows, Playbooks, Skills |
| IB-003 | Add variant/maturity dimension section (by segment\|stage\|maturity\|variant) to agentic, channels, data, foundations, playbooks | Medium | High | Agentic (00,01,02,03), Channels (04-partner), Data (00,02,04,05), Foundations (03,07, revenue-architecture), Playbooks (outbound-from-zero) |
| IB-004 | Add failure-modes section (fail/when it breaks/pitfall/risk/objection) to data/04-pricing-as-gtm.md and foundations/revenue-architecture.md | Low | High | Data/04-pricing-as-gtm.md, Foundations/revenue-architecture.md |
| IB-005 | Add worked math with named base to channels/03-product-led.md, flows/02-agentic-outbound.md, flows/04-buyers-journey.md | Medium | High | Channels/03-product-led.md, Flows/02-agentic-outbound.md, Flows/04-buyers-journey.md |
| IB-006 | Add named+dated source refs (True proxy: 20xx year + citation) to foundations/03-positioning-and-messaging.md | Low | High | Foundations/03-positioning-and-messaging.md |

## 🟡 Medium Impact, Medium Effort

| ID | Issue | Effort | Impact | Touches |
|----|-------|--------|--------|---------|
| IB-007 | Resolve scan-slop candidates: uncited dated-stat statements (source + 20xx + %/$, no [n]) | Medium | Medium | Multiple docs (see scan-slop output) |
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