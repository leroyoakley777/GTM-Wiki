---
sidebar_position: 1
title: Outbound - the Runnable Flow
description: The executable outbound motion as a sequence - decision gate, list build, channel and tooling, sequence, run and measure, handoff - with the artifact at every step, the throughput math on named bases, a worked run, objections, and the agentic SOP.
last-updated: 2026-08-17
status: active
tags: [outbound, flow, cold-email, sdr, sequence, throughput, agentic]
domain: flows
parent: flows/index
---

# Outbound - the Runnable Flow

This page is the executable view of outbound. It lays out the motion as
a sequence an operator runs top to bottom, with a defined artifact and a
hard acceptance gate at every step.

This is not the playbook. The [Outbound from Zero
playbook](../playbooks/outbound-from-zero) states the *what* - the
principles, the reasoning, the deliverability setup in full, the budget
argument for when to invest in AI execution. This flow states the *how
you run it*: the ordered steps, the artifact each step must produce
before you advance, the branch points where a miss sends you sideways,
and the arithmetic that tells you what volume buys what outcome.

Two rules govern the whole page.

- **Do not advance on a miss.** Each gate is a hard stop until it
  passes. Skip a gate and the next step gets more expensive, not faster.
- **Every number carries a named base and an "as of" date.** Sources
  define "reply" differently and sample mix swings numbers more than any
  tactic. Treat the benchmarks as directional, with named bases, not as
  exact targets.

Read the companion pages before you start: the [Outbound
channel](../channels/outbound) page tells you *when* this motion is the
right call. [Agentic Outbound](../agentic/agentic-outbound) runs the
same flow with an agent harness on the execution layer.

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

The sequence below is the same list to signal to sequence to handoff shape
the playbook documents, rendered as decisions an operator makes in a
live run. The decision tree at the end is where those decisions
condense.

---

## Step 0 - Decision gate

Outbound is a surgical instrument, chosen deliberately, not as a
default. It is the right motion only when all four conditions hold.

- **Tight ICP.** You can name the buyer, and the total addressable
  market is small enough to bound. If you cannot name the buyer, any
  list you build is spray.
- **ACV roughly $5k and above.** The motion has to pay for the human
  effort. A single SDR runs about **$139,120/year fully loaded**
  ([AiSDR cost analysis](https://aisdr.com/blog/sdr-vs-ai-cost/), 2026
  - vendor source). If the average deal clears well under $5k ACV, the
  math does not work and you should stop here.
- **Inbound or content will not fill the pipe in your time.** If
  inbound alone closes the gap, outbound is wasted energy.
- **You have budget for tooling and a sender domain.** Cold email needs
  a dedicated domain, warmup, and a sending tool. Skipping that line is
  how you burn the domain in a week.

If any of the four is false, route to the [Channels
Bullseye](../foundations/gtm-channels-bullseye) and pick the channel
that deserves your energy. Outbound against a fuzzy ICP is paying to
speed up a mistake.

**Artifact:** a written one-line ICP and an ACV figure. If you cannot
write both, you stop here. No ICP, no outbound.

---

## Step 1 - List build

The list is the asset, not the copy. A 500-row list that matches the ICP
beats a 50,000-row spray every time. Every row starts as a company with
a problem, not a persona.

### Enrichment, in layers

Do not enrich in one pass. Build the row through four layers, in this
order.

1. **Firmographics.** Company, size band, segment, geography. This
   alone is never enough.
2. **Tech stack.** What the company runs. Tells you whether your product
   fits without asking.
3. **Intent signal.** The live trigger - a job change, a funding round,
   a hiring surge, a tech-stack change, a competitive displacement.
   This is the layer that makes a row reachable.
4. **The one human.** The problem-owner, by first name, with a verified
   email.

### Reason-to-reach, per row

Every row needs a reason-to-reach: a trigger, a change, a gap that says
why *this* company *now*. If you cannot write one sentence about why,
the row does not belong on the list.

**Gate: no reason, no row.** If you have 500 rows and 300 lack a
reason-to-reach, you have a 300-row list plus 200 spray rows. Cut the
300.

### Tiering

Split the list into two tiers.

- **Perfect-fit tier, ~20% of the list.** These rows get personal
  research and custom copy. This tier is where you prove the message.
- **Templated tier, the other ~80%.** These rows get the templated
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

Cold email is the workhorse. LinkedIn and phone are amplifiers. The
channel split:

| Channel | Best for | Frequency | Role |
|---|---|---|---|
| Cold email | Scale plus written proof | Primary | The workhorse |
| LinkedIn (personal + Sales Nav) | Warmth and trust | Amplifier | Touch 2-3 in the sequence |
| Phone | High-ACV, hard-to-reach | Last resort | High-touch ACV only |

One stack that works end to end, layer by layer:

| Layer | Tool in this guide | What it does |
|---|---|---|
| Data + enrichment | **Clay** with Apollo as a data source | Sources rows, enriches firmographics to tech stack to intent, builds the reason-to-reach from signals |
| Intent / signals | **Apollo** | Provides the trigger events that let you personalize |
| Sending + deliverability | **Smartlead** (or Instantly) | Dedicated sending infra - domains, warmup, rotation, sending caps |
| Sequencing | The sender's native sequence engine | Runs the cadence, applies sending caps, tracks opens and replies |
| Meeting booking | **Calendly** (or the sender's native) | Turns a positive reply into a booked meeting without back-and-forth |

### Deliverability, before the first send

Domain hygiene is non-negotiable. Every sending domain needs three DNS
records passing before a single email goes out.

| Record | Type | What it does | Failure if missing |
|---|---|---|---|
| **SPF** | TXT | Lists which servers may send for your domain | Emails flagged as spoofed, worse deliverability |
| **DKIM** | TXT | Signs each email so receivers can verify it is from you | Emails land in spam or are rejected |
| **DMARC** | TXT | Tells receivers what to do with mail that fails SPF/DKIM | Legitimate mail goes to spam. Attackers can spoof you |

Ask your sender tool for the exact per-domain values - they generate
them. The shape: SPF and DKIM authenticate, DMARC tells receivers what
to do when authentication fails.

### Warmup and caps

Never start a fresh domain at full volume. Ramp it.

| Week | Sends / domain / day | Note |
|---|---|---|
| Week 1 (pre-launch) | 10-20 | Warmup tool to seed inboxes, establish reputation |
| Week 2 (pre-launch) | 20-40 | Ramp while you finish the list |
| Launch week | 25-50 | Controlled launch cap |
| Each week after | +10-20% | Only while delivery stays above 97% |

Start a fresh domain **2+ weeks of warmup** before the first send, and
hold a hard cap of **25-50 emails/day per domain** during launch,
scaling 10-20% per week while delivery holds
([Instantly, 2025 Guide to AI Outbound
Sales](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)). A
burned domain is lost forever - you do not get to un-burn it.

**Gate:** SPF, DKIM, and DMARC all pass, warmup has run 2+ weeks, and
the sending cap is configured. Send nothing until all three are true.

---

## Step 3 - Sequence

The sequence is a conversation opened in writing, not an essay. Keep
each email in the 50-125 word range - that length earns roughly **50%
higher reply rates** than longer formats
([Martal, via Mailforge/Instantly](https://martal.ca/b2b-cold-email-statistics-lb/),
2026). One ask per email. Value first. Write like a human.

The copy is in the playbook and you should paste it from there. What
this flow adds is the cadence and the branch points.

| Day | Touch | Channel | Content | Ask |
|---|---|---|---|---|
| 0 | Email 1 | Email | Reason-to-reach + one observation | Reply or 10-min look |
| 3-4 | Email 2 | Email | Proof point / resource | Read it, compare notes |
| 5 | LinkedIn | LinkedIn | Follow + short comment on something they posted | None - warmth only |
| 7-8 | Email 3 | Email | Different angle + question | Answer one question |
| 9-10 | LinkedIn | LinkedIn | DM referencing Email 2's resource | Reply |
| 12-14 | Breakup | Email | Honest stop | Reply if timing improves |

The rules that make it run:

- **Under 90 words per email.** The reader decides in 3 seconds.
- **One ask per email.** Reply, book a call, or answer a question.
  Never both.
- **Value first.** The email should be useful even if they never reply.
- **A specific CTA beats a generic one.** "Open to a 15-minute chat next
  week about *[specific issue]*" outperforms "let's talk"
  ([Martal](https://martal.ca/b2b-cold-email-statistics-lb/), 2026).

**Gate:** the sequence is written, every email under 90 words, one ask
each, and at least one variant ready to test. Do not automate or scale
it yet - prove it on a small list first.

---

## Step 4 - Run and measure

This is where the flow earns its keep. You run the sequence on the
perfect-fit tier first, collect the funnel readout, and gate every
scaling decision on a proven message.

### Funnel, with named bases

| Metric | Healthy range | Source (as of) | What it tells you |
|---|---|---|---|
| Delivery rate | above 97% | [Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/) | Domain health + list hygiene |
| Open rate (cold) | 16.5% avg, 50-70% healthy for qualified cold | [OptifAI](https://optifai.com/) - 16.5% cold open baseline | Subject line + sender trust |
| Reply rate (cold email, avg) | **3.43%** | [Woodpecker, 2026](https://woodpecker.co/blog/cold-email-statistics/) | Message relevance |
| Reply rate (cold email, good / excellent) | **5-10%** / 10%+ | Woodpecker, 2026 | Message relevance |
| Reply rate (blended B2B) | **5.8%**, down from 6.8% in 2023 | [SalesHive, 2025](https://saleshive.com/) | Single-channel saturation trend |
| Reply rate (B2B SaaS) | **3-8%** | SalesHive, 2025 | SaaS-specific baseline |
| Positive reply rate | above 30% of replies | SalesHive, 2025 | ICP fit - replies worth pursuing |
| Cold email to deal | **~0.2%**, about 1 deal per 500 emails | [Focus Digital, via Martal, 2026](https://martal.ca/b2b-cold-email-statistics-lb/) | Response does not equal revenue |
| Meetings booked / 1,000 sends | **3-10** | [Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/) | Overall motion health |
| Cold call connect rate | 2-3%, top SDRs 5-8% | [SalesGenie, 2026](https://www.salesgenie.com/) | Phone as amplifier, not main |

Read the full benchmark page for the picture behind these numbers:
[Outbound Response Rates](../data/outbound-response-rates). Note the
caveat again: sources define "reply" differently, and a reply rate of
3.43% is normal, not a failure of the copy. Chase reply rate through
personalization and touch variety, not by sending more of the same.

### Throughput math, on a named base

This is the arithmetic that turns "a numbers game" into a plan. Start
with a named base of **1,000 sends** and walk the funnel.

| Stage | Rate (named base) | 1,000 sends |
|---|---|---|
| Delivery | 97%+ (Instantly, 2025) | ~970 delivered |
| Open | 16.5% cold (OptifAI) | ~160 opens |
| Reply | 3.43% avg (Woodpecker, 2026) | ~33 replies |
| Positive reply | 30% of replies (SalesHive, 2025) | ~10 positive |
| Meetings booked | 3-10 per 1,000 sends (Instantly, 2025) | 3-10 meetings |

Now scale to your working list. On a **500-row, ICP-matched list** (the
playbook's base):

| Stage | Rate (named base) | 500 rows |
|---|---|---|
| Delivery | 97%+ (Instantly, 2025) | ~485 delivered |
| Reply | 3.43% avg (Woodpecker, 2026) | ~17 replies |
| Positive reply | 30% of replies (SalesHive, 2025) | ~5 positive |
| Meetings booked | 3-10 per 1,000 sends (Instantly, 2025) | ~2-5 meetings |

So a 500-row list produces roughly **2-5 booked meetings**. That is the
honest number. To land a target of **20 meetings/month**, work the
meetings-per-1,000 base: at 10 per 1,000 you need about 2,000 rows in
motion each month. At 3 per 1,000 you need about 6,700. Plan for
**2,000-6,700 quality rows in motion per month** and build a repeatable
list-generation loop to feed it. The list is the asset for a reason -
it is the only stage you can scale without raising the reply rate.

The one lever that changes these numbers is channel strategy, not
volume. Top teams running multi-channel sequences (email plus LinkedIn
plus call) report **15-25% reply rates**, several times the 3.43%
single-channel baseline ([Autobound, across 100+ SaaS
teams](https://www.autobound.ai/blog/ai-sdr-tools-guide), 2026). The
flow's answer to a low reply rate is touch variety and better
personalization, never more of the same email.

**Gate:** you have **300+ sends per variant** and a positive-reply
signal worth scaling, with delivery above 97%. If delivery is below 97%,
fix the domain before adding volume. Small samples produce noise, and
noise produces confident wrong answers. Do not optimize a message under
300 sends per variant.

---

## Step 5 - Handoff

Handoff is where outbound dies most often. Fix it before you scale.

1. **Define the meeting standard.** Write down who counts as a
   qualified meeting. If you cannot, "meetings booked" is meaningless.
2. **Track the source.** Every meeting must trace back to a campaign.
   No source, no scale.
3. **Debrief every 2 weeks.** What message won, what list segment
   converted, what objection killed the deal.
4. **Feed the win back into the list.** Your best customers become your
   new look-alike list. The motion is a loop, not a pipeline with an
   end.

**Gate:** the meeting standard is written, every meeting traces to a
campaign, and the 2-week debrief rhythm exists. Skip this and you will
scale meetings nobody qualifies.

---

## Decision tree

Here is the flow as the branches an operator hits, in one
diagram.

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
continue until the gate passes. This is the difference between a motion
that compounds and one that burns a domain: the list gate kills spray,
the approval gate keeps bad messaging from being automated, and the
proven-message gate stops you from scaling something that has not earned
scale.

---

## Worked run - one full pass end to end

A representative run so you can watch the flow hold together. Names and
numbers are illustrative but plausible, and every rate carries the named
base from the tables above.

**Situation:** a $4M ARR SaaS in construction-project management. No
outbound engine. **ICP:** construction GCs and subs with 20-200
employees tracking projects in spreadsheets. **ACV:** ~$12k. **One SDR:**
the founder's first hire.

1. **Step 0.** Tight ICP, $12k ACV (over the $5k floor), inbound thin.
   Four conditions hold. Write the one-line ICP and the ACV figure. Pass.
2. **Step 1.** Build a 500-row list via Clay + Apollo - GCs and subs in
   that employee band. Enrich each row to a first name, a verified
   email, and a reason-to-reach (a project-manager hire, recent funding,
   an RFP, a public pain mention). Mark 100 rows perfect-fit. Two rows
   lack a reason-to-reach, so drop them. Pass at 498 rows.
3. **Step 2.** Buy a dedicated sending domain. Configure SPF, DKIM,
   DMARC - all three pass. Run 2 weeks of warmup. Cap sends at 30/day.
   Pass.
4. **Step 3.** Write the four-email sequence with the industry-specific
   reason-to-reach. Every email under 90 words, one ask each. One
   variant ready to test. Human-approved. Pass.
5. **Step 4.** Send to the 100 perfect-fit rows first. At 300+ sends the
   reply rate reads **4.1%** - above the 3.43% average ([Woodpecker,
   2026](https://woodpecker.co/blog/cold-email-statistics/)). Delivery
   holds at 98%. That lands **3-4 meetings per 1,000 sends**, inside the
   healthy 3-10 range (Instantly, 2025). Keep the winning variant, scale
   to the remaining ~398 rows. Pass.
6. **Step 5.** Write the meeting standard ("a GC with the problem and
   budget, scheduling a demo"). Tag every meeting to its campaign. Start
   the 2-week debrief. Feed the best customers back into a new
   look-alike list. Pass.

**Result:** within about 8 weeks, roughly **15-20 qualified meetings
from ~2,000 rows in motion** - a working loop on a repeatable list
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
| "We already use [competitor]" | They have a solution | Ask what is working and what is not. A competitor in place is not a no - it is a comparison you get to have. |
| "Send me info / a deck" | Soft yes, often a stall | Send the one-pager, then offer a 15-minute call to go through it. Convert the request to a meeting. |
| "Not right now, timing is bad" | Genuine or polite rejection | Ask what timing would look like. Tag nurture with a follow-up date. Respect it either way. |
| "We do not have budget" | Budget signal | Ask when budget opens. Offer the smallest possible next step. Do not discount preemptively. |
| No reply at all | The default | That is the sequence's job - breakup email, then re-trigger on the next signal. |

**Time-to-first-response.** A hot reply must be handled in **under 15
minutes**. The gap between a human checking the inbox twice a day and an
agent triaging in minutes is the single biggest lever most teams leave
on the table ([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
This is exactly where the agentic layer pays for itself.

---

## Agentic SOP - the same flow with an agent on the execution layer

Outbound is where agentic GTM has the most proven leverage, because the
bottleneck has never been sending - it is the thinking per row. The full
treatment is [Agentic Outbound](../agentic/agentic-outbound). Here is
the flow's shape under an agent harness.

The win, with numbers: AI-augmented teams see **2.8x more pipeline** than
teams attempting full replacement of their SDRs
([Autobound](https://www.autobound.ai/blog/ai-sdr-tools-guide), 2026 -
vendor source). Signal-driven personalization lifts reply rates to
**15-25%** versus the 3-5% single-channel baseline
([Instantly, 2025](https://instantly.ai/blog/2025-guide-to-ai-outbound-sales/)).
Economics move too: an AI-augmented SDR platform runs **$12K-$60K/year**
and one AI-augmented rep handles **1,000+ contacts/day versus 50-80
manual**, cutting cost-per-lead from **$262 to $39**, an 85% reduction
([SuperAGI](https://superagi.com/ai-vs-traditional-sdrs-a-comparative-analysis-of-pipeline-performance-and-cost-efficiency/),
and [MarketsandMarkets](https://www.marketsandmarkets.com/AI-sales/ai-sdrs-vs-traditional-sdrs-who-wins),
both 2026 - vendor sources). The point is not "buy AI instead of
people." It is that the economics scale with leveraged execution, not
raw volume.

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
displacement). Skip any row with no reason-to-reach - the gate is "no
reason, no row." Return only rows that pass the gate.
```

### Three guardrails that keep it honest

From [Guardrails and
Measurement](../agentic/guardrails-and-measurement):

1. **Brief coverage above 90%.** If most sends lack a research brief,
   the personalization is fake, and buyers can smell it.
2. **Human approval before scaling.** Only automate a pattern after
   hundreds of replies prove it. A weak message scaled by AI dies faster.
3. **Never burn the domain.** Agents make it easy to send more, faster.
   The 25-50/day per-domain cap still applies.

Track meetings and pipeline, not emails sent. Sends are vanity. Meetings
are revenue ([Autobound, 2026](https://www.autobound.ai/blog/ai-sdr-tools-guide)
- vendor source). Watch quota as the trailing signal: only **27-30% of
reps hit quota in 2024**, down from historical norms
([Belkins, via Autobound](https://www.autobound.ai/blog/ai-sdr-tools-guide),
2026), so most sellers are doing average work on a struggling channel.
Plan outbound as one part of a mixed motion.

---

## Failure modes to run against

Check the flow against these at the end of any debrief.

- **Scaling volume before proving the message** - you end up with 10x
  the noise and a burned domain.
- **Optimizing subject lines while the offer is broken** - polish on a
  dead product.
- **Buying a list without reasons-to-reach** - cold spray, no
  personalization, no replies.
- **No handoff discipline** - meetings booked but nobody qualified,
  nothing closed.
- **Skipping domain warmup** - deliverability dies, and the domain is
  burned forever.
- **Treating a 3.43% reply rate as failure** - it is the normal baseline
  ([Woodpecker, 2026](https://woodpecker.co/blog/cold-email-statistics/)).
  Chase reply rate through personalization and touch variety, not by
  sending more of the same.
- **Measuring sends instead of meetings** - the score is pipeline, not
  volume.

---

## Further reading

- [Outbound - the channel](../channels/outbound) - the channel
  benchmarks and when this motion is the right call.
- [Outbound from Zero playbook](../playbooks/outbound-from-zero) - the
  rationale behind these gates, the full deliverability setup, the email
  copy, and the budget argument.
- [Outbound Response Rates](../data/outbound-response-rates) - the
  numbers this flow is measured against, with caveats.
- [Agentic Outbound](../agentic/agentic-outbound) - the same flow when
  an agent runs the execution layer.
- [ICP Definition](../foundations/icp-definition) - the foundation your
  list hangs on.

