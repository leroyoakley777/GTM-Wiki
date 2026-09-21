---
class: agentic
sidebar_position: 1
title: The agent OS harness
description: Skills, memory, tools, and scheduling are the harness around the model. Build the harness deliberately and the model becomes replaceable.
tags: [agent-ops, harness, skills, memory, agent-architecture]
status: active
last_updated: 2026-09-20
---

# Agent OS harness

A model is a rented commodity. The harness around it is the asset you own.
Harness means the code and configuration that assemble requests, expose tools,
retrieve memory, execute the model's decisions, and enforce limits. Hermes
Agent implements this shape as an open-source operating system, and the
implementation is worth studying because every choice in it keeps the model
replaceable [1].

## What a harness does

Raw model calls answer questions. Harnesses run operations. The difference is
state and enforcement:

| Harness job | Without it | With it |
|---|---|---|
| Request assembly | You re-paste context by hand | Memory and files load per task |
| Tool exposure | The model guesses at capabilities | Each job sees exactly its tools |
| Execution | The model suggests, you click | The harness runs tool calls and feeds results back |
| Limits | A runaway loop bills you | Budget caps, timeouts, and permission tiers stop it |

Treat the harness as configuration, not application code. When a procedure
lives in a prompt you rewrite every session, you own a ritual. When it lives
in a versioned skill file, you own an asset.

## Skills are versioned procedures

A skill is a procedure document the agent loads when a task matches it: when
to use it, prerequisites, exact commands, pitfalls, and a definition of done.
The failure mode is obvious: unversioned skills rot silently while the agent
keeps confidently following stale steps.

Write skills like runbooks, with one rule above the rest: record what you
learned while doing the task, in the skill, before you close the session. A
pitfall discovered twice belongs in the file, not in your memory of two
frustrating afternoons.

## Memory outlives the session

Sessions are disposable; memory is not. A working setup separates:

- **Session state**, which dies with the conversation.
- **Persistent memory**, which carries who the user is and standing facts
  across every task.
- **Task-level knowledge**, which lives in the skill or project file where it
  is relevant, not in a global feed every session must read.

The third bucket is where most teams go wrong. They stuff every learned fact
into global memory until the context budget chokes. Facts that only matter for
one kind of work belong in the procedure for that work.

## Scheduling makes it an operating system

The moment jobs run on a schedule, you have crossed from assistant to
operating system. Now failure is a systems problem: jobs stall, models get
deprecated, outputs go stale. An OS expects this. It ships watchdogs, health
checks, and prune jobs the way production software ships monitoring. See
[Scheduled agent fleets](./cron-fleets) for the mechanics.

## Failure modes and how to fix them

**Prompt-as-procedure.** The team's real process lives in one operator's head
and a long prompt they keep re-typing. Fix: extract it into a skill file the
same week you notice it. If you have explained a procedure to the agent twice,
write it down.

**Global memory bloat.** Everything learned goes into one context feed, and
every session pays the tax. Fix: route knowledge to its task home. Global
memory holds only facts true in every session.

**Tool sprawl.** Every job can call every tool, so a bug in one job can touch
anything. Fix: expose tools per job. A reporting job has no reason to hold
send-access to anything.

## Variants by company stage

**Solo and seed.** Use the harness you installed, unmodified. Your edge comes
from writing down procedures, not from customizing the runtime.

**Series A to B.** Standardize skill structure across the team and separate
read credentials from write credentials.

**Enterprise.** The harness becomes governed infrastructure: permission
tiers, change review on skill files, and model-agnostic skill formats so a
vendor swap is a config edit.

## Where to go next

- [Agent operations overview](./overview) for the four-layer model.
- [Jev-style decision gates](./decision-gates) for cheap typed decisions
  inside the harness.
- [Verification and receipts](./verification-and-receipts) for proving the
  harness produced real artifacts.

## Sources

- [1] [Nous Research: Hermes Agent docs (2026)](https://hermes-agent.nousresearch.com/docs) - open-source (MIT) agent operating system: harness, skills, persistent memory, scheduled jobs.
