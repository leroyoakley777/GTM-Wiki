---
sidebar_position: 1
title: Gold Ship Standard
description: The four-question bar every page must clear before it ships live. True, tasteful, insightful, engaging — each one a gate, not a vibe.
last-updated: 2026-08-17
status: active
tags: [gold, standard, ship, quality, gtm-wiki]
domain: foundations
parent: foundations/index
---

# Gold Ship Standard

**One line:** a page ships live only when every sentence clears four
gates — **True, Tasteful, Insightful, Engaging.** Anything that fails a
gate is a liability to credibility, and liabilities do not ship.

This is the bar Leroy set: after tonight GTM Wiki goes on a resume as
work in progress. Every page is a proof of competence. A weak page
isn't neutral — it actively costs trust. So the standard is not "does
this page exist" but **"would a sharp operator stake their name on
this sentence?"**

A page is **live-ready** when it passes all four gates **and** the
build, **and** it is internally consistent. Not "mostly" — all of them.
A single failing sentence keeps the whole page out of the live set.

---

## Gate 1 — True

Every claim is either verifiable or clearly framed as judgment.

**Hard rules:**
- Every number carries a named source and an "as of" date. No bare stat.
- No invented figures. No "research shows" without naming the research.
- Vendor-sourced stats are labeled `(vendor source)` — they carry a
  bias incentive and the reader must know.
- A range with a named base beats a fake-precise single point.
- Opinions are framed as opinions; facts as facts. Never pass one off
  as the other.
- Anything the author does not actually know is omitted, not guessed.

**Fails this gate:** "industry experts say," "studies show," a stat with
no source, a confident number the writer could not defend in a meeting.

---

## Gate 2 — Tasteful

No AI-slop, no ornament, no filler. Reads like a sharp human wrote it.

**Hard rules (the banned list, enforced):**
- Never the word "actual."
- No "real"-family filler — say the concrete thing (working, genuine,
  live, in practice).
- No semicolon-joined prose — split into two sentences.
- No ornamental "the" — only where grammar requires it.
- No unearned superlatives (world-class, best-in-class, highest-signal).
- No "not X. It is Y." two-fragment aphorism.
- No staccato numeric aphorisms ("Six lanes. One map.").
- Headings never open with "The" and name the concrete thing.
- No marketing voice: no "seamlessly," "holistically," "unlock the
  potential," "supercharge," "game-changer."
- Short sentences, active voice, claim density high. No throat-clearing
  intros, no filler paragraphs.

**Fails this gate:** any sentence that would embarrass the author read
aloud to a practitioner. When in doubt, cut it.

---

## Gate 3 — Insightful

The page teaches something the reader did not already know.

**Hard rules:**
- Ships the real artifact, not a summary of one: the copy, the
  template, the worksheet, the math — shown, in the page.
- The math is worked with a named base, not a vibes number.
- Covers the variants, not one path: how the motion differs by segment,
  stage, and maturity.
- Names the failure modes and how to fix them, not just the happy path.
- Where an agent can operate the motion, the agentic layer (SOP /
  prompt) is shown and reusable.
- A reader who reads the page can act — it is operational, not
  decorative.

**Fails this gate:** a page that restates common knowledge, a page with
no worked example, a page that tells you "why it matters" without
telling you how.

---

## Gate 4 — Engaging

The reader finishes the page. It earns attention; it does not demand it.

**Hard rules:**
- Leads with the most concrete thing, not a preface.
- Every paragraph earns its place. If a paragraph can be cut without
  loss, cut it.
- Specific beats general. "250px label over a 200px box" beats "a
  layout problem."
- Reads like one person wrote it in one voice, start to finish.
- Not bloated. Length is the cost of completeness, not the point —
  a page is as long as the topic needs, never longer.

**Fails this gate:** a wall of text with no shape, a page that repeats
itself, a page the reader bounces off halfway.

---

## The ship checklist (all must pass)

Before any page is marked live:

- [ ] **True** — every stat named + dated; no invented numbers; vendor stats labeled.
- [ ] **Tasteful** — zero banned words/patterns; reads like a sharp human.
- [ ] **Insightful** — artifacts shipped, math worked, variants covered, agentic layer present.
- [ ] **Engaging** — concrete, no filler, earns the read.
- [ ] **Consistent** — page says what the graph says (no 8-sections/6-cards mismatch).
- [ ] **Build green** — `npm run build` passes.
- [ ] **Cross-links resolve** — no orphan page, no broken link.
- [ ] **Rendered** — images/SVG/boxes measured, nothing overflowing or clipped.

A page that fails any box is **not** shipped live, full stop. It stays
in the working tree until it clears. That is what keeps the live set
credible.

---

## What this means for the team

- **Fizz (depth/build):** writes pages to this bar, audits build + slop
  before commit, owns the batch pipeline.
- **Honey (taste/design):** owns the anti-slop gates and the rendered-eye
  check (measure SVG, not just grep). Round-the-clock slop hunting.
- **Bumble (truth/data):** owns the source pipeline — real numbers with
  dates flowing into every page, no invented stats.
- **Deploy (live):** ships only pages that clear the checklist.

The standard is enforced per page, every page, every time. There is no
"good enough for now" on a live page. The wiki is work in progress —
but what is live is proof. 🐝
