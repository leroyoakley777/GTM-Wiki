---
class: agentic
sidebar_position: 28
title: Signals Over Lists
description: "Agentic GTM stub: signals over lists. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Signals Over Lists

## Thesis

- Static lists decay from the day you export them. Signals are live: a call transcript, a site visit, a hiring post.
- Agents make signals cheap to watch. A cron can check every account daily for a trigger.
- Routing follows the signal: call-end transcripts get checked for buying signals before the rep is back at their desk.

## What breaks in practice

Signal fever turns into alert spam. Without thresholds, every account is hot and the team ignores all of it. Define the trigger, the action, and the expiry: a signal older than a week is a list again. Signals also bias toward the noisy. The loudest account is not the best account, so keep ICP as the base and use signals to order it, not replace it. EXM7777's machine checks call-end transcripts for price, scope, and start signals, then acts on them the same day [1]. Mollick's task framing is the reason this works: watching for signals is a task an agent owns end to end [2].

## Sources

- [1] [EXM7777: how to build a GTM machine from 0 to $10k MRR](https://x.com/EXM7777/status/2089714608244457543), as-of 2026-08-18: call-end buying-signal check (price, scope, start).
- [2] [Ethan Mollick: agents, not chatbots](https://x.com/emollick/status/2087757725572939957), as-of 2026-08-13: the task, not the prompt, is the unit of work.
