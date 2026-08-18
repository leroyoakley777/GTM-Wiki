---
sidebar_position: 3
title: "Agentic Outbound: The Harness"
description: "The outbound flow under an agent use: the runnable sequence of prove, automate, guard, the layer stack, agentic list build, personalization at scale, triage with a time-to-first-response SLA, deliverability guardrails, the SOP and prompts, use-health metrics, a worked example, and failure modes."
last-updated: 2026-08-17
status: active
tags: [outbound, flow, agentic, cold-email, sdr, use, triage, deliverability]
domain: flows
parent: flows/index
---

# Agentic Outbound: The Harness

This is the executable version of [Agentic
Outbound](../agentic/agentic-outbound) and the running twin of the
[Outbound from Zero](../playbooks/outbound-from-zero) playbook. The
manual flow is the sequence an operator steps through by hand. This flow
is the same sequence when an agent use runs the execution layers.

The gates do not move. Every row still needs a first name, a verified
email, and a one-line reason-to-reach. Every variant still earns human
approval before the first send. Nothing automates until 300+ sends prove
a pattern. What changes is who sources, who drafts, who sends, and who
answers replies. The sequence stays runnable, with an acceptance gate at
every step. **Do not advance on a miss.**

Measure the run against the [Outbound Response Rate
Benchmarks](../data/outbound-response-rates). Judge the channel choice
against the [Outbound channel](../channels/outbound) page.

---

## Augment, don't replace

**Augment, don't replace.** The data is consistent across every source.
Hybrid human-in-the-loop teams produce **2.8x more pipeline** than teams
attempting full replacement of their SDRs ([Autobound, 2026: vendor
source](https://www.autobound.ai/blog/ai-sdr-tools-guide)). Autonomous
AI SDR tools churn at **50–70% annually**, roughly double the turnover
of the human reps they replace ([UserGems via Autobound,
2026](https://www.autobound.ai/blog/ai-sdr-tools-guide)). Autonomous
agents convert meetings to qualified opportunities at **15% versus 25%
for human SDRs**, a 40% gap driven by weak objection handling, shallow
relationship building, and degraded judgment at scale ([SuperAGI via
Autobound, 2026](https://superagi.com/ai-vs-traditional-sdrs-a-comparative-analysis-of-pipeline-performance-and-cost-efficiency/)).

Read that third number twice. The agent that books the meeting is not
the agent that wins it. The use removes the thinking bottleneck
*between* the gate steps. A human keeps judgment on what goes out and on
what a prospect says back.

Gartner reaches the same verdict from the top down. By 2028 AI agents
will outnumber sellers 10x, yet fewer than 40% of sellers will report
the agents improved their productivity, and over 40% of agentic AI
projects will cancelled by the end of 2027 ([Gartner via Autobound,
2026](https://www.autobound.ai/blog/ai-sdr-tools-guide)). The tools that
survive lift the human. They do not replace the human.

**Acceptance gate:** you can state the augment-don't-replace rule as a
design decision, not a slogan. If your plan is "buy one autonomous AI
SDR and watch it book," stop and re-read [Agentic
Outbound](../agentic/agentic-outbound) before building anything.

---

## Sequence overview

The flow runs three stages, in order. Each stage has an acceptance gate
that is a hard stop until it passes.

1. **Prove the message.** Small list, high-touch, all human judgment.
   Find the offer that gets replies. Nothing is automated until the
   manual version beats baseline. *Gate: 300+ sends per variant and a
   positive-reply signal worth scaling.*
2. **Automate the use.** Agents source, draft, and route at scale.
   Humans approve the pattern, not every keystroke. *Gate: brief
   coverage above 90% so the "specific" lines are grounded.*
3. **Guard the quality bar.** Harness-health metrics are non-negotiable.
   If any slips, the loop is scaling garbage. Shrink it. *Gate: triage
   accuracy above 95%, override rate under 5%, hot replies answered
   inside 15 minutes.*

The layer stack the flow runs on is the [Agentic
Stack](../agentic/agentic-stack), placed on the autonomy ladder from
[Agent vs Human
Workflows](../agentic/agent-vs-human-workflows), and held honest by
[Guardrails & Measurement](../agentic/guardrails-and-measurement).

---

## Architecture: the layer stack the flow runs on

Five execution layers. Layers 1–3 are preparation, layer 4 is delivery,
layer 5 is the loop that keeps learning ([Agentic
Stack](../agentic/agentic-stack)).

| Layer | What the agent does | Human checkpoint |
|---|---|---|
| **Data / signals** | Sources, dedupes, enriches rows. Monitors hundreds of live buyer signals (job change, funding, tech-stack change, competitive displacement) | You score the final list before any send |
| **Research** | Builds a per-account brief from the signal, capped near 150 words | You audit brief coverage, not each brief |
| **Compose** | Drafts per-row messages from the brief plus your tone exemplars | You approve the pattern. Approval trains the voice |
| **Orchestrate** | Send-time, warmup, domain rotation, cadence, bounces | Send caps stay human-set |
| **Triage** | Classifies intent, drafts responses in under 5 minutes | You approve hot replies. 15-minute SLA on hot |

Each layer passes structured output to the next. Data emits a row with a
company, an ICP-fit score, a reason-to-reach, a verified email, and a
decision-maker contact. Research enriches that row with a brief.
Compose writes from the brief plus tone rules. Orchestrate sends on
cadence. Triage routes every reply and alerts a human.

**If the brief is thin, the message is thin.** A thin research layer
poisons everything downstream. The whole use is only as good as the
layer that feeds it ([Clay, via the Agentic Stack, 2026](https://www.clay.com/blog/outbound-sales-automation)).

---

## Stage 1: Prove the message (manual, before any agent)

The harness builds on a proven motion, never a substitute for
proving it. Stage 1 is identical to the manual flow in [Outbound from
Zero](../playbooks/outbound-from-zero).

**Acceptance gate for Stage 1:** you have 300+ sends per variant, a
delivery rate above 97%, and a positive-reply signal worth scaling. The
winning variant is kept, and you can name the metric that was failing
before you changed anything.

Do not optimize a message on a smaller sample. Small samples produce
noise, and noise produces confident wrong answers.

---

## Stage 2: Automate the use (the sequence in detail)

Once the message is proven, the use runs each layer. This section is
the runnable detail of each step, with its own gate.

### 2.1 Agentic list build

The rule "a 500-row list that matches the ICP beats a 50,000-row spray"
does not change. What changes is how fast you get to the good 500. An
agent sources, dedupes, and enriches from the data layer in hours
instead of the days a human spends searching row by row.

Modern agents monitor **hundreds of live buyer signals** (job changes,
funding rounds, hiring surges, tech-stack changes, competitive
displacement) and assemble a per-prospect research brief a human would
spend 15–30 minutes building by hand ([Amplemarket, 2026: vendor
source](https://www.amplemarket.com/blog/best-ai-sales-agents)). That
brief is what makes the personalization genuine, not templated.

The gate stays absolute. Every row needs a first name, a verified email,
and a one-line reason-to-reach. **No reason, no row.** The agent may
*propose* rows. You still sign off on the final list before anything is
sent. The 20% "perfect fit" tier still gets the deepest research.

Signal-driven outbound is the single biggest lever on reply rate.
Signal-triggered outreach (leadership changes, funding rounds, hiring
surges, tech adoption) reaches **14–25% reply rates**, against a
**3.43% cold-email industry average** ([Kyle Poyar's research and
Hunter.io 2026 State of Cold Email, both via the Agentic Stack,
2026](https://www.smartlead.ai/blog/ai-agents-for-outbound-sales)).
The use is the natural home for this: the data layer watches for the
signal, and the moment it fires, research composes a brief around a
concrete current event in the account.

**Acceptance gate for 2.1:** every row on the final list has a first
name, a verified email, a one-line reason-to-reach grounded in a live
signal, and your score. Cut any row that lacks a reason. A 500-row list
with 300 rows lacking a reason is a 300-row list plus 200 spray rows.

### 2.2 Personalization at scale

The sequence structure stays: Email 1 (reason-to-reach plus one
observation), Email 2 (proof or resource), Email 3 (different angle),
breakup. Keep each email in the **50–125 word** range: that length
earns roughly **50% higher reply rates** than longer formats
([Mailforge/Instantly via Martal, 2026](https://martal.ca/b2b-cold-email-statistics-lb/)).
One ask per email. A CTA that names the specific issue ("open to a
15-minute chat next week about [specific issue]") beats generic "let's
talk" ([Martal, 2026](https://martal.ca/b2b-cold-email-statistics-lb/)).

What the compose layer adds:

- **Variant generation.** Draft five versions of each email from the
  brief. You pick the voice. The use learns your pick.
- **Personalization at scale.** The research brief fills the specific
  line ("I saw [company] announced [trigger]") without you writing it
  500 times. This is what lifts reply rates from the 3–5% single-channel
  baseline toward 15–18% ([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
  Signal-based personalization, a trigger event plus a relevant value
  prop, reaches **15–25% reply rates**
  ([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
- **Tone control.** You paste three emails you love. The compose layer
  matches that voice. Your voice, not generic AI copy. Every approval
  trains the model toward your style over time
  ([Amplemarket, 2026](https://www.amplemarket.com/blog/best-ai-sales-agents)).

The opportunity is concentrated. Only **5% of senders personalize every
email** ([Mailshake, 2025](https://mailshake.com/blog/the-state-of-cold-email-2025/)),
and the senders who do see **2–3x better results**
([Mailshake, 2025](https://mailshake.com/blog/the-state-of-cold-email-2025/)).
An agent is the only practical way to join that 5% at scale. That is the
whole opportunity.

Advanced personalization (specific, signal-driven references) lifts
replies to **18% versus about 9% for generic templates** ([Infraforge
via Martal, 2026](https://martal.ca/b2b-cold-email-statistics-lb/)).

**Acceptance gate for 2.2:** brief coverage is above 90% of sends, and a
human approved the pattern before it sent at scale. If brief coverage
drops below 90%, the "specific" lines are placeholders, the
personalization is fake, and prospects can smell it.

### 2.3 Orchestration, deliverability, and guardrails

Delivery is the plumbing, and the plumbing is where campaigns quietly
die. The orchestrator handles cadence, warmup, domain rotation, and
sending caps. None of that is optional.

| Guardrail | Rule | Why |
|---|---|---|
| Dedicated sending domain | Separate from your primary domain | Your main domain's reputation stays clean |
| SPF / DKIM / DMARC | All three records configured | Authentication and deliverability |
| Warmup | Ramps 2+ weeks before first send | Reputation before volume |
| Send cap | 25–50 emails/day per domain to start | Don't trip spam filters |
| Scaling | +10–20% per week | Only while delivery stays above 97% |
| Bounces + unsubscribes | Removed instantly and automatically | ISP trust and legal compliance |
| Domain rotation | At scale | Spread volume, isolate failures |

**The hard cap does not move just because an agent makes sending easy.**
Keep send volume at **25–50 emails per day per domain** during a
controlled launch, scaling 10–20% per week while watching deliverability
([Autobound, 2026: vendor source](https://www.autobound.ai/blog/ai-sdr-tools-guide)).
A fresh domain you burn in a week because "the AI makes it easy" is a
domain you lose forever.

**The delivery gate:** if delivery rate dips below 97%, the use
pauses (not slows, pauses) until the cause is found
([Guardrails & Measurement](../agentic/guardrails-and-measurement)).

The sender model matters as much as the records. On shared sending
infrastructure your volume poisons your reputation. One documented
customer ran 30,000 emails a month on shared infrastructure, watched
reply rates fall from 6% to under 2% over six weeks, and recovered to a
stable level in two weeks after moving to dedicated infrastructure
([Smartlead, via the Agentic Stack, 2026](https://www.smartlead.ai/blog/ai-agents-for-outbound-sales)).
Deliverability is part of the architecture, not a vendor detail.

Compliance never delegates. CAN-SPAM, GDPR, and CCPA require opt-outs
honored instantly, a sender identified, and a physical address present.
An agent does not get a pass on any of them
([Guardrails & Measurement](../agentic/guardrails-and-measurement)).

**Acceptance gate for 2.3:** the domain is dedicated and warmed 2+ weeks,
SPF/DKIM/DMARC pass, the send cap is set, delivery holds above 97%, and
unsubscribe handling is automatic. Send nothing until all are true.

### 2.4 Triage and time-to-first-response

This is the agentic win that pays for the whole use. The bottleneck
in outbound has never been sending. It is the thinking per row and the
speed of reply handling.

Modern reply agents classify intent and draft a response **in under 5
minutes** ([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)),
then route by intent:

| Incoming reply | Agent action | Human action |
|---|---|---|
| "Interested, let's talk" | Route and alert immediately | Book the meeting. 15-minute SLA |
| "What does it cost?" | Draft an answer from an approved FAQ | Approve and send |
| "Not right now" | Tag nurture, schedule a follow-up | None. Automated, respects unsubscribe |
| "Unsubscribe" | Remove instantly, honor it | None. Never re-contact |

**The metric that matters is time-to-first-response.** Manual teams die
on this. A hot reply (interested, budget, clear need) must be handled
in **under 15 minutes**. The gap between a human checking the inbox
twice a day and an agent triaging in minutes is the single biggest
lever most teams leave on the table ([Instantly,
2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).

Every reply routes to a campaign and a message variant. Every hot reply
has a human in the path before it sends. The 15-minute SLA becomes
automatic because the agent drafts instantly and the human approves.

**Acceptance gate for 2.4:** hot replies are drafted and surfaced within
5 minutes of arrival, every hot reply is human-approved before send, and
the 15-minute response window holds. If replies pile up with no SLA, the
loop is dying quietly.

---

## Stage 3: Guard the quality bar (use-health metrics)

The funnel metrics from [Outbound from Zero](../playbooks/outbound-from-zero)
remain the scoreboard, and they hold with an agent in the loop.
AI-personalized campaigns typically land **3–8% reply rates**, with 5%
as the baseline to beat ([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
Add the use-health metrics on top:

| Metric | Healthy range | What it tells you |
|---|---|---|
| Brief coverage | >90% of sends have a research brief | Personalization is genuine, not templated |
| Human approval rate | Declining toward 20% | Trust is building in the compose layer |
| Triage accuracy | >95% correct routing | The loop won't bury hot leads |
| Time-to-first-response | Under 15 minutes for hot | The loop converts replies into meetings |
| Override rate | Under 5% | The use isn't saying things you'd veto |

**Acceptance gate for Stage 3:** triage accuracy above 95%, override
rate under 5%, hot replies answered inside 15 minutes, and brief
coverage above 90%. If any slips, the loop is scaling garbage. Shrink
it. The answer to a slipping gate is never more agents.

Track meetings booked and pipeline generated, **not emails sent**. Emails
sent is a vanity metric. Meetings are revenue
([Autobound, 2026: vendor source](https://www.autobound.ai/blog/ai-sdr-tools-guide)).

**Cost per meeting booked** is the killer metric, before and after the
use. If agents do not improve it, they are a tax
([Guardrails & Measurement](../agentic/guardrails-and-measurement)).

---

## SOP and prompts

### SOP: who does what, who approves

| Motion step | Agent does | Human approves |
|---|---|---|
| List build | Sources, dedupes, enriches rows from the data layer. Scores ICP fit | Final list before any send |
| Personalization | Drafts a per-row reason-to-reach from a research brief | The pattern, not every keystroke |
| Sequencing | Handles send-time, warmup, domain rotation, caps | Sending policy |
| Reply triage | Classifies intent, drafts responses in under 5 minutes | Hot replies. The 15-minute SLA is automatic |

### Prompt 1: list generation

```text
You are building a cold-outbound list for {ICP} companies in the
{segment} band using {data source}. For each account, return a row
with: company, ICP-fit score (1–5), primary contact first name,
verified email, role, and a one-line reason-to-reach grounded in a
live signal (job change, funding, hiring surge, tech-stack change, or
competitive displacement). Skip any row with no reason-to-reach: the
gate is "no reason, no row." Return only rows that pass the gate.
```

### Prompt 2: reply triage

```text
You are triaging cold-outbound replies for {campaign}. For each reply,
classify intent as one of: hot (wants a meeting, has budget, clear
need), warm (asking questions, evaluating), cold (not interested, no
budget, wrong timing), or noise (out of office, unsubscribe,
auto-reply). Return a response draft for hot and warm replies, grounded
in the prospect's own words, with one ask and no more than 90 words.
Flag any reply that mentions a competitor, a budget number, or a
decision committee as "needs human review" before sending. Hot replies
must be drafted and surfaced within 5 minutes of arrival so a human can
approve and send inside the 15-minute response window. Track every
classified reply to the campaign and the message variant it answered.
```

### Prompt 3: compose with your voice

```text
Write a cold-outbound first email for {contact} at {company} using the
attached research brief and these tone exemplars (my three best past
emails). One ask, under 90 words, value first, written like a human.
Open with a specific observation tied to the brief's signal. Never
invent a fact that is not in the brief. Give me five variants I can
approve or reject. Every approval teaches you my voice.
```

**The one rule that never changes across all three prompts: the gate
stays, the execution layer changes.** Humans keep judgment and
approval. Agents remove the thinking bottleneck at volume.

---

## Handoff (unchanged, still the failure point)

Agents do not fix a broken handoff. They make it faster. If you do not
have a meeting standard, source tracking, and a 2-week debrief rhythm,
automation just fills the funnel faster with unqualified meetings.

1. **Define the meeting standard.** Write down who counts as a
   qualified meeting. If you cannot, "meetings booked" is meaningless.
2. **Track the source.** Every meeting traces to a campaign. No source,
   no scale.
3. **Debrief every 2 weeks.** What message won, what list segment
   converted, what objection killed the deal.
4. **Feed the win back into the list.** Your best customers become your
   new look-alike list. The motion is a loop.

**Acceptance gate for handoff:** the meeting standard is written, every
meeting traces to a campaign, and the 2-week debrief rhythm exists.

---

## Worked example: one agentic campaign end to end

A representative build, step by step, so you can see the whole thing
hold together. Names and figures are illustrative but plausible.

**Company.** A $4M ARR SaaS in construction-project management, no
outbound engine. **ICP.** Construction GCs and subs with 20–200
employees tracking projects in spreadsheets. **ACV.** ~$12k. **Team.**
One SDR plus an agent use.

1. **Prove the message.** Sent to 100 perfect-fit rows by hand, a
   four-email sequence under 90 words each. At 300+ sends the reply rate
   was **4.1%**, above the **3.43%** cold-email average ([Woodpecker,
   2026](https://woodpecker.co/blog/cold-email-statistics/)). Delivery
   held at 98%, above the 97% gate. Positive-reply rate ran about 35%,
   above the 30% bar ([SalesHive, 2025](https://saleshive.com/blog/b2b-cold-email-statistics/)).
   The winning variant was kept. ✓
2. **Automate the list.** The data layer sourced and enriched rows for
   the remaining 400 prospects, monitoring hiring surges and funding
   rounds. Each row got a reason-to-reach. The SDR scored fit and cut
   rows that lacked a signal. Brief coverage ran above 90%. ✓
3. **Automate compose and orchestration.** The compose layer drafted
   per-row emails from the research briefs in the approved voice. A
   dedicated sending domain with SPF/DKIM/DMARC passing, two weeks of
   warmup, capped at 30 sends/day to start. ✓
4. **Run triage.** Hot replies surfaced within 5 minutes and were
   approved and answered inside the 15-minute window. Price questions
   were answered from an approved FAQ. Unsubscribes were removed
   instantly. Triage accuracy ran above 95%, override rate under 5%. ✓
5. **Measure.** Meetings booked landed at **3–4 per 1,000 sends**,
   inside the healthy 3–10 range ([Instantly,
   2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
   The funnel held: delivery above 97%, reply rate above the
   single-channel average, positive-reply rate above 30%. ✓
6. **Handoff.** The meeting standard was written ("a GC with the problem
   and budget, scheduling a demo"). Every meeting traced to a campaign.
   The 2-week debrief fed wins back into a new look-alike list. ✓

**Result within ~8 weeks.** Roughly 15–20 qualified meetings from ~2,000
rows in motion, at a fraction of the manual headcount. Nothing burned,
nothing scaled before it was proven, and the domain stayed healthy.

---

## Failure modes (agentic edition)

- **Scaling a broken message.** The use sends 10x faster, so a weak
  offer dies 10x faster. Prove the message first. This is the number one
  killer, and it is why 50–70% of AI SDR deployments churn ([UserGems
  via Autobound, 2026](https://www.autobound.ai/blog/ai-sdr-tools-guide)).
- **Buying "replace your SDRs."** Autonomous agents degrade quality at
  scale, and hybrid teams out-produce them 2.8x on pipeline ([Autobound,
  2026](https://www.autobound.ai/blog/ai-sdr-tools-guide)). Augment, do
  not replace.
- **Fake personalization.** Brief coverage under 90% means the
  "specific" lines are placeholders. Prospects can smell it. If you
  cannot beat a 5% reply rate on personalization, you are sending generic
  mail and paying an agent to say so.
- **No triage owner.** Replies hit an inbox with no SLA and the loop dies
  quietly. The 15-minute response window is the whole point.
- **Trusting the approval slide too early.** Skipping human approval on a
  "proven pattern" before hundreds of replies prove it. Slide once, the
  model learns a bad habit, and it scales.
- **Domain hygiene skipped.** Agents make it easy to send more, faster,
  and burn a domain in days instead of weeks. 25–50 sends/day per domain,
  ramp 10–20% a week, watch delivery above 97%.
- **Measuring sends.** Pipeline and meetings are the score. Emails sent
  is vanity.
- **Ignoring the sender model.** Volume on shared infrastructure poisons
  the domain. One customer watched reply rates fall from 6% to under 2%
  over six weeks before moving to dedicated infrastructure ([Smartlead,
  via the Agentic Stack, 2026](https://www.smartlead.ai/blog/ai-agents-for-outbound-sales)).
- **Chasing full autonomy.** Hybrid setups run **8–15% reply rates versus
  1–3% for fully autonomous systems at scale** ([Smartlead, 2026:
  vendor source](https://www.smartlead.ai/blog/ai-agents-for-outbound-sales)).
  Chase autonomy in the prep layers: data, research, compose. Keep a
  human on anything that goes to a named person and on anything a
  prospect says back.

---

## Decision tree

```
Prove the message ── 300+ sends per variant, positive-reply signal? ── no ──▶ stay manual
  │ yes
Automate use ── brief coverage >90%? ── no ──▶ fix the research layer
  │ yes
Run triage ── incoming "interested"? ── yes ──▶ alert + book (15-min SLA)
  │ no
  ├── "what does it cost?" ──▶ agent drafts from approved FAQ ──▶ you approve + send
  ├── "not right now" ──▶ tag nurture, schedule follow-up
  └── "unsubscribe" ──▶ remove instantly, honor it. Never re-contact
Measure use health ── triage >95% & override under 5% & delivery >97%? ── no ──▶ shrink it
  │ yes
Scale + handoff (unchanged: automation doesn't fix a broken handoff)
```

---

## Autonomy placement per workflow

From [Agent vs Human
Workflows](../agentic/agent-vs-human-workflows), based on the four-stage
autonomy ladder: Draft, Recommend, Execute with approval, Autonomous
([Apollo, 2026](https://www.apollo.io/insights/how-do-revops-leaders-decide-which-gtm-workflows-are-safe-to-automate-with-ai-agents)):

| Workflow | Autonomy stage | Guardrail |
|---|---|---|
| Contact enrichment | Autonomous | Data-source audit, field-level permissions |
| Meeting scheduling | Autonomous | Calendar access scoped to the rep only |
| Lead scoring | Recommend | Model transparency, override log |
| Lead routing | Execute with approval | CRM-write gate, exception queue |
| Outbound email drafting | Draft | Rep review before any send |
| Pricing approvals | Draft / Recommend | Finance sign-off, no autonomous send |

**The rule to carry in:** automate low-blast-radius, reversible,
high-volume work. Keep a human at every customer-facing or financial
gate. Start narrow, prove the control model, then scale. Stage 4 is
earned by the control model, not by the model's cleverness.

---

## Further reading

- [Agentic Outbound](../agentic/agentic-outbound): the execution-layer
  source for the augment-don't-replace case and the 2.8x and 15-versus-25%
  numbers.
- [Outbound from Zero](../playbooks/outbound-from-zero): the manual
  playbook this harness accelerates, with the full copy and
  deliverability setup.
- [Agentic Stack](../agentic/agentic-stack): the five-layer architecture
  this flow runs on.
- [Agent vs Human Workflows](../agentic/agent-vs-human-workflows): the
  autonomy ladder and human-in-the-loop controls.
- [Guardrails & Measurement](../agentic/guardrails-and-measurement):
  the quality bars and when to turn the use off.
- [Outbound Response Rate Benchmarks](../data/outbound-response-rates):
  the numbers this flow is measured against.
- [Outbound channel](../channels/outbound): when outbound is the right
  call before you commit budget.