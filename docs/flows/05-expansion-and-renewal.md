---
class: fundamental
sidebar_position: 5
title: Expansion and Renewal - the Post-Sale Flow
description: "The runnable post-sale sequence from onboarding handoff to renewal: the value milestones, the expansion trigger, the renewal clock, and the churn save, with the agentic SOP that watches the signals."
last_updated: 2026-10-15
status: active
tags: [expansion, renewal, retention, nrr, customer-success, flow]
domain: flows
parent: flows/index
---

# Expansion and Renewal - the Post-Sale Flow

The [GTM funnel](../foundations/gtm-funnel) runs to expansion, yet most teams stop running a process at the signature. The account then drifts until the renewal date, and the first honest conversation happens inside the discount window.

This page is the runnable sequence for the months between the signature and the renewal. It covers the handoff, the value milestones, the expansion trigger, the renewal clock, and the churn save. It does not cover implementation or ticket handling. Read [Escalation and severity](/docs/support/escalation-and-severity) for the support side.

Two rules hold the sequence together:

- **Value before the ask.** A buyer expands after the product proves a result, never before.
- **One clock.** Put the renewal date in the account record on day one, then work backward from it.

## Run the flow

1. **Hand off with a written success plan.** The AE writes the plan with the buyer before the handoff call. The plan names the outcome the buyer wants, the metric that proves it, the milestone dates, the account owner, and the renewal date. Sign it on the call. A verbal handoff loses the outcome inside a week.
2. **Set the first value milestone inside two weeks.** Pick one task the buyer runs on the product and one result the buyer sees. Onboarding ends when the buyer repeats that task alone, not when the training session ends. See [Customer onboarding](/docs/playbooks/customer-onboarding).
3. **Track adoption against the milestone.** Count the habit, not the logins. A weekly active user who runs the core workflow carries more weight than a large dormant seat count.
4. **Score account health on a fixed cadence.** Run the weekly score from [Account health and churn signals](/docs/support/account-health-and-churn-signals), and route each risk threshold to one named owner.
5. **Raise the expansion ask at proven value.** The trigger is a result the buyer repeats, a team that outgrew its seats, or a use case that spreads to a second department. Bring the value file to that conversation.
6. **Open the renewal clock 120 days before the term ends.** Work the checkpoints in the table below. Late renewal work reads as a price negotiation, because the buyer sees no other topic.
7. **Run the renewal on the value file.** The file holds the outcome achieved, the usage evidence, the expansion history, and the price change. A discount without the file buys one term and teaches the buyer to wait.
8. **Log the outcome and reweight the signals.** Feed the closed renewal back into the health score. The weights that predicted your last four renewals beat any vendor default.

## Milestones that prove value

| Milestone | Signal to watch | Owner | Clock |
|---|---|---|---|
| First value | The buyer repeats the core task alone | CSM | 14 days |
| Habit formed | Day-7 return on the core workflow | CSM | 30 days |
| Team adoption | Two or more teams run the workflow | CSM | 60 days |
| Measurable outcome | The buyer reports the metric from the success plan | AE and CSM | 90 days |
| Executive sponsor | A sponsor outside the buying team names the result | AE | 120 days |
| Expansion candidate | A second use case or seat block appears | AE | 120 days |

## Signals that carry weight

Amplitude found that more than 98 percent of users who reach no value in their first two weeks churn inside that window, and that top products retain 18.5 percent of users against a 3.8 percent median [235]. Read those figures together and the first two weeks decide the renewal. A day-7 return in the top quartile marks the accounts that stay [235].

## Expansion math you can steer

ChurnZero puts the median net revenue retention near 102 percent, calls an expansion rate of 10 to 30 percent of new MRR the healthy band, and reports that top performers take above 60 percent of new MRR from expansion [156]. ChartMogul found that companies at or above 100 percent net revenue retention grew about 48 percent year over year [57].

Worked example: take a $40,000 account that renews at 100 percent [156] and adds a $8,000 seat block in the 2026 plan year. Net revenue retention lands at 120 percent, because $48,000 divided by $40,000 is 1.2. One expansion motion inside the term does more for the growth rate than a new logo of the same size, and it carries no acquisition cost.

## Put a clock on the renewal

| Checkpoint | Work to finish | Owner |
|---|---|---|
| 120 days | Value file drafted, sponsor re-confirmed, expansion candidate named | AE |
| 90 days | Adoption review with the sponsor, gap plan agreed | CSM |
| 60 days | Commercial terms discussed, procurement introduced | AE |
| 30 days | Signature path agreed, legal contacts exchanged | AE |
| 0 days | Term renewed, outcome logged, health weights updated | CSM |

Pavilion measures the expansion deal cycle at 52 days [93], so an expansion candidate named at 120 days still has room to close inside the term. Vertice measured B2B software price inflation at 12 to 16.4 percent per year, peaking at 14.7 percent in the fourth quarter of 2025 [271]. Buyers arrive at the renewal carrying years of increases and ask for cuts. The value file answers that request. A discount answers it once.

Bessemer treats net revenue retention as a valuation driver for public software companies [315], so the number reaches the board. Treat the renewal as a forecast item, not an administrative task.

## How the flow differs by stage

| Stage | Expansion path | Renewal shape |
|---|---|---|
| Seed | The founder runs the flow on the first ten accounts | Annual prepay, founder to founder |
| Series A to B | A CSM owns the flow, the AE owns the expansion ask | Annual, procurement joins at 60 days |
| Growth | A customer success team owns adoption, a renewal desk owns the clock | Multi-year, quarterly true-ups |
| Enterprise | A named CSM and an executive sponsor per account | Annual, with a security and legal review |

## Failure modes

- **The silent renewal.** Nobody owns the clock, so the first contact lands 30 days out and the buyer sets the terms.
- **The discount reflex.** A price cut at renewal without the value file teaches the buyer to ask again next term.
- **The early ask.** An expansion conversation before proven value reads as a sales push and burns trust.
- **Single-threading.** One champion leaves and the account loses its internal advocate.
- **The handoff gap.** The AE closes, the CSM starts from scratch, and the buyer repeats the same discovery.
- **The unread health score.** A score with no owner and no meeting changes nothing.

## Agentic layer

An agent holds the cadence and never forgets the 120-day checkpoint. The human keeps the ask.

```
Weekly, for every account inside its term:
  1. Pull usage, support, invoice, and relationship signals.
  2. Score health. Compare the score against the last four closed renewals.
  3. If the score drops a band, open a risk task with one owner and one date.
  4. If a value milestone lands, draft the value-file section with the evidence.
  5. At 120 days, assemble the renewal packet and flag missing evidence.
Never send the expansion ask or the renewal terms without human approval.
```

A customer success platform carries the health scoring, the churn signals, and the renewal work [302]. Place the human gate where judgment changes the outcome: the ask, the terms, and the churn save. Read [Agent vs human workflows](/docs/agentic/agent-vs-human-workflows) for the autonomy placement.

## Related pages

- [GTM funnel](/docs/foundations/gtm-funnel): the stage map this flow executes, including expansion and advocacy.
- [Account health and churn signals](/docs/support/account-health-and-churn-signals): the scoring rules the weekly step runs.
- [Customer onboarding](/docs/playbooks/customer-onboarding): the handoff and the first value milestone.
- [Adoption and expansion](/docs/product-marketing/adoption-and-expansion): the product-marketing side of the expansion motion.
- [Sales process - the MEDDPICC flow](./sales-process-meddpicc): the stages that close the deal this flow inherits.
- [Sales cycle benchmarks](/docs/data/sales-cycle-benchmarks): the cycle times that set the renewal clock.
- [GTM metrics](/docs/foundations/gtm-metrics): net revenue retention and its place in the model.

## Sources

- [57] ChartMogul, 2024: companies at or above 100 percent net revenue retention grew about 48 percent year over year in the first half of 2024. Source registry #57.
- [93] Pavilion, 2024-2025: expansion deal cycle 52 days. Source registry #93.
- [156] ChurnZero, 2026: net revenue retention median near 102 percent; expansion revenue 10 to 30 percent of new MRR; top performers above 60 percent of new MRR from expansion. Source registry #156.
- [235] Amplitude, 2025: 7 percent day-7 return rule; more than 98 percent of value-less users churn within two weeks; top products retain 18.5 percent against a 3.8 percent median. Source registry #235.
- [271] Vertice SaaS Inflation Index, 2026: B2B software price inflation 12 to 16.4 percent per year against about 2.7 percent general inflation, peaking at 14.7 percent in the fourth quarter of 2025. Source registry #271.
- [302] ZoomInfo (RevOps Tech Stack), 2026: customer success platforms carry health scoring, churn signals, and renewal and expansion work. Source registry #302.
- [315] Bessemer Cloud Index (BVP), 2026: net revenue retention is a key valuation driver for public software companies. Source registry #315.
