---
class: agentic
sidebar_position: 25
title: "Claims Stores: Append-Only Research"
description: "Agentic GTM stub: claims stores: append-only research. Thesis, failure modes, and sources."
last_updated: 2026-09-21
status: active
tags: [agentic, stub, ai-era-gtm]
---

# Claims Stores: Append-Only Research

## Thesis

- Research lands as claims in an append-only log. One line per claim, source attached, never rewritten.
- Corrections are new lines that outvote the old claim. History stays intact.
- Wiki pages are generated views over the log. If a page is wrong, fix the log or the generator, never the page.

## What breaks in practice

Teams edit the view and call it research. Then nothing proves what was known when, and corrections overwrite their own sources. polydao's design is the discipline to copy: schema first, one id per entity, corrections reference the id they outvote [1]. Stanford's ACE work found the same shape in context engineering: append-only delta updates beat wholesale rewrites, and role separation (generator, reflector, curator) keeps the store clean [2]. The cost is real: you stop hand-polishing pages and start reviewing log diffs. That is the point.

## Sources

- [1] [polydao: append-only claim store thread](https://x.com/polydao/status/2101910293769273594), as-of 2026-09-21: append-only JSONL, corrections outvote, one id per entity.
- [2] [Stanford: Agentic Context Engineering (arXiv 2510.04618)](https://arxiv.org/abs/2510.04618), as-of 2025-10: append-only delta updates to evolving contexts beat rewrites.
