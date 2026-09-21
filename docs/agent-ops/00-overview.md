---
sidebar_position: 0
title: Agent operations overview
description: Run GTM as governed agent operations on an agent operating system, with scheduled jobs, typed decisions, and verified outputs.
tags: [agent-ops, agentic, gtm-operations, hermes, automation]
status: active
last_updated: 2026-09-20
---

# Agent operations overview

GTM work decomposes better than most teams assume. Prospecting, routing,
scoring, drafting, reporting, and QA are bounded jobs with clear inputs and
checkable outputs. That shape is exactly what an agent operating system runs
well: not a chat window, a fleet of scheduled, governed jobs that produce
artifacts you can verify.

Hermes Agent, an open-source agent operating system released under the MIT
license by Nous Research in 2026, is the reference implementation this section
uses [1]. The patterns transfer to any agent runtime that supports persistent
memory, scheduled jobs, and tool access.

## Four layers, one operating model

An agent OS separates concerns the same way a production web app does:

| Layer | Answers | You own |
|---|---|---|
| Models | Which intelligence runs each step | Model choice, cost per task |
| Harness | How requests are assembled, tools exposed, results executed | Configuration, not code |
| Skills | Which procedures the agent follows | Versioned procedure docs |
| Jobs | When work runs and how failures surface | Cadence and watchdogs |

Keep the layers replaceable. A model swap should not touch your skills. A
skill rewrite should not touch your schedule. When one layer can only change
by editing another, you have built a script, not an operating system.

## What an agent OS changes about GTM work

Three shifts, in order of impact:

**Cadence replaces sessions.** Work runs on a schedule whether or not anyone
opened a laptop. A competitor move at 2 a.m. lands in a triage queue by 7 a.m.
without a human noticing a gap.

**Decisions get typed before they get expensive.** A small classifier routes,
scores, and tags for near-zero cost. Large models spend tokens only where
judgment lives. See [Jev-style decision gates](./decision-gates).

**Claims require proof.** An agent that says "shipped" without a verified,
live artifact has not shipped. Verification is a pipeline stage, not a
courtesy. See [Verification and receipts](./verification-and-receipts).

## Failure modes and how to fix them

**The demo becomes the system.** A session that works once proves the model
can do the task. It proves nothing about the 200th unsupervised run. Fix:
promote a working session into a scheduled job with gates before you trust it
at volume.

**No one owns failures.** Agents fail quietly; a cron exit code of 0 says
nothing about artifact quality. Fix: every scheduled job gets a watchdog that
checks the artifact, not the exit code, and pages a human on stale output.

**Skills rot.** Procedures drift from reality as tools change. Fix: version
skills, review them on a schedule, and let the agent's own error history
propose edits.

## Variants by company stage

**Solo and seed.** One agent, three scheduled jobs, one watchdog. Your goal is
a working loop, not coverage.

**Series A to B.** Separate write jobs from read jobs, add a work queue with
atomic claims, and start gating model routing on cost.

**Enterprise.** Add decision ledgers, audit trails, and least-privilege
credentials per job. Governance is the product at this stage.

## Where to go next

- [The harness layer](./agent-os-harness) for what wraps the model.
- [Scheduled agent fleets](./cron-fleets) for cadence and watchdogs.
- [Jev-style decision gates](./decision-gates) for cheap typed routing.
- [Jevons economics of AI GTM](./jevons-economics) for where spend moves.
- [Model tiering and cost discipline](./model-tiering) for the cost model.
- [An agent-built knowledge base](./agent-built-wiki) for a full worked
  example.

## Sources

- [1] [Nous Research: Hermes Agent docs (2026)](https://hermes-agent.nousresearch.com/docs) - open-source (MIT) agent operating system: persistent memory, skills, scheduled jobs.
