---
sidebar_position: 1
title: The Agentic Stack
---

# 01 — The Agentic Stack

**Goal**: understand the five layers of an agentic GTM harness so you
can build one that scales volume without sacrificing judgment.

A harness is not "an AI tool." It is a **pipeline with judgment
checkpoints** — layers of agents that do volume work, feeding a human
who makes the calls that matter.

---

## The five layers

| Layer | What it does | Typical tools (any equivalent works) |
|---|---|---|
| 1. **Data** | Source, dedupe, enrich: firms → tech stack → intent → person | Apollo, Clay, ZoomInfo, LinkedIn |
| 2. **Research** | Per-account briefs: triggers, gaps, recent changes, org map | Agent with web + search access, LLM synthesis |
| 3. **Compose** | Draft personalized messages from the research briefs | LLM + your voice/tone rules |
| 4. **Orchestrate** | Sequence, send, cadence, follow-ups, routing | Smartlead, Instantly, n8n, Make |
| 5. **Triage** | Ingest replies, classify intent, draft responses, alert humans | LLM classifier + routing rules |

**Key insight**: layers 1–3 are *preparation*, layer 4 is *delivery*,
layer 5 is *the loop that keeps learning*. Most teams stop at 4 and
wonder why their AI outbound doesn't beat manual. The leverage lives in
5 — what you do with the replies.

---

## How the layers talk to each other

Every layer passes structured output to the next:

1. Data layer emits rows with: company, ICP fit score, reason-to-reach,
   verified email, decision-maker contact.
2. Research layer enriches each row with a **brief** (max 150 words):
   what changed, what they use, what gap you can name.
3. Compose layer writes from the brief + your tone rules, never from
   scratch. Same opening line for a row without a brief.
4. Orchestrate layer sends on cadence, handles bounces and unsubscribes,
   respects caps.
5. Triage layer routes every reply: `interested` → human within 15 min;
   `question` → drafted answer for human approval; `not now` → nurture;
   `unsubscribe` → remove instantly.

The brief is the contract. **If the brief is thin, the message is thin.**
The whole harness is only as good as the research layer.

---

## Build order (start small)

1. **Manual, one lane** — pick one ICP segment, one reason-to-reach.
   Prove the message works by hand (300+ sends).
2. **Automate the data** — layer 1 only. Cut list-building time to near
   zero. Keep writing messages yourself.
3. **Add research briefs** — layer 2, human-approved. See if briefs
   improve reply rate before you scale.
4. **Compose from briefs** — layer 3, human approves every send.
5. **Close the loop** — layer 5 triage. Now you can scale volume and
   still answer fast.

**Acceptance gate at every step**: the metric you care about (reply
rate, meetings per 1,000) must improve or hold. If automation doesn't
make the numbers better, it's just cheaper noise.

---

## What NOT to automate

- **Final send to a named human** — approve or fully automate only
  after the pattern is proven (hundreds of replies analyzed).
- **Objection handling beyond the first reply** — a real back-and-forth
  needs judgment, not templates.
- **ICP definition** — that's the strategy layer, not the execution
  layer. Agents execute the ICP; they don't redefine it.
- **Anything regulated** — healthcare, finance, legal outreach has
  compliance constraints. The human signs for it.

---

## Common failure modes

- **Automating the message before the message works** — you scale
  something that was never proven; 10x the noise.
- **No brief contract** — compose layer writes generic copy because
  research never ran; personalization is fake.
- **Triage as an afterthought** — replies pile up, SLAs blow, and the
  "AI pipeline" dies of slow follow-up.
- **Judgment creep** — an agent "decides" a reply is safe to send. It
  isn't your agent; it's your reputation.

---

*Next: [02 — Agentic Outbound](./02-agentic-outbound.md) — the same
gates, faster loops.*
