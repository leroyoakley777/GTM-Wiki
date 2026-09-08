---
sidebar_position: 7
title: Experimentation
description: "How to test outbound and GTM changes without lying to yourself: one variable, enough sample, and a kill rule."
status: active
tags: [gtm-engineering, experimentation, outbound]
last_updated: 2026-09-08
---

# Experimentation

Experimentation in GTM is controlled comparison, not a weekly redesign. Change one variable. Keep the list definition still. Read the result only after the sample is large enough to mean something.

## Rules of a fair test

1. **One variable.** First line *or* ask *or* list slice. Not all three in one weekend.
2. **Sample floor.** 300+ sends per variant before you pick a winner [329].
3. **Same infrastructure.** Do not test copy on a cold domain against copy on a warmed domain [333].
4. **Primary metric.** Meetings held per 1,000 sends, with positive reply as the diagnostic [17].
5. **Kill rule.** Written in advance. "Stop B if complaints rise" is a rule. "See how we feel" is not.

Templates fatigue in 4-6 weeks [329]. A winning variant is a perishable. Schedule the next test before the current one dies of exposure.

## What is worth testing

| Layer | Test | Do not test yet |
|-------|------|-----------------|
| List | Signal A vs signal B on the same ICP | Random purchased lists |
| Message | Two first lines, same ask | 12 subject lines on a dead offer |
| Sequence | With breakup vs without [329] | 15-touch "cadence innovation" |
| Channel | Email-only vs email plus phone on Tier 1 [14][341] | Five new tools at once |

Small targeted campaigns of 50 or fewer have posted 5.8% response against 2.1% on 500+ recipient lists [326]. That is a list-design finding. Treat it as a constraint on how you sample, not as permission to skip the 300-send floor on copy tests.

## How this differs by stage

- **Seed.** Founder judgment on 50 accounts. No statistics theater.
- **Team.** Two variants, 300 sends each, weekly readout.
- **Scale.** Held-out slices, longer windows on enterprise cadences.

## Failure modes

- **Declaring victory at 40 sends.**
- **Changing the list mid-test.**
- **Optimizing opens.** MPP made that metric relative [330].
- **Running tests on the only production domain.**

## Agentic layer

Agents can assign variants and write the readout table. Humans set the kill rule and decide whether a winner becomes default. See [Agentic Outbound](/docs/agentic/agentic-outbound).

## Sources

- [14] SalesGenie: phone connect. Source registry #14.
- [17] Instantly: meetings per 1,000. Source registry #17.
- [326] Belkins: small vs large list response. Source registry #326.
- [329] Zeliq: 300-send floor, breakup, fatigue. Source registry #329.
- [330] Leadriver: opens and MPP. Source registry #330.
- [333] Clay: warmup effects. Source registry #333.
- [341] Salesloft: phone vs email reach. Source registry #341.
