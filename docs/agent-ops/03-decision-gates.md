---
sidebar_position: 3
title: Jev-style decision gates
description: Put a millisecond, near-zero-cost typed classifier in front of every bounded GTM decision before any large model spends a token.
tags: [agent-ops, decision-gates, jevons-paradox, classifiers, cost-discipline, model-routing]
status: active
last_updated: 2026-09-20
---

# Jev-style decision gates

Most agent systems ask a large language model questions a tiny classifier could
answer. Every routed ticket, every scored lead, every yes/no triage call burns
tokens, seconds, and dollars when a model measured in megabytes would answer
in milliseconds for free. A decision gate is a small, typed classifier that
sits in front of your agents and answers only bounded questions. This page
teaches when to build one, how to install it without breaking your system, and
why the economics now force the question.

## What a decision gate is

A decision gate answers typed questions and nothing else:

- **choice** - pick one label from a fixed list: which team owns this reply,
  which tier runs this task, is this lead in segment A or B.
- **score** - return one rubric level, zero-based: how hot is this signal, how
  draft-ready is this note.
- **boolean** - return a probability on one question: does this email ask for
  money back, is this a billing complaint.

It produces no prose. It carries no conversation. It reads one input and
returns a validated, calibrated answer with a confidence value. The laya-mlx
project is a public example: an open-weight 421M-parameter model that serves
`choice`, `score`, and `noul` (boolean) questions from a local runtime [5].
We measured about 18 milliseconds per decision and under 1 GB of memory on an
Apple M4 in September 2026, entirely offline. No cloud call, no API key, no
per-decision cost.

Compare that with the same question routed to a frontier model: a round trip
measured in seconds, a prompt you must re-assemble every time, and a bill you
pay per token. The gate gives up fluency and judgment. For a bounded choice,
it never needed either.

## Why the economics force this now

William Stanley Jevons observed in 1865 that efficiency in coal use did not
reduce coal consumption. It raised it, because cheaper energy opened new uses
faster than it saved the old ones [1]. When Microsoft's CEO posted "Jevons
paradox strikes again" about AI in January 2025, he was pointing at the same
mechanism: as intelligence gets cheaper, its use explodes [2].

The price data backs him. Epoch AI finds that LLM inference prices have fallen
between 9x and 900x per year, depending on the task milestone [3]. a16z's
LLMflation analysis puts the decline at roughly 10x per year for constant
quality, a 1,000x drop within three years for a GPT-3-class capability [4].

Here is the part most GTM teams miss. That collapse applies to the *reading*
half of your operation: classify, route, score, tag, detect. A 421M
classifier pushes the price of those decisions from "one API call" to
"electricity." When a decision costs nothing, you stop rationing it. You gate
every inbound reply instead of sampling. You score every account in your
database every week instead of once a quarter. Total decision volume rises
exactly as Jevons predicts, and your spend moves to the work that still costs
money: judgment, taste, and verification. Teams that keep asking a frontier
model to classify pay the expensive price for a cheap decision, at scale.

## Where a gate fits in a GTM stack

Run the gate before the agent, not after. A practical layout:

```text
Inbound reply
  -> decision gate (local, ~20ms)
       choice:  billing | sales | support | spam
       boolean: requests refund?
  -> if billing + refund: billing agent with full context
  -> if sales:           scoring pass, then SDR agent
  -> if low confidence:  escalate to the strong model, log the case
```

The gate is a router, not a brain. Everything it routes still gets handled by
a model that can write and reason. You have simply stopped paying frontier
prices to find out which lane a message belongs in.

The same pattern applies across GTM operations:

| Bounded decision | Gate question type | What the agent does after |
|---|---|---|
| Route an inbound reply | choice (4 lanes) | run the lane's playbook with full context |
| Tier a task for model routing | choice (writes vs reads) | send reads to the cheap tier, writes to the strong tier |
| Score a lead signal 0-4 | score (rubric) | skip the follow-up entirely below threshold |
| Detect a refund request | boolean | attach billing context before the agent reads it |

Model routing is the gate that pays most in a typical fleet. A task description
in, one of two tiers out. Agent fleets in 2026 run dozens of scheduled jobs,
most of them classification and compilation work that a two-tier gate assigns
for free, and hand-maintained tier assignments drift within weeks because
nothing enforces them.

## Install advisory first, enforce later

Do not let a new classifier rewrite your operation on day one. The install
order that works:

1. **Log.** Run the gate next to your current process and record its answers.
   Change nothing. You are building a labeled set from live traffic.
2. **Score.** Compare logged decisions against what your current process
   chose. Report accuracy and a confusion matrix. A gate that cannot beat the
   label set it trained from has no business routing anything.
3. **Advise.** Show the gate's answer in the agent's context as a suggestion.
   The model stays the decision maker. Watch where the model overrules the
   gate and why.
4. **Enforce, narrowly.** Only after the advisory period proves accuracy do
   you let the gate act on its own, and only for the choices where a wrong
   answer is cheap and visible: routing, tagging, tier selection.

Keep a human and a strong model as the appeal path forever. A gate that
answers 10,000 questions a day will be wrong on some of them, and the
escalation lane is how you find the patterns worth fixing.

## Failure modes and how to fix them

**The gate drifts silent.** Your traffic shifts, the gate keeps answering with
yesterday's accuracy, and nothing complains. Fix: log every decision with its
confidence, alert on confidence distribution shifts, and re-score against a
fresh labeled sample monthly.

**Someone asks the gate an unbounded question.** "Write a follow-up email" is
not a choice. The gate returns garbage with high confidence. Fix: validate the
output schema at the boundary. A decision gate should reject any question that
does not map to a fixed label set, a rubric, or a boolean. Schema validation
is the gate's own guardrail.

**You skip the advisory period.** An unvalidated gate enforced on day one
misroutes real customers. Fix: steps 1 through 3 are not optional. If your
label set is too small to score, your fleet is too small to need the gate yet.

**One model becomes the sole authority over its own accuracy.** If the same
system picks the answers and grades them, a failure teaches you nothing. Fix:
grade the gate from a label set derived independently of the gate, and keep
the scorer outside the gate's own code path.

**The gate saves nothing.** You added a millisecond classifier in front of a
human queue, and the humans still read everything. Fix: a gate only pays when
a decision currently costs a model call, an API call, or paid attention
minutes. Gate the expensive decision, not the free one.

## Variants by company stage

**Solo and seed.** Skip the custom model. A rubric in a spreadsheet plus one
deterministic script covers your volume. Your constraint is attention, not
decision cost.

**Series A to B.** This is the stage where gates pay first. You have real
inbound volume, real token spend, and no team to hand-classify. Install the
gate as an advisory router on your two noisiest decisions, usually reply
routing and model tiering.

**Enterprise.** The gate becomes policy. Tier assignments, escalation rules,
and audit trails are compliance surface, so the gate ships with a decision
ledger: every answer, its confidence, the case it escalated, and who overrode
it. The ledger is the product, the gate is just fast.

## Where to go next

- [Agentic GTM overview](../agentic/agentic-gtm-overview) for how agents take
  over GTM motions end to end.
- [Guardrails and measurement](../agentic/guardrails-and-measurement) for the
  control layer a gate answers to.
- [GTM OS architecture](../agentic/gtm-os-architecture) for the four-layer
  model the gate sits inside.

## Sources

- [1] [Jevons, The Coal Question (1865)](https://en.wikipedia.org/wiki/Jevons_paradox) - original statement: efficiency in coal use raised total coal consumption. As of 1865.
- [2] [Satya Nadella on X (January 27, 2025)](https://x.com/satyanadella/status/1883753899255046301) - "Jevons paradox strikes again": more efficient, accessible AI raises total use.
- [3] [Epoch AI: LLM inference price trends (2025)](https://epoch.ai/data-insights/llm-inference-price-trends) - inference prices fell 9x to 900x per year depending on task milestone.
- [4] [a16z, LLMflation by Guido Appenzeller (November 12, 2024)](https://a16z.com/llmflation-llm-inference-cost/) - roughly 10x per year constant-quality decline; 1,000x within three years for GPT-3-class capability.
- [5] [laya-mlx model card (Hugging Face, 2026)](https://huggingface.co/aac6fef/laya-mlx) - open-weight typed decision model serving choice, score, and noul questions from a local runtime; millisecond-scale decisions.
