---
sidebar_position: 4
title: Skills and Tools
description: "GTM skills as versioned procedures: what to write down, how to test it, and when a tool should call it."
status: active
tags: [gtm-engineering, skills, tools]
last_updated: 2026-09-08
---

# Skills and Tools

A GTM skill is a written procedure an agent or a human can run the same way twice. A tool is the function that procedure is allowed to call. Mixing them produces a prompt that "just figures it out" and a motion nobody can audit.

See the human-facing skills in [Skills](/docs/skills) and the stack map in [Tools](/docs/tools).

## What a skill file contains

| Block | Purpose |
|-------|---------|
| Goal | The outcome (held meeting, clean list) |
| Inputs | Account, signal, caps |
| Steps | Ordered, skippable only with a reason |
| Stop conditions | Opt-out, bounce, human asked to stop |
| Output schema | Fields the CRM will accept |
| Test cases | Two good, two should-fail |

Outbound already has this shape on the [outbound skill](/docs/skills/outbound) page. Engineering's job is to keep that shape in version control so a prompt change is a pull request, not a Slack edit.

## Tool tiers

Gangly's four layers still hold: data, engagement, intelligence, CRM [305]. Apollo plus HubSpot is enough to start. A Series A stack that adds engagement and conversation intelligence runs hundreds of dollars per seat per month [305]. Do not buy the fourth layer to cover a missing skill file.

## How this differs by stage

- **Seed.** Skills live in the playbook. Tools are whatever the founder already logs into.
- **Team.** Skills become files. Tools get API keys and caps.
- **Scale.** Skills have owners. Tools have a budget and a retirement date.

## Failure modes

- **Tool first.** Ross Rich's warning: people, then process, then technology. Most teams reverse it [337].
- **Skill files that describe vibes.** "Be consultative" is not a step.
- **Duplicate skills.** Three "write first line" prompts drift in a week.
- **No should-fail tests.** The skill never learns what it must refuse.

## Agentic layer

```text
Given a skill file and an account payload:
- Refuse if inputs missing.
- Run steps in order.
- Write outputs to the schema only.
- Stop on any suppression flag.
```

## Sources

- [305] Gangly sales stack, 2026. Source registry #305.
- [337] GTM Podcast: people, process, then technology. Source registry #337.
