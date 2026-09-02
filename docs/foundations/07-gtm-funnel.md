---
title: GTM Funnel
sidebar_position: 7
status: active
last_updated: 2026-09-02
description: The GTM funnel maps the buyer journey from awareness to expansion with measurable stages and conversion benchmarks.
tags: [funnel, metrics, buyer-journey, conversion]
---

# GTM Funnel

The GTM funnel defines the stages a prospect moves through from first touch to becoming a loyal customer who expands and refers others. It sits at the center of go-to-market execution because every channel tactic, sales motion, and revenue operation either feeds or optimizes one of these stages. A well-instrumented funnel turns vague pipeline anxiety into a shared language across marketing, sales, and customer success.

## Definition

A GTM funnel is a structured model that breaks the buyer journey into discrete, measurable stages. Each stage has entry criteria, exit criteria, conversion rates, and owning teams. The classic B2B funnel spans awareness, consideration, decision, onboarding, adoption, expansion, and advocacy. Modern funnels add product-qualified leads (PQLs) and usage-based signals for product-led motions. The funnel is not a linear pipeline; buyers loop back, skip stages, and enter from multiple channels. The model works when every stage has a clear definition, a single owner, and a service-level agreement (SLA) for handoffs [1].

Stages map to specific metrics. Awareness tracks reach and impression share. Consideration measures engagement depth: content downloads, demo requests, webinar attendance. Decision captures opportunity creation, proposal sent, and close-won. Onboarding measures time-to-value and activation rate. Adoption tracks feature usage, license utilization, and health scores. Expansion measures net revenue retention (NRR), upsell attach rate, and cross-sell penetration. Advocacy tracks referral rate, NPS, and case study participation. Each metric rolls up to a north-star revenue number [2].

The funnel distinguishes between marketing-qualified leads (MQLs), sales-accepted leads (SALs), sales-qualified leads (SQLs), and product-qualified leads (PQLs). MQLs meet demographic and behavioral thresholds. SALs pass sales review for fit and timing. SQLs have confirmed budget, authority, need, and timeline (BANT) or MEDDPICC criteria. PQLs hit usage thresholds that signal buying intent. Clear definitions prevent "MQL inflation" where marketing celebrates volume while sales rejects quality [3].

## Why It Matters

Without a defined funnel, teams optimize local metrics that do not roll up to revenue. Marketing celebrates lead volume while sales starves for qualified pipeline. Customer success onboards accounts that never adopt, driving churn. The cost of a broken funnel compounds: wasted spend on low-intent leads, elongated sales cycles from poor qualification, and expansion revenue left on the table because adoption signals are ignored. Companies with aligned funnels grow 19% faster and are 15% more profitable than peers with misaligned funnels [4].

A shared funnel creates a common language for forecasting. Finance models revenue from stage-weighted pipeline rather than rep gut feel. Product prioritizes features that move activation and adoption needles. Marketing allocates budget to channels that feed high-converting stages. Sales focuses effort on deals with verified MEDDPICC criteria. The funnel becomes the operating system for revenue decisions, not a reporting artifact [5].

Ignoring funnel instrumentation means flying blind on unit economics. Customer acquisition cost (CAC) by channel, payback period by segment, and LTV:CAC by cohort all require stage-level conversion data. When funnel data lives in spreadsheets instead of the CRM, it decays fast. The average B2B organization takes 60-70 days to plan territories using limited data inputs; a live funnel cuts that cycle dramatically [6].

## Framework

The framework has four layers: stage definitions, conversion benchmarks, ownership and SLAs, and instrumentation.

### Stage Definitions

Each stage needs a name, entry trigger, exit criteria, and primary metric.

**Awareness**: Entry = target account visits website or sees ad. Exit = engages with content (scrolls, clicks, watches >30 seconds). Metric = engaged visit rate.

**Consideration**: Entry = content download, demo request, or webinar registration. Exit = attends demo or replies to outreach. Metric = demo attendance rate.

**Decision**: Entry = discovery call completed. Exit = proposal sent or contract signed. Metric = proposal-to-close rate.

**Onboarding**: Entry = contract signed. Exit = first value realized (aha moment). Metric = time-to-value (TTV).

**Adoption**: Entry = aha moment reached. Exit = usage >= 80% of licensed seats and core features active. Metric = adoption rate at 90 days.

**Expansion**: Entry = adoption threshold met. Exit = upsell or cross-sell closed. Metric = net revenue retention (NRR).

**Advocacy**: Entry = NPS >= 9 or referenceable case study. Exit = referral submitted or review published. Metric = referral conversion rate.

### Conversion Benchmarks

Benchmarks vary by motion (sales-led, product-led, hybrid) and ACV band. The table below shows median ranges from aggregated B2B SaaS data [7].

```
Stage                    | Sales-Led (ACV >50k) | Product-Led (ACV &lt;10k) | Hybrid (10k-50k)
-------------------------|----------------------|------------------------|------------------
Visitor to MQL           | 2-4%                 | 5-8%                   | 3-5%
MQL to SAL               | 30-40%               | 40-50%                 | 35-45%
SAL to SQL               | 40-50%               | 50-60%                 | 45-55%
SQL to Opportunity       | 50-60%               | 60-70%                 | 55-65%
Opportunity to Close-Won | 20-25%               | 25-30%                 | 22-28%
Close-Won to Activated   | 70-80%               | 60-70%                 | 65-75%
Activated to Adopted     | 60-70%               | 50-60%                 | 55-65%
Adopted to Expanded      | 20-30%               | 15-25%                 | 18-28%
Expanded to Advocate     | 10-15%               | 20-30%                 | 15-20%
```

### Ownership and SLAs

Each stage has a primary owner and a handoff SLA to the next owner.

- Awareness to Consideration: Marketing owns. SLA = MQL routed to sales within 5 minutes (inbound) or 24 hours (outbound).
- Consideration to Decision: SDR/BDR qualifies. SLA = discovery call booked within 2 business days of MQL acceptance.
- Decision: AE owns. SLA = proposal sent within 5 business days of discovery.
- Onboarding: CS/Onboarding specialist owns. SLA = kickoff call within 3 business days of signature.
- Adoption: CSM owns. SLA = health score review weekly; at-risk escalation within 24 hours.
- Expansion: AE/CSM joint ownership. SLA = expansion opportunity created within 30 days of adoption signal.
- Advocacy: Marketing/CS joint. SLA = referral ask within 14 days of NPS >= 9.

### Instrumentation

Funnel data must live in the CRM as the system of record. Website and third-party intent signals feed the CRM so sellers see the full picture [8]. Required fields per stage: stage entered date, stage exited date, owner, conversion flag, disqualification reason (if lost), and leading indicators (meetings booked, content consumed, features used). Dashboards show cohort conversion trends, stage velocity, and leak points. Alerts fire when conversion drops >20% week-over-week or velocity exceeds SLA by >50%.

## How to Execute

### Step 1: Audit Current State

Map every touchpoint from ad click to renewal. Interview marketing, SDRs, AEs, CSMs, and product. Document current stage definitions, owners, and handoffs. Identify gaps: undefined stages, missing SLAs, orphaned leads, duplicate qualification. Score each stage on a 1-5 maturity scale: 1 = undefined, 2 = defined but not measured, 3 = measured but no SLA, 4 = SLA exists but not enforced, 5 = SLA enforced with alerts.

### Step 2: Define Stages and Thresholds

Run a workshop with all revenue leaders. Agree on stage names, entry/exit criteria, and primary metrics. Use the framework table as a starting template. Customize for your motion: add PQL stage for product-led, add trial stage for freemium, add pilot stage for enterprise. Write definitions in a shared doc (Notion, Confluence) and link from CRM stage picklists.

### Step 3: Set Benchmarks and Targets

Start with industry medians from the benchmark table. Adjust for your ACV, sales cycle, and maturity. Early-stage companies typically convert lower at top of funnel but higher at bottom (founder-led sales). Mature companies convert higher at top (brand) but face competitive pressure at decision. Set quarterly improvement targets: aim for 5% relative improvement per stage per quarter. Compounding 5% monthly gains yield ~80% annual improvement [9].

### Step 4: Build CRM Architecture

Create stage fields on Lead, Contact, Opportunity, and Account objects. Add required fields: stage_entered_date, stage_exited_date, conversion_flag, disqualification_reason, leading_indicator_score. Build validation rules: cannot move Opportunity to Proposal without MEDDPICC fields complete. Cannot move Account to Adopted without health score >= 70. Enable history tracking on all stage fields for cohort analysis.

### Step 5: Implement Handoff Automation

Use workflow rules or flows to enforce SLAs. When MQL created: assign to SDR queue, start 5-minute timer, alert if unclaimed. When SAL accepted: create discovery call task, start 2-day timer. When Opportunity moved to Proposal: create proposal task, start 5-day timer. When Contract signed: create Onboarding project, assign CSM, start 3-day kickoff timer. Escalation paths: SDR manager at 10 minutes, AE manager at 3 days, CS director at 5 days.

### Step 6: Launch Dashboards and Reviews

Build four dashboards: Funnel Overview (cohort conversion waterfall), Stage Velocity (median days per stage by segment), Leak Analysis (biggest drop-off points by channel/rep/segment), and Forecast Accuracy (stage-weighted pipeline vs actuals). Run weekly funnel review (30 min): marketing presents top-of-funnel trends, sales presents mid-funnel velocity, CS presents adoption/expansion signals. Run monthly deep dive (90 min): cohort analysis, benchmark comparison, experiment results.

### Step 7: Run Optimization Experiments

Treat each stage as an experiment surface. Top of funnel: test ad creative, landing page copy, content formats. Middle: test qualification scripts, demo formats, proposal templates. Bottom: test onboarding sequences, adoption nudges, expansion plays. Use the growth hacking cycle: analyze data -> gather insight -> generate ideas -> prioritize -> run tests -> review -> decide [10]. Run 20-30 experiments per week across the funnel; most fail, so volume finds wins [11].

## Common Mistakes

**Vanity stage definitions**: Defining MQL as "anyone who downloads a whitepaper" inflates volume but kills conversion. Fix: require behavioral + firmographic fit (e.g., downloaded pricing page + target account + ICP tier 1).

**Missing PQL stage in product-led motion**: Treating all signups as MQLs buries high-intent users. Fix: define PQL by usage threshold (e.g., 3+ team members invited, 5+ core actions in 7 days) and route PQLs to sales with priority SLA.

**No disqualification reasons**: Lost deals with "no reason" selected teach nothing. Fix: require structured loss reasons (budget, timing, competitor, product gap, no authority) and review monthly for product and messaging gaps.

**SLA without enforcement**: A 5-minute MQL SLA that nobody monitors is theater. Fix: automate alerts, escalate to managers, include SLA adherence in comp plans.

**Funnel data outside CRM**: Spreadsheets decay; CRM is the source of truth. Fix: push all web, intent, and product signals into CRM objects. Use reverse ETL if needed.

**Single funnel for all motions**: Enterprise, SMB, and self-serve have different stages and velocities. Fix: build separate funnel models per motion with roll-up to company north star.

**Ignoring post-sale stages**: Funnel stops at close-won. Fix: treat onboarding, adoption, expansion, advocacy as funnel stages with equal rigor.

## Example Artifact

```
GTM FUNNEL DEFINITION DOC v1.2 (Effective 2026-Q3)

STAGE: Awareness
  Owner: Demand Gen Marketing
  Entry: Target account visits website (identified via reverse IP or cookie)
  Exit: Engaged visit (scroll depth >50% OR video play >30s OR click CTA)
  Primary Metric: Engaged Visit Rate (target: >=4%)
  SLA to Consideration: Auto-create Lead record, assign to SDR queue &lt;5 min
  Disqualification Reasons: Bot traffic, non-ICP geography, competitor domain

STAGE: Consideration
  Owner: SDR Team
  Entry: Lead created with source=inbound_content OR outbound_reply
  Exit: Discovery call completed (MEDDPICC fields populated)
  Primary Metric: Discovery Completion Rate (target: >=45%)
  SLA to Decision: Discovery call booked &lt;2 business days
  Disqualification Reasons: No budget, no authority, no need, wrong timing, competitor

STAGE: Decision
  Owner: Account Executive
  Entry: Opportunity created, stage=Discovery
  Exit: Proposal sent (stage=Proposal) OR Closed Lost
  Primary Metric: Proposal Sent Rate (target: >=55%)
  SLA to Onboarding: Proposal sent &lt;5 business days from discovery
  Required Fields: MEDDPICC complete, Champion identified, Compelling Event dated

STAGE: Onboarding
  Owner: Onboarding Specialist (CS)
  Entry: Contract signed (Opportunity=Closed Won)
  Exit: First Value Realized (Aha Moment: 3+ users active, 1+ workflow completed)
  Primary Metric: Time-to-Value (target: <=14 days)
  SLA to Adoption: Kickoff call &lt;3 business days, weekly check-ins
  Health Score Threshold: >=60 at day 30

STAGE: Adoption
  Owner: Customer Success Manager
  Entry: Health Score >=60 AND TTV achieved
  Exit: Adoption Score >=80 (license utilization >80%, core features active)
  Primary Metric: 90-Day Adoption Rate (target: >=70%)
  SLA to Expansion: Expansion opp created &lt;30 days of Adoption signal
  At-Risk Trigger: Health Score drops >15 points week-over-week

STAGE: Expansion
  Owner: AE (new logo upsell) / CSM (renewal + cross-sell)
  Entry: Adoption Score >=80 AND usage growth >20% QoQ
  Exit: Expansion opportunity Closed Won
  Primary Metric: NRR (target: >=110%)
  SLA to Advocacy: Reference case study drafted &lt;14 days of expansion close

STAGE: Advocacy
  Owner: Customer Marketing / CSM
  Entry: NPS >=9 OR Expansion closed with CSAT >=4.5/5
  Exit: Referral submitted OR G2 review published OR Case study approved
  Primary Metric: Referral Conversion Rate (target: >=15%)
  SLA: Referral ask sent &lt;14 days of trigger event
```

## Sources

- [1] (Hacking Growth (Sean Ellis & Morgan Brown), 2017): Defines growth funnel stages and cross-functional ownership.
- [2] (Revenue Operations (Diorio & Hummel), 2023): Describes funnel instrumentation and CRM as system of record.
- [3] (Predictable Revenue (Aaron Ross & Marylou Tyler), 2011): Defines MQL, SAL, SQL qualification thresholds.
- [4] (From Impossible to Inevitable (Aaron Ross & Jason Lemkin), 2016): Benchmarks for aligned funnel performance.
- [5] (Revenue Operations (Diorio & Hummel), 2023): Management system pillars for revenue alignment.
- [6] (Revenue Operations (Diorio & Hummel), 2023): Territory planning cycle and data input limitations.
- [7] (Winning by Design, 2023): Aggregated B2B SaaS conversion benchmarks by motion and ACV.
- [8] (Revenue Operations (Diorio & Hummel), 2023): Anonymous visitor data must live in CRM for intent signals.
- [9] (Hacking Growth (Sean Ellis & Morgan Brown), 2017): Compounding 5% monthly gains yield ~80% annual improvement.
- [10] (Hacking Growth (Sean Ellis & Morgan Brown), 2017): Growth hacking cycle: analyze, insight, ideas, prioritize, test, review, decide.
- [11] (Hacking Growth (Sean Ellis & Morgan Brown), 2017): Leading growth teams run 20-30 experiments per week.

## Further Reading

- [ICP Definition](foundations/icp-definition)
- [GTM Metrics](foundations/gtm-metrics)
- [Revenue Operations](foundations/revenue-operations)
- [Buyers Journey](flows/buyers-journey)
- [Sales Process MEDDPICC](flows/sales-process-meddpicc)
- [Conversion Rate Benchmarks](data/conversion-rate-benchmarks)
- [Funnel Data](data/funnel)
