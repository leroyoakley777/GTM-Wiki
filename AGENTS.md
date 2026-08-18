# Project: GTM Wiki

Open-source Go-to-Market knowledge base. Owner: Leroy Oakley
(leroy.oakley777@gmail.com). Mission: the best place to learn GTM of all
time, and the best looking too — quality on a living topic graph, not a page
count. Quality bar is the Gold Ship Standard (STANDARDS/GOLD_SHIP_STANDARD.md),
enforced by machine gates (see Build Commands).

## Stack
- Framework: Docusaurus 3 (classic preset)
- Hosting: Vercel (connected; auto-deploys on push to main)
- Domain: gtmwiki.com
- GitHub: github.com/leroyoakley777/GTM-Wiki

## Current State (2026-08-18)
- 62 doc pages live across foundations/, flows/, playbooks/, channels/,
  data/, agentic/, roles/, case-studies/.
- Machine gates: L1 depth (check-depth.mjs), L2 lint (lint.mjs, hard deploy
  gate), L3 deploy gate (lint runs before build on Vercel), L4 True source
  gate (validate-sources.mjs --strict, wired into the Vercel build command so
  an unregistered citation fails the build).
- Source registry: RESEARCH/gtm-wiki/SOURCES_REGISTRY.md (Bumble owns).

## Structure
docs/  (all published pages; cross-link with the unprefixed slug)
RESEARCH/gtm-wiki/  (benchmarks, coverage map, source registry — internal)
STANDARDS/  (Gold Ship Standard, team meta — NEVER in docs/)

## Build Commands
- Dev: `npm start`
- Full gate: `npm run check` (lint + depth + sources)
- Lint: `npm run lint` (hard gate; also runs pre-deploy via vercel.json)
- Depth: `npm run check:depth` (warn-only; --strict promotes to hard gate)
- Sources: `npm run check:sources` (warn-only; `validate-sources.mjs --strict` is the hard gate, wired into vercel.json buildCommand)
- Build: `npm run build`
- Pre-commit hooks: `npm run setup:hooks`

## Conventions
- Every page: frontmatter with sidebar_position + status.
- Frameworks/flows numbered (00-, 01-, etc.).
- Cross-reference between pages with relative links, unprefixed slug.
- First-principles approach, not tactic copy-paste.
- Every stat: named source + "as of" date, registered in SOURCES_REGISTRY.md.

## Prose quality (mandatory on every authoring action)
This wiki's voice is the Google Developer Style Guide, enforced by the
`google-dev-style` skill. Before you create or edit ANY text in `docs/`
(pages, headings, hero, captions) or in `STANDARDS/`/`RESEARCH/` prose:
1. Load the skill: `skill_view(name='google-dev-style')`.
2. Run its rewrite loop on the text — active voice, second person, no
   superlatives, conditions before instructions, sentence-case headings,
   descriptive links, no "please"/exclamation/internet slang.
3. Pass its self-check before the text ships.
Text that fails the self-check is not shippable. The `lint.mjs` rule 2b is
the machine backstop for the parallel-promise cadence ("The X does Y. The Z
does W."); the skill covers the rest of the slop voice (vague claims, filler,
"best-in-class"/"world-class", "X is not Y. It is Z."). No carve-outs: this
applies to hero copy, section intros, and worked examples alike.

## Known Build Traps (both have broken builds before)
- **NN-prefix / slug stripping.** Docusaurus strips the leading `NN-` from a
  filename when generating the URL. File is `01-outbound.md`, but the URL and
  every cross-link is `/docs/flows/outbound` — never `…/flows/01-outbound.md`.
  Cross-link with the unprefixed slug.
- **Bare `<digit` is parsed as MDX JSX.** Writing `under 15 min` as `<15 min`, or
  `<5%`, in a Docusaurus page fails the build — MDX reads it as a JSX tag. Escape
  it: `&lt;15 min`, `&lt;5%`, or rephrase "under 15 min". Same trap bites any
  `<digit` phrasing.

## Priority
- Keep the True source gate clean; zero unregistered citations at all times.
- Expand the topic graph with depth-gated, source-verified pages.
- No carve-outs: team meta never enters docs/ (lint meta-leak guard enforces).

## Never
- Publish a page that fails lint or the source True gate.
- Put team/internal meta in docs/ (lives in STANDARDS/ or RESEARCH/).
- Cite a source not in SOURCES_REGISTRY.md.
