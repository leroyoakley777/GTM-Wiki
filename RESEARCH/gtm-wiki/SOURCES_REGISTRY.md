---
title: "GTM Wiki Source Registry: Vetted Sources (True Gate)"
tags: [gtm-wiki, sources, registry, true-gate, citations]
status: active
created: 2026-08-17
last-updated: 2026-08-17
---

# GTM Wiki Source Registry (True Gate)

The **canonical list of sources the wiki is allowed to cite.** Every citation in
every page must resolve to a row here (source name + as-of date + the claim it
supports). A citation not in this registry **fails the build** (fabrication is
structurally uncommittable, not caught by an auditor later.

**Owner:** Bumble (I vet sources). **Wired into:** Fizz's L1/L2 (when it lands).

## Rules
1. A page may only cite a source that has a row in this registry.
2. Every row names the **as-of date** (when the underlying data was published).
3. Every row lists the **claims it supports** so a citation can be checked against
   the claim, not just the name.
4. Adding a source is a **logged registry edit** (reviewed), not a silent change (
   parallel to the topic-graph rule in Gold Standard §2.
5. Sources here are seeded from `RESEARCH/gtm-wiki/*.md` (where I hold the
   numbers) plus the live book-grade pages. If a number circulates in-thread but
   is NOT here, it FAILS the registry by design.

## Sources

### Benchmark / data vendors (numbers with dated bases)

| # | Source | As-of | Key claims it supports | Backing |
|---|--------|-------|------------------------|---------|
| 1 | SalesHive | 2025 | Blended B2B cold reply 5.8% (down from 6.8% 2023); B2B SaaS 3–8% | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 2 | Woodpecker | 2026 | Cold email reply avg 3.43%; good/excellent 5–10%/10%+ | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 3 | Focus Digital (via Martal) | 2026 | Cold email → deal ~0.2% (≈1 per 500 emails) | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 4 | Infraforge (via Martal) | 2026 | 2024 cold reply 5.1%, down from ~7% | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 5 | OptifAI | 2026 | Sales velocity $8,219/day; LTV:CAC 3.2:1; open rates cold/warm/cust 16.5/27.5/37.5%; NRR by ACV; SDR cost | GTM_METRICS + OUTBOUND + ROLES |
| 6 | DigitalApplied | 2026 | CAC self-serve $702 / sales-led $11,400; payback 12mo (was 18–24); LTV:CAC floor 3:1 | GTM_METRICS_BENCHMARKS.md |
| 7 | RepVue (Q4 2024) / Forrester | Q4 2024 | Quota attainment avg ~43–47% | GTM_METRICS + ROLES |
| 8 | SalesMotion | 2026 | Win rates ~21% all / ~29% qualified / ~22% SaaS; 31% SMB vs 15% enterprise; ABM 45% vs 18% non-ABM | GTM_METRICS + live ABM page |
| 9 | getSpike SaaS Marketing Benchmarks | 2026 | Pipeline coverage 3–4x mid / 4–5x ent; pipe-to-spend 5–8x healthy, 10x+ exceptional | GTM_METRICS_BENCHMARKS.md |
| 10 | ChurnZero | 2026 | NRR median ~102% | GTM_METRICS + PRICING |
| 11 | ChartMogul (H1 2024) | H1 2024 | ≥100% NRR companies grew ~48% YoY | GTM_METRICS_BENCHMARKS.md |
| 12 | Janis Zech | n/a | Coverage directional not law (hit quota at 1.8x, miss at 4x) | GTM_METRICS_BENCHMARKS.md |
| 13 | gtm-consult | n/a | Enterprise pipeline coverage 4–5x | GTM_METRICS_BENCHMARKS.md |
| 14 | SalesGenie | 2026 | Cold call connect 2–3%; top SDRs 5–8% meetings | OUTBOUND_RESPONSE_RATES |
| 15 | Belkins (via Autobound) | 2024 | B2B reps hitting quota 27–30% (2024) | OUTBOUND_RESPONSE_RATES |
| 16 | Autobound | 2026 | Multi-channel reply 15–25% (100+ SaaS teams); DMARC enforcement timeline; deliverability fundamentals; warmup ramp | OUTBOUND + COLD_EMAIL |
| 17 | Instantly | 2026 | Google/Yahoo sender reqs; &lt;0.3% complaints; ≥80% inbox placement; bounce/complaint troubleshooting; Microsoft ≥5K msgs/day | COLD_EMAIL + live outbound page |
| 18 | Clay | 2026 | Inbox ceilings (50/day/inbox, 2–3 inboxes/domain, 3–4 domains/console); ≥3wk warmup; verification tools | COLD_EMAIL_DELIVERABILITY.md |
| 19 | PowerDMARC | 2026 | DMARC policy choice (none/quarantine/reject); SPF/DKIM alignment | COLD_EMAIL_DELIVERABILITY.md |
| 20 | LeadHaste | 2026 | Warmup ramp 3wk; keep light warmup running after launch | COLD_EMAIL_DELIVERABILITY.md |
| 21 | Mailreach | 2026 | Fast warmup timeline (days 6–10: 15–25; 11–14: 30–50) | COLD_EMAIL_DELIVERABILITY.md |
| 22 | getFuzzy | 2026 | Linear ramp not hockey-stick (5–10/day/week) | COLD_EMAIL_DELIVERABILITY.md |

### Funnel / conversion-stage benchmarks

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 23 | Ruler Analytics | 2024 | Visitor→Lead 2.6% avg / 4.5% top quartile | CONVERSION_RATE_BENCHMARKS.md |
| 24 | First Page Sage | 2024 | Visitor→Lead 1.4% SMB; MQL→SQL 36–47%; SQL→Opp 36–48%; stage ranges | CONVERSION_RATE_BENCHMARKS.md |
| 25 | Landbase | n/a | Lead→MQL 31% avg / B2B SaaS 39% | CONVERSION_RATE_BENCHMARKS.md |
| 26 | Salesforce State of Sales | 2024 | MQL→SQL 13% (5,500 sales pros, 27 countries) | CONVERSION_RATE_BENCHMARKS.md |
| 27 | thedigitalbloom | 2025 | MQL→SQL 15–21%; MQL→SQL bottleneck | CONVERSION_RATE + GTM_METRICS |
| 28 | Zeliq | n/a | SQL→Opp 30–50%; Opp→Closed-Won 20–35% | CONVERSION_RATE_BENCHMARKS.md |
| 29 | Ebsta / Pavilion | 2021–2024 | SQL→Opp 47%; Opp→Closed-Won 21% avg (down 4–6 pts from 2021) | CONVERSION_RATE + SALES_CYCLE + ROLES |

### ABM / segmentation / strategy

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 30 | SiriusDecisions / Forrester | n/a | 68% higher win rates w/ defined ICP; 30% more marketing revenue | live ABM page |
| 31 | Foundry | n/a | Intent-based ads 220% higher CTR | live ABM page |
| 32 | TheStarrConspiracy | 2025 | Intent-prioritized convert 21.3% vs 8.4%; 71% use intent data | CONVERSION + live ABM page |
| 33 | Spiceworks | n/a | 57% target ≤1,000 ABM accounts | live ABM page |
| 34 | Demand Gen Report | 2020 | 29% focus 101–500 accounts | live ABM page |
| 35 | Lusha | n/a | Avg simultaneous account count 38 | live ABM page |
| 36 | Amplitude | n/a | ABM committees 7–8 people; tier scopes | live ABM page |
| 37 | Demandbase | 2026 | Engaging buying groups 2–3x higher win rates; ABM 101 tiers | live ABM page |
| 38 | Gartner | 2024 | 86% win-rate improvement w/ aligned sales+marketing; 14% pipeline conv; ICP stats | live ABM + REVENUE_OPS |
| 39 | AiSDR cost analysis | 2026 | SDR ~$139,120/year fully loaded (vendor source) | live outbound page |

### Cold-email copy / sequence

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 40 | Mailforge (via Martal) | 2026 | 50–125 word emails earn ~50% higher reply rates | live outbound page + FLOWS |

## Claim-verification status

- ✅ **Seeded from RESEARCH files** (rows 1–39): each row's backing file holds the
  number. These are the ones I can stand behind today.
- 🔶 **Cited in live pages but not yet in my RESEARCH files** (rows 40 + the ABM
  rows pulled from the live page): the numbers render on the live site but I
  have NOT yet moved the source bytes into RESEARCH. These are the next to
  harden (flag before a page's True-gate final pass depends on them).
- ⛔ **FAILS the registry by design:** the TOFU 36%→15% and cost-per-dollar
  .24→.01 numbers circulating in-thread. Not in this registry, not in my
  RESEARCH files. Any page citing them must either get a real source row here
  or drop the claim. This is the system catching the exact class of thing that
  slips past eyeballs.

## Validation

`validate-sources` (when wired into Fizz's L1/L2) cross-checks every
`[Name](url)` citation and every `Source:`-table cell in `docs/` against this
registry. Unregistered citation → build failure.
