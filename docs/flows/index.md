---
sidebar_position: 1
title: Flows
description: "The runnable sequences and decision trees an operator executes: the how, not the what. Agentic flows add the architecture that runs them."
---

# Flows

Playbooks state the *what*: the principles and gates. **Flows are the *how you run it***: the runnable sequence, the branch points, and the acceptance gates that decide whether you advance. Where a playbook explains why a motion works, a flow is what you step through to execute it. An agentic flow is the same motion under an agent harness: it adds the architecture that runs the execution layers.

Every flow is grounded in content the wiki already ships, so each cross-link resolves and the numbers are attributed to their named sources rather than re-litigated here.

## How to run any GTM flow

The operator's decision sequence, drawn from [Agent vs Human Workflows](../agentic/agent-vs-human-workflows):

1. **Score the blast radius.** How reversible is this work? How much does a mistake cost? This decides how much human control the flow needs.
2. **Place it on the autonomy ladder.** Low blast radius, reversible, high volume → automate. Customer-facing or financial → keep a human at the gate.
3. **Verify the governance.** Can you audit what the flow did? Is there an override and an exception queue?
4. **Add the human-in-the-loop control.** The checkpoint is not a bottleneck; it is where judgment sits. Approve the pattern, not every keystroke.
5. **Start narrow, prove, scale.** Prove the control model on a small surface before you widen it.

The one rule that governs every flow in this section: **augment, don't replace.** The data is unambiguous: hybrid human-in-the-loop teams produce 2.8x more pipeline than full-autonomous attempts. The harness removes the thinking bottleneck *between* gates. Humans keep judgment on the send.

## Flows

- [Outbound: from list to pipeline](./outbound): the executable version of [outbound-from-zero](../playbooks/outbound-from-zero). Decision gate → list → channel/tooling → sequence → run/measure → handoff, with an ASCII decision tree for the branches an operator hits.
- [Agentic Outbound: the harness](./agentic-outbound): the same motion under an agent harness. The layer stack (data/compose/orchestration/triage), the augment-don't-replace rule, the triage decision tree, and the autonomy-placement table.
- [Sales Process: the MEDDPICC flow](./sales-process-meddpicc): six stage-gated stages from qualification to closed-won. The activities, the partner-channel angle, the resources and artifacts each stage needs, the exit criteria that gate it, and the agentic SOP that writes the value hypothesis.

More flows land here as the playbooks and agentic pages mature.

## Flow vs Playbook

| | Playbook | Flow | Agentic flow |
|---|---|---|---|
| Answers | What to do | How to run it | How to run it when an agent executes |
| Shape | Principles + gates | Sequence + decision tree + acceptance gates | Sequence + architecture + autonomy placement |
| Example | outbound-from-zero | Outbound: list → pipeline | Agentic outbound harness |
