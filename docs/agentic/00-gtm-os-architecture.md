---
sidebar_position: 1
title: GTM Operating System Architecture
description: The 4-layer architecture of the GTM OS, showing how models, harness, skills, and tools compose into a governed whole.
tags: [architecture, gtm-os, layers, harness, skills, tools, system-design]
status: active
---

# GTM Operating System Architecture

The GTM OS is built as a **4-layer architecture**, where each layer has a distinct responsibility and clear interfaces. This separation enables independent evolution, testing, and replacement of components while maintaining system integrity.

<img src="/assets/gtm-os-architecture.png" alt="GTM OS 4-Layer Architecture" />

*Source: GTM OS Blueprint (DOC GTM-OS-001 · REV K · 2026-07-29)*

## Layer 1: Models

**What it decides:** Reasoning, generation, and judgment for specific tasks.

- **Purpose:** Supply the intelligence for each step in the GTM motion.
- **Selection criterion:** Match model size/cost to the cost of being wrong for the task.
- **Examples:**
  - **Fast/low-cost models:** Tagging, extraction, deduplication (AR-001)
  - **Mid-tier models:** Drafting messages, tone control (AR-001)
  - **Strongest models:** Judgment, exceptions, reasoning depth (AR-001)
- **Ownership:** You buy/rent the models; they are external commodities.

## Layer 2: Harness

**What it decides:** How to assemble a request, expose tools, retrieve files, execute the model’s ask, and apply limits.

- **Purpose:** The scaffolding around the model call that turns raw intelligence into useful capability.
- **Responsibilities:**
  - Assemble the request (prompt + context)
  - Expose the tools the model may need
  - Retrieve relevant files from memory
  - Execute what the model asks for (tool calls, etc.)
  - Feed results back to the model
  - Stop the loop at predefined limits (cost, time, iterations)
- **Ownership:** You build and maintain the harness; it holds your advantage over competitors who rely on generic agent frameworks.

## Layer 3: Skills / Enhancements / Subagents

**What it decides:** Reusable procedures that the agent loads to act.

- **Purpose:** Codified GTM expertise that turns goals into action.
- **Components:**
  - **Skills:** File-based procedures (e.g., scoring rules, persona mapping)
  - **Enhancements:** Frameworks, playbooks, approved claims
  - **Subagents:** Specialists to whom the agent delegates narrow tasks
- **Ownership:** You write and version these; they are your IP.
- **Key property:** Skills are short, purpose-built, and loadable on demand to stay within the agent’s context window.

## Layer 4: Tools / Prompts / Context / Files

**What it decides:** The data and interfaces the agent uses during execution.

- **Purpose:** The raw materials the agent works with-files, retrieved data, working results, and the context budget.
- **Components:**
  - **Tools:** CRM writes, enrichment lookups, MCP connectors
  - **Prompts:** Standing instructions that set how the agent behaves
  - **Context:** The finite window for each call (a budget, not a container)
  - **Files:** Structured retrieval (1 file per account with named sections, 1 procedure per skill file, index at top level)
- **Ownership:** You integrate and structure these; they are your operational foundation.

## Cross-Layer Interfaces

| Interface | Direction | Description |
|----------|-----------|-------------|
| Models ←→ Harness | Bidirectional | Harness exposes tools and context; models request specific tool calls or file retrievals |
| Harness ←→ Skills | Unidirectional (down) | Harness loads and invokes skills based on the task state |
| Skills ←→ Tools | Bidirectional | Skills call tools (e.g., a scoring skill calls the CRM) and may return results to the harness |
| Harness ←→ Context/Files | Bidirectional | Harness manages the context budget and retrieves files; files are loaded only when needed |
| Context/Files ←→ Tools | Unidirectional | Tools read from and write to files (e.g., enrichment writes to the account file) |

## Why This Architecture Wins

1. **Independent evolution:** You can upgrade models without rewriting skills, or refine skills without changing the harness.
2. **Clear ownership:** Each layer has a defined owner (you buy models, you build harness, you write skills, you integrate tools).
3. **Context efficiency:** By loading only what’s needed (via the index and file structure), the agent stays within its context window.
4. **Replaceability:** Every component is replaceable without loss of state because state lives in the files/ledger, not in the components themselves.
5. **Agentic alignment:** The architecture mirrors how humans work-models reason, harness orchestrates, skills are playbooks, tools are the systems we use.

## Related Pages

- [Engagement Flow](../flows/engagement-flow.md): Shows how dispositions flow through the layers
- [Examiner Deep Dive](./examiner.md): Shows how the examiner uses the ledger to validate changes
- [Autonomy Ladder](./autonomy-ladder.md): Shows how agents earn and lose autonomy across layers
- [Repo Structure](./gtm-os-repo-structure.md): Shows the file tree (`icp/`, `personas/`, `plays/`, etc.) that implements the layers

> _“The GTM OS is not a dashboard-it’s a declared state machine where every layer decides something different about whether the design succeeds.”_ - GTM OS Blueprint