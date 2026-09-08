---
sidebar_position: 3
title: Model Orchestration
description: "How to put models in a GTM motion without letting them send, invent signals, or skip the human gate."
status: active
tags: [gtm-engineering, agents, orchestration]
last_updated: 2026-09-08
---

# Model Orchestration

Orchestration is the wiring that decides which model does which job, with which context, under which cap. It is not "add AI to outbound." Sending was never the bottleneck. Thinking per row was. Models help only when the list and the offer already work. See [Agentic Outbound](/docs/agentic/agentic-outbound).

## Split of labor

| Job | Model may | Human must |
|-----|-----------|------------|
| Draft reason-to-reach | Propose from a named source | Reject unsourced lines |
| Fill Tier 2 template | Yes, under 125 words [327] | Spot-check a sample |
| Tier 1 first line | Draft only | Approve before send |
| Reply to a human | Draft | Send |
| Pause a hot domain | Recommend | Own the pause |
| Opt-out | Never argue | Honor same day |

Caps still apply: 25-30 cold sends per mailbox per day, warmup intact [331][333]. A faster drafter does not raise the mailbox cap.

## Harness rules

1. **Context is retrieved, not remembered.** Pull the account, the signal, the last touch.
2. **Claims come from a allow-list.** No invented customer names.
3. **Cost and latency have budgets.** A 40-second draft that misses the 15-minute reply window is a failed tool [17].
4. **Logs are inspectable.** You cannot coach a black box.

## How this differs by stage

- **Seed.** One prompt, one human, no orchestration platform.
- **Team.** A harness that enforces caps and suppression.
- **Scale.** Model routing by task (research vs draft vs classify) and an examiner on writes. See [Examiner](/docs/agentic/examiner).

## Failure modes

- **Autonomous send.** The fastest way to burn a domain and a brand.
- **Invented signals.** Personalization that is false earns worse than generic [329].
- **One model for every job.** Classification and copy want different constraints.
- **No kill switch.** When complaints approach 0.3%, the harness stops the send [17].

## Agentic SOP

```text
1. Load account + named signal + suppression state.
2. Draft only if signal source is present.
3. Enforce length and banned phrases.
4. Route Tier 1 to human approval.
5. Write an audit row: prompt, output, decision.
```

## Sources

- [17] Instantly: reply speed, complaint caps. Source registry #17.
- [327] Martal: short personalized mail. Source registry #327.
- [329] Zeliq: false personalization. Source registry #329.
- [331] LeadHaste: send caps. Source registry #331.
- [333] Clay: warmup and inbox math. Source registry #333.
