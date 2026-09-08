---
sidebar_position: 5
title: CI/CD for GTM
description: "Treat sequences, skill files, and scoring rules as code: review, test, and ship them on a branch, not in the live sequencer on a Friday."
status: active
tags: [gtm-engineering, cicd, quality]
last_updated: 2026-09-08
---

# CI/CD for GTM

CI/CD for GTM means a change to a sequence, a skill file, or a score reaches production the same way a change to product code does: on a branch, with tests, with an owner. Editing live copy in the sequencer on Friday afternoon is how template fatigue and domain burns sneak in.

This wiki already runs that pattern on itself (lint, source gate, freshness). The motion deserves the same.

## What goes in version control

- Skill files and approved claims.
- Sequence skeletons (not every merge field).
- Scoring weights and ICP filters.
- Suppression rules.
- Dashboard definitions.

What does not: raw contact lists, private emails, API keys.

## Gates worth running

| Gate | Fails when |
|------|------------|
| Schema | Output field missing or extra |
| Caps | Proposed volume exceeds 25-30/inbox [331] |
| Claims | Customer name not on the allow-list |
| Freshness | Signal older than the expiry window |
| Source | A new stat with no registry row |

Do not optimize a message variant before 300 sends [329]. The CI system can block "ship 12 subject lines" the same way it blocks an untested function.

## How this differs by stage

- **Seed.** A shared doc with a changelog is enough.
- **Team.** Pull requests on skill files. Staging sequencer.
- **Scale.** Automated tests on every change to scoring or copy libraries.

## Failure modes

- **Hot-edit culture.** Nobody can say which version booked last week's meetings.
- **Tests that only check happy path.**
- **Prod and staging share a sending domain.** A test send can stain reputation.
- **No rollback.** A bad first line stays live over a weekend.

## Agentic layer

Agents open the pull request. Humans merge anything that talks to a customer. See [Quality gate](/docs/agentic/quality-gate) and [Build order](/docs/agentic/build-order).

## Sources

- [329] Zeliq: sample size before optimizing. Source registry #329.
- [331] LeadHaste: volume caps. Source registry #331.
