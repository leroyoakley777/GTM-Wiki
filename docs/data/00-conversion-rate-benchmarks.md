---
sidebar_position: 0
title: Conversion Rate Benchmarks
---

# Conversion Rate Benchmarks

**Baselines for every stage of the bowtie** — from first visitor to expansion revenue. Use these to sanity-check your Growth Formula: is a number a leak, or are you already in the top quartile? These are baselines to beat, not targets. Median B2B SaaS is structurally leaky.

This page pairs with the [GTM Metrics](../foundations/05-gtm-metrics.md) foundation and the [Revenue Architecture](../foundations/revenue-architecture.md) nucleus page, where the **Growth Formula** (Volume Metric × Conversion Rate across acquisition → onboarding → retention → expansion) is defined. Benchmarks are the empirical check on any formula you build.

---

## The One Number That Matters Most

**MQL → SQL (13%) is the biggest, most consistent bottleneck across B2B SaaS.**

Salesforce's State of Sales 2024 (5,500 sales pros, 27 countries) and Landbase both land on 13%. Thedigitalbloom's 2025 roundup widens the range to 15–21%.

Why it matters: this is where pipeline value dies. You can pour more top-of-funnel volume in all day, and it leaks out here. The cheapest, highest-leverage attack is better lead scoring plus intent data — not more volume.

If you fix nothing else, fix qualification.

---

## Stage-by-Stage Benchmarks

The bowtie is the funnel replaced by a lifecycle model: it does not stop at "won." It continues through retention and expansion, because in recurring revenue, what happens after the sale drives most of the value.

| Funnel stage | Median / typical | Top quartile / good | Source basis |
|---|---|---|---|
| Visitor → Lead | 1.4–2.6% | 4.5% | Ruler Analytics 2024 (2.6% avg, 4.5% top q); First Page Sage 1.4% SMB |
| Lead → MQL | 20–41% | 40%+ (qualified) | Landbase 31% avg / B2B SaaS 39%; First Page Sage 36–47% by industry |
| MQL → SQL | 13–21% | — | Salesforce State of Sales 2024 (13%); thedigitalbloom 2025 (15–21%) |
| SQL → Opportunity | 30–48% | — | Zeliq 30–50%; First Page Sage 36–48% by industry; Ebsta/Pavilion 47% |
| Opportunity → Closed-Won | 20–35% | — | Ebsta/Pavilion 21% avg (down 4–6 pts from 2021); Zeliq 20–35%; First Page Sage 31–43% |

---

## Cross-Cutting Findings

These hold across multiple sources and reshape how you read the table above.

### Visitor → Lead Has the Widest Variance

~1.5% is typical; the top 10% run 8–15% (PixelsWithin / First Page Sage). That spread is not noise — it is usually a positioning or landing-page problem, not a traffic problem. Before scaling traffic, check whether the page converts.

### Company Size Flips the Intuition

Smaller companies convert top-funnel better; larger companies win bottom-funnel bigger — the opposite of what most people assume.

- **SMB ($1–10M):** visitor → lead ~2.3%, opportunity → close 46%.
- **Mid-market ($10–100M):** ~1.4% visitor → lead, 39% close.
- **Enterprise ($1B+):** ~0.7% visitor → lead, 31% close.

Source: First Page Sage / PixelsWithin. If you are a small company chasing enterprise deals, expect to lose your top-funnel advantage and grind on the bottom.

### Trial → Paid (PLG Motions)

8–20% typical, 25–40% exceptional (Zeliq). For product-led companies this is the load-bearing conversion. If your trial → paid sits below 8%, fix onboarding before adding traffic.

### Channel Differential

Not all leads are equal. The channel that wins top-of-funnel often loses bottom-funnel.

- **Email leads:** 1.8% visitor → lead, 46% MQL → SQL.
- **Events:** 1.0% visitor → lead, 24% MQL → SQL, but 40% opportunity → close.
- **PPC:** weakest overall — 0.7% visitor → lead, 26% MQL → SQL.

Source: thedigitalbloom. Bottom-funnel quality flips the ranking. If you are optimizing for closed-won revenue, source mix matters more than raw lead volume.

### Speed to Lead

First-hour contact converts at ~53% vs baseline (Data Mania via Landbase). Speed is a conversion lever with near-zero marginal cost. Route leads immediately or lose them.

### Qualification Quadruples MQL → SQL

Qualified leads convert at ~40% vs ~11% unqualified (Landbase). The gap is why MQL → SQL is the biggest leak: if you are not actively qualifying, you are sending unqualified leads into a funnel that rejects them.

---

## How to Read These Numbers

1. **Never treat a single point as truth.** Sources define MQL and SQL differently. Where a range is given, the basis is named. Say "reported 13% (Salesforce 2024)," never "MQL → SQL is 13%."
2. **Benchmark against your own trend first.** Your historical conversion rates, by channel and segment, beat any industry table for diagnosing your funnel.
3. **Attack the biggest leak, not the average.** If every stage is near median, the cheapest compound gains come from the single stage with the most absolute drop — usually MQL → SQL.
4. **Segment before you panic.** A low aggregate conversion rate may be a mix problem, not a funnel problem. Break it down by channel and company size before changing anything.

---

## The Pattern Behind the Numbers

Median B2B SaaS is leaky by design. Most companies build top-of-funnel volume and under-invest in qualification, routing, and speed — so the value bleeds out at MQL → SQL. The companies that win are the ones who treat conversion as a production-line problem: measure every transition, find the bottleneck, fix it, compound.

Small gains compound. A handful of modest conversion-rate fixes across the bowtie can lift a motion's revenue 70% or more. That is the whole argument for the Growth Formula — and these benchmarks are the map to where the fixes live.

---

## Sources

- Ruler Analytics, Conversion Benchmark Report 2024 — visitor-to-lead 2.6% avg, 4.5% top quartile. Via [Starr Conspiracy B2B Lead Gen Benchmarks 2025](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025).
- Salesforce, State of Sales 2024 — MQL → SQL 13%. Same source.
- [First Page Sage, B2B SaaS Funnel Conversion Benchmarks](https://firstpagesage.com/seo-blog/b2b-saas-funnel-conversion-benchmarks-fc/) — industry + company-size tables.
- [PixelsWithin, B2B SaaS Conversion Benchmarks 2026](https://pixelswithin.com/b2b-saas-conversion-benchmarks-2026/) — top-10% 8–15% visitor → lead.
- [Zeliq, B2B Conversion Rates by Industry](https://www.zeliq.com/blog/b2b-conversion-rates-by-industry) — ranges incl. trial → paid.
- [Landbase, Lead Qualification Statistics 2026](https://www.landbase.com/blog/lead-qualification-statistics) — lead → MQL 31% avg / B2B SaaS 39%; qualified 40% vs 11%.
- [thedigitalbloom, 2025 B2B SaaS Funnel Benchmarks](https://thedigitalbloom.com/learn/pipeline-performance-benchmarks-2025/) — MQL → SQL 15–21%; channel differentials.
- [Ebsta & Pavilion, B2B Sales Benchmark Report 2024](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025) — SQL → opp 47%, win rate 21%.

---

## Further Reading

- [GTM Metrics](../foundations/05-gtm-metrics.md) — the metrics framework this data feeds.
- [Revenue Architecture](../foundations/revenue-architecture.md) — the Growth Formula and bowtie model.
- [The GTM Funnel](../foundations/07-gtm-funnel.md) — the funnel every stage above lives in.
