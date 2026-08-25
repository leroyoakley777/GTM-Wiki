---
sidebar_position: 3
title: Sales Process Design
description: "Design a sales process that converts predictably: the stage map, the qualification framework that fits your ACV, the stage gates that stop deals from leaking, the handoff and SLA, the metrics that tell you the process works, and the failure modes that sink most process rollouts. Worked example and agentic layer included."
last-updated: 2026-08-25
status: active
tags: [sales, process, qualification, stages, sdr, ae, handoff, sla, playbook, agentic]
domain: playbooks
parent: playbooks/index
---

# Sales Process Design

Design a sales process that converts predictably from first
conversation to closed-won. A process is not a slide deck and it is not
a CRM field list. It is a set of stages, each with an exit gate, run
the same way on every deal. This playbook tells you how to build that.

Most teams do not have a sales process. They have a funnel shape in a
dashboard and a habit of calling everything that moves an opportunity.
The result is a pipeline that looks full and forecasts like a coin
flip. This playbook fixes that by building the process from the deal
backward: name the stages, gate each one, and hold the handoff to a
standard you can measure.

This page is the *design* playbook. The [Sales Process - the MEDDPICC
Flow](../flows/sales-process-meddpicc) page is the executable run of
that process stage by stage. Read both. This one tells you how to
decide the process. That one tells you how to run a deal through it.

---

## Definition

A sales process is a repeatable set of stages that moves a prospect
from first contact to a closed deal. Each stage names what must happen,
who owns it, and what must be proven before the deal advances. The
process is the same on every deal, so the team can learn across deals
instead of improvising on each one ([SalesHive, sales process
definition](https://saleshive.com/glossary/sales-process)).

A sales process is not a methodology, though the two get confused.
A methodology is the qualification lens: BANT, MEDDIC, CHAMP, SPICED.
A process is the stage map the lens is applied to. You can run BANT in
a three-stage process or a nine-stage process. The process says how far
a deal travels and when it stops. The methodology says what must be
true at each stop ([Demodesk, sales qualification frameworks](https://demodesk.com/blog/sales-qualification-frameworks-how-to-choose)).

The pipeline that results is the financial expression of the process.
Pipeline coverage, stage conversion, and win rate are all downstream of
the process design. Fix the process and the numbers move. Design no
process and the numbers are noise.

---

## Why It Matters

The buyer does not need your process to buy. That is the first fact.
Gartner data says buyers spend roughly 17% of their buying time with
suppliers, and 61% of B2B buyers prefer a rep-free buying experience
([Gartner, Future of Sales 2020](https://www.gartner.com/en/sales/insights/b2b-buying-journey); [Gartner, sales survey 2025](https://www.gartner.com/en/newsroom/press-releases/2025-06-16-gartner-press-release)). 
Forrester puts the self-serve share of the B2B buyer journey at about
70% ([Forrester State of GTM 2024](https://www.forrester.com/blogs/the-state-of-go-to-market-2024/)). 
Buyers do most of their evaluation before you get a meeting.

That is not an argument against a process. It is an argument for a
tighter one. If the buyer does two-thirds of the journey on their own,
the process does not carry the sale. It carries the *handoff*: knowing
which deals are real, proving what is still missing, and spending human
effort only where it changes the outcome. A process is the filter that
keeps reps from wasting the limited face time they earn.

The cost of no process is measurable. Win rates sit around 20-21% on
average in B2B ([Ebsta / Pavilion](https://www.pavilion.io/post/sales-benchmark-report); [SalesMotion](https://salesmotion.com)). 
Individual reps hit quota at roughly 43-47% ([RepVue Cloud Sales Index Q4 2024](https://www.repvue.com/reports/quota-attainment-report)). 
Those are the averages *with* a process in most orgs. Without one, the
numbers are worse and, critically, you cannot tell which part of the
funnel is leaking. The process is what makes a leak visible.

---

## Framework: The Four Design Decisions

Design the process by making four decisions in order. Each one has a
right answer that depends on your ACV and your buyer. Do not skip ahead.

### Decision 1: How many stages, and what are they?

The stages must reflect how your buyer actually decides, not a generic
template. Most B2B processes resolve to five or six stages:

1. **Qualification.** The lead is real, fits ICP, and has a reason to buy.
2. **Discovery.** The problem is understood and the value hypothesis is set.
3. **Proposal.** The solution and price are on the table.
4. **Negotiation.** Terms and price are reconciled.
5. **Closed-won / closed-lost.** The deal resolves and the outcome is captured.

Each stage has an exit gate: the thing that must be proven before the
deal moves. If a deal cannot meet the gate, it stays in the stage. A
deal that advances on a miss makes every later stage more expensive,
not faster. The [Sales Process - the MEDDPICC Flow](../flows/sales-process-meddpicc)
gives the full executable detail of this arc.

Match the stage count to the deal complexity. A five-figure self-serve
deal does not need nine stages. A seven-figure enterprise deal does.
The rule: the stage map should be the minimum number of gates a rep
needs to stop and prove something before committing more effort.

### Decision 2: Which qualification framework?

This is where the methodology choice happens. The framework must match
your ACV and your buying committee, not your favorite blog post.

- **BANT** (Budget, Authority, Need, Timing). A fast filter for short
  cycles, clear procurement paths, and lower ACV. Weak when buying is
  collaborative and budget appears late. Use it as a starting screen,
  not a rigid gate ([Demodesk](https://demodesk.com/blog/sales-qualification-frameworks-how-to-choose)).
- **CHAMP** (Challenges, Authority, Money, Prioritization). Leads with
  the problem, not the budget. Good for consultative SaaS where the
  ROI conversation matters more than a pre-allocated line item.
- **MEDDIC / MEDDPICC** (Metrics, Economic Buyer, Decision Criteria,
  Decision Process, Identify Pain, Champion, Paper Process, Competition).
  Built for complex enterprise deals with five or more stakeholders on
  the buying committee. Overkill for a two-person SMB deal
  ([Demodesk](https://demodesk.com/blog/sales-qualification-frameworks-how-to-choose)).

The layered pattern works: use BANT to screen leads fast at the top,
then apply MEDDIC to the deals that progress. This keeps early
qualification fast and late qualification thorough
([ManageYourLeads](https://www.manageyourleads.com/blog/bant-vs-meddic-vs-champ)). 
The discipline of execution matters more than the framework you pick.
A team that runs BANT consistently beats a team that runs MEDDIC
inconsistently.

### Decision 3: Where is the handoff, and what is the SLA?

The handoff between SDR and AE is where most deals leak. A strong
handoff gives the AE everything needed to run the first call
immediately: qualification, intent, deal context, and a clear next
step, not just a meeting invite ([Default, SDR to AE handoff](https://www.default.com/post/sdr-to-ae-handoff)).

Design the handoff around an SLA. The SDR commits to booking a
qualified meeting, completing the handoff record with all required
fields, and attending the start of the discovery call for a warm
handoff. The AE commits to a defined response time and immediate next
action ([Rework, lead-to-opportunity conversion](https://resources.rework.com/libraries/pipeline-management/lead-to-opportunity-conversion)).

Write down what a qualified handoff means. Activated lead, budget
signal, buying intent. If you cannot write it, the handoff is a
lottery, and the AE will re-qualify every deal from scratch, which
doubles the sales cycle and destroys the SDR motion.

### Decision 4: What does each stage cost to exit, and what is the gate?

Every stage needs an exit gate that a rep can check in seconds. The
gate is the minimum proof to advance. Example gates:

- **Qualification exit:** ICP fit, a stated problem, and a decision
  maker or champion identified.
- **Discovery exit:** value hypothesis set, economic buyer engaged,
  decision process mapped.
- **Proposal exit:** decision criteria known, competition known, price
  aligned to value.
- **Negotiation exit:** paper process started, final decision makers
  confirmed, a close date.

The gate is not a hope. It is a thing that can be marked true or false
in the CRM. Empty fields after the gate deadline are the signal that
the deal is at risk, not paperwork to chase.

---

## How to Execute: Build the Process in Six Steps

### Step 1: Map the current state before you redesign

Do not design the new process from a blank page. Look at your last
twenty closed deals and your last twenty lost deals. For each, note
where it entered, how many stages it touched, where it stalled, and
where it died. This is the data that tells you which stage to fix
first. A process built without this map is a guess.

### Step 2: Name the stages and the gates

Write the stage list from Decision 1. For each stage, write one exit
gate. Keep the gate to one sentence. The whole map should fit on one
page. If it does not, it is too complex to run consistently.

### Step 3: Pick the qualification framework and wire it in

Choose the framework from Decision 2. Put its fields in the CRM as the
required fields on the qualifying stage. A framework that lives in a
deck and not in the CRM is a philosophy, not a process.

### Step 4: Define the handoff and the SLA

Write the SDR-to-AE handoff standard. Name the required fields, the
response SLA, and who attends the first call. Make the handoff a stage
with its own gate, not an informal email.

### Step 5: Measure the stage conversion

Instrument the funnel so you can see the leak between every stage.
Name the stage conversion rates you expect to see against benchmarks:
visitor to lead, lead to MQL, MQL to SQL, SQL to opportunity,
opportunity to closed-won ([SalesHive funnel](https://saleshive.com/glossary/sales-process); [First Page Sage](https://www.firstpagesage.com)). 
If a stage converts far below the benchmark, that stage is where the
process is failing, and that is where you fix it.

### Step 6: Review the process on a cadence

The process is not a one-time artifact. Review stage conversion and
deal outcomes weekly or monthly. When a stage leaks, fix the gate, the
framework, or the handoff, then watch the number. A process that is not
reviewed decays into a dashboard nobody reads.

### Acceptance gates before you go live

- The stage map fits on one page.
- Every stage has a one-sentence exit gate.
- The qualification framework is in the CRM as required fields.
- The handoff has a written SLA.
- Stage conversion is instrumented and readable.
- You can name the one stage that leaks most and why.

Skip a gate and the rollout fails differently: no gates means no
discipline, no SLA means a leaky handoff, no measurement means you
cannot tell if it works.

---

## Metrics That Tell You the Process Works

A process is only real if the numbers move. Watch these.

- **Stage conversion rates.** The leak between each stage. Compare to
  named benchmarks: MQL to SQL sits around 13% ([Salesforce State of Sales 2024](https://www.salesforce.com/news/stories/state-of-sales/))
  and 15-21% ([thedigitalbloom](https://thedigitalbloom.com)); SQL to
  opportunity 30-50% and opportunity to closed-won 20-35% ([Zeliq](https://zeliq.com)); 
  SQL to opportunity around 47% with a 21% average close rate
  ([Ebsta / Pavilion](https://www.pavilion.io/post/sales-benchmark-report)). 
  Your process targets your slice of those ranges, not the blended
  number.
- **Win rate by stage of entry.** Deals that enter late and skip
  qualification win at a different rate than deals qualified early. If
  late-entry deals collapse, your gate is too weak.
- **Sales cycle length.** The average time from first touch to close.
  Shorter cycles improve forecast accuracy and cash flow.
- **Pipeline coverage.** How much open pipeline you need to hit quota.
  Coverage of 3-5x is the common rule of thumb, rising with win-rate
  expectations ([Saber](https://saber.com)). At a 21% win rate you need
  roughly 4.8x coverage ([Lative](https://lative.com)).
- **Forecast accuracy.** Structured, stage-gated forecasting beats
  manual judgment. Teams that use structured analysis are about 28%
  more likely to hit quota than teams that forecast by feel
  ([CSO Insights](https://www.csoinsights.com)).

The compounding metric is win rate. A 1-point lift in win rate is worth
more than a 1-point lift in lead volume, because it multiplies across
every stage. That is why the process exists: to lift the rate at which
real deals close.

---

## Failure Modes That Sink Process Rollouts

Most process rollouts fail, and they fail in predictable ways.

1. **Designing from a template, not from your deals.** A generic
   six-stage map ignores where your deals actually stall. Build the
   map from your last twenty wins and losses, not from a slide.
2. **Qualification as a one-time event.** A deal qualified at entry is
   not qualified forever. Re-qualify at every stage gate. Internal
   changes at the buyer kill deals that were qualified three months
   ago ([ManageYourLeads](https://www.manageyourleads.com/blog/bant-vs-meddic-vs-champ)).
3. **A framework in a deck, not in the CRM.** If the qualification
   fields are not required in the system, reps will not fill them, and
   the process does not exist.
4. **No written handoff SLA.** The AE re-qualifies from scratch, the
   cycle doubles, and the SDR blames the AE. The SLA is the fix.
5. **Advancing on a miss.** Skipping a gate to keep momentum makes
   every later stage more expensive. The stall you see at proposal
   almost always started with a qualification you let slide.
6. **Watching the funnel, not the stages.** A full pipeline hides a
   leaky middle. Stage conversion is the number to watch, not raw
   pipeline volume.
7. **Choosing the wrong framework for the ACV.** BANT on a complex
   enterprise deal leaves the economic buyer and decision process
   unmapped. MEDDIC on a two-person SMB deal is bureaucratic overhead.
   Match the framework to the deal.
8. **A process that never reviews itself.** Without a cadence, the
   process decays into a dashboard. Review stage conversion, fix what
   leaks, and watch the next month.

---

## Worked Example: Redesigning a Leaky Mid-Market Process

A mid-market SaaS company sells a $25K ACV product to operations
teams. The funnel looks full but the close rate is 15%, below the
~20-21% average. Deals stall at proposal.

The map of the last twenty lost deals shows the leak: most deals die
in discovery or at proposal, and the common thread is that the economic
buyer was never engaged. The rep talked to a champion who had no
budget authority.

The fix, in order:

1. **Switch from BANT to CHAMP-led discovery.** Budget appeared late,
   so a budget-first framework was disqualifying deals prematurely.
   CHAMP leads with the challenge, which fits how the ops buyer
   evaluates ([Demodesk](https://demodesk.com/blog/sales-qualification-frameworks-how-to-choose)).
2. **Add an economic-buyer gate to discovery.** The deal does not leave
   discovery until a decision maker with budget authority is engaged.
3. **Write the SDR-to-AE handoff SLA.** SDR books the qualified meeting,
   fills the qualification record, and attends the first call.
4. **Instrument stage conversion.** Discovery-to-proposal becomes the
   measured stage. Three months later, the close rate is above 20% and
   the proposal stall is gone.

The process did not invent more leads. It stopped losing the leads it
had to a leak the team could now see.

---

## Agentic Layer

The sales process is where agents earn their keep on the qualification
and handoff work, because that work is repetitive, high-volume, and
scored against a defined standard. The reusable shape:

| Process step | Agent does | Human approves |
|---|---|---|
| Lead qualification | Screens inbound against the BANT or ICP gate, flags fit | The gate definition, not every lead |
| Handoff record | Drafts the SDR-to-AE record from call notes and intent data | The record, then the AE takes over |
| Gate checks | Flags deals missing the exit gate before they advance | The gate policy, not every flag |
| Re-qualification | Re-checks active deals against the stage gate on a cadence | The requalification trigger |
| Forecast rollup | Aggregates stage-gated deals into a forecast with coverage math | The forecast review, not the arithmetic |

**The one-prompt starter for gate enforcement** (adapt to your stack):

```
You are enforcing our sales process gates. For each open deal, pull the
required fields for its current stage and return a record with: deal,
stage, gate met (yes/no), the missing field, and the date the deal
entered the stage. Flag only deals past their stage deadline with a
missing gate. Route the list to the owning rep. The gate is the
standard, not the rep's opinion. Return only deals that fail.
```

**Three guardrails that keep it honest** (from [Guardrails & Measurement](../agentic/guardrails-and-measurement)):

1. **Gate coverage is complete.** If the CRM fields are thin, the agent
   cannot check the gate, and the gate is fake. Instrument before you
   automate.
2. **Human approval on the policy, not every flag.** Define the gate
   once, let the agent enforce it, review the outcomes weekly.
3. **Never auto-advance a deal.** The agent flags and routes. Advancing
   a deal past a gate is a human call, because a wrong advance is more
   expensive than a delayed one.

---

## Sources

- [SalesHive, Sales Process definition](https://saleshive.com/glossary/sales-process): what a repeatable sales process is and why it matters.
- [Demodesk, Sales Qualification Frameworks](https://demodesk.com/blog/sales-qualification-frameworks-how-to-choose): BANT, MEDDIC, CHAMP, SPICED and how to choose.
- [ManageYourLeads, BANT vs MEDDIC vs CHAMP](https://www.manageyourleads.com/blog/bant-vs-meddic-vs-champ): the layered qualification pattern and the re-qualification discipline.
- [Default, SDR to AE handoff](https://www.default.com/post/sdr-to-ae-handoff): what a high-conversion handoff actually contains.
- [Rework, lead-to-opportunity conversion](https://resources.rework.com/libraries/pipeline-management/lead-to-opportunity-conversion): the handoff SLA in practice.
- [Salesforce State of Sales 2024](https://www.salesforce.com/news/stories/state-of-sales/): MQL to SQL conversion benchmark.
- [Ebsta / Pavilion](https://www.pavilion.io/post/sales-benchmark-report): SQL to opportunity and average close-rate benchmarks.

---

## Further Reading

- [Sales Process - the MEDDPICC Flow](../flows/sales-process-meddpicc): the executable run of the process, stage by stage.
- [Outbound from Zero](../playbooks/outbound-from-zero): the flow that feeds this process when a deal starts cold.
- [GTM Funnel](../foundations/gtm-funnel): the stage-by-stage leakage this process runs on.
- [Revenue Operations](../foundations/revenue-operations): how the process feeds the revenue engine.
- [Pricing as GTM](../data/pricing-as-gtm): how price shapes the negotiation stage.
