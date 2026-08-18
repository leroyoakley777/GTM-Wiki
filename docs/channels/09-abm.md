---
sidebar_position: 9
title: Account-Based Marketing (ABM)
description: When ABM is the right channel, the account-selection model, the one-to-one / one-to-few / one-to-many tiers, named-and-dated win-rate and ROI benchmarks, the account plan, sequencing, objections, failure modes, the case matrix, handoff, and the agentic SOP.
last-updated: 2026-08-17
status: active
tags: [abm, channel, account-based-marketing, enterprise, intent, account-plan, agentic]
domain: channels
parent: channels/index
---

# Account-Based Marketing (ABM)

Win a short list of high-value accounts by concentrating sales and
marketing on them with coordinated, multi-channel precision: the
accounts where a single win pays for the whole motion.

ABM inverts the demand-gen funnel. Demand gen casts a net, lets leads
self-select, and converts a small percentage. ABM names the accounts
that must be won, then goes after each one as a market of its own. It is
a structural commitment to fewer, deeper, higher-value relationships,
not a tactic to bolt onto a demand-gen machine.

This page is the *where* and *how* of ABM: when it is the right call,
the account-selection model, the three execution tiers, the
named-and-dated benchmarks, the account-plan artifact, sequencing,
objections, failure modes with fixes, an enterprise-versus-mid-market
case matrix, handoff, and the agentic SOP. Every number carries a named
source and an "as of" date.

The execution layer lives elsewhere. For the direct-outreach component
of the motion, read the [Outbound from Zero
playbook](../playbooks/outbound-from-zero.md). For the agent use on
top, read [Agentic Outbound](../agentic/agentic-outbound). For the
documented wins, read the [ABM case
studies](../case-studies/abm).

---

## One Number That Matters Most

**Account win rate on the target list.** Most teams report ABM success
with engagement or coverage numbers (impressions, visits, touches)
which are activity, not outcome. The number that tells you the program
is working is whether you are winning the accounts on the list at a
meaningfully higher rate than the rest of your book.

Target-account win rates run well above the general book. Snowflake
reported a 45% win rate on its ABM accounts versus 18% on non-ABM
accounts ([SalesMotion, ABM Metrics](https://salesmotion.io/blog/account-based-marketing-metrics)). Engaging buying groups drives 2–3x
higher win rates and larger deals ([Labs by Demandbase,
2026](https://www.demandgenreport.com/industry-news/news-brief/labs-by-demandbase-publishes-new-gtm-centered-report/52049/), 
analysis of 24B+ buyer interactions across 1,400+ companies).

| Account win rate | Performance |
|---|---|
| Under 20% | Below average: targeting or execution is weak |
| 20–30% | Average |
| 30–45% | Strong |
| 45%+ | Elite: the list is genuinely driving driving the book |

If your ABM win rate sits at or below your non-ABM baseline, you are
running demand gen on a named list and calling it ABM. Fix the
selection or the message before you spend more.

---

## When ABM Is the Right Channel

Use the [Channels Bullseye](../foundations/gtm-channels-bullseye) to
pick your one best channel before you commit. ABM wins when **all four**
are true:

- **High ACV.** The deal value must justify per-account orchestration:
  research, multi-channel execution, account plans, a sales-marketing
  pair on each account. ABM is common where buying is a committee
  decision and a single deal matters to the quarter.
- **A short, namable account list.** You can list the 50 or 200
  accounts that would change the quarter. If you need 5,000, that is
  demand gen with ABM flavor, not ABM. Most ABM orgs target a bounded
  list: 57% target 1,000 accounts or fewer
  ([Spiceworks](https://www.spiceworks.com/marketing/marketing-automation/articles/75-account-based-marketing-abm-statistics-every-marketer-should-know/)),
  and 29% focus on 101–500
  ([Demand Gen Report, 2020 ABM
  survey](https://www.demandgenreport.com/resources/reports/2020-abm-benchmark-survey-report-doubling-down-on-abm-research-shows-more-b2b-brands-stepping-up-their-investments-approaches-to-account-selection-segmentation-channel-strategies/)).
  One study puts the average simultaneous account count at 38
  ([Lusha](https://www.lusha.com/blog/what-is-account-based-marketing-abm-and-to-implement-it/)).
- **A committee buying process.** Multiple stakeholders, multiple
  objections, a long cycle. ABM coordinates all the buyers in one
  account rather than one lead at a time. Committees typically run 7–8
  people ([Amplitude](https://amplitude.com/explore/digital-marketing/what-account-based-marketing)).
- **Sales and marketing can agree on the list.** ABM collapses the
  handoff into one shared target list. If the two sides cannot agree on
  the accounts, the program is dead before it starts. Alignment is the
  mechanism, not a side effect: companies using account-based
  strategies see 86% improvement in win rates when sales and marketing
  align ([Gartner](https://www.gartner.com/smarterwithgartner/3-pillars-of-a-successful-account-based-strategy)).

If any of those is false, another channel fits. Low ACV and a wide
audience → inbound, product-led, or demand gen. A tight ICP with a
surgical reach → [outbound](../channels/outbound). ABM is the high-ACV,
low-volume, high-touch corner of the channel map.

**Acceptance gate:** you can name the target accounts *and* the ACV, or
you stop here. No namable list, no ABM.

---

## Account-Selection Model

Selection is the program. A mediocre target list, executed flawlessly,
beats a perfect motion aimed at the wrong accounts. The model runs
left to right: **ICP → TAM → fit score → intent score → the final
list.**

### ICP versus TAM

Start from the [ICP
Definition](../foundations/icp-definition). The ICP is the account-level
definition of the company most likely to become your best customer. TAM
is everyone you could sell to. ICP is who you should sell to right now.
A common early-stage mistake: treat TAM as the target list and spread
the motion across it.

Companies with a defined ICP win measurably more often:
- 68% higher win rates for B2B SaaS with a defined ICP
  ([SiriusDecisions/Forrester](https://www.foundryco.com/blog/blog-top-30-account-based-marketing-and-intent-data-statistics-to-know/))
- 30% more marketing-generated revenue from a well-defined ICP
  ([SiriusDecisions](https://www.foundryco.com/blog/blog-top-30-account-based-marketing-and-intent-data-statistics-to-know/))
- 14% higher pipeline conversion from ICP-aligned account-based
  strategy ([Gartner](https://www.foundryco.com/blog/blog-top-30-account-based-marketing-and-intent-data-statistics-to-know/))

The target list is the ICP narrowed by two axes: **fit** (is the account
the right shape?) and **intent** (is it buying now?). Fit comes first.
Intent on a bad-fit account is wasted money.

### Fit score (firmographic + technographic)

Score every account in the TAM against the ICP on weighted,
observable attributes. A concrete scheme:

| Component | Weight | What it measures | Example |
|---|---|---|---|
| Industry segment | 25% | Does the industry match where you win? | Construction / SaaS / financial services |
| Company size | 20% | Revenue and employee band that fits your ACV | 20–200 employees |
| Tech stack | 15% | Does the account run the tools your product plugs into, or a legacy competitor? | Salesforce present, spreadsheets for tracking |
| Geography / market | 10% | Reachable and served | North America / EU |
| Growth trajectory | 15% | Hiring, funding, expansion: signal that budget exists | Recent Series B, hiring surge |
| Role of the problem | 15% | A named owner of the problem exists | A project-management lead, not "operations" |

Fit is a 1–5 judgment per component, weighted to a 0–100 score. **The
list starts with accounts at or above your fit threshold only.** Below
the threshold, you are paying to speed up a mistake.

### Intent score

Fit says the account *could* buy. Intent says the account *is* buying.
Intent data watches buyer behavior (topic surges, research spikes,
job changes, tech-stack changes, hiring) and flags accounts in motion.

The numbers justify intent as a ranking input:
- Intent-prioritized accounts convert at 21.3% versus 8.4% for
  non-prioritized accounts, and the median sales cycle compresses by 28
  days ([2024 B2B Buying Study, via B2B Intent Data
  Benchmarks 2025](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-intent-data-benchmarks-2025))
- 71% of B2B marketers report active use of third-party intent data in
  ABM, up from 55% in 2022
  ([industry ABM benchmark survey, 2024, n=312](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-intent-data-benchmarks-2025))
- Intent-based ads produce 220% higher click-through than control-group
  campaigns ([Foundry](https://foundryco.com/blog/blog-top-30-account-based-marketing-and-intent-data-statistics-to-know/))

**Intent is a ranking signal, not a definition.** Fit defines the list.
Intent orders the list. An account with low fit and high intent is a
trap. An account with high fit and rising intent is your tier-1.

### Putting it together

1. Define the ICP from wins, not intuition (see [ICP
   Definition](../foundations/icp-definition)).
2. Pull the TAM that matches the ICP.
3. Score fit on the weighted table above. Keep the accounts above
   threshold.
4. Layer intent to rank the survivors and time the outreach.
5. Split the ranked list into the three tiers (below) by value and
   probability.

**Acceptance gate:** every account on the final list carries a fit
score, an intent signal, and a named buyer problem. No fit, no row.

---

## Three Tiers

ABM runs as three motions matched to account value and
probability. Almost no company can afford true one-to-one on every
account ([Demandbase, ABM
101](https://www.demandbase.com/faq/account-based-marketing-101/)). The
Winning shape is a blend.

| Tier | Also called | Account count | Customization | Channels | Per-account effort |
|---|---|---|---|---|---|
| One-to-one | Strategic ABM | 1–50 | Fully custom, account plan per account | Exec engagement, field events, custom content, direct sales | Very high |
| One-to-few | ABM Lite | 5–500, clustered | Semi-custom, per cluster of shared needs | Grouped content, targeted ads, SDR outreach | Medium |
| One-to-many | Programmatic ABM | Hundreds–thousands | Templated, account-based ads + automation | Display, email, retargeting | Low |

The classic framing: one-to-one treats each account as a market of one.
One-to-few groups accounts that share business issues or industry.
One-to-many scales personalization to hundreds of named accounts
([Demandbase](https://www.demandbase.com/faq/account-based-marketing-101/)).

Scope guidance, from multiple sources:
- One-to-one: fewer than 10 accounts where a single deal can be
  millions in ACV ([Amplitude](https://amplitude.com/explore/digital-marketing/what-account-based-marketing))
- One-to-few: clusters of 5–15 similar accounts
  ([Demandbase](https://www.demandbase.com/faq/account-based-marketing-101/)),
  or groups of 20–100 sharing traits
  ([The Insight Collective](https://www.theinsightcollective.com/insights/types-of-account-based-marketing))
- One-to-many: hundreds to thousands
  ([The Insight Collective](https://www.theinsightcollective.com/insights/types-of-account-based-marketing))

**Mix and match, on purpose.** Most orgs run one-to-many for breadth,
one-to-few for mid-tier accounts, and one-to-one for the handful that
would change the quarter
([Demandbase](https://www.demandbase.com/faq/account-based-marketing-101/)).
Most practitioners pursue both new revenue and expansion: 65% target
both existing clients and new prospects, 17% existing only, and 16% new
only ([The Insight
Collective](https://www.theinsightcollective.com/insights/types-of-account-based-marketing)).

**The tier trap:** every account drifting up-tier without a new plan,
or down-tier without a cheaper machine. Assign a tier at selection and
reassign only on evidence.

---

## Benchmarks That Prove It

Named, dated, sourced. Treat the ROI percentages as directional (much
is self-reported survey data), and the win-rate and conversion numbers
as load-bearing.

| Metric | Benchmark | Source (as of) |
|---|---|---|
| Account win rate | 45% ABM vs 18% non-ABM | [SalesMotion](https://salesmotion.io/blog/account-based-marketing-metrics) |
| Enterprise win-rate lift | 25% → 52% after ABM | [SalesMotion, DocuSign case](https://salesmotion.io/blog/account-based-marketing-metrics) |
| Buying-group engagement | 2–3x higher win rates, larger deals | [Labs by Demandbase, 2026](https://www.demandgenreport.com/industry-news/news-brief/labs-by-demandbase-publishes-new-gtm-centered-report/52049/) |
| Win-rate lift attributed to ABM | 86% of orgs report increased win rate | [TOPO 2019 Account Based Benchmark](https://abm.madisonlogic.com/rs/759-DDC-106/images/TOPO_2019%20Account%20Based%20Benchmark%20Report.pdf) |
| ROI (top performers) | 81% higher ROI | [Demandbase 2024 ABM Benchmark](https://www.demandbase.com/resources/report/2024-abm-benchmark/) |
| ROI reported | 87% of marketers say ABM delivers higher ROI than other strategies | [Insights ABM / SiriusDecisions](https://insightsabm.com/account-based-marketing-stats/) |
| ROI floors | 63% report at least 25% ROI; 46% at least 50% | [Demandbase, via UserGems](https://www.usergems.com/blog/abm-statistics) |
| ROI vs non-ABM | Most common answer 21–50% higher; 23% report 51–200% higher | [Forrester, State of ABM 2024](https://www.forrester.com/report/account-based-marketing-delivers-higher-roi-across-regions/RES181818) |
| Pipeline growth | 84% report improved pipeline growth | [Momentum ITSMA + ABM Leadership Alliance, 2022](https://www.prnewswire.com/in/news-releases/momentum-itsmas-annual-abm-benchmarking-study-shows-no-signs-of-slow-down-for-account-based-marketing-301760212.html) |
| Revenue growth | 77% report improved revenue growth | [Momentum ITSMA + ABM Leadership Alliance, 2022](https://www.prnewswire.com/in/news-releases/momentum-itsmas-annual-abm-benchmarking-study-shows-no-signs-of-slow-down-for-account-based-marketing-301760212.html) |
| Higher ROI claim | 72% say ABM delivers higher ROI than other marketing | [Momentum ITSMA + ABM Leadership Alliance, 2022](https://www.prnewswire.com/in/news-releases/momentum-itsmas-annual-abm-benchmarking-study-shows-no-signs-of-slow-down-for-account-based-marketing-301760212.html) |
| Engagement | 90% report improved active engagement with target accounts | [Momentum ITSMA + ABM Leadership Alliance, 2022](https://www.demandbase.com/press-release/the-abm-leadership-alliance-and-momentum-itsma-release-sixth-annual-abm-benchmark-report/) |
| Adoption | 71% of practitioners use an ABM strategy | [Demand Gen Report, 2025 ABM Benchmark Survey](https://www.demandgenreport.com/resources/2025-account-based-marketing-benchmark-survey/50610/) |
| Adoption trend | 70% (2024) vs 49% (2020) | [The Starr Conspiracy, ABM Benchmarks 2025](https://www.thestarrconspiracy.com/insights/benchmarks/account-based-marketing-benchmarks-2025) |
| Deal size | ~20% larger than traditional demand gen | [Huble, 111 ABM statistics](https://huble.com/blog/account-based-marketing-statistics) |
| Revenue attribution | up to 73% of total revenue in some orgs | [Huble, 111 ABM statistics](https://huble.com/blog/account-based-marketing-statistics) |
| Sales-marketing alignment | 86% win-rate improvement | [Gartner](https://www.gartner.com/smarterwithgartner/3-pillars-of-a-successful-account-based-strategy) |
| Customer LTV | 80% improved lifetime value | [Gartner](https://www.gartner.com/smarterwithgartner/3-pillars-of-a-successful-account-based-strategy) |

**The honest caveat.** The ROI percentages are self-reported survey
data, skewed to practitioners who run complete, mature programs. The
load-bearing core is the win-rate and conversion story: concentrating on
a short, well-chosen list lifts win rate (45% vs 18% at Snowflake and 2–3x
for buying-group engagement at Demandbase). Treat the ROI multiples as
directional, not a contract.

---

## How to Read These Numbers

1. **Benchmark against your own non-ABM baseline, not an industry
   average.** The point of ABM is a lift over your normal motion.
   Measure ABM accounts against the rest of your book in the same
   quarter.
2. **Account win rate is the outcome. Everything else is a leading
   indicator.** Engagement, penetration, coverage, intent surges tell
   you the program is *running*. Win rate tells you it is *working*.
3. **Selection is the program.** A mediocre list executed flawlessly
   beats a perfect motion aimed at the wrong accounts.
4. **Track pipeline from target accounts, not raw volume.** An account
   that engages at 60% is closer than a lead that opens one email. See
   [GTM Metrics](../data/gtm-metrics) for the pipeline-coverage context.

---

## Tool Stack

One working stack per layer, with what each tool does. Replace any layer
with an equivalent. Keep the layers.

| Layer | Tool (this guide) | What it does |
|---|---|---|
| Account data + enrichment | **Clay** (ZoomInfo / Apollo as sources) | Builds the target list, enriches firmographics → tech stack → intent, wires reason-to-reach from signals |
| Intent / signals | **6sense** or **Bombora** (third-party) or **Demandbase** | Flags accounts in market, ranks by intent, feeds the scoring model |
| Predictive scoring | **6sense / Demandbase / ZoomInfo** | Fit × intent score that orders the list |
| Advertising (one-to-many) | **Terminus** or **RollWorks** (or 6sense ads) | Account-based display, retargeting, ABM ads to named accounts |
| Orchestration + sales engagement | **Salesloft** or **Outreach** | Sequences, cadences, reply triage for the SDR layer |
| Meeting booking | **Calendly** (or the sender's native) | Turns a positive reply into a booked meeting without back-and-forth |
| Reporting | The orchestration layer + CRM | Account-level engagement, penetration, win rate against the list |

The stack is only as good as the list feeding it. Tools multiply effort.
They do not fix a fuzzy ICP or a broken message. Most ABM orgs already
report that the top challenges are proving ROI (47%), aligning sales and
marketing (43%), and scaling (40%) ([Demand Gen Report, 2025 ABM
Benchmark Survey](https://www.demandgenreport.com/resources/2025-account-based-marketing-benchmark-survey/50610/)), none of which a tool alone solves.

---

## Account Plan Artifact

Every one-to-one account, and every one-to-few cluster, gets a written
plan. This is the artifact that makes ABM a strategy instead of a
campaign. A working account plan:

| Section | Content |
|---|---|
| Account snapshot | Firmographics, current stack, revenue, the problem |
| The problem | What this account is trying to fix, in their words |
| Champion and committee | The 7–8 stakeholders, their priorities, who owns the budget |
| Reason to believe | Why you can win now: a trigger, a change, a gap |
| The angle | The message that lands with this account's stakeholders |
| The value case | ROI / payback math specific to this account |
| Channel mix | Which channels, which sequence, who owns each |
| Milestones | Penetration targets, a demo date, an exec touch |
| Risk register | Objections, the incumbent, the budget gate |

The plan lives in the CRM or a shared doc, owned jointly by the
account's sales lead and the marketing lead. If there is no written
plan, there is no one-to-one ABM: there is a set of parallel touches
called a plan.

---

## Sequencing the Motion

ABM runs on multi-channel orchestration, not a single email stream. The
channels that deliver most: email leads at 92% and in-person events at
72% ([Demand Gen Report, 2025 ABM Benchmark
Survey](https://www.demandgenreport.com/resources/2025-account-based-marketing-benchmark-survey/50610/)).

A representative one-to-few sequence over roughly 4 weeks:

| Week | Channel | Touch | Who |
|---|---|---|---|
| 0 | Sales | Account-planning call, list lock | Sales + marketing |
| 0 | Ads | ABM ads to the named account list | Marketing |
| 1 | SDR email | Reason-to-reach + one observation | SDR |
| 1 | Social | Follow + comment on stakeholders | SDR |
| 2 | SDR email | Proof point relevant to their situation | SDR |
| 2 | Ads | Retarget engaged stakeholders | Marketing |
| 3 | Sales | Direct outreach, multi-threaded | AE |
| 3 | Event / content | Field event or custom content drop | Marketing |
| 4 | Sales | Exec-to-exec introduction | AE + exec |

**Coordinate, don't spray.** All channels reinforce one message while
adapting format to the channel. **Escalate to human when an account
warms.** The moment intent or a reply signals a live deal, move from
programmatic to direct sales handoff. For the direct-outreach copy and
cadence detail, read the [Outbound from Zero
playbook](../playbooks/outbound-from-zero.md).

---

## Objections: and How to Answer Them

| Reply | What it means | How to answer |
|---|---|---|
| "ABM is just expensive demand gen" | They see no structural difference | Show the win-rate lift (45% vs 18%, SalesMotion) and the shared target list. Demand gen spreads, ABM concentrates |
| "We already run demand gen, why add this?" | Resource concern | Run ABM on the top 10% of accounts you already win; demand gen covers the rest. Blend, don't replace |
| "We can't agree on the target list" | Sales-marketing alignment is broken | That is the blocker, not ABM. Align the list first; the mechanism is 86% of the lift (Gartner) |
| "We can't prove ABM ROI" | Measurement fear | It is the top reported challenge (47%, DGR 2025). Fix attribution before scaling; tie every meeting to an account |
| "Too expensive for our deal size" | Economics mismatch | ABM is wrong for low ACV. Point them to outbound or demand gen |
| "We tried ABM and it didn't work" | Past failure, usually a selection or measurement failure | Diagnose: was the list right, was there a plan, was win rate measured against the baseline? |

**The rule:** answer the question, do not pitch harder. If the objection
is economics or alignment, no amount of ABM messaging fixes it.

---

## Failure Modes and Fixes

- **Selection drift.** The list becomes whoever marketing likes instead
  of accounts that fit and show intent. *Fix:* hold the fit-threshold
  gate. Reassign tiers only on evidence.
- **No written account plan.** Parallel touches called a strategy. *Fix:*
  the plan artifact is a gate, not a nice-to-have.
- **Measuring activity instead of win rate.** Impressions and visits
  reported as success. *Fix:* account win rate is the outcome metric.
  Engagement is a leading indicator.
- **Scaling before proof.** One-to-many volume added before the message
  and list are proven on a small set. *Fix:* prove on a short list first,
  then scale the tiers that convert.
- **Marketing owns the list alone.** Sales never bought in, so wins are
  not closed. *Fix:* joint ownership of the list and the plan.
- **Intent without fit.** High-intent, bad-fit accounts pursued because
  they are loud. *Fix:* fit defines the list, intent orders it.
- **No handoff discipline.** Engaged accounts never reach a human with a
  plan. *Fix:* a war-of-signal threshold that triggers direct sales
  escalation.
- **ABM on the whole book.** Every account treated as tier-1, nobody
  treated as tier-1 well. *Fix:* enforce the tier split. Assign
  per-tier effort ceilings.

---

## Case Matrix: Enterprise versus Mid-Market

ABM behaves differently by segment. The full cases live in the [ABM case
studies](../case-studies/abm). The matrix generalizes the pattern.

| Dimension | Enterprise ABM | Mid-Market ABM |
|---|---|---|
| Typical tier | One-to-one, some one-to-few | One-to-few, one-to-many |
| Account count | Tens | Hundreds |
| Sales cycle | 9–12 months | 1–4 months |
| Buying committee | 8–12 people, executive-led | 3–5 people, functional lead |
| Primary channels | Exec engagement, field, custom content, direct sales | Ads, email, events, SDR outreach |
| Key metric | Win rate, ACV, account penetration | Meetings, pipeline from target accounts |
| Example wins | Snowflake 45% vs 18% win rate; 2.3x meetings, 38% less spend ([Snowflake, Apr 2025](https://www.snowflake.com)) | iRidium $3K summit: 2,320 signups, 5 customers at $100K+ LTV ([via Fullfunnel, CXL](https://cxl.com)) |
| Economics | Justifies deep per-account investment | Justifies semi-customized, reusable plays |

**The transferable takeaway:** pick the accounts where the win matters
most, invest per-account, align sales and marketing on one message, and
measure pipeline from target accounts, not raw volume. If you cannot
name the 50 or 200 accounts that would change the quarter, this is
demand gen with ABM flavor.

---

## Handoff to Sales

The handoff is where ABM dies most often. Fix it before you scale:

1. **Define the war-of-signal threshold.** Write down what makes an
   account "ready": a named committee, a live project, budget, or a
   rising intent score past a set point. Below it, the program keeps
   running. Above it, sales takes over with the account plan.
2. **Every meeting traces to an account.** No source, no scale. Tag
   each meeting to its target account and tier.
3. **Debrief every 2 weeks.** What message won, which tier converted,
   what objection stalled the account, what changed in selection.
4. **Feed wins back into the list.** Best accounts become the new
   look-alike pool for the next tier-1 round. ABM is a loop, not a
   one-shot campaign.

**Acceptance gate:** the ready-account threshold is written, every
meeting traces to an account, and the 2-week debrief rhythm exists.
Skip this and you will scale engagement nobody closes.

---

## Agentic Layer

ABM is a strong candidate for an agent use, because the bottleneck
is the *thinking per account*: research, fit scoring, intent ranking,
and plan drafting. Agents do that at volume. Humans keep judgment on
selection and the send. The full treatment is [Agentic
Outbound](../agentic/agentic-outbound) and the [Agentic
Stack](../agentic/agentic-stack). The reusable shape is here.

**The rule that never changes:** the gate stays, the execution layer
changes. Humans define fit and approve the list. Agents remove the
research and ranking bottleneck.

| Motion step | Agent does | Human approves |
|---|---|---|
| List build | Sources accounts, scores fit (1–5) per component, layers intent, ranks | Signs off on the final tier list |
| Account plan | Drafts the plan from a research brief: problem, committee, angle, value case | Approves the pattern, then the plans |
| Scoring / routing | Re-scores on new intent, flags accounts that crossed the ready threshold | Sets the threshold, reviews flagged accounts |
| Outreach drafting | Writes per-account reason-to-reach and outreach copy | Approves the message pattern |
| Reporting | Tracks account win rate and engagement against the list | Reads the debrief, adjusts selection |

### One-prompt starter for scoring and running ABM

Adapt to your stack:

```text
You are running account-based marketing for {ICP} in {segment}, on a
target list from {data source}. For each account, return a row with:
fit score (0–100, weighted per the fit model), intent signal and its
source, tier (one-to-one / one-to-few / one-to-many), a named buyer
problem, and a one-line reason-to-reach grounded in a concrete signal.
Rank the list by fit and intent. Flag any account below the fit
threshold. Those do not belong on the list. Then draft an account plan
for every tier-1 account: committee, angle, value case, channel mix,
and milestones. Return only accounts that pass the fit gate.
```

### Guardrails

1. **Human approval before any send.** Agents draft and rank. Humans
   approve the list and the message pattern. A weak pattern scaled by an
   agent dies faster, not slower.
2. **Fit is non-negotiable.** Agents must not pull in high-intent,
   low-fit accounts because they are loud. The fit gate is hard.
3. **Score the agent, not the activity.** Measure account win rate and
   pipeline from target accounts, not plans drafted or emails sent. See
   [Guardrails and
   Measurement](../agentic/guardrails-and-measurement).

---

## Sources

- [SalesMotion: ABM Metrics That Prove
  ROI](https://salesmotion.io/blog/account-based-marketing-metrics):
  account win-rate benchmarks, Snowflake and DocuSign cases.
- [Labs by Demandbase, 2026](https://www.demandgenreport.com/industry-news/news-brief/labs-by-demandbase-publishes-new-gtm-centered-report/52049/): 2–3x win-rate lift from buying-group engagement, 24B+ interactions.
- [Demandbase: 2024 ABM Benchmark](https://www.demandbase.com/resources/report/2024-abm-benchmark/): 81% higher ROI for top performers.
- [Momentum ITSMA + ABM Leadership Alliance, 2022](https://www.prnewswire.com/in/news-releases/momentum-itsmas-annual-abm-benchmarking-study-shows-no-signs-of-slow-down-for-account-based-marketing-301760212.html): pipeline, revenue, ROI, engagement.
- [Forrester: State of ABM 2024](https://www.forrester.com/report/account-based-marketing-delivers-higher-roi-across-regions/RES181818): ABM ROI vs non-ABM.
- [Demand Gen Report: 2025 ABM Benchmark
  Survey](https://www.demandgenreport.com/resources/2025-account-based-marketing-benchmark-survey/50610/): adoption, channels, top challenges.
- [The Starr Conspiracy: ABM Benchmarks 2025](https://www.thestarrconspiracy.com/insights/benchmarks/account-based-marketing-benchmarks-2025): adoption trend, intent data.
- [The Starr Conspiracy: B2B Intent Data Benchmarks 2025](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-intent-data-benchmarks-2025): intent conversion, sales-cycle compression.
- [Huble: 111 ABM Statistics](https://huble.com/blog/account-based-marketing-statistics): deal size, revenue attribution, win-rate reporting.
- [Foundry: ABM and intent data statistics](https://foundryco.com/blog/blog-top-30-account-based-marketing-and-intent-data-statistics-to-know/): ICP win rate, intent ad CTR.
- [Gartner: 3 Pillars of Account-Based Strategy](https://www.gartner.com/smarterwithgartner/3-pillars-of-a-successful-account-based-strategy): alignment win-rate lift, LTV.
- [Demandbase: ABM 101](https://www.demandbase.com/faq/account-based-marketing-101/): tier definitions.
- [Amplitude: What is ABM](https://amplitude.com/explore/digital-marketing/what-account-based-marketing): committee size, tier scopes.

---

## Further Reading

- [Channels Bullseye](../foundations/gtm-channels-bullseye): where ABM
  sits in the high-ACV channel picture.
- [ICP Definition](../foundations/icp-definition): the account list
  starts with a disciplined ICP.
- [Outbound from Zero playbook](../playbooks/outbound-from-zero.md):
  the direct-outreach component of the motion.
- [Agentic Outbound](../agentic/agentic-outbound): the agent use on
  top of the motion.
- [ABM case studies](../case-studies/abm): the documented wins.
- [GTM Metrics](../data/gtm-metrics): pipeline coverage and win-rate
  context ABM feeds.
- [Sales Cycle Benchmarks](../data/sales-cycle-benchmarks): the
  long-cycle, committee context ABM lives in.
- [Outbound channel](../channels/outbound): the adjacent high-ACV,
  surgical channel.
