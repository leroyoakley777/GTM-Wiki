---
sidebar_position: 6
title: Controls
description: Failure modes, mitigations, and how the GTM OS prevents silent regressions.
tags: [controls, failure-modes, mitigations]
---
# Controls

The GTM OS is designed to prevent silent regressions and ensure that any change to the motion is visible, testable, and reversible. This page lists the **top failure modes** that the operating system guards against, along with the **mitigations** built into the layers.

## Top Failure Modes

| # | Failure Mode | How it happens | How the OS prevents or surfaces it |
|---|--------------|----------------|------------------------------------|
| **1** | **Silent regression** – a change improves vanity metrics but hurts real outcomes (e.g., more emails sent but fewer meetings). | The change is not tested against the outcome ledger; only surface-level metrics are checked. | The **examiner** replays every change against the disposition ledger and reports outcome-level differences (re‑ranking, blocked sends, precision/recall). No change deploys without this check. |
| **2** | **Agent overreach** – an agent takes actions outside its autonomy rung (e.g., sends discounts it isn’t authorized to offer). | The agent’s skill or policy is updated without agent approval, or the autonomy ladder is bypassed. | **Agent approval** (quality gate question 3) is required for any change that touches agent‑facing files. The autonomy ladder ensures agents can only act within their proven rung; one error demotes immediately. |
| **3** | **Build‑order violation** – automating outreach before the disposition ledger is solid, leading to volume without learning. | Teams skip disposition capture and jump straight to automation scripts. | The **build order** check (quality gate question 4) enforces that outreach automation (phase 4) cannot be added before the disposition ledger has sufficient verified outcomes (configurable threshold). |
| **4** | **Untracked change** – a change is made outside the repository (e.g., a sequence edited directly in a vendor UI). | The change is not versioned, so there is no history, no review, and no way to revert. | The **quality gate question 1** requires every change to be a versioned file in the operator’s repository. All motion elements must live as code. |
| **5** | **Misaligned incentives** – a change improves a proxy metric (e.g., email open rate) but harms the ultimate goal (e.g., revenue). | Optimization focuses on easy‑to‑measure proxies rather than outcomes. | The **examiner** uses the outcome ledger, which contains the true business results (meetings, deals, revenue). The golden set is built from verified dispositions, so the system optimizes for what actually matters. |
| **6** | **Judge drift** – the model used to grade semantic verdicts changes over time, making scores incomparable. | The grader model is upgraded silently, causing previously passing changes to now fail (or vice versa). | The **judge is pinned and logged**: the model family and version are recorded with every verdict. A grader upgrade requires explicit re‑validation against planted cases. |
| **7** | **Feedback loop breakdown** – dispositions stop flowing into the ledger, so the examiner has stale data. | The execution harness fails to log outcomes, or the ledger is not updated. | The **engagement flow** includes verification and update steps. The system treats missing disposition logging as a failure; the executor must confirm that each action produced a disposition entry. |
| **8** | **Over‑fitting to the golden set** – the motion is tuned to pass the golden set but fails on new dispositions. | Teams optimize for the historical cases only. | The golden set only **grows**; it never shrinks. New dispositions that represent real failures are added to the set, raising the bar. The system is permitted to fail in new ways only. |

## Mitigations Built into the Layers

| Layer | Mitigation |
|-------|------------|
| **Models** | Use pinned, logged models for grading; avoid shared training with the working model to reduce blind spots. |
| **Harness** | The executor must produce a disposition for every action; the harness validates that the disposition ledger is updated before considering the action complete. |
| **Skills** | Skills are versioned files; any change triggers the examiner. Skills include inline tests (if applicable) and are subject to agent approval if agent‑facing. |
| **Tools/Prompts/Context** | Connectors are thin and standard‑based (e.g., MCP). Prompts are versioned and tested via the examiner (if they affect behavior). |
| **Process** | The quality gate enforces the four questions on every PR. The build order prevents premature automation. The autonomy ladder ensures agents earn rights. |
| **Culture** | The system treats a failure captured once as a permanent test case. Blameless post‑mortems focus on updating the ledger and improving the examiner, not on hiding the failure. |

## Diagrams

Below is a fault‑tree showing how the OS prevents silent regressions.

```mermaid
faultTree
    FT[Top event: Silent regression in deployed motion]
    FT --> OR[Or gate]
    OR --> A1[Change not tested against outcome ledger]
    OR --> A2[Agent acts outside authorized rung]
    OR --> A3[Build order violated (outreach before ledger)]
    OR --> A4[Change made outside repository (no versioning)]
    OR --> A5[Optimization for proxy metric only]
    OR --> A6[Judge model drift undetected]
    OR --> A7[Feedback loop broken (no disposition logging)]
    OR --> A8[Motion over‑fit to historical golden set]

    %% Mitigations (as barriers)
    A1 --> B1[Examiner replays every change against ledger]
    A2 --> B2[Agent approval required + autonomy ladder with immediate demotion on error]
    A3 --> B3[Build order check in quality gate]
    A4 --> B4[Quality gate question 1: change must be versioned file]
    A5 --> B5[Examiner uses outcome ledger (real business results)]
    A6 --> B6[Judge model pinned and logged; upgrades require re‑validation]
    A7 --> B7[Engagement flow verification step ensures disposition logging]
    A8 --> B8[Golden set only grows; new failures are added, raising the bar]
```

## Example: Catching a Silent Regression

A proposed change to the outreach sequence increases the send rate from 5 % to 10 % of the target list.

- The team looks at **emails sent** (up 100 %) and thinks it’s a win.
- The **examiner** runs the change against the disposition ledger and finds:
  - **Re‑ranking**: 12 % of accounts moved from tier 2 to tier 3 (good).
  - **Blocked sends**: 0 % change (neutral).
  - **Outcome precision**: Predicted closed‑won lookalikes dropped from 68 % to 60 % (harmful).
  - **Evidence**: “This change would have blocked 23 past winning sends due to increased spam complaints.”
- The quality gate blocks the change at question 2 (examiner verdict) and returns the evidence.

## Related Pages

- [Quality Gate](./quality-gate.md) – how the gate enforces the four questions and build order.
- [Examiner Deep Dive](./examiner.md) – how the examiner validates changes against the ledger.
- [Autonomy Ladder](./autonomy-ladder.md) – how agents earn and lose autonomy.
- [Build Order](./build-order.md) – the recommended sequence for constructing a GTM OS.

---