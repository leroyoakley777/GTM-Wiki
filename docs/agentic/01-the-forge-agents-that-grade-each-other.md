---
class: agentic
sidebar_position: 20
title: "Forge: Agents That Grade Each Other"
description: "Agentic GTM stub: forge: agents that grade each other. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Forge: Agents That Grade Each Other

## Thesis

- One agent drafts. A second agent grades. A third grades the grader. Output quality stops depending on one model's mood.
- Graders run from a checklist, not a vibe. The checklist is the page contract: claim, source, as-of date.
- Grading is cheap. A critic pass costs tokens, not headcount, so run it on every draft, every time.

## What breaks in practice

Two agents tuned to the same rubric start to agree with each other. The forge drifts toward confident consensus that no human ever tested. runsonai's model personalities audit found real behavioral differences between models on the same harness [1], so put different models on opposite sides of the grader. Anthropic ran several agents on one task and got a turf war [2]; disagreement is signal, silence is not. Keep a human on tie breaks, and log every grade so you can spot graders that never fail anything.

## Sources

- [1] [runsonai: model personalities audit](https://x.com/runsonai/status/2087588212919132535), as-of 2026-08-12: models differ in behavior and verification habits on the same harness.
- [2] [TechCrunch: Anthropic set AI agents loose on the same task](https://techcrunch.com/2026/08/13/anthropic-set-ai-agents-loose-on-the-same-task-they-started-a-turf-war/), as-of 2026-08-13: the agents started a turf war.
