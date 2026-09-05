---
title: "Hermes ship and continuous deploy"
tags: [hermes, ship, deploy, gate]
status: active
created: 2026-09-05
last_updated: 2026-09-05
---

# Hermes ship and continuous deploy

Owner: Leroy Oakley. This file is standing orders for Hermes. Read it at
the start of every session. If this file and memory disagree, this file wins.

Pin: pull `origin/main` before you touch a file. Do not author on a stale tree.

## Continuous deploy is on

Gate-green page ships may push `main`. Vercel auto-deploys `main`.
The witness is `npm run ship:gate` exit 0 plus `git push origin main`
plus the new commit SHA. Chat is not a witness.

One page per cycle. One concern per commit. Then push. Then start the
next item on the queue. Do not batch five pages and hope.

## Session start

```bash
git fetch origin
git checkout main
git pull --ff-only
```

Then read, in order:

1. `STANDARDS/HERMES_SHIP.md` (this file)
2. `AGENTS.md`
3. `STANDARDS/GOLD_SHIP_STANDARD.md`
4. `$HOME/.hermes/plans/gtm-wiki/OPERATING_CONTEXT.md`

If the operating-context file is missing, write it as a short pointer to
this file and `AGENTS.md`. Do not `git commit --no-verify` to skip the hook.

## Work queue

Take the first open item in `IMPROVEMENT-BACKLOG.md`. Skip anything marked
DONE or struck through. Current order:

1. IB-004 failure-modes on `docs/data/04-pricing-as-gtm.md` and
   `docs/foundations/revenue-architecture.md` (confirm the path; do not
   create a duplicate file)
2. IB-006 named+dated sources on `docs/foundations/03-positioning-and-messaging.md`
3. IB-003 variant/maturity sections on the listed pages, one page at a time
4. IB-007 / IB-008 slop candidates only on the page you already have open

Do not invent a new page while an IB item is open. Do not rebuild a page
that already passed unless the backlog names it.

## Cycle

1. Pick one file from the queue.
2. Edit it. Stamp `last_updated: YYYY-MM-DD`. Cross-link with the
   unprefixed slug. Register every new citation in
   `RESEARCH/gtm-wiki/SOURCES_REGISTRY.md`.
3. Preflight:

```bash
node scripts/lint.mjs path/to/page.md
node scripts/lint-comms.mjs path/to/page.md
node scripts/scan-slop.mjs path/to/page.md
node scripts/validate-sources.mjs --strict --file path/to/page.md
```

4. Fix the first error. Re-run the same command. Do not start another file.
5. When the page preflight is clean:

```bash
npm run ship:gate
```

6. If `ship:gate` fails on a file you did not touch: stop and report the
   first error. Do not "fix the wiki."
7. If `ship:gate` exits 0:

```bash
git add -A
git commit -m "docs: <what changed> (<IB-id or page slug>)"
git push origin main
```

8. Record the SHA. Mark the IB item done in the backlog only after the
   push lands. Start the next item.

## Hard rules that already burned you

Two scanners. Two banned lists. A green `lint.mjs` run is not enough.
Read the lists from disk. Do not copy them into prose.

- `scripts/lint-comms.mjs` `BANNED`, plus `RE_PASSIVE`, `RE_RULE3`, and `RE_HYP`
- `scripts/lint.mjs` `BANNED`, em dash check, "The"-heading check,
  promise-listing, NN-slug link check, frontmatter YAML, MDX digit trap

The comms scanner is the one that caught marketing verbs and passive
constructions. Open `scripts/lint-comms.mjs` and obey every pattern in it.
Rewrite flagged sentences in active voice.

Links: file `docs/flows/01-outbound.md` is `/docs/flows/outbound` or
`./outbound`. Never `./01-outbound.md`.

Sources: every named stat gets a registry row and a `[n]` footnote.

Do not add the same scanner rule to a second file. Ownership:

- `lint-comms.mjs`: voice tokens, passive scent, rule-of-three
- `scan-slop.mjs`: em dashes, "The" headings, uncited-stat candidates
- `lint.mjs`: build traps and anaphora

## Stop conditions

Stop the loop if any of these are true:

- `ship:gate` fails twice on the same error after a real fix attempt
- you are about to `--no-verify`
- you are about to rewrite a page that is not on the queue
- git push is rejected
- you cannot cite a number you just wrote

A report that says "shipped" must include the commit SHA. No SHA means
you did not ship.
