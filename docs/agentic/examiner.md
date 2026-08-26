---
sidebar_position: 2
title: Examiner Deep Dive
description: How the examiner uses the ledger to validate changes and enable recursive self-improvement.
---



# Examiner Deep Dive

The examiner is the mechanism that makes the GTM OS trustworthy. It ensures that every change to the motion is validated against recorded outcomes before it deploys. This is the core of the across‑task improvement loop (the **Recursive Skill Memory Evolution** from Recuris). <img src="/assets/examiner.png" alt="Examiner Diagram" />

*Source: GTM OS Blueprint (DOC GTM-OS-001 · REV K · 2026-07-29), Recuris paper*

## How the Examiner Works

At a high level, the examiner follows this cycle for each proposed change to the motion:


1. **Load the golden set** – a verified subset of the outcome ledger (the operator‑owned file `evals/` or a dispositions log) that any version of the motion must handle correctly. 
2. **Replay the proposed rules** – run the changed motion (e.g., a new scoring rule) over the operator’s recorded history. 
3. **Compare outcomes** – determine what would have been different: which accounts would have re‑ranked, which sends would have been blocked, which past outcomes the new rules would have predicted better or worse. 
4. **Return a verdict** – if the change is predicted to improve outcomes (or at least not harm them), it is allowed to merge; otherwise, it is blocked. This creates a bounded recursive loop:

**Memory (ledger) → Behavior (agent execution) → Evidence (dispositions) → Failure Localization → Targeted Update → Better Memory**

The structured trace from the engagement flow (Task State → Skill Invocation → Execution → Verification → Updated Task State) is critical: it lets the examiner attribute each diagnosed failure to a specific memory component (e.g., stored skill, working‑state representation, invocation policy, checker) and propose a targeted repair. ## Key Properties

- **Tests come from the record, not imagination** – the golden set is built from verified dispositions, so a failure captured once cannot recur silently. - **The judge is pinned and logged** – the model that grades semantic verdicts is drawn from a different model family than the model that produced the work, to avoid shared blind spots. - **The suite runs on every change** – the examiner’s runtime is a budget like any other; a slow suite gets run monthly and protects nothing, so we keep it fast enough to run on every change. - **Green suite proves the checks hold** – before trusting a verdict, we hand the grader a planted pass and a plausible fail to ensure the rubric cannot be gamed. ## Example: Evaluating a New Scoring Rule

Here’s a concrete example of how the examiner evaluates a proposed change to the scoring rules skill. 
1. **Load the golden set**  
   The examiner retrieves the verified dispositions from the ledger (e.g., `evals/golden-set.jsonl`). This is a subset of outcomes that any version of the motion must handle correctly. 
2. **Replay the proposed rules**  
   The harness retrieves the new scoring rule (e.g., a tweak to the firmographic fit weights). For each disposition in the golden set, the executor runs the proposed rules over the account and context at the time of the disposition. 
3. **Compare outcomes**  
   The examiner computes:  
   - Which accounts would have re‑ranked (e.g., moved from tier 2 to tier 1). - Which sends would have been blocked or allowed. - Which past outcomes the new rules would have predicted better or worse (e.g., precision on closed‑won lookalikes). 
4. **Return a verdict**  
   If the change improves key metrics (e.g., precision lifts, reduces false positives) and passes the validation gate (no regression on a held‑out development set), the change is allowed to merge. Otherwise, it is blocked, and the examiner returns evidence explaining why (e.g., “this change would have blocked 23 past winning sends”). ## Diagrams

Below is a mermaid sequence diagram showing the examiner loop and its connection to the engagement flow. ```mermaid
sequenceDiagram
    participant Ledger as Outcome Ledger
(evals/ or dispositions log)
    participant Golden as Golden Set
(verified subset)
    participant Harness as Harness
    participant Model as Model
    participant Tools as Tools
(CRM, Enrichment, etc.)
    participant Files as Files
(Account, Skill Files)
    participant WM as Working Memory
(Task State)
    participant EM as Experiential Memory
(Skill Library)
    participant Examiner as Examiner
(Meta‑Agent + Judge)
    participant Verdict as Verdict
(merge/block with evidence)

    % Load golden set
    Examiner->>Ledger: Request verified dispositions
    Ledger-->>Examiner: Return golden set

    % For each disposition in golden set, replay proposed change
    loop For each disposition in golden set
        Examiner->>Harness: Request skill based on task state (from disposition)
        Harness->>EM: Load skill (e.g., scoring rules)
        EM-->>Harness: Return skill procedure
        Harness->>Model: Assemble prompt + context
        Model->>Harness: Request tool call (e.g., CRM read)
        Harness->>Tools: Execute tool call
        Tools-->>Harness: Result
        Harness->>WM: Verification passed? alt Verified
            WM->>WM: Update task state with disposition outcome
        else Not Verified
            WM->>WM: Keep state unresolved
        end
    end

    % Compare outcomes and return verdict
    Examiner->>Examiner: Compute what would have been different
    Examiner->>Verdict: Return merge (with evidence) or block (with reasons)
```

## Related Pages

- [GTM OS Architecture](../agentic/00-gtm-os-architecture.md): Shows the 4‑layer model that the examiner operates within. - [Engagement Flow](../flows/engagement-flow.md): Shows how dispositions flow through the layers and produce the ledger the examiner uses. - [Autonomy Ladder](./autonomy-ladder.md): Shows how agents earn and lose autonomy based on verified outcomes. - [Repo Structure](./gtm-os-repo-structure.md): Shows the file tree (`icp/`, `personas/`, `plays/`, `skills/`, `scoring.md`, `policies/`, `evals/`). > _“The examiner holds every actor to the same bar, and its own graders are tested with planted cases before their verdicts count.”_ - GTM OS Blueprint
