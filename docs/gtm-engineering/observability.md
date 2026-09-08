---
sidebar_position: 6
title: Observability
description: "What to measure in a GTM system: funnel health, domain health, agent error, and the alerts that should stop a send."
status: active
tags: [gtm-engineering, observability, metrics]
last_updated: 2026-09-08
---

# Observability

Observability is how you know the motion is sick before the quarter is. Dashboards that only show sends are activity theater. You need delivery, reply quality, holds, accepted opportunities, and domain health on the same page.

## Scoreboard that pages someone

| Signal | Healthy band | Alert |
|--------|--------------|-------|
| Delivery | 97%+ [17] | Pause domain |
| Hard bounce | under 2% [331] | Pause domain |
| Complaints | under 0.1%, hard stop near 0.3% [17][329] | Pause all cold volume |
| Reply | diagnose under 2% [329] | Inspect list and copy |
| Meetings / 1,000 sends | 3-10 [17] | Do not add volume if under 3 |
| Agent error rate | near zero invented fields | Block writes |

Open rate is a relative weekly signal only. Apple Mail Privacy Protection inflates it 10-20 points [330]. Do not page anyone about opens.

## Logs worth keeping

- Every send: domain, inbox, template version, account id.
- Every model draft: prompt hash, output, human decision.
- Every bounce and complaint: raw provider code.
- Every meeting: held or not, AE accept or not.

Without template version on the send, you cannot attribute a reply-rate drop to fatigue [329].

## How this differs by stage

- **Seed.** A weekly sheet.
- **Team.** Domain-level alerts in the ESP plus a CRM dashboard.
- **Scale.** Traces from agent write to send to disposition.

## Failure modes

- **Paging on vanity metrics.**
- **No domain dimension.** Averages hide one burned inbox.
- **Agent logs off to the side.** You cannot reconstruct a bad first line.
- **Alerts with no owner.** A red number that nobody is on call for is decoration.

## Agentic layer

The harness should stop sends when bounce or complaint alerts fire, then open a task for a human. Do not "retry tomorrow" on a domain that tripped enforcement [17].

## Sources

- [17] Instantly, 2026: delivery, meetings/1k, complaints. Source registry #17.
- [329] Zeliq, 2026: reply diagnosis, fatigue, 0.1% complaints. Source registry #329.
- [330] Leadriver, 2026: MPP and opens. Source registry #330.
- [331] LeadHaste, 2026: bounce checks. Source registry #331.
