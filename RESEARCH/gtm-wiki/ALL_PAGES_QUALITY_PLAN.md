---
title: "All-Pages Quality Plan: Exceeding the Grokipedia Bar"
tags: [quality, plan, master-chief, grokipedia-bar]
status: active
created: 2026-08-19
---

# All-Pages Quality Plan: Exceeding the Grokipedia Bar

**Owner:** @Master Chief, assigned by Leroy (2026-08-19T03:20Z): "you are assigned
to ALL pages and future pages. make haste slowly." That means durable, compounding
quality per page, not speed.

**North star:** Grokipedia "Agent-led growth" page
(<https://grokipedia.com/page/Agent-led_growth>), cited by Leroy as the depth/breadth
bar to exceed.

**Our standing moat they do not have:** artifacts shipped *in* the page, not summarized.
Grokipedia cites and describes; we publish the copy, the template, the math, the prompt
that runs the motion.

**The bar:** STANDARDS/GOLD_SHIP_STANDARD.md: True / Tasteful / Insightful / Engaging,
every sentence, every page, every time. No "good enough for now" on a live page.

## Verified state (2026-08-19, current HEAD = 64aed375)
- Home hero is the humble collaboration note Leroy dictated
  ("Thank you for visiting our page. If you would like to collaborate..."), commit
  `64aed375`. Honest, not slop. Live. Keep until pages prove the bar, then decide.
- Lint rule 2b is ALREADY the effect-based density gate: `DELIVERY_VERBS` allowlist,
  `>=3` delivery clauses within a ~400-char breath = hard fail (scripts/lint.mjs:309-336).
  The "extend the rule to catch the effect" work Honey offered is already landed.
- 62 doc pages live across foundations/, playbooks/, agentic/, channels/, roles/,
  data/, flows/, case-studies/, glossary/, tools/.
- Source registry: RESEARCH/gtm-wiki/SOURCES_REGISTRY.md (Bumble owns).

## The page-anatomy spec (every page must hit, in this order)
1. **Definition**: what the topic is, in one concrete sentence.
2. **Why it matters**: the stakes, named, not a throat-clearing intro.
3. **The artifact**: shown in the page, not summarized: the copy, the template, the
   worksheet, the math worked with a named base.
4. **Named + dated stats**: every figure carries a source name + "as of" date; inline
   source link per figure (footnote discipline, Grokipedia-style). No bare stat.
5. **Freshness stamp**: `last_updated` on the page; a stale source is replaced and the
   replacement dated (living-content bar).
6. **Run it today**: one section an operator can execute now.

## Lint hardening (I own; not blocking page work)
- Keep 2b delivery-verb density gate.
- Extend to parallel non-delivery tells with the same density logic so they can't
  return: "The X is Y. The Z is W." anaphora, and "X governs the Y" device.

## Squad + lanes (mustered from channel: Honey, Bumble, Fizz, Pollen, Deploy)
- **Reference build:** I take `docs/flows/01-outbound.md` (the flagship motion Leroy
  keeps citing, four cold emails with word counts). Rebuild to the anatomy + the
  cattle-prod. Gate through lint + Gold Ship, ship, verify the live render. This becomes
  the template every other page is measured against.
- **Fan-out by domain** after the reference clears: each page rebuilt to the same anatomy
  and bar, one domain at a time.
- **Honey**: taste / anti-slop gate + rendered-eye check (measure SVG/boxes, not just
  grep). Round-the-clock slop hunting.
- **Bumble**: source truth: every stat named + dated, registered in SOURCES_REGISTRY.md.
  No invented numbers.
- **Fizz**: depth/build: writes pages to the bar, audits build + slop before commit,
  owns the batch pipeline.
- **Pollen**: assist lane (per Leroy's "assist" directive).
- **Deploy**: ships only pages that clear the full checklist.

## Cadence (make haste slowly)
- **Phase 0 (this turn):** plan + lint hardening + stamp anatomy into AGENTS.md.
- **Phase 1:** reference page `docs/flows/01-outbound.md` rebuilt, gated, shipped, rendered.
- **Phase 2+:** per-domain batches, one domain at a time; each page gated before live.
- No page-count target. Depth per page is the unit of progress ("think way bigger" =
  bar per page, not count).

## Two decisions I need from Leroy before I cut the reference
1. Is the humble hero note the permanent home, or do you want a real hero once the
   reference page proves the bar? My read: keep humble until the reference ships, then
   decide together.
2. Confirm the definition of "exceed": their depth + breadth + citation discipline +
   freshness stamp, PLUS artifacts-in-the-page (the moat they lack). That is my working
   definition; correct me if you mean something else.
