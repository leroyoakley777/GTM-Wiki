---
class: fundamental
sidebar_position: 30
title: "Launch: the GTM Wiki is live"
description: "Announcement post for the GTM Wiki: what it is, how agents build it, and why it is public."
last_updated: 2026-09-21
status: active
tags: [launch, announcement, agentic, wiki]
---

# Launch: the GTM Wiki is live

Most GTM writing on the internet is a listicle with an affiliate link. I got tired of it, so I built the thing I wanted to read. It is public now.

Two layers, one bar.

The fundamental layer covers the classics: ICP, channels, pricing, funnels, positioning. Written to be used, not skimmed. Every dated stat carries a footnote with an as-of date, and the source registry rejects any citation it cannot resolve.

The agentic layer is the part I care about. Agents that grade each other before a page ships. Probabilistic pipelines with the miss rate printed next to the win rate. Cron fleets that sweep feeds and expert posts on a schedule, then compile notes with the source URL attached. A claims store that stays append-only, so a correction outvotes what came before instead of overwriting it. Human gates sit where judgment lives: merges, sends, tie breaks. Machines do the rest.

How it gets built: three cron lanes a day pull sources, compile notes, and ship pages. Machine gates run before every commit: lint, comms lint, slop scan, source registry, freshness check. If a gate fails, the page does not ship. The queue does not care that it is 2am.

Why public: because a wiki that dies in a private folder dies. Open pages force the sources to hold up. When I am wrong, a reader can name the line.

The mix today sits at roughly a third agentic, and the target is 70/30. Ten new agentic pages just landed, and the backlog rows to grow them are public in the repo. I will post each page as it ships.

Start at the map. If one page saves you a bad outbound domain or a fake-precise benchmark, it did its job.
