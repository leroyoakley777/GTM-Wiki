---
class: agentic
sidebar_position: 20
title: "Forge: Agents That Grade Each Other"
description: "How to run a forge: one agent drafts, a second grades from a checklist, a third grades the grader. Includes model-pairing setup, grade log format, and a worked example."
last_updated: 2026-10-05
status: active
tags: [agentic, ai-era-gtm]
---

# Forge: Agents That Grade Each Other

## Thesis

- One agent drafts. A second agent grades. A third grades the grader. Output quality stops depending on one model's mood.
- Graders run from a checklist, not a vibe. The checklist is the page contract: claim, source, as-of date.
- Grading is cheap. A critic pass costs tokens, not headcount, so run it on every draft, every time.

## Grader checklist format

A grader checklist is a fixed rubric that every draft passes through. The checklist does not change between runs. A grader that improvises produces inconsistent grades.

Use this format for each checklist item:

| # | Check | Pass condition |
|---|-------|----------------|
| 1 | Claim | Every claim is a complete sentence with a subject and a verb. |
| 2 | Source | Every claim carries a named source and an as-of date. |
| 3 | As-of date | The date is within the freshness window for the topic. |
| 4 | No filler | No throat-clearing intros, no recap paragraphs. |
| 5 | Active voice | No passive constructions. |
| 6 | Specific | Concrete nouns and numbers, not vague claims. |

A grader marks each item pass or fail. A draft with any fail goes back to the drafter. The grader does not fix the draft. The grader only marks.

## Model-pairing setup

Two agents tuned to the same rubric start to agree with each other. The forge drifts toward confident consensus that no human ever tested. runsonai's model personalities audit found real behavioral differences between models on the same harness [1], so put different models on opposite sides of the grader.

Pair models by family. If the drafter is a reasoning model, use an instruction-following model as the grader. If the drafter is a fast model, use a slower model as the grader. The grader should be slower and more deliberate than the drafter.

Anthropic ran several agents on one task and got a turf war [2]. Disagreement is signal. Silence is not. Keep a human on tie breaks, and log every grade so you can spot graders that never fail anything.

## Grade log format

Log every grade in an append-only store. Each entry records:

- **Timestamp**: when the grade ran
- **Drafter**: which model produced the draft
- **Grader**: which model ran the checklist
- **Checklist version**: which rubric version the grader used
- **Result**: pass or fail per item
- **Fail reason**: which item failed and why
- **Tie-break**: whether a human overrode the grade

The log lets you spot patterns. A grader that passes everything is not rigorous. A drafter that fails the same item every time needs a better prompt, not a better grader.

## Worked example: draft to graded

Here is a real forge run on a GTM wiki page draft.

**Draft (drafter output):**

```
The outbound page gives you a sequence. The sales page gives you the gates. The agentic page gives you the prompt.
```

**Grader checklist run:**

| # | Check | Result | Reason |
|---|-------|--------|--------|
| 1 | Claim | Pass | Complete sentences. |
| 2 | Source | Fail | No source for the claim. |
| 3 | As-of date | Fail | No date. |
| 4 | No filler | Pass | No throat-clearing. |
| 5 | Active voice | Pass | Active constructions. |
| 6 | Specific | Fail | "Gives you" is vague. What sequence? What gates? What prompt? |

**Grade log entry:**

- **Timestamp**: 2026-10-05T09:30:00Z
- **Drafter**: fast-model-v2
- **Grader**: reasoning-model-v1
- **Checklist version**: 1.0
- **Result**: 3 fail (items 2, 3, 6)
- **Fail reason**: missing source, missing date, vague claims
- **Tie-break**: none

The drafter revises the draft. The grader re-runs the checklist. The loop continues until all items pass or a human calls the draft done.

## Sources

- [1] [runsonai: model personalities audit](https://x.com/runsonai/status/2087588212919132535), as-of 2026-08-12: models differ in behavior and verification habits on the same harness.
- [2] [TechCrunch: Anthropic set AI agents loose on the same task](https://techcrunch.com/2026/08/13/anthropic-set-ai-agents-loose-on-the-same-task-they-started-a-turf-war/), as-of 2026-08-13: the agents started a turf war.

## Further reading

- [Agentic Stack](./agentic-stack): the five layers of a working agentic use.
- [Guardrails and Measurement](./guardrails-and-measurement): where agentic GTM breaks and how to measure it.
- [Claims Stores](./claims-stores-append-only-research): append-only research stores.
- [Human Merge Gates](./human-merge-gates): where humans stay in the loop.
