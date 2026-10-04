---
class: fundamental
sidebar_position: 1
title: Launch
description: "The launch post: what this wiki is, how agents build it, and why it stays public."
status: active
last_updated: 2026-10-04
tags: [launch]
---

# Launch

This section holds the announcement for the wiki. It records what shipped, how the build works, and why the result stays open.

## Pages

- [Launch: the GTM Wiki is live](/docs/launch/launch-post): the announcement, the two content layers, and the build pipeline behind them.

The gate a page clears before it appears here:

```
1. Ship gate green   -> npm run ship:gate exits 0
2. Live URL verified -> the page serves 200 from Vercel
3. Sources resolve   -> every citation matches the source registry
```

## Sources

- [1] Launch record: internal operating note, reviewed 2026-10-04.
