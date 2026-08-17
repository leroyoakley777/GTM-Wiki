---
sidebar_position: 3
title: Agentic Outbound — The Harness
description: The outbound flow when an agent harness runs the execution layer — the layer stack, the augment-don't-replace rule, the triage decision tree, and autonomy placement.
---

# Agentic Outbound: The Harness

This is the [outbound flow](./outbound) running under an agent harness. The sequence and its acceptance gates stay identical to the manual version — what changes is *who executes each step* and *where the human checkpoints sit*. The architecture mirrors the [Agentic Stack](../agentic/agentic-stack), the autonomy placement comes from [Agent vs Human Workflows](../agentic/agent-vs-human-workflows), and the quality bars come from [Guardrails & Measurement](../agentic/guardrails-and-measurement).

---

## Rule That Governs the Whole Flow

**Augment, don't replace.** The data is unambiguous: hybrid (human-in-the-loop) teams produce **2.8x more pipeline** than full-autonomous attempts, and AI SDR tools churn at 50–70% annually. Autonomous agents convert meetings to qualified opportunities at **15% vs 25%** for humans. The harness removes the thinking bottleneck *between* gate steps. Humans keep judgment on the send. (Numbers as cited in [Agentic Outbound](../agentic/agentic-outbound).)

---

## Architecture — the Layer Stack the Flow Runs On

Four execution layers, each with a human checkpoint:

| Layer | What the agent does | Human checkpoint |
|---|---|---|
| **Data / signals** | Sources, dedupes, enriches. Monitors hundreds of buyer signals (job change, funding, tech-stack, displacement) | You score the list |
| **Compose** | Drafts per-row research briefs + 5 email variants from your tone exemplars | You approve the pattern. Approval trains the voice |
| **Orchestration** | Send-time, warmup, domain rotation, cadence | Send caps stay human-set |
| **Reply triage** | Classifies intent, drafts responses &lt;5 min | You approve hot replies. 15-min SLA on hot |

---

## Sequence (gates identical to the manual flow)

1. **Prove the message** — small list, high-touch, all human judgment. Never automate a message you haven't proven. *Gate: 300+ sends per variant, pattern approved.*
2. **Automate the leverage** — agents draft, enrich, route at scale. Humans approve the pattern, not every keystroke. *Gate: brief coverage >90%, so the "specific" lines are real, not placeholders.*
3. **Guard the quality bar** — brief coverage >90%, triage accuracy >95%, human approval rate declining toward 20%, time-to-first-response &lt;15 min on hot, override rate &lt;5%. *Gate: if any slips, the loop is scaling garbage — shrink it.*

---

## Decision Tree (agentic edition)

```
Prove the message ── 300+ sends per variant? ── no ──▶ stay manual
  │ yes
Automate leverage ── brief coverage >90%? ── no ──▶ personalization is fake; fix it
  │ yes
Run triage ── incoming "interested"? ── yes ──▶ alert + book (15-min SLA)
  │ no
  ├── "what does it cost?" ──▶ agent drafts from approved FAQ → you approve + send
  ├── "not right now" ──▶ tag nurture, schedule follow-up
  └── "unsubscribe" ──▶ remove instantly, honor it. Never re-contact.
Measure harness health ── triage >95% & override &lt;5%? ── no ──▶ retrain/shrink
  │ yes
Scale + handoff (unchanged from the manual flow — automation doesn't fix a broken handoff)
```

---

## Autonomy Placement per Workflow

From [Agent vs Human Workflows](../agentic/agent-vs-human-workflows):

| Workflow | Autonomy stage | Guardrail |
|---|---|---|
| Contact enrichment | Autonomous | data-source audit, field permissions |
| Meeting scheduling | Autonomous | calendar access scoped to rep |
| Lead scoring | Recommend | model transparency, override log |
| Lead routing | Execute w/ approval | CRM-write gate, exception queue |
| Outbound email drafting | Draft | rep review before any send |
| Pricing approvals | Draft / Recommend | finance sign-off, no autonomous send |

**The rule to carry in:** automate low-blast-radius, reversible, high-volume work. Keep a human at every customer-facing or financial gate. Start narrow, prove the control model, then scale.

---

## Same Funnel, Cheaper Execution

The manual flow and this flow run the same funnel. What changes is the cost and speed of execution between the gates. The harness lets a small team sustain a volume that would otherwise need headcount — but only because the gates hold. The moment a quality bar slips, the loop is scaling garbage, and the answer is to shrink it, not to add more agents. The automation is leverage on a proven motion, never a substitute for proving it.

---

## Further Reading

- [Outbound: from list to pipeline](./outbound) — the manual flow this harness runs.
- [Agentic Stack](../agentic/agentic-stack) — the 5-layer harness architecture.
- [Agent vs Human Workflows](../agentic/agent-vs-human-workflows) — the autonomy ladder and human-in-loop controls.
- [Guardrails & Measurement](../agentic/guardrails-and-measurement) — the quality bars that keep the loop honest.
- [Agentic Outbound](../agentic/agentic-outbound) — the execution-layer source and the 2.8x / 15-vs-25% numbers.
