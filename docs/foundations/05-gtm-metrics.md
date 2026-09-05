---
sidebar_position: 5
title: GTM Metrics
description: "The metrics that matter in go-to-market: CAC, LTV, payback, NRR, magic number, rule of 40, and how to steer the business with them."
status: active
tags: [metrics, cac, ltv, payback, nrr, foundations]
last_updated: 2026-09-04
---

# GTM Metrics

Metrics tell you whether the GTM engine works and where the leaks
are. Without them you cannot see problems, and you cannot know
what to fix. The metrics on this page answer three operating
questions: is the engine working, where does it leak, and should
you spend or cut.

This page is the foundation for [conversion-rate
benchmarks](/docs/data/conversion-rate-benchmarks), [sales-cycle
benchmarks](/docs/data/sales-cycle-benchmarks), and
[outbound-response
rates](/docs/data/outbound-response-rates). Read them together. This
page gives you the definitions. The others give you the ranges to
compare against.

---

## Definition

A GTM metric is a number that measures whether the go-to-market
engine produces revenue efficiently. It is a decision tool, not a
vanity count.

The canonical framing comes from David Skok's SaaS Metrics 2.0
[1]. SaaS is fundamentally different from traditional one-time
software. Revenue arrives in installments over the life of the
customer. That creates two distinct sales you have to make:

1. Acquire the customer.
2. Keep the customer long enough to make the unit economics work.

Skok frames the core question simply: can you make more profit
from your customers than it costs to acquire them? [1] When the
answer is no, no amount of top-line growth saves you. You are
filling a leaky bucket.

That two-sale reality is the reason the metric set exists. The
economic pillars of any SaaS business are acquiring customers (what
it costs, and how efficiently), retaining customers (how many stay,
and how much they expand), and monetizing customers (what the
lifetime value is, and whether it exceeds acquisition cost) [1].

The framework below, adapted from Ben Murray's Five Pillar SaaS
Metrics Framework [2], expands those pillars into five categories
that cover the full business.

### What a metric is not

A dashboard is not metrics. A dashboard with 50 numbers is noise.
Metrics are the 8 to 12 numbers that drive a decision when they
move. Everything else is context, not a metric.

A metric without a named source is a guess, not a benchmark. Every
number on this page either cites a source or is marked as an
operator rule of thumb.

---

## Why the two-sale reality matters

Traditional business metrics (bookings, gross revenue, EBITDA) do
not capture the subscription dynamic. A SaaS company can look
healthy on a P&L and still be fundamentally broken because the cost
to acquire each customer exceeds what that customer will ever pay
back.

This is the leaky-bucket problem [1]. You can grow ARR every
quarter and still go out of business. The growth comes from new
acquisition. The acquisition costs more than the customer returns.
Every new customer deepens the hole.

Ignoring the two-sale reality produces three failure modes:

- **Growth without economics.** You add logos, but CAC payback
  extends past the point of viability. The company grows into
  insolvency.
- **Churn without visibility.** Revenue churn erodes the base
  quietly. NRR drops below 100 percent. You must add new customers
  just to stay flat.
- **Panic at the trough.** Losses widen right after
  product-market fit, leaders cut spend at the worst possible
  moment, and growth stalls. The cash-flow trough is expected, but
  most teams treat it as a crisis [1].

Metrics fix these failures only when you actually use them. They
make the leaks visible early. They make the trough predictable.
They tell you when to spend and when to cut.

---

## Framework: the five pillars

Ben Murray's Five Pillar SaaS Metrics Framework [2] organizes every
metrics decision into five categories. Not every pillar matters at
every stage. Early-stage companies focus on acquisition and
retention. Mature companies need all five.

The five pillars are growth, retention, gross margins, financial
profile, and sales and org efficiency.

### Pillar 1: Growth

Growth metrics answer one question: do we have traction? They track
the top of the funnel and the health of new-customer acquisition.

Key metrics:

- **ARR (Annual Recurring Revenue).** The annualized value of all
  active subscriptions. The single most important recurring-revenue
  number on the P&L. Track new ARR, expansion ARR, and contracted
  ARR separately.
- **New-logo acquisition.** Count of net-new customers. A leading
  indicator of pipeline health. When logos stay flat while ARR
  grows, you sell deeper into existing accounts, which is a
  different motion.
- **Lead Velocity Rate (LVR).** Month-over-month growth in
  qualified leads. A leading indicator. Revenue metrics tell you
  what happened. LVR tells you what is coming. A flat or declining
  LVR is an early warning you can act on before revenue drops.

What to watch: when new-logo acquisition runs strong but expansion
ARR runs weak, you have a product or customer-success problem, not
a sales problem. Track NPS and CSAT alongside new logos.

### Pillar 2: Retention

Retention is why SaaS companies command premium valuations. Land
the customer once, and they pay year after year. Retention metrics
tell you whether that annuity holds.

Key metrics:

- **Gross Revenue Retention (GRR).** Revenue retained from existing
  customers after churn and contraction. The floor. When GRR sits
  below 80 percent, you have a serious problem regardless of how
  many new customers you add.
- **Net Revenue Retention (NRR).** Revenue retained after churn and
  contraction, offset by expansions (upsells, cross-sells, seat
  growth). NRR of 120 percent means existing customers generate 20
  percent more revenue than a year ago. Strong public SaaS
  companies sustain NDR well above 110 percent [3]. Below 100
  percent means you shrink without new sales.
- **Logo churn rate.** Percentage of customers lost in a period.
  Distinct from revenue churn. Low logo churn with high revenue
  churn means your largest customers are the ones leaving.
- **Renewal rate.** For annual or multi-year contracts, the
  percentage of customers who renew. The leading edge of retention.
  When renewals slip, NRR follows.

What to watch: NRR above 110 percent is the minimum viable target
for healthy growth-stage SaaS [3]. Below that, your expansion
motion does not work, and you rely entirely on new acquisition,
which is the most expensive way to grow.

### Pillar 3: Gross margins

Gross margin measures how efficiently you deliver the product. SaaS
companies should run in the 70 to 85 percent range. Below that, a
delivery-cost problem caps valuation and limits reinvestment.

Key metrics:

- **Gross margin.** Revenue minus cost of goods sold, as a
  percentage. For SaaS, COGS includes hosting, data, customer
  support, and third-party licenses tied to serving the customer.
  Not sales or marketing.
- **Recurring gross margin.** Gross margin on the recurring stream
  specifically. It should exceed blended gross margin when services
  drag you down [2].
- **Revenue mix.** The proportion of recurring versus services and
  consulting. A high services mix depresses valuation and margins.

What to watch: low gross margin is structural. Every dollar of
acquisition spend dilutes before it reaches the bottom line. Fix it
before scaling.

### Pillar 4: Financial profile

This pillar tracks the balance between growth and profitability
[2].

Key metrics:

- **Rule of 40.** Revenue growth rate plus profit margin (EBITDA
  or free cash flow). A score above 40 is the healthy benchmark. A
  company growing 30 percent with a 10 percent margin scores 40. A
  company growing 50 percent with a negative 10 percent margin also
  scores 40. It tolerates loss in exchange for growth only up to a
  point.
- **Burn Multiple.** Net burn divided by net-new ARR. How much you
  spend to generate each dollar of new ARR. Under 1.5x is
  efficient. Above 2x is concerning. Above 3x is a red flag.
- **SaaS Cash Flow Trough.** The period where upfront acquisition
  costs exceed incoming revenue, creating a cash dip [1]. Every
  SaaS company goes through it. It deepens as growth accelerates.
  Understanding it prevents panic when losses widen after
  product-market fit.

What to watch: the cash-flow trough is the most misunderstood
phenomenon in SaaS finance [1]. As soon as the product shows
traction, investors expect losses to narrow. They will not:
accelerating growth requires more spend, which deepens the trough
before it recovers. Plan for it. Raise the cash. Do not hit the
brakes at the wrong moment.

### Pillar 5: Sales and org efficiency

These metrics measure how efficiently the GTM engine converts spend
into revenue. They are the core GTM efficiency metrics.

Key metrics:

- **CAC (Customer Acquisition Cost).** Total sales and marketing
  spend divided by new customers acquired in a period. The single
  most important GTM efficiency number. Track fully loaded CAC
  (all sales and marketing costs, including tools, compensation,
  and overhead), not just ad spend.
- **CAC Payback Period.** Months to recover upfront CAC from
  gross-margin contribution. CAC divided by (ARPA x gross margin
  percent). Payback under 12 months is excellent. 12 to 18 months
  is acceptable for growth stage. Above 18 months is a warning [4].
- **LTV:CAC ratio.** Lifetime value divided by acquisition cost.
  The canonical benchmark is above 3:1 as the minimum viable [1].
  The best SaaS businesses run 5:1 to 8:1. Below 3:1, you likely
  lose money on each customer. Below 1:1, stop scaling until this
  is fixed.
- **Magic Number.** Near-term sales-efficiency metric. (Quarterly
  ARR growth x 4) divided by prior-quarter sales and marketing
  spend. Above 0.75 is healthy. Above 1.0 is excellent. Below 0.5
  means you spend faster than you grow [3].
- **ROSE.** Recurring revenue per dollar of total employee and
  contractor investment [2]. Ben Murray's preferred efficiency
  metric. It accounts for contractors and the full org cost. You
  cannot scale without ROSE improving over time.

What to watch: LTV:CAC and CAC payback are long-term viability
metrics. Magic Number and ROSE are near-term efficiency metrics.
Use both. A company can hold great LTV:CAC but a terrible Magic
Number in a given quarter when spend runs lumpy, and the reverse.

---

## How to calculate the core metrics

### CAC

Total sales and marketing costs in a period, divided by new
customers in the same period.

Include: sales salaries and commissions, marketing salaries, ad
spend, marketing tools, sales tools, SDR costs, and a portion of
GTM leadership overhead. Exclude: product development, customer
success (post-sale), and general overhead.

Track fully loaded CAC by channel: outbound CAC, inbound CAC,
partner CAC, paid CAC. This tells you which channels run
efficiently and which burn cash.

### LTV (Lifetime Value)

Simple version: average revenue per account (ARPA) x gross margin
percent x average customer lifetime in months.

Rigorous version that accounts for churn: ARPA x gross margin
percent, divided by monthly churn rate.

Example: ARPA $2,000/month, gross margin 75 percent, churn 2
percent per month. LTV = $2,000 x 0.75 / 0.02 = $75,000.

LTV is only as good as the churn assumption. When churn improves,
LTV understates. When churn worsens, LTV overstates. Track churn by
cohort, not just the aggregate.

### LTV:CAC ratio

LTV divided by CAC. A ratio of 3:1 or higher is the minimum viable
benchmark [1]. Below 3:1, you are likely unprofitable per customer
and should not scale acquisition. The 3:1 threshold comes from
Skok's analysis of hundreds of SaaS businesses and has held across
public and private companies.

5:1 or higher is excellent: you hold room to spend more on
acquisition to accelerate growth.

Below 1:1 is a business emergency. You spend more to acquire
customers than they ever return. Stop scaling. Fix pricing, churn,
or acquisition efficiency.

### CAC payback period

CAC divided by (ARPA x gross margin percent). The result is months
to recover the acquisition cost from gross margin.

Example: CAC $10,000, ARPA $2,000/month, gross margin 75 percent.
Payback = $10,000 / ($2,000 x 0.75) = $10,000 / $1,500 = 6.7
months. Excellent.

Payback above 18 months signals acquisition too expensive for the
price point, or pricing too low for the cost of acquisition. Median
CAC payback for SaaS drifted from 10 to 14 months up to 12 to 18
months in 2025-2026 as acquisition costs rose [4].

### Net Revenue Retention (NRR)

Starting revenue from existing customers plus expansions, minus
churn and contractions, divided by starting revenue.

NRR above 100 percent means existing customers grow faster than
they leave. NRR above 110 percent is the minimum target for
healthy growth-stage SaaS. Strong public SaaS companies sustain NDR
above 110 percent [3].

NRR below 100 percent is a crisis. You lose revenue from the
existing base and must add new customers just to stay flat. No
amount of new acquisition compensates long term.

### Magic number

(Quarter-over-quarter ARR growth x 4) divided by prior-quarter
sales and marketing spend.

It annualizes the ARR growth and divides by the spend that produced
it. Above 0.75 means each dollar of S&M spend produces at least
$0.75 of annualized ARR. Above 1.0 is exceptional. Below 0.5 means
spend does not generate enough incremental ARR to justify
investment [3].

Common confusion: Magic Number is not LTV:CAC. Magic Number
measures near-term spend efficiency this quarter. LTV:CAC measures
long-term unit economics over a customer's lifetime. Both matter.

### Rule of 40

Revenue growth rate (year-over-year) plus profit margin (EBITDA or
free cash flow margin).

A score above 40 is the healthy benchmark. Growth plus margin
balances the two: fast growers can tolerate losses; slow growers
must be profitable.

Examples: 30 percent growth + 10 percent margin = 40. 50 percent
growth + (negative 10 percent) margin = 40. 15 percent growth + 25
percent margin = 40.

It becomes relevant above $5M to $10M ARR. Before that, survival
and product-market fit matter more.

---

## How to use metrics to steer the business

Metrics are not decoration. They are decision tools.

### Set the metric stack by stage

**Pre-product-market fit ($0 to $1M ARR).** Track burn rate, MRR
growth, activation rate, and qualitative feedback. Do not obsess
over LTV:CAC yet. You do not hold enough data. Focus on whether
people want the product and will pay for it.

**Early traction ($1M to $5M ARR).** Add CAC, CAC payback, and
churn. You spend on acquisition now, so you must know whether it
works. Track pipeline by source. When CAC payback exceeds 18
months, fix it before adding spend.

**Growth stage ($5M to $25M ARR).** All five pillars. Full metric
stack. NRR becomes critical: expansion revenue should contribute
meaningfully. When NRR sits below 110 percent, fix the retention
and expansion motion before scaling acquisition further. Track
Magic Number every quarter. When it drops below 0.5, cut spend or
fix conversion [3].

**Scale stage ($25M+ ARR).** Full stack with segmentation. Break
metrics down by segment, channel, and cohort. Strong public SaaS
companies run NDR above 120 percent [3]. Rule of 40 above 40. CAC
payback under 12 months for efficient growth.

### Metric stack one-pager

Paste this into your operating doc. One owner per line. Review on
cadence.

```
GTM METRIC STACK (owner: CFO / RevOps)

WEEKLY (Monday review, 15 min):
  Pipeline created ......... owner: Marketing .... flag when down 2 wks
  Lead velocity rate ....... owner: Marketing .... flag when flat/declining
  New logos ................ owner: Sales ........ flag when below plan
  Burn rate ................ owner: Finance ...... flag when runway < 12 mo

MONTHLY (first Friday, 60 min):
  ARR / MRR growth ......... owner: Finance ...... flag when below plan
  Churn (logo + revenue) ... owner: CS ........... flag logo > 2%/mo
  NRR ...................... owner: CS ........... flag when below 110%
  CAC (blended + channel) .. owner: RevOps ....... flag payback > 18 mo
  CAC payback .............. owner: RevOps ....... flag when extending 2 mos

QUARTERLY (board review):
  Magic Number ............. owner: Finance ...... flag when below 0.75
  LTV:CAC .................. owner: Finance ...... flag when below 3:1
  Rule of 40 ............... owner: Finance ...... flag when below 40
  Gross margin trend ....... owner: Finance ...... flag when declining
  Burn multiple ............ owner: Finance ...... flag when above 1.5x
```

### Build a metrics cadence

- **Weekly.** Pipeline metrics, lead velocity, new logos, burn
  rate. Fast-moving numbers that tell you whether this week's
  activity stays on track.
- **Monthly.** ARR, churn, NRR, CAC, CAC payback. Slower movers
  that tell you whether trends stay healthy.
- **Quarterly.** Magic Number, LTV:CAC, Rule of 40, gross-margin
  trends. Strategic metrics. Review with leadership and the board.

### Know what to do when metrics deteriorate

- **LTV:CAC dropping.** Either CAC rises or LTV falls. When CAC
  rises, audit channels. When LTV falls, fix the product or the
  customer-success motion.
- **CAC payback extending.** CAC rising, ARPA falling, or gross
  margin dropping. Diagnose which input moved, then fix that input.
- **NRR below 100 percent.** The most dangerous metric. The
  installed base shrinks. Fix churn and expansion before adding
  acquisition spend. No exceptions.
- **Magic Number below 0.5.** Spend runs too high for the growth it
  produces. Cut spend or fix channel conversion.
- **Burn Multiple above 2x.** Burning more than $2 for every $1 of
  new ARR. Unsustainable for growth stage. Growth runs too slow for
  spend, or spend runs too high for growth. Adjust.

---

## Stage-variant: how rigor changes

The right level of metric discipline depends on how much data you
hold. Do not run an enterprise dashboard on a seed-stage company.
Do not run a scale-up on founder instinct.

**Seed (pre-product-market fit).** You hold no cohort. Track burn,
MRR growth, and activation. Write down the metrics you will care
about later, but do not build the full stack. You are still
learning whether the product has a market.

**Series A-B.** You hold a cohort and real win/loss data. Build the
five pillars. Connect CAC by channel to your ICP. Review monthly.
The metrics stabilize into a repeatable scoreboard for the board
and the team.

**Scale.** Metrics fragment by segment and motion. A single blended
CAC hides a $500 channel and a $5,000 channel. Split every metric
by segment, channel, and motion. Different ACV tiers anchor on
different economics. The blended number becomes a management
summary, not a decision input.

---

## Common mistakes

**Mistake 1: Tracking everything and acting on nothing.** A
dashboard with 50 numbers is useless. Pick the 8 to 12 metrics that
drive decisions. Everything else is noise.

**Mistake 2: Using blended CAC instead of channel CAC.** Blended
CAC hides that one channel costs $500 and another costs $5,000.
When you scale a channel with a 24-month payback, you run out of
cash even when blended CAC looks fine. Split by channel.

**Mistake 3: Calculating LTV with stale churn data.** LTV is only
as accurate as the churn assumption. Use the most recent cohort
churn, not the three-year average. Stale assumptions over- or
understate unit economics by wide margins.

**Mistake 4: Confusing logo churn with revenue churn.** Low logo
churn plus high revenue churn spells concentration risk. A few
large accounts drive most revenue, and losing one is catastrophic.
Track both.

**Mistake 5: Ignoring the cash-flow trough.** [1] When growth
accelerates, losses widen before they narrow. It is expected. It is
not a sign of failure. Do not cut spend at the worst possible
moment. Plan the capital and communicate the trough to the board.

**Mistake 6: Using Magic Number as a long-term metric.** It swings
quarter to quarter on deal timing, seasonality, and spend timing.
Use it for the current quarter's efficiency. Use LTV:CAC for
long-term economics.

**Mistake 7: Not tracking expansion ARR separately from new
ARR.** When growth comes entirely from new logos, you run a pure
acquisition business, expensive and hard to scale. When growth comes
from expansion, you run a land-and-expand business, more efficient
and higher margin. Track the split.

**Mistake 8: Ignoring the Rule of 40 until investors ask for
it.** It is a management tool, not a fundraising number. Track it
from $5M ARR. When you grow fast but score below 40, you either
grow slower than you think or burn more than you need.

**Mistake 9: Using unnamed benchmark ranges.** A range without a
named source is a guess. Anchor every benchmark to a named study or
mark it as an operator rule of thumb.

---

## Benchmarks (2024-2026)

Benchmarks vary by segment, stage, and GTM model. These are
aggregate references, not targets to hit blindly. Every range
carries a named source.

| Metric | Benchmark range | Healthy target |
|---|---|---|
| CAC payback | 12-18 months, median 2025-2026 [4] | Under 12 months |
| LTV:CAC | 3:1 to 8:1 | Above 3:1 minimum, above 5:1 excellent [1] |
| Magic Number | 0.5 to 1.2 | Above 0.75 [3] |
| NRR / NDR | 110%+ for strong public SaaS [3] | Above 110% |
| Gross margin (SaaS) | 70-85% | Above 75% |
| Rule of 40 | Variable by stage | Above 40 from $5M+ ARR |
| Burn multiple | Under 1.5x efficient | Under 1.5x |
| Trial-to-paid | 10-20% trial, 2-5% freemium [4] | Above 15% trial |

For conversion-rate benchmarks by funnel stage, see
[conversion-rate
benchmarks](/docs/data/conversion-rate-benchmarks). For outbound
response and meeting-booking rates, see [outbound-response
rates](/docs/data/outbound-response-rates). For sales cycle length
by deal size, see [sales-cycle
benchmarks](/docs/data/sales-cycle-benchmarks).

---

## Related pages

- [GTM strategy
  framework](/docs/foundations/gtm-strategy-framework): the strategy
  layer that metrics measure.
- [Pricing as GTM](/docs/data/pricing-as-gtm): pricing drives ARPA,
  LTV, and CAC payback.
- [GTM funnel](/docs/foundations/gtm-funnel): the funnel model that
  CAC and conversion metrics feed into.
- [Revenue
  operations](/docs/foundations/revenue-operations): the discipline
  that keeps metrics accurate.
- [Agentic GTM
  overview](/docs/agentic/agentic-gtm-overview): how AI changes
  acquisition cost and efficiency metrics.
- [Conversion-rate
  benchmarks](/docs/data/conversion-rate-benchmarks): funnel
  conversion data.
- [Outbound-response
  rates](/docs/data/outbound-response-rates): channel-level
  acquisition efficiency data.

---

## Further reading

- [David Skok, SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/).
  The canonical reference on LTV:CAC, CAC payback, and the SaaS
  cash-flow trough. Co-authored with Ron Gill (NetSuite CFO) and
  Brad Coffey (HubSpot VP Strategy). Required reading.
- [Ben Murray, Five Pillar Metrics
  Framework](https://www.thesaascfo.com/downloads/five-pillar-metrics-framework/).
  A structured framework organizing metrics into growth, retention,
  margins, financial profile, and sales and org efficiency.
- [Bessemer Cloud
  Index](https://www.bvp.com/atlas/bessemer-cloud-index).
  Public-market benchmarks for cloud and SaaS. Magic Number, NRR,
  and gross-margin anchors. [3]
- [Marketing Mary, SaaS Marketing Strategy
  2026](https://www.marketingmary.ai/blog/saas-marketing-strategy).
  Stage-specific CAC benchmarks and GTM-model selection guidance.
  [4]
- [Gainsight, 35-Metric Guide for SaaS
  Teams](https://www.gainsight.com/essential-guide/the-essential-guide-to-business-metrics/).
  A broad reference covering sales, marketing, and company-level
  SaaS metrics.

---

## Sources

- [1] David Skok, SaaS Metrics 2.0 (For Entrepreneurs), 2013,
  updated.
  https://www.forentrepreneurs.com/saas-metrics-2/. Registry #313.
- [2] Ben Murray, Five Pillar SaaS Metrics Framework (The SaaS
  CFO), 2024.
  https://www.thesaascfo.com/downloads/five-pillar-metrics-framework/.
  Registry #314.
- [3] Bessemer Cloud Index (BVP), 2026.
  https://www.bvp.com/atlas/bessemer-cloud-index. Registry #315.
- [4] Marketing Mary, SaaS Marketing Strategy 2026.
  https://www.marketingmary.ai/blog/saas-marketing-strategy.
  Registry #316.
