---
sidebar_position: 1
title: Engagement Flow
description: How dispositions flow through the GTM OS layers-from task state to skill invocation, execution, verification, and update.
tags: [engagement, disposition, flow, task-state, skill, execution, verification]
status: active
---

# Engagement Flow

The engagement flow describes how a single touch (a disposition) moves through the GTM OS layers, from the moment the agent decides what to do, through execution, to verification and state update. This flow is the core of the agent’s within‑task loop (the **Verified EM–WM Coupling** from Recuris) and is also the substrate on which the examiner operates.

<img src="/assets/engagement-flow.png" alt="Engagement Flow Diagram" />

*Source: GTM OS Blueprint (DOC GTM-OS-001 · REV K · 2026-07-29), Recuris paper*

## Four‑Step Loop

At a high level, each disposition follows this cycle:

1. **Task State → Skill Invocation**
   The agent’s **working memory** (compact, evidence‑grounded representation of progress and unresolved goals) determines which skill should be invoked from **experiential memory** (the library of reusable procedures).

2. **Skill Invocation → Execution**
   The harness loads the skill, assembles the request (prompt + context), exposes the needed tools, and executes what the model asks for (tool calls, file reads/writes, etc.).

3. **Execution → Verification**
   After the agent acts, the harness checks the environment response (tool result, outcome) before it commits any state change. Verification confirms that real results, not just verbal completion, support progress.

4. **Verification → Updated Task State**
   If verification passes, working memory is updated: completed goals are marked, unresolved goals may shift, and the agent’s representation of the current task state evolves.

This creates a closed execution loop:

**Task State → Skill Invocation → Execution → Verification → Updated Task State**

---

## Layer‑by‑Layer Walkthrough

| Layer | Role in the Flow | Details |
|-------|------------------|---------|
| **Models (Layer 1)** | Provide the reasoning that drives skill selection and execution. | The model decides *which* skill to invoke (given the task state) and *how* to use the tools (e.g., what arguments to pass to a CRM write). |
| **Harness (Layer 2)** | Assembles the request, manages context, and enforces limits. | • Builds the prompt from task state and retrieved files.
• Exposes tools (CRM, enrichment, MCP connectors).
• Retrieves only the needed files (via the index and file‑per‑account structure).
• Executes what the model asks for.
• Stops the loop at predefined limits (cost, time, iterations). |
| **Skills / Enhancements / Subagents (Layer 3)** | Codified procedures that the agent loads to act. | • A skill file (e.g., scoring rules) contains the exact steps to compute a score from an account file.
• Enhancements (playbooks, frameworks) give higher‑level guidance.
• Subagents delegate narrow tasks (e.g., a research subagent). |
| **Tools / Prompts / Context / Files (Layer 4)** | The raw materials and interfaces used during execution. | • **Tools:** CRM writes, enrichment lookups, MCP connectors.
• **Prompts:** Standing instructions that set how the agent behaves (e.g., tone control, why‑now injection).
• **Context:** The finite window for each call (a budget, not a container). The agent loads only what it needs to stay within its context window.
• **Files:** Structured retrieval-1 file per account with named sections, 1 procedure per skill file, and an index at the top level so the agent can decide what to open before opening anything. |

## Verification Gate

The verification step is critical: it prevents the agent from mistaking **verbal completion** for **execution completion**. Only after the environment response (e.g., a tool call result, an enrichment lookup, a disposition recorded) is checked does the harness allow the working memory to be updated.

If verification fails:
- The disposition is **not** recorded.
- The working memory is **not** updated.
- The agent may retry with a different skill, fall back to a default action, or escalate for human review.

This is why the harness includes **checkers** (e.g., did the CRM write succeed? did the enrichment return valid data?) that must pass before any state change is committed.

## Connection to the Examiner (Across‑Task Improvement)

Each disposition that passes verification is appended to the **outcome ledger** (the operator‑owned file `evals/` or the golden set). The examiner later replays this ledger against proposed changes to the motion (e.g., a new scoring rule) to determine whether the change would have improved past outcomes.

Thus, the engagement flow is not just about executing a single touch-it is the **source of structured diagnostic evidence** that enables recursive self‑improvement:

**Memory (ledger) → Behavior (agent execution) → Evidence (dispositions) → Failure Localization → Targeted Update → Better Memory**

## Example: One Disposition Flow

Here’s a concrete example of how a disposition flows through the layers for a simple outbound email send.

1. **Task State**
   Working memory shows:
   - Unresolved goal: “Book a meeting with Acme Corp.”
   - Progress: None yet.
   - Evidence: The account matches ICP, a signal fired last week.

2. **Skill Invocation**
   The harness loads the **outbound email skill** (a procedure in `skills/outbound.md`) because the task state indicates that an initial outreach is needed.

3. **Execution**
   - The model (guided by the skill) decides to send an email with a specific template.
   - The harness assembles the prompt, exposes the CRM write tool, and retrieves the account file (`accounts/acme-corp.md`).
   - The skill calls the CRM tool to create an email activity with the template and logs the disposition as an **email sent**.

4. **Verification**
   - The harness checks the CRM write result: success (`200 OK`).
   - Because verification passes, the disposition is allowed to proceed.

5. **Updated Task State**
   - Working memory is updated:
     - Unresolved goal: “Book a meeting with Acme Corp.” (still unresolved, waiting for reply).
     - Progress: “Email sent” is now recorded as completed.
     - Evidence: The disposition is stored in the outcome ledger (`evals/` or a dispositions log) with timestamp, actor, action, target, channel, and result.

This disposition now contributes to the ledger that the examiner will use to evaluate future changes to the outbound email skill or scoring rules.

## Worked Example: Scoring a Lead with the ICP Skill

Here’s a concrete example of how the engagement flow works when scoring a lead using the ICP skill.

1. **Task State**
   - Working memory shows:
     - Goal: “Score new inbound lead Acme Corp.”
     - Progress: None yet.
     - Evidence: Lead submitted form, matched ICP traits (employees 200-500, uses Salesforce).

2. **Skill Invocation**
   - The harness loads the **ICP scoring skill** (`skills/icp-score.md`) because the task state indicates scoring is needed.

3. **Execution**
   - The model (guided by the skill) decides to compute a score based on firmographic and technographic fields.
   - The harness assembles the prompt, exposes the file read tool, and retrieves the account file (`accounts/acme-corp.md`).
   - The skill reads the file, checks employee count and tech stack, and returns a score of 85 (out of 100).

4. **Verification**
   - The harness checks the skill result: a numeric score between 0-100.
   - Because verification passes, the disposition is allowed to proceed.

5. **Updated Task State**
   - Working memory is updated:
     - Goal: “Score new inbound lead Acme Corp.” (completed).
     - Progress: “ICP score: 85” is now recorded as completed.
     - Evidence: The disposition is stored in the outcome ledger (`evals/icp-score.jsonl`) with timestamp, actor, action, target, score, and inputs.

This disposition now contributes to the ledger that the examiner will use to evaluate future changes to the ICP scoring skill.

## Objection/Layer: What Could Break This Flow and How We Mitigate

| Potential Failure | How It Happens | Mitigation in the OS |
|-------------------|----------------|----------------------|
| **Skill returns non-numeric output** | The ICP skill is edited to return a string label instead of a number. | The verification step checks that the output is a number; if not, the disposition is blocked and the agent is prompted to fix the skill. |
| **File read fails (account file missing)** | The account file is misnamed or deleted. | The harness catches the file‑not‑found error and treats it as a verification failure; the agent must recreate the account file from the CRM before proceeding. |
| **Model hallucinates tool arguments** | The model asks the skill to read a non‑existent field. | The skill validates that requested fields exist in the account file; if not, it returns an error that the harness treats as a verification failure. |
| **Ledger append fails (disk full)** | The outcome ledger cannot be written due to storage issues. | The harness treats any failure to append the disposition as a verification failure; the operator is alerted to free storage. |
| **Verification bypassed** | A change to the harness skips the verification check. | The quality gate (question 2) requires that every PR to the harness includes a test that verification is enforced; the examiner will also catch regressions because dispositions won’t be recorded. |

## Diagrams

Below is a mermaid sequence diagram showing the four‑step loop and the layer interactions.

```mermaid
sequenceDiagram
    participant WM as Working Memory
(Task State)
    participant EM as Experiential Memory
(Skill Library)
    participant Harness as Harness
    participant Model as Model
    participant Tools as Tools
(CRM, Enrichment, etc.)
    participant Files as Files
(Account, Skill Files)
    participant Ledger as Outcome Ledger

    WM->>Harness: Request skill based on task state
    Harness->>EM: Load skill (e.g., outbound email)
    EM-->>Harness: Return skill procedure
    Harness->>Model: Assemble prompt + context
    Model->>Harness: Request tool call (CRM write)
    Harness->>Tools: Execute CRM write
    Tools-->>Harness: Result (success/fail)
    Harness->>WM: Verification passed?
    alt Verified
        WM->>Ledger: Append disposition (email sent)
        Ledger-->>WM: Updated task state (progress recorded)
    else Not Verified
        WM->>WM: Keep goal unresolved; retry/fallback
    end
```

## Related Pages

- [GTM OS Architecture](../agentic/00-gtm-os-architecture.md): Shows the 4‑layer model that underpins this flow.
- [Examiner Deep Dive](../agentic/examiner.md): Shows how the examiner uses the ledger to validate changes.
- [Autonomy Ladder](../agentic/autonomy-ladder.md): Shows how agents earn and lose autonomy based on verified outcomes.
- [Repo Structure](../agentic/gtm-os-repo-structure.md): Shows the file tree (`icp/`, `personas/`, `plays/`, `skills/`, `scoring.md`, `policies/`, `evals/`).

> _“Memory should not merely remind an agent what it once learned. It should control what the agent does next, based on what has actually been completed.”_ - Recuris paper