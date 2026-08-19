---
sidebar_position: 2
title: Outbound
description: When cold outbound is the right channel, the funnel metrics that tell you it is working, the failure modes that kill it, the worked math on a named base, and how the motion changes by company stage.
last_updated: 2026-08-19
status: active
tags: [outbound, channels, cold-email, sdr, funnel]
---

# Outbound

Outbound is a surgical instrument, chosen deliberately rather than by
default. It is the right channel only when you know exactly who the
buyer is, the deal justifies the effort, and inbound or partnerships
will not fill the pipe fast enough. Run well, it is the fastest
repeatable pipeline you will build. Run badly, it burns budget and a
sending domain [1].

This page is the *where* of outbound: when it is the right call, how to
judge whether the motion is healthy, where it breaks, and how the numbers
change by company stage. For the step-by-step execution, see the
[Outbound from Zero playbook](../playbooks/outbound-from-zero.md). For the
agentic layer on top, see [Agentic Outbound](../agentic/agentic-outbound).

---

## One Number That Matters Most

**Meetings booked per 1,000 sends: a healthy range is 3-10** [1]. That
number compounds delivery, open, reply, and positive-reply rates into one
diagnostic. If you book fewer than 3 meetings per 1,000 sends, do not add
volume: the message, list, or offer is broken. If you book more than 10,
you are leaving pipeline on the table and should scale the send.

Do not track emails sent as a score. Sends are vanity. Meetings are
revenue.

---

## When Outbound Is the Right Channel

Use the [Channels Bullseye](../foundations/gtm-channels-bullseye) to pick
your one best channel before you commit. Outbound wins when all three
hold:

- **The ICP is tight and the TAM is small.** You can name the companies
  and the humans who own the problem. Outbound cannot compensate for a
  fuzzy ICP; it just reaches a fuzzy audience faster.
- **ACV is roughly $5k or above.** Below that, the human cost per meeting
  eats the deal. A single SDR runs about $139,120/year fully loaded
  [2]. There is no hard floor, but the economics tighten fast under
  ~$5k ACV.
- **Inbound or content will not fill the pipe in your time.** Outbound is
  the channel you run while the compounding channels (content, SEO, PLG)
  mature.

If none of those are true, build content or partnerships first. Outbound
against a bad ICP is paying to speed up a mistake.

---

## Outbound Funnel: Benchmarks That Diagnose

Each stage answers a different question. A healthy total is the product of
all of them, so a weakness at any single stage caps the whole motion.

| Stage | Healthy range | What it tells you |
|---|---|---|
| Delivery rate | above 97% | Domain health and list hygiene [1] |
| Open rate (cold) | 50-70% | Subject line + sender trust [3] |
| Reply rate | 2-5% (3.43% blended average) | Message relevance to the audience [4] |
| Positive reply rate | above 30% of replies | ICP fit: are the replies worth pursuing? [5] |
| Meetings booked / 1,000 sends | 3-10 | Overall motion health [1] |

**The rule that saves you from yourself:** do not optimize the message
until you have 300+ sends per variant. Small samples produce noise, and
noise produces confident wrong answers.

---

## Worked Math on a Named Base

Here is what a healthy outbound motion yields, walked from a named base.
Start with a 500-row, ICP-matched list and the mid-range benchmarks.

| Stage | Rate (named base) | 500 rows |
|---|---|---|
| Delivery | 97%+ (Instantly, 2026 [1]) | ~485 delivered |
| Open | 16.5% cold (OptifAI [3]) | ~80 opens |
| Reply | 3.43% (Woodpecker, 2026 [4]) | ~17 replies |
| Positive reply | 30% of replies (SalesHive, 2025 [5]) | ~5 positive |
| Meetings booked | 3-10 per 1,000 (Instantly, 2026 [1]) | ~2-5 meetings |

A 500-row list produces roughly **2-5 booked meetings**. That is the
honest number. To land a target of 20 meetings/month, work the
meetings-per-1,000 base: at 10 per 1,000 you need about 2,000 rows in
motion each month; at 3 per 1,000 you need about 6,700. Plan for
**2,000-6,700 quality rows in motion per month** and build a repeatable
list-generation loop to feed it.

The list is the asset for a reason: it is the only stage you can scale
without raising the reply rate. The lever that changes the reply rate is
channel strategy, not volume. Teams running multi-channel sequences
(email plus LinkedIn plus call) report **15-25% reply rates**, several
times the 3.43% single-channel baseline [6].

---

## Why Outbound Compounds (When It Works)

- **The list is the asset, not the copy.** A 500-row list that matches the
  ICP beats a 50,000-row spray every time. Every row needs a first name,
  a verified email, and a one-line reason-to-reach: a trigger, a change,
  a gap. No reason, no row.
- **Signal beats sequence.** Job changes, funding rounds, hiring surges,
  and tech-stack changes build better lists than static firmographics.
- **Personalization is the differentiator, and it is rare.** Only about
  5% of senders personalize every email [7]. Signal-driven references
  lift reply rates from roughly 9% to 18% versus generic templates [8].
- **The reply is where outbound is won or lost.** A hot reply handled in
  under 15 minutes is the single biggest lever most teams leave on the
  table [1].

---

## How to Read These Numbers

1. **Diagnose before you scale.** Delivery below 97% is a domain or list
   problem. Open below 50% is a subject-line or sender-trust problem.
   Reply below 2% is a message or audience problem. Fix the broken stage;
   adding volume to a broken stage just scales the leak.
2. **Chase reply rate, not send volume.** The industry average cold reply
   rate is about 5%, with most campaigns landing 1-5% [9]. Signal-driven
   personalization reaches 15-25% [6]. The gap between generic and
   specific is the whole opportunity.
3. **Benchmark against your own trend first.** Industry ranges are the
   map; your campaign history is the territory. A motion moving from 2%
   to 4% reply is improving even if it has not hit the top of the range.

---

## Failure Modes

The two places outbound dies most often are the same every time:

- **Scaling volume before proving the message.** You end up with 10x the
  noise and a burned domain. The 300+ sends per variant rule exists to
  stop this.
- **No handoff discipline.** Meetings get booked but nobody qualifies
  them, nothing closes, and the motion looks broken when it was only
  unfinished.

Other ways it breaks, less common but just as fatal:

- **Skipping domain warmup.** A fresh domain sent at full volume burns in
  a week; warmup and the 25-50/day cap are non-negotiable [1].
- **Buying a list without reasons-to-reach.** Cold spray with no
  personalization gets no replies, and it wastes the domain's reputation.
- **Optimizing subject lines while the offer is broken.** Polish on a dead
  product changes nothing.

---

## How the Motion Changes by Company Stage

The channel is the same; the knobs differ by stage and deal size.

- **Seed-stage (under $1M ARR, sub-$5k ACV).** Founder-led outbound works
  on a small manual list because the labor is free. Keep it under 100
  rows and run one variant. Do not hire an SDR here.
- **Mid-market (roughly $1M-$30M ARR, $5k-$50k ACV).** The full motion
  runs as written: a dedicated sender domain, a 500-row base, and the
  3-10 meetings-per-1,000 score [1].
- **Enterprise ($30M+ ARR, $50k+ ACV).** The list becomes tens of accounts
  with deep research each. The sequence branches by stakeholder, and the
  score is deal rate, not meetings booked.

---

## Agentic Layer

Outbound is the channel where agentic GTM has the most proven use, because
the bottleneck has never been sending, it is the *thinking per row*.
Agents remove the thinking bottleneck; humans keep the judgment. The
funnel metrics above hold with AI in the loop. The full treatment is
[Agentic Outbound](../agentic/agentic-outbound).

---

## Sources

1. [Instantly: 2025 Guide to AI Outbound Sales](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/): delivery cap, warmup, meetings per 1,000, time-to-response.
2. [AiSDR: SDR vs AI Cost Analysis](https://aisdr.com/blog/sdr-vs-ai-cost/): fully-loaded SDR cost, 2026 (vendor source).
3. [OptifAI](https://optifai.com/): 16.5% cold open-rate baseline.
4. [Woodpecker: Cold Email Statistics (2026)](https://woodpecker.co/blog/cold-email-statistics/): 3.43% blended reply average.
5. [SalesHive: B2B Cold Email Benchmarks (2025)](https://saleshive.com/): positive-reply rate, funnel stages.
6. [Autobound: AI SDR tools guide](https://www.autobound.ai/blog/ai-sdr-tools-guide): 15-25% multi-channel reply rates, 2026 (vendor source).
7. [Mailshake: The State of Cold Email 2025](https://mailshake.com/blog/the-state-of-cold-email-2025/): only about 5% personalize every email.
8. [Martal: B2B Cold Email Statistics](https://martal.ca/b2b-cold-email-statistics-lb/): personalization lift (9% to 18%), message-length sweet spot.
9. [Belkins: B2B Cold Email Benchmarks](https://belkins.io/blog/lead-generation-conversion): open/reply rate ranges and channel conversion data.

---

## Further Reading

- [Outbound from Zero playbook](../playbooks/outbound-from-zero.md): the step-by-step execution runbook.
- [Outbound - the Runnable Flow](../flows/outbound): the executable motion with the four cold emails shipped in-page.
- [Agentic Outbound](../agentic/agentic-outbound): the same motion with an agent use.
- [Channels Bullseye](../foundations/gtm-channels-bullseye): how to pick outbound as your one best channel.
- [GTM Metrics](../data/gtm-metrics): the pipeline coverage and win-rate context outbound feeds.
