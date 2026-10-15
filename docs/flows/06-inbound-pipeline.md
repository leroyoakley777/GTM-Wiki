---
class: fundamental
sidebar_position: 6
title: Inbound Pipeline - the Runnable Flow
description: "The executable inbound sequence from capture to closed-won: the qualification standard, the routing rules, the nurture track, the SDR-to-AE handoff, and the agentic SOP that watches the funnel."
last_updated: 2026-10-15
status: active
tags: [inbound, flow, lead-qualification, mql, sdr, nurture, agentic]
domain: flows
parent: flows/index
---

# Inbound Pipeline - the Runnable Flow

The [Inbound channel](../channels/inbound) page states the why: when inbound is the right call, the content and SEO motion, the AI-search shift. This page states the how: the ordered steps from the moment a lead lands to the moment it closes or nurtures.

Two rules hold the flow together:

- **Fit before intent.** A lead that matches the ICP gets fast, human handling. A lead that does not match gets nurtured or dropped. Intent without fit is noise.
- **Speed decides.** An inbound lead that gets a response in minutes converts at a rate that drops every hour after. Respond fast or lose the lead.

## Motion at a glance

Inbound is six steps run in order. Each step emits one artifact that feeds the next.

| # | Step | Artifact you must have before advancing |
|---|---|---|
| 0 | Decision gate | A one-line ICP plus a content motion that can rank |
| 1 | Capture | A content engine with named channels and a publishing cadence |
| 2 | Qualify | A lead score that separates MQL from noise |
| 3 | Route | A routing table that sends each lead to the right owner |
| 4 | Engage or nurture | A booked meeting or a nurture-track enrollment |
| 5 | Handoff | A qualified meeting with context passed to the AE |
| 6 | Measure | A funnel readout with conversion rates on named bases |

## Step 0 - Decision gate

Inbound is the right motion when three conditions hold.

The buyer researches before they talk to sales. If your buyers search for the problem you solve, inbound captures that research. If they do not, you are building content for an audience that does not exist.

The content can rank. Search traffic concentrates: less than 2% of new pages reach the Google top 10 within a year, and 96.6% of clicks go to first-page results [176]. If you cannot win the ranking, the content does not capture.

The sales cycle is long enough to nurture. Inbound leads often arrive early in the buying process. 37% of marketers say leads are more informed thanks to AI, and nearly 70% say leads come later in the process [122]. A short-cycle transactional product does not need a nurture track.

## Step 1 - Capture

Content generates 3x more leads than outbound and costs 62% less [150]. That is the compounding engine: a post published this month earns traffic and leads for years after.

Growth-stage B2B SaaS teams publish 8 to 16 posts per month, and teams at 16 or more posts see 4.5x the leads of teams under 8 [285]. Cadence beats quality per post in the early days, because the compounding base matters more than any single asset.

The channels that capture: SEO (the long-term compounding asset), AI search optimization (the new frontier), email list (the owned asset), and paid amplification (the accelerator). Read the [Inbound channel](../channels/inbound) page for the full channel strategy.

## Step 2 - Qualify

Not every lead is worth a rep's time. The lead score separates the leads that get fast handling from the ones that get nurtured.

The specialization model from Predictable Revenue puts inbound lead handling in the MRR role: SDRs prospect, MRRs qualify inbound, AEs close [251]. The split exists because inbound qualification is a different skill from outbound prospecting. Inbound leads arrive with context; the qualifier reads that context and decides the path.

Inbound conversion rates split by intent: low-intent leads convert at 5 to 10%, high-intent leads at 75 to 80% [243]. The difference is the difference between a lead that downloads a whitepaper and a lead that requests a demo. Route them differently.

## Step 3 - Route

The routing table decides who touches the lead and when.

| Lead signal | Route to | Response time | Artifact |
|---|---|---|---|
| Demo request, ICP fit | AE immediately | Under 5 minutes | Booked meeting |
| Pricing page, ICP fit | SDR same day | Under 1 hour | Qualified call |
| Content download, ICP fit | Nurture track | Next touch | Email sequence |
| No ICP fit | Nurture or drop | No response | Suppression list |

Speed is the multiplier. An inbound lead that gets a response in minutes converts at a rate that drops every hour after. The routing table is not about organizational elegance; it is about response time.

## Step 4 - Engage or nurture

The engage path: the rep responds, runs a qualification call, and either books a meeting or sends the lead to nurture. The qualification call covers the same ground as the outbound discovery: need, timeline, budget, decision process.

The nurture path: the lead gets a sequence of value-driven touches over weeks or months. The goal is not to sell; it is to stay present until the lead has a reason to buy. Content marketing is the nurture engine: every post, every email, every guide is a touch that moves the lead closer to the decision.

## Step 5 - Handoff

The handoff from SDR to AE is the moment where most pipeline dies. The SDR books the meeting; the AE starts from scratch; the buyer repeats the same discovery.

The fix is a written handoff standard. The SDR passes a meeting brief that covers: the buyer's need, the trigger that made them raise their hand, the ICP fit score, the questions already answered, and the questions still open. The AE reads the brief before the call and picks up where the SDR left off.

## Step 6 - Measure

The funnel metrics that matter: capture rate (visitors to leads), qualification rate (leads to MQL), MQL-to-SQL conversion, SQL-to-closed-won, and cost per lead.

Track them on named bases with as-of dates. The benchmarks in the [Conversion rate benchmarks](../data/conversion-rate-benchmarks) page carry the full stage tables. Read them as directional, not as targets.

## Worked example

Take a B2B SaaS company with 10,000 monthly visitors. At a 2% capture rate, that produces 200 leads per month. Inbound low-intent leads convert at 5 to 10% and high-intent leads at 75 to 80% [243]. If 20% of the 200 leads are high-intent, that is 40 leads. At 75% conversion, 30 become SQLs. At a 30% close rate, 9 deals close per month from inbound alone.

The cost per lead: if the content engine costs $15,000 per month and produces 200 leads, the cost per lead is $75. Against a $5,000 ACV, the cost per acquisition is $150. The math works when the ACV clears the CAC multiple.

## How the flow differs by stage

| Stage | Capture motion | Qualification | Handoff |
|---|---|---|---|
| Seed | The founder writes and answers every lead | The founder qualifies on the call | Founder to founder, no handoff |
| Series A to B | A content engine runs, an SDR qualifies | The SDR runs the qualification call | SDR to AE with a written brief |
| Growth | A demand-gen team runs the engine | A dedicated MRR role qualifies inbound | MRR to AE, AE to close |
| Enterprise | ABM and intent data drive capture | The AE qualifies with the SDR assisting | SDR to AE with an account plan |

## Failure modes

- **The slow response.** A lead that waits hours for a response goes cold. The buyer has already talked to your competitor.
- **The qualification gap.** Every lead gets the same handling, so high-intent leads wait and low-intent leads waste rep time.
- **The nurture black hole.** Leads that are not ready get no nurture and no follow-up. They are lost.
- **The handoff loss.** The AE starts from scratch and the buyer repeats the discovery. Trust drops.
- **The vanity metric.** Traffic and leads get tracked, but conversion to pipeline does not. The team optimizes for activity, not outcomes.

## Agentic layer

An agent watches the funnel and flags the leads that need human attention. The human keeps the qualification call and the sales conversation.

```
Daily, for every lead in the funnel:
  1. Pull the lead score, the intent signals, and the ICP fit.
  2. If a high-intent lead has no owner, route it and alert the team.
  3. If a lead in nurture hits a trigger, flag it for a human touch.
  4. If a qualified lead has no meeting after 24 hours, re-route or escalate.
  5. Track conversion rates and flag any stage that drops below baseline.
Never send a qualification call or a pricing conversation without human approval.
```

A marketing automation platform carries the lead scoring, the nurture sequences, and the routing rules. Place the human gate where judgment changes the outcome: the qualification call, the pricing conversation, and the handoff.

## Related pages

- [GTM funnel](../foundations/gtm-funnel): the stage map this flow executes.
- [Outbound - the Runnable Flow](./outbound): the outbound counterpart.
- [Inbound channel](../channels/inbound): the channel strategy this flow executes.
- [Sales Process: the MEDDPICC flow](./sales-process-meddpicc): the stages that close the deal this flow feeds.
- [ICP definition](../foundations/icp-definition): the fit standard the routing table runs on.
- [Conversion rate benchmarks](../data/conversion-rate-benchmarks): the conversion benchmarks this flow is measured against.
- [Agentic Outbound: the use](./agentic-outbound): the agent architecture that runs the funnel.
- [Agent vs human workflows](../agentic/agent-vs-human-workflows): the autonomy placement rules.

## Sources

- [122] HubSpot, 2026: 37% of marketers say leads more informed due to AI; ~70% say leads come later. Source registry #122.
- [150] DemandSage, 2026: content generates 3x more leads than outbound and costs 62% less. Source registry #150.
- [176] Ahrefs, 2026: less than 2% of new pages reach Google top 10 within a year; 96.6% of clicks go to first-page results. Source registry #176.
- [243] Crunchbase / The Bridge Group, Dec 2025: inbound low-intent conversion 5-10%, high-intent 75-80%; inbound rep handles ~15 leads/day. Source registry #243.
- [251] Predictable Revenue (Aaron Ross & Marylou Tyler), 2011: specialization model: SDRs prospect, MRRs qualify inbound, AEs close. Source registry #251.
- [285] Jam 7, 2026: growth-stage B2B SaaS content benchmarks: 8-16 posts per month standard, 4.5x leads at 16+ posts. Source registry #285.
