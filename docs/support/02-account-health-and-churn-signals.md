---
class: fundamental
sidebar_position: 3
title: Account health and churn signals
description: "Score account health from the signals you already hold, put a clock on the renewal, and route the risk to the owner who can still change the outcome."
status: active
tags: [support, customer-success, health-score, churn, renewal, gtm]
last_updated: 2026-10-11
---

# Account health and churn signals

A health score is a forecast, not a dashboard. It answers one question: which accounts need attention this week, and from whom. A score that only decorates a report changes nothing.

Support, customer success, and sales each hold a piece of the answer. Support sees the ticket load. Product sees the usage. The AE sees the relationship. A health score joins the pieces before the renewal date makes the decision for you.

This page covers the signals, the renewal clock, and the routing. Read [Support](/docs/support) for the queue-to-revenue loop, [Escalation and severity](./escalation-and-severity) for the incident path, and [GTM metrics](/docs/data/gtm-metrics) for the retention numbers behind the score.

## What a health score decides

- **Who gets attention this week.** A score ranks accounts by risk, so a CSM with forty accounts works the ten that need work.
- **Which owner acts.** A usage drop belongs to product and CS. A relationship gap belongs to the AE. A ticket spike belongs to support.
- **When the renewal conversation starts.** A score read at renewal is a post-mortem. A score read a quarter early is a plan.
- **What the forecast can claim.** A pipeline that ignores renewal risk reports revenue that never arrives.

Customer success platforms carry health scoring, churn signals, and renewal and expansion work in one system, so the score sits next to the renewal date <sup><a href="#sources">[302]</a></sup>. A GTM leader owns the SLAs between support, CS, and sales, because a handoff with no clock has no owner <sup><a href="#sources">[300]</a></sup>.

## Signals that carry weight

Four signal families cover most of the risk. Each one is cheap to collect, and each one misleads in its own way.

| Signal family | What you collect | What it tells you | Where it misleads |
|---|---|---|---|
| Product usage | Active seats, weekly sessions, core-feature use | Whether the work still runs inside the product | A power user hides a team that stopped logging in |
| Support load | Ticket volume, severity mix, repeat contacts | Whether the account fights the product | A quiet account may have given up on the queue |
| Commercial | Renewal date, discount history, payment timing | Where the money stands | A paid invoice says nothing about adoption |
| Relationship | Champion activity, executive sponsor, reply latency | Whether you still have a person inside | One champion carries the account until they leave |

Stale data poisons every family at once. Stale and inaccurate contact data costs a B2B team an estimated 15 to 25 percent of revenue, and roughly 70 percent of B2B contact data goes stale each year <sup><a href="#sources">[301]</a></sup>. A score built on a dead champion field reports health on an account that already left.

## Weight the signals from your own churn history

A vendor default weight is a guess about someone else's customers. Derive the weights from your closed renewals instead.

1. Pull every renewal from the last four quarters, won and lost.
2. Record each signal at 90 days before the renewal date, not at the renewal.
3. Compare the two groups. Keep the signals that separate them. Drop the rest.

A signal that scores the same in both groups carries no weight, however good it looks on a dashboard. A five-point drop in weekly active seats that shows up in 8 of 10 lost renewals and 2 of 10 won ones earns a place. A sentiment field that nobody updates does not.

Almost 60 percent of B2B buyers would stop doing business with a vendor over a difficult mobile experience alone <sup><a href="#sources">[259]</a></sup>, so a product-experience signal belongs in the model. A relationship signal belongs there too, and it needs an owner who updates it.

## Put a clock on the renewal

The renewal date is a deadline, not a starting gun. Work backwards from it, and give each checkpoint an owner and a decision.

| Checkpoint | Owner | Decision |
|---|---|---|
| 120 days out | CSM | Score the account and name the top risk |
| 90 days out | CSM and AE | Start the value review with the buyer |
| 60 days out | AE | Confirm the renewal path, or open a save plan |
| 30 days out | Sales leader | Approve any concession, or accept the loss |

An expansion conversation runs on its own clock. The expansion deal cycle sits near 52 days <sup><a href="#sources">[93]</a></sup>, so a request that lands inside the last month of a renewal window arrives late. Catch it at the 120-day review instead.

Renewal pricing changed for every vendor in the market. B2B software price inflation ran 12 to 16.4 percent per year through 2026 against about 2.7 percent general inflation in the G7, and it peaked at 14.7 percent in the fourth quarter of 2025 <sup><a href="#sources">[271]</a></sup>. Buyers arrive at the renewal having absorbed years of increases, and many ask for a cut. A health score read early gives the AE time to answer with value instead of a discount.

## Route the score to the owner who can act

A score with no route is a report. Give every threshold one owner and one move.

- **Usage drop on a core workflow.** The CSM opens a value review and books a working session. Product checks whether a release broke the workflow.
- **Ticket spike on one account.** Support scores severity, then copies the CSM and the AE on every S1 and S2 <sup><a href="#sources">[302]</a></sup>.
- **Champion gone.** The AE re-maps the buying committee inside two weeks. A single-threaded account is a risk, not a relationship.
- **Renewal inside 60 days with a red score.** The sales leader owns the save plan and the concession limit.
- **Repeat contacts on the same question.** Product marketing ships the artifact. Community-led support cut ticket volume 30 to 40 percent in vendor-reported studies, which frees the human for the accounts that need one <sup><a href="#sources">[154]</a></sup>.

## Worked example: a quiet account that was not healthy

A 200-seat account renews in four months. No ticket has arrived in six weeks, so the queue shows a quiet account.

The health score reads three signals. Weekly active seats fell 22 percent over two months. The champion has not replied to the last three emails. A payment ran nine days late. Support holds no data, because the account stopped asking.

The CSM books a value review at the 120-day checkpoint and learns that a reorganisation moved the champion to a new team. The AE re-maps the committee and finds a new sponsor in operations. Product ships a workflow fix for the report the old champion had worked around.

The account renews with a modest expansion. A quiet queue had read as health. The score read as risk, and the clock left room to act.

## How the score differs by stage

- **Seed.** The founder is the health score. Ten accounts fit in one head, so the founder keeps a weekly list of the accounts that worry them and writes down why. The list becomes the first model.
- **First CS hire.** One CSM owns a named book. Score each account monthly from usage and tickets, then review the red list with the AE every week.
- **Growth.** The score runs in the success platform beside the renewal date <sup><a href="#sources">[302]</a></sup>, and CS, support, and sales read one definition. Median net revenue retention sits near 102 percent, expansion adds 10 to 30 percent of new MRR at a good company, and top performers draw more than 60 percent of new MRR from expansion <sup><a href="#sources">[156]</a></sup>, so the score protects the base and finds the expansion.
- **Scale.** A standing model, a quarterly reweight from closed renewals, and a named owner for the data hygiene underneath it. Notion ran support for 20 million users with fewer than ten customer success people, because the routing rules carried the load the headcount could not <sup><a href="#sources">[202]</a></sup>.

## Failure modes

- **A score nobody reads.** The dashboard refreshes and no one opens it. Fix: put the red list in a weekly meeting with a named owner.
- **A score built on stale fields.** The champion left two quarters ago and the field still shows a green relationship. Fix: expire every relationship field and make an owner re-confirm it.
- **Sentiment without evidence.** A CSM rates an account happy because the last call went well. Fix: score behavior, and use sentiment only as a prompt to look.
- **A green score and a dead account.** The team hit its usage target with one power user while the rest of the team stopped logging in. Fix: score seats active, not sessions total.
- **Renewal read at renewal.** The first real conversation happens in the last month. Fix: start the clock at 120 days.
- **A save plan with no owner.** Everyone agrees the account is at risk, and no one owns the move. Fix: name one owner and one decision per threshold.

## Account health checklist

```text
ACCOUNT HEALTH AND CHURN SIGNALS CHECKLIST
[ ] Four signal families collected on a fixed cadence
[ ] Weights derived from closed renewals, not a vendor default
[ ] Every relationship field carries an owner and an expiry date
[ ] Renewal clock set at 120, 90, 60, and 30 days
[ ] One owner and one decision per risk threshold
[ ] Red list reviewed weekly with CS, support, and sales
[ ] Score reweighted every quarter from the last four quarters
[ ] Expansion request routed at the 120-day review, not the last month
```

## Agentic layer

An agent can assemble the score and keep it honest. It can pull usage, ticket, and payment signals on a schedule, flag an account whose champion field passed its expiry date, draft the value-review brief from the last quarter of calls, and route each threshold to the named owner. A human still owns the relationship, the concession, and the conversation with the buyer. Set the guardrail first: the agent scores and routes, and never contacts the customer. Read [Agentic outbound](/docs/agentic/agentic-outbound) for the desk-level SOP.

## Related pages

- [Support](/docs/support): the queue-to-revenue loop this page extends.
- [Escalation and severity](./escalation-and-severity): the incident path that feeds the support signal.
- [GTM metrics](/docs/data/gtm-metrics): retention, expansion, and payback numbers.
- [Revenue operations](/docs/foundations/revenue-operations): the function that owns the SLAs between teams.
- [Win-loss](/docs/foundations/win-loss): the closed-deal loop that tests the loss reason.
- [Coaching and one-on-ones](/docs/culture/coaching-and-one-on-ones): the weekly habit that reviews the red list.

## Further reading

- [ZoomInfo: RevOps Tech Stack, 2026](https://pipeline.zoominfo.com/sales/mastering-revops-tech-stack). Customer success platforms carry health scoring, churn signals, and renewal work.
- [ChurnZero: SaaS Customer Retention Benchmarks](https://churnzero.com/blog/saas-customer-retention-benchmarks/). Net revenue retention near 102 percent, and the expansion share of new MRR.
- [SaaStr: 2026 retention and pricing notes](https://www.saastr.com/). Churn follows bad timing and heavy products, and a clean exit can still recommend the vendor.
- [David Skok: SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/). CAC payback and the second sale that retention funds.

## Sources

- [93] Pavilion, 2024-2025: expansion deal cycle 52 days. Source registry #93.
- [154] Common Room, 2024: community-led support cuts ticket volume 30 to 40 percent (vendor source). Source registry #154.
- [156] ChurnZero, 2026: net revenue retention median near 102 percent; expansion 10 to 30 percent of new MRR; top performers above 60 percent. Source registry #156.
- [202] Notion, 2024: support for 20 million users with fewer than ten customer success people. Source registry #202.
- [259] Revenue Operations (Diorio and Hummel), 2022: almost 60 percent of B2B buyers would leave a vendor over a difficult mobile experience. Source registry #259.
- [271] Vertice SaaS Inflation Index, 2026: B2B software price inflation 12 to 16.4 percent per year against about 2.7 percent G7 inflation, peaking at 14.7 percent in the fourth quarter of 2025. Source registry #271.
- [300] ZoomInfo (GTM Leader Guide), 2026: a GTM leader owns the SLAs between teams. Source registry #300.
- [301] ZoomInfo (GTM Tech Stack), 2026: stale data costs an estimated 15 to 25 percent of revenue; about 70 percent of B2B contact data goes stale each year. Source registry #301.
- [302] ZoomInfo (RevOps Tech Stack), 2026: customer success platforms carry health scoring, churn signals, and renewal and expansion. Source registry #302.
- [313] David Skok, SaaS Metrics 2.0, 2013: CAC payback and the two-sale reality of SaaS. Source registry #313.
