---
sidebar_position: 1
title: GTM Metrics Benchmarks
description: "Sourced, dated baselines for pipeline coverage, win rate, CAC payback, LTV:CAC, NRR, and quota attainment: plus the math that connects them, how to read each metric, a worked dashboard read, and an agentic SOP that surfaces breaches."
last-updated: 2026-08-17
status: active
tags: [metrics, benchmarks, revenue-operations, pipeline, cac, nrr, quota-attainment, agentic]
domain: data
parent: data/index
---

# GTM Metrics Benchmarks

**A metric is only useful when you know what average looks like, and what
it means when you beat or miss it.** This page carries the numbers on the
six metrics that run a GTM engine: pipeline coverage, win rate, CAC and
payback, LTV:CAC, NRR, and quota attainment. Every number is a range or a
median with a named source and an "as of" date. Where a single number
appears, it is reported as published, never treated as law.

The [GTM Metrics](../foundations/gtm-metrics) foundation defines what each
metric is and how to steer with it. This page is the evidence under that
framework: the baselines to sanity-check your own model against, the math
that connects the metrics into one chain, a worked dashboard read, and a
reusable agentic SOP that surfaces breaches before the monthly deck does.

**Read these as baselines, not targets.** The median B2B SaaS company is
not efficient. "~21% win rate" is what average companies do, not a number
to engineer toward. Use the tables to check your model, then set targets
against your own motion, ACV, and stage.

---

## How to Read These Numbers

Four rules shape every table below.

1. **Baselines, not targets.** A benchmark tells you where average sits so
   you can tell a leak from a normal number. It does not tell you where to
   aim. Target-setting comes from your own trend and your business model,
   not from a median.
2. **Segment before panicking.** A sub-$1M ARR SaaS at 2.4x LTV:CAC and a
   21-month payback is normal. The same two numbers at $50M+ ARR are a
   fire. Benchmarks without an ARR cohort are noise: payback drops
   monotonically as you scale (the Cohort Caveats section below).
3. **Pair every metric.** CAC alone is meaningless: pair it with payback
   and LTV:CAC. Coverage alone is meaningless: pair it with win rate and
   sales cycle. A single number read in isolation produces confident wrong
   answers.
4. **Gross-margin LTV against fully-loaded CAC is the only version of
   LTV:CAC that means anything.** LTV computed on gross margin and CAC
   computed on total sales-and-marketing cost per acquired customer.

---

## Headline Benchmarks

All numbers below are as published by the named source. Dates are the
source's publication date, or the research compilation date (2026-08-17)
where the source carries none. Vendor-sourced figures are flagged
`(vendor source)`.

| Metric | Benchmark | Source (as of) |
|--------|-----------|----------------|
| Pipeline coverage: mid-market | **3–4x** qualified pipeline / quota | getSpike (2026) |
| Pipeline coverage: enterprise | **4–5x** (longer cycle, lower win rate) | getSpike; gtm-consult (2026) |
| Pipe-to-spend ratio | **5–8x** healthy. **10x+** exceptional. **under 3x** structural problem | getSpike (2026) |
| Win rate: all opportunities | **~21%** | Salesmotion (2026) |
| Win rate: qualified opportunities | **~29%** | Salesmotion (2026) |
| Win rate: SaaS | **~22%** | Salesmotion (2026) |
| Win rate by deal size | **31% SMB**, **15% enterprise (over $100K ACV)** | Salesmotion (2026) |
| Sales velocity: B2B SaaS | **$8,219/day** average | Optifai (N=939, 2026) |
| CAC: self-serve | **$702** median | DigitalApplied (2026) |
| CAC: sales-led | **$11,400** median | DigitalApplied (2026) |
| CAC payback target | **12 months** (was 18–24 months in 2020–22) | DigitalApplied (2026) |
| LTV:CAC median | **3.2:1**. Floor **3:1**. Strong **5:1+** | Optifai (N=939, 2026) |
| Net revenue retention: median | **~102%** | ChurnZero (2026) |
| NRR by ACV | SMB **97%**, mid-market **108%**, enterprise **118%** | Optifai (2026) |
| Quota attainment: average | **~43–47%** | RepVue Q4 2024; Forrester (2020) |
| IC attainment | **54–62%**; Ebsta/Pavilion 1H 2024 **~25%** | Pavilion 2024 GTM Report |

These numbers disagree with each other across sources in places. That is
expected and useful. Sources define "qualified", and "quota" differently,
and sample mixes swing results more than any tactic. Where sources
disagree, the range is the honest answer.

---

## How the Metrics Connect

The six metrics are not six independent dials. They form one chain that
runs from cost-to-acquire through to retained revenue. Read it in this
order:

```
CAC → CAC payback → LTV:CAC → NRR → sustainable growth
quota → pipeline coverage → win rate → revenue
```

**The revenue half.** Revenue comes from qualified pipeline times win rate.
If you set a revenue target, you can back out the pipeline you must carry:

- New ARR target for the year: **$2M**.
- Win rate on qualified opportunities: **29%** (Salesmotion 2026).
- Qualified pipeline required: $2M ÷ 0.29 = **$6.9M**.
- Coverage against the $2M quota: 6.9 ÷ 2.0 = **3.45x**, inside the
  mid-market 3–4x band (getSpike 2026).
- If that pipeline cost $900K in sales-and-marketing spend, pipe-to-spend
  is 6.9 ÷ 0.9 = **7.7x**, inside the healthy 5–8x band (getSpike 2026).

This is why win rate is the highest-leverage number on the board. A 1–3
point shift in win rate changes the pipeline coverage and generation you
need more than any other single input (Benchmarkit / GTM founders). Tune
win rate first, and every downstream number relaxes.

**The economics half.** The cost half flows the other way, into payback
and LTV:CAC:

- 60 customers acquired last year, $900K total cost → CAC = **$15K**.
- ACV $30K, 80% gross margin → $24K gross profit per customer per year →
  **$2K/month**.
- CAC payback = 15K ÷ 2K = **7.5 months**, under the 12-month target
  (DigitalApplied 2026). High CAC, but fine, because gross margin is high.
  This is why you pair CAC with payback, never read CAC alone.
- With NRR near 102% (ChurnZero 2026) and roughly 12% logo churn, effective
  customer life is about 6–8 years. LTV ≈ 24K × 7 = **$168K**. LTV:CAC ≈
  168K ÷ 15K = **11:1**, far above the 3.2:1 median (Optifai 2026). The
  median is not efficient. A well-run company can sit well above it.

The two halves meet in one judgment: does the cost of acquiring a customer
get paid back fast enough, on a large enough multiple, to fund the growth
you promised the board? The chain makes the answer explicit instead of
felt.

---

## Metric by Metric: Healthy vs Warning

| Metric | Healthy | Warning | What it tells you |
|--------|---------|---------|-------------------|
| Pipeline coverage | 3–4x mid-market, 4–5x enterprise (getSpike 2026) | under 2x, or above 6x with a long cycle | Directional, not law. A team winning 40% of qualified opps needs far less than one winning 15%. Read against your own win rate |
| Pipe-to-spend | 5–8x (getSpike 2026) | under 3x = marketing engine structurally broken; 10x+ = under-investing | Whether marketing is allowed to spend more, not whether it is efficient |
| Win rate | ~29% on qualified (Salesmotion 2026) | Qualified win rate far below ~21–29% while all-opps rate is inflated | You are dragging in unqualified opportunities that waste the pipeline |
| CAC payback | under 12 months (DigitalApplied 2026) | above 12 months, trending up | Whether acquisition returns its cost fast enough for the stage you are at |
| LTV:CAC | 3:1 floor, 5:1+ strong (Optifai 2026) | under 3:1, or falling quarter over quarter | Whether a customer is worth more than it costs to get them |
| NRR | ≥100%; ~102% median (ChurnZero 2026) | under 100% | Whether the existing base grows or shrinks. Under 100%, you out-acquire the leak just to stay flat |
| Quota attainment | Reps at 70–85% | average below 70% (quota too high) or above 85% (quota too low) | The calibration check. Average across B2B is only ~43–47%: most companies set quotas slightly too high |

**The quota calibration logic** (from the ~43–47% average: RepVue Q4 2024
reported 43.14%, Forrester ~47%):

- Reps consistently at **70–85%** → quotas are well-calibrated.
- Consistently **above 85%** → quotas are too low, and you leave money on
  the table.
- Consistently **below 70%** → quotas are too high, or the model is broken.

The ~43–47% average is not a target but a signal that most companies
set quotas slightly too high.

**NRR is the retention gate.** Enterprise median NRR (118%) crushes SMB
(97%): expansion is where enterprise value lives. Companies with NRR at
or above 100% grew roughly **48% year over year** on average (ChartMogul,
SaaS Retention Report, H1 2024). NRR below 100% means the existing base is
shrinking and every new customer only replaces lost revenue.

---

## Cohort Caveats

The headline numbers hide splits. Three caveats change how you use them.

**Stage changes the economics.** CAC payback drops monotonically with ARR:

| ARR band | Payback | LTV:CAC |
|----------|---------|---------|
| Under $1M | 21 months | 2.4x |
| $1–10M | 16 months | n/a |
| $10–50M | 13 months | n/a |
| $50M+ | 11 months | 4.2x |

Source: DigitalApplied (2026) for payback, and Optifai (2026) for
LTV:CAC. A
sub-$1M company at 2.4x LTV:CAC and 21-month payback is normal. The same
numbers at $50M+ ARR mean the model is broken.

**Sales-led vs self-serve CAC is a 16x spread.** $11,400 vs $702
(DigitalApplied 2026). This is a motion choice, not an efficiency gap.
Never compare a sales-led CAC to a self-serve benchmark: you will panic
about a number that is structurally different, not worse.

**The efficiency era reset pre-2023 targets.** CAC payback expectations
tightened from 18–24 months to **12 months** (DigitalApplied 2026).
Post-ZIRP boards judge pipe-to-spend and payback before growth. A 2020
benchmark is a liability in 2026: always check the vintage of the number
you quote.

---

## Common Mistakes and How to Fix Them

- **Reading a single metric in isolation.** "Our CAC is $12K" tells you
  nothing until you pair it with payback and LTV:CAC. Fix: build a paired
  view: CAC alongside payback alongside LTV:CAC, never a single number.
- **Comparing across motions.** Comparing a sales-led CAC to a self-serve
  benchmark manufactures a crisis. Fix: compare like-for-like motion and
  ARR cohort.
- **Treating the 3x coverage rule as physics.** RevOps teams hit quota at
  1.8x coverage and miss at 4x, depending on win rate, cycle length, and
  push rate (Janis Zech). Fix: compute the coverage you need from your own
  win rate, not from a fixed multiple.
- **Gaming win rate by stuffing the pipe with unqualified opps.** This
  inflates all-opportunity win rate while qualified win rate collapses and
  sales wastes time. Fix: track qualified win rate separately and watch
  the gap between it and the all-opps number.
- **Chasing the 3.2:1 LTV:CAC median instead of your own margin math.**
  LTV on gross margin, CAC fully loaded: most teams compute one or the
  other wrong and panic. Fix: use the exact definitions in How to Read
  These Numbers, then compare.
- **Quoting a 2020 benchmark in 2026.** Payback and efficiency targets
  changed materially after the rate cycle. Fix: date every number you put
  in a board deck, and refresh the ones that move.
- **Optimizing volume when the leak is conversion.** Adding top-of-funnel
  spend to a funnel that loses 71% of qualified opps (the flip side of the
  29% win rate, Salesmotion 2026) spends money to feed a hole. Fix: find
  the biggest conversion leak first, then scale the input.

---

## Worked Example: a Company Reads Its Own Dashboard

A representative mid-market company opens its monthly board deck. Numbers
are illustrative but plausible.

**Company:** $8M ARR, sales-led, ACV ~$30K, ~200 customers. Here is what
the dashboard shows, metric by metric, and what each number means when
read against the benchmarks.

| Metric | Company | Benchmark | Read |
|--------|---------|-----------|------|
| Pipe-to-spend | 4.2x | 5–8x healthy (getSpike 2026) | Low. Marketing is not producing enough qualified pipeline for the spend |
| Pipeline coverage | 3.1x | 3–4x mid-market (getSpike 2026) | In range, but coverage is only as good as win rate |
| Win rate: all opps | 21% | ~21% (Salesmotion 2026) | At average |
| Win rate: qualified | 24% | ~29% (Salesmotion 2026) | Below. The leak |
| CAC | $14,200 | $11,400 sales-led median (DigitalApplied 2026) | Slightly above |
| CAC payback | 8 months | 12-month target (DigitalApplied 2026) | Fine, high margin offsets high CAC |
| LTV:CAC | 4.5:1 | 3:1 floor, 5:1+ strong (Optifai 2026) | Fine, above median |
| NRR | 104% | ~102% median (ChurnZero 2026) | Fine, above SMB 97% |
| Quota attainment | 52% | 43–47% average (RepVue Q4 2024) | Slightly above average, still below the 70–85% well-calibrated band |

**The read.** At a glance, coverage looks healthy at 3.1x. But paired with
a qualified win rate of 24% against a 29% benchmark, the company needs
more coverage than the multiple suggests, and the low pipe-to-spend (4.2x
against 5–8x) means it is not generating enough qualified pipeline in the
first place. CAC, payback, LTV:CAC, and NRR are all acceptable: this is
not a unit-economics problem and not a retention problem.

**The action.** Fix qualification (move qualified win rate toward 29% and
stop dragging unqualified opps into the pipe), and rebuild the marketing
engine's ability to produce qualified pipeline before spending more. The
one number that needs attention is not CAC or NRR: it is qualified win
rate and the spend that feeds it. Two fixes, not six.

---

## Agentic Layer: Automate the Tracking

The bottleneck in metrics is not collecting the data but reading it
against the right baseline every week. A human checking a dashboard once a
month catches a leak four weeks late. An agent that surfaces breaches on
the schedule you set catches it in days. The full treatment is
[Guardrails &amp; Measurement](../agentic/guardrails-and-measurement).

### Agentic SOP: the weekly metrics surfacing

| Step | Agent does | Human approves |
|------|-----------|----------------|
| Pull | Reads the live pipeline, CRM, and billing tables on a schedule (daily or weekly) | Sets the schedule and the source system |
| Compute | Calculates coverage, pipe-to-spend, win rate, payback, LTV:CAC, NRR, quota attainment against the dated benchmark set | Owns the benchmark table the agent reads against |
| Compare | Flags any metric outside its healthy band (healthy vs warning table above) | Sets the band thresholds |
| Draft | Writes a one-page breach note: what moved, by how much, the paired metric to check next | Reviews and forwards it |
| Escalate | Auto-escalates breaches that persist two periods in a row | Sets the escalation threshold and recipient |

**The one-prompt starter** (adapt the source names to your stack):

```
You are the weekly metrics watcher for a B2B SaaS GTM engine. Each run,
pull these inputs: qualified pipeline value, quota, sales-and-marketing
spend, closed revenue, opportunities won and their value, customers
acquired, logo churn, expansion revenue, and rep quota attainment.

Compute and compare each against the dated benchmark set I provide:
pipeline coverage (3-4x mid-market), pipe-to-spend (5-8x), qualified win
rate (~29%), CAC payback (under 12 months), LTV:CAC (3:1 floor), NRR
(>=100%), and quota attainment (70-85% well-calibrated).

Output a short breach note. For each metric outside its healthy band,
state: the number, the benchmark, how far off it is, and the ONE paired
metric to check next (coverage pairs with win rate and cycle; CAC pairs
with payback and LTV:CAC; win rate pairs with pipeline quality). Do not
recommend volume changes. Escalate if the same metric breaches two runs in
a row. Return only the breach note.
```

**Three guardrails that keep it honest** (from [Guardrails &amp;
Measurement](../agentic/guardrails-and-measurement)):

1. **Benchmarks are dated.** The agent reads against a dated table. When a
   benchmark goes stale, you update the table, not the agent.
2. **Paired reads only.** The agent never reports a single metric alone:
   every breach carries its paired next-check.
3. **Human owns the thresholds.** The agent flags and drafts. A human sets
   the band and decides what happens. Automation surfaces the leak. It does
   not set the target.

---

## Methodology

These numbers come from the project's compiled benchmark research
(`GTM_METRICS_BENCHMARKS.md`, compiled 2026-08-17). Where a source carries
its own publication date: Salesmotion 2026, DigitalApplied 2026, RepVue
Q4 2024, ChartMogul H1 2024, Pavilion 2024: that date is used. Where a
source carries none, the compilation date is used and marked (2026).

Ranges are preferred over single points throughout, because sources define
the metric differently. Vendor-sourced figures are flagged `(vendor
source)` where they appear. The median B2B SaaS company is not efficient:
every benchmark here is where average sits, not where a well-run company
should aim.

---

## Sources

- [getSpike, SaaS Marketing Benchmarks](https://getspike.ai/blog/saas-marketing-benchmarks/): pipeline coverage, pipe-to-spend (as of 2026).
- [gtm-consult, Pipeline Coverage](https://www.gtm-consult.com/blog/pipeline-coverage): enterprise coverage logic (as of 2026).
- [Artemis GTM, Pipeline Metrics](https://artemisgtm.ai/resources/pipeline-metrics/): pipeline metrics reference (as of 2026).
- [Janis Zech (LinkedIn), "The 3x pipeline coverage benchmark is a myth"](https://www.linkedin.com/posts/janiszech_the-3x-pipeline-coverage-benchmark-is-a-myth-activity-7376582450199822337-Kf2i): coverage is a function of win rate, cycle, push rate.
- [Salesmotion, Sales Win Rate Benchmarks 2026](https://salesmotion.io/blog/sales-win-rate-benchmarks-2026): win rates by qualification and deal size (2026).
- [DigitalBloom, 2025 B2B SaaS Funnel Benchmarks](https://thedigitalbloom.com/learn/pipeline-performance-benchmarks-2025/): funnel performance reference (2025).
- [Optifai](https://optifai.ai/learn/): sales velocity, LTV:CAC, NRR, quota benchmarks (N=939 B2B SaaS, as of 2026).
- [DigitalApplied, CAC Benchmarks 2026](https://www.digitalapplied.com/blog/customer-acquisition-cost-benchmarks-2026-industry): CAC by motion, payback trends (2026).
- [Improvado, LTV to CAC Ratio Guide](https://improvado.io/blog/ltv-to-cac): ratio reference.
- [ChurnZero, SaaS Customer Retention Benchmarks](https://churnzero.com/blog/saas-customer-retention-benchmarks/): median NRR 102% (as of 2026).
- [ChartMogul, The SaaS Retention Report](https://chartmogul.com/reports/saas-retention-the-new-normal/): NRR ≥100% → ~48% YoY growth (H1 2024).
- [RepVue, Cloud Sales Index Q4 2024](https://www.repvue.com/cloud-index/2024/Q4): quota attainment 43.14% (Q4 2024).
- [Forrester](https://www.forrester.com/blogs/your-companys-quota-attainment-is-probably-around-50-and-thats-not-a-bad-thing/): quota attainment ~47%.
- [Pavilion 2024 GTM Benchmark Report](https://www.pavilion.io/): IC attainment 54–62%. Ebsta/Pavilion 1H 2024 ~25%.
- [OpenView, Sales Compensation / Quota Hit Rates](https://openviewpartners.com/blog/your-guide-to-sales-compensation-plg/): quota calibration logic.

---

## Further Reading

- [GTM Metrics](../foundations/gtm-metrics): the framework these numbers feed.
- [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks): the funnel math that drives coverage and win rate.
- [Funnel Benchmarks](../data/funnel): how the funnel leaks stage by stage.
- [Sales Cycle Benchmarks](../data/sales-cycle-benchmarks): how cycle length shapes the coverage you need.
- [Revenue Operations](../foundations/revenue-operations): how these metrics get owned and operationalized.
- [Pricing as GTM](../data/pricing-as-gtm): pricing drives ARPA, LTV, and payback.
