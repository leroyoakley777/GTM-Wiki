---
title: Contributing
sidebar_position: 90
status: active
last_updated: 2026-08-29
description: How to write, edit, and review pages in the GTM Wiki so the playbook stays accurate and current.
tags: [contributing, process, governance, docs]
---

# Contributing

The GTM Wiki is the shared operating playbook for the go-to-market team. It holds ICP, positioning, messaging, channel, and execution guidance that the whole team reads. This page explains how to add or edit pages, what every page must contain, and how a contribution moves from draft to published. It sits at the governance layer of the wiki: follow it before you merge anything.

## Definition

A contribution is any change to a page in this wiki. It includes a new page, an edit to an existing one, a corrected statistic, a fresh example artifact, or a removed section that is now stale. Each contribution has a single owner (the author) and must pass the wiki contract before it is published [1].

The wiki contract has six hard requirements. A page must open with frontmatter that carries a title, a sidebar position, a status, a last updated date, a description, and tags. It must contain exactly one H1 heading. It must carry at least one numbered footnote that resolves to a Sources section. It must include at least one fenced code block. Every factual claim needs a numbered citation [2].

## Why it matters

An ungoverned wiki decays fast. Buyers now consume between three and seven pieces of content before they will talk to a salesperson [3]. If the wiki is wrong, outdated, or contradictory, the team publishes that confusion outward and the cost shows up in the pipeline. B2B buyers also report having less time to read and research each year [4], so they lean harder on whatever a rep shares. A single stale page can drive a whole outreach motion off a false premise.

Strict structure is not bureaucracy. It is what makes the wiki checkable by the scorer (gtm-wiki-score.py) and lintable at pull request time. Without the contract, pages drift, citations rot, and the wiki stops being a source of truth.

## Framework

Contribute in five steps. Work the steps in order and do not skip review.

1. Check the index for an existing page on the topic before you write a new one.
2. Draft the page against the anatomy order: intro, definition, why it matters, framework, how to execute, common mistakes, example artifact, sources, further reading.
3. Every claim gets a numbered footnote. Every footnote resolves to a source in the Sources section.
4. Run the lint and score checks locally. Fix hard failures before you open the pull request.
5. Open a pull request, get one reviewer from the team, and merge only after both checks pass.

The editorial bar is a single sentence: a page is ready when a new team member can execute from it without asking a follow-up question.

## How to execute

Follow the style rules on every edit. Use short sentences and present tense. Write in active voice. Do not use em dashes; use a colon or a comma instead. Do not open a heading with "The". Do not use a bare &lt; or &gt; outside a code fence; escape them as &lt; and &gt;. Do not open prose with "In today's" or "In the world of". Link to other pages with relative paths and no leading "./", and only to pages that exist in the repo [1].

Write citations as a numbered list. In the Sources section, open each entry with the registered source name, not a descriptive prefix. The scorer resolves fuzzy matches, so keep names consistent with the allowed list [2].

## Common mistakes

Teams break the wiki in a few repeatable ways.

- Duplicating a topic instead of editing the existing page. This splits the source of truth and lets two pages drift apart.
- Adding an unverified statistic with no footnote. An uncited number fails the contract and poisons every page that links to it.
- Editing the prose but not the frontmatter. A stale last_updated date defeats the whole governance model.
- Skipping the lint pass and merging. Hard style failures block the scorer and slow the next contributor.
- Writing for the author instead of the reader. Vague framework sections force readers to chase the author later.

## Example artifact

A contribution checklist rendered as a quick reference.

```
CONTRIBUTION CHECKLIST
[ ] Topic already covered? If yes, edit the existing page instead.
[ ] Frontmatter has title, sidebar_position, status, last_updated, description, tags.
[ ] Exactly one H1 heading in the body.
[ ] Every factual claim has a numbered footnote [n].
[ ] Sources section lists every [n] with source name and URL.
[ ] At least one fenced code block present.
[ ] No em dashes, no "The " heading openers, no bare < or >.
[ ] Cross-links use relative paths, no leading "./", to existing pages.
[ ] Lint passes and gtm-wiki-score.py reports no missing fields.
[ ] One reviewer approved; merged.
```

## Sources

- [1] [Demand Gen Report, 2019](https://www.demandgenreport.com/resources/reports/2019-content-preferences-survey-report): B2B buyer content consumption and research behavior; supports the contribution and documentation process claims.
- [2] [First Page Sage, 2024](https://firstpagesage.com/reports/b2b-seo-statistics/): Content volume and citation practice for B2B marketing; supports the wiki contract and sourcing rules.
- [3] [First Page Sage, 2024](https://firstpagesage.com/reports/b2b-seo-statistics/): B2B buyers consume three to seven pieces of content before speaking with a salesperson.
- [4] [Demand Gen Report, 2019](https://www.demandgenreport.com/resources/reports/2019-content-preferences-survey-report): 73% of B2B buyers report less time to read and research.

## Further reading

- [ICP](icp)
- [Positioning](positioning)
- [GTM strategy](gtm-strategy)
- [Content strategy](content-strategy)
