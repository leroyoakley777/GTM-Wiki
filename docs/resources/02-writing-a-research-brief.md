---
class: fundamental
sidebar_position: 3
title: Write a research brief before you buy the study
description: "Turn a question into a brief: name the population, the sampling plan, and the decision rule before any data lands, so the study answers the question you asked."
status: active
tags: [resources, research, benchmarks, surveys, win-loss, data]
last_updated: 2026-10-11
---

# Write a research brief before you buy the study

Most bad research answers the question the researcher found easy to ask. The fix is a brief: one page that names the decision, the population, the sampling plan, and the rule you will use to read the result. Write the brief before the first interview and before the first dollar leaves the budget.

[Vet a benchmark before you cite it](./vet-a-benchmark) covers the number you meet in the wild. This page covers the number you commission or collect yourself: a win-loss loop, a buyer survey, a pricing study, a churn study.

## Start from the decision, not the topic

A topic such as pricing, churn, or ICP fit is not a research question. A decision is.

Write the decision as one sentence with an owner and a date. "By March 31 we will move the Growth tier from seat pricing to usage pricing, or we will keep seat pricing and cut the entry seat minimum." Then write what each answer changes. A question whose two answers lead to the same action is not worth funding.

The decision sets the rest of the brief. A decision about a price move needs a buyer population and a willingness-to-pay method. A decision about why deals stall needs closed deals and the people who ran them.

## Write the brief from a template

Fill every slot before you start. A blank slot is a question you have not answered yet, and the blank travels into the analysis as an assumption.

```text
RESEARCH BRIEF
Decision:        one sentence, with an owner and a date
Answers that change the decision:  what we do on each result
Population:      who is in the frame, who is out, and why
Sampling plan:   how we draw the sample, and the known bias
Method:          interview, survey, or behavioral data
Instrument:      the questions, in the order we ask them
Decision rule:   the threshold that moves us, set before the data
Dates:           field window and readout date
```

## Name the population before you name the questions

The population is the set the finding describes. A study of "B2B buyers" describes nobody in particular. A study of "finance leaders at 200 to 2,000 seat SaaS companies who signed a contract in the last two quarters" describes a set you can act on.

Salesforce surveyed 5,500 sales professionals across 27 countries for State of Sales 2024 <sup><a href="#sources">[26]</a></sup>. Vendelux surveyed 120+ B2B marketing leaders for its 2026 event study <sup><a href="#sources">[62]</a></sup>. Both numbers are usable, and they describe different populations at different weights. Your brief states which one your decision needs.

Write the exclusion list too. "We will not interview champions who left the company" is a sampling decision, and it belongs in the brief, not in the appendix.

## Set the decision rule before the data lands

The decision rule is the threshold you agreed to act on. Write it in the brief, with an owner and a date. Two examples:

- "If 6 or more of 10 interviewed buyers name implementation effort as a top-two reason for delay, we ship the onboarding track this quarter."
- "If the median acceptable price sits more than 15 percent below the current list price, we test a lower entry tier."

A rule written after the readout bends toward the answer the loudest person in the room already held. A rule written before the readout can fail, and a failed rule is the useful kind: it tells you the question was wrong.

## Match the method to the question

Three methods cover most GTM research, and each one answers a different question.

| Question | Method | What it cannot tell you |
|---|---|---|
| What do buyers say they want? | Survey | What they do at the moment of purchase |
| Why did this deal end this way? | Win-loss interview | What the wider market does |
| What happened across many deals? | Behavioral data | Why any single deal moved |

Stated preference and behavior diverge. Gartner found that 61 percent of B2B buyers say they prefer a rep-free buying experience <sup><a href="#sources">[42]</a></sup>, and 6sense found the winning vendor on the day-one shortlist in 95 percent of deals <sup><a href="#sources">[44]</a></sup>. A brief that asks only about preference reports the preference and misses the shortlist.

For closed deals, Liminal argues for the full set rather than a sample, because a sample loses signal and adds selection bias <sup><a href="#sources">[293]</a></sup>. Basis Global analyzed 7.2 million recorded buyer conversations and found 58 percent of late-stage deals fail on implementation risk, not price <sup><a href="#sources">[294]</a></sup>. A recording beats a memory. Plan to capture calls while the deal runs, because a rep summary written three weeks later is a reconstruction.

Method design shows up in the numbers. Schmidt and Hunter found structured interviews predict job performance at about .51 against .38 for unstructured interviews, and a structured interview paired with a general mental ability measure reaches .63 <sup><a href="#sources">[372]</a></sup>. The same questions, asked in the same order, with the same scale, move the validity more than a longer conversation does. Write the instrument down before the first interview.

## Worked example: a brief for a stalled-deal question

A Series B company loses mid-market deals after the technical validation stage and wants to know why.

- Decision: "By June 30 we will either change the validation step or keep it, and we will name the owner of the change."
- Population: mid-market deals ($40,000 to $120,000 ACV) that reached technical validation and did not close in the last two quarters. Champions who left their company stay in the frame for the deal outcome and out of the frame for the buyer interview.
- Sampling plan: every closed-lost deal in the window, not a sample <sup><a href="#sources">[293]</a></sup>. Pull the recorded calls for each deal before the interviews.
- Method: buyer interviews with the economic buyer where the rep can arrange one, and call review for every deal.
- Instrument: ten questions on the validation step, in fixed order, with the same wording for every buyer.
- Decision rule: "If 60 percent or more of the interviews name effort or time-to-value as the primary delay, we change the validation step. If price leads instead, we take the finding to the pricing review."
- Dates: the RevOps lead runs it, a four-week field window, readout at the leadership meeting.

Nothing in that brief depends on the result. That is the test of a brief.

## Failure modes

- **A topic instead of a decision.** The study produces a deck with no owner. Fix: write the decision sentence first and refuse to fund the study without it.
- **A decision rule set after the readout.** The data confirms what the team already believed. Fix: write the threshold in the brief, with a date.
- **A survey for a behavior question.** Buyers report intent, and the plan acts on the report. Fix: pair the survey with behavioral data or call recordings.
- **A sample of survivors.** The study covers the customers who stayed. Fix: draw from the full set of deals in the window <sup><a href="#sources">[293]</a></sup>.
- **An instrument written the week of the first call.** Each interviewer asks a different question, and the answers do not stack. Fix: fix the wording and the order before the window opens.
- **A population stated as a market.** "B2B buyers" describes nobody. Fix: name the segment, the size band, and the time window.

## How the brief changes by stage

- **Seed.** The population is the founder network, and the sample stays small on purpose. Write the decision rule anyway, because the next study repeats the mistake without one.
- **Growth.** You have closed deals and product data, so the brief leans on your own records and uses outside benchmarks to set the range. Buy the outside study only for a question your own data cannot answer.
- **Scale.** You run a standing program: a quarterly buyer survey, a continuous win-loss loop, and a research calendar. Each study still carries its own brief, because a standing program hides a stale question better than a one-off study does.

## Agentic layer

An agent can hold the brief as a file and check every artifact against it. Point the agent at the instrument and it flags a question with no decision rule behind it, a sample drawn from one source, and a stat in the draft with no registry row. The agent also tags each interview transcript with the slot it feeds, so the readout builds itself from the raw material. A human still owns the decision sentence and the threshold. [Probabilistic pipelines](/docs/agentic/probabilistic-pipelines) covers the sample-size math that sets the confidence on a small sample.

## Related pages

- [Vet a benchmark before you cite it](./vet-a-benchmark): the check to run on a number you did not collect.
- [Data](/docs/data): the vetted tables this brief protects.
- [Win-loss](/docs/foundations/win-loss): the closed-deal loop a brief sets up.
- [Interview loop and scorecard](/docs/recruiting/interview-and-scorecard): the same instrument discipline applied to hiring.
- [Probabilistic pipelines](/docs/agentic/probabilistic-pipelines): sample-size rules and miss-rate reporting.

## Further reading

- [Gartner: Sales Survey 2025](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), 2025. Stated buyer preference against observed buying.
- [6sense: 2025 B2B Buyer Experience Report](https://6sense.com/science-of-b2b/buyer-experience-report-2025/), 2025. Shortlist behavior and buying-cycle length.
- [Liminal: Win-Loss Analysis, A Practical Guide](https://liminal.co/articles/insights/win-loss-analysis-guide/), 2026. Why the full set beats a sample.
- [Basis Global (via Liminal): buyer conversation analysis](https://liminal.co/articles/insights/win-loss-analysis-guide/), 2026. Implementation risk as the late-stage deal killer.
- [Schmidt & Hunter: The validity and utility of selection methods in personnel psychology](https://doi.org/10.1037/0033-2909.124.2.262), 1998. Interview structure and validity.

## Sources

- [26] Salesforce, State of Sales 2024: MQL to SQL 13 percent across 5,500 sales professionals in 27 countries. Source registry #26.
- [42] Gartner, 2025: 61 percent of B2B buyers prefer a rep-free buying experience. Source registry #42.
- [44] 6sense, 2025: buying cycle 10.1 months, down from 11.3 in 2024; winning vendor on the day-one shortlist in 95 percent of deals. Source registry #44.
- [62] Vendelux, 2026: event survey of 120+ B2B marketing leaders. Source registry #62.
- [293] Liminal, 2026: capture every closed deal, not a sample, because a sample loses signal. Source registry #293.
- [294] Basis Global (via Liminal), 2026: 7.2 million recorded buyer conversations; 58 percent of late-stage deals fail on implementation risk, not price. Source registry #294.
- [372] Schmidt & Hunter, 1998: structured interview validity about .51 against .38 unstructured; .63 with a general mental ability measure. Source registry #372.
