---
sidebar_position: 99
title: Contributing
description: "How to contribute to the GTM Wiki: what counts as a good contribution, the page contract, the machine gates every page must clear, the review flow, and the pull request workflow."
last_updated: 2026-08-27
status: active
tags: [contributing, gtm, community, open-source, docs-as-code]
---

# Contributing

The GTM Wiki is open source and community-built. It is a reference, not a
blog. A contribution lands when it makes the topic graph more useful for a
practitioner, not when it adds another opinion.

This page is the bar. Read it before you open a pull request. It takes five
minutes and saves a review cycle.

Start with the [map](./map) to see the full topic graph and find a gap, and
[intro](./intro) for how to use the wiki.

## Definition

A contribution is any change that improves the wiki's accuracy, depth, or
breadth. The common cases are a new page, an edit to an existing page, a fixed
source, a corrected stat, or a filled gap in the [map](./map).

A contribution is not a formatting tweak that adds no information, a rewrite
that changes voice without adding facts, or a page that restates common
knowledge. Those add noise and cost review time.

The wiki covers the whole go-to-market space. Before you write, check whether
the topic already exists under a related name. Cross-reference before you
create. A duplicate is debt, not progress.

A contribution does not have to be a new page. Finding a broken link, fixing a
stale stat, adding a missing source row, or clarifying a confusing section all
count. The work maintainers value most is often the work that is not glamorous:
a corrected number, a tightened paragraph, a source that actually supports the
claim [1].

## Why it matters

The wiki is a credibility piece. Every page is a proof of competence. A weak
or wrong page costs trust before a reader reaches any content that matters.
Open source contributions are how the graph grows beyond one author, and the
demand is real. March 2025 was the largest single month of new open-source
contributors in GitHub history, at 255,000 first-timers [2]. Nearly 20% of the
most popular first-timer projects in 2025 were AI-focused [2], which is the
same territory this wiki leads with.

The scale of the movement backs the model. Open source drew 1.128 billion
contributions to public and open-source repositories in 2025, up 13% year over
year, and 60% of the ten most-contributed projects were AI-focused [2]. A
community-built wiki in that same territory is not a niche bet. It is the
normal way a reference like this grows.

Your contribution accrues. A well-sourced page stays useful for years. A page
without a source becomes a liability the moment someone checks it. The gates
below exist so every shipped page earns its place.

One operator wrote ten contributions to a single project, and that was worth
more than ten contributions to ten projects. Depth in one place beats a spread
of shallow touches. Build relationships with one maintainer, one section, one
topic. That is how trust and credit accrue [1].

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

The page you write must teach something a sharp operator did not already know.
If a reader can already get it from a two-line LinkedIn post, the page does not
earn its place.

## Contribution paths

Not every contribution is a new page. Pick the smallest change that fixes the
gap. The table below is the decision guide.

| Contribution | What it is | Gate burden | Review time |
|---|---|---|---|
| Fix a stat | Correct a number on an existing page and re-date the source | Source row must resolve; re-register if the source changed | Fast |
| Tighten a paragraph | Cut a confusing or redundant section without changing facts | Lint must stay clean | Fast |
| Add a source row | Register a vetted source in the registry and link it to a claim | True gate must resolve the new name | Fast |
| Extend a page | Add a variant, failure mode, or worked example to an existing page | Depth + lint + sources | Medium |
| Write a new page | Fill a real gap in the [map](./map) | Full page contract + all gates | Slow |

A stat fix or a broken-link fix is a complete contribution. It clears the whole
loop end to end and teaches you the workflow without the risk of a large page.
Save the new page for when the graph has a hole you can prove.

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

- **Frontmatter.** `title`, `sidebar_position`, `status`, and `last_updated`
  (today's date).
- **At least one artifact in-page.** A template, a grid, a worked example with
  arithmetic on a named base, or an agentic SOP. Shown in a code fence, not
  summarized.
- **Footnoted stats.** Every figure is a numbered `[n]` marker tied to a
  numbered Sources section.
- **Registered sources.** Every URL you cite must appear in the source registry
  at `RESEARCH/gtm-wiki/SOURCES_REGISTRY.md`. An unregistered citation fails
  the build.

The full quality bar is the Gold Ship Standard: True, Tasteful, Insightful,
Engaging. A page that fails any gate does not ship.

## How the wiki is built: docs as code

This wiki is a docs-as-code project. That phrase means the wiki runs on the
same systems software teams use to build software. Pages are Markdown files in
a Git repository. Changes move through pull requests. A reviewer reads the diff
before it reaches readers. Automated checks run on every change, and a merge
publishes the approved update.

The model is deliberate. The wiki learned the hard way that eyeballs miss
fabrication and slop. A single author editing a wiki page with no review can
ship a wrong number and no one catches it. Docs-as-code puts every change
through the same gate, whether it comes from a maintainer or a first-time
contributor.

The workflow is a loop, not a one-way door:

1. Edit the Markdown file on a branch. The branch is a safe working copy.
2. Open a pull request with a short note on what changed and why.
3. A reviewer reads the exact lines changed.
4. Automated checks confirm the site still builds and the links resolve.
5. The change merges and deploys.

Small fixes move through the loop quickly. Every published change passes through
the same gate.

## Machine gates

The gates are machine-enforced, not aspirational. Four of them run on every
commit:

- **Lint.** `lint.mjs` rejects banned voice, broken frontmatter, and build
  traps. A page that fails lint does not ship.
- **Depth.** `check-depth.mjs` enforces the word floor and the page contract.
- **Sources.** `validate-sources.mjs --strict` fails the build on any
  unregistered citation. This is the True gate. It exists because a source
  checker that only counted citations missed fabrication. The gate now checks
  that every cited source has a dated row in the registry.
- **Freshness.** Every page carries `last_updated`, and the freshness check
  enforces the cadence. Data pages refresh every 90 days, frameworks every 6
  months, case studies every 12 months. A stale source is a liability. When you
  update a number, replace the old source and date the replacement.

Do not treat the gates as a hurdle to clear at the end. Run them while you
write. The wiki's build runs `npm run check` (lint, depth, sources) before it
builds. A change that fails a gate fails the build.

## How to execute

Follow this workflow. It mirrors the way the wiki's own build runs.

1. **Fork the repository** on GitHub at
   [github.com/leroyoakley777/GTM-Wiki](https://github.com/leroyoakley777/GTM-Wiki).
2. **Read the project before you write.** Look at the contributing docs and the
   recent pull requests. Confirm the project is active and that maintainers
   respond [1].
3. **Find a gap.** Start from the [map](./map). Pick an issue labeled for
   beginners if one exists, or propose a page the graph is missing. For
   anything beyond a typo fix, open an issue or a draft pull request before you
   invest a week [1].
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
   Paste the checklist below into the body.
10. **Respond to review.** Reviewers are volunteers. When they ask for changes,
    make them. If you cannot continue, say so and close cleanly.

Open a draft pull request early for a substantial contribution. Draft PRs let
reviewers watch your progress and catch a wrong direction before you invest a
week [1].

## What happens after you submit

The review is not a black box. Set expectations before you open the pull
request, so you read the silence correctly.

- **Respond promptly and professionally.** Feedback can feel harsh. Maintainers
  focus on the content, not the person. Take the note, revise, and reply [5].
- **Keep one pull request open.** When changes are requested, do not open a new
  pull request. Make the changes in the existing one. A new PR loses the
  context of the review [5].
- **Expect a reply inside a week.** Creative Commons aims to review pull
  requests within 5 business days [4]. Most teams target pull request review in
  under 3 business days [3]. A good PR expects a reply inside a week.
- **Follow up without pinging.** If the pull request sits for weeks, leave one
  polite comment asking for feedback. Do not tag maintainers by handle.
  Maintainers balance open source work with full-time jobs [5].
- **Ask when it does not merge.** If the contribution is declined, ask for the
  reason. The answer is context for the next attempt [5].

Reviewers are people with a day job. The wiki is maintained in spare hours.
Write a pull request that a reviewer can approve in one pass, and the loop stays
fast for everyone.

## Contribution scoring rubric

Use this rubric before you open the pull request. Score each axis 1 to 5, then
add a two-line note under each 1 or 2. A page with any 1 or 2 is not ready.

| Axis | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Truth | Cites no source | Cites a source that does not support the claim | Cites a registered source | Cites a registered source that names an as-of date | Every stat footnoted; all sources registered; no invented figure |
| Depth | Under the word floor | Meets the floor with padding | Meets the floor with substance | Covers variants and failure modes | Teaches something a sharp operator did not know |
| Artifact | No code fence | A fence with no runnable content | A template or table | A worked example with a named base | A runnable SOP or worked math an operator can run today |
| Voice | Marketing slop | Clean but flat | Dead-prose STE | Operator voice with a real example | Reads like someone who has shipped six go-to-market motions |
| Fit | Duplicates a page | Overlaps without linking | Links to the existing page | Fills a real gap in the [map](./map) | Extends an existing gap and cites where it stops |

A 4 or 5 on every axis is mergeable. Anything below that gets a review note,
not a merge.

## Page template

Use this as the skeleton for a new page. It satisfies the page contract and the
gates.

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
- External source: 

## Sources

1. 
```

Replace the placeholder link with a real, registered source. A placeholder URL
in the Sources section fails the build.

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

## Agentic SOP: contribute a page

People and agents build this wiki. The production line runs on the
same loop you just read. An agent can contribute a page end to end with the
prompt below. It encodes the page contract and the gates into a repeatable
sequence, so a run produces the same result whether a human or an agent drives
it.

Copy the block into a capable coding agent. It references this page, the map,
and the source registry. Paste the output back through the checklist above
before you open the pull request.

```text
You are contributing one page to the GTM Wiki at github.com/leroyoakley777/GTM-Wiki.
Follow the contributing standard in docs/contributing.md exactly.

1. Read docs/map.md. Confirm the page does not duplicate an existing topic.
   If it overlaps, target the existing page with an edit, not a new page.
2. Write the page under docs/ to the page anatomy: definition, why it
   matters, framework or depth sections, how to execute, common mistakes,
   further reading.
3. Frontmatter carries title, sidebar_position, status, and last_updated
   set to today's date.
4. Ship one artifact in a code fence: a template, a grid, a worked example,
   or a runnable SOP. Do not summarize the artifact. Show it.
5. Every stat is a numbered [n] marker tied to a numbered Sources section.
   No bare stat and no invented figure.
6. Register every source you cite in RESEARCH/gtm-wiki/SOURCES_REGISTRY.md
   with a dated row and the claim it supports. A citation without a row
   fails the True gate.
7. Cross-link related pages with relative links and the unprefixed slug.
   Link to ./flows/sales-process-meddpicc, never to the NN- prefixed
   filename.
8. Escape any bare angle bracket before a digit as &lt;. A bare <digit is
   parsed as MDX JSX and fails the build.
9. Run npm run check for lint, depth, and sources, then npm run build.
   Fix every failure. The True gate must pass with --strict.
10. Open a pull request with the checklist from docs/contributing.md in the
    body.
```

The prompt is the SOP the maintainers themselves use. If an agent can run it
clean on the first pass, the page is ready for human review. If it cannot, the
failure points at the gates that need a sharper edge, not at the workflow.

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
- **Restating common knowledge.** A page that a practitioner already knows adds
  noise. Add a worked example, a variant, or a failure mode.
- **Marketing voice.** No superlatives, no filler, no em dashes. Short
  sentences, active voice, high claim density. Write like someone who has
  shipped.
- **One giant pull request.** A single PR that rewrites a whole section is hard
  to review and hard to merge. Split it into focused changes. Most teams target
  pull request review in under 3 business days [3], and small, focused PRs are
  what make that possible. Keep a PR focused on one issue and explain what
  changed and why [1]. Creative Commons aims to review pull requests within 5
  business days [4], so a good PR expects a reply inside a week.
- **Walking away after opening.** When a reviewer requests changes, respond.
  Opening a PR and disappearing is bad form. If you run out of time, tell the
  maintainer so they can reopen the issue for someone else [1].
- **Treating a rejection as failure.** A contribution may not merge. Ask for
  the reason, respect the decision, and fork your own version if you disagree
  [1].

## Why the gates are hard

The gates are not a style preference. They are the difference between a
reference and a liability. A wrong page costs a reader a bad decision. A
fabricated stat costs the wiki its credibility. The machine enforces the bar
because a human cannot be trusted to enforce it on every page, every day.

That is the honest reason the gates exist. Burned by self-reported work that
looked fine and was wrong, the wiki now fails bad pages by machine. A machine
that fails a bad page protects the whole graph, so a reader never meets a claim
that cannot be checked.

## Run it today

Do not read this page twice. Pick one action and finish it now.

- **First contribution.** Fork the repository, fix one broken link or one stale
  stat on an existing page, and open the pull request. That is a complete
  contribution. It clears the loop end to end.
- **New page.** Run the [scoring rubric](#contribution-scoring-rubric) on the
  topic before you write. A 4 on every axis means the topic is worth a page.
- **Agent.** Drop the agentic SOP into your tool, point it at the [map](./map),
  and let it produce a draft. Then run the checklist before you open the pull
  request.

## Further reading

- [Welcome and how to use the wiki](./intro)
- [Map of the wiki](./map)
- [What is GTM](./foundations/what-is-gtm)
- [The GTM strategy framework](./foundations/gtm-strategy-framework)
- [The MEDDPICC flow](./flows/sales-process-meddpicc), the reference page
- [GTM OS architecture](./agentic/gtm-os-architecture)
- [Agentic guardrails and measurement](./agentic/guardrails-and-measurement)
- [Outbound from zero](./playbooks/outbound-from-zero)

## Sources

1. [GitHub Open Source Guide: How to contribute to open source](https://opensource.guide/how-to-contribute/)
2. [GitHub Octoverse: A new developer joins GitHub every second](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
3. [GitClear: Classic pull request stats](https://www.gitclear.com/help/pull_request_classic_stats_how_to_optimize_long_term_health)
4. [Creative Commons: Pull request guidelines](https://opensource.creativecommons.org/contributing-code/pr-guidelines/)
5. [GitHub Docs: Contributing to open source](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source)
