---
sidebar_position: 2
title: Outbound — From List to Pipeline
description: The runnable outbound flow — decision gate, list build, channel and tooling, sequence, run and measure, handoff — with the acceptance gates and branch points an operator hits.
---

# Outbound: From List to Pipeline

This is the executable version of the [outbound-from-zero](../playbooks/outbound-from-zero) playbook. The playbook states the *what* — the gates and the principles. This flow is the *how you run it*: the sequence with an explicit acceptance gate at every step. **Do not advance on a miss** — each gate is a hard stop until it passes. Measure the run against the [outbound response-rate benchmarks](../data/outbound-response-rates).

---

## Sequence

### 1. Decision gate — is outbound right?

Outbound is the right motion when all four are true: a **tight ICP**, a **small TAM** (namable, bounded), **ACV ≥ $5k**, and **inbound won't fill the pipe fast enough**. If any is false, route to the [Channels Bullseye](../foundations/gtm-channels-bullseye) and pick a better channel.

**Gate:** all four true, or you have an explicit reason to proceed anyway.

### 2. List build

500 quality rows over 50,000 spray. Enrich firmographics → tech stack → intent → the one human. Add a reason-to-reach per row. The 20% "perfect fit" tier gets personal research.

**Gate:** every row has a first name, a verified email, and a one-line reason-to-reach. No reason, no row.

### 3. Channel + tooling

Cold email is primary, LinkedIn the amplifier, phone the last resort. Data/enrichment (Apollo/Clay), sending infra (Smartlead/Instantly), native sequencing.

**Gate:** SPF/DKIM/DMARC set, warmup ramped 2+ weeks, sends capped 30–50/domain/day.

### 4. Write the sequence

Email 1 = reason-to-reach + one value observation. Email 2 (d3–4) = proof point. Email 3 (d7–8) = a different angle. Breakup (d12–14). Under 90 words, one ask, human voice.

**Gate:** every variant human-approved before the first send. Nothing automates until 300+ sends prove a pattern.

### 5. Run + measure

Delivery >97%, open 50–70%, reply 2–5%, positive reply >30%, meetings/1k sends 3–10. Don't optimize a message under 300 sends per variant.

**Gate:** you can name the metric that is failing before you change anything.

### 6. Handoff

Meeting standard defined, source tracked, a 2-week debrief, and the win fed back into the list.

**Gate:** every meeting traces to a campaign.

---

## Decision Tree

The branches an operator hits:

```
Is outbound the right motion? ── no ──▶ Bullseye (pick another channel)
  │ yes
Build the list ── row missing reason-to-reach? ── yes ──▶ drop row
  │ no
Pick channel + tooling ── domain warmed & capped? ── no ──▶ warm domain first
  │ yes
Write sequence ── variant human-approved? ── no ──▶ approve before send
  │ yes
Run + measure ── message proven (300+ sends)? ── no ──▶ keep manual, don't scale
  │ yes
Scale + handoff ── meeting traced to campaign? ── no ──▶ fix source tracking
  │ yes
Loop: feed wins back into the list
```

---

## Why the Gates Are the Flow

The gate structure is not bureaucracy — it is the difference between a motion that compounds and one that burns a domain. The list gate kills spray. The approval gate keeps bad messaging from being automated. The proven-message gate stops you from scaling something that has not earned scale. Each gate is a decision point, and the decision tree above is where those decisions live in practice.

---

## Further Reading

- [Outbound — the channel](../channels/outbound) — the channel benchmarks and when it is the right motion.
- [Outbound-from-zero playbook](../playbooks/outbound-from-zero) — the rationale behind these gates.
- [Outbound response-rate benchmarks](../data/outbound-response-rates) — the numbers this flow is measured against.
- [Agentic Outbound: the harness](./agentic-outbound) — the same flow when an agent runs the execution layer.
