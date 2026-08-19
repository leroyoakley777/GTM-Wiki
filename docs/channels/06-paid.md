---
sidebar_position: 6
title: Paid Acquisition
description: When paid is the right channel, the unit economics that make it work, the channel stack and benchmarks, failure modes, handoffs, and the agentic layer for running spend to payback.
status: active
tags: [paid, channels, ads]
---

# Paid Acquisition

**Paid is the channel you scale with a budget change, and it burns cash from the second it is on.** Unlike most other channels, it buys pipeline directly, so the sizing question is simple: spend up to what your sales team can close, and stop when a customer stops repaying its acquisition cost. The rest of this page is how to measure that payback and keep the motion profitable.

Paid advertising covers search, social, display, programmatic, and retargeting. The ad platforms differ, but the deciding variable is the same everywhere: **unit economics**. Does the lifetime gross margin of a customer repay what it costs to acquire them, and how fast?

This page covers when paid is the right call, the benchmarks that tell you whether the motion is profitable, the stack, the rollout sequence, the failure modes, the handoffs, and the agentic layer that runs spend to payback.

Read the [GTM Funnel](/docs/foundations/gtm-funnel) first, then the [Conversion Rate Benchmarks](/docs/data/conversion-rate-benchmarks) data page. This page sits on top of both.

---

## One Number That Matters Most

**Payback period on CAC: the months of gross margin it takes one customer to repay what you spent to acquire them.** A healthy paid channel pays back in under 12 months. Great ones do it in under 6.

That single number, more than CTR, CPM, or cost-per-lead, tells you whether paid is a business or a donation. Cheap clicks that never become paying customers are expensive. Cost per lead is a scoreboard, not a verdict. Payback against gross margin is the verdict.

**What the medians say.** Aleph (getaleph.com, 2025 data, 342 companies) reports the median B2B SaaS CAC payback at 16 months in 2025, improved from 18 months in 2024, an 11% gain in one year. The top quartile pays back in 6 months or less. Companies growing above 50% a year pay back in a median 10 months. Companies growing 21–30% take 22 months. The spread between a 6-month and a 24-month payback decides how much capital you can recycle back into growth.

Optifai (optif.ai, 2026) splits the median by segment: SMB (under $15K ACV) 8–12 months, mid-market ($15K–$100K ACV) 14–18 months, enterprise (above $100K ACV) 18–24 months, overall median 15 months. Its health bands: top tier under 12 months, good 12–18, concerning 18–24, critical above 24.

These are baselines, not targets. They are the band you benchmark against, not the number you promise a board.

---

## What Paid Buys

Paid buys three distinct things, and each needs a different metric.

**Demand capture.** Someone already searching for your problem or your competitor sees your ad. Google search is the highest-intent inventory in the channel. You pay a premium for intent that exists.

**Demand creation.** Someone who does not know they have a problem sees your story. Social and display build awareness and association. You pay for reach and hope for eventual conversion.

**Demand acceleration.** Someone who already visited you gets retargeted until they act. Retargeting converts the in-market audience you already warmed.

Map each campaign to one job. A campaign trying to do all three does none of them well, and it cannot be diagnosed when the numbers move.

---

## Is Paid Even the Right Channel?

Use the [Channels Bullseye](/docs/foundations/gtm-channels-bullseye) to pick your one best channel first. Paid wins when four things are true.

- **You have proven the offer organically first.** Paid amplifies what already works. It cannot invent demand for a broken offer. If free channels cannot convert, paid just pays to fail faster.
- **The math closes.** CAC payback lands inside your target, against gross margin, at a scale that matters. Model it before you spend a dollar.
- **The funnel leaks are fixed.** Paid traffic is the most expensive diagnostic you can run. Fix qualification and closing first, then buy volume.
- **You can scale supply faster than it saturates.** Every competitor bidding up your keywords shifts the economics. Budget for the auction to move against you.

Paid is the wrong channel when none of these hold. If the offer is unproven, the funnel leaks at MQL to SQL, or the payback runs past 24 months, paid is the fastest way to lose money in GTM. Add it last, after the offer and the funnel are proven.

**The fastest route to overpaying:** launch paid before you can name the CAC payback that makes a customer profitable. Without that number, every budget decision is a guess in an auction that prices against you.

---

## Paid Funnel: Benchmarks That Diagnose

Every stage spends money, so every stage is a leak. The table below gives healthy ranges with named, dated sources. Read each as a band with a basis, not a point.

| Stage | Healthy range | Source basis | What it tells you |
|---|---|---|---|
| Search CTR | 3%+ | 3.17% average search CTR (Store Growers 2026) | Ad relevance and offer pull |
| Display CTR | 0.46% | Google Display average (Store Growers 2026) | Creative pull in low-intent inventory |
| Paid visitor to lead | 0.7–2.6% | PPC 0.7% (thedigitalbloom 2025), visitor-to-lead 1.4–2.6% (Ruler Analytics 2024) | Whether the landing page earns the click |
| Lead to MQL | 31% avg | 31% average, 39% B2B SaaS (Landbase 2026) | Fit of captured traffic to ICP |
| MQL to SQL | 13–21% | 13% (Salesforce 2024), 15–21% (thedigitalbloom 2025) | Qualification quality |
| SQL to opportunity | 30–48% | 30–50% (Zeliq), 47% (Ebsta/Pavilion 2024) | Sales qualification execution |
| Opportunity to closed-won | 20–35% | 21% avg, down 4–6 points from 2021 (Ebsta/Pavilion 2024) | Sales close capability |
| CAC payback | under 12 months | Median 16 months, top quartile 6 (Aleph 2025), 8–12 SMB, 15 overall (Optifai 2026) | Whole-loop profitability |

The fatal trap is optimizing the top while the bottom leaks. A strong 3% search CTR with a broken MQL-to-SQL stage just buys volume to lose money at a higher rate. MQL to SQL at 13% (Salesforce 2024) is the largest, most consistent leak in B2B SaaS. Qualified leads convert at roughly 40% versus 11% for unqualified (Landbase 2026), a four-fold gap. Qualification, not more traffic, is the cheapest lever.

**Company size inverts the funnel** (First Page Sage / PixelsWithin): SMB (under $10M) runs roughly 2.3% visitor to lead, mid-market around 1.4%, enterprise around 0.7%. If you sell to enterprise, expect weak top-funnel and strong bottom-funnel, and do not "fix" a stage that is already at its ceiling.

**Worked example: the leak costs more than the volume.** Take 1,000 paid leads at the median cascade: 31% to MQL (Landbase 2026) gives 310 MQLs, 13% to SQL (Salesforce 2024) gives 40 SQLs, 47% to opportunity (Ebsta/Pavilion 2024) gives 19 opportunities, 21% to closed-won gives 4 deals. Move MQL to SQL from 13% to 31% and the same 1,000 leads produce 9 deals. Same spend, more than double the closed-won. Fix the widest drop before adding budget.

---

## Reverse Math: What a Revenue Target Demands from Paid

Forward math tells you what volume produces. Reverse math tells you what a target requires, and it exposes whether paid can carry the plan alone.

**Setup:** a $500K quarter at $25K ACV needs 20 deals. Apply the median cascade: 21% close, 47% SQL to opportunity, 13% MQL to SQL, 31% lead to MQL (sources in the funnel table above). PPC visitor to lead runs 0.7% (thedigitalbloom 2025), and search CPC averages $5.26 (WordStream 2025).

| Reverse step | Math | Result |
|---|---|---|
| Deals needed | 20 | 20 |
| Opportunities needed | 20 / 0.21 | ~95 |
| SQLs needed | 95 / 0.47 | ~202 |
| MQLs needed | 202 / 0.13 | ~1,558 |
| Leads needed | 1,558 / 0.31 | ~5,027 |
| Paid clicks needed | 5,027 / 0.007 | ~718,000 |
| Spend at $5.26 CPC | 718,000 × 5.26 | ~$3.8M |

**The read:** median-efficiency paid alone cannot carry a $500K quarter. Roughly $3.8M of spend to make $500K is a loss. Two levers fix it.

**Lever one: fix MQL to SQL.** Raise it from 13% to 31% (the upper bound, thedigitalbloom 2025). MQLs needed drop from ~1,558 to ~653, clicks to ~301,000, spend to ~$1.6M. Still not profitable, but the direction is clear: conversion beats volume every time.

**Lever two: pair paid with cheaper channels.** Inbound CAC at $200 and partner at $150 (Optifai, N=939) both sit well below paid's $350. Run paid for the highest-intent slice and let compounding channels carry the rest. Paid should feed the funnel, not own it.

Do this math before you launch. A budget with no reverse math is a hope.

---

## Channel Stack and Its Benchmarks

Each platform has a different cost structure and a different job. Know both before you allocate.

### Google Ads (search)

**Job:** capture existing demand. Highest-intent inventory in the channel.

**Benchmarks:** WordStream (2024) reported average CPC $4.66 and average cost per lead $66.69. WordStream (2025) reported average CPL rising to $70.11, a 5.13% year-over-year increase, with average CPC at $5.26 and average conversion rate at 7.52%. Average search CTR sits at 3.17% (Store Growers 2026).

**Reality check:** search conversion rates vary wildly by industry: Finance and Insurance around 2.55%, Automotive repair near 14.67% (WordStream 2025). Benchmark against your own industry row, not the blend. digitalapplied (2026) reports B2B SaaS paid-search CAC at $1,180 and notes Google paid-search CAC rose 18% in two years while conversion stayed flat. The efficiency gains are gone. You buy intent at a premium.

### Meta (Facebook and Instagram)

**Job:** create and accelerate demand. Volume leader for top-of-funnel lead capture.

**Benchmarks:** WordStream (2025) reports traffic-campaign CPC averaging around $0.77, with leads-objective CPC varying by industry from $0.74 (restaurants) to $9.78 (dentists). Triple Whale (2025) reports Meta CPA averaging $38.19, CPM $14.19 (up 20% year over year), CTR 2.19%. Facebook lead ads average cost per lead near $19.68, roughly a third of Google's average (WordStream, 2024 Facebook Ads Benchmarks).

**Reality check:** Meta lead quality is structurally weaker than search. A cheap lead that never qualifies is not cheap. Judge Meta on qualified cost, not raw CPL.

### LinkedIn Ads

**Job:** reach decision-makers in a B2B context. The premium social layer.

**Benchmarks:** average CPC $5.58 globally (TheB2BHouse 2026). HockeyStack (2025) reports CPC rising from $10.48 in Q1 to $15.72 in Q3, with CTR 0.82–0.96%. Enterprise SaaS cost per lead runs $80–$180 for lead-gen forms and $120–$250 for landing pages. Mid-market buyers land at $60–$120 (Stackmatix 2026). SaaS CPL routinely passes $100 (adbacklog 2025).

**Reality check:** LinkedIn is the most expensive B2B lead source by intent-adjusted cost. A $120 CPL that converts at 20% to SQL costs $600 per SQL (Stackmatix). Use it where the target list is small and the ACV justifies it.

### Programmatic and display

**Job:** reach and retarget at scale, low intent.

**Benchmarks:** standard display CPM $1.50–$4.00, native $5.00–$12.00, in-stream video $12.00–$25.00, connected TV $25.00–$45.00 (SearchLab 2026). Google Display runs near $3 CPM versus around $38 CPM for Google Search (PostAffiliatePro 2025). Display CTR averages 0.46% (Store Growers 2026).

**Reality check:** programmatic is where fraud concentrates (see failure modes). Budget for high invalid-traffic rates and demand viewability guarantees. Programmatic is a reach play, not a conversion play.

---

## Attribution Methods: What Each Tells You and Misses

Attribution decides which touch gets credit for a conversion. Every method has a bias, and the method you choose changes which campaigns you kill.

| Method | What it credits | What it misses |
|---|---|---|
| Last-click | The final touch before conversion | All the touches that warmed the buyer |
| First-click | The entry touch | The touches that closed the deal |
| Multi-touch (linear or positional) | Split across touches | Weights are arbitrary, not measured |
| Data-driven | Credit by modeled contribution | Needs volume, opaque to outsiders |
| Incrementality holdout | Only what a channel truly causes | Requires pausing spend to measure |

**The rule:** attribution tells you what got credit. Incrementality tells you what a channel caused. They are different questions, and only the second decides whether a channel stays.

Teams over-index on last-click because it is easy and the platform defaults to it. That systematically hides demand-creation channels and inflates direct-response ones. When you kill the "inefficient" top-of-funnel channel, the bottom dries up and you cannot see the cause.

**Attribution tools** pair the paid platforms' own conversions with a third-party attribution layer and the CRM as the final count. No tool replaces a holdout. If you can run only one diagnostic, run the holdout.

---

## Landing Pages and Creative: Where the Click Goes

A click buys a visitor, not a lead. The landing page decides whether the visitor converts, and paid conversion is the cheapest conversion to destroy.

**Message match.** The ad promise and the landing page headline must match. A visitor who clicks a discount ad and lands on a page that says nothing about price leaves. Mismatch is the most common cause of a paid CVR far below the platform average of 7.52% (WordStream 2025).

**One offer per page.** A page asking the visitor to do several things converts on none. Name one action and remove competing links.

**Speed and clarity.** The offer, the value, and the next step must be visible above the fold. Paid visitors are impatient because they were not looking for you. They clicked an ad.

**Creative is the other half.** Search ads are text and benefit from tight message match. Social and display ads live or die on visual hook. WordStream (2025) shows platform averages moving yearly, which means a static creative set decays. Test continuously and rotate before fatigue sets in (see failure modes).

---

## Sequencing and Rollout

Paid fails most often from starting wide. Sequence it narrow, then widen only on proof.

**Stage 1: Prove on one campaign, one segment, one offer.** Pick the highest-intent slice of your ICP, run one search campaign for one proven offer, and cap the budget at an amount you can afford to lose. Run it until you have a defensible CAC payback on the paying customers produced, not leads. Two to three weeks of data is noise. Wait for a meaningful customer count.

**Stage 2: Prove the funnel economics at the bottom.** Confirm MQL-to-SQL and SQL-to-close on paid-sourced traffic match your organic baseline. If paid traffic qualifies worse, fix qualification before scaling. The cheapest time to learn this is at low spend.

**Stage 3: Scale within the winning campaign.** Increase budget and bids on the proven winner while holding the CAC target. Watch payback, not just CPL, as volume rises.

**Stage 4: Add a second channel.** Add Meta or LinkedIn against the same segment and compare *qualified* cost, not raw lead cost. Keep the winner and cap the loser.

**Stage 5: Test incrementality.** Run a geo or time-based holdout. Pause a channel in one region or one week and measure the revenue delta. If revenue does not drop, that channel is cannibalizing organic, not adding pipeline. Kill it.

Never scale to learn. Prove at the bottom, then scale the top.

---

## An Incrementality Test You Can Run

Holdouts are the only way to know what paid truly causes. Design one before you trust any dashboard.

1. **Pick the channel and the geography.** Choose one channel and two comparable regions, or one region and two equivalent periods.
2. **Split the audience.** One region runs the channel at normal spend. The control region runs it at zero or 50%. Keep everything else constant.
3. **Pick the outcome window.** Measure new revenue and new customers over a full sales cycle, not a week. Paid for enterprise sales needs months to show effect.
4. **Compare the delta.** The revenue difference between the treatment and control regions is the channel's true contribution.
5. **Read the result .** If the control region loses no revenue, the channel was cannibalizing organic or retargeting. Pause it and spend elsewhere.

Run this on a regular cadence, not once. Auctions and organic share both shift, and the channel's true contribution shifts with them.

---

## Objections

**"Paid will never work for us."** Often true, and usually for a reason you can name: broken offer, leaking mid-funnel, or payback past the ceiling. Diagnose the funnel first, then decide. If qualification leaks, paid is not the problem and money will not fix it.

**"Our CAC is too high."** CAC alone is not a verdict. Payback against gross margin is. A high CAC with fast payback beats a low CAC with no payback. Compare apples to your own margin, not to a headline.

**"It worked before, so we scaled."** Auctions move. WordStream (2025) shows Google CPL up 5.13% year over year and Meta CPM up 20%. A campaign that cleared payback at one auction price may not at another. Re-prove economics at every scale step.

**"Cheap leads are good."** A cheap lead that never qualifies is a cost, not a win. Cost per SQL and cost per customer are the metrics that matter. Search CPL of $66.69 (WordStream 2024) is meaningless if the SQL rate collapses.

**"We can just hire an agency."** An agency runs the platform, not the economics. You still own payback, incrementality, and the bottom of the funnel. Outsourcing execution without owning the math transfers work, not responsibility.

**"Our budget is too small to matter."** Small budget does not mean no information. It means one narrow campaign, one offer, run to a defensible payback before widening. Small budget kills a wide, untested campaign fast.

**"We do not want to compete on brand."** Search capture does not require outspending a competitor on brand. A tight long-tail keyword set and a strong landing page win on relevance, not on who spent more.

---

## Failure Modes and Fixes

### Budget burn

The most common paid death is spending faster than proof. Teams buy volume to "figure it out at scale" and learn the unit economics were bad, at full price.

**Fix:** gate budget increases on measured CAC payback. Cap spend to an amount you can lose. Scale only after a defensible payback on paying customers.

### Attribution blindness

Last-click attribution overcredits the bottom and hides the channels that warmed the buyer. You cut the top, the bottom dries up, and you cannot see why. Attribution tools report credit, not causation.

**Fix:** run holdouts. Pause a channel in a control group and measure the revenue delta. Only incrementality shows what a channel caused. Keep the channels that move revenue when paused and removed.

### Creative fatigue

A winning ad decays. CTR and CVR fall as the audience sees the same creative repeatedly, and cost climbs. Teams keep paying for ads that have stopped working.

**Fix:** treat creative as a pipeline, not a set. Rotate variants on a schedule, test new angles continuously, and pause ads below a spend floor without fresh results. WordStream (2025) and Triple Whale (2025) both show the platform averages moving yearly: your creative must move faster than the market.

### Ad fraud

Fraud wastes budget on bots and fake clicks. Anura (2024) estimated global ad fraud losses above $140 billion in 2024 and put programmatic fraud rates around 50%, affiliate around 45%, and general digital around 25%, roughly $1 in every $4 at risk. TrafficGuard (2026) reports brands lose 15–25% of annual ad spend to non-human traffic, with search campaigns seeing 14–22% invalid traffic.

**Fix:** buy from trusted inventory, demand viewability and fraud filters, use third-party verification, and watch for impossible metrics: high CTR with zero conversions is a red flag. Budget a fraud discount into your CAC model. A $100 CPL is a $125 CPL once you account for a 20% fraud rate.

### One-channel dependence

Search, social, and display each saturate and swing on cost. A team that relies on one auction has no buffer when it moves against them.

**Fix:** diversify once a channel proves out. Two proven channels beat one that owns your entire pipeline. Paid should fund growth, never be the growth itself.

### Optimizing clicks, not customers

CTR is vanity when the bottom leaks. Optimize for closed-won and payback, and let CTR follow.

---

## Handoff to Sales and CS

Paid-sourced leads are a contract with sales, not a delivery.

**Define the handoff explicitly.** State what marketing promises at the handoff point and what sales promises back. Speed matters: first-hour contact converts around 53% versus baseline (Data Mania via Landbase, 2026). A paid lead that sits is a paid lead that rots.

**Agree on SQL criteria before you buy volume.** If sales accepts only BANT-qualified leads and paid produces form fills, the handoff fails on day one. Align on what a qualified lead is, then buy to it.

**Route unready leads into nurture, not the bin.** Most paid leads are not SQL-ready. Give them a nurture sequence and a re-entry path. Discarding them throws away the top of the funnel you paid for.

**Feed closed-loop data back.** Sales and CS report which paid-sourced accounts closed, how fast they reached value, and whether they expanded. That loop is what turns payback from an estimate into a fact.

**Segment by stage.** Top-of-funnel brand campaigns feed awareness and need a different handoff than direct-response campaigns that hand a warm, SQL-ready lead straight to an AE. Do not run both through the same queue.

---

## Agentic Layer: SOP and Prompt

An agent can operate most of the paid loop unsupervised: build and test creative, monitor spend to payback, pause losers, scale winners. Humans own the business decisions: the CAC target, the payback ceiling, the incrementality holdout design.

### One-prompt starter for running spend to payback

```text
You are the paid acquisition operator for {company}, a {segment} B2B SaaS.
You receive daily spend, click, lead, and conversion data from {platform},
plus weekly closed-won records with contract value from the CRM.

Compute, for each active campaign: spend, CPL, lead-to-SQL, SQL-to-close,
CAC, and CAC payback (CAC divided by monthly gross margin per customer).
Compare each against the target bands for {segment}: SMB payback 8-12
months, mid-market 14-18, enterprise 18-24 (Optifai 2026), overall median
16 months, top quartile 6 (Aleph 2025).

Each day, rank campaigns by payback. Pause any campaign whose payback
exceeds the ceiling for {segment} for two consecutive periods, unless the
account is in a held-out test. Flag campaigns below a {spend} spend floor
with no conversions. Scale budget on the top-decile payback campaign,
respecting a {max budget} cap.

Each week, produce a creative report: which variants hold CTR and CVR,
which are decaying, and three new copy or creative variants to test,
written to {creative doc}. Flag any metric that looks impossible
(high CTR, zero conversions) as suspected fraud for human review.

Output a one-page daily brief: payback table per campaign, one pause, one
scale, one creative test. Do not change the CAC target, the payback
ceiling, or holdout design without human approval.
```

### Agentic SOP (run daily, human closes the loop weekly)

1. **Ingest.** Agent pulls spend, clicks, leads, and conversions from the ad platforms and closed-won records from the CRM into one table.
2. **Compute.** Agent derives CPL, lead-to-SQL, SQL-to-close, CAC, and CAC payback per campaign, against gross margin.
3. **Compare.** Agent places each campaign inside its payback band for your segment (Optifai 2026, Aleph 2025).
4. **Act.** Agent pauses losers past the payback ceiling, scales the top-decile winner up to the budget cap, and writes the daily brief.
5. **Draft creative.** Agent tests and proposes variants to combat creative fatigue.
6. **Flag fraud.** Agent marks impossible metrics for human review.
7. **Report.** Agent writes a one-page daily brief and a weekly creative report. Human approves the CAC target, the ceiling, and any holdout design.

The agent runs steps 1–6 unsupervised. The human owns the target, the ceiling, and the incrementality test. The agent never redefines what a qualified lead is. That stays human-owned, because every rate downstream depends on it.

Three guardrails apply: the agent never changes the payback target, never acts on a sample too small to judge (a one-week blip is noise), and never treats attribution as incrementality.

---

## How the Motion Varies by Segment and Stage

### Top-of-funnel brand vs. direct response

**Direct response** buys a specific action (a demo, a trial, a form fill) and is measured on CAC payback. It is the default for B2B SaaS with a defined funnel. Every dollar should clear a target payback or it dies.

**Top-of-funnel brand** buys reach and association, is measured on share of voice and downstream lift, and almost never pays back on a single-touch basis. It works only when you have a compounding channel underneath that converts the awareness you buy. Run brand only after direct response proves the funnel, and measure it with holdouts, not last-click.

Run both with separate budgets, separate metrics, and separate verdicts. Blending them hides both.

### SMB vs. enterprise

**SMB:** low ACV, high volume, fast decisions. Payback must be fast (8–12 months per Optifai 2026) or the economics break. Self-serve and product-led motion makes paid a volume engine. A $350 CAC on a $99/month product fails. On a $2,000 ACV it may clear payback. Match the CPL to the ACV.

**Enterprise:** high ACV, long sales cycle, buying committee of 6–10. Paid generates meetings and pipeline, not closed-won on a single touch. Payback stretches to 18–24 months because the deal is large. Budget for a long tail between click and close, and measure paid on pipeline created and SQL cost, not immediate payback. Programmatic and LinkedIn, not just search, matter here because you are warming a committee, not catching a single searcher.

### Early stage vs. scale

**Early stage:** no proven payback, no cash to burn. Run the smallest campaign that yields a defensible unit economics read, and treat every dollar as a measurement expense. Prove the model, then widen.

**Scale:** proven payback and cash flow to recycle. This is where paid earns its keep: you can buy exactly as much pipeline as sales can close, then stop. The risk flips from "no proof" to "over-reliance," so holdout discipline matters most here.

---

## Paid Next to the Rest of the Stack

Paid does not replace compounding channels. It amplifies them.

- **Outbound ([outbound](./outbound))** enters at MOFU and targets accounts with intent. Paid search catches the same accounts at the moment they search. Run both with coordinated account lists and compare pipeline quality per dollar.
- **Inbound ([inbound](./inbound))** compounds from SEO and content. Paid accelerates the same funnel with faster top-of-funnel volume, and paid brand campaigns lift branded search that inbound converts.
- **Product-led ([product-led](./product-led))** converts free users to paid. Paid drives trial starts, and the [conversion benchmarks](/docs/data/conversion-rate-benchmarks) put trial-to-paid at 8–20% typical. Paid works here only if onboarding converts.
- **Partners and referrals** deliver the lowest CAC at $150 (Optifai, N=939). Paid is the throttle you pull when partner supply saturates.

Paid should fund growth, never become the growth itself. The engine underneath is compounding. If there is no compounding channel, paid is borrowing tomorrow's revenue today.

---

## Case Matrix: Documented Examples

These are agency-reported results, so they carry a bias incentive. Read them as existence proofs of what is possible, not as guarantees of typical results. The numbers are as reported by the agency that ran the work.

| Company / client | Channel | Reported result | Source and date |
|---|---|---|---|
| B2B fitness SaaS | Google Ads | Demo acquisition cost cut from $700–$800 to $166.22 within two months, after exclusion audiences and pausing non-converting keywords | Powered by Search, blog case study (2023) |
| Coefficient | Google Ads | Audit surfaced roughly $61K in wasted spend, conversion rate up 166%, 1,500+ signups, and $1M+ in ARR in a single quarter | InterTeam case study (2024) |
| CleverTap | Google Ads | 42% lower cost per SQL, 60% more closed-won deals, and 45% increase in ROAS | TripleDart client case study (2024) |

The pattern across all three: the win came from cutting waste and fixing the bottom of the funnel, not from adding spend. Exclusion audiences, pausing non-converting keywords, and audit-driven budget cuts produced the gains. That is the same lesson as the benchmarks: paid rewards whoever eliminates the leak, not whoever spends the most.

---

## Sources

- [Aleph: CAC Payback Period Benchmarks for SaaS (2026)](https://www.getaleph.com/answers/cac-payback-period-saas-2026), median 16 months (2025), 18 months (2024), top quartile 6, by growth rate.
- [Optifai: What is a Good CAC Payback Period? (2026)](https://optif.ai/learn/questions/cac-payback-period-benchmark/), SMB 8–12, mid-market 14–18, enterprise 18–24, median 15, health bands.
- [Optifai: CAC by Channel (N=939, Q2 2025–Q1 2026)](https://optif.ai/learn/questions/cac-by-channel/), inbound $200, outbound $400, partner/referral $150, paid ads $350, events $500.
- [digitalapplied: Customer Acquisition Cost Benchmarks (2026)](https://www.digitalapplied.com/blog/customer-acquisition-cost-benchmarks-2026-industry), B2B SaaS paid search $1,180, Meta $890, TikTok $540, organic $348, outbound $3,210, paid-search CAC up 18% in two years.
- [WordStream by LocaliQ: Google Ads Benchmarks (2024)](https://www.wordstream.com/blog/2024-google-ads-benchmarks), avg CPC $4.66, avg CPL $66.69.
- [WordStream by LocaliQ: Google Ads Benchmarks (2025)](https://www.wordstream.com/blog/2025-google-ads-benchmarks), avg CPL $70.11 (up 5.13%), avg CPC $5.26, avg conversion rate 7.52%.
- [WordStream by LocaliQ: Facebook Ads Benchmarks (2025)](https://www.wordstream.com/blog/facebook-ads-benchmarks-2025), traffic CPC ~$0.77, leads-objective CPC by industry.
- [Triple Whale: Meta Ads Benchmarks (2025)](https://www.triplewhale.com/blog/facebook-ads-benchmarks), CPA $38.19, CPM $14.19 (up 20% YoY), CTR 2.19%.
- [Store Growers: Google Ads Benchmarks (2026)](https://www.storegrowers.com/google-ads-benchmarks/), search CTR 3.17%, display CTR 0.46%.
- [TheB2BHouse: LinkedIn Ad Benchmarks (2026)](https://www.theb2bhouse.com/linkedin-ad-benchmarks/), global avg CPC $5.58.
- [HockeyStack: 2025 LinkedIn Ads Benchmark Report](https://www.hockeystack.com/lab-blog-posts/linkedin-ads-benchmarks), CPC $10.48 (Q1) to $15.72 (Q3), CTR 0.82–0.96%.
- [Stackmatix: LinkedIn Ads Cost per Lead Benchmarks (2026)](https://www.stackmatix.com/blog/linkedin-ads-cost-per-lead-benchmarks), enterprise SaaS CPL $80–$180 (form), $120–$250 (landing page), mid-market $60–$120.
- [adbacklog: LinkedIn Ads Benchmarks by Industry (2025)](https://adbacklog.com/blog/linkedin-ads-benchmarks-per-industry-2025), SaaS CPL $100+.
- [SearchLab: Programmatic Advertising Statistics (2026)](https://searchlab.nl/en/statistics/programmatic-advertising-statistics-2026), display CPM $1.50–$4.00, native $5–$12, video $12–$25, CTV $25–$45.
- [PostAffiliatePro: Good CPM in Digital Marketing (2025)](https://www.postaffiliatepro.com/faq/good-cpm-digital-marketing/), Google Display ~$3 CPM, Google Search ~$38 CPM.
- [Anura: Ad Fraud Statistics (2024)](https://www.anura.io/ad-fraud-ultimate-guide/ad-fraud-statistics), global loss above $140B in 2024, programmatic ~50%, affiliate ~45%, general digital ~25%.
- [TrafficGuard: Click Fraud Statistics (2026)](https://www.trafficguard.ai/click-fraud-statistics), brands lose 15–25% of ad spend, search invalid traffic 14–22%.
- [Conversion Rate Benchmarks](/docs/data/conversion-rate-benchmarks), MQL to SQL 13% (Salesforce 2024), visitor to lead 1.4–2.6% (Ruler Analytics 2024), SQL to opp 47% and close 21% (Ebsta/Pavilion 2024), qualified 40% vs 11% (Landbase 2026).
- [GTM Funnel](/docs/foundations/gtm-funnel), stage definitions this page assumes.

---

*Synthesized from first-hand paid builds across 2014–2026 and the dated, named sources above. The discipline is constant: prove the economics at the bottom of the funnel, then scale the top. Never scale to learn. Fix the leak, then buy volume: paid rewards whoever eliminates waste, not whoever spends the most.*