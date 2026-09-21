---
sidebar_position: 5
title: Model tiering and cost discipline
description: Match model cost to the cost of being wrong, run a two-tier baseline, escalate only on a demonstrated gap, and measure cost per task at equal quality.
tags: [agent-ops, model-routing, cost-discipline, llm-strategy]
status: active
last_updated: 2026-09-20
---

# Model tiering and cost discipline

Most fleets overspend on intelligence in two directions at once: frontier
models read logs that a free model reads fine, and cheap models write
customer-facing prose they cannot carry. Both failures come from the same
missing discipline. The model's price must match the cost of being wrong for
that task, and something other than habit must enforce the assignment. The
model's price must match the cost of being wrong for the task it runs.

## Cost of being wrong sets the tier

Before asking "which model," ask "what does a wrong answer cost here?"

| Wrong-answer cost | Examples | Right tier |
|---|---|---|
| Near zero, easy to detect | Tagging, dedupe, routing | Cheapest capable model or a typed gate |
| Low, but errors compound | Digests, summaries, internal notes | Mid-tier or free workhorse |
| High and hard to detect | Customer prose, strategy, code that ships | Strongest available model |

A frontier model routing tickets burns money on a decision a 400M-parameter
classifier makes for free. A budget model writing your launch email risks the
one artifact everyone will read. Map every recurring job in your fleet to a
row in that table, and the tier assignments fall out.

## A two-tier baseline works

Start with exactly two tiers and resist the urge to add a third until the
first two hurt:

- **writes** - jobs that produce artifacts people or systems consume: drafts,
  decisions, code, customer prose.
- **reads** - jobs that consume artifacts and produce judgments about them:
  classification, routing, compilation, checks.

Keep the mapping in one config file that every job reads. Per-job model pins
are how a single provider deprecation takes out forty jobs in one night; a
single mapping file makes the same event a one-line fix.

## Escalate only on a demonstrated gap

The strongest free or cheap model is the default. Escalation needs evidence,
not vibes:

1. The current tier failed a real check or exhausted a retry budget.
2. Historical success on this task class sits below a known threshold.
3. Expected total cost of more cheap retries plus cleanup exceeds one strong
   call.
4. A tested routing rule already says so.

Every escalation gets a logged reason code: from model, to model, trigger,
cost hypothesis. Without the log, escalation becomes a feeling, and feelings
drift upward in cost. Inference prices have fallen between 9x and 900x per
year depending on task [1], so yesterday's strong-model job may be a
free-tier job today; re-price the fleet on a schedule.

## Cost per task at equal quality is the metric

Not tokens. Not dollars per day. Cost per task at equal quality:

```text
cost_per_task = (tokens_in + tokens_out) x price / 1M
quality       = pass rate on that task's own check
```

Optimize the pair, never the first number alone. A free model that fails
20% of runs and triggers human cleanup is more expensive than a mid-tier
model that passes 99%. When a cheaper model matches quality on a measured
task, switch and log the switch; when it does not, stop re-testing it every
month out of hope.

For bounded decisions, the strongest cost move is removing the LLM entirely:
a typed gate answers routing and classification questions at near-zero cost.
See [Jev-style decision gates](./decision-gates).

## Failure modes and how to fix them

**Hand-classified tiers drift.** Someone tiered every job by hand; six months
later half the assignments are stale. Fix: derive tier assignments from job
type, keep them in one file, and let a decision gate enforce the mapping.

**Quality is unmeasured, so downgrades feel free.** The team swaps a strong
model for a free one and nobody measures pass rate. Fix: every recurring job
gets its own check, and the check result ships with the artifact.

**Escalation without a reason code.** "It felt hard" becomes the routing
policy and the bill climbs. Fix: no escalation without a logged trigger, and
a weekly review of the escalation log for patterns.

**Single-provider exposure.** The whole fleet runs through one provider, and
an outage is a fleet outage. Fix: keep the tier mapping provider-agnostic and
test a second provider before you need it.

## Variants by company stage

**Solo and seed.** Two tiers, one config file, zero custom infrastructure.
Free-tier reads, one strong model for writes.

**Series A to B.** Add the decision gate for routing, per-job budgets, and
measured quality checks per task class. Cost discipline starts compounding
here.

**Enterprise.** Tier policy becomes governance: model allowlists per data
class, audit trails for escalations, and documented re-pricing reviews as
inference prices keep falling [1].

## Where to go next

- [Jevons economics of AI GTM](./jevons-economics) for why re-pricing is an
  annual ritual.
- [Jev-style decision gates](./decision-gates) for removing the LLM from
  bounded decisions.
- [Scheduled agent fleets](./cron-fleets) for enforcing the mapping across
  many jobs.

## Sources

- [1] [Epoch AI: LLM inference price trends (2025)](https://epoch.ai/data-insights/llm-inference-price-trends) - inference prices fell 9x to 900x per year depending on task milestone.
- [2] [a16z, LLMflation by Guido Appenzeller (November 12, 2024)](https://a16z.com/llmflation-llm-inference-cost/) - roughly 10x per year constant-quality decline at equal quality.
