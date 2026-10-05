---
class: agentic
sidebar_position: 21
title: Probabilistic Pipelines
description: "How to run an agent pipeline as a distribution: distribution thinking, sample-size rules, miss-rate reporting, a claims-trace rule, and a worked outbound run."
last_updated: 2026-10-05
status: active
tags: [agentic, ai-era-gtm]
---

# Probabilistic Pipelines

## Thesis

- Classic funnels treat each step as deterministic. Agent pipelines are not. Every run is a draw from a distribution.
- Design for the distribution: run wide, expect misses, and measure the rate.
- Land outputs in a deterministic trust layer. Agents propose, and an append-only store records what was known when.

## One run is a sample, not a result

A human rep sends one email and reads one reply. An agent pipeline sends a thousand emails and reads a thousand outcomes. The difference is not volume. The difference is that the pipeline now holds a distribution, and a single output stops being the result.

A decision model that returns a probability is a reproducible category, not a novelty [1]. When the model returns 0.71, it reports a belief, not a fact. Treat every downstream action as a draw from the distribution behind that number. One lucky draw is not the rate. The rate is the rate.

The discipline: separate the sample from the estimate. The sample is what you saw this week. The estimate is what the pipeline will do next week. You cannot read the estimate off one sample.

## Distribution thinking replaces the anecdote

The failure is human, not technical. A team runs the pipeline once, gets a great output, and copies that output into the template. The next run inherits the template and the luck. Nobody measures whether the great output was typical.

Distribution thinking asks a different question. Not "did this run work?" but "what fraction of runs work, and how wide is the spread?" A pipeline with a 40 percent success rate and a tight spread beats a pipeline with a 60 percent rate that swings between 10 and 90.

Two numbers define the shape of the distribution: the rate and the sample size. Report both. A rate without a sample size is a claim with no error bar.

## Sample-size rules

Sampling noise shrinks as the sample grows. The rough arithmetic for a rate near p, measured to a half-width h at 95 percent confidence, is:

n ≈ 1.96² · p · (1 − p) / h²

That formula turns a guess about "enough data" into a number. Small rates need large samples, because the noise around a small rate is a large fraction of the rate.

| Observed rate | Half-width you accept | Runs needed (95%) |
|---|---|---|
| 5% | ±1 point | ~1,800 |
| 5% | ±2 points | ~460 |
| 20% | ±2 points | ~1,500 |
| 50% | ±5 points | ~380 |

Three rules follow from the table.

1. **Decide the sample size before you scale.** Pick the half-width you need, read the runs off the table, and run that many before you judge the pipeline.
2. **Never compare two arms on a handful of runs.** A 4 percent reply rate and a 6 percent reply rate look different until you compute the noise. Below the table's sample size, they are the same number.
3. **Re-baseline when the input changes.** A new list, a new offer, or a new model starts a new distribution. The old rate does not carry over.

## Miss-rate reporting

A pipeline that hides its misses looks better than it is and fails later, in front of a customer. Publish the miss rate next to the hit rate, and name each miss by class.

A run report has four lines:

- **Attempts.** How many draws the pipeline took.
- **Hits.** How many cleared the gate.
- **Misses by class.** Not "12 failures," but "7 no-source, 3 wrong-persona, 2 duplicate."
- **Base.** The rate you compare against, named.

The miss classes are the useful part. A rising no-source miss means the retrieval step broke. A rising wrong-persona miss means the ICP filter drifted. The total miss rate tells you that something moved. The classes tell you what.

## Where the rate lands: the deterministic trust layer

The pipeline is probabilistic. The store it writes to is not. Agents propose, and the append-only store records what was known when [2]. A correction is a new line that outvotes the claim it fixes, so the history stays intact.

That split is the design. The probabilistic layer runs wide and cheap. The deterministic layer holds one answer per question and never rewrites the past. A downstream reader trusts the store, not the run. When the model's belief changes, the store records a new line. The old line stays visible, so a later reader can see why the answer moved.

## Claims-trace rule for drafts

Every claim in an agent draft ties to a source row. A claim without a row does not ship. This is the same page contract the wiki holds, moved into the pipeline.

The trace runs in both directions. Forward: each sentence in the draft names the source row that backs it. Backward: each source row names the drafts it fed. When a row turns out wrong, you can find every draft it touched and pull them.

A draft that passes the trace is checkable, not good. Checkable is the floor.

## Worked outbound run

Here is a real pipeline run on a 500-contact outbound segment.

```text
segment: 500 contacts, mid-market SaaS, matched ICP v3
step 1  enrich           500 attempted, 486 enriched, 14 miss (no match)
step 2  draft           486 drafted, 41 miss (no source row)
step 3  grade           445 graded, 445 pass, 0 fail
step 4  human send      445 queued, 388 sent, 57 held for review
result                  388 sent, 19 replies, 5 meetings booked
```

The readout, in the reporting format above:

| Metric | Value | Base |
|---|---|---|
| Send rate | 78% of enriched | held for review is the delta |
| Reply rate | 4.9% of sent | prior quarter: 4.2% |
| Meeting rate | 1.3% of sent | prior quarter: 1.0% |

The reply rate beats the prior quarter, but 388 sends is a small sample. At this rate, the half-width is roughly 2.2 points, so 4.9 percent and 4.2 percent overlap. The pipeline looks better than the base. The sample does not yet prove it. Run the segment three more times before you scale.

That readout is the whole discipline in one place: a rate, a base, a sample size, and the gap between them.

## Failure modes

**Copying the winning run.** The team treats one great output as the new baseline. The estimate becomes a story about the past. Fix: measure the rate across runs, never the best run.

**Scaling below the sample size.** The pipeline beats the base on 40 sends and the team triples the volume. The result regresses to the mean and the program loses its sponsor. Fix: read the sample size off the table before you scale.

**Hiding the miss rate.** The report shows hits only. The hidden misses surface as a customer complaint or a burnt domain. Fix: publish misses by class next to the hit rate.

**Letting the trust layer drift probabilistic.** Someone lets the agent overwrite a stored answer instead of appending a correction. The history dies and no one can explain the current value. Fix: append only, and outvote.

**Judging the pipeline on one arm.** The team ships the variant that won a coin-flip test. Fix: compute the noise before you call a winner.

## Variants by pipeline maturity

The pipeline earns its sample size as it matures. A new pipeline has no history, so it earns nothing.

| Maturity | Sample discipline | Autonomy |
|---|---|---|
| New pipeline, no history | Run to the table's sample size before any judgment | Draft only, 100% human review |
| Proven rate, stable inputs | Weekly rate with a named base | Draft and enrich, spot-check send |
| Stable rate, measured misses | Miss classes tracked per run | Execute within thresholds, exception review |
| Trusted pipeline, quarterly re-certification | Rate held across a quarter | Low and medium tiers run alone |

The gate to the next row is the same in every case: the rate holds, the miss classes stay flat, and the store stays append-only. Enthusiasm does not move a pipeline down this table. Numbers do.

## SOP: run a probabilistic pipeline

```text
SOP: RUN-A-PIPELINE
1. Name the segment, the offer, and the ICP version.
2. Pick the half-width you need, then read the sample size off the table.
3. Run the pipeline to that sample size before you judge it.
4. Grade every draft against the page contract (claim, source, as-of).
5. Trace every claim to a source row. Drop the draft when a row is missing.
6. Write every output to the append-only store. Corrections outvote, never overwrite.
7. Report attempts, hits, misses by class, and the named base.
8. Compute the half-width before you call a winner or scale.
```

Print this SOP and run it on every pipeline. It turns "does the agent work?" into a measured question with a named base and a sample size.

## Cross-references

- [Forge: Agents That Grade Each Other](./the-forge-agents-that-grade-each-other): the grader that scores each draft this pipeline produces.
- [Claims Stores](./claims-stores-append-only-research): the append-only store the rate lands in.
- [Human Merge Gates](./human-merge-gates): the queue that settles merge conflicts.
- [Skill Routing at Scale](./skill-routing-at-scale): where the decision model picks the route.
- [Measuring Agent Hit Rates](./measuring-agent-hit-rates): the weekly sampling protocol that keeps the rate honest.
- [Guardrails and Measurement](./guardrails-and-measurement): the safety layer that caps a bad run.

## Sources

- [1] [Latent Space: 6 open clones of Jev in 2 days](https://www.latent.space/p/ainews-here-are-6-clones-of-jev-in), as-of 2026-09-19: System 1 decision models that return probabilities are a reproducible category.
- [2] [polydao: append-only claim store thread](https://x.com/polydao/status/2101910293769273594), as-of 2026-09-21: corrections are new lines that outvote the claim they fix.
