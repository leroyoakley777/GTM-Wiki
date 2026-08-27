---
sidebar_position: 1
title: Tools
description: "The GTM tools market and how tools map to motion."
status: active
tags: ['tools', 'index']
---

# Tools

The **tools** section maps the GTM software market: CRMs, outbound platforms, analytics stacks, conversation intelligence, RevOps tools, and the emerging agentic GTM tooling category.

A tool is only use if it fits the motion. The map below organized by *job to be done*, not by vendor; pick by what the tool must do, then evaluate products against that.

## CRM: the system of record

The backbone of any GTM stack. Its job is to hold the truth about accounts, contacts, opportunities, and pipeline, not to be clever. Everything else in the stack reads from and writes back to it.

What to look for: pipeline accuracy, reporting flexibility, and clean integration with whatever sits upstream (outbound, marketing) and downstream (support, billing). A CRM that becomes the team's *source of truth* is worth more than a featureful one nobody keeps updated.

## Outbound & engagement platforms

The motion engine for [outbound](../channels/01-outbound.md) and [ABM](../channels/09-abm.md). Two distinct jobs, often in one platform:

- **Data / enrichment.** Find and verify the right accounts and contacts, fill gaps in CRM records. Quality of this layer decides the ceiling on reply rates: you cannot personalize against wrong data.
- **Sequencing.** Automate the multi-touch cadence (email, call, social) and track engagement per touch. The lesson from [outbound-response-rates](../data/05-outbound-response-rates.md) applies here directly: touch *variety* beats single-channel volume.

Buy the enrichment layer for accuracy and the sequencing layer for deliverability. Cheap data and blocked sending collapse the whole motion.

## Analytics & business intelligence

What answers "is it working?" and keeps the wiki's metrics honest. Two layers:

- **Product / web analytics.** Where demand originates and where it converts (see [funnel](../data/03-funnel.md) and [inbound](../channels/02-inbound.md)).
- **Pipeline / revenue analytics.** Revenue-attribution, forecasting, and coverage on top of the CRM.

The trap is metric sprawl. A handful of well-defined metrics (see [gtm-metrics](../data/01-gtm-metrics.md) and [revenue-operations](../foundations/06-revenue-operations.md)) tracked consistently beats a dashboard of forty numbers nobody reads.

## Conversation intelligence

Records and analyzes sales calls and meetings. The payoff is coaching at scale: talk-to-listen ratio, objection patterns, what reps do differently on won vs. lost deals. Increasingly it doubles as the data layer that lets [agentic GTM](../agentic/00-agentic-gtm-overview.md) summarize, follow up, and draft from real conversation.

## RevOps & enablement tooling

The plumbing that keeps the revenue engine coherent, the functional home of the [RevOps](../foundations/06-revenue-operations.md) multiplier:

- **Sales enablement.** Content, playbooks, and training delivered where reps work.
- **Quoting / CPQ.** Configure-price-quote for deals with genuine complexity.
- **Billing / subscription management.** Where recurring revenue is collected.
- **Data warehouse / reverse-ETL.** The layer that lets every tool speak the same account and revenue truth.

## Agentic GTM category

The newest and fastest-moving layer. These tools don't just store or sequence, they *execute*: research accounts, draft personalized outreach, run follow-up, maintain CRM hygiene, and hand judgment calls to humans. Built on the same [guardrails and measurement](../agentic/03-guardrails-and-measurement.md) discipline as every customer-facing agent.

The stack is still consolidating, so the buying rule matters more than any vendor name: start from the [agent-vs-human workflow](../agentic/06-agent-vs-human-workflows.md) you want, and buy the tool that owns the agent-executed steps, not the tool with the most features bolted on.

## How to choose

1. **Start from the motion**, not the vendor. Write down the concrete workflow (see [flows](../flows/index.md)).
2. **One system of record**, then add what the motion genuinely needs, nothing extra.
3. **Integration over features.** A tool that fits the stack beats a stronger tool that doesn't talk to it.
4. **Measure before you buy.** If you can't say which metric the tool must move, you're not ready to buy it.