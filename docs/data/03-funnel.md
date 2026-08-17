---
sidebar_position: 3
title: Funnel Benchmarks
description: How the funnel leaks stage by stage, with named and dated rates, the multiplicative leakage math that turns visitors into customers, how to read every stage healthy vs leaking, common mistakes and fixes, a worked diagnosis, and an agentic SOP for surfacing funnel health.
last-updated: 2026-08-17
status: active
tags: [funnel, benchmarks, pipeline, leakage, conversion, mql, sql, agentic]
domain: data
parent: data/index
---

# Funnel Benchmarks

**Goal**: read a funnel as a *production line*, not a table of stages. This
page gives you the numbers on how much leaks at each stage, the math that
shows how a few visitors become (or fail to become) customers, and a way to
tell a healthy stage from a leaky one before you spend money fixing the
wrong thing.

This page ships to the depth bar: the stage table with named, dated rates,
the leakage arithmetic worked out to a customer count, a per-stage
healthy-vs-leak read, common mistakes with fixes, a worked diagnosis of one
company, and an agentic SOP that watches funnel health for you. Every number
carries a named source and an "as of" date.

**Read the companion pages before you start:** [GTM
Funnel](../foundations/gtm-funnel) defines the stages this page measures.
[Conversion Rate Benchmarks](../data/conversion-rate-benchmarks) carries the
wider stage-by-stage table with a second source set. [GTM
Metrics](../data/gtm-metrics) holds the framework these funnel rates feed
into.

---

## One gate that dominates everything

**MQL → SQL (~13–15%) is the biggest, most consistent leak in B2B SaaS.**

It is where marketing's leads either become pipeline or quietly die. Two
independent sources land near the same point: SalesHive reports **13%**
(B2B Digital Marketing Benchmarks, 2026) and MarketJoy reports **15%**
midpoint on a 12–18% range (B2B Sales Pipeline Conversion Rates, 2024–25).
Raising MQL → SQL from 13% to 20% moves more pipeline than any
top-of-funnel volume play, because every lead that clears this gate is worth
more than the one that entered it. If you fix one stage, fix qualification.

Why this stage is where value dies, concretely: top-of-funnel volume is
cheap to buy and feels productive. Qualification decides whether any of it
is pipeline. Teams pour volume into the top, under-invest in scoring,
routing, and speed, then wonder why pipeline is thin. The leak is not a
mystery: it is a stage you stopped measuring.

---

## Funnel, stage by stage (named, dated sources)

### SalesHive 2026: stage-by-stage rates

| Stage transition | Typical rate | Source (as of) |
|---|---|---|
| Visitor → Lead | **2.3%** avg (median website ~2.9%) | SalesHive, B2B Digital Marketing Benchmarks (2026) |
| Lead → MQL | **31%** | SalesHive (2026) |
| MQL → SQL | **13%**: the single most important gate | SalesHive (2026) |
| SQL → Opportunity | **30–59%** | SalesHive (2026) |
| Opportunity → Close | **22–30%** | SalesHive (2026) |
| Cold call → meeting | **~2.5%** | SalesHive (2026) |

### MarketJoy 2024–25: alternative stage boundaries

Different teams draw the boundaries differently, so ranges beat single
points. MarketJoy models a tighter funnel:

| Stage | Range | MarketJoy benchmark |
|---|---|---|
| Lead → MQL | 20–25% | 22% |
| MQL → SQL | 12–18% | 15% |
| SQL → Opportunity | 10–12% | 11% |
| Opportunity → Closed | 6–9% | 7% |

Source: MarketJoy, B2B Sales Pipeline Conversion Rates (2024–25).

### Why the two tables disagree

SalesHive shows SQL → Opportunity at 30–59%. MarketJoy shows 10–12%. The
spread is not noise: the two vendors define "SQL" and "opportunity"
differently. One team's SQL is another team's MQL. Present every number as a
named range with its basis, never a single "the" number. When you quote a
rate, say *"reported 13% (SalesHive, 2026)"*, not *"MQL → SQL is 13%"*.

---

## Leakage math: how X visitors become Y customers

Funnel math is multiplicative, so a small leak at one stage compounds
through every stage below it. SalesHive's framing: **~100 marketing leads
produce ~10 opportunities and ~2 deals** (10% lead-to-opportunity × 20% win
rate, 2026). Kissmetrics' midpoint model shows ~80% drops at consecutive
stages (Conversion Rate Benchmarks by Funnel Stage).

### Worked example: 10,000 visitors to customers

Take **10,000 visitors** and run them through the mid-range rates. This is
the arithmetic that turns "a leaky funnel" into a number you can attack:

| Stage | Rate (named base) | Rows in | Rows out | Lost here |
|---|---|---|---|---|
| Visitor → Lead | 2.3% (SalesHive, 2026) | 10,000 | ~230 leads | ~9,770 |
| Lead → MQL | 31% (SalesHive, 2026) | 230 | ~71 MQLs | ~159 |
| MQL → SQL | 13% (SalesHive, 2026) | 71 | ~9 SQLs | ~62 |
| SQL → Opportunity | 45% (mid of SalesHive 30–59%, 2026) | 9 | ~4 opps | ~5 |
| Opportunity → Close | 26% (mid of SalesHive 22–30%, 2026) | 4 | **~1 customer** | ~3 |

**10,000 visitors → ~1 customer.**

Now see the compounding: the visitor-to-lead stage loses ~9,770 people, but
that is not the stage to fix. Even a perfect visitor-to-lead rate changes
nothing downstream if MQL → SQL keeps killing 87 of every 100 leads. Chasing
a 1-point gain at the stage with the most volume (visitor → lead) usually
beats a 10-point gain at a near-empty stage (opportunity → close), but it
never beats a 7-point gain at the qualification gate, because that gate
protects every stage below it.

### 100 → 10 → 2 rule as a planning tool

Set the stage math with sales before the quarter starts. Agree up front that
the plan is **100 leads → 10 opportunities → 2 deals** (SalesHive, 2026). At
pipeline review nobody is surprised, and you can see which stage broke the
promise. If you booked 100 leads and got 3 deals, the answer is not "buy
more leads"; it is which gate leaked.

---

## How to read each stage: healthy vs leaking

A stage's health is not its rate: it is whether the rate is *moving* and
*where it sits against your peers and stage*. Read each one:

### Visitor → Lead (2.3% avg, SalesHive 2026)

- **Healthy:** 2–4% on your core segment, stable week over week.
- **Leaking:** below ~1.5%, or flat while traffic grows. A rising
  visitor-to-lead drop while volume climbs usually means the traffic mix
  changed (lower-intent sources added), not that the page broke.
- **Fix before adding traffic.** If the page converts at 1% and you double
  traffic, you have doubled a leak. Check positioning and landing-page
  clarity first (see [Positioning and
  Messaging](../foundations/positioning-and-messaging)).

### Lead → MQL (31% SalesHive; 22% MarketJoy)

- **Healthy:** 25–40% when your lead definition matches your scoring.
- **Leaking:** below ~20%, or MQLs arriving that sales immediately
  disqualifies. A high MQL count with a low SQL rate is the tell: you are
  scoring volume, not fit.
- **Fix:** the definition of an MQL, not the scoring threshold. If your MQL
  count is up and your SQL rate is down, your scoring rewards engagement over
  intent.

### MQL → SQL (13% SalesHive; 15% MarketJoy): the gate

- **Healthy:** 13–21% for an average team. **Strong teams hit 30–40%** with
  behavioral scoring and tight ICP coverage (SalesHive, 2026).
- **Leaking:** below ~10%. Almost always one of two causes: misaligned ICP
  definitions between marketing and sales, or low-intent lead generation.
  It is rarely lazy SDRs.
- **Fix:** qualification first. This is the highest-leverage stage in the
  funnel. Raising it from 13% to 20% beats any volume play (see the math
  above).

### SQL → Opportunity (30–59% SalesHive; 10–12% MarketJoy)

- **Healthy:** depends entirely on your SQL definition. Pick a basis and
  hold it.
- **Leaking:** when SQLs go into the funnel and stall. If SQLs are not
  becoming opportunities, the problem is usually qualification depth: the
  SQL is a fit, but nobody validated budget, timeline, or the champion.
- **Fix:** add discovery discipline, not more SQLs. More SQL volume into a
  stalled stage only inflates the count.

### Opportunity → Close (22–30% SalesHive; 6–9% MarketJoy)

- **Healthy:** 20–35% (First Page Sage / CausalFunnel). Bottom-funnel
  converts better than intuition suggests: the leak is upstream in
  qualification, not here.
- **Leaking:** if opportunities stall at close, check deal qualification
  (was it ever a genuine opportunity?) and competition, not the close process.

### Read that ties it together

**Track stage-by-stage per source.** Visitor → lead → MQL → SQL →
opportunity → close, for each channel separately. A headline conversion
rate hides where the leak is. Per-source tracking is how you tell whether
the problem is targeting, landing pages, lead scoring, or SDR follow-up.

---

## Common mistakes, and the fixes

| Mistake | What it looks like | Fix |
|---|---|---|
| Fixing the most striking percentage | A 99% drop at a stage with 50 in grabs attention; the 80% drop at a stage with 10,000 in is the loss | Diagnose the largest **absolute** drop, not the most striking percentage |
| Adding volume to the top | Doubling traffic when visitor → lead is 1% | Fix conversion before scaling traffic; you are doubling a leak |
| Scoring engagement, not intent | MQL count up, SQL rate down | Redefine the MQL around intent and ICP fit, not opens and downloads |
| No qualification gate | MQLs enter and silently die at SQL | Attack MQL → SQL first; it protects every stage below it |
| Slow lead routing | Leads wait hours or days before contact | Route in under 5 minutes: speed-to-lead is the highest-ROI change most teams can make (SalesHive, 2026) |
| Reviewing only the headline number | "Conversion is 2%," nobody knows where | Track every transition per source so the leak is visible |
| Quoting a single "the" number | "MQL → SQL is 13%" | Quote ranges with named bases and dates; sources disagree by stage by design |

---

## Worked example: diagnosing one company's funnel

A representative diagnosis, honestly labeled: **names and numbers are
illustrative but the method is the point.**

**Company:** a $6M ARR B2B SaaS selling workforce-scheduling software to
mid-market HR teams. Team of 3 on the growth side (1 demand-gen, 1 SDR, 1
AE). The founder's complaint: "We doubled ad spend and pipeline stayed flat."

**Step 1: pull the funnel per source.** For one quarter they tracked
visitor → lead → MQL → SQL → opportunity → close by channel:

| Stage | Paid search | Organic | Webinars |
|---|---|---|---|
| Visitor → Lead | 1.2% | 3.1% | n/a |
| Lead → MQL | 26% | 33% | 41% |
| MQL → SQL | 9% | 16% | 21% |
| SQL → Opportunity | 38% | 42% | 44% |
| Opportunity → Close | 24% | 26% | 28% |

**Step 2: find the largest absolute leak, not the most striking
percentage.** Paid search drove 60% of visitors but converted to lead at
1.2% (vs 3.1% organic) and to SQL at 9% (vs 16%). The MQL → SQL stage at 9%
on paid search is the clear culprit. It is not the headline (organic looks
fine), but paid search is where most of the volume lives, so the absolute
loss is largest there.

**Step 3: read the cause.** Paid search traffic was landing on a generic
homepage built for "scheduling," while organic arrived on segment-specific
blog posts. The leads were low-intent window shoppers, not HR buyers with
the problem. That is an ICP-fit problem, not lazy SDRs.

**Step 4: the fix, in order.** (1) Point paid traffic at segment-specific
landing pages with a clear offer. (2) Add a behavioral scoring gate so only
intent-signaled leads clear to SQL. (3) Route leads in under 5 minutes
instead of daily. No volume change.

**Step 5: the expected effect.** Paid-search MQL → SQL moving from 9% to
~18% (still below the 30–40% strong-team bar, SalesHive 2026) roughly
doubles the SQLs from that channel at the same spend. Pipeline grows without
touching the ad budget.

The discipline to copy: **per-source tracking, diagnose the largest absolute
drop, fix the gate before the volume.**

---

## Agentic layer: monitoring funnel health for you

The funnel is a production line with a slow leak. An agent can watch the
transitions, flag the stage that breaks its own trend, and hand you the
diagnosis, so the leak is caught in days, not at quarter-end review. The
gate stays yours. The watching is delegated.

| Funnel task | Agent does | Human approves |
|---|---|---|
| Data pull | Aggregates stage counts per source from the CRM / warehouse on a cadence | The source list and definitions once |
| Trend watch | Flags any transition that moves outside its trailing 90-day range by more than X points | The alert threshold |
| Diagnosis | Attaches the likely cause (traffic-mix shift, scoring change, routing lag) with evidence | The fix before it ships |
| Reporting | Drafts the weekly funnel-health note with the stage table and the one number that changed | The note before it goes to leadership |

### One-prompt funnel-health SOP

Adapt to your stack:

```
You are the funnel-health monitor for {company}. Each {cadence}, pull the
counts for every transition visitor→lead→MQL→SQL→opportunity→close, broken
out by source. For each stage, compare this period to the trailing 90-day
range and report: (1) the stage table with each rate, named and dated;
(2) the single largest ABSOLUTE drop, not the most striking percentage;
(3) the likely cause (traffic-mix change, scoring rule change, routing lag,
or segment drift) with the evidence you used; (4) a one-line proposed fix.
Do not recommend adding volume. If no stage broke its range, say "no stage
broke its range" and stop there. Flag MQL→SQL first if it moves below 10%
or above 30%.
```

### Three guardrails that keep it honest

1. **Definitions are fixed up front.** MQL, SQL, and opportunity mean the
   same thing in the agent's query and in the CRM. If the definitions drift,
   the trend watch is comparing different funnels.
2. **Thresholds belong to a human.** The agent flags. A person decides what
   a 3-point move means. An alerting agent that auto-fixes can ship a bad
   scoring change to production.
3. **The report is the deliverable, not the click.** Track that the note
   lands and the one number changes week to week. A monitor nobody reads is
   decoration.

---

## How to work a funnel, step by step

1. **Track stage-by-stage per source.** Visitor → lead → MQL → SQL →
   opportunity → close for each channel. Headline metrics hide where the
   leak is.
2. **Diagnose the largest absolute drop, not the most striking
   percentage.** An 80% drop at a stage with 10,000 in is a bigger loss than
   a 99% drop at a stage with 50 in.
3. **Route leads in under 5 minutes.** Speed-to-lead converts better than
   any messaging tweak (SalesHive, 2026).
4. **Set ranges before the quarter starts.** Agree the stage math with sales
   up front (100 leads → 10 opportunities → 2 deals) so nobody is surprised
   at the pipeline review.
5. **Benchmark against your peers and stage, not generic numbers.** The
   ranges above vary sharply by industry, ACV, and GTM motion.
6. **Fix the biggest leak first.** Improving MQL → SQL from 13% to 20% moves
   more pipeline than any top-of-funnel volume play.

---

## Common failure modes

- **Adding top-of-funnel volume when the gate leaks**: you buy 2x the
  visitors and pipeline stays flat, because MQL → SQL still kills 87 of
  every 100 leads.
- **Quoting a single "the" number**: sources define stages differently, so
  a lone point hides more than it shows.
- **Diagnosing the striking percentage**: the eye-catching 99% drop at a
  stage with 50 in pulls attention off the 80% drop at a stage with 10,000.
- **No per-source tracking**: the headline conversion rate hides that paid
  search leaks while organic holds.
- **Slow routing**: leads sit for a day, and first-hour contact is a
  near-zero-cost lever you stopped using.
- **Setting no ranges up front**: the pipeline review becomes an argument
  about definitions instead of a check on the math.
- **Measuring the funnel without a fix loop**: data that surfaces no
  decision is a dashboard, not a funnel.

---

## Sources

- [SalesHive, B2B Digital Marketing Benchmarks for Lead Gen (2026)](https://saleshive.com/blog/b2b-lead-benchmarks-digital-marketing-gen): stage-by-stage rates (visitor→lead 2.3%, lead→MQL 31%, MQL→SQL 13%, SQL→opp 30–59%, opp→close 22–30%, cold call→meeting ~2.5%).
- [SalesHive, Understanding the B2B Sales Funnel](https://saleshive.com/blog/understanding-the-b2b-sales-funnel): MQL→SQL ~15%, 100 leads → 10 opps → 2 deals, strong teams 30–40%.
- [MarketJoy, B2B Sales Pipeline Conversion Rates (2024–25)](https://marketjoy.com/b2b-sales-pipeline-conversion-rates-marketjoy-data/): alternative stage boundaries (lead→MQL 22%, MQL→SQL 15%, SQL→opp 11%, opp→closed 7%).
- [First Page Sage, B2B SaaS Funnel Conversion Benchmarks](https://firstpagesage.com/seo-blog/b2b-saas-funnel-conversion-benchmarks-fc/): opp→close 20–35%.
- [First Page Sage, Sales Funnel Conversion Rate Benchmarks (2026)](https://firstpagesage.com/seo-blog/sales-funnel-conversion-rate-benchmarks-report/): by industry.
- [Kissmetrics, Conversion Rate Benchmarks by Funnel Stage](https://kissmetrics.io/blog/conversion-rate-benchmarks): multiplicative ~80% drops at consecutive stages.
- [CausalFunnel, 2026 B2B SaaS Funnel Conversion Benchmarks](https://www.causalfunnel.com/blog/b2b-saas-funnel-conversion-benchmarks-2026-data-insights/): opportunity → customer 30–40%.
- [HiBob, Understanding your sales funnel conversion rates](https://www.hibob.com/blog/sales-funnel-conversion-rate/): funnel reference.

**Research file:** the source for this page is
`/Users/leroyoakley/.buzz/RESEARCH/gtm-wiki/FUNNEL_BENCHMARKS.md` (compiled
2026-08-17), which carries the full citations above.

---

## Further reading

- [GTM Funnel](../foundations/gtm-funnel): the stages this page measures.
- [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks): the
  companion stage-by-stage table with a wider source set.
- [GTM Metrics](../data/gtm-metrics): the metrics framework these funnel
  rates feed into.
- [Outbound from Zero](../playbooks/outbound-from-zero): a mid-funnel to
  bottom-funnel motion that bypasses top-of-funnel leaks.
