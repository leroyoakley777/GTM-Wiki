---
sidebar_position: 4
title: Jevons economics of AI GTM
description: Efficiency raises consumption. Inference prices are collapsing, so decision volume explodes and GTM spend moves to judgment, taste, and verification.
tags: [agent-ops, jevons-paradox, economics, inference-cost, strategy]
status: active
last_updated: 2026-09-20
---

# Jevons economics of AI GTM

In 1865, William Stanley Jevons examined England's coal use and found
something counterintuitive. Engines that burned coal more efficiently did not
reduce coal consumption. They raised it, because cheaper energy opened new
uses faster than it saved the old ones [1]. The mechanism bears his name, and
it is running on your GTM stack right now.

## Restating the paradox for GTM

When the unit cost of a capability falls by an order of magnitude, total
spend on that capability usually rises, because volume grows faster than price
falls. Cheap energy did not shrink the coal industry. Cheap communication did
not shrink the volume of messages. Cheap intelligence will not shrink the
volume of decisions.

Microsoft's CEO marked the moment in January 2025: "Jevons paradox strikes
again! As AI gets more efficient and accessible, we will see its use
skyrocket, turning it into a commodity we just can't get enough of" [2]. He
was describing demand, not technology.

## Prices in free fall

The price data is the clearest in the industry:

- Epoch AI measures LLM inference prices falling between 9x and 900x per year,
  depending on the task milestone, with the fastest declines in the most
  recent data [3].
- a16z's LLMflation analysis puts the constant-quality decline at roughly 10x
  per year, and records a 1,000x drop within three years for a GPT-3-class
  capability, from $60 per million tokens in late 2021 to fractions of a cent
  [4].

Read those two ranges as a forecast: whatever a decision costs today, assume a
fraction of that next year and effectively zero the year after. Strategies
that assume expensive intelligence stays expensive are betting against the
best-measured trend in the industry.

## What gets cheap and what does not

The collapse is not uniform across work. It lands hardest on the *reading*
half of GTM: classify, route, score, tag, summarize, detect. A local
classifier measured in hundreds of megabytes now does what last year needed an
API call. See [Jev-style decision gates](./decision-gates) for the mechanics.

The *judgment* half resists the collapse:

- Deciding what is worth deciding.
- Taste: knowing which draft is actually good.
- Verification: proving an artifact is real, live, and correct.
- Trust: deciding which automated output a customer never sees.

These get *more* valuable as everything around them gets cheaper, because they
become the bottleneck.

## Where GTM spend moves

Run the paradox forward and the budget reshapes:

| Yesterday's cost center | Tomorrow's commodity | New bottleneck |
|---|---|---|
| Manual lead triage | Typed classifier, near-zero cost | Deciding which segments matter |
| First-draft copy | Commodity generation | Taste and brand judgment |
| Reporting and dashboards | Commodity compilation | Deciding what to measure |
| QA sampling | Full-coverage automated checks | Designing what "correct" means |

The teams that win are the ones that notice the constraint moving. If your
moat was doing the reading, the reading is now free. If your moat is deciding
what deserves reading, you just gained a 1,000x budget surplus to spend on it.

## Failure modes and how to fix them

**Rationing free decisions.** Teams sample inbound volume because last year
reading it all cost too much. After the price collapse, sampling is a habit,
not an economics. Fix: re-price your decision work annually; gate what became
free, and reinvest the savings in judgment work.

**Confusing cheap decisions with cheap judgment.** A $0 classifier routes the
lead; it cannot tell you the segment is wrong. Fix: keep a human and a strong
model as the appeal path on every gate, and log the overrides.

**Budgeting by token spend.** Token costs fall 10x a year; attention does not.
Fix: measure cost per outcome at equal quality, and expect the mix to shift
toward human time on judgment.

## Variants by company stage

**Solo and seed.** You are the judgment layer. Automate the reading, and spend
the reclaimed hours in customer conversations.

**Series A to B.** This is the stage where the paradox pays: enough volume
that full-coverage automated decisions beat sampling, and enough budget that
judgment work can be staffed.

**Enterprise.** Governance is the scarce resource. The spend moves to
decision ledgers, audit, and proving that automated decisions meet the bar
regulators and customers expect.

## Where to go next

- [Jev-style decision gates](./decision-gates) for the cheap decision layer.
- [Model tiering and cost discipline](./model-tiering) for spending the
  surplus well.

## Sources

- [1] [Jevons, The Coal Question (1865)](https://en.wikipedia.org/wiki/Jevons_paradox) - original statement: efficiency in coal use raised total coal consumption. As of 1865.
- [2] [Satya Nadella on X (January 27, 2025)](https://x.com/satyanadella/status/1883753899255046301) - "Jevons paradox strikes again": more efficient, accessible AI raises total use.
- [3] [Epoch AI: LLM inference price trends (2025)](https://epoch.ai/data-insights/llm-inference-price-trends) - inference prices fell 9x to 900x per year depending on task milestone.
- [4] [a16z, LLMflation by Guido Appenzeller (November 12, 2024)](https://a16z.com/llmflation-llm-inference-cost/) - roughly 10x per year constant-quality decline; 1,000x within three years for GPT-3-class capability.
