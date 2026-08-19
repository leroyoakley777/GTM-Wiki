---
sidebar_position: 4
title: Signals
description: "Read buying intent from profile views, job changes, funding, and product usage: which signals mean a buyer is close, how to score them, the signal-to-message rules, and the agentic SOP that routes them."
last_updated: 2026-08-19
status: active
tags: [signals, buying-intent, icp, timing, triggers, sdr, agentic, skills]
domain: skills
parent: skills/index
---

# Signals

Signals is the skill of reading buying intent from the events your market produces: profile views, job changes, funding, hiring, product usage, and engagement. You run it when an event fires and you must decide fast whether it means a buyer is close, then act before the moment cools.

A signal is a fact about timing. It tells you that a specific account is more likely to buy now than it was a month ago. It does not tell you they will buy. The skill is separating a real intent signal from noise, then converting the signal into outreach that names it.

## When to use this skill

Run signals when you have a target account list and want to know who to reach right now:

- A funding, hiring, leadership, or product event names an account that fits your ICP.
- A target-account contact viewed your site, a pricing page, or a competitor comparison.
- A buyer changed jobs into a role that owns your category.
- An account starts researching a problem you solve, and the intent is time-bound.

Do not run it when you have no ICP. A signal on an account outside your ICP is noise. Signal work compounds only on a defined target list, the same way [prospecting](./prospecting) requires the ICP before list-building [1].

## Definition

Signals turns market events into a ranked list of accounts to reach now. It combines three inputs: the event (what changed), the account fit (whether the account is worth chasing), and the timing (whether the change makes buying more likely soon). A working signal program routes only the accounts that clear all three to a human or an agent for outreach.

## Why it matters

Timing is the biggest lever in outbound. A defined ICP drives 68% higher win rates than an undefined one [1], but the ICP alone does not say when to call. Intent data answers the when. Organizations that prioritize by intent see 21.3% of targeted accounts convert versus 8.4% for the rest, and 71% of B2B teams report using intent data [2]. Accounts that show intent are closer to a decision, so they reply more and close more.

The cost of ignoring signals is a cold list. A signal-based, personalized outreach message reaches 15-25% reply rates versus low single digits for a generic blast [3]. The same effort spent on accounts with no signal buys spam and burns sender reputation [4].

## Mechanics

### 1. Define the signal set before you watch

Write down the events that mean intent for your category. The reliable set varies by motion, but it clusters into four families:

- **Firmographic triggers.** Funding, hiring in the buyer's function, a leadership change, an expansion, a new location. These say the company is growing or reorganizing in a way that creates budget [1].
- **Contact-level signals.** A target-account buyer views your site, visits a pricing or comparison page, downloads a resource, or opens a sequence. These say the person is actively researching [5].
- **Category intent.** The account searches for your problem, engages with competitor content, or appears in intent-data sources. These say the category is on their mind [2].
- **Job-change signals.** A buyer who owned your category moves into the same role at a new company. The buying need travels with them [5].

Keep the set to 10-15 named events per segment. A signal set you cannot name is a data feed, not a signal program.

### 2. Score account fit before you act

Every signal fires against your ICP. Score each triggered account on the three inputs:

- **Fit.** Does the account match firmographics and buyer titles from the ICP [1]?
- **Intent strength.** Is the event a direct buying signal (pricing page, category research) or a weak one (company-wide hire)?
- **Recency.** Is the event this week, this month, or stale? Decay intent fast; a signal from 90 days ago is not a reason to call today.

Route only accounts that clear fit and carry a current, strong signal. A low-fit account with a loud signal is still a low-fit account.

### 3. Convert the signal into the message

The signal is the personalization. Fill the outreach with the named event and its implication, the same variable-block structure the [outbound](./outbound) template uses:

- **Name the event.** "Saw that you raised a Series B" or "noticed your team is hiring for the head of revenue operations role."
- **State the implication.** "Most companies that size hit [named problem] around that milestone, and it costs [quantified pain]."
- **Offer one useful thing.** A benchmark, an observation, or an ungated resource tied to the event.

A signal-led message reaches 15-25% reply rates [3]. Token-swapping a first name into a template is not personalization; naming a real event is.

### 4. Route to the right owner and act fast

Decide in advance who works each signal tier:

- **Tier 1: strong intent + high fit.** Reach within 24 hours, human-led for high-value accounts [5].
- **Tier 2: real signal + fit.** Sequence the account with an agent-led first touch [3].
- **Tier 3: weak or stale signal.** Hold, do not burn a touch. Re-score when a new event fires.

Speed matters because intent cools. Accounts that research in a window buy in that window. A signal routed a week late is a signal lost.

### 5. Close the loop on what converted

Track which signals led to replies and meetings, not just to sends. Feed the winners back into the signal set and prune the ones that produced nothing. A signal that never converts is noise you should stop paying for.

## Artifact: the signal scorecard

Score every triggered account on fit, intent strength, and recency. Route only rows that clear the threshold.

```text
Account    | ICP fit (0-5) | Signal               | Strength (0-5) | Recency (days) | Route
-----------|---------------|----------------------|----------------|----------------|--------
Acme Corp  | 5             | Series B funding     | 4              | 7              | Tier 1, human, 24h
Beta Inc   | 4             | Pricing page view    | 5              | 1              | Tier 1, human, 24h
Gamma LLC  | 2             | Company-wide hire    | 2              | 30             | Tier 3, hold
```

Threshold for Tier 1: fit at least 4, strength at least 4, recency at most 14 days. Below fit 3, hold regardless of signal strength.

## Worked example

A Series B SaaS sells to mid-market heads of revenue operations. Its ICP is companies with 200-2,000 employees and an active sales motion. It watches a 1,000-account list against a 12-event signal set.

In a month, 38 accounts trigger. Scoring by fit, strength, and recency routes 9 to Tier 1 and 14 to Tier 2; 15 are held. The 9 Tier 1 accounts get a human-led touch within 24 hours naming the event. The 14 Tier 2 accounts enter a signal-led sequence.

Against a 20% reply rate on signal-led outreach [3], the 23 routed accounts should produce roughly 4-5 replies, of which a share book meetings. The 15 held accounts cost nothing. Had the team skipped scoring and emailed all 38, the extra 15 touches would add noise and spam risk [4] for accounts that do not fit or are not close. The scorecard is the difference between intent and list noise.

## Failure modes and how to fix them

- **Signals without an ICP.** You chase events on accounts that never buy. Fix: score fit first and hard. A low-fit account with a loud signal is still low-fit [1].
- **Every event is a signal.** Company-wide noise routed as buying intent. Fix: name the 10-15 events that mean intent for your category, prune the rest.
- **No decay.** A 6-month-old signal treated as a reason to call today. Fix: set a recency window and re-score; stale intent is not intent [5].
- **Token-swap personalization.** You swap the first name and call it personal. Fix: name the real event and its implication, or do not claim personalization [3].
- **Slow routing.** Intent cools in days. Fix: tier with a 24-hour rule for Tier 1 and let an agent run Tier 2.
- **Never closing the loop.** You pay for a signal feed and never measure which events convert. Fix: track signal-to-meeting per event type and prune the losers.

## How the skill differs by segment and maturity

- **By segment.** SMB signals are short and product-led: free signups, trial usage, support activity. Enterprise signals are account-led: funding, hiring, committee research, category intent across a buying group [6]. You need the right family for the segment.
- **By maturity.** A new motion should watch a narrow signal set on a small list and prove the signal-to-meeting link before scaling. A mature motion can run a live intent feed and let an agent score and route at volume.
- **By channel pairing.** Signals feed [prospecting](./prospecting) for the list, [outbound](./outbound) for the message, and [ABM](./abm) for the high-value accounts that earn a coordinated program [7].

## Agentic layer

An agent can watch the feed, score accounts against the ICP, and route them, but it cannot decide what the ICP is or what a buyer's research means. Give it the signal set, the ICP fit rules, and the message template; it will do the watching and routing. Keep the segment call and the Tier 1 message with you.

**SOP: route a signal.**

```text
Given: a target-account list, a named signal set, ICP fit rules, and a message template.
1. Ingest the day's events; drop any not in the signal set.
2. Score each triggered account on fit, intent strength, and recency.
3. Route Tier 1 (fit >= 4, strength >= 4, recency <= 14d) to a human within 24 hours.
4. Route Tier 2 to a signal-led sequence; fill the template's variable block with the event.
5. Hold Tier 3; re-score when a new event fires.
6. Log signal-to-reply and signal-to-meeting per event type.
Never claim personalization from a signal you cannot name. Never route a low-fit account because the signal is loud.
```

**Prompt: draft a signal-led email.**

```text
You are an outbound operator. Given an account, a named signal, and the value
hypothesis, write a cold email using the outbound template.
Lead with the signal and its implication. Offer one useful thing tied to the event.
Keep under 125 words. No superlatives, no "I hope this finds you well."
Output only the email.
```

Keep the human in the loop for the ICP fit call, the Tier 1 message, and any compliance-sensitive send. The agent watches and routes; you decide what intent means.

## Run it today

Name your 12-event signal set for one segment and load the 1,000-account ICP list. Set the fit and recency thresholds. Watch the feed for one week, score every trigger, and route only the accounts that clear the bar. The first routed account is the proof the program works.

## Sources

1. [SiriusDecisions / Forrester: defined ICP](https://www.siriusdecisions.com): a defined ICP drives 68% higher win rates and 30% more marketing-sourced revenue.
2. [TheStarrConspiracy 2025: intent prioritization](https://www.thestarrconspiracy.com): B2B intent-prioritized accounts convert 21.3% vs 8.4% for others; 71% of B2B teams use intent data.
3. [Autobound 2026: signal personalization](https://autobound.ai): multi-channel reply rates of 15-25% across 100+ SaaS teams from signal-based outreach.
4. [Instantly 2026: deliverability](https://instantly.ai): complaint rate under 0.3% and inbox placement at or above 80% protect sender reputation.
5. [6sense 2025: buyer experience](https://6sense.com): buyers do roughly two-thirds of the journey before engaging; intent cools fast and early contact matters.
6. [Amplitude: buying committees](https://amplitude.com): ABM buying committees average 7-8 people with distinct evaluation criteria.
7. [Demandbase 2026: buying groups](https://demandbase.com): engaging buying groups drives 2-3x higher win rates and larger deals.
