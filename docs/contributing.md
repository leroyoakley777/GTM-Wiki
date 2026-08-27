---
sidebar_position: 99
title: Contributing
description: "How to contribute to the GTM Wiki: what counts as a good contribution, the page contract, the machine gates every page must clear, and the pull request workflow."
last_updated: 2026-08-27
status: active
tags: [contributing, gtm, community, open-source, docs-as-code]
---

# Contributing

The GTM Wiki is open source and community-built. It is a reference, not a
blog. A contribution lands when it makes the topic graph more useful for a
practitioner, not when it adds another opinion.

This page explains the bar. Read it before you open a pull request. It takes
five minutes and saves a review cycle.

Start with the [map](./map) to see the full topic graph and find a gap, and
[intro](./intro) for how to navigate the wiki.

## Definition

A contribution is any change that improves the wiki's accuracy, depth, or
breadth. The common cases are a new page, an edit to an existing page, a
fixed source, a corrected stat, or a filled gap in the [map](./map).

A contribution is not a formatting tweak that adds no information, a rewrite
that changes voice without adding facts, or a page that restates common
knowledge. Those add noise and cost review time.

The wiki covers the whole go-to-market landscape. Before you write, check
whether the topic already exists under a related name. Cross-reference before
you create. A duplicate is debt, not progress.

A contribution does not have to be a new page. Finding a broken link, fixing
a stale stat, adding a missing source row, or clarifying a confusing section
all count. The work that maintainers value most is often the work that is not
glamorous: a corrected number, a tightened paragraph, a source that actually
supports the claim [1].

## Why it matters

The wiki is a credibility piece. Every page is a proof of competence. A weak
or wrong page costs trust before a reader reaches any content that matters.
Open source contributions are how the graph grows beyond one author, and the
demand is real. March 2025 was the largest single month of new open-source
contributors in GitHub history, at 255,000 first-timers [2]. Nearly 20% of
the most popular first-timer projects in 2025 were AI-focused [2], which is
the same territory this wiki leads with.

Your contribution compounds. A well-sourced page stays useful for years. A
page without a source becomes a liability the moment someone checks it. The
gates below exist so every shipped page earns its place.

One operator wrote ten contributions to a single project, and that was worth
more than ten contributions to ten projects. Depth in one place beats a
spread of shallow touches. Build relationships with one maintainer, one
section, one topic. That is how trust and credit accrue [1].

## What counts as a good contribution

Four qualities. A page that hits all four is mergeable.

- **First-principles, not tactics of the week.** Explain why something works,
  not the current hack. A framework should survive the platform it runs on.
- **Operator-tested.** If you have run it, say so. Concrete numbers beat
  theory. A named base beats a vibes figure.
- **Company- and stage-agnostic.** The framework should adapt to a seed
  startup and a public company. State where the variant differs, and stop
  where you do not know.
- **Cited and sourced.** Every stat carries a named source and an as-of date.
  No bare stat, no invented number.

The page you write must teach something a sharp operator did not already
know. If a reader can already get it from a two-line LinkedIn post, the page
does not earn its place.

## Page contract

Every page follows the same anatomy, in order. This is what reviewers check
first.

1. **Definition.** What the topic is, in one concrete sentence.
2. **Why it matters.** The stakes, named. No throat-clearing.
3. **Framework or depth sections.** The mechanism broken into parts, each
   taught until the reader can act.
4. **How to execute.** The steps, in order, with the artifacts.
5. **Common mistakes.** The failure modes and how to fix them.
6. **Further reading.** The related pages and sources.

Every page also ships with these hard requirements:

- **Frontmatter.** `title`, `sidebar_position`, `status`, and
  `last_updated` (today's date).
- **At least one artifact in-page.** A template, a grid, a worked example
  with arithmetic on a named base, or an agentic SOP. Shown in a code fence,
  not summarized.
- **Footnoted stats.** Every figure is a numbered `[n]` marker tied to a
  numbered Sources section.
- **Registered sources.** Every URL you cite must appear in the source
  registry at `RESEARCH/gtm-wiki/SOURCES_REGISTRY.md`. An unregistered
  citation fails the build.

The full quality bar is the Gold Ship Standard: True, Tasteful, Insightful,
Engaging. A page that fails any gate does not ship.

## How the wiki is built: docs as code

This wiki is a docs-as-code project. That phrase means the wiki runs on the
same systems software teams use to build software. Pages are Markdown files
in a Git repository. Changes move through pull requests. A reviewer reads the
diff before it reaches readers. Automated checks run on every change, and a
merge publishes the approved update.

The model is deliberate. The wiki learned the hard way that eyeballs miss
fabrication and slop. A single author editing a wiki page with no review can
ship a wrong number and no one catches it. Docs-as-code puts every change
through the same gate, whether it comes from a maintainer or a first-time
contributor [3].

The workflow is a loop, not a one-way door:

1. Edit the Markdown file on a branch. The branch is a safe working copy.
2. Open a pull request with a short note on what changed and why.
3. A reviewer reads the exact lines changed.
4. Automated checks confirm the site still builds and the links resolve.
5. The change merges and deploys.

Small fixes move through the loop quickly. Every published change passes
through the same gate [3].

## Machine gates

The gates are machine-enforced, not aspirational. Four of them run on every
commit:

- **Lint.** `lint.mjs` rejects banned voice, broken frontmatter, and build
  traps. A page that fails lint does not ship.
- **Depth.** `check-depth.mjs` enforces the word floor and the page contract.
- **Sources.** `validate-sources.mjs --strict` fails the build on any
  unregistered citation. This is the True gate. It exists because a source
  checker that only counted citations missed fabrication. The gate now
  checks that every cited URL has a dated row in the source registry.
- **Freshness.** Every page carries `last_updated`, and the freshness check
  enforces the cadence. Data pages refresh every 90 days, frameworks every 6
  months, case studies every 12 months. A stale source is a liability. When
  you update a number, replace the old source and date the replacement.

Do not treat the gates as a hurdle to clear at the end. Run them while you
write. The wiki's build runs `npm run check` (lint, depth, sources) before it
builds. A change that fails a gate fails the build.

## How to execute

Follow this workflow. It mirrors the way the wiki's own build runs.

1. **Fork the repository** on GitHub at
   [github.com/leroyoakley777/GTM-Wiki](https://github.com/leroyoakley777/GTM-Wiki).
2. **Read the project before you write.** Look at the contributing docs and
   the recent pull requests. Confirm the project is active and that
   maintainers respond [1].
3. **Find a gap.** Start from the [map](./map). Pick an issue that is labeled
   for beginners if one exists, or propose a page the graph is missing.
   For anything beyond a typo fix, open an issue or a draft pull request
   before you invest a week [1].
4. **Create a branch.** Never commit to `main` directly. Name it after the
   change, for example `docs/contributing-page`.
5. **Clone and set up locally.** Run `npm install`, then `npm run setup:hooks`
   to install the pre-commit gates.
6. **Add or edit the page** under `docs/` with the page contract above.
7. **Cross-link related pages** with relative links using the unprefixed slug.
   Docusaurus strips the leading `NN-` from a filename, so link to
   `./flows/sales-process-meddpicc`, never `./flows/03-sales-process-meddpicc`.
8. **Verify locally.** Run `npm run check` for lint, depth, and sources, then
   `npm run build` to confirm it compiles. Fix everything that fails.
9. **Open a pull request** with a short description of what you added and why.
   Paste the checklist from the next section into the body.
10. **Respond to review.** Reviewers are volunteers. When they ask for changes,
    make them. If you cannot continue, say so and close cleanly.

Open a draft pull request early for a substantial contribution. Draft PRs
let reviewers watch your progress and catch a wrong direction before you
invest a week [1].

## Page template

Use this as the skeleton for a new page. It satisfies the page contract and
the gates.

```md
---
title: Page Title
sidebar_position: 1
status: active
last_updated: 2026-08-27
tags: [gtm, topic]
---

# Page Title

Definition. One concrete sentence on what the topic is.

## Why it matters

The stakes, named. Short sentences.

## Framework

The mechanism, broken into parts.

## How to execute

The steps, in order.

## Common mistakes

The failure modes and how to fix them.

## Further reading

- Related wiki page: [map](./map)
- External source: [Name](https://example.com)

## Sources

1. [Name](https://example.com)
```

Replace the placeholder link with a real, registered source. A placeholder
URL in the Sources section fails the build.

## Pull request checklist

Paste this into your pull request body. Every box must be checked before a
review starts.

```md
## What this adds
- [ ] A clear one-line description of the change.

## Page contract
- [ ] Definition, why it matters, framework, how to execute, common mistakes.
- [ ] Frontmatter has title, sidebar_position, status, last_updated.
- [ ] At least one artifact in a code fence.
- [ ] Every stat footnoted with a numbered [n] and a Sources section.

## True gate
- [ ] Every cited URL is registered in RESEARCH/gtm-wiki/SOURCES_REGISTRY.md.
- [ ] No invented numbers. Every figure has a named source and an as-of date.

## Build
- [ ] `npm run check` passes (lint, depth, sources).
- [ ] `npm run build` passes.
- [ ] Cross-links use the unprefixed slug.
```

## Common mistakes

- **Skipping the registry.** The most common build failure. Any cited URL not
  in `SOURCES_REGISTRY.md` fails the True gate. Add the source row before you
  commit, not after the build breaks.
- **Bare angle-bracket digit in prose.** A bare `<` followed by a digit reads
  as a JSX tag and the build fails. Write the number out (for example
  `under 15`) or escape the bracket as `&lt;15`.
- **Wrong cross-link slug.** Linking to `03-sales-process-meddpicc` when the
  URL is `/docs/flows/sales-process-meddpicc` produces a broken link. Use the
  unprefixed slug.
- **Restating common knowledge.** A page that a practitioner already knows
  adds noise. Add a worked example, a variant, or a failure mode.
- **Marketing voice.** No superlatives, no filler, no em dashes. Short
  sentences, active voice, high claim density. Write like someone who has
  shipped.
- **One giant pull request.** A single PR that rewrites a whole section is
  hard to review and hard to merge. Split it into focused changes. Most teams
  aim to keep pull request review under three business days [4], and small,
  focused PRs are what make that possible. Keep a PR focused on one issue and
  explain what changed and why [1].
- **Walking away after opening.** When a reviewer requests changes, respond.
  Opening a PR and disappearing is bad form. If you run out of time, tell the
  maintainer so they can reopen the issue for someone else [1].
- **Treating a rejection as failure.** A contribution may not merge. Ask for
  the reason, respect the decision, and fork your own version if you
  disagree [1].

## Why the gates are hard

The gates are not a style preference. They are the difference between a
reference and a liability. A wrong page costs a reader a bad decision. A
fabricated stat costs the wiki its credibility. The machine enforces the bar
because a human cannot be trusted to enforce it on every page, every day.

That is the honest reason the gates exist. The wiki has been burned by
self-reported work that looked fine and was wrong. A machine that fails a bad
page protects the whole graph, so a reader never meets a claim that cannot be
checked.

## Further reading

- [Welcome and how to navigate](./intro)
- [Map of the wiki](./map)
- [What is GTM](./foundations/what-is-gtm)
- [The GTM strategy framework](./foundations/gtm-strategy-framework)
- [The MEDDPICC flow](./flows/sales-process-meddpicc), the reference page
- [GTM OS architecture](./agentic/gtm-os-architecture)
- [Outbound from zero](./playbooks/outbound-from-zero)

## Sources

1. [GitHub Open Source Guide: How to contribute to open source](https://opensource.guide/how-to-contribute/)
2. [GitHub Octoverse: A new developer joins GitHub every second](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
3. [GitClear: Classic pull request stats](https://www.gitclear.com/help/pull_request_classic_stats_how_to_optimize_long_term_health)
4. [Creative Commons: Pull request guidelines](https://opensource.creativecommons.org/contributing-code/pr-guidelines/)
