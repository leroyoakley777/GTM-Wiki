---
sidebar_position: 4
title: Product-Led Growth
description: When product-led growth is the right channel, the signup-to-activation-to-pay funnel with named dated benchmarks, trial-model tradeoffs, growth loops, PQLs, tools, sequencing, sales handoff, the SMB vs enterprise case matrix, failure modes, and the agentic layer.
last-updated: 2026-08-17
status: active
tags: [product-led, plg, channel, free-to-paid, activation, pql, growth-loops, self-serve, trial, agentic]
domain: channels
parent: channels/index
---

# Product-Led Growth

**Goal**: decide whether the product should be the salesperson, then run
the funnel — signup → activation → pay — with conversion numbers you can
measure against a named baseline instead of a guess.

Product-led growth is the channel where the buyer experiences value
before they talk to a human, and at scale often never does. The product
does the qualifying, the selling, and much of the onboarding. Sales, if
it enters at all, enters late, only on the users the product has already
qualified.

This page is the *where* and *how* of PLG. It covers when the channel is
right, the full funnel with named, dated rates, the trial-model decision
that is your strategy, growth loops, Product-Qualified Leads (PQLs),
the tooling stack, a sequencing plan, the handoff to sales, the SMB vs
enterprise case matrix, objections, failure modes with fixes, and the
agentic layer. Every number carries a named source and an "as of" date.

**Read the companion pages:** the [Channels
Bullseye](../foundations/gtm-channels-bullseye) decides whether PLG is
your one best channel. [Product-Led Growth Case
Studies](../case-studies/product-led) carries the documented Slack,
Calendly, and Figma builds. [Funnel
benchmarks](../data/funnel) holds the leakage math this channel runs
on.

---

## One Number That Matters Most

**Free-to-paid conversion — a good freemium self-serve rate is 3–5%,
a great one 6–8%, and a good free-trial rate is 8–12%, great 15–25%.**
That spread is the whole story of PLG in one figure: the trial model you
pick *sets* the conversion band you can reach, before you change a single
onboarding step.

Measure it on a **cohort basis** — the share of new accounts that begin
paying within their first six months, divided by total new accounts
created in the window ([Lenny's Newsletter × OpenView × Pendo, 1,000+
product survey, Aug 2023](https://openviewpartners.com/2023-product-benchmarks/)).
A blended rate hides whether you are improving cohort over cohort or
just pulling future conversion forward.

The second number that matters as much: **free trials that route
users through a PQL gate convert 2.8x higher than trials that do not**
([Gainsight, Product-Led Growth Index, 2022](https://www.gainsight.com/resource/benchmark-product-qualified-lead-pql-conversion-rates/)).
Conversion is a discipline, not a product accident.

---

## Is PLG Even the Right Channel?

PLG wins when the product can carry the sales conversation. It loses
when the product is too complex or too expensive for a user to self-
serve to a "this is worth paying for" moment. Use the [Channels
Bullseye](../foundations/gtm-channels-bullseye) to pick your one best
channel first. PLG is right when **all four** hold:

- **Value is self-evident fast.** A user should hit the aha moment in
  minutes, ideally before they create an account. If the product needs a
  30-minute demo to be understood, the product is not yet the
  salesperson.
- **Trial is cheap to give.** Low setup, low data burden, no sales
  orchestration needed to get a user to first value. The easier the
  trial, the more signups — but that ease and conversion pull against
  each other, and that tension is the whole design problem.
- **You can instrument usage.** PLG only works if you can see which free
  users are getting value. That requires product analytics and a written
  definition of the activation moment.
- **The motion lives without a human at the top of the funnel.**
  Sales may enter later for expansion or enterprise, but acquisition must
  run on the product.

PLG is the wrong channel when the buyer is an organization that
purchases through procurement before anyone touches the product, when
the product needs heavy integration or consulting to show value, or when
ACV is so high that a human must qualify before a user ever signs up.
For high-ACV and complex products, read [Outbound](../channels/outbound)
or [ABM](../channels/abm) instead.

**Acceptance gate:** you can name the activation moment in one sentence
and you can measure it. If you cannot instrument usage, you cannot run
PLG — you can only run a free trial that nobody measures.

---

## Product-Led Funnel — Signup → Activation → Pay

PLG is a funnel like any other, but the stages are product events, not
CRM statuses. Name each stage and measure the leak between them before
you touch a single campaign.

| Stage | What it is | What leaks it |
|---|---|---|
| Visitor → signup | A person arrives and creates an account | Friction, unclear value, CC wall |
| Signup → activation | User hits the first meaningful value moment | Weak onboarding, missing trigger event |
| Activation → pay | Activated user converts to paid | Pricing, packaging, no upgrade nudge |
| Pay → retain / expand | Customer stays and buys more | Churn, no expansion motion |

The leakage is multiplicative, not additive. Two stages at 50% each give
you 25% end to end, not 100%. This is the same arithmetic as the [Funnel
benchmarks](../data/funnel) page, applied to product events.

### Model-by-model numbers

Each trial model buys a different funnel shape. The outcome that compares
them fairly is **paying customers per 1,000 visitors**, because it nets
top-of-funnel and conversion into one number.

| Trial model | Visitor → signup | Signup → paid | Paying / 1k visitors |
|---|---|---|---|
| **Opt-in free trial** (no CC) | ~8.5% | ~18% | ~15 |
| **Opt-out free trial** (CC required) | ~2.5% | ~49% | ~12 |
| **Freemium** (free forever tier) | ~13% | ~3–9% | ~3–5 |
| **Ungated freemium** (try before account) | ~7% | — | ~5.6 |

([First Page Sage / Pulseahead, trial-to-paid benchmarks](https://www.pulseahead.com/blog/trial-to-paid-conversion-benchmarks-in-saas))

The tension is genuine and it *is* the PLG design problem. Opt-out trials
convert signups to paid at ~49%, but the credit-card wall crushes
visitor → signup to ~2.5%, so the paying-per-1k outcome ends up roughly
flat against opt-in. Freemium pulls far more visitors to signup (~13%)
but pays a tiny fraction of them. None is "right" — each buys a different
funnel:

- **Opt-out trial** = highest per-signup commitment, lowest top-of-
  funnel. Best when the product is genuinely valuable and the buyer
  already expects to pay.
- **Opt-in trial** = balanced, the most common. Best default for most
  B2B SaaS.
- **Freemium** = highest user volume, lowest paid yield, huge
  distribution surface. Best when network effects, community, or
  expansion make many free users worth more than their direct
  conversion suggests.

A word of warning on switching: moving from opt-out to opt-in (dropping
the CC wall) will drop your *signup → paid* percentage while often
raising the total number of paying customers, because more people enter
the trial ([Sixteen Ventures, Lincoln Murphy](https://sixteenventures.com/saas-free-trial-benchmarks)).
Manage that expectation before you make the change.

### Signup-rate reality

Sign-up rate is the counterweight to conversion. Freemium products sign
up at ~9% of visitors, free-trial products at ~5% — the time pressure of
a trial makes people wait until they are serious ([Lenny's × OpenView ×
Pendo, 2023](https://openviewpartners.com/2023-product-benchmarks/)).
A high signup rate on its own is not success — it is the start of a funnel
you then have to convert.

---

## Activation Moment Is the Product's Job

Activation is the stage that separates PLG companies that compound from
companies with a free trial and a hope. Define it as the single usage
event that correlates with retention and payment — the "first value
achieved" moment, not "logged in once."

Standard candidates: created first document, ran first report, invited
first teammate, completed first workflow, produced first output. The
right one is the event that, when a user hits it, makes them measurably
more likely to still be active and to pay 90 days later.

**The benchmark that matters here:** improving free-to-paid conversion
by a single point is worth roughly **+15% new revenue per trial cohort**
([ChartMogul / Userpilot, SaaS conversion](https://userpilot.com/blog/saas-average-conversion-rate/)).
Because conversion improvements benefit every future cohort, that effect
compounds in a way a one-time acquisition campaign never does. Going from
5% to 10% conversion doubles revenue from the same signup volume without
spending more on acquisition.

**Fix activation before you buy traffic.** Buying more visitors for a
funnel that leaks at activation is paying to speed up a waste.

---

## Benchmarks by Product and Customer Type

Free-to-paid conversion varies more by who you sell to than by almost
anything else. Compare yourself to the right slice ([Lenny's × OpenView
× Pendo, 2023](https://openviewpartners.com/2023-product-benchmarks/)):

| Product / customer type | Median or note |
|---|---|
| Freemium self-serve | 3–5% good, 6–8% great |
| Freemium + sales-assist | 5–7% good, 10–15% great |
| Free trial | 8–12% good, 15–25% great |
| Freemium product, distribution | ~20% convert under 2.5%, ~33% between 2.5–5%, only ~15% exceed 20% |
| Free-trial product, distribution | only ~7% under 2.5%, ~24% between 7.5–10%, ~14% reach 20% |
| Developer-focused company | median ~5% — half the rate of companies that do not sell to developers |

Two reads from the data. First, sales-assist freemium converts roughly
2–3x a pure self-serve freemium at the same product — a human on the
activated users nearly always pays for itself. Second, developer products
convert at half the rate of the rest, so a developer-tool company should
benchmark against ~5%, not the 9% median, and plan the motion accordingly.

---

## Growth Loops — Virality and Self-Serve

PLG compounds when the product pulls in the next user, not when a
campaign does. The two loop types:

- **Self-serve loop.** Every activated user becomes a potential upgrade
  or expansion. The motion runs without a sales touch, and CAC trends
  toward the cost of the free signup. This is the loop freemium and
  trial models both run.
- **Viral / share loop.** Each user brings another through the product
  itself — an invite, a shared document, a visible output, a cross-
  functional workflow. This is the loop that made Slack, Calendly, and
  Figma grow without paid acquisition (see [Product-Led Growth Case
  Studies](../case-studies/product-led)).

Measure a viral loop with the **viral coefficient** — the number of new
users each existing user brings in within one cycle. A coefficient below
1.0 adds pipeline but needs fuel from elsewhere. Above 1.0, growth
compounds on its own. The fuller treatment of loops and the coefficient
is on the [Referral & Viral](../channels/referral-viral) page.

For PLG, the loop that matters is usually the **shared output**: the
user's work product becomes the distribution. A booking link, a shared
board, a published design, a comment thread — each is a free ad that
pulls in a new user who already sees value before they sign up. If your
product produces nothing worth sharing, you are running a funnel, not a
loop, and you should price the acquisition cost accordingly.

---

## PQLs — PLG's Conversion Gate

**Product-Qualified Leads (PQLs) are free users who hit a defined
trigger — activation, a usage threshold, an expansion signal — that
marks them as likely buyers.** They are the PLG version of the ICP fit
gate, and they are the single highest-leverage mechanism in the channel.

The number, again because it decides your operating model: **free trials
using PQLs convert 2.8x higher than those that do not**
([Gainsight, Product-Led Growth Index, 2022](https://www.gainsight.com/resource/benchmark-product-qualified-lead-pql-conversion-rates/)).
Sales-assist freemium (which routes activated users to sales) converts at
10–15% vs 3–8% for pure self-serve ([Lenny's × OpenView × Pendo,
2023](https://openviewpartners.com/2023-product-benchmarks/)).

This is the counterintuitive part of PLG: **a product-led company that
never uses sales to close its best free users leaves money on the table.**
The product wins the top of the funnel. The humans still close the users
the product has qualified. PLG is not "no sales" — it is sales only where
the product has proven fit. Roughly **44% of free-trial companies have
sales reach out directly to more than half their signups**, double the
rate of freemium companies (24%) ([Lenny's × OpenView × Pendo,
2023](https://openviewpartners.com/2023-product-benchmarks/)).

Define the PQL trigger in product terms, not persona terms:

| PQL signal | What it means |
|---|---|
| Reached activation | Got first value — ready for the paid nudge |
| Crossed a usage threshold | e.g. seats, documents, events, volume |
| Invited teammates | Organic expansion intent |
| Hit a feature that is paywalled | Direct upgrade trigger |
| Reached a trial-conversion or plan-limit moment | Natural transition point |

---

## Tools — the Stack That Makes PLG Measurable

PLG fails without instrumentation. Here is a stack that works end to end,
what each layer does, and how it wires together:

| Layer | Tool (this guide) | What it does | How to wire it |
|---|---|---|---|
| Product analytics | **Amplitude** or **Mixpanel** | Tracks events, defines activation, cohorts, funnel analysis | Instrument the activation event + paywall events from day one |
| In-app guidance | **Pendo** | Onboarding flows, in-app messages, resource center, feedback | Build the activation path, nudge toward the trigger event |
| PQL scoring / routing | **Salesforce** (or **HubSpot**) + the analytics layer | Scores free users on usage signals, creates PQL records | Pipe activated users into CRM with the trigger event as the qualification |
| Billing / payments | **Stripe** or **Chargebee** | Trials, subscriptions, plan limits, dunning | Connect to the product so plan-limit moments fire the upgrade CTA |
| Behavioral email / lifecycle | **Customer.io** or **Braze** | Trial reminders, activation nudges, win-back | Trigger on activation-stage events, not on signup alone |
| Revenue intelligence | **Paddle** / **Baremetrics** | MRR, churn, expansion, LTV dashboarding | Report free-to-paid by cohort monthly |
| Data / warehouse | **Segment** + **Snowflake** or **BigQuery** | Unifies product, billing, CRM events for modeling | Power the cohort conversion and LTV models |

The rule that keeps the stack honest: **instrument before you scale.**
An un-instrumented signup flow is a black box, and you will optimize
against gut feel instead of the event data. If you only adopt two tools,
adopt product analytics and billing — everything else hangs off those.

---

## Sequencing — the Four-Phase Build

PLG is a product build, not a campaign. Sequence it so each phase
produces a measurable signal before the next:

**Phase 0 — Validate the value.** Before any instrumentation, confirm the
product reaches an aha moment without a human. Run a handful of manual
onboardings and watch where users stall. If the aha needs your hands,
fix the product first. Gate: a user reaches activation without help.

**Phase 1 — Instrument the funnel.** Ship product analytics. Define the
activation event. Measure visitor → signup → activation → pay on real
traffic. Gate: you can report free-to-paid conversion by cohort.

**Phase 2 — Convert.** Fix activation, add the upgrade nudge at the
plan-limit moment, then add PQL scoring and route activated users to
sales or self-serve. Gate: free-to-paid conversion sits inside your
model's healthy band. Do not buy more traffic until it does.

**Phase 3 — Expand and loop.** Turn the product's shared output into a
viral loop. Add expansion pricing and a customer-success motion on the
paid base. Gate: NRR and the viral coefficient are measured and moving
in the right direction.

Each phase has an acceptance gate because the cost of skipping grows:
skip Phase 1 and Phase 2 becomes guessing, skip Phase 2 and Phase 3
compounds a broken funnel.

---

## Handoff to Sales — Where PLG Dies or Compounds

Most PLG companies fail the handoff, then blame the channel. Fix the
handoff before you scale it:

1. **Define the PQL meeting standard.** Write down who counts as a
   qualified handoff — activated user + budget signal + buying intent.
   If you cannot write it, the handoff is a lottery.
2. **Route on product signal, not on request.** Sales should touch users
   the product has qualified, not every signup. The trigger event is the
   qualification.
3. **Track the source.** Every meeting and every expansion must trace
   back to the product event that generated it. No source, no scale.
4. **Debrief every two weeks.** Which trigger produced the best
   conversions, which usage pattern predicts payment, what objection
   killed the close.
5. **Feed the win back into the product.** The users who converted tell
   you what "activated" should mean next quarter. Tighten the PQL
   definition on evidence, not intuition.

**The rule:** sales enters late, only on the qualified few, and the
product keeps winning the top of the funnel. When sales starts touching
every signup, you have stopped being product-led and become a sales-led
company with a free trial.

---

## Case Matrix — SMB Self-Serve vs Enterprise-Led Expansion

PLG splits into two very different motions. The documented Slack,
Calendly, and Figma builds are detailed on [Product-Led Growth Case
Studies](../case-studies/product-led). Here is the operating matrix.

| Dimension | SMB self-serve | Enterprise-led expansion |
|---|---|---|
| Primary buyer | Individual / small team | Department buying into org-wide rollout |
| Free tier job | Deliver value, self-convert | Deliver value, then expand seats/seats org-wide |
| Sales role | Rare, on high-signal PQLs only | Central — land small, expand through champions |
| Key metric | Free-to-paid conversion | NRR and seat/license expansion |
| ACV | Low (self-serve pays for itself) | High enough to justify a human on expansion |
| Case pattern | Calendly: shared link self-serves and virals | Figma: free design team grows, then enterprise design systems |
| Churn risk | High without a retention motion | Lower per-account, higher stakes per account |
| Tools emphasis | Analytics, billing, onboarding | The above + CRM, CSM tooling, contract/security |

The failure that spans both: **treating the enterprise motion as a
bigger SMB motion.** Enterprise-led expansion needs a security review,
procurement, SSO/SAML, and a champion who pushes adoption org-wide —
none of which the SMB playbook provides. If you are chasing enterprise
deals, add the enterprise-ready features before you call the motion PLG.

**The one-number handoff for enterprise:** expansion (NRR) is where
enterprise PLG compounds. Measure NRR by customer cohort and treat
seat/license expansion as the second funnel after free-to-paid.

---

## Objections and Edge Cases

| Objection / situation | What it means | How to answer |
|---|---|---|
| "PLG only works for low-ACV, bottom-up tools" | Often true as stated | Match the model to ACV. High ACV still uses PLG as the front door, then lands and expands through sales |
| "Freemium will cannibalize paid" | Fear of giving value away | A free tier that converts at 3–5% still nets more than a trial nobody takes. Measure paying-per-1k-visitors, not the free load |
| "We need a demo for people to get it" | Product too complex for PLG today | Fix activation before scaling. PLG is a product build, not a marketing toggle |
| "We already have sales doing fine" | PLG + sales can coexist | Keep sales for expansion/enterprise, route the self-serve base through the product. Both win |
| "Our conversion is 2% — we're failing" | Wrong benchmark | If you are freemium, 3–5% is good. Compare to your model slice, not the 9% median |
| "If we add a CC wall we'll lose signups" | True, by design | You will — but paying-per-1k-visitors may hold flat. Decide which funnel shape you want |
| No growth after launch | A spike, not a loop | There is no shared-output loop. Build the viral mechanic or price acquisition in |

**The edge case that bites hardest:** a company runs PLG as a free trial
bolted onto a sales-led product, measures nothing, and concludes the
channel failed. PLG is not a trial field. It is a product architecture.
If you cannot instrument, you did not run PLG.

---

## Failure Modes and Fixes

- **Scaling traffic before activation is fixed** — you buy visitors for a
  funnel that leaks at the aha moment. Fix activation first, and conversion
  lifts compound across every cohort.
- **Measuring signups as success** — a frictionless signup that never
  pays is a cost. Watch paying-per-1k-visitors, not signup conversion.
- **Quoting "the" free-to-paid rate** — the 9% median hides the spread.
  Compare to your model slice, not the blended average.
- **No PQL gate** — every signup gets the same treatment, so the users
  worth selling to never reach a human. Route activated users to sales
  and conversion roughly triples ([Gainsight, 2022](https://www.gainsight.com/resource/benchmark-product-qualified-lead-pql-conversion-rates/)).
- **Sales on every signup** — you become sales-led with a free trial and
  lose the unit economics of self-serve. Sales enters on product signal
  only.
- **A free tier with no plan-limit moment** — nothing pushes the user to
  pay. Ship the upgrade nudge at the limit, not a banner.
- **No expansion motion** — free-to-paid is capped but NRR is not. Build
  the second funnel: seats, tiers, and add-ons on the paid base.
- **Forgetting the enterprise layer** — chasing enterprise deals without
  SSO, security review, and procurement support is a logo trap.

---

## Agentic Layer

PLG is the channel where agents earn their keep on the *qualification
and conversion* side, because the volume of free users is enormous and
the per-user attention budget is near zero. The full operating model is
on [Agentic GTM](../agentic/agentic-gtm-overview). The reusable shape:

| Motion step | Agent does | Human approves |
|---|---|---|
| PQL detection | Watches product events, scores users against the PQL trigger, creates CRM records | The trigger definition, not every record |
| Activation triage | Segments activated vs stalled users, fires the right in-app or email nudge | The playbook logic |
| Sales routing | Routes qualified PQLs to the right rep or self-serve path with a usage brief | The routing policy |
| Handoff brief | Drafts the account brief from product usage — what they used, when, what they hit | The brief, then the rep takes over |
| Expansion signals | Flags expansion triggers (seat growth, plan-limit hits, usage spikes) for CS | The expansion play |

**The one-prompt starter for PQL routing** (adapt to your stack):

```
You are scoring free accounts against our PQL definition. For each
account, pull product usage and return a record with: account,
activation reached (yes/no), the trigger event and its timestamp, usage
thresholds crossed, and a one-line reason this account is a qualified
handoff. Route only accounts that hit the trigger — the gate is "product
signal, not request." Return only records that pass.
```

**Three guardrails that keep it honest** (from [Guardrails &
Measurement](../agentic/guardrails-and-measurement)):

1. **Trigger coverage is complete** — if the agent misses an activation
   event because instrumentation is thin, the PQL gate is fake. Instrument
   before you automate.
2. **Human approval on the routing policy, not every handoff** — define
   the trigger once, let the agent execute, review the outcomes weekly.
3. **Never sell to un-activated users at scale** — an agent that routes
   every signup to sales turns a self-serve motion back into a leaky
   sales-led one. The product signal stays the gate.

**Track conversion by cohort, not raw signups.** A signup is a start, not
a customer. Free-to-paid by cohort is revenue ([ProductLed, PLG
benchmarks](https://productled.com/blog/product-led-growth-benchmarks)).

---

## Sources

- [Lenny's Newsletter × OpenView × Pendo — "What is good free-to-paid
  conversion"](https://openviewpartners.com/2023-product-benchmarks/) —
  1,000+ product survey, Aug 2023. Freemium self-serve 3–8%, freemium +
  sales-assist 5–15%, free-trial 8–25%; signup 5% trial vs 9% freemium;
  developer median ~5%; 44% of trial companies route >half signups to
  sales.
- [Gainsight — Product-Led Growth Index](https://www.gainsight.com/resource/benchmark-product-qualified-lead-pql-conversion-rates/)
  — free trials using PQLs convert 2.8x higher, 2022.
- [First Page Sage / Pulseahead — Trial-to-Paid Benchmarks](https://www.pulseahead.com/blog/trial-to-paid-conversion-benchmarks-in-saas)
  — opt-in ~18%, opt-out ~49%, freemium ~3–9%, per-1k-visitors outcomes.
- [ChartMogul / Userpilot — SaaS Conversion](https://userpilot.com/blog/saas-average-conversion-rate/)
  — a 1-point free-to-paid lift ≈ +15% new revenue per cohort.
- [ProductLed — Product-Led Growth Benchmarks](https://productled.com/blog/product-led-growth-benchmarks)
  — 600+ B2B SaaS survey: ~9% median free-to-paid, ~25–30% with PQLs.
- [Sixteen Ventures, Lincoln Murphy — SaaS Free Trial Benchmarks](https://sixteenventures.com/saas-free-trial-benchmarks)
  — opt-in top performers above 25%, opt-out above 60%, and the warning
  on switching CC walls.

---

## Further Reading

- [Funnel Benchmarks](../data/funnel) — the stage-by-stage leakage PLG
  runs on, with the multiplicative math.
- [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks) — the
  wider stage table with a second source set.
- [Pricing as GTM](../data/pricing-as-gtm) — packaging, discounting, and
  expansion pricing shape free-to-paid economics.
- [Product-Led Growth Case Studies](../case-studies/product-led) —
  Slack, Calendly, and Figma with the documented numbers.
- [Referral & Viral](../channels/referral-viral) — the viral coefficient
  and share loops behind PLG growth.
- [Channels Bullseye](../foundations/gtm-channels-bullseye) — how to pick
  PLG as your one best channel.
- [Agentic Outbound](../agentic/agentic-outbound) — the human-in-the-loop
  agent harness, transferable to PLG conversion.
