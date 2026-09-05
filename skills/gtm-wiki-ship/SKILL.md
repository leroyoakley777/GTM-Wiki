---
name: gtm-wiki-ship
description: "Run GTM Wiki gates and push a green ship to main."
version: 1.0.0
author: Leroy Oakley (leroyoakley777)
license: MIT
platforms: [linux, macos]
metadata:
  hermes:
    tags: [gtm, wiki, docusaurus, deploy, vercel]
    category: software-development
    requires_toolsets: [terminal]
---

# GTM Wiki Ship Skill

Runs the GTM Wiki quality gates and, when they pass, commits one page and
pushes `main` so Vercel deploys. It does not invent pages, skip hooks, or
declare "done" without a commit SHA.

Standing orders on disk: `STANDARDS/HERMES_SHIP.md`. If this skill and that
file disagree, `STANDARDS/HERMES_SHIP.md` wins.

## When to Use

- User says ship, deploy, build, gate, or "keep shipping the wiki"
- A wiki page was edited and needs to go live
- A prior ship failed lint, lint-comms, sources, freshness, or Vercel
- Starting a GTM Wiki session and you need the loop

Don't use for:

- Unrelated repos
- Rewriting scanner scripts
- Claiming the site is live without `npm run ship:gate` exit 0

## Prerequisites

- Repo: `github.com/leroyoakley777/GTM-Wiki`
- Node 18+
- `npm install` already run in the repo root (run it if `node_modules` is missing)
- Git remote `origin` can push `main`
- File `$HOME/.hermes/plans/gtm-wiki/OPERATING_CONTEXT.md` exists
  (create it as a pointer to `STANDARDS/HERMES_SHIP.md` if missing)
- Hooks wired once per clone: `npm run setup:hooks`

Install this skill onto the Hermes machine:

```bash
mkdir -p ~/.hermes/skills/gtm
ln -sfn /ABS/PATH/TO/GTM-Wiki/skills/gtm-wiki-ship ~/.hermes/skills/gtm/gtm-wiki-ship
```

Replace `/ABS/PATH/TO/GTM-Wiki` with the local clone path.

## How to Run

Use the `terminal` tool from the wiki repo root.

```bash
bash ${HERMES_SKILL_DIR}/scripts/preflight.sh
bash ${HERMES_SKILL_DIR}/scripts/ship-gate.sh
```

`preflight.sh` checks git state, Node, hooks, and operating context.
`ship-gate.sh` runs the same command Vercel runs, plus lint-comms.

## Quick Reference

```bash
git fetch origin && git checkout main && git pull --ff-only
node scripts/lint.mjs path/to/page.md
node scripts/lint-comms.mjs path/to/page.md
node scripts/scan-slop.mjs path/to/page.md
node scripts/validate-sources.mjs --strict --file path/to/page.md
npm run ship:gate
git add -A && git commit -m "docs: <what changed>" && git push origin main
```

## Procedure

1. **Orient.** `git fetch origin && git checkout main && git pull --ff-only`.
   Read `STANDARDS/HERMES_SHIP.md`, `AGENTS.md`, and the first open item in
   `IMPROVEMENT-BACKLOG.md`. Done when HEAD matches `origin/main`.

2. **Pick one file.** Take the first open backlog item (IB-004, then IB-006,
   then IB-003). Do not open a second file. Done when you can name one path.

3. **Edit.** Stamp `last_updated: YYYY-MM-DD`. Cross-link with the unprefixed
   slug. Register new citations in `RESEARCH/gtm-wiki/SOURCES_REGISTRY.md`.
   Done when the page change is on disk.

4. **Preflight the page.**

   ```bash
   node scripts/lint.mjs path/to/page.md
   node scripts/lint-comms.mjs path/to/page.md
   node scripts/scan-slop.mjs path/to/page.md
   node scripts/validate-sources.mjs --strict --file path/to/page.md
   ```

   Done when all four exit 0. If one fails, fix the first error and rerun
   that command only.

5. **Run the deploy twin.**

   ```bash
   npm run ship:gate
   ```

   Done when exit 0. If it fails on a file you did not touch, stop and
   report the first error plus `git rev-parse --short HEAD`.

6. **Commit and push.**

   ```bash
   git add -A
   git commit -m "docs: <what changed> (<IB-id or slug>)"
   git push origin main
   ```

   Done when the push is accepted. Record the SHA. Never `--no-verify`.

7. **Loop.** Mark the backlog item done only after the push lands. Start
   the next open item. One page per cycle.

## Pitfalls

- `lint.mjs` green is not enough. `lint-comms.mjs` has a different banned
  list and a passive-voice regex. Open both files and obey them.
- Missing `$HOME/.hermes/plans/gtm-wiki/OPERATING_CONTEXT.md` blocks the
  pre-commit hook. Create the file. Do not `--no-verify`.
- Docusaurus strips `NN-` from filenames. Link `./outbound`, not
  `./01-outbound.md`.
- Bare `<` before a digit is an MDX tag and fails the build. Rephrase.
- Frontmatter key is `last_updated` with an underscore.
- Do not copy scanner token lists into prose. The scanners will fail the
  page that lists the tokens.
- Do not add the same rule to two scanner files.

## Verification

A ship is real only when all of these are true:

- `npm run ship:gate` exited 0
- `git status` is clean on `main`
- `git rev-parse HEAD` equals `git rev-parse origin/main`
- You can paste the commit SHA

No SHA means you did not ship.
