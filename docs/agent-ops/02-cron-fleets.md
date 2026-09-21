---
class: agentic
sidebar_position: 2
title: Scheduled agent fleets
description: Design a fleet of scheduled agent jobs with sane cadence, change gating, watchdogs, and session hygiene.
tags: [agent-ops, cron, scheduling, watchdogs, reliability]
status: active
last_updated: 2026-09-20
---

# Scheduled agent fleets

One scheduled job is a demo. A fleet is an operation, and operations fail in
predictable ways: overlapping runs corrupt shared state, a deprecated model
silently fails every job at once, and a job that exits 0 while producing
garbage keeps its green checkmark for weeks. This page is the design guide
for running many scheduled agent jobs without those failures.

## Cadence beats intensity

Schedule jobs at the frequency the work actually deserves, and no faster:

| Job type | Cadence | Why |
|---|---|---|
| Failure watchdog | Every 30 min in working hours | Catch breakage while context is fresh |
| Triage and routing | Hourly | Inbound work should not age overnight |
| Digest and compile | Every 1-2 hours | Batching amortizes cost with no freshness loss |
| Planning and review | Daily | Plans need yesterday's full picture |
| Prune and backup | Daily, off-hours | Hygiene should never compete with work |
| Deep audit | Weekly | Drift is a weekly discovery, not an hourly one |

Two rules keep the schedule honest. First, change-gate the expensive jobs: a
compile job that finds nothing new should exit in seconds without calling a
model. Second, stagger start times so jobs that read the same state never run
concurrently.

## One job, one job

Each scheduled job should do one thing and leave one artifact. A job that
"checks everything, then fixes what it found, then reports" is three jobs in a
trench coat, and you cannot watchdog it, re-run it, or hand it off. Split it.
The composition happens at the schedule layer, where a 7:00 job can consume
the 6:45 job's output file.

## Watchdogs check artifacts, not exit codes

Exit code 0 means the script ran. It says nothing about what it produced. A
watchdog that satisfies itself with exit codes is a tautology. Check the
artifact instead:

```text
Watchdog check, every 30 min:
  1. Did the 7:00 digest produce a file newer than its last run?
  2. Does the file contain the sections it claims?
  3. Is the artifact count within the expected band?
  If any check fails: page the human with the first failing check.
```

This is the cheapest reliability investment in the whole stack. Most fleet
incidents are not exotic; they are a silently empty output that a five-line
artifact check would have caught at 7:05 instead of Friday.

## Session hygiene

Long-lived agent sessions accumulate context the way long-lived processes
accumulate file handles: until they degrade. Archive before pruning, prefer
recoverable archives, and run worker-heavy profiles on their own prune
schedule. A session that starts each morning from a clean base with the right
loaded context will outperform a bloated immortal session on every task that
requires reasoning.

## Failure modes and how to fix them

**Model deprecation takes out the fleet.** Every job pinned to one model fails
the same night. Fix: keep the model pin in one config file, not per job, and
watch for provider errors as a fleet-level signal.

**Overlapping runs corrupt state.** Two instances of a queue consumer claim
the same work. Fix: atomic claims with create-if-not-exists semantics, and a
lock the job takes before it touches shared state.

**Silent green.** Every check passes while output quality slides, because no
check reads the output. Fix: artifact checks above, plus a weekly audit that
samples real outputs and grades them against the standard.

**Nobody owns the 2 a.m. failure.** Jobs fail outside working hours and sit
until someone notices. Fix: watchdogs that page a human, and a morning digest
that leads with failures, not successes.

## Variants by company stage

**Solo and seed.** Three jobs, one watchdog, one daily digest. Resist adding
a fourth job until the first three have survived two weeks.

**Series A to B.** Add a queue with atomic claims, fleet-level model
configuration, and per-job budgets. This is the stage where fleets start
paying their own way.

**Enterprise.** Fleet management becomes its own discipline: change review on
schedules, least-privilege credentials per job, decision ledgers, and a
designated human per failure class.

## Where to go next

- [The agent OS harness](./agent-os-harness) for what runs inside each job.
- [Jev-style decision gates](./decision-gates) for the routing jobs do.
- [Verification and receipts](./verification-and-receipts) for the strongest
  form of artifact check.

## Sources

- [1] [Nous Research: Hermes Agent docs (2026)](https://hermes-agent.nousresearch.com/docs) - open-source (MIT) agent operating system with scheduled jobs and session management.
