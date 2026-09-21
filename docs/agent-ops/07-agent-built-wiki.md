---
class: agentic
sidebar_position: 7
title: An agent-built knowledge base
description: A full worked example of a knowledge site produced by a governed agent pipeline, with machine gates, a work queue, and receipt-bound shipping.
tags: [agent-ops, case-study, pipelines, quality-gates, documentation]
status: active
last_updated: 2026-09-20
---

# An agent-built knowledge base

Everything in this section composes into one worked example: a public
knowledge site built and operated by scheduled agents under machine
enforcement. The patterns generalize to any content operation where quality
matters more than volume.

## Roles split, scripts first

The pipeline separates roles so no component grades its own work:

- **Workers** produce one bounded page at a time and write to staging only.
- **Reviewers** approve staged paths and are the only role that ships.
- **A queue** owns the work list with atomic claims, so parallel workers
  cannot grab the same page.

Scripts, not prompts, own the mechanics: queue state, frontmatter assembly,
gate invocation, and commits. A model is a poor database and a poor lock
manager. Anything that must be exact lives in a script the model merely calls.

## Machine gates decide taste and truth

Every candidate page walks the same ladder before a human ever sees it:

```text
lint         build traps, banned tokens, link resolution
comms        AI-tell vocabulary, passive voice, forced cadence
slop scan    uncited dated statistics, contrast tics
sources      every citation resolves to a registered, dated source
depth        structural floor: sections, artifacts, failure modes
build        the full production compile
```

Two properties matter more than any individual rule. The gates run before the
commit, so a violation is structurally uncommittable rather than caught in
review. And the registry behind the source gate is a real allowlist: an
uncited statistic is not a style nit, it is a build failure. Fabrication
becomes expensive at the moment of the attempt.

## One page per cycle

The pipeline ships one page at a time: edit, gate, build, commit, push, verify
live, write the receipt, then start the next. Batching ten pages into one
"big ship" sounds efficient and fails quietly: when the build breaks, ten
pages of work are entangled and nobody can say which change did it. One page
per cycle makes every regression attributable within minutes.

## Receipts close the loop

Receipts, not commits, define completion. A ship counts only when the
deployed page serves content fragments from the exact hashed file that passed
the gates. The throughput number that results is one you can defend line by
line. See [Verification and receipts](./verification-and-receipts) for the
receipt format.

The loop also self-corrects. When a backlog row was marked done after one page
of twelve, the audit lane reopened it, and the fleet ground through the
remaining pages one per day until every page carried the required section.
That reopen cost nothing because the standard, not anyone's memory, held the
definition of done.

## What it teaches about agent operations

- **Governed beats fast.** The gates feel slow per page and compound into a
  site where any page can ship on any day without a human gatekeeper.
- **Quality is a queue position.** Priorities are file order and registry
  rows, not memos. The system does what the data structure says.
- **The hard part is verification.** Writing pages was never the bottleneck.
  Proving what shipped, and re-proving it later, is where the engineering
  went.

## Failure modes and how to fix them

**Gate bypass pressure.** Under deadline, someone proposes skipping hooks with
a force flag. Fix: the bypass flag is removed from the runbook entirely; a
failing gate on an untouched file is a report, not an obstacle.

**Priority theater.** Everything is priority zero, so nothing is. Fix: one
ordered queue, position decides, and adding to the top is a deliberate,
recorded act.

**Volume vanity.** Page count grows while depth stays flat. Fix: count
receipt-bound ships against a depth-gated standard, and let the standard
reject thin pages.

## Variants by company stage

**Solo and seed.** A single-writer pipeline with the gate ladder above still
pays: future-you is the reviewer, and receipts are how you trust past-you.

**Series A to B.** Multiple writers and a shared queue; the atomic-claim rule
starts mattering the moment a second worker exists.

**Enterprise.** The pipeline becomes a content supply chain with review
capacity planning, source vetting ownership, and compliance review as just
another gate in the ladder.

## Where to go next

- [Agent operations overview](./overview) for the operating model this
  pipeline runs inside.
- [Jev-style decision gates](./decision-gates) for how routing inside the
  pipeline stays cheap.
- [Scheduled agent fleets](./cron-fleets) for the cadence layer above the
  queue.
