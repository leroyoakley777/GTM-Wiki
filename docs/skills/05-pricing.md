---
sidebar_position: 5
title: Pricing
description: "Set and defend price as a GTM motion: value-based vs cost-plus, good-better-best packaging, discount authority, payback math, and negotiation guardrails."
last_updated: 2026-08-19
status: active
tags: [pricing, packaging, discount, value, agentic, skills]
domain: skills
parent: skills/index
---

# Pricing

Pricing is the skill of setting and defending the price and packaging a buyer pays, as a go-to-market motion rather than a finance afterthought. You run it when a pricing decision, a discount request, or a packaging change is on the table and the number has to hold up to a deal.

The output is a defensible price: a list, a packaging structure, and a discount rule an AE or an agent can apply without re-litigating the deal. A price that lives only in a spreadsheet is not a result. A price loaded into the quote tool with an approver and a trade attached is.

Pricing pairs with [prospecting](./prospecting) and [outbound](./outbound) on the demand side, and with [ABM](./abm) and [revops](./revops) on the deal and systems side. Read [signals](./signals), [SEO](./seo), and [ads](./ads) for how price feeds the upstream motions.

## When to use this skill

Run pricing when any of these is true:

- A new product or tier needs a list price and a packaging structure before it sells.
- A prospect asks for a discount and you must decide the size, the approver, and the trade.
- Win rates or deal sizes drift and you suspect price, not product, is the cause.
- An agent needs a deterministic rule to quote, approve, and route without a human in every thread.
- Expansion revenue is flat and the packaging has no natural upgrade path.

Do not run it as a one-time finance exercise. Price set once and never defended erodes through every discount request until the list is fiction [1].

## Definition

Pricing turns the value you deliver into a number a buyer pays and a structure that captures more of that value as they grow. It combines four moves: a value metric that scales with the customer's outcome, a good-better-best packaging built around buyer groups, a discount rule that trades price for a behavior you want, and a defense that keeps the list from collapsing in negotiation.

## Why it matters

Only 33% of B2B SaaS teams run value-based pricing, and 40.8% use good-better-best as their dominant packaging model [1]. That gap is the opportunity: most competitors still anchor to cost, so value-based pricing captures money they leave on the table. SaaS price levels rose 11.4% year over year in 2025 [2], and disciplined pricing keeps that inflation as margin while undisciplined discounting hands it to the buyer.

Discounting is the lever that breaks the motion. The healthy band is 1 to 20% off list; discounts above 40% produce smaller deals and slower closes [3]. Net revenue retention runs about 102% at the median, and top performers push net dollar retention to 110 to 120% by pricing the expansion path into the package [4][5]. Customer acquisition cost payback sits near 12 months with an LTV to CAC floor of 3 to 1 [6]. A discount that drops LTV below that floor or pushes payback past 12 months is not generosity. It is a math error you funded.

## Mechanics

### 1. Anchor to the value metric, not the cost sheet

Pick the unit the customer pays for so it scales with the outcome you deliver: per seat, per event, per outcome, or per account. Cost-plus pricing multiplies your cost by a margin and ignores what the buyer gains. Value-based pricing sets the anchor at a share of the quantified value you create. The cost sheet tells you your floor; the value metric tells you your ceiling.

### 2. Build good-better-best around buyer groups

Build three tiers around distinct buyer groups, not around feature tiers of one buyer. Good serves the individual contributor. Better serves the team lead or department. Best serves the VP or enterprise buyer. Each tier caps the value metric at a level that pushes the buyer to the next tier as they grow, which is the expansion engine. 40.8% of B2B SaaS uses this shape because it captures value across groups without custom quotes [1].

### 3. Set the list price at the value anchor

Set list at the value-based anchor, not the cost-plus floor. Record the value metric and the quantified value so every quote can defend the number. A list price with no stated value hypothesis is a number a buyer can talk you down from. A list price tied to a named outcome is a position.

### 4. Grant discounts only for a traded behavior

Discount to reward a behavior you want: annual prepay, multi-year commitment, or case-study rights. Never discount to rescue a wrong-sized deal or a weak value prop. The optimal band is 1 to 20% [3]. Above it, require a trade and an approver. A discount for behavior you want is pricing. A discount conceded to close is a subsidy.

### 5. Defend price with a deal desk and authority table

Route every discount above the AE's band to a named approver. The deal desk owns the table; the AE owns the relationship. A discount with no approver and no trade is a margin leak that compounds across the quarter. The authority table is the guardrail, not the ceiling.

### 6. Price the expansion path before the sale closes

Build the upgrade trigger into the packaging so growth is automatic, not a renegotiation. Land-and-expand only works when the Better and Best tiers sit one cap-break away from Good. A package with no upgrade path caps the most efficient revenue you will ever have [4][5].

## Artifact: the pricing and packaging grid

This is the deliverable the skill produces. Fill one row per tier, one table per segment.

```text
Pricing + packaging grid: <segment>        as-of: <date>        owner: <name>
Value metric: <per-seat / per-usage / per-outcome>

| Tier   | Buyer group      | Cap on value metric | List $/mo | Included use       | Upsell trigger        |
|--------|------------------|---------------------|-----------|--------------------|-----------------------|
| Good   | Individual       | 5 seats / 1k events | $X        | core workflow      | hits cap -> Better    |
| Better | Team / dept      | 25 seats / 10k events| $Y       | + reporting, SSO   | hits cap -> Best      |
| Best   | VP / enterprise  | unlimited           | $Z        | + API, support SLA | usage growth -> expand|
```

The discount-authority table rides with the grid so every quote applies the same rule.

```text
Discount-authority table: <segment>        approver: <role>
List basis: annual contract value (ACV)

| Discount band | Who approves         | Required trade (behavior)        | Guardrail                  |
|---------------|----------------------|-----------------------------------|----------------------------|
| 0 to 5%      | AE                   | none                              | standard                   |
| 6 to 15%     | AE + manager         | annual prepay OR multi-year       | log trade in CRM           |
| 16 to 20%    | Sales director       | multi-year + case-study rights    | exec sponsor sign-off      |
| above 20%    | VP Sales / deal desk | board-level justification         | pause deal; re-quote list  |
```

## A worked example

Northwind Analytics sells a workflow product with a fully-loaded cost to serve of $4,000 per year. A customer using it saves about $40,000 per year in analyst labor, a quantified value the rep can name.

**Step 1 - cost-plus vs value-based.** Cost-plus at 3x cost sets list at $12,000 per year. Value-based pricing captures a share of the $40,000 outcome: at 37.5% captured, list is $15,000 per year, leaving the customer net positive $25,000. Cost-plus leaves $3,000 per year of value on the table versus the value anchor. The list is set at $15,000, not $12,000, because the outcome justifies it.

**Step 2 - margin at list.** At $15,000 list against $4,000 cost, contribution is $11,000 per year, a 73.3% margin. That is the number every discount is measured against.

**Step 3 - discount authority math on margin.** A 20% discount drops price to $12,000 and contribution to $8,000. A 20% price cut removed 27% of the contribution. To recover the lost $3,000 of contribution you need 38% more customers at list, or one expansion upgrade to the Better tier. A 40% discount drops price to $9,000 and contribution to $5,000, a 55% cut in contribution from a 40% price cut, and Cacheflow's data shows deals above 40% close smaller and slower [3]. The AE may grant up to 15% for an annual prepay under the authority table; anything above 20% pauses the deal for the VP and a re-quote.

**Step 4 - payback check.** With CAC payback near 12 months and an LTV to CAC floor of 3 to 1 [6], a 40% discount compresses LTV (less expansion room, higher churn risk on subsidized buyers) and pushes both ratios the wrong way. The arithmetic is a named base, not a guess: change the list, the cost, or the discount and the contribution moves with it.

## Failure modes and how to fix them

- **Cost-plus anchoring.** Pricing to internal cost leaves value on the table and invites discounting. Fix: anchor to the value metric and the quantified outcome [1].
- **Discounting to close.** Conceding margin with no trade erodes contribution and trains buyers to ask. Fix: discount only for prepay or multi-year; use the authority table [3].
- **Packaging by segment, not buyer group.** One buyer stretched across tiers forces cross-tier horse-trading and invisible discounts. Fix: build good-better-best around buyer groups [1].
- **No expansion path.** A package with no upgrade trigger caps net revenue retention near the median instead of the top band. Fix: put the upsell one cap-break away [4][5].
- **One-off custom quotes.** Ad hoc pricing erodes trust and makes renewals impossible to compare. Fix: deal desk plus the approval table; no quote outside the bands without sign-off.
- **Negotiating before value.** Talking price with no value hypothesis lets the buyer set the frame. Fix: state the quantified value first, then the number.

## How the skill differs by segment and maturity

- **By segment.** SMB: two or three self-serve tiers, product-led price, almost no negotiation. Mid-market: good-better-best with a real discount band and a manager approver. Enterprise: custom packaging per account, multi-year terms, and a committee that prices the expansion up front.
- **By maturity.** A new motion should price narrow: prove the value metric on 10 accounts before adding tiers. A mature motion can run broad tiers, a deal desk, and an automated expansion motion.
- **By channel pairing.** Outbound-led teams need tight discount authority so cold-sourced deals keep margin [3]. ABM-led teams customize packaging per named account [./abm]. Product-led teams let packaging drive free-to-paid conversion, so the grid is the motion.

## Agentic layer

An agent can quote, approve within its band, and route exceptions, while a human owns the value hypothesis and the above-band sign-off.

**SOP: set and defend a price for an account.**

```text
Given: a value hypothesis per account, a cost-to-serve number, and a discount-authority table.
1. Compute the cost-plus floor (cost x 3) and a value-based anchor (share of quantified value).
2. Pick the packaging tier that fits the buyer group; never build a one-off tier.
3. Set list at the value anchor; record the value metric and the quantified value.
4. On a discount request, require a trade (prepay / multi-year / case-study rights) per the table.
5. Route any discount above the AE band to the named approver; pause the deal if none exists.
6. Emit the quote with list, discount, trade, and approver in the template.
Never invent a value number. If the value hypothesis is unproven, quote list and note the gap.
```

**Prompt: propose the price and the maximum discount.**

```text
You are a pricing operator. Given an account, a quantified value hypothesis, a cost-to-serve
figure, and the discount-authority table, propose a list price and the maximum discount you can
grant without escalation. Lead with the value metric. Require a trade for any discount above 5%.
Output only the price, the trade, and the approver.
```

Keep the human in the loop for the value hypothesis, any above-band discount, and the renewal that resets the list. The agent runs the quote; you own the number.

## Sources

1. [SBI: State of B2B SaaS Pricing Benchmarks 2024](https://sbigrowth.com/tools-and-solutions/pricing-benchmarks-report-2024): 33% value-based pricing adoption; 40.8% good-better-best dominant model (2024).
2. [MomentumNexus: SaaS Pricing Strategy Guide 2026](https://www.momentumnexus.com/blog/saas-pricing-strategy-guide-2026/): SaaS price level +11.4% YoY in 2025; expansion 25 to 40% of new revenue healthy (2026).
3. [Medium: Cacheflow SaaS Discount Strategy 2026](https://medium.com/@lesiapolivod/saas-discount-strategy-2026-when-discounts-work-and-when-they-dont-e33dac0014fb): 1 to 20% optimal discount band; above 40% produces smaller, slower deals (2026).
4. [ChurnZero: Expansion Revenue](https://churnzero.com/churnopedia/expansion-monthly-recurring-revenue-mrr/): NRR median about 102%; expansion revenue rate 10 to 30% good; top performers above 60% of new MRR from expansion (2026).
5. [Peak: Customer Retention 2026](https://www.peak-tech.com/perspectives/customer-retention): gross dollar retention 85 to 95%; net dollar retention 110 to 120% (2026).
6. [DigitalApplied: CAC Benchmarks 2026](https://www.digitalapplied.com/blog/customer-acquisition-cost-benchmarks-2026-industry): CAC self-serve $702 / sales-led $11,400; CAC payback near 12 months; LTV to CAC floor 3 to 1 (2026).
