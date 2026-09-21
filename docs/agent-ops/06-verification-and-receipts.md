---
sidebar_position: 6
title: Verification and receipts
description: An agent's claim of completion is data, not a fact. Prove shipped work with hash-bound receipts and live-destination checks.
tags: [agent-ops, verification, receipts, trust, reliability]
status: active
last_updated: 2026-09-20
---

# Verification and receipts

Agents report completion with total confidence and no relation to reality.
The tool call succeeded, so the agent says "done," and the summary reads as a
fact. It is a claim. The gap between claim and reality is where trust in agent
systems dies, and the fix is mechanical: completion means a verified artifact
at a live destination, or it does not count.

## Claim versus artifact

Grade every agent report against this ladder:

| Claim | What it proves | Count it? |
|---|---|---|
| "The script exited 0" | The script ran | No |
| "The file was written" | Bytes landed somewhere | No |
| "The commit pushed" | Code is on a branch | Only for internal work |
| "The URL serves the new content" | A user can consume the artifact | Yes |

The word "shipped" belongs only to the last row. A deploy that returns 200 on
the old page, a build that compiles while serving stale data, a cron that
exits 0 on an empty output: all of these have ended in a confident report and
an angry user. The artifact at the destination is the only witness that
matters.

## Hash-bound receipts

A receipt binds a claim to a specific artifact:

```json
{
  "page": "agent-ops/03-decision-gates",
  "candidate_hash": "76341043d391...",
  "live_fragments": [
    "Jev-style decision gates",
    "epoch.ai/data-insights/llm-inference-price-trends"
  ],
  "verified_at": "2026-09-20T18:20:00Z",
  "origin": "https://example.com"
}
```

Three properties make a receipt trustworthy:

1. **The hash pins the content.** The receipt records the exact bytes claimed,
   so nobody can retrofit a claim onto different content.
2. **The fragments come from the live destination.** They are read from the
   served page after deploy, never from the draft. Fragments must be long
   enough to be unambiguous.
3. **The timestamp and origin are recorded.** Later audits can re-check the
   URL and see whether the fragments still serve.

A throughput counter that only counts receipt-bound work produces a number you
can defend. A counter that counts commits produces a number you can inflate
by accident.

## Live-destination proof

The verification order is always the same:

1. Produce the artifact.
2. Ship it to its destination.
3. Read the destination back.
4. Compare what serves against what you meant to ship.
5. Only then claim completion.

Step 3 is the one teams skip, and it is the whole check. "I updated the page"
and "the updated page serves" are different facts separated by a deploy
pipeline that can fail, cache, or time out. A narrow check of the build
output never justifies the word "fixed"; the destination is the judge.

## Failure modes and how to fix them

**Success theater.** The agent reports success in confident prose and nobody
checks. Fix: reports must carry the receipt or the artifact path; a summary
without a verifiable handle is a rejection.

**Narrow checks widen into claims.** "Lint passed" becomes "it works." Fix:
separate what each check proves and forbid the vocabulary upgrade. Lint proves
lint.

**The verification races the deploy.** The checker reads the URL before the
pipeline finishes and fails, or worse, reads a cached old page and passes.
Fix: poll the destination for the new content fragments with a bounded retry,
and treat "old content still serving" as not-yet-shipped, not as failure.

**Receipts rot.** A receipt verified at deploy says nothing about next month.
Fix: pair receipts with a scheduled re-check that re-reads live fragments;
drift between receipt and reality is a finding, not a nuisance.

## Variants by company stage

**Solo and seed.** One habit: before you tell anyone it shipped, open the URL
yourself. Manual verification beats none.

**Series A to B.** Automate the receipt: hash the artifact, poll the
destination, write the JSON. Wire the throughput counter to receipts.

**Enterprise.** Receipts become audit evidence: retained, signed, and paired
with decision ledgers so any automated action traces to a verified artifact
and an owner.

## Where to go next

- [Scheduled agent fleets](./cron-fleets) for watchdogs that check artifacts
  on a schedule.
- [The agent OS harness](./agent-os-harness) for where verification sits in
  the stack.
- [An agent-built knowledge base](./agent-built-wiki) for receipts running a
  whole pipeline.
