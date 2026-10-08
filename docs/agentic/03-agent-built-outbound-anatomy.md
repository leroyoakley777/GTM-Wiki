---
class: agentic
sidebar_position: 22
title: Anatomy of Agent-Built Outbound
description: "The seven stages of an agent-built outbound pipeline, the tool at each stage, the claims-trace rule, a worked run, and the human gate before send."
last_updated: 2026-10-08
status: active
tags: [agentic, outbound, ai-era-gtm]
---

# Anatomy of Agent-Built Outbound

## Thesis

- An agent pipeline replaces the SDR admin layer: read source, enrich, draft, log, queue for a human.
- The human keeps the send, the reply, and the relationship. The agent keeps the rest.
- The stack is plumbing: CRM, enrichment, sending infra, and a transcript store the agent can read.

## Seven stages from source to send

An agent-built pipeline is a fixed sequence of stages. Each stage takes one input, runs one tool, and writes one output. Each stage has a gate. The gate decides whether the row moves forward or stops.

Most builders wire the stages and skip the gates. A pipeline with no gates sends faster and fails wider. Build the gate first, then the stage.

| # | Stage | Input | Tool | Output | Gate |
|---|-------|-------|------|--------|------|
| 1 | Source | ICP definition | CRM, list build, signals | Rows matched to ICP | Reason to reach on every row |
| 2 | Enrich | Row | Enrichment provider | Firmographics, tech stack, signals | Weak rows dropped |
| 3 | Verify | Enriched row | Email verification | Verified contact | Bounce risk under threshold |
| 4 | Draft | Verified row | Drafting agent | Email draft | Every claim traces to a field |
| 5 | Grade | Draft | Grader agent | Pass or fail per checklist item | Any fail returns the draft |
| 6 | Queue | Graded draft | Review queue | Human-approved draft | A person approves |
| 7 | Send | Approved draft | Sending orchestrator | Sent email, reply routed | Send caps and warmup hold |

The order is the design. Enrichment before drafting means the draft has data to cite. Verification before drafting means the pipeline never spends a draft on a bad address. Grading before the queue means the human reads a checked draft, not a raw one.

## Source-to-send diagram

<svg role="img" aria-label="Source-to-send pipeline: seven stages from source to send, with one human gate before send" viewBox="0 0 720 470" style={{maxWidth: '720px', width: '100%', height: 'auto', display: 'block', margin: '1.25rem 0'}}>
  <line x1="30" y1="30" x2="30" y2="430" stroke="#0053fd" strokeWidth="2" />
  <line x1="30" y1="45" x2="58" y2="45" stroke="#0053fd" strokeWidth="2" />
  <line x1="30" y1="107" x2="58" y2="107" stroke="#0053fd" strokeWidth="2" />
  <line x1="30" y1="169" x2="58" y2="169" stroke="#0053fd" strokeWidth="2" />
  <line x1="30" y1="231" x2="58" y2="231" stroke="#0053fd" strokeWidth="2" />
  <line x1="30" y1="293" x2="58" y2="293" stroke="#0053fd" strokeWidth="2" />
  <circle cx="30" cy="355" r="6" fill="#0053fd" />
  <line x1="30" y1="417" x2="58" y2="417" stroke="#0053fd" strokeWidth="2" />
  <rect x="58" y="20" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="51" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">01</text>
  <text x="118" y="42" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Source</text>
  <text x="118" y="60" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Pull rows from the data layer. One reason to reach per row.</text>
  <rect x="58" y="82" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="113" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">02</text>
  <text x="118" y="104" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Enrich</text>
  <text x="118" y="122" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Add firmographics, tech stack, and signals. Drop weak rows.</text>
  <rect x="58" y="144" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="175" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">03</text>
  <text x="118" y="166" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Verify</text>
  <text x="118" y="184" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Check the email and the person. Bounce risk stops the row.</text>
  <rect x="58" y="206" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="237" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">04</text>
  <text x="118" y="228" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Draft</text>
  <text x="118" y="246" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Write from the source row. Every claim traces to a field.</text>
  <rect x="58" y="268" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="299" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">05</text>
  <text x="118" y="290" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Grade</text>
  <text x="118" y="308" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Run the checklist. Any fail returns the draft.</text>
  <rect x="58" y="330" width="622" height="50" fill="none" stroke="#0053fd" strokeWidth="1.5" />
  <text x="76" y="361" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">06</text>
  <text x="118" y="352" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Queue</text>
  <text x="118" y="370" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">A person reads, edits, and approves. This is the gate.</text>
  <rect x="58" y="392" width="622" height="50" fill="none" stroke="currentColor" strokeOpacity="0.14" />
  <text x="76" y="423" fill="#0053fd" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="13">07</text>
  <text x="118" y="414" fill="currentColor" fontFamily="Georgia, Times New Roman, serif" fontSize="18">Send</text>
  <text x="118" y="432" fill="currentColor" fillOpacity="0.62" fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace" fontSize="11">Orchestrator sends within caps. Replies route back to the queue.</text>
</svg>

Stage 06 is the one blue-outlined node because it is the only stage a person owns. Stages 01 to 05 and 07 run without a human in the path.

## Stage by stage

### 1. Source

The agent reads from the CRM, a list build, or a signal feed. The source stage matches each row against the ICP and attaches one reason to reach. EXM7777's GTM machine starts here and treats the source row as the unit of work [1].

Gate: a row with no reason to reach does not advance. The reason is the seed for the draft, so a row without one has nothing to say.

### 2. Enrich

The agent adds firmographics, tech stack, and buying signals to each row. Enrichment gives the draft real detail instead of a template fill. EXM7777's machine enriches before it drafts and drops the weak rows [1].

Gate: a row that fails the fit check stops. A thin row costs a draft and a send, so cut it here.

### 3. Verify

The agent checks the email address and confirms the person still holds the role. Verification is the cheapest stage and the one that protects the domain. A high bounce rate damages sender reputation, and inbox placement falls with it [4].

Gate: bounce risk above your threshold stops the row. A verified list is the base for every later metric.

### 4. Draft

The drafting agent writes from the source row. Each sentence names the field that backs it. The draft is a claim with a source, the same contract every wiki page holds.

Gate: a claim with no backing field stops the draft. The pipeline drops the draft rather than ship an unbacked sentence.

### 5. Grade

A second agent grades the draft against a fixed checklist: claim, source, as-of date, no filler, active voice, specific. The grader marks each item pass or fail and never edits the draft. [Forge: Agents That Grade Each Other](./the-forge-agents-that-grade-each-other) holds the checklist format and the model-pairing setup.

Gate: any failed item returns the draft to stage 4. A draft that passes is checkable, not good. Checkable is the floor.

### 6. Queue

The approved drafts land in a review queue. A person reads, edits, and approves. This is the only stage a human owns, and it is the boundary that keeps the pipeline honest. Bustamante's agent product recipe lands the same point from the product side: the agent owns the workflow, the human owns the judgment [2].

Gate: the human approves. The pipeline does not send a draft a person has not read.

### 7. Send

The sending orchestrator handles cadence, warmup, domain rotation, and send caps. Replies route back to the queue. Instantly's sender requirements and complaint thresholds set the floor for the sending layer [4].

Gate: send caps and warmup hold. A pipeline that sends past its caps burns the domain.

## Claims-trace rule

Every claim in a draft ties to a source row. A claim without a row does not ship. This is the page contract, moved into the pipeline.

The trace runs in both directions. Forward: each sentence in the draft names the source row that backs it. Backward: each source row names the drafts it fed. When a row turns out wrong, you find every draft it touched and pull them.

Without the trace, a wrong row spreads into every draft that read it, and no one can find the drafts after the send. The trace is the difference between a pipeline you can audit and one you cannot.

## Worked run: 500 contacts

Here is a pipeline run on a 500-contact outbound segment.

```text
segment: 500 contacts, mid-market SaaS, matched ICP v3
step 1  source          500 rows, 500 with a reason to reach
step 2  enrich          500 attempted, 486 enriched, 14 miss (no match)
step 3  verify          486 checked, 471 verified, 15 miss (bounce risk)
step 4  draft           471 drafted, 41 miss (no source row)
step 5  grade           430 graded, 430 pass, 0 fail
step 6  queue           430 queued, 388 approved, 42 held for review
step 7  send            388 sent, 19 replies, 5 meetings booked
result                  388 sent, 19 replies, 5 meetings booked
```

The readout, with a named base:

| Metric | Value | Base |
|---|---|---|
| Verified rate | 97% of enriched | verification threshold holds |
| Send rate | 82% of graded | held-for-review is the delta |
| Reply rate | 4.9% of sent | prior quarter: 4.2% |
| Meeting rate | 1.3% of sent | prior quarter: 1.0% |

The reply rate beats the prior quarter, but 388 sends is a small sample. At this rate the half-width is roughly 2.2 points, so 4.9 percent and 4.2 percent overlap. The pipeline looks better than the base. The sample does not yet prove it. Run the segment more times before you scale. [Probabilistic Pipelines](./probabilistic-pipelines) holds the sample-size math.

## Guardrails and measurement

The pipeline reports four lines on every run, not just the wins:

- **Attempts.** How many rows entered each stage.
- **Hits.** How many cleared the gate.
- **Misses by class.** Not "26 failures," but "14 no-match, 15 bounce risk, 41 no-source."
- **Base.** The rate you compare against, named.

The miss classes are the useful part. A rising no-source miss means the draft step broke. A rising bounce-risk miss means the verification threshold moved. The total miss rate tells you that something moved. The classes tell you what.

Three guardrails cap a bad run:

1. **A bounce ceiling.** When the bounce rate crosses your threshold, the pipeline stops the segment and returns to verification.
2. **A review ceiling.** When the queue backs up past one person's daily capacity, slow the draft step instead of skipping approval.
3. **A trace ceiling.** When the no-source miss rate rises, stop the send and fix the source feed.

Each guardrail trades volume for safety. That trade is the point. A pipeline you can stop beats a pipeline that runs past its gates.

## Variants by stage and ACV

The same seven stages change shape with deal size and company stage. The human load and the volume cap move.

| Stage or ACV | What the agent owns | What the human owns | Volume cap |
|---|---|---|---|
| Seed, founder-led, under $8k ACV | Source, enrich, draft variants, reply labels | Every send, every meeting book | 25 to 50 sends per domain per day |
| Early team, $8k to $25k ACV | Source, enrich, verify, draft, first-pass triage | Pattern approval, hot replies, weekly debrief | One proven sequence before a second |
| Growth, $25k to $60k ACV | Multi-domain send, calendar holds, CRM writeback | Deal desk on exceptions, win and kill review | Scale only after the reply rate holds |
| Enterprise, $60k+ ACV | Research briefs and account maps | Narrative, multi-thread, legal and security review | Named accounts, not spray |

A seed founder who buys a fully autonomous SDR pays to burn a domain. An enterprise team that keeps a human on every generic bump wastes the daily capacity the hybrid model buys. Match the human load to ACV, then raise autonomy only after the reply rate holds.

## Failure modes

**Plumbing without source discipline.** The builder wires CRM, enrichment, and sending, then drafts from whatever the CRM holds. A stale row becomes confident email to the wrong person. Fix: require a reason to reach on every row before it enters the draft step.

**Skipping verification.** The pipeline drafts before it checks the address. Bounce rates climb, inbox placement falls, and the domain reputation drops with it. Fix: verify before you draft, and set a bounce ceiling.

**Autonomy past the gate.** The builder turns off human approval to move faster. A weak message now scales, and a burnt domain is a domain you lose. Fix: keep the send behind a person, and raise autonomy only after the reply rate holds.

**No trace.** The draft cites no source row, so a wrong claim is unverifiable after the send. Fix: run the trace in both directions and drop any draft that fails it.

**A grader that passes everything.** The grader returns pass on every draft and the pipeline ships unbacked claims. Fix: log every grade and watch for graders that never fail. [Forge: Agents That Grade Each Other](./the-forge-agents-that-grade-each-other) holds the grade-log format.

**A queue that rots.** The queue grows until no one reads it and approval becomes a rubber stamp. Fix: cap the queue at one person's daily capacity, and slow the draft step when it backs up. [Human Merge Gates](./human-merge-gates) holds the queue-sizing rule.

## SOP: stand up an agent-built outbound pipeline

```text
SOP: STAND-UP-AN-AGENT-PIPELINE
1. Define the ICP and require one reason to reach on every row.
2. Wire the seven stages: source, enrich, verify, draft, grade, queue, send.
3. Set the gate at each stage. A row that fails a gate stops, it does not skip.
4. Point the draft step at the source row. Drop any claim with no backing field.
5. Run the grader on every draft. Any fail returns the draft to stage 4.
6. Hold the send behind a person. The queue is the only human stage.
7. Cap sends per domain per day and keep warmup running.
8. Report attempts, hits, misses by class, and the named base on every run.
9. Set the three ceilings: bounce, review, and trace. Stop the run when one trips.
```

Run the SOP before you scale a segment. It turns "does the pipeline work?" into a measured question with a named base and a gate at every stage.

## Cross-references

- [Agentic Outbound](./agentic-outbound): the motion this pipeline runs end to end.
- [Probabilistic Pipelines](./probabilistic-pipelines): the sample-size math behind the readout.
- [Forge: Agents That Grade Each Other](./the-forge-agents-that-grade-each-other): the grader at stage 5.
- [Human Merge Gates](./human-merge-gates): the queue that holds the send.
- [Claims Stores](./claims-stores-append-only-research): the store the source rows live in.
- [Guardrails and Measurement](./guardrails-and-measurement): the safety layer that caps a bad run.
- [Outbound from Zero](/docs/playbooks/outbound-from-zero): the manual playbook this pipeline accelerates.

## Sources

- [1] [EXM7777: how to build a GTM machine from 0 to $10k MRR](https://x.com/EXM7777/status/2089714608244457543), as-of 2026-08-18: agent reads source, enriches via Clay, drafts, human sends.
- [2] [Nicolas Bustamante: agent product recipe](https://x.com/nicbstme/status/2088014852954669300), as-of 2026-08-13: agent products bundle workflow ownership, not chat.
- [3] [Clay: B2B Cold Email Deliverability](https://www.clay.com/blog/b2b-cold-email-deliverability), as-of Apr 2026: inbox ceilings of 50 sends per inbox per day, 2 to 3 inboxes per domain, and a 3-week warmup.
- [4] [Instantly: 2025 Guide to AI Outbound Sales](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/), as-of 2025-2026: Google and Yahoo sender requirements, a complaint rate under 0.3 percent, and inbox placement above 80 percent.
