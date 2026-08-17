---
sidebar_position: 5
title: GTM Metrics
description: The metrics that matter in go-to-market — CAC, LTV, payback, NRR, rule of 40, and how to use them to steer the business.
---

# GTM Metrics

Metrics are the cockpit instruments for a SaaS business. Without them, you're flying blind — you might be up in the air, but you don't know where you're headed or whether you're about to hit turbulence. The metrics in this page tell you whether your GTM engine is working, where the leaks are, and whether you should hit the accelerator or the brakes.

This page is the foundation for [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks), [Sales Cycle Benchmarks](../data/03-sales-cycle-benchmarks.md), and the [Outbound Response Rates](../data/02-outbound-response-rates.md) data pages. Read them together.

---

## Why GTM metrics matter

SaaS and subscription businesses are fundamentally different from traditional software companies. Revenue comes in installments over the life of the customer, not in a single transaction. That creates two distinct sales you have to make:

1. Acquiring the customer.
2. Keeping the customer so they pay you long enough to make the unit economics work.

Traditional business metrics — bookings, gross revenue, EBITDA — don't capture this dynamic. A SaaS company can look healthy on a P&L and still be fundamentally broken because the cost to acquire each customer exceeds what they'll ever pay back.

David Skok's SaaS Metrics 2.0, the canonical reference on this topic, frames the question simply: **can you make more profit from your customers than it costs to acquire them?** If the answer is no, no amount of top-line growth will save you. You are filling a leaky bucket.

The three economic pillars of any SaaS business are:

- **Acquiring customers** — what does it cost, and how efficiently?
- **Retaining customers** — how many stay, and how much revenue do they expand?
- **Monetizing customers** — what is the lifetime value, and does it exceed acquisition cost?

Metrics organize around these three pillars plus two more that reflect the full business. The framework below, adapted from Ben Murray's Five Pillar SaaS Metrics Framework, gives you a complete lens.

---

## The Five Pillar framework

The Five Pillar framework organizes every metrics decision into five categories. Not every pillar matters at every stage — early-stage companies focus on acquisition and retention. Mature companies need all five.

### Pillar 1 — Growth

Growth metrics answer the question: do we have traction? They track the top of the funnel and the health of new customer acquisition.

**Key metrics:**

- **ARR (Annual Recurring Revenue)** — the annualized value of all active subscriptions. This is the single most important number on the P&L for a SaaS company. Track new ARR, expansion ARR, and contracted ARR separately.
- **New logo acquisition** — count of net new customers. A leading indicator of pipeline health. If logos are flat while ARR grows, you're selling deeper into existing accounts, which is a different motion.
- **Lead Velocity Rate (LVR)** — month-over-month growth in qualified leads. A leading indicator. Revenue metrics tell you what happened; LVR tells you what's coming. A flat or declining LVR is an early warning you can act on before revenue hits.

**What to watch:** If new logo acquisition is strong but expansion ARR is weak, you have a product or customer success problem, not a sales problem. Track NPS and CSAT alongside new logos.

### Pillar 2 — Retention

Retention is why SaaS companies command premium valuations. Land the customer once and they pay you year after year. Retention metrics tell you whether that annuity is holding.

**Key metrics:**

- **Gross Revenue Retention (GRR)** — revenue retained from existing customers after accounting for churn and contraction, expressed as a percentage. This is the floor. If GRR is below 80%, you have a serious problem regardless of how many new customers you add.
- **Net Revenue Retention (NRR)** — revenue retained after churn and contraction, then offset by expansions (upsells, cross-sells, seat growth). An NRR of 120% means your existing customers are generating 20% more revenue than a year ago. Top quartile SaaS companies achieve 130-150%. Below 100% means you are shrinking without new sales — you would need to add more new customers just to stay flat.
- **Logo churn rate** — percentage of customers lost in a period. Distinct from revenue churn. A company can have low logo churn but high revenue churn if its largest customers are leaving.
- **Renewal rate** — for companies on annual or multi-year contracts, the percentage of customers who renew at contract expiration. This is the leading edge of retention. If renewals slip, NRR will follow.

**What to watch:** NRR above 110% is the minimum viable benchmark for a healthy growth-stage SaaS. Below that, your expansion motion isn't working, and you're relying entirely on new acquisition to grow — which is the most expensive way to do it.

### Pillar 3 — Gross Margins

Gross margin measures how efficiently you deliver the product. SaaS companies should have gross margins in the 70-85% range. Below that, you have a delivery cost problem that will cap your valuation and your ability to reinvest.

**Key metrics:**

- **Gross margin** — revenue minus cost of goods sold, as a percentage. For SaaS, COGS includes hosting, data, customer support, and third-party license costs directly tied to serving the customer. Not sales or marketing.
- **Recurring gross margin** — gross margin on the recurring revenue stream specifically. Should be higher than blended gross margin if services drag you down.
- **Revenue mix** — the proportion of recurring revenue vs. services/consulting. A high services mix depresses valuation and margins. Track it.

**What to watch:** Low gross margin is a structural problem. It means every dollar you spend on acquisition is diluted before it reaches the bottom line. Fix it before you scale acquisition.

### Pillar 4 — Financial Profile

This pillar tracks the overall financial health and sustainability of the business — the balance between growth and profitability.

**Key metrics:**

- **Rule of 40** — revenue growth rate plus profit margin (typically EBITDA or free cash flow). A score above 40 is the benchmark for a healthy SaaS company. A company growing 30% with a 10% margin scores 40. A company growing 50% with a -10% margin also scores 40. The rule of 40 tolerates loss in exchange for growth, but only up to a point.
- **Burn Multiple** — net burn divided by net new ARR. Measures how much you're spending to generate each dollar of new ARR. A burn multiple under 1.5x is efficient. Above 2x is concerning. Above 3x is a red flag — you're spending too much for the growth you're getting.
- **SaaS Cash Flow Trough** — the period where upfront acquisition costs exceed incoming revenue, creating a cash dip. Every SaaS company goes through this. The trough deepens as you accelerate growth. Understanding it prevents panic when losses widen right after product-market fit is confirmed.

**What to watch:** The cash flow trough is the most misunderstood phenomenon in SaaS finance. As soon as the product shows traction, investors expect losses to narrow. They won't — accelerating growth requires more spend, which deepens the trough before it recovers. This is normal. Plan for it. Raise the cash. Don't hit the brakes at the wrong moment.

### Pillar 5 — Sales and Org Efficiency

These metrics measure how efficiently your go-to-market engine converts spend into revenue. They are the core GTM efficiency metrics.

**Key metrics:**

- **CAC (Customer Acquisition Cost)** — total sales and marketing spend divided by number of new customers acquired in a period. This is the single most important GTM efficiency number. CAC is like debt — you pay it now and recover it over time. Track fully loaded CAC (all sales and marketing costs, including tools, compensation, and overhead) not just ad spend.
- **CAC Payback Period** — the number of months to recover the upfront CAC from gross margin contributions. The formula: CAC ÷ (ARPA × gross margin %). A payback under 12 months is excellent. 12-18 months is acceptable for growth-stage. Above 18 months is a warning — you're either inefficient at acquisition or underpriced relative to the market.
- **LTV:CAC ratio** — lifetime value divided by customer acquisition cost. The canonical benchmark comes from David Skok: a ratio above 3:1 is the minimum for a viable SaaS business. The best SaaS businesses run 5:1 to 8:1. Below 3:1, you are likely losing money on each customer. Below 1:1, stop scaling until this is fixed.
- **Magic Number** — a near-term sales efficiency metric. Formula: (quarterly ARR growth × 4) ÷ prior quarter sales and marketing spend. A magic number above 0.75 is healthy. Above 1.0 is excellent. Below 0.5 means you're spending faster than you're growing — cut spend or fix conversion.
- **ROSE Metric** — recurring revenue generated per dollar of total employee and contractor investment. Ben Murray's preferred efficiency metric. Unlike revenue per FTE, it accounts for contractors and the full cost of the organization. You can't scale without ROSE improving over time.

**What to watch:** LTV:CAC and CAC payback are long-term viability metrics. Magic Number and ROSE are near-term efficiency metrics. Use both. A company can have great LTV:CAC but a terrible Magic Number in a given quarter if spend is lumpy — and vice versa.

---

## How to calculate the core metrics

### CAC

Total sales and marketing costs in a period ÷ number of new customers acquired in that same period.

Include: sales salaries and commissions, marketing salaries, ad spend, marketing tools, sales tools, SDR costs, and a portion of GTM leadership overhead. Do not include: product development, customer success (post-sale), or general overhead.

Track fully loaded CAC by channel where possible — outbound CAC, inbound CAC, partner CAC, paid CAC. This tells you which channels are efficient and which are burning cash.

### LTV (Lifetime Value)

The simple version: average revenue per account (ARPA) × gross margin % × average customer lifetime in months.

The more rigorous version accounts for churn: ARPA × gross margin % ÷ monthly churn rate. This gives you the expected lifetime value of a customer given your current retention rate.

Example: if ARPA is $2,000/month, gross margin is 75%, and monthly churn is 2%, LTV = $2,000 × 0.75 ÷ 0.02 = $75,000.

**Important:** LTV is only as good as your churn assumption. If churn is improving (which it should be as the product matures), LTV is understated. If churn is worsening, LTV is overstated. Track churn cohorts, not just the aggregate.

### LTV:CAC Ratio

LTV ÷ CAC.

A ratio of 3:1 or higher is the minimum viable benchmark. Below 3:1, you're likely unprofitable on a per-customer basis and should not be scaling acquisition. The 3:1 threshold comes from David Skok's analysis of hundreds of SaaS businesses and has held up across public and private companies.

A ratio of 5:1 or higher is excellent — you have room to spend more on acquisition to accelerate growth.

A ratio below 1:1 is a business emergency. You are spending more to acquire customers than they will ever return. Stop scaling. Fix pricing, fix churn, or fix acquisition efficiency.

### CAC Payback Period

CAC ÷ (ARPA × gross margin %). The result is the number of months to recover the acquisition cost from gross margin.

Example: CAC is $10,000, ARPA is $2,000/month, gross margin is 75%. Payback = $10,000 ÷ ($2,000 × 0.75) = $10,000 ÷ $1,500 = 6.7 months. Excellent.

Payback above 18 months signals that either your acquisition is too expensive for the price point, or your pricing is too low for the cost of acquisition. In 2025-2026 benchmarks, median CAC payback for SaaS has drifted from 10-14 months up to 12-18 months as acquisition costs have risen. Anything above 18 months needs attention.

### Net Revenue Retention (NRR)

Starting revenue from existing customers + expansions - churn - contractions, divided by starting revenue, expressed as a percentage.

NRR above 100% means existing customers are growing faster than they're leaving. NRR above 110% is the minimum target for a healthy growth-stage SaaS. Top quartile companies achieve 130-150%.

NRR below 100% is a crisis — you are losing revenue from the existing base and must add new customers just to stay flat. No amount of new acquisition can compensate long-term.

### Magic Number

(Quarter-over-quarter ARR growth × 4) ÷ prior quarter sales and marketing spend.

The formula annualizes the ARR growth and divides by the spend that produced it. A magic number above 0.75 means each dollar of S&M spend is producing at least $0.75 of annualized ARR. Above 1.0 is exceptional. Below 0.5 means your S&M spend is not generating enough incremental ARR to justify the investment.

**Common confusion:** Magic Number is not the same as LTV:CAC. Magic Number measures near-term efficiency — are you spending wisely this quarter? LTV:CAC measures long-term unit economics — will this customer be profitable over their lifetime? Both matter.

### Rule of 40

Revenue growth rate (year-over-year) + profit margin (EBITDA or free cash flow margin).

A score above 40 is the benchmark for a healthy SaaS business. The rule of 40 balances growth and profitability — a company growing fast can tolerate losses, and a company growing slowly must be profitable.

Example: 30% growth + 10% margin = 40. 50% growth + (-10%) margin = 40. 15% growth + 25% margin = 40.

**When to use it:** The Rule of 40 becomes relevant once you're above $5-10M ARR. Before that, survival and product-market fit are more important than the rule of 40.

---

## How to use GTM metrics to steer the business

Metrics are not decoration. They are decision tools. Here's how to use them.

### Set your metric stack by stage

**Pre-product-market fit (0-$1M ARR):** Track burn rate, MRR growth, activation rate, and qualitative feedback. Don't obsess over LTV:CAC yet — you don't have enough data. Focus on whether people want the product and will pay for it.

**Early traction ($1M-$5M ARR):** Add CAC, CAC payback, and churn. You're spending on acquisition now, so you need to know if it's working. Track pipeline by source. If CAC payback is above 18 months, fix it before adding more spend.

**Growth stage ($5M-$25M ARR):** All five pillars. Full metric stack. NRR becomes critical — at this stage, expansion revenue should be contributing meaningfully. If NRR is below 110%, fix the retention and expansion motion before scaling acquisition further. Track Magic Number every quarter. If it drops below 0.5, cut spend or fix conversion.

**Scale stage ($25M+ ARR):** Full stack with segmentation. Break metrics down by segment, channel, and cohort. NDR should be above 120% for a best-in-class company. Rule of 40 should be above 40. CAC payback should be under 12 months for efficient growth.

### Build a metrics cadence

- **Weekly:** Pipeline metrics, lead velocity, new logos, burn rate. These are the fast-moving numbers that tell you if the current week's activity is on track.
- **Monthly:** ARR, churn, NRR, CAC, CAC payback. These move slower but tell you if the trends are healthy.
- **Quarterly:** Magic Number, LTV:CAC, Rule of 40, gross margin trends. These are strategic metrics. Review with the leadership team and board.

### Know what to do when metrics deteriorate

- **LTV:CAC dropping:** Either CAC is rising (acquisition is getting more expensive) or LTV is falling (churn is increasing or ARPA is compressing). Diagnose which. If CAC is rising, audit your channels — you may be over-reliant on an expensive channel. If LTV is falling, fix the product or the customer success motion.
- **CAC payback extending:** Either CAC is rising or ARPA is falling. Same diagnosis. Also check your gross margin — if it's dropping, payback extends even if everything else is stable.
- **NRR below 100%:** This is the most dangerous metric. It means your installed base is shrinking. You need to sell more new customers just to stay flat. Fix churn and expansion before adding acquisition spend. No exceptions.
- **Magic Number below 0.5:** You're spending too much for the growth you're getting. Either cut spend or fix the conversion rate of whatever channel is producing the spend.
- **Burn Multiple above 2x:** You're burning more than $2 for every $1 of new ARR. This is unsustainable for growth-stage companies. Either growth is too slow for your spend level, or spend is too high for your growth level. Adjust.

---

## Common mistakes

**Mistake 1: Tracking everything and acting on nothing.**

A metrics dashboard with 50 numbers is useless. Pick the 8-12 metrics that actually drive decisions. Everything else is noise. The Five Pillar framework gives you a clean structure — use it.

**Mistake 2: Using blended CAC instead of channel-level CAC.**

Blended CAC tells you the average cost to acquire a customer across all channels. It hides the fact that one channel might cost $500 and another might cost $5,000. Track CAC by channel. If you're scaling a channel with $5,000 CAC and a 24-month payback, you're going to run out of cash even if blended CAC looks fine.

**Mistake 3: Calculating LTV with stale churn data.**

LTV is only as accurate as your churn assumption. If your product is improving and churn is dropping, your LTV based on historical churn is understated — you're underestimating your unit economics. If churn is rising, you're overestimating. Use the most recent cohort churn, not the three-year average.

**Mistake 4: Confusing logo churn with revenue churn.**

You can have low logo churn (few customers leaving) and high revenue churn (the large customers who leave take a lot of revenue with them). Track both. If revenue churn is high but logo churn is low, you have a concentration risk — a few large accounts drive most of your revenue, and losing one is catastrophic.

**Mistake 5: Ignoring the cash flow trough.**

When a SaaS company hits product-market fit and accelerates growth, losses often widen before they narrow. This is the trough described by Skok, Ron Gill, and Brad Coffey. It's normal. It's not a sign that the business is failing. Don't panic and cut spend at the worst possible moment. Understand the trough, plan for the capital you'll need, and communicate it clearly to your board.

**Mistake 6: Using Magic Number as a long-term metric.**

Magic Number is a near-term efficiency measure. It can swing quarter to quarter based on timing of deals, seasonality, and spend timing. Use it to gauge the current quarter's efficiency. Don't use it as a substitute for LTV:CAC, which captures the long-term economics.

**Mistake 7: Not tracking expansion ARR separately from new ARR.**

If all your growth is coming from new logos, you have a pure acquisition business — expensive and hard to scale. If growth is coming from expansion, you have a land-and-expand business — more efficient and higher margin. Track these separately. The split tells you whether your GTM model is working.

**Mistake 8: Ignoring the Rule of 40 until investors ask for it.**

The Rule of 40 is not just a fundraising metric. It's a management tool. Track it from $5M ARR onward. If you're growing fast but the Rule of 40 is below 40, you're either growing slower than you think or burning more than you need to. Know which.

---

## Benchmarks (2024-2026)

Benchmarks vary by segment, stage, and GTM model. The numbers below are aggregate references — not targets to hit blindly.

| Metric | Benchmark range | Healthy target |
|---|---|---|
| CAC Payback | 12-18 months (median, 2025-2026) | Under 12 months |
| LTV:CAC | 3:1 to 5:1 | Above 3:1 (minimum), above 5:1 (excellent) |
| Magic Number | 0.5 to 1.2 | Above 0.75 |
| NRR | 105-115% (median) | Above 110% |
| Gross Margin (SaaS) | 70-85% | Above 75% |
| Rule of 40 | Variable by stage | Above 40 (from $5M+ ARR) |
| Burn Multiple | Under 1.5x (efficient) | Under 1.5x |
| Trial-to-paid conversion | 10-20% (trial), 2-5% (freemium) | Above 15% (trial) |

Sources: David Skok SaaS Metrics 2.0, OpenView SaaS Benchmarks 2024, Bessemer Cloud Index, Marketing Mary SaaS Marketing Strategy 2026.

For conversion rate benchmarks by funnel stage, see [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks). For outbound response rates and meeting booking rates, see [Outbound Response Rates](../data/02-outbound-response-rates.md). For sales cycle length benchmarks by deal size, see [Sales Cycle Benchmarks](../data/03-sales-cycle-benchmarks.md).

---

## Further reading

- **David Skok, SaaS Metrics 2.0** — https://www.forentrepreneurs.com/saas-metrics-2/ — the canonical reference on LTV:CAC, CAC payback, and the SaaS cash flow trough. Co-authored with Ron Gill (NetSuite CFO) and Brad Coffey (HubSpot VP Strategy). Required reading.
- **Ben Murray, Five Pillar SaaS Metrics Framework** — https://www.thesaascfo.com/scaling-with-confidence-the-ultimate-saas-metrics-playbook/ — a structured framework organizing metrics into Growth, Retention, Margins, Financial Profile, and Sales & Org Efficiency.
- **OpenView SaaS Benchmarks** — https://openviewpartners.com/product-benchmarks — annual benchmark data on SaaS metrics, PLG adoption, and retention. Used widely in the industry.
- **Bessemer Cloud Index** — https://www.bvp.com/atlas/bessemer-cloud-index — public market benchmarks for cloud/SaaS companies. Magic Number and NRR benchmarks sourced from here.
- **Marketing Mary, SaaS Marketing Strategy 2026** — https://www.marketingmary.ai/blog/saas-marketing-strategy — stage-specific CAC benchmarks, GTM model selection guidance, and marketing metrics ownership framework.
- **Gainsight, 35-Metric Guide for SaaS Teams** — https://www.gainsight.com/essential-guide/the-essential-guide-to-business-metrics/ — a broad reference covering sales, marketing, and company-level SaaS metrics.

---

## Cross-references

- [GTM Strategy Framework](../foundations/00-gtm-strategy-framework.md) — the strategy layer that metrics measure
- [Pricing as GTM](../data/pricing-as-gtm) — pricing directly drives ARPA, LTV, and CAC payback
- [GTM Funnel](../foundations/gtm-funnel) — the funnel model that CAC and conversion metrics feed into
- [Revenue Operations](../foundations/06-revenue-operations.md) — the operational discipline that keeps metrics accurate
- [Agentic GTM Overview](../agentic/agentic-gtm-overview) — how AI changes acquisition cost and efficiency metrics
- [Conversion Rate Benchmarks](../data/conversion-rate-benchmarks) — funnel conversion data
- [Outbound Response Rates](../data/02-outbound-response-rates.md) — channel-level acquisition efficiency data
