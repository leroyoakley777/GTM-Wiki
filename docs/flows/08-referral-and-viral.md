---
class: fundamental
sidebar_position: 8
title: Referral and Viral Flow - the Loop Pipeline
description: "The runnable loop sequence from share moment to scaled program: the coefficient math, the reward cap, the attribution chain, the cohort read, and the agentic SOP that polices payouts."
last_updated: 2026-10-16
status: active
tags: [referral, viral, flow, loop, viral-coefficient, agentic]
domain: flows
parent: flows/index
---

# Referral and Viral Flow - the Loop Pipeline

[Referral and Viral](../channels/referral-viral) states the channel argument, the benchmark table, and the incentive math. This page states the run: the ordered steps from a share moment to a scaled program, with one artifact that feeds the next.

Two rules hold the flow together:

- **Growth compounds on the cycle, not on the volume.** A coefficient of 0.8 that repeats each week beats a coefficient of 1.0 that repeats each month, because growth compounds in the count of cycles [171].
- **Pay on conversion, never on the share.** A reward paid for a forwarded link buys accounts that do not stay [82].

## Loop at a glance

The referral flow is seven steps run in order. Each step emits one artifact that feeds the next.

| # | Step | Artifact you must have before advancing |
|---|---|---|
| 0 | Decision gate | A product with a second-person reason to share, plus retention that holds |
| 1 | Share moment | A named point in the product where value peaks |
| 2 | Attribution | A unique link per referrer, a conversion event, and a payout ledger |
| 3 | Reward | A native, double-sided reward capped under the LTV uplift |
| 4 | Seed cohort | 100 to 500 of your best customers, instrumented end to end |
| 5 | Loop read | Share rate, referral conversion, coefficient, and cycle time per cohort |
| 6 | Scale or cut | A written decision per segment, read against the cost math |

## Step 0 - Decision gate

Run this flow when four conditions hold at once.

**The product gains value as more people use it.** A viral loop runs on network effects, so a tool that works alone has no network to tap [222].

**The share is honest.** People share what saves them work or makes them look good. A forced share reads as spam, and it converts like spam.

**Retention holds.** A product in daily use offers many chances each month to prompt a share. A one-and-done product offers one [171]. Fix retention before you ask a customer to refer.

**Attribution exists.** You need a unique link, a conversion event, and a payout ledger. Without all three, you buy shares you cannot see, credit, or tune.

## Step 1 - Design the share moment

The share moment is the point in the product where value peaks and a share costs the user nothing. Find that point before you write a reward, because a reward multiplies a loop that already turns.

| Product shape | Share moment | Why it turns |
|---|---|---|
| Collaboration tool | The first shared workspace or document | The product needs a second person to deliver value |
| Scheduling tool | The booking link a user sends to a guest | The guest becomes the next user, with no cash incentive [158] |
| Team seat product | The invite that adds a teammate | Seats deepen the account and raise the switching cost |
| Capacity-limited launch | The waitlist position that moves up | Demand exceeds supply, so scarcity is honest |

Place the prompt at peak value, not at signup. A user who has not yet earned value has no reason to recommend the product.

## Step 2 - Instrument the attribution chain

Instrument before you spend. Five numbers form a chain, and each one names the stage that breaks [141][142].

1. **Share rate.** Invitations sent divided by eligible customers. Software programs run near the 4.75 percent software baseline [142].
2. **Referral conversion.** New customers divided by invitations sent. This term is the conversion side of the coefficient.
3. **Viral coefficient.** Share rate multiplied by referral conversion, read per cohort.
4. **Cycle time.** Days from one cohort's share to the next cohort's share.
5. **Referral CAC.** Program cost divided by converted referrals.

Tag every referral source separately in your analytics, the same way [Funnel Benchmarks](../data/funnel) insists on every channel.

## Step 3 - Set the reward cap

The reward decides whether the loop makes money. Cap it under the value the referral produces, and pay it when the referee converts.

Rank a reward option against these tests.

- **Native.** The reward deepens the user's use of the product. Storage, seats, and credits pass. A gift card fails.
- **Double-sided.** The referee gains value too, so the share reads as a gift rather than a favor.
- **Capped and deferred.** The payout sits under the LTV uplift and waits for a paying referee.

Deferred payout is the fraud control. A reward paid on a signup attracts accounts that never buy.

## Step 4 - Seed the first cohort

Launch to 100 to 500 of your best customers, not to the whole base. Watch share rate and referral conversion from day one.

Expect the willingness-to-action gap. Eight in ten customers say they would refer a product they like, and fewer than three in ten do [115]. The gap is your work item: a missing share moment, a prompt at the wrong time, or a reward that does not repay the effort.

A broken loop at full scale costs more to unwind than a small cohort costs to run.

## Step 5 - Read the loop table

Read the chain, then fix the stage with the largest absolute loss.

| Symptom | Broken stage | Fix |
|---|---|---|
| Share rate under the software baseline | Share moment or reward | Move the prompt to peak value, raise the reward on the strong segment |
| High share rate, low referral conversion | Invite or landing page | Rewrite the invite, state the referee reward |
| Coefficient under 0.2 cohort after cohort | No loop, a rebate | Build the share into the product |
| Long, irregular cycle time | No repeat share | Build the share into recurring use |
| Referral CAC above the LTV uplift | Reward too large or paid too early | Cap the reward, pay on qualified conversion |

A single strong week is a campaign. A coefficient that holds across two cohorts on a repeat cycle is a loop [171].

## Step 6 - Scale or cut

Scale a segment when referral CAC sits under the LTV uplift and the coefficient holds across two cohorts. Cut the reward on the segments that do not convert, and keep the proven loop gated to the cohort that cleared the cost math.

## Worked example

Take a B2B self-serve product at $1,200 per seat per year. Referred customers convert about 30 percent better than non-referred customers and carry about 16 percent higher lifetime value [61][82].

Reward: six months of a $50 per month add-on, which is $300, to both sides, paid when the referee becomes a paying customer. Add a $5 platform fee and a share of ops, and referral CAC lands near $320 [143].

Paid search on the same product costs about $802 per customer [143]. The referral runs about 2.5 times cheaper before the LTV advantage.

A $1,200 seat over a 36-month horizon, plus the 16 percent Wharton 2011 uplift, adds roughly $576 per referred customer [61]. The uplift covers the reward several times over.

Now read one cohort. Of 1,000 eligible customers, 60 send an invitation, so share rate sits at 6 percent. Nine invitations convert to paying customers, so referral conversion sits at 15 percent. The coefficient is 0.9, above the 0.5 that merely doubles a base and below the 1.0 that sustains itself [171]. At a 30-day cycle, the cohort grows steadily and still needs paid fuel on top.

Cycle time is the lever. A 30-day cycle gives you twelve compounding rounds in a year. A 90-day cycle gives you four. Compressing the cycle raises the count of compounding rounds without touching the coefficient [171].

## How the loop differs by stage

| Stage | Share moment | Reward | Read this metric |
|---|---|---|---|
| Seed | The founder invites the first users by hand | Credit or free months | Share rate and referral conversion |
| Series A to B | One in-product invite moment | Native credits, both sides | Coefficient per cohort, cycle time |
| Growth | The share built into recurring use | Tiered credits or seats | Referral CAC against paid CAC |
| Enterprise | A warm introduction from a champion | Commission on close, sized off the deal | Referral-sourced pipeline, referral CAC |

A nine-month sales cycle kills viral compounding, so the sales-led motion reads referral-sourced pipeline instead of a coefficient [61]. A consumer product reads the coefficient and the cycle time, because the loop is the engine [90].

## Failure modes

- **The rebate dressed as a loop.** The reward is the only reason to share, so the loop stops when the budget stops.
- **The unread coefficient.** The team counts referrals instead of converted customers, so a spike reads as growth.
- **The early payout.** The reward pays on a signup, so self-referral and fake accounts drain the budget.
- **The reward above the uplift.** The payout exceeds the 16 percent LTV advantage, so the program loses money on every referral it wins [82].
- **The unscaled spike.** The team opens the program to all users before the seed cohort clears the cost math.
- **The single prompt.** The share prompt runs once at onboarding, so the loop never gets a second cycle.
- **The unfooted baseline.** The team quotes the global 2.35 percent referral rate as its own bar, when software runs at 4.75 percent [141][142].

## Agentic layer

An agent watches the loop and polices the payouts. A human approves every block and every reward change.

```
Daily, for every referral event in the loop:
  1. Pull share rate, referral conversion, coefficient, and cycle time
     per cohort and per channel.
  2. Flag the single weakest stage by absolute lost referrals, not by the
     most striking percentage.
  3. Check each payout against the fraud rules: a repeated identity, a
     self-referral, an unqualified conversion, a velocity spike.
  4. Hold every flagged payout for a human decision, with the evidence
     attached.
  5. If no stage broke its range, say so and stop.
Never pay a reward without a qualifying conversion.
```

An agent that auto-pays bleeds margin. An agent that auto-blocks chases off real advocates. Keep the payout decision with a person, and read [Agent vs Human Workflows](../agentic/agent-vs-human-workflows) for the autonomy placement.

## Related pages

- [Referral and Viral](../channels/referral-viral): the channel strategy, the benchmark table, and the incentive math this flow runs on.
- [Referral and Viral: Case Studies](../case-studies/referral-viral): the Dropbox loop in depth.
- [Product-Led Growth](../channels/product-led): the self-serve motion where the second user is the referral.
- [Community-Led Growth](../channels/community-led): the member-initiated flywheel that feeds the loop.
- [Partners](../channels/partner): commission economics for the sales-led referral motion.
- [Funnel Benchmarks](../data/funnel): where referred traffic enters the funnel.
- [Product-Qualified Flow](./product-qualified-flow): the self-serve flow a referred user enters after signup.
- [Expansion and Renewal](./expansion-and-renewal): the post-sale motion that turns a referred account into the next cycle.
- [Pricing as GTM](../data/pricing-as-gtm): where the credit, seat, and storage rewards sit in the model.

## Sources

- [61] Wharton, 2011: referred leads convert about 30 percent higher and carry about 16 percent higher lifetime value. Source registry #61.
- [82] Schmitt, Skiera, and Van den Bulte, Journal of Marketing, 2011: referred customers are worth about 16 percent more with about 18 percent lower churn over a six-year horizon. Source registry #82.
- [90] Robinhood: the free-stock referral paid about $5 to most referees, up to $200, and reached a 7.8 percent peak referral conversion. Source registry #90.
- [115] Kumar, Petersen, and Leone, Texas Tech, 2010: 83 percent of customers say they would refer a product they like, and 29 percent do. Source registry #115.
- [141] Extole, 2026: the global referral rate is 2.35 percent of customers, and referred customers convert 4x and retain 37 percent better. Vendor source. Source registry #141.
- [142] Exploding Topics, 2026: the software referral rate is 4.75 percent, and top programs clear 5 percent. Source registry #142.
- [143] EmberTribe, 2026: B2B SaaS referral CAC runs about $150 per customer against about $802 for paid search. Vendor source. Source registry #143.
- [158] Calendly, 2024: the shared booking link carries the viral loop with no cash incentive. Vendor source. Source registry #158.
- [171] Andrew Chen, 2016: the viral factor math, the 1/(1-v) multiplier, the coefficient above 1.0 caveat, and retention as the fuel for repeated shares. Source registry #171.
- [222] The Cold Start Problem, 2021: viral growth is a flavor of network effect. Source registry #222.
