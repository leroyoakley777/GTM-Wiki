---
sidebar_position: 7
title: GTM Funnel
description: "The GTM funnel as a growth system: the stages, the AARRR frame, where it leaks, the growth team that runs it, and the experiment machine that compounds."
last-updated: 2026-08-28
status: active
tags: [funnel, pipeline, growth, foundations, metrics, aarrr]
domain: foundations
parent: foundations/index
---

# GTM Funnel

Build the funnel as a growth system, not a reporting chart. Name the
stages, measure the transitions, and run the funnel like an experiment
machine that compounds month over month.

The GTM funnel is the shared coordinate system that lets marketing,
sales, product, and success agree on what is working. It is broader
than a sales funnel. A sales funnel tracks one rep moving one deal from
contact to close. The GTM funnel maps the full journey from stranger to
awareness to paying customer to expansion. If you cannot name the stages
and measure movement between them, you are running blind.

This page pairs with [GTM Metrics](gtm-metrics), which defines each
number, and [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks),
which carries the stage baselines the funnel math needs.

---

## Definition

A GTM funnel is a model that organizes your go-to-market activities,
metrics, and goals into discrete stages that correspond to the steps a
buyer takes from first awareness to final purchase and beyond.

Every company's funnel is different. The stage names, entrance criteria,
exit criteria, and metrics depend on your business model, price point,
and buyer journey. The principle is universal: if you cannot name the
stages and measure the transitions, the funnel is a picture, not a tool.

Growth thinking reframes the funnel around a loop, not a pipe. The
growth funnel spans acquisition, activation, retention, revenue, and
referral, and it feeds itself: a referred customer enters at the top
again, which is what makes growth compounding instead of linear [1].

The funnel serves three jobs:

- **Alignment**: Marketing, sales, and success agree on what a qualified
  opportunity looks like and what stage it is in.
- **Diagnosis**: You see exactly where prospects drop off and why.
- **Planning**: You set stage-specific goals and forecast what it takes
  to hit revenue targets.

---

## Why It Matters

Without a defined funnel, teams optimize for different things. Marketing
counts leads. Sales counts opportunities. Leadership counts revenue.
Nobody measures the same transitions, so nobody can say why pipeline fell
short.

A funnel makes the leak visible. If you have 10,000 visitors, 200 MQLs,
20 SQLs, and 2 closed deals, the question is not "is our conversion rate
low?" The question is "which transition leaked?" Is it the top? The handoff
from marketing to sales? The close?

The data says where the money dies. MQL-to-SQL is the largest, most
consistent leak in B2B SaaS: Salesforce's State of Sales 2024 survey of
5,500 sales professionals across 27 countries reports 13% [2].
thedigitalbloom's 2025 roundup widens the band to 15-21% [3]. A team with a
flat MQL count that doubles the MQL-to-SQL rate roughly doubles pipeline for
the cost of a qualification fix, not more volume.

The compounding math is why the funnel rewards attention. Conversion
rates multiply, they do not add. A one-percentage-point gain at one stage
compounds through every stage below it. A team that lifts a conversion
rate by 5% every month nets roughly an 80% improvement over a year [4].
That is the entire reason the funnel is worth building right: small,
consistent, compounding gains beat one heroic rewrite.

---

## Framework

### AARRR: the growth funnel

The growth funnel is not a single pipe from aware to bought. It is five
connected stages, each owned and measured, that loop back into each
other [1]:

- **Acquisition**: Getting people to find you. Traffic, reach, channel
  output.
- **Activation**: Getting new users to their first meaningful experience
  of value. This is where the "aha moment" lives [5].
- **Retention**: Getting users to come back and keep using the product.
- **Revenue**: Turning engaged users into paying customers and growing
  what they pay.
- **Referral**: Getting happy users to bring others, which refills
  acquisition.

Referral is what turns a linear pipe into a loop. It is why the funnel is
a growth system and not a sales report.

### Aha moment and activation

The "aha moment" is when a user first experiences the product's core
value. It is the milestone that separates activated users from
curious-but-unconvinced ones. You cannot scale growth until you can name
it, because every other stage metric hangs off it.

The operating rule: once you identify what drives the aha moment, aim
roughly 30% of your time and effort at getting more users to reach that
moment faster [5]. Activation is a leverage point, not a background
concern.

### Virality as a formula

Referral is not luck. It is math. Viral growth is a product of three
variables [6]:

```
Virality = Payload x Conversion Rate x Frequency
```

Where:

- **Payload** is what you give a user to share or the value they get from
  sharing.
- **Conversion Rate** is how many of the people reached by a share actually
  adopt.
- **Frequency** is how often users share.

Most teams chase more payload and ignore frequency, or celebrate shares
while conversion from those shares stays near zero. The formula makes the
weakest leg obvious, and scaling is cheapest at the weakest leg.

### Full-funnel vs single-stage

A funnel view beats a single-stage view for the same reason the stages
multiply: each stage depends on the quality of what feeds it. Improving
the top by 20% does nothing if the middle is broken. Fix the funnel, not
one stage.

---

## How to Execute

### Step 1: Test product-market fit before you scale

Do not spend on high-tempo growth before the product has must-have
status. Sean Ellis's PMF test asks existing users: "How would you feel if
you could no longer use this product?" The reading is [7]:

- **40% or more say "very disappointed"**: the product has must-have
  status. Ready to scale.
- **25-40%**: tweak the product or the messaging before pushing harder.
- **Below 25%**: not ready for high-tempo growth. Fix the core before you
  pour fuel in.

Scaling a funnel on a product that does not clear this bar spends money to
accelerate a leak. Test first, scale second.

### Step 2: Map the buyer journey, then the stages

Do not start with funnel stages. Start with how the buyer actually moves:
how they discover a problem, how they research, who else gets involved,
what triggers the decision. Map those steps onto stages. A funnel built
from your buyer journey survives contact with customers; one built from
your org chart does not.

### Step 3: Define entrance and exit criteria per stage

Every stage needs a clear definition of what gets someone in and what
gets them out. Without it, "MQL" means whatever each team wants it to
mean, and the funnel numbers are meaningless. Example handoffs:

- **Awareness to consideration**: a visitor signs up for a trial,
  downloads gated content, or requests a demo.
- **Consideration to decision**: a prospect qualifies as an SQL or
  activates a trial past a defined milestone.
- **Decision to customer**: contract signed.

Write these down. Put them in a shared doc. Disputes about lead quality
almost always trace to disagreement about exit criteria.

### Step 4: Assign one metric and goal per stage

Each stage needs at least one metric that tells you whether it is working
and a goal that says what good looks like. Do not reuse one metric across
all stages. Traffic is an acquisition metric. Win rate is a close metric.
They tell you nothing about each other.

A minimal viable funnel measurement system:

| Stage | Primary Metric | Secondary Metric |
|-------|---------------|------------------|
| Acquisition | New reach / visitors | Traffic by channel |
| Activation | Activation rate | Time to aha moment |
| Retention | Retention / NRR | Churn rate |
| Revenue | Closed-won ARR | Average deal size |
| Referral | Virality coefficient | Referred share of new |

For stage baselines, use the ranges in
[Conversion Rate Benchmarks](../data/conversion-rate-benchmarks): visitor
to lead 1.4-2.6% (Ruler Analytics 2024 average 2.6%, top quartile 4.5%)
[8], MQL to SQL 13% (Salesforce 2024) [2], SQL to opportunity 30-48%
(Zeliq 30-50%, First Page Sage 36-48% by industry, Ebsta/Pavilion 2024
47%) [9], opportunity to closed-won 20-35% (Ebsta/Pavilion 2024 21%
average, Zeliq 20-35%) [10]. Read them as a sanity band around your own
trend, not as targets.

### Step 5: Build the growth team, not a lone ranger

Growth is a cross-functional team, not one "growth hacker." The role Sean
Ellis named in 2010 while VP of growth at Dropbox came with a
misconception that persists: growth hacking is not a single silver-bullet
hack; it is a systematic method, a cross-functional team running
data-driven experiments [11]. A lone-ranger "growth hacker" cannot do it
alone [12].

The structure that works [13]:

- **Cross-functional**: product, engineering, data, and marketing sit on
  the team.
- **Reports up**: the team reports to the CEO or an executive sponsor, so
  it can move across function boundaries.
- **Owns one funnel area**: acquisition, activation, or retention. One
  area per team, one clear mandate.

### Step 6: Run the growth hacking cycle at high tempo

The growth loop is a cycle, and the cycle is the system [14]:

```
Analyze data -> gather insight -> generate ideas -> prioritize
experiments -> run tests -> review results -> decide
```

Double down on winning levers. Take occasional "moonshots" past local
maxima so the team does not plateau on the first thing that works.

Speed is the whole point. Leading growth teams run 20-30 experiments a
week [15]. Most fail to produce the hoped-for result, which is why volume
matters: finding wins is a numbers game [15]. Set a minimum tests-per-week
cadence. Start slow if you must, then speed up. A team of three running
one experiment a month will lose to a team running ten a week, because
the small wins they find are the ones that compound.

### Step 7: Instrument, review, iterate

Build one shared dashboard showing stage-by-stage volume and conversion.
Review it in a weekly GTM meeting with marketing, sales, and success.
Treat the review as diagnosis, not status update:

- Which stage conversion dropped?
- What changed: campaign, season, competitive move, product change?
- What is the hypothesis?
- What test will confirm or refute it?

Your first funnel definition will be wrong in places. That is expected.
Treat stage definitions as living documents. Reevaluate them when you
add a channel, change pricing, enter a new segment, or when a conversion
rate stays flat for multiple quarters despite intervention.

---

## Common Mistakes

**Mistake 1: Building a funnel that mirrors the org chart, not the buyer
journey.** If your stages are "Marketing Leads," "Sales Leads," and
"Customers," you built an internal handoff tracker, not a GTM funnel.
Stages should reflect what the buyer is doing.

**Mistake 2: Measuring only the top.** Traffic is the easiest metric and
the most dangerous to optimize for. A post with 10,000 views and zero
trial signups is not a success. Traffic alone does not close deals.

**Mistake 3: No entrance and exit criteria.** Without explicit criteria,
"MQL" means whatever each team wants it to mean. Loose definitions make
the funnel numbers meaningless.

**Mistake 4: Scaling before product-market fit.** Pouring budget into a
funnel for a product that scores under 25% on the PMF test accelerates a
leak. Test fit before you scale [7].

**Mistake 5: Running a lone-ranger growth effort.** A single person
spinning up "growth hacks" cannot move across product, engineering, data,
and marketing. Growth is cross-functional or it stalls [13][12].

**Mistake 6: Prioritizing experiments instead of running enough of
them.** Most experiments fail. A team that treats each failed test as a
setback, rather than as the cost of finding wins, will not sustain the
volume that makes the method work [15].

**Mistake 7: Optimizing one stage in isolation.** Improving acquisition
while activation leaks does not move revenue. The stages multiply; fix
the funnel, not a stage.

**Mistake 8: Treating the funnel as linear.** Buyers loop back and jump
ahead. They enter at the middle because a colleague referred them. Design
for multiple entry points, and let referral refill the top.

---

## Relationship to Other GTM Components

The funnel is the spine. Everything else attaches to it:

- **ICP definition** ([icp-definition](icp-definition)): Your ICP
  determines who enters the top and what counts as fit at each stage.
- **Positioning and messaging**
  ([positioning-and-messaging](positioning-and-messaging)): Your
  messaging moves someone from awareness to consideration. Weak messaging
  shows up as weak top-of-funnel conversion.
- **GTM metrics** ([gtm-metrics](gtm-metrics)): The funnel is the
  structure on which metrics are organized. CAC, LTV, and pipeline
  coverage are derived from funnel data.
- **Conversion Rate Benchmarks**
  ([../data/conversion-rate-benchmarks](../data/conversion-rate-benchmarks)):
  The stage baselines the funnel math needs.
- **GTM channels**
  ([gtm-channels-bullseye](gtm-channels-bullseye)): Each channel
  feeds a different stage. Outbound enters at the middle. SEO and content
  enter at the top.
- **Revenue Operations** ([revenue-operations](revenue-operations)):
  RevOps keeps funnel stage definitions, lead handoffs, and pipeline data
  accurate so the funnel is a number leadership can plan against.

---

## Further Reading

- Sean Ellis and Morgan Brown, "Hacking Growth" (2017). The origin of the
  term and the full growth-hacking method: cross-functional teams,
  high-tempo testing, the aha moment, and the virality formula. Source:
  Hacking Growth, 2017.
- Ruler Analytics, "B2B Website Conversion Rate Benchmarks" (2024).
  Visitor-to-lead baselines.
- Salesforce, "State of Sales 2024" (2024). The MQL-to-SQL 13% survey of
  5,500 sales professionals across 27 countries.
- Zeliq, "Sales Funnel Conversion Rates." SQL-to-opportunity and
  opportunity-to-closed-won ranges.
- thedigitalbloom, "Pipeline Performance Benchmarks" (2025). The wider
  15-21% MQL-to-SQL band.
- Ebsta / Pavilion, "1H 2024 Sales Performance Benchmarks." SQL-to-opp
  and opportunity-to-close averages.
- First Page Sage, "Conversion Rate Benchmarks" (2024). Industry-stage
  ranges.

---

## Footnotes

[1] The growth funnel spans acquisition, activation, retention, revenue,
and referral. Source: Hacking Growth, 2017.

[2] MQL-to-SQL 13%, Salesforce State of Sales 2024, 5,500 sales
professionals, 27 countries.

[3] MQL-to-SQL 15-21%, thedigitalbloom pipeline performance benchmarks,
2025.

[4] A 5% conversion-rate improvement every month compounds to roughly an
80% improvement over a year. Source: Hacking Growth, 2017.

[5] The aha moment and the ~30% effort allocation to reaching it faster.
Source: Hacking Growth, 2017.

[6] Virality = Payload x Conversion Rate x Frequency. Source: Hacking
Growth, 2017.

[7] Sean Ellis PMF survey: 40%+ "very disappointed" = must-have, 25-40% =
tweak, below 25% = not ready. Source: Hacking Growth, 2017.

[8] Visitor-to-lead 2.6% average, 4.5% top quartile, Ruler Analytics
2024; 1.4% SMB, First Page Sage 2024.

[9] SQL-to-opportunity 30-50% Zeliq, 36-48% First Page Sage 2024, 47%
Ebsta/Pavilion 2024.

[10] Opportunity-to-closed-won 20-35% Zeliq, 21% average Ebsta/Pavilion
2024, 31-43% First Page Sage 2024.

[11] Sean Ellis coined "growth hacker" in 2010 while VP of growth at
Dropbox; growth hacking is a systematic method, not a single hack.
Source: Hacking Growth, 2017.

[12] A lone-ranger "growth hacker" cannot do it alone. Source: Hacking
Growth, 2017.

[13] Growth teams are cross-functional (product, engineering, data,
marketing), report to the CEO or executive sponsor, and own one funnel
area. Source: Hacking Growth, 2017.

[14] The growth hacking cycle: analyze data, gather insight, generate
ideas, prioritize experiments, run tests, review results, decide. Double
down on winners, take occasional moonshots. Source: Hacking Growth,
2017.

[15] Leading growth teams run 20-30 experiments a week, and most
experiments fail, so volume matters. Source: Hacking Growth, 2017.
