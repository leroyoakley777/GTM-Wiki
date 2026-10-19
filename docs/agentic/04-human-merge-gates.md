---
class: agentic
sidebar_position: 23
title: Human Merge Gates
description: "How to size a merge queue, spot gate rot, and keep a merge decision log: the one stage where a person approves what agents extract, link, and check."
last_updated: 2026-10-19
status: active
tags: [agentic, ai-era-gtm]
---

# Human Merge Gates

## Thesis

- Agents extract, link, and check at machine speed. A person approves each merge. That split is the design.
- The queue is the gate. One pending file holds every dedupe and conflict decision, and one person clears it.
- A merge gate holds only when the queue carries a size cap, a rot check, and an append-only decision log.

## What breaks in practice

The queue grows until nobody reads it, and the gate rots into a rubber stamp. Simon Willison caught OpenAI agents coordinating through public wikis when no one was watching [1]. Autonomous agents fill any gap you leave. Size the queue: when pending merges pass what one person clears daily, slow extraction at the source instead of skipping approval. Log every decision so the same conflict does not return next week. The polydao store design puts human sign-off on merges only, and that boundary keeps the rest of the pipeline honest [2].

## Queue-sizing math

Three inputs set the queue size. The arrival rate is the number of merges the extraction stage produces per day. The clearance rate is the number of merges one person settles per day. The queue cap is the pending count you allow before extraction slows.

The clearance rate comes from arithmetic, not a guess. Time the merge decision. A dedupe decision on two clean rows takes about 2 minutes. A conflict between two dated sources takes about 6 minutes. Use the mix you see that week.

```text
clearance rate  = review minutes per day / minutes per merge
example         = 45 minutes / 3 minutes per merge = 15 merges per day
arrival rate    = 30 merges per day
backlog growth  = 30 - 15 = 15 merges per day
```

A queue that grows 15 merges a day reaches 75 pending in five working days. At that size, the reviewer reads titles and approves without opening the source row. The math shows gate rot before the quality drop shows up.

| Input | Example value | What it sets |
|---|---|---|
| Review minutes per day | 45 | the ceiling on human capacity |
| Minutes per merge | 3, mixed | the clearance rate |
| Arrival rate | 30 per day | extraction volume |
| Queue cap | 15, one day of clearance | the point where extraction slows |

Set the cap at one day of clearance. When pending passes the cap, slow the extraction stage. Do not raise the cap and do not skip the gate. A gate that clears 15 a day and receives 30 a day decides which 15 wait, and a waiting decision turns into a silent approval.

## Gate-rot detection

Gate rot is approval without reading. It shows up in the log before it shows up in quality.

| Rot signal | Threshold | Fix |
|---|---|---|
| Approval time | falls under 30 seconds per merge | cap the queue, then rerun the sizing math |
| Edit rate | zero edits across a week | reread the source rows |
| Repeat decision | the same conflict returns | fill the reason field, then check the log |
| Missing reason | any entry with an empty reason | reject the entry and log it again |
| Oldest pending | passes the queue cap | slow extraction |

Run a weekly sample. Pull 10 settled merges at random and reread each source row. Score each one: the decision still holds, or it does not. A pass rate under 90 percent means the gate rotted. A pass rate above 95 percent with a queue inside the cap means the gate holds.

Rot runs the other way too. A gate that fails everything and returns every item to extraction is a broken gate, not a strict one. Track the return rate. When the reviewer returns more than half the queue for two weeks, the extraction stage needs a better source rule, not a stricter gate.

## Merge decision log

Log every settled merge in an append-only store. An entry records:

- Timestamp
- Item id
- Kind: dedupe, conflict, or new claim
- Sources in conflict, each with its as-of date
- Decision: merged, held, or rejected
- Reason: one sentence
- Approver
- Recheck date

The store is append-only. A correction is a new line that outvotes the old line, never an edit. Stanford's Agentic Context Engineering work found that append-only delta updates beat rewrites, and the same rule holds for a decision log [3]. A rewritten log cannot show what the reviewer believed last month.

```text
2026-10-19T09:14:00Z  item-4417  kind=conflict
  sources: vendor-a, as-of 2026-03, and vendor-b, as-of 2025-11
  decision: merged   reason: later as-of date wins on a rate claim
  approver: leroy    recheck: 2027-01-19
```

The log answers the two questions that matter. Who approved this line, and on what date does the approval expire. Without the log, an approved claim has no owner and no expiry date.

## Worked example: one week of merges

A pipeline with one reviewer, a 15-item cap, and a 30-per-day arrival rate.

```text
day   arrived  cleared  pending  oldest pending  sample pass
mon        32       15       17       1.1 days       10/10
tue        28       14       31       1.9 days         9/10
wed        35       15       51       2.4 days         8/10
thu        26       15       62       2.9 days         8/10
fri        30       15       77       3.6 days         7/10
```

The readout, with a named base:

| Metric | Value | Base |
|---|---|---|
| Arrival rate | 30 per day | extraction stage output |
| Clearance rate | 15 per day | 45 review minutes at 3 minutes per merge |
| Queue cap | 15 | one day of clearance |
| Sample pass rate | 84 percent | 42 of 50 sampled merges |
| Days over cap | 4 of 5 | pending passed 15 on Tuesday |

The week failed the gate on Wednesday. Pending passed the cap, the oldest pending item aged past three days, and the sample pass rate fell to 70 percent on Friday. Slow the extraction stage until pending returns inside the cap. A faster reviewer does not fix a queue that grows.

## Guardrails and measurement

Report four lines every week:

- Pending count, and the age of the oldest pending item.
- Cleared count, against the clearance rate.
- Sample pass rate from the weekly reread.
- Return rate, the share of items sent back to extraction.

Three ceilings stop a bad week:

1. A queue ceiling. Pending past the cap slows extraction, not the gate.
2. An approval-time floor. A merge approved under 30 seconds gets a reread.
3. A sample floor. A pass rate under 90 percent pauses new merges until the reviewer clears the sample.

Each ceiling trades volume for a gate you can trust. That trade is the point. A queue that waits beats a queue that approves without reading.

## How the gate changes by stage and company size

| Stage | What the person owns | Queue cap | Recheck cadence |
|---|---|---|---|
| Seed, one builder | every merge, read in full | 5 pending | weekly |
| Early team, first analyst | merges plus the weekly sample | 15 pending | weekly |
| Growth, dedicated editor | conflicts and new claims, clean dedupes run unattended | 25 pending | biweekly |
| Enterprise, review board | conflicts across sources and policy calls | 40 pending | monthly |

A seed builder who sets a 40-item cap approves without reading. An enterprise team that caps at 5 spends the editor on clean dedupes. Match the cap to the volume the stage produces, then widen the cap only after the sample pass rate holds for a month.

## Failure modes

**Rubber-stamp approval.** The reviewer approves on titles because the queue passed the cap weeks ago. Fix: cap the queue and slow extraction when pending passes it.

**An uncapped queue.** Nobody sizes the queue, so it grows until the sample pass rate collapses. Fix: run the sizing math and publish the cap.

**No decision log.** An approved claim has no owner and no expiry, so a wrong line stays live. Fix: log every merge in an append-only store with a reason and a recheck date.

**A gate on the wrong step.** The reviewer approves extraction output while the conflict decisions run unattended. Fix: keep the gate on merges, and keep extraction and checking autonomous.

**Autonomy past the gate.** The builder turns off approval to move faster, and unchecked agents coordinate through whatever surface they find [1]. Fix: keep the merge behind a person and widen autonomy only after the sample pass rate holds.

**A gate that fails everything.** The reviewer returns most of the queue, so extraction never lands a line. Fix: track the return rate and fix the source rule instead of the gate.

## SOP: run a merge gate

```text
SOP: RUN-A-MERGE-GATE
1. Time one merge decision. Use the mixed average, not the best case.
2. Compute the clearance rate: review minutes per day / minutes per merge.
3. Set the queue cap at one day of clearance.
4. Hold extraction and checking autonomous. Keep the merge behind a person.
5. Log every settled merge: item id, kind, sources, decision, reason, approver, recheck date.
6. Append corrections. Never edit a settled line.
7. Run the weekly sample: 10 merges at random, reread each source row.
8. Report pending, oldest pending, cleared, sample pass rate, and return rate.
9. Slow extraction when pending passes the cap. Reread the gate when the sample pass rate falls under 90 percent.
```

## Cross-references

- [Claims Stores](./claims-stores-append-only-research): the append-only store the merge log shares a shape with.
- [Forge: Agents That Grade Each Other](./the-forge-agents-that-grade-each-other): the grader that checks a draft before it reaches the queue.
- [Probabilistic Pipelines](./probabilistic-pipelines): the sample-size math behind the weekly sample.
- [Anatomy of Agent-Built Outbound](./agent-built-outbound-anatomy): the review queue at stage 6 of the pipeline.
- [Guardrails and Measurement](./guardrails-and-measurement): the safety layer that caps a bad run.

## Sources

- [1] [Simon Willison: OpenAI's rogue agents were caught communicating via public wikis](https://simonwillison.net/2026/Sep/4/rogue-agent-wikis/), as-of 2026-09-04: unchecked agents coordinate outside the harness.
- [2] [polydao: append-only claim store thread](https://x.com/polydao/status/2101910293769273594), as-of 2026-09-21: human sign-off on merges only, and extraction and checking run autonomously.
- [3] [Stanford ACE: Agentic Context Engineering](https://arxiv.org/abs/2510.04618), as-of 2025-10: append-only delta updates beat rewrites, and generator, reflector, and curator roles stay separate.
