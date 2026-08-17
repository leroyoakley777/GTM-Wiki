---
sidebar_position: 3
title: Funnel Benchmarks
description: How the funnel leaks stage by stage — MQL→SQL as the biggest gate, multiplicative leakage math, and how to work a funnel as a system.
---

# Funnel Benchmarks

**The funnel as a system, not a table of stages.** This page pairs with the [GTM Funnel](../foundations/07-gtm-funnel.md) foundation — that page defines the stages and how to build your funnel; this page gives you the *numbers* on how much leaks at each stage and how leakage compounds.

The companion [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks) page carries the stage-by-stage rates with their named bases. This page treats the funnel as a *production line* and shows why the biggest leak dominates everything.

---

## One Number That Matters Most

**MQL → SQL (~13–15%) is the biggest, most consistent leak in B2B SaaS — and the single most important conversion gate.**

It is where marketing's leads either become actual pipeline or quietly die. Improving MQL→SQL from 13% to 20% moves more pipeline than any top-of-funnel volume play — because every lead that clears this gate is worth multiples more than the one that enters it. If you fix nothing else, fix qualification.

---

## Funnel, Stage by Stage

### SalesHive 2026

| Stage transition | Typical rate |
|------------------|--------------|
| Visitor → Lead | **2.3%** avg (median website ~2.9%) |
| Lead → MQL | **31%** |
| MQL → SQL | **13%** — the single most important gate |
| SQL → Opportunity | **30–59%** |
| Opportunity → Close | **22–30%** |
| Cold call → meeting | **~2.5%** |

Source: SalesHive B2B Digital Marketing Benchmarks (2026).

### Alternative stage definitions (MarketJoy 2024–25)

Different teams draw stage boundaries differently — that is why ranges beat single points:

| Stage | Range | MarketJoy benchmark |
|-------|-------|---------------------|
| Lead → MQL | 20–25% | 22% |
| MQL → SQL | 12–18% | 15% |
| SQL → Opportunity | 10–12% | 11% |
| Opportunity → Closed | 6–9% | 7% |

Source: MarketJoy B2B Sales Pipeline Conversion Rates (2024–25).

---

## Insight That Matters: Leakage Multiplies

Funnel math is multiplicative. A small leak at one stage compounds through every stage below it. SalesHive's framing: **it typically takes ~100 marketing leads to produce ~10 opportunities and ~2 deals** (10% lead-to-opp × 20% win rate). Kissmetrics' midpoint model shows ~80% drops at consecutive stages.

Three implications:

- **MQL → SQL is the biggest, most consistent leak** (~13–15%). It is where marketing's leads either become actual pipeline or quietly die.
- **Fix the biggest leak first.** Improving MQL→SQL from 13% to 20% moves more pipeline than any top-of-funnel volume play.
- **Strong teams beat the average 2–3x at the gate.** Teams with behavioral scoring and tight ICP coverage hit 30–40% MQL→SQL. Below 10% is almost always misaligned ICP definitions or low-intent lead generation — not lazy SDRs.

---

## How to Work a Funnel

1. **Track stage-by-stage per source.** Visitor→lead→MQL→SQL→opp→close for each channel. Headline metrics hide where the leak is — this is how you tell whether the problem is targeting, landing pages, lead scoring, or SDR follow-up.
2. **Diagnose the largest absolute drop, not the most striking percentage.** An 80% drop at a stage with 10,000 in is a bigger loss than a 99% drop at a stage with 50 in.
3. **Sub-5-minute lead routing is the highest-ROI change most teams can make.** Speed-to-lead converts better than any messaging tweak.
4. **Set ranges before the quarter starts.** Agree the stage math with sales up front ("100 leads → 10 opps → 2 deals") so nobody is surprised at the pipeline review.
5. **Benchmark against your peers and stage, not generic numbers.** The ranges vary sharply by industry, ACV, and GTM motion.

---

## How to Read These Numbers

1. **The two sources disagree by stage — that is the point.** MarketJoy shows SQL→Opp at 10–12%, SalesHive at 30–59%, and the conversion note at 30–48%. Teams define "SQL" and "opportunity" differently. Present ranges with named bases, never a single "the" number.
2. **Bottom-funnel converts better than intuition suggests.** Opportunity → Close is 20–35% (FirstPageSage/CausalFunnel). The leak is not at the bottom — it is upstream in qualification.
3. **Every stage rate multiplies.** Chasing a 1-point gain at the stage with the most volume usually beats a 10-point gain at a near-empty stage.

---

## Pattern Behind the Numbers

Median B2B funnels are not leaky at the bottom — they are leaky at the qualification gate. Teams pour volume into the top, under-invest in the scoring, routing, and speed that decide whether a lead becomes pipeline, and then wonder why pipeline is thin. The companies that win treat the funnel as a production line: measure every transition, find the biggest absolute drop, fix it, compound. Fix MQL→SQL first.

---

## Sources

- [SalesHive, B2B Digital Marketing Benchmarks for Lead Gen (2026)](https://saleshive.com/blog/b2b-lead-benchmarks-digital-marketing-gen) — stage-by-stage rates.
- [SalesHive, Understanding the B2B Sales Funnel](https://saleshive.com/blog/understanding-the-b2b-sales-funnel) — MQL→SQL ~15%, 100 leads → 10 opps → 2 deals.
- [MarketJoy, B2B Sales Pipeline Conversion Rates (2024–25)](https://marketjoy.com/b2b-sales-pipeline-conversion-rates-marketjoy-data/) — alternative stage definitions.
- [First Page Sage, B2B SaaS Funnel Conversion Benchmarks](https://firstpagesage.com/seo-blog/b2b-saas-funnel-conversion-benchmarks-fc/) — opp→close 20–35%.
- [First Page Sage, Sales Funnel Conversion Rate Benchmarks (2026)](https://firstpagesage.com/seo-blog/sales-funnel-conversion-rate-benchmarks-report/) — by industry.
- [Kissmetrics, Conversion Rate Benchmarks by Funnel Stage](https://kissmetrics.io/blog/conversion-rate-benchmarks) — multiplicative drops.
- [CausalFunnel, 2026 B2B SaaS Funnel Conversion Benchmarks](https://www.causalfunnel.com/blog/b2b-saas-funnel-conversion-benchmarks-2026-data-insights/) — opp→customer 30–40%.
- [HiBob, Understanding your sales funnel conversion rates](https://www.hibob.com/blog/sales-funnel-conversion-rate/) — funnel reference.

---

## Further Reading

- [The GTM Funnel](../foundations/07-gtm-funnel.md) — the stages this data measures.
- [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks) — the companion stage-by-stage table.
- [GTM Metrics](../foundations/05-gtm-metrics.md) — the metrics framework these funnel rates feed.
- [Outbound from Zero](../playbooks/outbound-from-zero.md) — a MOFU-to-BOFU motion that bypasses top-of-funnel leaks.
