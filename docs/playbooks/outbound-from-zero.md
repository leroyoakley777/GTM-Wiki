---
sidebar_position: 2
title: Outbound from Zero
---

# Outbound from Zero

**Goal**: stand up a cold-outbound motion that produces pipeline on a
predictable timeline — list → signal → sequence → handoff — without
burning the budget or the sender domain.

This is the playbook I run when a company has **no outbound engine** and
needs one. It is written to be executed in that order, with the
acceptance gate at each step before moving on.

---

## Step 0 — Decide if outbound is even the right motion

Outbound is not a default. It is the right answer when:

- You know exactly **who** the buyer is (tight ICP, small total addressable market)
- The deal value justifies the human effort (ACV roughly $5k+)
- Inbound / content alone won't fill the pipe fast enough

If none of those are true, go do content or partnerships first. The
Bullseye framework will tell you which channel deserves your energy —
[01 — GTM Channels Bullseye](../foundations/01-gtm-channels-bullseye.md).

---

## Step 1 — Build the list (quality over volume)

A 500-row list that matches the ICP beats a 50,000-row spray every time.

1. **Start with the ICP from the strategy framework**, not a job title.
   The row is a *company with a problem*, not a persona.
2. **Enrich in layers**: company firmographics → tech stack → intent
   signal → the one human who owns the problem.
3. **Add a reason-to-reach for every row** — a trigger, a change, a gap.
   If you cannot write one sentence about why *this* company now, the
   row does not belong on the list.
4. **20% of the list is your "perfect fit" tier.** That tier gets
   personal research. The rest get templated value.

**Acceptance gate**: every row has a first name, a verified email, and a
one-line reason-to-reach. No reason, no row.

---

## Step 2 — Pick the channel and the tooling

Cold email is the workhorse. LinkedIn and calls are amplifiers.

| Channel | Best for | Frequency |
|---|---|---|
| Cold email | Scale + written proof | Primary |
| LinkedIn (personal + Sales Nav) | Warmth + trust | Amplifier |
| Phone | High-ACV, hard-to-reach | Last resort |

Tooling stack that works (any equivalent is fine):

- **Data / enrichment**: Apollo, Clay, or similar — list building + enrichment
- **Sending**: Smartlead, Instantly, or similar — dedicated sending infra
- **Sequencing**: the tool's native sequence engine

**Domain hygiene is non-negotiable**: dedicated sending domain,
SPF/DKIM/DMARC configured, warmup ramped 2+ weeks, and hard caps on
daily sends (~30–50/domain/day to start). Skipping this is how you burn
a domain in a week.

---

## Step 3 — Write the sequence (short, valuable, human)

The sequence is not an essay. It is a **conversation opened in writing**.

- **Email 1**: the reason-to-reach + one specific value observation. No pitch.
- **Email 2 (day 3–4)**: a proof point or a resource relevant to *their* situation.
- **Email 3 (day 7–8)**: a different angle — usually a social proof or a question.
- **Breakup (day 12–14)**: honest stop — "closing the loop, reply if timing is better."

Rules that make it work:

- **Under 90 words per email.** The reader is deciding in 3 seconds.
- **One ask per email.** Either reply, book a call, or answer a question. Never both.
- **Write like a human, not a marketer.** No "I hope this finds you well."
- **Value first**: the email should be useful even if they never reply.

---

## Step 4 — Run the loop and measure the funnel

Outbound is a numbers game — but the numbers must be *diagnostic*.

| Metric | Healthy range | What it tells you |
|---|---|---|
| Delivery rate | >97% | Domain health |
| Open rate | 50–70% (cold) | Subject line + sender trust |
| Reply rate | 2–5% | Message relevance |
| Positive reply rate | >30% of replies | ICP fit |
| Meeting booked / 1000 sends | 3–10 | Overall motion health |

**Do not optimize the message until you have 300+ sends per variant.**
Small samples produce noise, and noise produces confident wrong answers.

---

## Step 5 — Handoff to sales (or to yourself)

The handoff is where outbound dies most often. Fix it before you scale:

1. **Define the meeting standard** — who counts as a qualified meeting.
2. **Track the source** — every meeting must trace back to a campaign.
3. **Debrief every 2 weeks** — what message won, what list segment
   converted, what objection killed the deal.
4. **Feed the win back into the list** — your best customers become your
   new look-alike list.

---

## Common failure modes

- **Scaling volume before proving message** — you end up with 10x the noise.
- **Optimizing subject lines while the offer is broken** — polish on a dead product.
- **Buying a list without reasons-to-reach** — cold spray, no personalization, no replies.
- **No handoff discipline** — meetings booked but nobody qualified, nothing closed.
- **Skipping domain warmup** — deliverability dies, and the domain is burned.

---

*Synthesized from first-hand 0→1 outbound builds (2014–2026): Salesloft,
Gladly, Apollo, and every SDR org in between. The motion hasn't changed
in a decade; the tools have.*
