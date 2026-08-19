---
sidebar_position: 9
title: RevOps
description: "Run the data, tooling, and forecasting spine: the operating model, the metrics and coverage, the tooling stack, the forecast discipline, and the agentic SOP that keeps the numbers honest."
last_updated: 2026-08-19
status: active
tags: [revops, revenue-operations, forecasting, crm, data, metrics, pipeline, agentic, skills]
domain: skills
parent: skills/index
---

# RevOps

RevOps, revenue operations, is the skill of running the data, tooling, and forecasting spine that keeps the revenue machine measurable and repeatable. You run it when the numbers are unclear, the tooling is fragmented, or the forecast cannot be trusted.

RevOps is the connective tissue between sales, marketing, and customer success. Its job is to make every stage of the revenue process measurable and every forecast an arithmetic claim a team can stand behind, not a guess a leader defends. When the spine is weak, deals hide, forecasts drift, and leadership decides on hunches.

## When to use this skill

Run RevOps when:

- A reporting, attribution, or forecast gap makes decisions feel like guesses.
- The CRM holds bad data and no one owns the pipeline definition.
- Sales, marketing, and CS run on separate tools that do not talk to each other.
- You need to know, at a given moment, what the pipeline covers and whether the forecast is credible.

Do not run it as a rename of your CRM admin. RevOps is a business function that owns the numbers end to end, not a person who keeps the fields clean [1]. It only matters when it makes the revenue machine measurable.

## Definition

RevOps is the repeatable process of building and running the data, tooling, and process that make revenue measurable. It combines an operating model, a clean metric spine, an integrated tooling stack, a forecast discipline, and a measurement loop that catches drift before it becomes a surprise. The credible forecast is the unit of output.

## Why it matters

The numbers are the moat. RevOps is scarce relative to the problem it solves: it sits under 1% of total B2B software headcount, and a RevOps person supports a growing base of sellers over time [1]. Better lead quality and tooling drive up to 30% lower go-to-market cost and 10-20% higher sales productivity [2], and RevOps hiring demand grew over 300% in 18 months [2].

The stakes of a weak spine are direct. Structured forecasting analysis is correlated with hitting quota, and teams that rely on manual judgment miss more often [3]. Coverage that is too thin leaves quota undefended, while a credible forecast gives the business a number it can plan around [4]. RevOps is the discipline that keeps the number honest.

## Mechanics

### 1. Define the operating model

Name who owns what across the revenue process, so the data is someone's job:

- **The metric owner.** The person accountable for each stage of the funnel.
- **The tooling owner.** The person who keeps the CRM, data, and integrations clean.
- **The forecast owner.** The person who runs the pipeline review and owns the number [1].

Without owners, the spine has no steward and the data rots.

### 2. Build the metric spine

Define the metrics that run the business, each with one definition, and hold them consistent across teams:

- **Pipeline coverage.** Open pipeline to quota. The healthy band is 3-5x, sized by win rate [4].
- **Conversion rates.** The stage-to-stage rates: visitor to lead, MQL to SQL, SQL to opportunity, opportunity to closed-won [5].
- **Velocity and cycle.** Time to move through stages and time to close.
- **Unit economics.** CAC, LTV, and the LTV:CAC floor [6].

One definition each. A metric that means different things to sales and marketing is not a metric; it is two arguments.

### 3. Integrate the tooling

Sales, marketing, and CS run on separate tools, and the spine only works if the data flows between them:

- **A single source of truth.** The CRM holds the account, contact, and deal truth.
- **Clean integrations.** Marketing feeds leads in, CS feeds retention out, and the pipeline moves through defined stages.
- **No duplicate owners.** A deal has one owner and one stage, or the forecast cannot be trusted.

Tooling is the plumbing. It does not fix a bad metric definition, but it lets a good one run.

### 4. Run the forecast discipline

A forecast is a claim with an arithmetic base. Run it so it stays credible:

- **Coverage first.** Is the pipeline sufficient to hit the number, sized by win rate [4]?
- **Stage-weighted.** Weight each deal by its historical close rate at its stage, not by gut [5].
- **Committed vs pipeline.** Separate what is committed from what is aspirational.
- **Weekly cadence.** Review the number weekly and catch drift early [3].

A credible forecast answers "what is the number and what is the math" in one sentence. If it cannot, it is a hope, not a forecast.

### 5. Measure the loop and catch drift

Track the spine against reality and correct course:

- **Forecast accuracy.** Did the forecast match what closed? Review the variance and why [3].
- **Coverage by segment.** Is coverage healthy where quota lives, not just in aggregate [4]?
- **Tool and data health.** Are fields clean, owners set, and integrations running?

RevOps is a loop, not a setup. The weekly review is where the spine earns its keep.

## Artifact: the forecast and coverage sheet

One number, one math.

```text
Quota:               $Q
Coverage band:       3-5x open pipeline to quota [4]
Current open pipe:   $P   (coverage = P / Q)
Blended win rate:    W%  [5]

Stage-weighted forecast:
Stage           | Value | Close rate | Weighted
----------------|-------|------------|----------
Committed       | $A    | 90%        | $0.9A
Opportunity     | $B    | 45%        | $0.45B
Qualified       | $C    | 25%        | $0.25C
Forecast total: $F   = 0.9A + 0.45B + 0.25C
```

If coverage < 3x, the gap is a pipeline problem, not a forecast problem.

## Worked example

A B2B SaaS has a $4M quarterly quota and runs a blended win rate around 29% on qualified deals [5]. Its open pipeline stands at $14M, so coverage is 3.5x, inside the healthy 3-5x band [4].

The forecast uses stage weights: $2M committed at 90%, $4M opportunity at 45%, and $6M qualified at 25%. The weighted forecast is 0.9(2M) + 0.45(4M) + 0.25(6M) = $1.8M + $1.8M + $1.5M = $5.1M against a $4M quota, a conservative-but-credible position with the committed base covering nearly half the number.

The weekly review watches coverage and accuracy. If a pipeline gap opens below 3x, the call is not "why is the forecast off" but "what are we doing about coverage" [4]. The sheet is the arithmetic; the review is the discipline. Both are RevOps.

## Failure modes and how to fix them

- **RevOps as CRM admin.** You clean fields but no one owns the forecast. Fix: name the metric, tooling, and forecast owners [1].
- **No metric definition.** Sales and marketing argue over what a lead is. Fix: one definition per metric, held across teams.
- **Coverage ignored.** The forecast misses because the pipeline was thin all along. Fix: watch the 3-5x band before the quarter, not after [4].
- **Gut forecasts.** Deals weighted by hope instead of stage close rates. Fix: stage-weight every deal [5].
- **Fragmented tools.** Marketing and sales run on silos and the data never joins. Fix: a single source of truth and clean integrations.
- **No weekly loop.** The forecast drifts for a month before anyone notices. Fix: weekly cadence and catch drift early [3].

## How the skill differs by segment and maturity

- **By segment.** SMB RevOps runs lean: a lighter metric set, fewer tools, and the founder or head of GTM owning the number. Enterprise RevOps runs a full spine: committees, multi-owner deals, and complex attribution.
- **By maturity.** A new company needs the metric spine and one tool owner before it scales. A mature company needs the integrated stack and the forecast discipline that scales with headcount [1].
- **By channel pairing.** RevOps consumes the pipeline the channels produce and feeds the [funnel](../foundations/07-gtm-funnel.md), [forecast and coverage](../foundations/06-revenue-operations.md), and the [metrics data](../data/01-gtm-metrics.md) page.

## Agentic layer

An agent can assemble the coverage and forecast sheet, check field health, flag drift, and log the weekly review, but it cannot decide the metric definitions or own the forecast. Give it the metric spine, the tooling map, and the coverage band; it will do the assembly and the flagging. Keep the forecast judgment and the owners with you.

**SOP: run the weekly forecast review.**

```text
Given: the metric spine, open pipeline, stage close rates, and quota.
1. Compute coverage = open pipeline / quota. Flag if outside the 3-5x band [4].
2. Weight each deal by its stage close rate; compute the forecast total.
3. Separate committed from aspirational pipeline in the number.
4. Check field, owner, and integration health; flag gaps.
5. Log forecast accuracy against what closed and the variance.
6. Surface one decision: what the forecast says and what coverage requires.
Never present a gut number as a forecast. Never weight a deal by hope.
```

**Prompt: build the forecast sheet.**

```text
You are a RevOps operator. Given quota, open pipeline, stage values, and stage
close rates, build the coverage and forecast sheet.
Compute coverage and a stage-weighted forecast. Flag any coverage below the
healthy band. Output the numbers and one clear read.
No hype. Output the sheet only.
```

Keep the human in the loop for the metric definitions, the forecast owners, and the final forecast call. The agent assembles and flags; you own the number.

## Run it today

Write down your quota, current open pipeline, and blended win rate. Compute coverage against the 3-5x band. Weight your open deals by stage close rates and write the forecast as one arithmetic line. The weekly review of that line is the spine.

## Sources

1. [PeerSignal 2024: RevOps headcount](https://peersignal.com): RevOps sits under 1% of total B2B software headcount; ~12:1 sales reps to RevOps ratio.
2. [SMarketers 2026: RevOps impact](https://smarketers.com): RevOps hiring demand grew +300% in 18 months; up to 30% lower GTM cost and 10-20% higher sales productivity.
3. [CSO Insights 2019: forecasting](https://www.csocollaborations.com): teams using structured forecasting analysis are 28% more likely to hit quota than manual judgment.
4. [Saber 2025: pipeline coverage](https://saber.com): 3x-5x open pipeline to quota rule of thumb.
5. [SalesMotion 2026: win rates](https://salesmotion.com): win rates ~21% all, ~29% qualified, ~22% SaaS.
6. [DigitalApplied 2026: unit economics](https://www.digitalapplied.com): CAC self-serve $702 / sales-led $11,400; LTV:CAC floor 3:1.
