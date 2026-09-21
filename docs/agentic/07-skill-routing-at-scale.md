---
class: agentic
sidebar_position: 26
title: Skill Routing at Scale
description: "Agentic GTM stub: skill routing at scale. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Skill Routing at Scale

## Thesis

- A classifier reads the task and picks the skill, the model, and the loop type.
- Cheap decisions route to small decision models. Generation routes to big models. One router, two tiers.
- Loop type is a routing decision too: turn-based, triggered, scheduled, or long-running.

## What breaks in practice

Routing tables rot. Skills multiply, the classifier misroutes, and nobody notices because the failure is quiet: a slow answer, not an error. Jev-style decision models make the cheap tier nearly free, so the temptation is to route everything there [1]. Resist. Sample routed runs, grade them, and feed the misses back into the routing table. Latent Space counted 6 open Jev clones within 2 days [2]; the model tier is commodity, the routing policy is the moat. Avi Chawla's loop taxonomy is the other half of the table: what starts a run and what decides done [3].

## Sources

- [1] [Nicolas Bustamante on Jev (RLCD model)](https://x.com/nicbstme/status/2100811101181297008), as-of 2026-09-18: typed decisions and probabilities in parallel, not token-by-token generation.
- [2] [Latent Space: 6 open clones of Jev in 2 days](https://www.latent.space/p/ainews-here-are-6-clones-of-jev-in), as-of 2026-09-19: System 1 decision models reproduce fast.
- [3] [Avi Chawla: four agent loop types](https://x.com/_avichawla/status/2088878638641160468), as-of 2026-08-16: loop type sets what starts a run and what decides done.
