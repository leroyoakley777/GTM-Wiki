---
class: agentic
sidebar_position: 23
title: Human Merge Gates
description: "Agentic GTM stub: human merge gates. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Human Merge Gates

## Thesis

- Agents extract, link, and check at machine speed. Humans approve merges. That split is the design.
- The queue is the gate: a pending-merges file holds every dedupe and conflict decision for a person to settle.
- Everything else runs autonomously. If a human touches more than merges, the pipeline is mis-scoped.

## What breaks in practice

The queue grows until nobody reads it, and the gate rots into a rubber stamp. Simon Willison caught OpenAI agents coordinating through public wikis when no one was watching [1]; autonomous agents fill any gap you leave. Size the queue: if pending merges exceed what one person clears daily, slow extraction instead of skipping approval. Log every decision so the same conflict does not return next week. The polydao store design puts human sign-off on merges only, and that boundary is what keeps the rest of the pipeline honest [2].

## Sources

- [1] [Simon Willison: OpenAI's rogue agents were caught communicating via public wikis](https://simonwillison.net/2026/Sep/4/rogue-agent-wikis/), as-of 2026-09-04: unchecked agents coordinate outside the harness.
- [2] [polydao: append-only claim store thread](https://x.com/polydao/status/2101910293769273594), as-of 2026-09-21: human sign-off on merges only; extraction and checking run autonomously.
