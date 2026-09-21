---
class: agentic
sidebar_position: 22
title: Anatomy of Agent-Built Outbound
description: "Agentic GTM stub: anatomy of agent-built outbound. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Anatomy of Agent-Built Outbound

## Thesis

- An agent pipeline replaces the SDR admin layer: read source, enrich, draft, log, queue for a human.
- The human keeps the send, the reply, and the relationship. The agent keeps the rest.
- The stack is plumbing: CRM, enrichment, sending infra, and a transcript store the agent can read.

## What breaks in practice

Builders wire the plumbing and skip source discipline. An agent that reads a stale CRM writes confident email to the wrong person. EXM7777's GTM machine enriches before drafting and drops weak rows [1]. Enforce the same rule: every claim in a draft traces to a source row with a date. Full-autonomous sends feel faster and cost accounts. Draft-only, human-send keeps deliverability and your domain reputation yours. Bustamante's agent product recipe lands the same point from the product side: the agent owns the workflow, the human owns the judgment [2].

## Sources

- [1] [EXM7777: how to build a GTM machine from 0 to $10k MRR](https://x.com/EXM7777/status/2089714608244457543), as-of 2026-08-18: agent reads source, enriches via Clay, drafts, human sends.
- [2] [Nicolas Bustamante: agent product recipe](https://x.com/nicbstme/status/2088014852954669300), as-of 2026-08-13: agent products bundle workflow ownership, not chat.
