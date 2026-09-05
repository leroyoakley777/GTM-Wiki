---
sidebar_position: 1
title: Outbound - the Runnable Flow
description: The executable outbound motion as a sequence, with the artifact at every step, throughput math on named bases, a worked run, objections, and the agentic SOP.
last_updated: 2026-09-05
status: active
tags: [outbound, flow, cold-email, sdr, sequence, throughput, agentic]
domain: flows
parent: flows/index
---

# Outbound - the Runnable Flow

This page is the executable view of outbound. It lays out the motion as
a sequence an operator runs top to bottom, with a defined artifact and a
hard acceptance gate at every step.

The [Outbound from Zero playbook](/docs/playbooks/outbound-from-zero)
states the why: the principles, the reasoning, the deliverability setup
in full, the budget argument for when to invest in AI execution. This
page states the how: the ordered steps, the artifact each step must
produce, the branch points where a miss sends you sideways, and the
arithmetic that turns volume into meetings. Read the [Outbound
channel](/docs/channels/outbound) page before you start, to confirm
this motion is the right call.

Two rules bind every gate in this flow.

Do not advance on a miss. Each gate is a hard stop until it passes.
Skip a gate and the next step costs more.

Every number carries a named base and an as-of date. Sources define
quote differently and sample mix swings numbers more than any tactic.
Treat the benchmarks as directional, with named bases, not as exact
targets.

---

## Motion at a glance

Do not advance on a miss. Each gate is a hard stop until it passes.
Skip a gate and the next step costs more.

Every number carries a named base and an as-of date. Sources define
quote differently and sample mix swings numbers more than any tactic.
Treat the benchmarks as directional, with named bases, not as exact
targets.

Read the companion pages before you start. The [Outbound
channel](/docs/channels/outbound) page tells you when this motion is the
right call. [Agentic Outbound](/docs/agentic/agentic-outbound) runs the
same flow with an agent use on the execution layer.

---

## Motion at a glance

Outbound is six steps run in order. Each step emits one artifact that
feeds the next.

| # | Step | Artifact you must have before advancing |
|---|---|---|
| 0 | Decision gate | A one-line ICP plus an ACV figure, written down |
| 1 | List build | A scored list where every row has a reason-to-reach |
| 2 | Channel and tooling | A sending domain with SPF, DKIM, DMARC passing, warmed and capped |
| 3 | Sequence | A multi-touch sequence, human-approved, under 90 words per email |
| 4 | Run and measure | A funnel readout at 300+ sends per variant, gated on delivery |
| 5 | Handoff | A written meeting standard, every meeting traced to a campaign |

The sequence below follows the same path as the playbook: list, signal,
sequence, handoff. It is rendered as the decisions an operator makes in
a live run. The decision tree at the end condenses where those
decisions branch.

---

## Step 0 - Decision gate

Outbound is a surgical instrument, chosen deliberately, not as a
default. It is the right motion only when all four conditions hold.

Tight ICP. You can name the buyer, and the total addressable market is
small enough to bound. If you cannot name the buyer, any list you build
is spray.

ACV roughly $5k and above. The motion has to pay for the human effort. A
single SDR runs about $139,120/year fully loaded [39]. If the average
deal clears well under $5k ACV, the math does not work and you should
stop here.

Inbound or content will not fill the pipe in your time. If inbound alone
closes the gap, outbound is wasted energy.

You have budget for tooling and a sender domain. Cold email needs a
dedicated domain, warmup, and a sending tool. Skipping that line is how
you burn the domain in a week.

If any of the four is false, route to the [Channels
Bullseye](/docs/foundations/gtm-channels-bullseye) and pick the channel
that deserves your energy. Running outbound with a fuzzy ICP wastes
budget. Fix the ICP first.

**Artifact:** a written one-line ICP and an ACV figure. If you cannot
write both, you stop here. No ICP, no outbound.

---

## Step 1 - List build

The list is the asset. A 500-row list that matches the ICP beats a
50,000-row spray every time. Every row starts with a company and a
problem, not a persona.

### Enrichment, in layers

Do not enrich in one pass. Build the row through four layers, in this
order.

1. **Firmographics.** Company, size band, segment, geography. This alone
   is never enough.
2. **Tech stack.** What the company runs. Tells you whether your product
   fits without asking.
3. **Intent signal.** The live trigger: a job change, a funding round, a
   hiring surge, a tech-stack change, a competitive displacement. This
   is the layer that makes a row reachable.
4. **The one human.** The problem-owner, by first name, with a verified
   email.

### Reason-to-reach, per row

Every row needs a reason-to-reach: a trigger, a change, a gap that says
why this company now. If you cannot write one sentence about why, the row
does not belong on the list.

**Gate: no reason, no row.** If you have 500 rows and 300 lack a
reason-to-reach, you have a 300-row list plus 200 spray rows. Cut the
300.

### Tiering

Split the list into two tiers.

Perfect-fit tier, roughly 20% of the list. These rows get personal
research and custom copy. This tier is where you prove the message.

Templated tier, the other roughly 80%. These rows get the templated
value line with a signal-specific hook.

### Row template

Every row in your sheet carries exactly these fields. This worksheet is
the acceptance gate made concrete.

| Field | Required | What it forces |
|---|---|---|
| Company name | yes | The entity, not the persona |
| ICP fit score (1-5) | yes | Your scored judgment, not a tool's |
| Primary contact first name | yes | A human, not "hello" |
| Verified email | yes | Checked, not guessed |
| Role | yes | The problem-owner, not just a title |
| Reason-to-reach (one line) | yes | The trigger, the change, the gap |
| Tier (perfect-fit / templated) | yes | Decides the copy path |
| Signal source | yes | Where the trigger came from, so you can trust it |

**Gate:** every row has a first name, a verified email, and a one-line
reason-to-reach. The list is not done until a second set of eyes spots
no empty reason-to-reach column.

---

## Step 2 - Channel and tooling

Cold email is the primary channel. LinkedIn and phone are amplifiers. The
channel split:

| Channel | Best for | Frequency | Role |
|---|---|---|---|
| Cold email | Scale plus written proof | Primary | The workhorse |
| LinkedIn (personal + Sales Nav) | Warmth and trust | Amplifier | Touch 2-3 in the sequence |
| Phone | High-ACV, hard-to-reach | Last resort | High-touch ACV only |

One stack that works end to end, layer by layer:

| Layer | Tool in this guide | What it does |
|---|---|---|
| Data + enrichment | Clay with Apollo as a data source | Sources rows, enriches firmographics to tech stack to intent, builds the reason-to-reach from signals |
| Intent / signals | Apollo | Provides the trigger events that let you personalize |
| Sending + deliverability | Smartlead (or Instantly) | Dedicated sending infra: domains, warmup, rotation, sending caps |
| Sequencing | The sender's native sequence engine | Runs the cadence, applies sending caps, tracks opens and replies |
| Meeting booking | Calendly (or the sender's native) | Turns a positive reply into a booked meeting without back-and-forth |

### Deliverability, before the first send

Domain hygiene is non-negotiable. Every sending domain needs three DNS
records passing before a single email goes out.

| Record | Type | What it does | Failure if missing |
|---|---|---|---|
| SPF | TXT | Lists which servers may send for your domain | Emails flagged as spoofed, worse deliverability |
| DKIM | TXT | Signs each email so receivers can verify it is from you | Emails land in spam or are rejected |
| DMARC | TXT | Tells receivers what to do with mail that fails SPF/DKIM | Legitimate mail goes to spam. Attackers can spoof you |

Ask your sender tool for the exact per-domain values. The shape: SPF
and DKIM authenticate, DMARC tells receivers what to do when
authentication fails.

### Warmup and caps

Never start a fresh domain at full volume. Ramp it.

| Week | Sends / domain / day | Note |
|---|---|---|
| Week 1 (pre-launch) | 10-20 | Warmup tool to seed inboxes, establish reputation |
| Week 2 (pre-launch) | 20-40 | Ramp while you finish the list |
| Launch week | 25-50 | Controlled launch cap |
| Each week after | +10-20% | Only while delivery stays above 97% |

Start a fresh domain with 2+ weeks of warmup before the first send, and
hold a hard cap of 25-50 emails/day per domain during launch, scaling
10-20% per week while delivery holds [17]. A burned domain is lost
forever. You do not get to un-burn it.

**Gate:** SPF, DKIM, and DMARC all pass, warmup has run 2+ weeks, and
the sending cap is configured. Send nothing until all three are true.

---

## Step 3 - Sequence

The sequence is a conversation opened in writing. Keep each email in
the 50-125 word range. That length earns roughly 50% higher reply rates
than longer formats [40]. One ask per email. Value first. Write like a
human.

The four emails below are the artifact this step must produce. They are
templates with placeholders: the blank fields are what the signal, list,
and ICP work from the earlier steps fills in. Every email stays under 90
words and makes exactly one ask.

**Email 1 - the reason-to-reach plus one observation (no pitch).**

```text
Subject: quick question re: {their_signal}

Hi {first},

Saw {company} just {hired a VP of {segment} / announced a {funding}
round / rolled out {tech} on {stack}}. Given that change, I wanted to
ask: is {specific thing you noticed} on your radar right now?

{One line of value: a concrete observation relevant to their
situation, not a pitch.}

Worth a 10-minute look?

{Your first name}
```

**Email 2 (day 3-4) - a proof point or resource relevant to their
situation.**

```text
Subject: re: {their_signal}: one thing to read

Hi {first},

Circling back. On the {specific change} front, this resource has been
useful for teams running {same motion}: {link}.

The short version: {one-line takeaway}. Figured it might save you the
digging.

If it's useful and you'd like to compare notes, happy to. Either way,
good luck with {their_signal}.

{Your first name}
```

**Email 3 (day 7-8) - a different angle, usually social proof or a
question.**

```text
Subject: {first}, one quick question

Hi {first},

Not chasing, just curious. Teams in {segment} that took {the same
action} typically see {one concrete outcome} within {timeframe}.

Is that the kind of thing you're weighing, or is {their_signal}
pointing somewhere else?

{Your first name}
```

**Breakup (day 12-14) - an honest stop.**

```text
Subject: closing the loop

Hi {first},

I'll close this out rather than clutter your inbox. If the timing
gets better ({specific trigger to watch for}), reply and we'll pick
it up.

Best,
{Your first name}
```

The cadence that runs these, and the branch points between them:

| Day | Touch | Channel | Content | Ask |
|---|---|---|---|---|
| 0 | Email 1 | Email | Email | Reason-to-reach plus one observation | Reply or 10-min look |
| 3-4 | Email 2 | Email | Proof point / resource | Read it, compare notes |
| 5 | LinkedIn | LinkedIn | Follow plus short comment on something they posted | None - warmth only |
| 7-8 | Email 3 | Email | Question | Answer one question |
| 9-10 | LinkedIn | LinkedIn | DM referencing Email 2's resource | Reply |
| 12-14 | Breakup | Email | Honest stop | Reply if timing improves |

The rules that make it run:

Under 90 words per email. The reader decides in 3 seconds.

One ask per email. Reply, book a call, or answer a question. Never both.

Value first. The email should be useful even if they never reply.

A specific CTA beats a generic one. "Open to a 15-minute chat next
week about the hiring-surge problem you mentioned" outperforms "let's
talk" [40].

**Gate:** the sequence is written, every email under 90 words, one ask
each, and at least one variant ready to test. Do not automate or scale
it yet. Prove it on a small list first.

---

## Step 4 - Run and measure

This is where the flow earns its keep. Run the sequence on the
perfect-fit tier first, collect the funnel readout, and gate every
scaling decision on a proven message.

### Funnel, with named bases

| Metric | Healthy range | Source (as of) | What it tells you |
|---|---|---|---|
| Delivery rate | above 97% | Instantly, 2025 [17] | Domain health plus list hygiene |
| Open rate (cold) | 16.5% avg | OptifAI, 2026 [5] | Subject line plus sender trust |
| Reply rate (cold email, avg) | 3.43% | Woodpecker, 2026 [2] | Message relevance |
| Reply rate (cold email, good / excellent) | 5-10% / 10%+ | Woodpecker, 2026 [2] | Message relevance |
| Reply rate (blended B2B) | 5.8%, down from 6.8% in 2023 | SalesHive, 2025 [1] | Single-channel saturation trend |
| Reply rate (B2B SaaS) | 3-8% | SalesHive, 2025 [1] | SaaS-specific baseline |
| Positive reply rate | above 30% of replies | SalesHive, 2025 [1] | ICP fit: replies worth pursuing |
| Cold email to deal | ~0.2%, about 1 deal per 500 emails | Focus Digital (via Martal), 2026 [3] | Replies convert to deals at ~0.2% |
| Meetings booked / 1,000 sends | 3-10 | Instantly, 2025 [17] | Overall motion health |
| Cold call connect rate | 2-3%, top SDRs 5-8% | SalesGenie, 2026 [14] | Phone as amplifier, not main |

Read the full benchmark page for the picture behind these numbers: the
[Outbound Response Rates](/docs/data/outbound-response-rates) page. Note
the caveat again: sources define quote differently, and a reply rate of
3.43% is normal, not a failure of the copy. Chase reply rate through
personalization and touch variety, not by sending more of the same.

### Throughput math, on a named base

This is the arithmetic that turns a numbers game into a plan. Start
with a named base of 1,000 sends and walk the funnel.

| Stage | Rate (named base) | 1,000 sends |
|---|---|---|
| Delivery | 97%+ (Instantly, 2025 [17]) | ~970 delivered |
| Open | 16.5% cold (OptifAI [5]) | ~160 opens |
| Reply | 3.43% avg (Woodpecker, 2026 [2]) | ~33 replies |
| Positive reply | 30% of replies (SalesHive, 2025 [1]) | ~10 positive |
| Meetings booked | 3-10 per 1,000 sends (Instantly, 2025 [17]) | 3-10 meetings |

Scale to a 500-row, ICP-matched list, the playbook's base:

| Stage | Rate (named base) | 500 rows |
|---|---|---|
| Delivery | 97%+ (Instantly, 2025 [17]) | ~485 delivered |
| Reply | 3.43% avg (Woodpecker, 2026 [2]) | ~17 replies |
| Positive reply | 30% of replies (SalesHive, 2025 [1]) | ~5 positive |
| Meetings booked | 3-10 per 1,000 sends (Instantly, 2025 [17]) | ~2-5 meetings |

A 500-row list produces roughly 2-5 booked meetings. That is the
honest number. To land a target of 20 meetings/month, work the
meetings-per-1,000 base: at 10 per 1,000 you need about 2,000 rows in
motion each month. At 3 per 1,000 you need about 6,700. Plan for
2,000-6,700 quality rows in motion per month and build a repeatable
list-generation loop to feed it. The list is the only stage you can
scale without raising the reply rate.

The lever that changes these numbers is channel strategy. Touch variety
and better personalization lift reply rates, not raw volume. Top teams
running multi-channel sequences (email plus LinkedIn plus call) report
15-25% reply rates, several times the 3.43% single-channel baseline
[16]. The flow's answer to a low reply rate is touch variety and better
personalization, never more of the same email.

**Gate:** you have 300+ sends per variant and a positive-reply signal
worth scaling, with delivery above 97%. If delivery is below 97%, fix
the domain before adding volume. Small samples produce noise, and noise
produces confident wrong answers. Do not optimize a message under 300
sends per variant.

---

## Step 5 - Handoff

Handoff is the step where outbound deals are lost most often. Fix it
before you scale.

Define the meeting standard. Write down who counts as a qualified
meeting. If you cannot, "meetings booked" is meaningless.

Track the source. Every meeting must trace back to a campaign. No
source, no scale.

Debrief every 2 weeks. What message won, what list segment converted,
what objection killed the deal.

Feed the win back into the list. Your best customers become your new
look-alike list. The motion is a loop, not a pipeline with an end.

**Gate:** the meeting standard is written, every meeting traces to a
campaign, and the 2-week debrief rhythm exists. Skip this and you will
scale meetings nobody qualifies.

---

## Decision tree

Here is the flow as the branches an operator hits, in one diagram.

```
Is outbound the right motion? -- no --> Bullseye (pick another channel)
  | yes
Build the list -- row missing reason-to-reach? -- yes --> drop the row
  | no
Pick channel + tooling -- domain warmed, capped, SPF/DKIM/DMARC passing? -- no --> fix before any send
  | yes
Write the sequence -- variant human-approved, under 90 words? -- no --> approve before send
  | yes
Run on perfect-fit tier -- 300+ sends per variant, delivery above 97%? -- no --> keep manual, do not scale
  | yes
Scale + handoff -- meeting traced to campaign? -- no --> fix source tracking
  | yes
Loop: feed wins back into the list
```

Every branch that routes sideways is a gate failing. The flow does not
continue until the gate passes. The list gate removes spray, the approval
gate prevents bad messaging from being automated, and the proven-message
gate stops scaling before a message has earned it.

---

## Worked run - one full pass end to end

A representative run so you can watch the flow hold together. Names and
numbers are illustrative but plausible, and every rate carries the named
base from the tables above.

**Situation:** a $4M ARR SaaS in construction-project management. No
outbound engine. **ICP:** construction GCs and subs with 20-200
employees tracking projects in spreadsheets. **ACV:** roughly $12k.
**One SDR:** the founder's first hire.

1. **Step 0.** Tight ICP, $12k ACV (over the $5k floor), inbound thin.
   Four conditions hold. Write the one-line ICP and the ACV figure. Pass.
2. **Step 1.** Build a 500-row list via Clay plus Apollo: GCs and subs in
   that employee band. Enrich each row to a first name, a verified
   email, and a reason-to-reach (a project-manager hire, recent funding,
   an RFP, a public pain mention). Mark 100 rows perfect-fit. Two rows
   lack a reason-to-reach, so drop them. Pass at 498 rows.
3. **Step 2.** Buy a dedicated sending domain. Configure SPF, DKIM,
   DMARC: all three pass. Run 2 weeks of warmup. Cap sends at 30/day.
   Pass.
4. **Step 3.** Write the four-email sequence with the industry-specific
   reason-to-reach. Every email under 90 words, one ask each. One
   variant ready to test. Human-approved. Pass.
5. **Step 4.** Send to the 100 perfect-fit rows first. At 300+ sends the
   reply rate reads 4.1%: above the 3.43% average [2]. Delivery holds at
   98%. That lands 3-4 meetings per 1,000 sends, inside the healthy 3-10
   range [17]. Keep the winning variant, scale to the remaining roughly
   398 rows. Pass.
6. **Step 5.** Write the meeting standard: "a GC with the problem and
   budget, scheduling a demo." Tag every meeting to its campaign. Start
   the 2-week debrief. Feed the best customers back into a new
   look-alike list. Pass.

**Result:** within about 8 weeks, roughly 15-20 qualified meetings
from about 2,000 rows in motion: a working loop on a repeatable list
machine, the domain still healthy, nothing burned, nothing scaled before
it was proven. That is the whole flow executed once.

---

## Objections - replies, and how to answer them

The objection layer is where outbound wins. Answer the question, do not
pitch harder.

| Reply | What it means | How to answer |
|---|---|---|
| "Not interested" | Generic brush-off | Do not pitch again. Ask one diagnostic question, or tag nurture and move on. Never argue. |
| "What does it cost?" | They are evaluating | Give a range with a named base, ask about their situation in return. Do not dump a price list. |
| "We already use [competitor]" | They have a solution | Ask what is working and what is not. A competitor in place is an opportunity to compare, not a no. |
| "Send me info / a deck" | Soft yes, often a stall | Send the one-pager, then offer a 15-minute call to go through it. Convert the request to a meeting. |
| "Not right now, timing is bad" | Genuine or polite rejection | Ask what timing would look like. Tag nurture with a follow-up date. Respect it either way. |
| "We do not have budget" | Budget signal | Ask when budget opens. Offer the smallest possible next step. Do not discount preemptively. |

---

## Agentic SOP - the same flow with an agent on the execution layer

Outbound has the most proven agentic GTM application. The bottleneck
is the thinking per row, not the sending. The full treatment is in [Agentic
Outbound](/docs/agentic/agentic-outbound). Here is the flow's shape under
an agent use.

The win, with numbers: AI-augmented teams see 2.8x more pipeline than
teams attempting full replacement of their SDRs [16]. Signal-driven
personalization lifts reply rates to 15-25% versus the 3-5%
single-channel baseline [116]. Economics move too: an AI-augmented SDR
platform runs $12K-$60K/year and one AI-augmented rep handles 1,000+
contacts/day versus 50-80 manual, cutting cost-per-lead from $262 to $39,
an 85% reduction [46][47]. The point is not "buy AI instead of people."
It is that the economics scale with used execution, not raw volume.

### Who does what

The rule that never changes: the gate stays, the execution layer
changes. Humans keep judgment and approval. Agents remove the thinking
bottleneck at volume.

| Motion step | Agent does | Human approves |
|---|---|---|
| List build | Sources, dedupes, enriches rows from the data layer, scores ICP fit | Signs off on the final list before any send |
| Personalization | Drafts per-row reason-to-reach from a research brief | Approves the pattern, not every keystroke |
| Sequencing | Handles send-time, warmup, domain rotation, caps | Sets the sending policy |
| Reply triage | Classifies intent, drafts responses in under 5 minutes | Approves hot replies. The 15-minute SLA is automatic |

### One-prompt starter for list generation

Adapt this to your stack:

```
You are building a cold-outbound list for {ICP} companies in the
{segment} band using {data source}. For each account, return a row with:
company, ICP-fit score (1-5), primary contact first name, verified
email, role, and a one-line reason-to-reach grounded in a signal (job
change, funding, hiring surge, tech-stack change, or competitive
displacement). Skip any row with no reason-to-reach: the gate is "no
reason, no row." Return only rows that pass the gate.
```

### Three guardrails that keep it honest

From [Guardrails and measurement](/docs/agentic/guardrails-and-measurement):

Brief coverage above 90%. If most sends lack a research brief, the
personalization is fake, and buyers can smell it.

Human approval before scaling. Only automate a pattern after hundreds of
replies prove it. A weak message scaled by AI dies faster.

Never burn the domain. Agents make it easy to send more, faster. The
25-50/day per-domain cap still applies.

Track meetings and pipeline as your score, not emails sent. The
trailing signal is quota attainment. Only 27-30% of reps hit quota in
2024 [165], so most sellers are doing average work on a struggling
channel. Plan outbound as one part of a mixed motion.

---

## Variants by company stage and ACV

The flow is the same skeleton for every motion. The knobs differ by
company stage and deal size. This is how the six steps change when you
move between them.

### Seed-stage (under $1M ARR, sub-$5k ACV)

Step 0 bends the ACV rule. Sub-$5k ACV is normally below the floor, but
a founder-led motion has zero marginal labor cost. A single founder
sending to a tight 100-row list can make it work. Keep the list small and
the copy manual. Do not hire an SDR here.

Step 4 runs on a smaller sample. The 300+ sends per variant floor
assumes one motion. A seed team runs one variant on one list, so the
readout is slower and the "prove it" gate is what matters.

Step 5 is the founder's calendar. Handoff is a demo the founder takes.
The meeting standard is still written, because it decides which of the
few meetings get their time.

### Mid-market (roughly $1M-$30M ARR, $5k-$50k ACV)

This is where the flow as written runs unchanged. The $139,120/year SDR
cost [39] pays out, the list tiers cleanly, and the 500-row base produces
a measurable 2-5 meetings per month.

Step 2 needs a dedicated sender domain. At this scale a shared inbox
burns a domain. The 2+ week warmup and 25-50/day cap are
non-negotiable [17].

### Enterprise ($30M+ ARR, $50k+ ACV)

Step 1 moves from volume to account selection. The list is tens of
accounts, not thousands. Every row earns deep research, and the
reason-to-reach is a multi-touch account narrative, not one signal.

Step 3 stretches the sequence. Multi-stakeholder deals need touches aimed
at different roles. The champion, economic buyer, and technical
evaluator each get a distinct email path. The single four-email sequence
still opens, but it branches by stakeholder.

Step 4 expects a different funnel. At $50k+ ACV the reply rate floor is
lower and the deal rate is the score, not meetings booked. The
meetings-per-1,000-sends metric is a mid-market instrument.

The flow you run is always the same six gates in order. Only the knobs
change with the company you are selling into: list size, sample floor,
sequence branching, and the final score.

---

## Failure modes to run against

Check the flow against these at the end of any debrief.

Scaling volume before proving the message multiplies noise and burns a
domain.

Optimizing subject lines while the offer is broken. Polish on a dead
product.

Buying a list without reasons-to-reach. Cold spray with no
personalization gets no replies.

No handoff discipline. Meetings booked but nobody qualifies them,
nothing closes.

Skipping domain warmup. Deliverability dies, and the domain is burned
forever.

Treating a 3.43% reply rate as failure. It is the normal baseline [2].
Chase reply rate through personalization and touch variety, not by
sending more of the same.

Measuring sends instead of meetings. The score is pipeline, not volume.

---

## Further reading

[Outbound - the channel](/docs/channels/outbound): the channel
benchmarks and when this motion is the right call.

[Outbound from Zero playbook](/docs/playbooks/outbound-from-zero): the
rationale behind these gates, the full deliverability setup, the email
copy, and the budget argument.

[Outbound Response Rates](/docs/data/outbound-response-rates): the
numbers this flow is measured against, with caveats.

[Agentic Outbound](/docs/agentic/agentic-outbound): the same flow when
an agent runs the execution layer.

[ICP Definition](/docs/foundations/icp-definition): the foundation the
list hangs on.

---

## Sources

-[1] [SalesHive, B2B SaaS Cold Email Benchmarks 2025-2026](https://saleshive.com/blog/b2b-benchmarks-email-marketing-saas-you-need-know-2025): Blended B2B cold reply 5.8% (down from 6.8% in 2023); B2B SaaS 3-8%; positive reply above 30% of total replies.

-[2] [Woodpecker, Cold Email Statistics 2026](https://woodpecker.co/blog/cold-email-statistics/): Cold email reply average 3.43%; good/excellent 5-10%/10%+.

-[3] [Focus Digital, via Martal, B2B Cold Email Statistics 2026](https://martal.ca/b2b-cold-email-statistics-lb/): Cold email to deal roughly 0.2% (about 1 per 500 emails).

-[5] [OptifAI, GTM Metrics 2026](https://optifai.com/): Cold open rate 16.5% average; 50-70%+ healthy for qualified cold.

-[14] [SalesGenie, Cold Calling Benchmarks 2026](https://www.salesgenie.com/): Cold call connect rate 2-3%; top SDRs reach 5-8% meetings.

-[16] [Autobound, AI SDR Tools Guide 2026](https://www.autobound.ai/blog/ai-sdr-tools-guide): AI-augmented teams see 2.8x more pipeline than full-replacement SDR teams; multi-channel reply rates 15-25% across 100+ SaaS teams (vendor source).

-[17] [Instantly, 2025 Guide to AI Outbound Sales](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/): Dedicated sender domain requirements; 2+ weeks warmup before first send; 25-50 emails/day cap per domain during launch; 15-minute SLA for hot replies; meetings 3-10 per 1,000 sends.

-[39] [AiSDR, SDR vs AI Cost Analysis 2026](https://aisdr.com/blog/sdr-vs-ai-cost/): SDR approximately $139,120/year fully loaded (vendor source).

-[40] [Mailforge, via Martal, B2B Cold Email Statistics 2026](https://martal.ca/b2b-cold-email-statistics-lb/): 50-125 word emails earn roughly 50% higher reply rates than longer formats; specific CTAs outperform generic ones.

-[46] [SuperAGI, AI vs Traditional SDRs 2026](https://superagi.com/ai-vs-traditional-sdrs-a-comparative-analysis-of-pipeline-performance-and-cost-efficiency/): AI-augmented rep handles 1,000+ contacts/day versus 50-80 for a human; cost-per-lead drops from $262 to $39, an 85% reduction.

-[47] [MarketsandMarkets, AI SDR Market Analysis 2026](https://www.marketsandmarkets.com/AI-sales/ai-sdrs-vs-traditional-sdrs-who-wins): AI SDR cost-per-lead drops from $262 to $39, an 85% reduction (vendor source).

-[116] [Instantly, Signal-Based Personalization 2025-2026](https://instantly.ai/cold-email-benchmark-report-2026): Signal-based personalization reaches 15-25% reply rates versus 3-5% single-channel baseline.

-[165] [Belkins, B2B Sales Quota Report 2024](https://www.autobound.ai/blog/ai-sdr-tools-guide): 27-30% of B2B reps hit quota in 2024, down from historical norms (via Autobound, 2026).
