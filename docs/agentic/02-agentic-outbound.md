---
sidebar_position: 2
title: Agentic Outbound
---

# 02 — Agentic Outbound

**Goal**: run [Outbound from Zero](../playbooks/outbound-from-zero.md)
with an agentic harness — same acceptance gates, same funnel metrics,
drastically faster loops.

This is not a new playbook. It is the existing playbook with the
execution layer replaced. If you haven't read
[Outbound from Zero](../playbooks/outbound-from-zero.md) first, do that —
the gates below assume it.

---

## Step 1 — Build the list (now: agents source, you score)

The rule "a 500-row list that matches the ICP beats a 50,000-row
spray" doesn't change. What changes is *how fast* you can get to the
good 500.

| Layer | Manual (before) | Agentic (now) |
|---|---|---|
| Sourcing | hours of searching | agent pulls from data layer, deduped, enriched |
| Reason-to-reach | you write one per row | agent drafts one per row from research; you approve the pattern |
| Perfect-fit tier (20%) | your judgment | agent scores fit; you confirm the top 20% |

**The gate stays**: every row has a first name, a verified email, and a
one-line reason-to-reach. The agent can *propose* rows; you still sign
off on the list before anything is sent.

**Why this wins**: the bottleneck in outbound has never been sending —
it's the thinking per row. Agents remove the thinking bottleneck;
humans keep the judgment.

---

## Step 2 — Write the sequence (agents draft, you set the rules)

The sequence structure stays: Email 1 (reason-to-reach), Email 2
(proof/resource), Email 3 (different angle), breakup. Under 90 words.
One ask per email.

What agents add:

- **Variant generation**: draft 5 versions of each email from the
  brief; you pick the voice; the harness learns your pick.
- **Personalization at scale**: the research brief fills the specific
  line — "I saw [company] announced [trigger]" — without you writing
  it 500 times.
- **Tone control**: you paste 3 emails you love; the compose layer
  matches that voice. Your voice, not generic AI copy.

**The gate stays**: every variant is human-approved before the first
send. After 300+ sends per variant, the harness can carry the proven
pattern with spot-check approval.

---

## Step 3 — Run the loop (agents send, humans triage)

Delivery is the easy part — the orchestrator handles cadence, warmup,
domain rotation, caps.

The real agentic win is **triage**:

| Incoming reply | Agent action | Human action |
|---|---|---|
| "Interested, let's talk" | Route + alert immediately | Book the meeting (15 min SLA) |
| "What does it cost?" | Draft answer from approved FAQ | Approve + send |
| "Not right now" | Tag nurture, schedule follow-up | None (automated, respects unsubscribe) |
| "Unsubscribe" | Remove instantly, honor it | None — do not re-contact. Ever. |

The metric that matters: **time-to-first-response**. Manual teams die on
this — agents keep it under 15 minutes for hot replies, which is where
outbound deals are actually won or lost.

---

## Step 4 — Measure the same funnel, plus agent-specific metrics

The core funnel doesn't change (delivery >97%, open 50–70%, reply 2–5%,
positive reply >30%, meetings per 1,000 sends 3–10).

Add these harness-health metrics:

| Metric | Healthy range | What it tells you |
|---|---|---|
| Brief coverage | >90% of sends have a real brief | Personalization is real, not templated |
| Human approval rate | declining toward 20% | Trust is building in the compose layer |
| Triage accuracy | >95% correct routing | The loop won't bury hot leads |
| Time-to-first-response | under 15 min for hot | The loop converts replies into meetings |
| Human-in-loop override rate | under 5% | The harness isn't saying things you'd veto |

---

## Step 5 — Handoff (unchanged, still the failure point)

Agents don't fix a broken handoff; they make it faster. If you don't
have a meeting standard, source tracking, and a 2-week debrief rhythm,
automation just fills the funnel faster with unqualified meetings.

**The gate stays**: every meeting traces to a campaign; every 2 weeks
you debrief what won, what converted, what killed.

---

## Common failure modes (agentic edition)

- **Scaling a broken message** — the harness sends 10x faster, so a
  weak offer dies 10x faster. Prove the message first.
- **Fake personalization** — brief coverage under 90% means the "specific"
  lines are placeholders. Buyers can smell it.
- **No triage owner** — replies hit an inbox with no SLA and the loop
  dies quietly.
- **Trusting the approval slide** — skipping human approval on a "proven
  pattern" before you've seen hundreds of replies.
- **Domain hygiene skipped** — agents make it easy to send more, faster,
  and burn a domain in days instead of weeks.

---

*Synthesized from first-hand 0→1 outbound builds (Salesloft, Gladly,
Apollo) plus agent-harness work 2025–2026. The motion hasn't changed;
the leverage has. Next: [03 — Guardrails & Measurement](./03-guardrails-and-measurement.md).*
