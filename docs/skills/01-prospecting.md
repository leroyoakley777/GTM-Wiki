---
sidebar_position: 2
title: Prospecting
description: "Build account, contact, or both lists from ICP fit, enrichment, and signals: the trigger, the build steps, the list template, a worked example, and the agentic SOP that runs it."
last_updated: 2026-08-19
status: active
tags: [prospecting, icp, enrichment, list-building, targeting, sdr, agentic]
domain: skills
parent: skills/index
---

# Prospecting

Prospecting is the skill of building a list of companies, contacts, or both that fit your Ideal Customer Profile and show signs of being ready to buy. You run it when you need targets to work, not a market study.

The output is a list an SDR or an agent can activate the same day. A prospecting list that sits in a spreadsheet is not a result; a list loaded into a sequence with an owner and a next step is.

## When to use this skill

Run prospecting when any of these is true:

- You have an ICP definition but no accounts loaded into your CRM or sequence tool.
- A campaign needs fresh contacts because last quarter's list is stale or burned.
- A signal (funding, hiring, leadership change) names accounts worth reaching now.
- An agent needs a deterministic input to enrich, score, and route.

Do not run it when you have not defined the ICP. Prospecting without an ICP produces volume, not pipeline [1].

## Definition

Prospecting turns market fit into a working list. It combines three inputs: firmographic fit against the ICP, contact data for the buyers inside those accounts, and signals that indicate timing. Each input is necessary; the list is the intersection, not the union.

## Why it matters

A defined ICP drives 68% higher win rates and 30% more marketing-sourced revenue than an undefined one [2]. Prospecting is the step that makes that advantage operational: it is where the ICP stops being a slide and becomes accounts your team can call. Done badly, it floods the CRM with names that never convert and erodes sender reputation before the first reply.

## Mechanics

### 1. Start from the ICP, not the database

Load the ICP definition first. It tells you the firmographics (company size, industry, tech stack) and the buyer titles to target [3]. Filter the account universe to fit before you enrich contacts. Filtering first cuts enrichment cost and keeps the list tight.

### 2. Build the account list

Pull candidate accounts from three sources:

- Your CRM and closed-won history (who already buys).
- A data vendor filtered to ICP firmographics.
- Signal sources: recent funding, leadership hires in your buyer's function, new product launches.

Keep the account list to the segment you can actually work this quarter. A 5,000-account list with no owner is worse than a 200-account list with one.

### 3. Enrich contacts

For each account, find the buyers your ICP names. Enrich for:

- Name, title, and seniority match to the buyer persona.
- A deliverable contact channel (verified work email or LinkedIn).
- Signals attached to the person (profile viewed your team, changed jobs into the buyer role).

Verification matters more than volume. A bounced email hurts deliverability for the whole domain [4].

### 4. Score and tier

Score each account-contact pair on fit and signal. Tier 1 gets human outreach first; Tier 2 goes to an agent-driven sequence; Tier 3 waits for a stronger signal. The 95-5 rule says only about 5% of the market is in-market at any moment, so tiering protects your best message for the accounts that can buy now [5].

### 5. Load and assign

Push the list into your sequence tool with an owner and a start date. An unassigned list decays; assign it or do not build it.

## Artifact: the prospecting list template

This is the deliverable the skill produces. Fill one row per account-contact pair.

```text
Prospecting list: <segment>        as-of: <date>        owner: <name>
ICP filter: <one line: firmographics + buyer title>

| Tier | Account | Buyer | Title | Channel (email/LI) | Signal | Next step (date + owner) |
|------|---------|-------|-------|--------------------|--------|--------------------------|
| 1    | Acme    | J. Lee| VP Ops | verified email     | funded Q3 | personalized send Mon |
| 2    | Globex  | ...  | ...   | LinkedIn           | hiring SDR | agent sequence Wed |
| 3    | Initech| ...  | ...   | email (unverified)| none   | hold for signal |
```

Tier 1 rows get a human-written first touch. Tier 2 rows go to the agent sequence. A row with no signal and no verification stays in Tier 3 until something moves it.

## A worked example

A mid-market SaaS sells workflow software to operations leaders at companies with 200-2000 employees. The ICP names the VP of Operations and the Head of RevOps as buyers.

**Step 1 - account fit.** Filter a vendor database to 200-2000 employees in software and professional services. That yields 1,200 accounts. Drop the 400 with no operations leadership listed. Remaining: 800.

**Step 2 - signals.** Layer in accounts with a new VP of Operations hired in the last 90 days (a role-change signal that correlates with re-evaluation). That narrows to 90 accounts.

**Step 3 - contact enrichment.** Enrich the 90 accounts for the named buyers. 70 return a verified work email; 20 return only LinkedIn. The 20 go to LinkedIn-only outreach.

**Step 4 - tiering.** All 90 are Tier 1 by signal strength, but capacity is 30 personalized sends this week. The 30 with the strongest fit (prior vendor in the stack) get human outreach; the other 60 go to the agent sequence.

**Step 5 - load.** All 90 load into the sequence tool with owners. The arithmetic: 90 accounts x a 5.8% blended cold reply rate [1] implies about 5 replies this cycle, of which roughly 1-2 book a meeting at a 3-10 meetings per 1,000 sends benchmark [6]. The list is sized to capacity, not to a vanity count.

## Failure modes and how to fix them

- **List without an owner.** A 1,000-row sheet with no assignment decays in a week. Fix: assign every row before you enrich the next batch.
- **Volume over verification.** Unverified emails burn domain reputation and land in spam. Fix: verify before send; route unverified contacts to LinkedIn only [4].
- **No signal tiering.** Sending the same message to in-market and cold accounts wastes the good copy. Fix: Tier 1 human, Tier 2 agent, Tier 3 hold.
- **Stale list treated as live.** A quarter-old list has churned contacts and dead signals. Fix: stamp `as-of` and rebuild signals every 90 days.
- **Prospecting before the ICP exists.** Produces names, not pipeline [1]. Fix: finish ICP definition first [3].

## How the skill differs by segment and maturity

- **By segment.** SMB: fewer accounts, self-serve buyers, lean on product signals. Enterprise: longer lists per account (buying committees of 11-17), enrich the whole committee, not one buyer [7].
- **By maturity.** A new motion should prospect narrow and deep (prove the ICP on 50 accounts) before wide. A mature motion can prospect broad and let the agent tier.
- **By channel.** Outbound-led teams prospect for email-ready contacts; ABM-led teams prospect for account-level fit and load into the ABM program [8].

## Agentic layer

An agent can build and maintain the list end to end, leaving only the human-written Tier 1 touch and the final send to you.

**SOP: build and tier a prospecting list.**

```text
Given: an ICP definition (firmographics + buyer titles) and a signal set.
1. Query the account universe for ICP firmographic fit. Drop accounts missing the named buyer.
2. Attach signals from the last 90 days (funding, leadership change, hiring).
3. Enrich contacts for each account; mark email verified / LinkedIn-only.
4. Score fit x signal; assign Tier 1 (human), Tier 2 (agent sequence), Tier 3 (hold).
5. Emit the list in the template format with as-of date and owner per row.
6. Block any row with no verified channel and no signal; do not load it.
Never invent a contact or a signal. If enrichment returns nothing, mark the row UNVERIFIED and stop.
```

**Prompt: write the Tier 1 first touch.**

```text
You are a prospecting operator. Given one account, one buyer, their verified signal,
and the value hypothesis, write one cold email under 125 words [9]. Lead with the
signal, not the product. Offer something useful (an insight, a benchmark, a resource)
in the first line. No "I hope this finds you well." No superlatives. Output only the email.
```

Keep the human in the loop for Tier 1 message approval and for any account that triggers a compliance-sensitive send. The agent runs the list; you own the relationship.

## Sources

1. [SalesHive: B2B Cold Email Benchmarks 2025](https://saleshive.com/blog/b2b-cold-email-benchmarks-2025): blended B2B cold reply 5.8% (down from 6.8% in 2023); B2B SaaS 3-8%.
2. [SiriusDecisions / Forrester: ICP impact](https://www.forrester.com): defined ICP drives 68% higher win rates and 30% more marketing revenue.
3. [Salesforce: TAM/SAM/SOM and ICP](https://www.salesforce.com): ICP definition and qualification reference.
4. [Clay: Deliverability and warmup](https://clay.com): inbox ceilings (50/day/inbox, 2-3 inboxes/domain), 3-week warmup, verification tooling.
5. [Hey Sid: the 95-5 rule](https://heysid.com): about 5% of the market is in-market at any moment.
6. [GTM Syndicate: outbound benchmarks](https://gtmsyndicate.com): 3-10 meetings per 1,000 sends for outbound.
7. [Pavilion / Ebsta: buying committees](https://www.pavilion.com): enterprise committees of 11-17 decision makers.
8. [Demandbase: ABM tiers](https://www.demandbase.com): engaging buying groups drives 2-3x higher win rates; ABM 101 tiers.
9. [Mailforge via Martal: email length](https://martalgroup.com): 50-125 word emails earn about 50% higher reply rates.
