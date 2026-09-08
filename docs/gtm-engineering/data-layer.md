---
sidebar_position: 2
title: Data Layer
description: "The GTM data layer: one source of truth for accounts, signals, and outcomes, plus the failure modes that turn a CRM into folklore."
status: active
tags: [gtm-engineering, data, crm, revops]
last_updated: 2026-09-08
---

# Data Layer

The data layer is the shared record of accounts, people, signals, and outcomes. Every sequence, score, and forecast reads from it. If the layer is wrong, outbound personalizes the wrong person and the board reads a fictional funnel.

This page is the engineering view. Pair it with [Revenue operations](/docs/foundations/revenue-operations) and [Outbound](/docs/channels/outbound).

## What belongs in the layer

| Object | Required fields | Used by |
|--------|-----------------|---------|
| Account | ICP score, tier, owner | List, ABM, forecast |
| Person | Verified email, role, suppression | Send, compliance |
| Signal | Type, source, date | First line, priority |
| Touch | Channel, time, disposition | Sequence, coaching |
| Outcome | Meeting held, opp, close | Score of the motion |

Stale contact data costs B2B teams an estimated 15-25% of revenue [301]. One in four GTM leaders do not trust that CRM data is current [301]. Trust is an engineering problem before it is a pep-talk problem.

## Design rules

1. **One writer per field.** If SDR and marketing both write "stage," you have two stages.
2. **Signals expire.** A job-change older than 60 days is not a reason-to-reach.
3. **Suppression is global.** ESP and CRM share the list or you will email a person who opted out.
4. **Outcomes beat activity.** Store held meetings and accepted opps as first-class events.

A modern stack has to pass data, not just collect tools. Average B2B teams run tools from 23 vendors [301]. Integration is the product.

## How this differs by stage

- **Seed.** HubSpot or Attio plus a sheet. Do not build a warehouse.
- **Series A.** CRM as system of record, enrichment in, engagement out [305].
- **Scale.** Warehouse plus reverse ETL. RevOps owns hygiene [302].

## Failure modes

- **Two CRMs.** Marketing automation and sales CRM drift within a month.
- **Enrichment without verification.** Bounce rates blow past 2% and take domains with them [331].
- **Activity objects with no outcome objects.** You can see sends. You cannot see pipeline.
- **Agent writes that bypass the schema.** Made-up titles land in production sequences.

## Agentic layer

Agents may propose field updates. They may not invent emails or overwrite suppression. Validate every write against the schema before it reaches a sending tool. See [GTM OS architecture](/docs/agentic/gtm-os-architecture).

## Sources

- [301] ZoomInfo GTM tech stack, 2026. Source registry #301.
- [302] ZoomInfo RevOps stack, 2026. Source registry #302.
- [305] Gangly sales stack, 2026. Source registry #305.
- [331] LeadHaste, 2026: bounce hygiene. Source registry #331.
