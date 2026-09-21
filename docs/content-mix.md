---
class: fundamental
sidebar_position: 29
title: "Content mix: agentic vs fundamental"
description: "The page-class system, the 70/30 launch target, the mix counter, and the current gap."
last_updated: 2026-09-21
status: active
tags: [content-mix, policy, agentic, fundamentals, counter]
---

# Content mix: agentic vs fundamental

Every page carries one class in frontmatter: `class: agentic` or `class: fundamental`.

- Agentic: AI-era GTM practice. Agent-built outbound, probabilistic pipelines, cron-driven ops, human-in-loop QA gates, classifier skill routing, append-only claims stores.
- Fundamental: classic GTM. ICP, channels, pricing, positioning, funnels, metrics.

Launch target: 70 percent agentic, 30 percent fundamental, by page count.

## Mix counter

Run from the repo root:

```bash
grep -rl "class: agentic" docs | wc -l
grep -rl "class: fundamental" docs | wc -l
```

## Snapshot, as of 2026-09-21

The counter greps file contents, so this page counts itself once on each side. Net the two fenced lines out.

- 42 agentic pages (17 in docs/agentic, 9 in docs/agent-ops, 7 in docs/gtm-engineering, flows/02-agentic-outbound, plus the 10 new stubs at docs/agentic/01-10).
- 87 fundamental pages.
- 129 tagged pages total: 32.6 percent agentic.

The target is 70/30. The gap is 38 pages. Two moves close it: grow the ten stubs (backlog rows IA-01 to IA-10), and ship new agentic pages by default. New fundamentals still land when the topic is classic GTM, but the default for new work is agentic.

## Rules

1. New pages declare `class:` in frontmatter. A page without a class fails the intent of this policy even if the build passes.
2. A page gets exactly one class. A page that teaches classic GTM with an agentic SOP bolted on is still one class: pick the layer that owns the page's core claim.
3. `docs/map.md` carries no class. It is generator output.
4. Re-run the counter before any announcement that quotes the mix. Publish the real number, not the target.
