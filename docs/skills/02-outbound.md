---
sidebar_position: 3
title: Outbound
description: "The cold email and call motion that turns a prospecting list into meetings: the trigger, the sequence build, the email template, a worked payback example, and the agentic SOP that runs it."
last_updated: 2026-08-19
status: active
tags: [outbound, cold-email, sdr, sequencing, deliverability, agentic, skills]
domain: skills
parent: skills/index
---

# Outbound

Outbound is the skill of sending cold email and running cold calls to book meetings with ICP-fit accounts. You run it when you have a list and a value hypothesis and need pipeline faster than inbound will deliver it.

Outbound is the scaler you control. Unlike inbound, which compounds but takes quarters, outbound produces meetings on the schedule you set, as long as deliverability and message quality hold [1].

## When to use this skill

Run outbound when:

- You have a verified prospecting list and a value hypothesis per account.
- Pipeline coverage is below the 3-5x quota band and you need meetings this quarter [2].
- The ICP is tight enough that a surgical message beats a broad one.
- An agent can run the sequence while a human owns the relationship.

Do not run it as a volume play. Under 125-word, personalized cold email outperforms long templated sends by about 50% on reply rate [3]; blasting 1,000 generic emails buys spam, not meetings.

## Definition

Outbound is a repeatable send-and-call motion: a targeted list, a value-first message keyed to a signal, a multi-touch sequence, and a deliverability discipline that keeps the domain out of spam. The meeting is the unit of output, not the send.

## Why it matters

A defined ICP plus disciplined outbound is the fastest repeatable pipeline source for a tight-ICP motion [4]. The cost is real: a fully-loaded SDR runs about $139,120 per year [5], and a burned domain costs far more in lost deliverability. The skill exists to make the spend produce meetings at a known payback, not to maximize sends.

## Mechanics

### 1. Protect deliverability before you send

Set up the domain and inboxes first. Use 2-3 inboxes per domain, cap at 50 sends per inbox per day, and run a 3-week warmup before any campaign [6]. Authenticate with SPF, DKIM, and DMARC; keep complaint rates under 0.3% and inbox placement at or above 80% [7]. A domain that fails deliverability wastes every message after it.

### 2. Write the value-first email

Lead with a signal or an insight, not your product. Offer the reader something useful in the first line: a benchmark, a observation, or an ungated resource. Keep it under 125 words [3]. Personalization that reaches 15-25% reply rates comes from signal-based targeting, not token-swapping the first name [8].

### 3. Build the sequence

A 4-touch sequence over 10-14 days beats a single send. Space touches so the reader is not hit twice in a week. Each touch changes the angle: signal, insight, social proof, low-friction ask. Stop the sequence the moment a reply lands.

### 4. Call the high-value tier

Cold calls convert at 2-3% connect rate, with top SDRs reaching 5-8% meetings [9]. Reserve calls for Tier 1 accounts where a human conversation is worth more than an email. Call after the second email, not as the first touch.

### 5. Measure and iterate

Track reply rate, positive reply rate, and meetings booked per 1,000 sends. The healthy band is 3-10 meetings per 1,000 sends [10]. A sequence below it is a message problem or a list problem, not a volume problem.

## Artifact: the cold email template

This is the deliverable each send is built from. One variable block per signal.

```text
Subject: <signal-specific, not "quick question">

<First name>, saw that <specific signal: funded / hired / launched>.
Most <their role> at <their stage> hit <named problem> around then,
and it costs <quantified pain>.

We helped <similar co> cut that to <outcome> in <time>.

Worth a 15-minute look at how? If not you, who owns <problem> there?

<Name>
```

Under 125 words. No "I hope this finds you well." No superlatives. The ask is one line.

## A worked example

A Series B SaaS spends on outbound to hit pipeline coverage. Fully-loaded SDR cost is $139,120 per year [5]. The SDR sends 50 emails per day across 3 inboxes, 5 days a week: about 1,000 sends per month, or 12,000 per year.

At a 5.8% blended reply rate [1], that is about 696 replies per year. Positive replies run above 30% of replies [1], so roughly 210 positive replies. At the 3-10 meetings per 1,000 sends band [10], 12,000 sends yield 36-120 meetings per year.

Take the midpoint, 78 meetings. If 21% close (the ~21% Opp to Closed-Won benchmark) [11], that is about 16 new customers. If average ACV is $30,000, outbound books about $480,000 in new ARR against $139,120 of SDR cost: a payback well inside 12 months. The arithmetic is a named base, not a guess; change the send volume or the reply rate and the meeting count moves with it.

## Failure modes and how to fix them

- **Deliverability ignored.** One unauthenticated domain burns the whole program. Fix: SPF/DKIM/DMARC set, warmup run, caps enforced [6][7].
- **Volume over relevance.** Generic blasts land in spam and train filters against you. Fix: under 125 words, signal-led, one variable block [3].
- **No sequence, just a send.** A single email catches the reader only if they are reading that day. Fix: 4-touch, 10-14 day cadence, stop on reply.
- **Calling first.** Cold calls as a first touch waste the human on unqualified accounts. Fix: email to warm, call the Tier 1 follow-up.
- **Measuring sends, not meetings.** Sends are vanity; meetings per 1,000 sends is the real yield [10]. Fix: track the band, not the count.

## How the skill differs by segment and maturity

- **By segment.** SMB: shorter sequences, product-led follow-up, lighter calls. Enterprise: longer sequences, committee targeting, calls reserved for economic buyers.
- **By maturity.** A new motion should outbound narrow (prove the message on 200 accounts) before scaling sends. A mature motion can scale volume and let the agent run the sequence.
- **By channel pairing.** Outbound feeds the [sales process](../flows/sales-process-meddpicc) when a meeting books; pair it with [prospecting](./prospecting) for the list and [ABM](./abm) for the high-value accounts.

## Agentic layer

An agent can run the sequence, personalize at signal scale, and surface replies, while a human writes the Tier 1 message and owns the meeting.

**SOP: run an outbound sequence.**

```text
Given: a tiered prospecting list and a value hypothesis per account.
1. Load Tier 2 accounts into the sequence tool; assign owners.
2. For each account, pull the strongest signal and fill the email template (one variable block).
3. Enforce send caps (50/inbox/day, 2-3 inboxes/domain) and warmup status.
4. Run the 4-touch cadence; stop any account on first reply.
5. Route positive replies to the human owner; log meetings booked per 1,000 sends.
6. Flag any domain with complaint rate >0.3% or inbox placement &lt;80% and pause sends [7].
Never send an unverified email. Never personalize from a signal you cannot name.
```

**Prompt: personalize the Tier 2 email.**

```text
You are an outbound operator. Given an account, a named signal, and the value hypothesis,
fill the cold email template. Keep under 125 words. Lead with the signal. Offer one useful
thing in the first line. No superlatives, no "I hope this finds you well." Output only the email.
```

Keep the human in the loop for Tier 1 message approval, any send to a compliance-sensitive account, and the live meeting. The agent runs the cadence; you own the relationship.

## Sources

1. [SalesHive: B2B Cold Email Benchmarks 2025](https://saleshive.com/blog/b2b-cold-email-benchmarks-2025): blended B2B cold reply 5.8% (down from 6.8% in 2023); positive reply over 30% of replies.
2. [getSpike: SaaS Marketing Benchmarks 2026](https://getspike.ai/blog/saas-marketing-benchmarks/): pipeline coverage 3-4x mid-market, 4-5x enterprise is the healthy band.
3. [Mailforge via Martal: email length](https://martalgroup.com): 50-125 word emails earn about 50% higher reply rates.
4. [GTM Syndicate: outbound benchmarks](https://gtmsyndicate.com): outbound is the fastest repeatable pipeline for a tight-ICP motion.
5. [AiSDR cost analysis 2026](https://www.aisdr.com): fully-loaded SDR about $139,120 per year.
6. [Clay: Deliverability and warmup](https://clay.com): inbox ceilings (50/day/inbox, 2-3 inboxes/domain), 3-week warmup, verification tooling.
7. [Instantly: sender requirements](https://instantly.ai): complaint rate under 0.3%, inbox placement at or above 80%, bounce troubleshooting.
8. [Instantly: signal personalization](https://instantly.ai): signal-based personalization reaches 15-25% reply rates.
9. [SalesGenie: cold call connect](https://salesgenie.com): cold call connect 2-3%, top SDRs 5-8% meetings.
10. [GTM Syndicate: outbound benchmarks](https://gtmsyndicate.com): 3-10 meetings per 1,000 sends.
11. [Ebsta & Pavilion: B2B Sales Benchmark 2024](https://www.thestarrconspiracy.com): opportunity to closed-won 21% average.
