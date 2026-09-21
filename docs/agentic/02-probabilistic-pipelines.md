---
class: agentic
sidebar_position: 21
title: Probabilistic Pipelines
description: "Agentic GTM stub: probabilistic pipelines. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Probabilistic Pipelines

## Thesis

- Classic funnels treat each step as deterministic. Agent pipelines are not. Each run is a draw from a distribution.
- Design for the distribution: run wide, expect misses, measure the rate.
- Land outputs in a deterministic trust layer. Agents propose; an append-only store records what was known when.

## What breaks in practice

Teams copy a single winning output and treat it as the new baseline. One lucky sequence is not a rate. Regression to the mean eats small samples, so decide on expected value and sample size before you scale. Keep the miss rate visible next to the win rate: a pipeline that hides misses looks better than it is and fails later, in front of a customer. The downstream layer stays deterministic. Decision models that return probabilities are now a reproducible category [1], and the claims they produce land append-only or not at all [2].

## Sources

- [1] [Latent Space: 6 open clones of Jev in 2 days](https://www.latent.space/p/ainews-here-are-6-clones-of-jev-in), as-of 2026-09-19: System 1 decision models that return probabilities are a reproducible category.
- [2] [polydao: append-only claim store thread](https://x.com/polydao/status/2101910293769273594), as-of 2026-09-21: corrections are new lines that outvote the claim they fix.
