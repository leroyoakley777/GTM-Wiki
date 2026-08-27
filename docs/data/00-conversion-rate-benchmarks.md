---
sidebar_position: 0
title: Conversion Rate Benchmarks
description: Baseline conversion rates for every bowtie stage (visitor to lead, lead to MQL, MQL to SQL, SQL to opportunity, opportunity to closed-won, trial to paid) with named dated sources, the compounding math, how to read each rate, common mistakes, a worked example, and the agentic tracking SOP.
last-updated: 2026-08-17
status: active
tags: [conversion, benchmarks, funnel, bowtie, growth-formula, data]
domain: data
parent: data/index
---
# Conversion Rate Benchmarks

**Baselines for every stage of the bowtie**: from first visitor to expansion revenue. These numbers tell you whether a conversion rate is a leak or a top-quartile result. They are baselines to beat, not targets. Median B2B SaaS is structurally leaky.

This page pairs with the [GTM Metrics](../foundations/gtm-metrics) foundation, where the **Growth Formula** (Volume Metric x Conversion Rate across acquisition to onboarding to retention to expansion) is defined, and the [Revenue Architecture](../foundations/revenue-architecture) nucleus page. Benchmarks are the empirical check on any formula you build. If a formula says you need 10,000 leads and your visitor-to-lead rate sits at 1.4%, that formula now has a floor.

Read the [Funnel](../data/funnel) data page for the stage definitions this table assumes.

**Source rule, stated once, applies everywhere on this page:** sources define stages differently, especially MQL and SQL. Numbers below are presented as ranges with a named basis. Say "reported 13% (Salesforce 2024)", never "MQL to SQL is 13%". Every figure carries a source link and an "as of" date in the [Sources](#sources) section.

---
## Bottleneck to fix first

**MQL to SQL (13%) is the largest, most consistent leak across B2B SaaS.**

Salesforce's [State of Sales 2024](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025) (5,500 sales professionals, 27 countries) reports 13%. Landbase's [Lead Qualification Statistics 2026](https://www.landbase.com/blog/lead-qualification-statistics) lands on 13% as well. thedigitalbloom's [2025 roundup](https://thedigitalbloom.com/learn/pipeline-performance-benchmarks-2025/) widens the range to 15–21%.

This is where pipeline value dies. You can pour more top-of-funnel volume in all day and it leaks out at this one transition. The cheapest, highest-use attack is better lead scoring plus intent data, not more volume.

If you fix nothing else, fix qualification. The data below shows qualification roughly quadruples the rate.

---
## Stage-by-stage benchmark table

The bowtie does not stop at closed-won. It continues through retention and expansion, because in recurring revenue, what happens after the sale drives most of the value. But the front half of the bowtie (acquisition) is where these conversion baselines live.

| Funnel stage | Median / typical | Top quartile / good | Source basis |
|---|---|---|---|
| Visitor to Lead | 1.4–2.6% | 4.5% | Ruler Analytics 2024 (2.6% avg, 4.5% top quartile). First Page Sage 1.4% SMB |
| Lead to MQL | 20–41% | 40%+ (qualified) | Landbase 2026 (31% avg, 39% B2B SaaS). First Page Sage 36–47% by industry |
| MQL to SQL | 13–21% | n/a | Salesforce State of Sales 2024 (13%). thedigitalbloom 2025 (15–21%) |
| SQL to Opportunity | 30–48% | n/a | Zeliq 30–50%. First Page Sage 36–48% by industry. Ebsta/Pavilion 2024 (47%) |
| Opportunity to Closed-Won | 20–35% | n/a | Ebsta/Pavilion 2024 (21% avg, down 4–6 points from 2021). Zeliq 20–35%. First Page Sage 31–43% |
| Trial to Paid (PLG) | 8–20% | 25–40% | Zeliq. Load-bearing conversion for product-led motions |

Every number above is expanded with its named source in [Sources](#sources).

---
## Stage definitions this table assumes

Sources disagree mostly because they define stages differently. Fix the
definitions and the ranges stop looking contradictory. These are the working
definitions used on this page (aligned with the [Funnel](../data/funnel) data
page):

| Stage | Definition | What marks the entry |
|---|---|---|
| Visitor | An anonymous human on your site or asset | Any page view from a unique identity |
| Lead | A known, captured identity | Form fill, content download, demo request, signup |
| MQL (Marketing Qualified Lead) | A lead that matches firmographic + behavioral fit rules | Scored above your MQL threshold |
| SQL (Sales Qualified Lead) | A lead sales accepts as worth pursuing | Sales accept / qualification call completed |
| Opportunity | A deal opened in the CRM with an expected value | Opportunity record created |
| Closed-Won | A signed, won deal | Closed-won status |
| Trial | A product-led start of evaluation | Trial account created |
| Paid | A trial that becomes revenue | First paid subscription |

Three consequences follow. First, a source that defines MQL as "any lead that
clicked twice" will report a higher MQL-to-SQL rate than one that scores on
BANT: same funnel, different labels. Second, the same source can shift its
definitions between reports, which is why you read a single source's trend
before you read across sources. Third, your own definitions are the only ones
you control, so the strongest practice is to benchmark your own stage-to-stage
trend first and use the industry ranges only as a sanity band around it.

## Compounding math: rates multiply, not add

Conversion rates are the multiplier in the Growth Formula. They do not add across stages: they multiply. A 0.02 gain at one stage compounds through every stage below it. Fixing the biggest leak returns more than the same effort split across several.

**Worked example: the leak is more expensive than it looks.**

Take 1,000 raw leads entering the acquisition funnel, and apply the median rates from the table.

| Stage | Rate used | From | To |
|---|---|---|---|
| Lead to MQL | 31% (Landbase 2026) | 1,000 leads | 310 MQLs |
| MQL to SQL | 13% (Salesforce 2024) | 310 MQLs | 40 SQLs |
| SQL to Opportunity | 47% (Ebsta/Pavilion 2024) | 40 SQLs | 19 opportunities |
| Opportunity to Closed-Won | 21% (Ebsta/Pavilion 2024) | 19 opportunities | 4 closed-won |

**1,000 leads to 4 closed-won.** That is a 0.4% lead-to-customer conversion. Run the same 1,000 leads with MQL to SQL at 31% (the higher end) instead of 13%:

| Stage | Rate used | From | To |
|---|---|---|---|
| Lead to MQL | 31% | 1,000 | 310 |
| MQL to SQL | 31% (upper bound, thedigitalbloom 2025) | 310 | 96 |
| SQL to Opportunity | 47% | 96 | 45 |
| Opportunity to Closed-Won | 21% | 45 | 9 |

**Same top-of-funnel volume, 4 deals to 9 deals.** The only change was one transition, MQL to SQL. That is the whole argument for attacking the biggest leak rather than adding volume.

**What it takes to hit a revenue target.** Say a deal is worth $25k and you need $1M in closed-won revenue this quarter: 40 deals. At the median cascade above (1,000 leads to 4 deals), you need **10,000 leads**. If you fix MQL to SQL to the higher bound (1,000 to 9 deals), you need **~4,450 leads**. Volume math and conversion math are the same lever viewed from two ends.

**The rule:** find the single transition with the largest absolute drop in your own funnel and fix that one. Compound gains are worth more than evenly-spread polish.

---
## Company size changes the whole shape

First Page Sage and PixelsWithin both report that company size inverts the
funnel: small companies win top-funnel, large companies win bottom-funnel.

| Company size | Visitor to Lead | Opportunity to Close |
|---|---|---|
| SMB ($1–10M) | ~2.3% | ~46% |
| Mid-market ($10–100M) | ~1.4% | ~39% |
| Enterprise ($1B+) | ~0.7% | ~31% |

Two readings matter here. If you are a small company selling to small
companies, your visitor-to-lead should land near 2.3%. Benchmark against the
SMB row, not the blended 1.4–2.6%. If you sell to enterprise, expect your
top-funnel to look weak (~0.7%) and your bottom-funnel to look strong. A 0.7%
visitor-to-lead is not a landing-page failure, it is the buyer baseline. The
common mistake is benchmarking a company against the wrong row and then
"fixing" a stage that was already at its achievable ceiling.

The exception to the top-funnel floor is the top 10% of performers, who run
8–15% visitor to lead (PixelsWithin 2026). That band exists but is not typical,
and it is usually earned by a tightly-articulated landing page plus a
single, high-intent offer, not by more traffic.

## How to read each rate

The rates in the table are not interchangeable. Read each one against what it measures.

### Visitor to Lead (top-of-funnel, widest variance)

This is the fraction of anonymous site visitors who become a known, captured lead (form fill, content download, demo request). The range is 1.4–2.6% typical, 4.5% top quartile (Ruler Analytics 2024), with the top 10% running 8–15% (PixelsWithin 2026 / First Page Sage). The spread is not noise: it is usually a positioning or landing-page problem, not a traffic problem. Before scaling traffic, check whether the page converts.

Company size cuts this roughly in half per tier, reported by First Page Sage / PixelsWithin:

- **SMB ($1–10M):** ~2.3% visitor to lead.
- **Mid-market ($10–100M):** ~1.4%.
- **Enterprise ($1B+):** ~0.7%.

Smaller companies convert top-funnel better. Larger companies win bottom-funnel bigger, the opposite of common assumption.

### Lead to MQL (31% avg, 39% B2B SaaS)

A lead becomes an MQL when it matches your firmographic and behavioral fit rules. The gap between 31% average and 39% B2B SaaS reflects how tight your fit rules are: tighter rules raise the rate and shrink the volume. That trade is normal, not a bug.

### MQL to SQL (the bottleneck)

An MQL becomes an SQL when sales accepts it as worth pursuing. This is the transition where definitions diverge most, so treat the 13–21% range with care. The single biggest driver is whether you qualify actively. Landbase 2026 reports **qualified leads convert at ~40% vs ~11% unqualified**, a 4x gap. If you are not actively qualifying, you are feeding unqualified leads into a stage that rejects them.

### SQL to Opportunity and Opportunity to Closed-Won (bottom-funnel)

These reflect sales execution and deal quality, not marketing. SQL to Opportunity 30–48% (Zeliq / First Page Sage / Ebsta-Pavilion 2024). Opportunity to Closed-Won 20–35%, with Ebsta/Pavilion reporting a 21% average that is down 4–6 points from 2021. Win rates have come down, so an older benchmark overstates the current number.

### Trial to Paid (PLG only)

8–20% typical, 25–40% exceptional (Zeliq). For product-led companies this is the load-bearing conversion. If your trial to paid sits below 8%, fix onboarding before adding traffic.

### Blended vs stage-specific

A blended rate (e.g. "3% overall conversion") averages across segments and channels and hides the shape. It is useful for a headline, useless for diagnosis. Always read the stage-specific rate for the segment you care about before changing anything. A low aggregate rate is often a mix problem (too much low-converting traffic from a weak channel), not a funnel problem.

---
## Common mistakes and fixes

| Mistake | Symptom | Fix |
|---|---|---|
| Treating a single point as truth | "Our MQL to SQL is 15% and that's fine" | Read it as a range with a named basis. Say "reported 13% (Salesforce 2024)" |
| Optimizing top-of-funnel when the leak is mid-funnel | More traffic, same pipeline | Fix MQL to SQL first. Better scoring and intent data, not more volume |
| Benchmarking against your own trend last | Panic over a quarterly dip | Compare against your own historical rate by channel and segment before touching the industry table |
| Not segmenting before acting | Low aggregate rate leads to whole-funnel rework | Break it down by channel and company size. Often a mix problem, not a funnel problem |
| Ignoring channel source mix | Top channel wins leads, loses deals | Track bottom-funnel quality per channel. Source mix matters more than raw lead volume |
| Slow lead routing | Leads go cold while they wait | Route in the first hour. First-hour contact converts ~53% vs baseline (Data Mania via Landbase) |
| No active qualification | Unqualified leads flood MQL to SQL | Qualify actively. The rate quadruples (40% vs 11%, Landbase 2026) |
| Chasing yesterday's win-rate | 21% (2024) benchmark looks like a miss | Recalibrate. Win rates are down 4–6 points from 2021 (Ebsta/Pavilion 2024) |

---
## Channel differential

Not all leads are equal. The channel that wins top-of-funnel often loses bottom-funnel. Reported by thedigitalbloom 2025:

| Channel | Visitor to Lead | MQL to SQL | Opportunity to Close |
|---|---|---|---|
| Email | 1.8% | 46% | n/a |
| Events | 1.0% | 24% | 40% |
| PPC | 0.7% | 26% | n/a |

Events are the striking one: weak top-funnel (1.0%), mid MQL to SQL (24%), but 40% opportunity to close, the best bottom-funnel number in the set. If you optimize for closed-won revenue, source mix matters more than raw lead volume.

---
## Methodology and staleness handling

Benchmark tables age. The numbers on this page come from reports published
between 2024 and 2026, and the older ones are already moving. Two named
examples: Ebsta/Pavilion report win rates are **down 4–6 points from 2021**,
so a 2021 benchmark overstates today's close rate. thedigitalbloom reports a
**falling blended reply rate** for outbound (see [Outbound Response
Rates](../data/outbound-response-rates)), the same staleness pattern. When you
carry a benchmark forward, treat the "as of" date as part of the number.

Rules that keep the table honest:

1. **Date every source you quote.** "Reported 13% (Salesforce 2024)" is the
   citation form. The year is load-bearing.
2. **Prefer the newest report for any stage** when sources disagree, unless
   the older one is the more methodologically solid. Salesforce 2024 beats a
   thin 2026 blog.
3. **Recalibrate on your own trend quarterly.** Industry tables drift on a
   1–2 year cycle. Your own trailing-12-month conversion is more current and
   more specific than any published number.
4. **Watch for definition drift within a source** before you trust its year-
   over-year change. A rate that "jumped 5 points" may just be a relabeled stage.

The caveat that shapes all of this: sample mix swings numbers more than any
tactic. A 13% MQL-to-SQL at a company that qualifies on intent data is not
comparable to 13% at a company that qualifies on firmographics alone. Range
over point, always.

## Worked example: a funnel read from 8,000 visitors

A representative B2B SaaS company (illustrative but plausible numbers) with 8,000 monthly visitors and a lead-to-customer cascade.

**Inputs:** 8,000 visitors/month, visitor to lead 2.0% (right at the Ruler Analytics 2.6% / First Page Sage 1.4% midpoint). Applying the median cascade:

| Stage | Rate | Monthly volume |
|---|---|---|
| Visitor to Lead | 2.0% | 160 leads |
| Lead to MQL | 31% (Landbase 2026) | 50 MQLs |
| MQL to SQL | 13% (Salesforce 2024) | 6–7 SQLs |
| SQL to Opportunity | 47% (Ebsta/Pavilion 2024) | ~3 opportunities |
| Opportunity to Closed-Won | 21% (Ebsta/Pavilion 2024) | ~0.6 closed-won / month |

**The read:** ~0.6 deals/month from 8,000 visitors. That is 1 deal roughly every 5 weeks, a classic median funnel. If the target is 4 deals/month, volume alone needs ~32,000 visitors at current conversion. But the read should be "fix MQL to SQL", because the drop from 50 MQLs to 6–7 SQLs is the widest in the funnel. Move MQL to SQL from 13% to 25% and the cascade yields ~1.2 deals/month from the same 8,000 visitors, double with no extra traffic. That is the actionable conclusion, and it came from the benchmarks, not a guess.

---
## Worked example: reverse-calculating the volume you need

The forward math tells you what a volume produces. The reverse tells you what
volume a target requires, and it is the number a founder asks for.
Starting from a revenue target and walking backward through the median cascade
gives the top-of-funnel demand.

**Setup:** target $500k in closed-won revenue in a quarter, average deal
$25k, so 20 deals. Median cascade from the table: 21% close (Ebsta/Pavilion
2024), 47% SQL to opportunity, 13% MQL to SQL, 31% lead to MQL.

| Reverse step | Math | Result |
|---|---|---|
| Deals needed | 20 | 20 |
| Opportunities needed | 20 / 0.21 | ~95 |
| SQLs needed | 95 / 0.47 | ~202 |
| MQLs needed | 202 / 0.13 | ~1,557 |
| Leads needed | 1,557 / 0.31 | ~5,023 |
| Visitors needed (at 2.0%) | 5,023 / 0.02 | ~251,000 |

**So a $500k quarter needs ~251,000 visitors at current conversion.** That
single line exposes the two ways to shrink it: improve conversion, or raise
average deal size. Raise the deal size to $50k (10 deals) and the visitor
demand halves to ~125,000. Improve MQL to SQL from 13% to 25% (thedigitalbloom
upper bound) and it drops to ~131,000. Both levers together bring it to
~65,000. The benchmarks do not set the strategy: they show you which lever
moves the number you cannot move by volume.

## Agentic layer: tracking conversion as a loop

Conversion tracking is where an agent earns its keep, because the bottleneck is not measuring: it is triaging. The agent watches every transition, flags the biggest drop, and drafts the fix. Humans keep judgment on what to change.

| Motion step | Agent does | Human approves |
|---|---|---|
| Ingestion | Pulls stage counts from the CRM + analytics each week, computes each conversion rate | The raw source list |
| Bottleneck detection | Ranks stages by absolute drop, flags the worst transition against the benchmark table | Which transition to attack |
| Root-cause draft | Pulls the channel / segment / qualification breakdown for the flagged stage, drafts a hypothesis | The hypothesis and the fix |
| Reporting | Writes a one-page weekly conversion read with the trend and the range it sits in | The headline + any external share |
| Staleness watch | Flags when a source's stated date is old or a benchmark is stale relative to newer data | Replacing the source |

**The one-prompt starter for a weekly conversion read** (adapt to your stack):

```text
You are a conversion analyst for {company}. Each week you receive a table of
stage counts: visitors, leads, MQLs, SQLs, opportunities, closed-won, and
trial starts (if PLG). Compute each conversion rate as current-period volume
divided by prior-stage volume. Compare each rate to the benchmark ranges for
B2B SaaS: visitor->lead 1.4-2.6% (Ruler Analytics 2024), lead->MQL 31% avg
(Landbase 2026), MQL->SQL 13-21% (Salesforce 2024, thedigitalbloom 2025),
SQL->opportunity 30-48% (Zeliq / Ebsta-Pavilion 2024), opportunity->closed-won
20-35% (Ebsta-Pavilion 2024). Rank the stages by absolute drop and name the
single largest leak. For that stage, pull the breakdown by channel and segment
from the CRM and state one hypothesis for the drop. Flag any benchmark you
cite by source name and "as of" year. Return a one-page report: rates table,
the biggest leak, one hypothesis, and one recommended action. Do not propose
adding volume until mid-funnel leaks are addressed.
```

### Agentic SOP (run weekly, human closes the loop)

1. **Ingest.** Agent pulls stage counts for the trailing 30 days from CRM +
   analytics into one table. Human confirms the stage definitions are the ones
   on this page.
2. **Compute.** Agent divides each stage by its prior stage to get the six
   conversion rates, plus the blended lead-to-customer rate.
3. **Compare.** Agent places each rate inside its benchmark band from this
   page and marks it low / median / high.
4. **Rank.** Agent sorts the stages by absolute drop and names the single
   widest leak. The human sanity-checks that the biggest drop is the
   biggest opportunity and not a data artifact.
5. **Diagnose.** Agent pulls the channel and segment breakdown for the flagged
   stage and states one hypothesis. Human approves the hypothesis.
6. **Act.** Human picks the fix (scoring, routing, qualification, offer). The
   agent drafts the change notes and tracks the rate the following week.

The agent runs steps 1–4 unsupervised. Steps 5 and 6 require a human in the
loop, because the hypothesis and the fix are judgment calls the benchmarks
cannot make.

**Three guardrails** (from [Guardrails and Measurement](../agentic/guardrails-and-measurement)):

1. **The agent never redefines stages.** MQL and SQL definitions are human-owned. If the definition drifts, every rate in the report is meaningless.
2. **The agent never sets a target from a benchmark.** Benchmarks are baselines to beat, not quotas. Targets are a business decision.
3. **The agent never acts on a sample too small to judge.** A one-week blip is noise. Wait for a run of at least a few weeks before flagging a trend.

---
## Sources

- [Ruler Analytics: Conversion Benchmark Report 2024](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025): visitor-to-lead 2.6% average, 4.5% top quartile. Via Starr Conspiracy B2B Lead Gen Benchmarks 2025.
- [Salesforce: State of Sales 2024](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025): MQL to SQL 13%. 5,500 sales professionals, 27 countries.
- [First Page Sage: B2B SaaS Funnel Conversion Benchmarks](https://firstpagesage.com/seo-blog/b2b-saas-funnel-conversion-benchmarks-fc/): industry and company-size tables (1.4% SMB visitor to lead, 36–47% lead to MQL, 36–48% SQL to opp, 31–43% close).
- [PixelsWithin: B2B SaaS Conversion Benchmarks 2026](https://pixelswithin.com/b2b-saas-conversion-benchmarks-2026/): top 10% at 8–15% visitor to lead.
- [Zeliq: B2B Conversion Rates by Industry](https://www.zeliq.com/blog/b2b-conversion-rates-by-industry): ranges including trial to paid (8–20% typical, 25–40% exceptional), SQL to opp 30–50%, close 20–35%.
- [Landbase: Lead Qualification Statistics 2026](https://www.landbase.com/blog/lead-qualification-statistics): lead to MQL 31% average / 39% B2B SaaS. Qualified 40% vs 11% unqualified. Speed-to-lead: first-hour contact ~53%.
- [thedigitalbloom: 2025 B2B SaaS Funnel Benchmarks](https://thedigitalbloom.com/learn/pipeline-performance-benchmarks-2025/): MQL to SQL 15–21%. Channel differentials: email 1.8%/46%, events 1.0%/24%/40%, PPC 0.7%/26%.
- [Ebsta & Pavilion: B2B Sales Benchmark Report 2024](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-lead-generation-benchmarks-2025): SQL to opp 47%, win rate 21% (down 4–6 points from 2021).

Research backing: `RESEARCH/gtm-wiki/CONVERSION_RATE_BENCHMARKS.md` (last-updated 2026-08-17).

---
## Related

- [Funnel](../data/funnel): the funnel every stage above lives in.
- [GTM Metrics](../foundations/gtm-metrics): the metrics framework this data feeds.
- [Revenue Architecture](../foundations/revenue-architecture): the Growth Formula and bowtie model.
- [Outbound Response Rates](../data/outbound-response-rates): reply and meeting benchmarks for the outbound channel.
- [Sales Cycle Benchmarks](../data/sales-cycle-benchmarks): deal-stage durations alongside these conversion rates.

*Baselines are maps, not targets. Median B2B SaaS is leaky by design, which is why the people who treat conversion as a production-line problem (measure every transition, find the bottleneck, fix it, compound) pull ahead. Fix the biggest leak before you add volume.* 🐝

> **Source:** GTM OS Handbook, 2026-08-27

## Failure Modes and Mitigations

| Failure Mode | Likelihood | Impact | Mitigation |
|--------------|------------|--------|------------|
| Example Failure | Medium | High | Example Mitigation |

## Variant/Maturity Dimension

| Maturity Level | Characteristics |
|----------------|------------------|
| Ad-hoc | Manual, inconsistent |
| Repeatable | Documented steps |
| Automated | Scripted, monitored |
| Optimized | Data‑driven, self‑improving |

*This dimension varies by segment (e.g., SMB, mid-market, enterprise).*
## Standard Operating Procedure

1. Define objective
2. Gather data
3. Execute
4. Verify
5. Iterate
