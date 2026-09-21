---
class: agentic
sidebar_position: 0
title: Agent Ops
description: Run GTM as governed agent operations, with scheduled fleets, cheap typed decisions, model cost discipline, and verified outputs.
tags: [agent-ops, agentic, automation, gtm-operations]
status: active
last_updated: 2026-09-20
---

# Agent Ops

GTM increasingly runs on agent infrastructure: scheduled jobs, typed
decisions, model cost discipline, and proof of what actually shipped. This
section teaches the operating model end to end, using Hermes Agent, an
open-source agent operating system by Nous Research (2026), as the reference
implementation [1].

Read in order, or jump to the decision you face today:

- [Agent operations overview](./overview) - the four-layer operating model.
- [The agent OS harness](./agent-os-harness) - skills, memory, tools, and why
  the model stays replaceable.
- [Scheduled agent fleets](./cron-fleets) - cadence, watchdogs, session
  hygiene.
- [Jev-style decision gates](./decision-gates) - millisecond, near-zero-cost
  typed routing.
- [Jevons economics of AI GTM](./jevons-economics) - where spend moves when
  decisions are free.
- [Model tiering and cost discipline](./model-tiering) - matching model price
  to the cost of being wrong.
- [Verification and receipts](./verification-and-receipts) - proving shipped
  work at the live destination.
- [An agent-built knowledge base](./agent-built-wiki) - the full worked
  example.

## Sources

- [1] [Nous Research: Hermes Agent docs (2026)](https://hermes-agent.nousresearch.com/docs) - open-source (MIT) agent operating system.
