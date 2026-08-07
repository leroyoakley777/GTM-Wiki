---
sidebar_position: 3
title: Guardrails & Measurement
---

# 03 — Guardrails & Measurement

**Goal**: keep the harness honest — the checks that stop it from
damaging your domain, your compliance posture, and your reputation.

Agents don't have reputations. You do. Every guardrail below exists
because the cost of an agent's mistake lands on a human.

---

## Guardrail 1 — The human sign-off (non-negotiable)

**Any message that will reach a real person is approved by a human
before it sends.** Full stop.

This isn't about control — it's about ownership. The person whose name
is on the domain owns the outcome. Automation can *earn* the right to
send (a proven pattern, hundreds of replies analyzed), but that right
is granted, reviewed quarterly, and revocable.

Practical form:

- New variant → 100% human approval
- Proven pattern → spot-check approval (20% sample) + weekly review
- Any escalation / compliance-tagged account → always human

---

## Guardrail 2 — Domain & deliverability hygiene

Agents make it *easier* to send more, faster — which is exactly how
domains die.

| Rule | Why |
|---|---|
| Dedicated sending domain | Main domain stays clean |
| SPF/DKIM/DMARC configured | Authentication, deliverability |
| Warmup ramped 2+ weeks | Reputation before volume |
| Hard caps on daily sends (30–50/domain/day to start) | Don't trip spam filters |
| Bounce + unsubscribe handling is instant and automatic | ISP trust + legal compliance |
| Domain rotation at scale | Spread volume, isolate failures |

**The gate**: if delivery rate dips below 97%, the harness pauses —
not slows, pauses — until the cause is found.

---

## Guardrail 3 — Compliance & regulated industries

Healthcare, finance, legal, and insurance outreach is not a vibe —
it's regulated.

- **CAN-SPAM / GDPR / CCPA**: opt-out honored instantly, sender
  identified, physical address present. Agents don't get a pass.
- **Industry rules**: HIPAA (healthcare), SEC/FINRA (finance), state
  insurance regs — know which apply *before* the harness touches a lead
  in that vertical.
- **Never send regulated content without human approval.** An agent
  drafting a claim about insurance coverage is a liability, not a
  feature.

---

## Guardrail 4 — The metrics that keep you honest

The funnel metrics from Outbound from Zero remain the scoreboard.
Add the harness-health metrics from [Agentic Outbound](./02-agentic-outbound.md):
brief coverage >90%, approval rate trending down, triage accuracy
>95%, response time under 15 min, override rate under 5%.

**One more, the killer**: *cost per meeting booked*, before and after
the harness. If agents don't improve it, they're a tax.

| Metric | Before (manual) | After (agentic) | Verdict |
|---|---|---|---|
| Cost per meeting | $X | $0.4X | Win |
| Reply rate | 3% | 2.5% | Regress — fix message, not volume |
| Domain health | clean | burned | Fail — pause harness |

---

## When to turn it off

The harness is a tool, not a strategy. Turn it off (or down) when:

- **Delivery under 97%** — domain risk
- **Reply rate drops >30% after scaling** — message or list broke
- **Triage accuracy under 90%** — hot leads are being buried
- **Override rate spikes** — the harness is saying things you veto,
  which means it's learning your wrong patterns

---

## The operating rhythm

Weekly, 30 minutes:

1. Funnel metrics vs. last week (delivery, reply, meetings per 1,000)
2. Harness-health metrics (brief coverage, triage, response time)
3. Read 5 hot replies — did the loop serve them well?
4. Read 5 sent messages — would you sign them?
5. One decision: scale, adjust, or pause

This rhythm is the difference between *using* agents and *being used
by* them. The harness learns from the review, not from the volume.

---

*Frameworks don't change. Execution does — but only under guardrails.
This section is part of the [Open GTM Wiki](../intro.md): foundations
first, agents as leverage, humans as judgment.*
