---
class: fundamental
sidebar_position: 2
title: Vet a benchmark before you cite it
description: "Read a benchmark as a claim about a population: check the sample, the source, the date, and the definition before you put the number in a plan."
status: active
tags: [resources, benchmarks, sources, data, research]
last_updated: 2026-10-10
---

# Vet a benchmark before you cite it

Every benchmark is a claim about a population. The number alone does not tell you who was measured, how many people took part, when the study ran, or who paid for it. Pull those four facts first. Then decide how much weight the number carries in your plan.

The [Data](/docs/data) section holds vetted tables with a named source and a date on every figure. This page gives you the check to run on a number you meet somewhere else: a vendor blog, a conference slide, a competitor's deck. The same discipline applies to closed deals on [Win-loss](/docs/foundations/win-loss).

## Four facts to pull from every number

- **Population.** Who was measured? Sales leaders, buyers, or a mix? A number about "B2B teams" hides whether the study covered enterprise, mid-market, or self-serve.
- **Sample size.** How many people or records? Vendelux surveyed 120+ B2B marketing leaders <sup><a href="#sources">[62]</a></sup>. Salesforce surveyed 5,500 sales professionals across 27 countries <sup><a href="#sources">[26]</a></sup>. The second figure carries more weight on a question about sales behavior.
- **Date.** When did the data land? A 2019 benchmark describes a market two cycles old.
- **Funder.** Who paid for the study? A vendor that sells the fix publishes the problem.

Write the four facts beside the number. A figure with a blank beside any of them stays a marketing claim until someone fills the blank.

## Sample size sets the weight

A small study and a large one answer different questions. A survey of 120 leaders describes those 120 leaders. A survey of 5,500 people describes a population. When two numbers disagree, check the sample size before you pick a side.

Big samples have their own trap. Lavender benchmarked 231,818 cold emails and reports that A-grade copy lifts reply rates 27 to 79 percent by department <sup><a href="#sources">[111]</a></sup>. A large record count makes the average stable. It does not make the average apply to your list. Ask what the records share, and whether your list shares it.

## Stated preference is not behavior

People answer survey questions with what sounds reasonable. They act on what is easy. Gartner found that 61 percent of B2B buyers say they prefer a rep-free buying experience <sup><a href="#sources">[42]</a></sup>. The same buyers still reach the winning vendor through a shortlist. 6sense found the winning vendor on the day-one shortlist in 95 percent of deals <sup><a href="#sources">[44]</a></sup>.

Read a stated preference as a direction. Then check the observed behavior before you rebuild a motion around it.

## Selection bias hides in the sample

Liminal's win-loss guide makes the case for closed deals: capture every deal, not a sample, because a sample introduces selection bias and signal loss <sup><a href="#sources">[293]</a></sup>. The same trap sits under benchmark studies.

A survey sent to a vendor's customer list measures that vendor's customers. A study of surviving companies measures survivors. Ask how the study drew its sample before you trust the average.

## Vendor sources carry the vendor's interest

Many GTM numbers come from a vendor with a product to sell. That does not make the number false. It makes the number interested. Lavender sells email copy tooling, and the benchmark above supports its product <sup><a href="#sources">[111]</a></sup>. Cite the number, name the vendor, and label it a vendor source. The [Data](/docs/data) pages mark vendor sources this way.

## Definitions drift between studies

Two studies of one stage can disagree because each defines the stage differently. Salesforce measured MQL-to-SQL at 13 percent <sup><a href="#sources">[26]</a></sup>. First Page Sage reports 36 to 47 percent for the same handoff <sup><a href="#sources">[24]</a></sup>. The gap comes from the definition of each stage, not from the market.

Report the range and name the definition. A single point pulled from a wide study travels badly.

Dates drift too. 6sense put the average buying cycle at 11.3 months in 2024 and 10.1 months in 2025 <sup><a href="#sources">[44]</a></sup>. Cite the as-of date with the number, because the market moves under the figure.

## Vetting checklist

```text
BENCHMARK VETTING CHECKLIST
[ ] Population named (who, exactly)
[ ] Sample size stated
[ ] As-of date inside the topic cadence
[ ] Funder named (vendor or independent)
[ ] Sample drawn without selection bias
[ ] Stage definitions written down
[ ] Range reported, not a single point
[ ] Vendor status labeled in the citation
```

## Worked example: reading a 3.43 percent cold-email reply rate

Woodpecker reports an average cold-email reply rate of 3.43 percent <sup><a href="#sources">[2]</a></sup>. SalesHive reports a blended B2B reply rate of 5.8 percent, down from 6.8 percent in 2023 <sup><a href="#sources">[1]</a></sup>. The two figures disagree by more than two points.

Pull the four facts. Woodpecker's figure comes from a cold-email tool vendor. SalesHive blends cold email with other channels. The gap sits in the population and the channel mix, not in a market swing.

For a plan, report the range and pick the figure that matches your channel and your list quality. For a target, set the floor at the lower number and treat the higher number as upside. [Outbound response rate benchmarks](/docs/data/outbound-response-rates) carries both figures with their bases.

## Failure modes

- **A number with no population.** "Reply rates are 8 percent" describes nobody. Fix: name the population or drop the number.
- **A vendor number cited as neutral.** The citation hides the funder. Fix: label the source type in the footnote.
- **A stale benchmark.** A 2019 figure anchors a 2026 plan. Fix: check the as-of date against the topic cadence.
- **A single point from a wide study.** The average hides the spread. Fix: report the range.
- **A sample of survivors.** The study measured the companies still standing. Fix: ask how the study drew the sample.

## How the check changes by stage

- **Seed.** You have no data of your own, so a benchmark starts as a hypothesis. Use the range, not the point.
- **Growth.** You have your own numbers, so the benchmark becomes a sanity check against your trend. A wide gap means one of the two is wrong.
- **Scale.** You run your own study or buy one. Benchmarks from outside your segment carry less weight than your own closed-deal data.

## Agentic layer

An agent can tag every number it pulls with the four facts and hold a citation until the tags fill. Point the agent at the source registry and it flags a figure with no named source. A human still decides whether the number matches the segment. [Probabilistic pipelines](/docs/agentic/probabilistic-pipelines) covers the sample-size math behind that check.

## Related pages

- [Data](/docs/data): the vetted tables this check protects.
- [Win-loss](/docs/foundations/win-loss): the same discipline applied to closed deals.
- [Probabilistic pipelines](/docs/agentic/probabilistic-pipelines): sample-size rules and miss-rate reporting.
- [Outbound response rate benchmarks](/docs/data/outbound-response-rates): the worked example in full.
- [Inspection and deal review](/docs/culture/inspection-and-deal-review): the weekly habit that tests a number against the forecast.

## Further reading

- [Gartner: Sales Survey 2025](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), 2025. Stated buyer preference.
- [6sense: 2025 B2B Buyer Experience Report](https://6sense.com/science-of-b2b/buyer-experience-report-2025/), 2025. Buying cycle length and shortlist share.
- [Liminal: Win-Loss Analysis, A Practical Guide](https://liminal.co/articles/insights/win-loss-analysis-guide/), 2026. Why a sample loses signal.
- [Woodpecker: Cold Email Statistics](https://woodpecker.co/blog/cold-email-statistics/), 2026. Average cold-email reply rate.
- [SalesHive: B2B Cold Email Statistics](https://saleshive.com/blog/b2b-cold-email-statistics/), 2025. Blended B2B reply rate.

## Sources

- [1] SalesHive, 2025: blended B2B cold reply 5.8 percent, down from 6.8 percent in 2023. Source registry #1.
- [2] Woodpecker, 2026: cold email reply average 3.43 percent. Source registry #2.
- [24] First Page Sage, 2024: MQL to SQL 36 to 47 percent. Source registry #24.
- [26] Salesforce, State of Sales 2024: MQL to SQL 13 percent across 5,500 sales professionals in 27 countries. Source registry #26.
- [42] Gartner, 2025: 61 percent of B2B buyers prefer a rep-free buying experience. Source registry #42.
- [44] 6sense, 2025: buying cycle 10.1 months, down from 11.3 in 2024; winning vendor on the day-one shortlist in 95 percent of deals. Source registry #44.
- [62] Vendelux, 2026: event survey of 120+ B2B marketing leaders. Source registry #62.
- [111] Lavender, 2026: benchmark across 231,818 emails. Source registry #111.
- [293] Liminal, 2026: capture every closed deal, not a sample, because a sample loses signal. Source registry #293.
