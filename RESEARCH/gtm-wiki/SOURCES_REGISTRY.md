---
title: "GTM Wiki Source Registry: Vetted Sources (True Gate)"
tags: [gtm-wiki, sources, registry, true-gate, citations]
status: active
created: 2026-08-17
last-updated: 2026-08-17
---

# GTM Wiki Source Registry (True Gate)

The **canonical list of sources the wiki is allowed to cite.** Every citation in
every page must resolve to a row here (source name + as-of date + the claim it
supports). A citation not in this registry **fails the build** (fabrication is
structurally uncommittable, not caught by an auditor later.

**Owner:** Bumble (I vet sources). **Wired into:** Fizz's L1/L2 (when it lands).

## Rules
1. A page may only cite a source that has a row in this registry.
2. Every row names the **as-of date** (when the underlying data was published).
3. Every row lists the **claims it supports** so a citation can be checked against
   the claim, not just the name.
4. Adding a source is a **logged registry edit** (reviewed), not a silent change (
   parallel to the topic-graph rule in Gold Standard §2.
5. Sources here are seeded from `RESEARCH/gtm-wiki/*.md` (where I hold the
   numbers) plus the live book-grade pages. If a number circulates in-thread but
   is NOT here, it FAILS the registry by design.

## Sources

### Benchmark / data vendors (numbers with dated bases)

| # | Source | As-of | Key claims it supports | Backing |
|---|--------|-------|------------------------|---------|
| 1 | SalesHive | 2025 | Blended B2B cold reply 5.8% (down from 6.8% 2023); B2B SaaS 3–8% | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 2 | Woodpecker | 2026 | Cold email reply avg 3.43%; good/excellent 5–10%/10%+ | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 3 | Focus Digital (via Martal) | 2026 | Cold email → deal ~0.2% (≈1 per 500 emails) | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 4 | Infraforge (via Martal) | 2026 | 2024 cold reply 5.1%, down from ~7% | OUTBOUND_RESPONSE_RATES_BENCHMARKS.md |
| 5 | OptifAI | 2026 | Sales velocity $8,219/day; LTV:CAC 3.2:1; open rates cold/warm/cust 16.5/27.5/37.5%; NRR by ACV; SDR cost | GTM_METRICS + OUTBOUND + ROLES |
| 6 | DigitalApplied | 2026 | CAC self-serve $702 / sales-led $11,400; payback 12mo (was 18–24); LTV:CAC floor 3:1 | GTM_METRICS_BENCHMARKS.md |
| 7 | RepVue (Q4 2024) / Forrester | Q4 2024 | Quota attainment avg ~43–47% | GTM_METRICS + ROLES |
| 8 | SalesMotion | 2026 | Win rates ~21% all / ~29% qualified / ~22% SaaS; 31% SMB vs 15% enterprise; ABM 45% vs 18% non-ABM | GTM_METRICS + live ABM page |
| 9 | getSpike SaaS Marketing Benchmarks | 2026 | Pipeline coverage 3–4x mid / 4–5x ent; pipe-to-spend 5–8x healthy, 10x+ exceptional | GTM_METRICS_BENCHMARKS.md |
| 10 | ChurnZero | 2026 | NRR median ~102% | GTM_METRICS + PRICING |
| 11 | ChartMogul (H1 2024) | H1 2024 | ≥100% NRR companies grew ~48% YoY | GTM_METRICS_BENCHMARKS.md |
| 12 | Janis Zech | n/a | Coverage directional not law (hit quota at 1.8x, miss at 4x) | GTM_METRICS_BENCHMARKS.md |
| 13 | gtm-consult | n/a | Enterprise pipeline coverage 4–5x | GTM_METRICS_BENCHMARKS.md |
| 14 | SalesGenie | 2026 | Cold call connect 2–3%; top SDRs 5–8% meetings | OUTBOUND_RESPONSE_RATES |
| 15 | Belkins (via Autobound) | 2024 | B2B reps hitting quota 27–30% (2024) | OUTBOUND_RESPONSE_RATES |
| 16 | Autobound | 2026 | Multi-channel reply 15–25% (100+ SaaS teams); DMARC enforcement timeline; deliverability fundamentals; warmup ramp | OUTBOUND + COLD_EMAIL |
| 17 | Instantly | 2026 | Google/Yahoo sender reqs; &lt;0.3% complaints; ≥80% inbox placement; bounce/complaint troubleshooting; Microsoft ≥5K msgs/day | COLD_EMAIL + live outbound page |
| 18 | Clay | 2026 | Inbox ceilings (50/day/inbox, 2–3 inboxes/domain, 3–4 domains/console); ≥3wk warmup; verification tools | COLD_EMAIL_DELIVERABILITY.md |
| 19 | PowerDMARC | 2026 | DMARC policy choice (none/quarantine/reject); SPF/DKIM alignment | COLD_EMAIL_DELIVERABILITY.md |
| 20 | LeadHaste | 2026 | Warmup ramp 3wk; keep light warmup running after launch | COLD_EMAIL_DELIVERABILITY.md |
| 21 | Mailreach | 2026 | Fast warmup timeline (days 6–10: 15–25; 11–14: 30–50) | COLD_EMAIL_DELIVERABILITY.md |
| 22 | getFuzzy | 2026 | Linear ramp not hockey-stick (5–10/day/week) | COLD_EMAIL_DELIVERABILITY.md |

### Funnel / conversion-stage benchmarks

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 23 | Ruler Analytics | 2024 | Visitor→Lead 2.6% avg / 4.5% top quartile | CONVERSION_RATE_BENCHMARKS.md |
| 24 | First Page Sage | 2024 | Visitor→Lead 1.4% SMB; MQL→SQL 36–47%; SQL→Opp 36–48%; stage ranges | CONVERSION_RATE_BENCHMARKS.md |
| 25 | Landbase | n/a | Lead→MQL 31% avg / B2B SaaS 39% | CONVERSION_RATE_BENCHMARKS.md |
| 26 | Salesforce State of Sales | 2024 | MQL→SQL 13% (5,500 sales pros, 27 countries) | CONVERSION_RATE_BENCHMARKS.md |
| 27 | thedigitalbloom | 2025 | MQL→SQL 15–21%; MQL→SQL bottleneck | CONVERSION_RATE + GTM_METRICS |
| 28 | Zeliq | n/a | SQL→Opp 30–50%; Opp→Closed-Won 20–35% | CONVERSION_RATE_BENCHMARKS.md |
| 29 | Ebsta / Pavilion | 2021–2024 | SQL→Opp 47%; Opp→Closed-Won 21% avg (down 4–6 pts from 2021) | CONVERSION_RATE + SALES_CYCLE + ROLES |

### ABM / segmentation / strategy

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 30 | SiriusDecisions / Forrester | n/a | 68% higher win rates w/ defined ICP; 30% more marketing revenue | live ABM page |
| 31 | Foundry | n/a | Intent-based ads 220% higher CTR | live ABM page |
| 32 | TheStarrConspiracy | 2025 | Intent-prioritized convert 21.3% vs 8.4%; 71% use intent data | CONVERSION + live ABM page |
| 33 | Spiceworks | n/a | 57% target ≤1,000 ABM accounts | live ABM page |
| 34 | Demand Gen Report | 2020 | 29% focus 101–500 accounts | live ABM page |
| 35 | Lusha | n/a | Avg simultaneous account count 38 | live ABM page |
| 36 | Amplitude | n/a | ABM committees 7–8 people; tier scopes | live ABM page |
| 37 | Demandbase | 2026 | Engaging buying groups 2–3x higher win rates; ABM 101 tiers | live ABM page |
| 38 | Gartner | 2024 | 86% win-rate improvement w/ aligned sales+marketing; 14% pipeline conv; ICP stats | live ABM + REVENUE_OPS |
| 39 | AiSDR cost analysis | 2026 | SDR ~$139,120/year fully loaded (vendor source) | live outbound page |

### Cold-email copy / sequence

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 40 | Mailforge (via Martal) | 2026 | 50–125 word emails earn ~50% higher reply rates | live outbound page + FLOWS |

### Buyer's journey (buyer's view of the same arc as MEDDPICC)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 41 | Gartner (Future of Sales) | 2020 | Buyers spend ~17% of buying time with suppliers; 33% prefer seller-free (44% millennials); 80% of interactions digital by 2025 (forecast) | BUYERS_JOURNEY_SOURCES.md |
| 42 | Gartner (Sales Survey) | 2025 | 61% of B2B buyers prefer a rep-free buying experience | BUYERS_JOURNEY_SOURCES.md |
| 43 | Forrester (State of Business Buying) | 2024 | 86% of B2B purchases stall; 81% of buyers dissatisfied; ~13 people in buying decision; 89% span 2+ depts; ~95% anticipate genAI in next 12 mo | BUYERS_JOURNEY_SOURCES.md |
| 44 | 6sense (Buyer Experience Report) | 2025 | Buying cycle 10.1 mo (11.3 in 2024); POFC 61% of journey (69% 2024); 95% winning vendor on Day-One shortlist; ~80% won by pre-contact favorite; buyers do ~2/3 of journey pre-engagement; buying groups 10+; >80% buyer-initiated contact | BUYERS_JOURNEY_SOURCES.md |
| 45 | CEB (Challenger Customer) | 2015 | Buyer roles Mobilizers/Talkers/Blockers; sellers targeting Mobilizers 31% more likely high performers; ~5,000-person study; 53% cite sales experience | BUYERS_JOURNEY_SOURCES.md |

### Vetted 2026-08-18 batch (workers web-verified; claims from citing pages)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 46 | SuperAGI | 2026 | AI-augmented rep handles 1,000+ contacts/day vs 50-80 manual; autonomous agents convert meetings to opps 15% vs 25% human SDRs (40% gap); AI-augmented SDR handles 1,000+ contacts/day vs 50-80 for a... | docs/agentic/02-agentic-outbound.md; docs/case-studies/03-outbound.md; docs/playbooks/outbound-from-zero.md |
| 47 | MarketsandMarkets | 2026 | cost-per-lead drops $262 to $39 (85% reduction); AI SDR cost-per-lead drops from $262 to $39, an 85% reduction (vendor source) | docs/case-studies/03-outbound.md; docs/playbooks/outbound-from-zero.md |
| 48 | The Starr Conspiracy | 2025 | B2B intent-prioritized convert 21.3% vs 8.4%; 71% use intent data; ABM adoption 70% (2024) vs 49% (2020); CPL benchmarks content/SEO $35, paid social $152, trade shows $395, median $116 | docs/case-studies/02-abm.md; docs/channels/02-inbound.md; docs/channels/09-abm.md |
| 49 | Rewardful | 2025 | affiliate/referral MRR contribution 10-20% of MRR, up to 50% for specialized tools | docs/channels/04-partner.md; docs/channels/08-referral-viral.md |
| 50 | ProductLed | n/a | 600+ B2B SaaS survey: ~9% median free-to-paid, ~25-30% activated-to-paid with PQLs | docs/case-studies/01-product-led.md; docs/channels/03-product-led.md |
| 51 | Michelle Goodall | 2023 | Notion case study: 20M users and 1M+ community members by Sept 2023 | docs/case-studies/04-community-led.md; docs/channels/05-community-led.md |
| 52 | Mailshake | 2025 | State of Cold Email: only ~5% personalize every email | docs/agentic/02-agentic-outbound.md; docs/channels/01-outbound.md |
| 53 | Mailforge | 2026 | 50-125 word emails earn ~50% higher reply rates (via Martal) | docs/flows/02-agentic-outbound.md; docs/playbooks/outbound-from-zero.md |
| 54 | Gainsight | 2022 | Product-Led Growth Index: free trials using PQLs convert 2.8x higher; 35-Metric Guide for SaaS Teams | docs/case-studies/01-product-led.md; docs/channels/03-product-led.md; docs/foundations/05-gtm-metrics.md |
| 55 | Expando | 2025 | Guide to B2B referral partner programs: referral leads convert ~30% higher and carry ~16% higher LTV (Wharton) | docs/channels/04-partner.md; docs/channels/08-referral-viral.md |
| 56 | Contrary Research | 2023 | Miro 60M+ users (Sept 2023); Notion and Calendly reports (Calendly $350M Series B at $3B valuation via TechCrunch) | docs/case-studies/01-product-led.md; docs/case-studies/04-community-led.md |
| 57 | ChartMogul | 2024/H1 2024 | SaaS Retention Report: companies with NRR >=100% grew ~48% YoY; 1-point free-to-paid lift ~+15% revenue/cohort; Companies with NRR >=100% grew roughly 48% YoY (H1 2024); a 1-point free-to-paid lift... | data/01-gtm-metrics.md; docs/case-studies/01-product-led.md; docs/data/01-gtm-metrics.md |
| 58 | Userpilot | n/a | SaaS conversion rates: 1-point free-to-paid lift equals ~+15% new revenue per cohort | docs/case-studies/01-product-led.md; docs/channels/03-product-led.md |
| 59 | Apollo | n/a | Outbound pipeline guide: $0 to $200K revenue and $1M pipeline in three months (founders); Outbound Sales Pipeline Guide (0 to $200K revenue and $1M pipeline in three months, vendor source); list bu... | data/05-outbound-response-rates.md; docs/agentic/01-agentic-stack.md; docs/case-studies/03-outbound.md |
| 60 | Winning by Design | n/a | Revenue Architecture framework by Jacco van der Kooij; BenchSights source | docs/foundations/revenue-architecture.md |
| 61 | Wharton | 2011 | Schmitt et al research: referral leads convert ~30% higher, ~16% higher LTV | docs/channels/04-partner.md; docs/channels/08-referral-viral.md |
| 62 | Vendelux | 2026 | Event Marketing Statistics survey 120+ B2B marketing leaders: only 13% pick events fully on data; event case studies (Voltage 300% pipeline, Rocketium, Seqera) | docs/channels/07-events-field.md |
| 63 | UserGems | 2026 | AI SDR tools churn at 50-70% annually, ~2x human turnover; autonomous convert 15% vs 25% (via Autobound) | docs/agentic/02-agentic-outbound.md; docs/flows/02-agentic-outbound.md |
| 64 | Triple Whale | 2025 | Meta Ads benchmarks: CPA $38.19, CPM $14.19 (up 20% YoY), CTR 2.19% | docs/channels/06-paid.md |
| 65 | Trello (pricing) | 2026 | Free plan allows up to 10 boards per workspace and up to 10 workspace collaborators, unlimited cards | docs/case-studies/01-product-led.md |
| 66 | TheB2BHouse | 2026 | LinkedIn Ad benchmarks: global average CPC $5.58 | docs/channels/06-paid.md |
| 67 | TechCrunch | 2021 | Calendly $350M Series B at $3B valuation, Jan 2021 (via Contrary Research) | docs/case-studies/01-product-led.md |
| 68 | TOPO | 2019 | 2019 Account Based Benchmark: 86% of orgs report increased win rate attributed to ABM | docs/channels/09-abm.md |
| 69 | TK Kader | n/a | ICP framework guide: three-part framework (Firmographics, Triggers, Macro Trends), TAM/SAM/SOM connection | docs/foundations/02-icp-definition.md |
| 70 | Stripe | n/a | GTM definition and component breakdown; Connect/platform-ecosystem model | docs/foundations/00-what-is-gtm.md; docs/roles/head-of-platforms/index.md |
| 71 | Store Growers | 2026 | Google Ads benchmarks: search CTR 3.17%, display CTR 0.46% | docs/channels/06-paid.md |
| 72 | Forrester State of GTM 2024 | 2024 | 76% of organizations have reinvented their GTM approach; 70% of B2B buyer journey is self-serve | docs/foundations/00-gtm-strategy-framework.md |
| 73 | Startup-Insider Edge | n/a | Robinhood referral analysis: 7.8% peak referral conversion (vendor source) | docs/case-studies/05-referral-viral.md; docs/channels/08-referral-viral.md |
| 74 | Stackmatix | 2026 | LinkedIn Ads cost per lead: enterprise SaaS CPL $80-$180 (form), $120-$250 (landing page), mid-market $60-$120 | docs/channels/06-paid.md |
| 75 | Snowflake | 2025 | AI-ABM blog (Apr 2025): 45% ABM win rate vs 18% non-ABM; 2.3x lift in meetings booked; 38% less spend; 75% more SDR-booked meetings | docs/case-studies/02-abm.md; docs/channels/09-abm.md |
| 76 | Smartlead | 2026 | AI SDR comparison: fully-loaded autonomous AI SDR $35K-$65K/yr; 1-3% reply rate for fully autonomous systems | docs/agentic/01-agentic-stack.md; docs/flows/02-agentic-outbound.md |
| 77 | Slack | 2019 | 12M+ DAU and 6M+ paid seats (Sept 2019); 640K orgs (2019); ~40% of paid customers started on free tier | docs/case-studies/01-product-led.md |
| 78 | Skillademia | 2026 | Stack Overflow statistics (updated July 2026): 24M+ questions, 35M+ answers, 22M+ users; 11-min avg response; questions fell 1.8M (2020) to ~1.2M (2024) | docs/case-studies/04-community-led.md |
| 79 | Sixteen Ventures | n/a | SaaS free trial benchmarks (Lincoln Murphy) | docs/channels/03-product-led.md |
| 80 | Sean Ellis | 2016 | Dropbox 100K to 4M registered users in 15 months (Sept 2008-Dec 2009); 35% of daily signups from referrals; 2.8x paid channels (SaaStr Annual deck) | docs/case-studies/01-product-led.md |
| 81 | Scrap.io | 2026 | Customer acquisition cost benchmarks: ecommerce referral CAC $25-$65 per customer | docs/channels/08-referral-viral.md |
| 82 | Schmitt, Skiera, Van den Bulte | 2011 | Journal of Marketing: referred customers worth ~16% more with ~18% lower churn over six-year horizon | docs/channels/08-referral-viral.md |
| 83 | Salesmotion | 2026 | Win rates ~21% all / ~29% qualified / ~22% SaaS; 31% SMB vs 15% enterprise (>$100K ACV); ABM 45% vs 18%; DocuSign win rate 25% to 52% | docs/case-studies/02-abm.md; docs/channels/09-abm.md; docs/data/01-gtm-metrics.md |
| 84 | Salesforce | 2024 | TAM/SAM/SOM sizing reference; State of Sales 2024: MQL to SQL 13% (5,500 sales pros, 27 countries); 86% of buyers more likely to buy when goals understood | docs/data/00-conversion-rate-benchmarks.md; docs/data/02-market-segmentation.md; docs/foundations/02-icp-definition.md |
| 85 | SalesFit | 2025 | Sales quota attainment benchmarks: industry average ~47% | docs/foundations/06-revenue-operations.md |
| 86 | Sacra | 2026 | Circle company analysis: 4.1M active users, 10,000+ communities (end 2023); $68M ARR by May 2026 (analyst source) | docs/case-studies/04-community-led.md |
| 87 | Saber | 2025 | Pipeline coverage glossary: 3x-5x open pipeline to quota rule of thumb | docs/foundations/06-revenue-operations.md |
| 88 | SMarketers | 2026 | RevOps hiring demand grew +300% in 18 months; RevOps hiring demand growth; up to 30% lower go-to-market cost and +10-20% sales productivity from better lead quality/tooling | docs/foundations/06-revenue-operations.md |
| 89 | SBI | 2024 | State of B2B SaaS Pricing Benchmarks: 33% value-based pricing adoption; 40.8% good-better-best dominant model | docs/data/04-pricing-as-gtm.md |
| 90 | Robinhood | current | Free-stock referral: ~99% of referees receive ~$5, up to $200, up to $1,500 via referrals (first-party); 7.8% peak referral conversion (via Startup-Insider Edge) | docs/case-studies/05-referral-viral.md; docs/channels/08-referral-viral.md |
| 91 | Reuters | 2022 | Figma ~$20B Adobe acquisition announced (Sept 2022); Zoom 10M -> 300M daily meeting participants (2020) | docs/case-studies/01-product-led.md |
| 92 | RepVue Cloud Sales Index | Q4 2024 | Quota attainment avg ~43-47% (RepVue reported 43.14% Q4 2024); &lt;43% of sellers hit quota Q2 2024, down 8% over two years | docs/data/01-gtm-metrics.md; docs/foundations/06-revenue-operations.md |
| 93 | Pavilion | 2024-2025 | IC attainment ~25% (Ebsta/Pavilion 1H 2024); enterprise committee 11-17 decision makers; avg B2B win rate 20-21%; expansion deal cycle 52 days | docs/data/01-gtm-metrics.md; docs/data/06-sales-cycle-benchmarks.md |
| 94 | Passionfroot | 2026 | Notion grew ~1M -> ~30M users via community/creator enablement (Ben Lang AMA) | docs/channels/05-community-led.md |
| 95 | PartnerStack | 2026 | Mid-market/enterprise report 35% of new pipeline partner-influenced/sourced; 69% of B2B SaaS leaders plan to increase partnership investment; only 42% use multi-touch attribution | docs/channels/04-partner.md |
| 96 | PartnerStandard | 2026 | A program at 30% activation has a recruitment or onboarding-design problem | docs/channels/04-partner.md |
| 97 | OpenAI on Unify | 2025 | Unify reports its AI-driven system generates 30% of its pipeline autonomously | docs/agentic/00-agentic-gtm-overview.md |
| 98 | Onely | 2025 | 73% of B2B websites lost significant organic traffic 2024-2025, avg decline 34% YoY | docs/channels/02-inbound.md |
| 99 | Notion 100 Million of You | 2025 | Notion 20M users (2022) -> 100M+ (2025), 4M+ paying | docs/case-studies/01-product-led.md |
| 100 | NP Digital | Oct 2025 | B2B organic leads down 47% Jan-Oct 2025; 57% of B2B searches ended without a website click (up from 35% in 2024) | docs/channels/02-inbound.md |
| 101 | NN/g | 2006 | The 90-9-1 rule (Jakob Nielsen): ~90% lurk, 9% contribute occasionally, 1% create most content | docs/channels/05-community-led.md |
| 102 | MomentumNexus | 2026 | SaaS price level +11.4% YoY in 2025; SaaS spend/employee $7,900/yr (+27% in 2 yrs); expansion as % of new revenue healthy 25-40%; SaaS price level +11.4% YoY in 2025; SaaS spend per employee $7,900... | docs/data/04-pricing-as-gtm.md |
| 103 | Miro | 2023 | 60M+ users as of September 2023 (Contrary Research report) | docs/case-studies/04-community-led.md |
| 104 | Medium | 2020-2026 | Robinhood 7.8% peak referral conversion (Startup Insider Edge); Calendly case; Cacheflow SaaS discount 1-20% optimal | docs/case-studies/05-referral-viral.md; docs/channels/08-referral-viral.md; docs/data/04-pricing-as-gtm.md |
| 105 | McKinsey Next in Personalization | 2021 | Personalization -> revenue lift +10-15%; personalization -> marketing ROI +10-30% | docs/data/02-market-segmentation.md |
| 106 | Maxio | 2026 | Sales-led vs product-led GTM motion comparison (framework ref) | docs/foundations/00-what-is-gtm.md |
| 107 | Marketick | 2026 | Up to 30% lower GTM cost and +10-20% sales productivity from better lead quality/tooling (vendor source) | docs/foundations/06-revenue-operations.md |
| 108 | Lithium | 2026 | Top ~10% of contributors generate ~56% of community content; hyper-contributors ~2.7% of members (143 communities) | docs/channels/05-community-led.md |
| 109 | LevelUpLeads | 2025-2026 | AI-empowered SDR reaches 3x more prospects with tailored messages (via Smartlead) | docs/agentic/02-agentic-outbound.md |
| 110 | Lenny's Newsletter | Aug 2023 | ×OpenView×Pendo 1,000+ product survey: PQL-gated trials convert 2.8x higher; freemium sign-up ~9%, free-trial ~5%; measure free-to-paid on cohort basis | docs/channels/03-product-led.md; docs/foundations/02-icp-definition.md |
| 111 | Lavender | Mar 2026 / Jan 2023 | Benchmark across 231,818 emails: A-grade copy lifts reply 27-79% by department; personalization lifts reply 50-250% vs template (vendor source) | docs/case-studies/03-outbound.md |
| 112 | Lative | 2025 | At 21% avg B2B win rate need ~4.8x pipeline coverage; enterprise Series B+ target 4x-5x qualified coverage; Pipeline coverage framework; $7.2M qualified pipeline measured 2.2x coverage; win-rate vs... | docs/foundations/06-revenue-operations.md |
| 113 | Landbase | 2026 | Lead -> MQL 31% avg, 39% B2B SaaS; MQL -> SQL 13% | docs/data/00-conversion-rate-benchmarks.md |
| 114 | Labs by Demandbase | 2026 | Engaging buying groups -> 2-3x higher win rates, larger deals; ABM 101 tiers; Engaging buying groups drives 2-3x higher win rates and larger deals; 24B+ interactions | docs/case-studies/02-abm.md; docs/channels/09-abm.md |
| 115 | Kumar Petersen Leone | 2010 | 83% of consumers willing to refer after a good experience, but only 29% actually share (Texas Tech study) | docs/channels/08-referral-viral.md |
| 116 | Instantly | 2025-2026 | Signal-based personalization reaches 15-25% reply rates; Google/Yahoo sender reqs; &lt;0.3% complaints; ≥80% inbox placement | docs/agentic/02-agentic-outbound.md; docs/channels/01-outbound.md; docs/data/05-outbound-response-rates.md |
| 117 | Insights ABM | n/a | 87% of marketers say ABM delivers higher ROI than other strategies (with SiriusDecisions) | docs/channels/09-abm.md |
| 118 | Insight Collective | n/a | One-to-few ABM = clusters/groups of 20-100 sharing traits; one-to-many = hundreds to thousands | docs/channels/09-abm.md |
| 119 | InsideScale | 2026 | Gong case study: first 10 customers from founder relationships, next 10+ sourced out-of-network | docs/case-studies/03-outbound.md |
| 120 | Improvado | 2026 | LTV to CAC ratio guide reference | docs/data/01-gtm-metrics.md |
| 121 | Huble | 2026 | ABM deals ~20% larger than traditional demand gen (111 ABM statistics) | docs/channels/09-abm.md |
| 122 | HubSpot | 2026 | State of Marketing: 37% of marketers say leads more informed due to AI; ~70% say leads come later after AI-assisted research; email a top ROI B2B channel | docs/channels/02-inbound.md; docs/channels/03-product-led.md |
| 123 | HockeyStack | 2025 | LinkedIn CPC rising $10.48 Q1 -> $15.72 Q3 2025, CTR 0.82-0.96% | docs/channels/06-paid.md |
| 124 | Highspot | 2026 | Agentic AI GTM strategy: AI autonomy vs human judgment boundaries | docs/agentic/06-agent-vs-human-workflows.md |
| 125 | Higher Logic | 2026 | Small communities (&lt;5K): ~33% of members creators/contributors; medium/large (10-50K): ~20% participate | docs/channels/05-community-led.md |
| 126 | Hey Sid | 2026 | ~5% of market is in-market at any moment (95-5 rule) | docs/data/02-market-segmentation.md |
| 127 | Haus Advisors | 2025-2026 | Industry avg cold email reply 5.1%, most campaigns 1-5% (Belkins 2025 via Haus Advisors) | docs/agentic/02-agentic-outbound.md |
| 128 | Hamster Garage | 2026 | Healthy partner activation >50% of signed partners launch; 30% activation signals a recruitment/onboarding problem; Partner activation rate >50% of signed partners launch; average ~10% activation v... | docs/channels/04-partner.md |
| 129 | HG Insights | 2026 | SOM as share of SAM (early-growth B2B) 5-15% | docs/data/02-market-segmentation.md |
| 130 | HBR | 2011 | Referred customers worth ~16% more with ~18% lower churn over six years (Schmitt/Skiera study) | docs/channels/08-referral-viral.md |
| 131 | Graphite Similarweb | 2026 | Top 40,000 US sites: Google organic traffic down just 2.5% YoY (long-tail collapse vs aggregate) | docs/channels/02-inbound.md |
| 132 | Go to Market GTM Strategy (Asana) | 2026 | GTM strategy definition & 9-step guide (framework ref) | docs/foundations/00-gtm-strategy-framework.md |
| 133 | GitHub | n/a | Repo hosting / fork & PR contribution workflow (infra, not a data source) | docs/contributing.md |
| 134 | Genesys Growth | 2026 | Cost per acquired lead 30-40% lower via partnerships than paid ads | docs/channels/04-partner.md |
| 135 | GTM Syndicate | 2026 | Revenue architecture overview: six models and growth stages (framework ref); Revenue architecture overview: the six models and growth stages in visual form | docs/foundations/revenue-architecture.md |
| 136 | Forrester State of ABM | 2024 | 68% higher win rates with defined ICP & 30% more marketing revenue (SiriusDecisions/Forrester); State of GTM 2024: 76% reinvented GTM approach, 70% of B2B buyer journey self-serve | docs/channels/09-abm.md; docs/data/01-gtm-metrics.md; docs/foundations/00-gtm-strategy-framework.md |
| 137 | Forecastio | 2025 | Forecast accuracy bands: 50-70% average, 80-95% top-decile; most teams not close to own plan | foundations/06-revenue-operations.md |
| 138 | First Round Review | n/a | Notion community, influencer, and growth playbooks (How Notion Does Marketing) | case-studies/04-community-led.md |
| 139 | First Page Sage | 2024 | Visitor-to-lead 1.4% SMB; MQL-to-lead 36-47%; SQL-to-opp 36-48%; opp-to-closed-won 31-43%; trial-to-paid opt-in ~18%, opt-out ~49%, freemium ~3-9% | data/00-conversion-rate-benchmarks.md |
| 140 | FeverBee | 2026 | Discourse scores 9/10 for discussions in 2026 platform comparison series | channels/05-community-led.md |
| 141 | Extole | 2026 | Global referral rate 2.35% of customers make at least one referral; referred vs paid-channel retention 37% higher; conversion 4x (vendor source) | channels/08-referral-viral.md |
| 142 | Exploding Topics | 2026 | Software referral rate 4.75%, more than double cross-industry average; top programs over 5%; Software referral rate 4.75%, more than double the cross-industry average; top programs over 5% | channels/08-referral-viral.md; docs/channels/08-referral-viral.md |
| 143 | EmberTribe | 2026 | B2B SaaS referral CAC about $150 per customer vs ~$802 paid search (vendor source); B2B SaaS referral CAC about $150 per customer vs about $802 for paid search | channels/08-referral-viral.md; docs/channels/08-referral-viral.md |
| 144 | Ebsta | 2024 | SQL-to-opp 47%; opp-to-closed-won 21% avg, down 4-6 points from 2021; enterprise committee 11-17; B2B win rate 20-21%; expansion deal cycle 52 days | data/00-conversion-rate-benchmarks.md |
| 145 | Dropbox | n/a | ~100K signups (Sep 2008) to ~4M (Dec 2009), 3,900% growth, 35% of daily signups from referrals at peak, 2.8x paid acquisition; 500MB/side reward | case-studies/05-referral-viral.md |
| 146 | DigitalBloom | 2025 | MQL-to-SQL 15-21%; channel differentials email 1.8%/46%, events 1.0%/24%/40%, PPC 0.7%/26%; Sales cycle lengthening since 2022 +22%; MQL->SQL 15-21% | data/00-conversion-rate-benchmarks.md; docs/data/06-sales-cycle-benchmarks.md |
| 147 | DigitalApplied | 2026 | CAC self-serve $702 / sales-led $11,400 median; CAC payback target 12 months (was 18-24); B2B SaaS paid search $1,180, Meta $890, TikTok $540, organic $348, outbound $3,210; paid-search CAC up 18% ... | data/01-gtm-metrics.md |
| 148 | Digital Native | n/a | Notion used community to scale to 20M+ users (ambassador/superfan mechanics) | channels/05-community-led.md |
| 149 | Demandbase | 2026 | Engaging buying groups drives 2-3x higher win rates and larger deals; ABM 101 tiers; 81% higher ROI for top performers (2024 benchmark); 5 segmentation methods | channels/09-abm.md |
| 150 | DemandSage | 2026 | Content generates 3x more leads than outbound and costs 62% less (Content Marketing Statistics, via Realize) | channels/02-inbound.md |
| 151 | Demand Gen Report | 2020 | 29% focus on 101-500 accounts (2020 ABM survey); 71% of practitioners use an ABM strategy (2025 survey) | channels/09-abm.md |
| 152 | DealHub | 2026 | SaaS reseller margins 20-30% off list price (partner margin glossary); Reseller margin 20-30% off list price (SaaS channel margins) | channels/04-partner.md; docs/channels/04-partner.md |
| 153 | Community Inc | 2024 | Atlassian 4.5M+ member community, sales & marketing under 15% of revenue for 20 years on $3B+ revenue, Authors program 700+ members; Notion ambassador program (vendor source) | case-studies/04-community-led.md |
| 154 | Common Room | 2024 | Community-led support reduces support tickets by estimated 30-40% (2024 State of Community report, vendor source); 2024 State of Community report: community-led support reduces support tickets by a... | case-studies/04-community-led.md; docs/case-studies/04-community-led.md |
| 155 | CloudSponge | n/a | Airbnb referral program mechanics corroboration (doubles-sided credits, +$75 host bonus) | channels/08-referral-viral.md |
| 156 | ChurnZero | 2026 | Net revenue retention median ~102%; expansion revenue rate 10-30% good; top performers exceed 60% of new MRR from expansion | data/01-gtm-metrics.md |
| 157 | Challenger | 2024 | Less than 20% of sales leaders rated forecast accuracy 'predictable' (Jan 2024 poll); Forecast accuracy bands: leaders rate their forecast accuracy 'predictable' | docs/foundations/06-revenue-operations.md; foundations/06-revenue-operations.md |
| 158 | Calendly | 2024 | Viral loop via shared booking link, no cash incentive; early 700%+ YoY growth, 10M+ users (vendor-sourced); 86% of the Fortune 500; $3B valuation, $350M Series B (Jan 2021); Calendly for Enterprise... | case-studies/05-referral-viral.md; docs/case-studies/01-product-led.md |
| 159 | CXL | n/a | ABM case outcomes: BillingTree 60% response/15% conversion/$350K/700% ROI; Invoca 33x ROI; iRidium $3K summit 2,320 signups/5 customers $100K+ LTV | case-studies/02-abm.md |
| 160 | CSO Insights | 2019 | Structured forecasting analysis teams are 28% more likely to hit quota than manual judgment (5th Annual Sales Enablement Study) | foundations/06-revenue-operations.md |
| 161 | CNBC | 2023 | Notion 20M users (2022) to 100M+ (2025), 4M+ paying customers (Disruptor 50) | case-studies/01-product-led.md |
| 162 | CMX | 2025 | Community Industry Report; community-led growth metrics for SaaS (2025 and 2022 studies) | channels/05-community-led.md |
| 163 | BusinessWire | 2021 | Hashnode grew from 100,000 to 1M MAU in one year, hosting 60,000 active blogs (Series A funding announcement, vendor source) | case-studies/04-community-led.md |
| 164 | Business of Apps | 2026 | Slack 640,000 organizations (2019); Zoom 192,600 enterprise customers (2024) | case-studies/01-product-led.md |
| 165 | Belkins | 2024 | B2B reps hitting quota 27-30% (2024, via Autobound); cold email open/reply ranges | data/05-outbound-response-rates.md |
| 166 | Bain & Company | 2025 | Organic web traffic down 15-25% from zero-click search (Feb 2025) | channels/02-inbound.md |
| 167 | Atlassian | n/a | Jira/Confluence free up to 10 users, JSM 3 agents, 2GB storage (licensing docs 2020-24) | case-studies/01-product-led.md |
| 168 | Artemis GTM | 2026 | Pipeline metrics reference (coverage, velocity & KPIs) | data/01-gtm-metrics.md |
| 169 | AriseGTM | n/a | Agentic GTM operating model (lead re-assignment, model components) | agentic/00-agentic-gtm-overview.md |
| 170 | Antler | n/a | How to calculate TAM/SAM/SOM market size | data/02-market-segmentation.md |
| 171 | Andrew Chen | 2016 | Viral factor math k = X x Y, 1/(1-v) multiplier, k above 1.0 caveat; viral growth as network-effect flavor | channels/08-referral-viral.md |
| 172 | Amplemarket | 2026 | AI agent assembles per-prospect research brief a human would spend 15-30 min building by hand; personalization model trains over time (vendor source); 8 Best AI Sales Agents compared, scored across... | docs/flows/02-agentic-outbound.md; flows/02-agentic-outbound.md |
| 173 | Ambition | 2015 | 578 prospects, 6 initial replies, follow-ups added 67 more, ~12.6% total response (persistence in cold email) | case-studies/03-outbound.md |
| 174 | Aleph | 2025 | Median B2B SaaS CAC payback 16 months (2025), 18 months (2024), top quartile 6, by growth rate (342 companies) | channels/06-paid.md |
| 175 | Airbnb | 2014 | $25 travel credit each side, +$75 host bonus; relaunch lifted signups/bookings by over 300% per day, bookings +25% in some markets, up to 30% of first-time bookings (first-party Airbnb Engineering) | case-studies/05-referral-viral.md |
| 176 | Ahrefs | 2026 | Less than 2% of new pages reach Google top 10 within a year; ~5% with at least one backlink; 96.6% of clicks go to first-page results | channels/02-inbound.md |
| 177 | Adobe | n/a | Adobe Analytics used by SAP Concur in Demandbase ABM stack (account insight consolidation) | case-studies/02-abm.md |
| 178 | AIMultiple | n/a | The 7 layers of the Agentic AI Stack (framework reference) | agentic/01-agentic-stack.md |
| 179 | ZoomInfo | 2026 | 2026 B2B content marketing funnel guide; content misalignment most common reason B2B content programs underperform; "Most B2B content programs over-invest in TOFU and underinvest in MOFU and BOFU" | docs/foundations/07-gtm-funnel.md |
| 180 | Zoom blog | 2020 | 10M -> 200M -> 300M daily meeting participants Dec 2019-Apr 2020 | docs/case-studies/01-product-led.md |
| 181 | Ziel Lab | 2026 | Strategic ($250K+/$500K+ ACV) sales cycle 180-365 days | docs/data/06-sales-cycle-benchmarks.md |
| 182 | WordStream | 2025 | 2024 avg CPC $4.66, avg CPL $66.69; 2025 avg CPL $70.11 (+5.13% YoY), avg CPC $5.26, avg conversion rate 7.52%; traffic CPC ~$0.77 | docs/channels/06-paid.md |
| 183 | Warmer.ai | 2026 | Lead-gen agency: reply 2.3%->11.7% (409% lift), 47 qualified meetings booked; SDR agency: reply 4.7%->13.2%, meeting booking 0.9%->3.4%, 45->170 meetings (vendor source) | docs/case-studies/03-outbound.md |
| 184 | Valley pricing survey | 2026 | Cited for AI SDR pricing, costs and ROI (2026 pricing survey); AI SDR platforms $100-$5,000/mo range | docs/agentic/02-agentic-outbound.md |
| 185 | Uber | 2014 | Rider referral $20 ride credit each side (2014); driver referral $5 cash per new rider; referral channel reported 12x ROI (viral-loops, vendor) | docs/case-studies/05-referral-viral.md |
| 186 | TrafficGuard | 2026 | Brands lose 15-25% of annual ad spend to non-human traffic; search campaigns see 14-22% invalid traffic | docs/channels/06-paid.md |
| 187 | TheFlyy | 2020 | PayPal case: 1M users Mar 2000 -> 5M by Sept 2000; 7-10% daily growth; reached ~100M users; spent $60-70M on signups and referrals | docs/channels/08-referral-viral.md |
| 188 | State of Sales 2024 | 2024 | MQL->SQL 13% (5,500 sales professionals, 27 countries); 86% of business buyers more likely to buy when their goals are understood | docs/data/00-conversion-rate-benchmarks.md |
| 189 | Slacks | 2019 | Slack 12M+ daily active users, 6M+ paid seats (Sept 2019); 640K orgs (2019); ~40% of paid customers started on free tier | docs/case-studies/01-product-led.md |
| 190 | Seer Interactive | 2025 | Analyzed 3,119 queries across 42; AI Overviews CTR -61% where they appear (Nov 2025) | docs/channels/02-inbound.md |
| 191 | SearchLab | 2026 | Programmatic CPMs: display $1.50-$4.00, native $5-$12, in-stream video $12-$25, connected TV $25-$45 | docs/channels/06-paid.md |
| 192 | SalesHive | 2025 | Blended B2B cold reply 5.8% (down from 6.8% 2023); B2B SaaS 3-8%; positive reply >30% of replies; funnel stages visitor->lead 2.3%, lead->MQL 31%, MQL->SQL 13%, SQL->opp 30-59%, opp->close 22-30%, ... | docs/data/05-outbound-response-rates.md |
| 193 | SalesMotion DocuSign | 2026 | DocuSign enterprise ABM win rate 25% to 52% | docs/channels/09-abm.md |
| 194 | SalesMotion ABM Metrics | 2026 | ABM win rate 45% vs 18% non-ABM; win rates ~21% all / ~29% qualified / ~22% SaaS; 31% SMB vs 15% enterprise ($100K+ ACV) | docs/channels/09-abm.md |
| 195 | SalesGenie | 2026 | Cold call connect rate 2-3%; top SDRs reach 5-8% meetings | docs/data/05-outbound-response-rates.md |
| 196 | PostAffiliatePro | 2025 | Google Display ~$3 CPM vs Google Search ~$38 CPM | docs/channels/06-paid.md |
| 197 | Product Positioning Exercise | 2026 | April Dunford 5-step positioning exercise/framework (A Product Positioning Exercise); the classic fill-in-the-blanks template is a weak end product | docs/foundations/03-positioning-and-messaging.md |
| 198 | PixelsWithin | 2026 | Top 10% run 8-15% visitor-to-lead; company size inverts funnel (SMB ~2.3%, mid-market ~1.4%, enterprise ~0.7%) | docs/data/00-conversion-rate-benchmarks.md |
| 199 | PeerSignal | 2024 | RevOps sits under 1% of total B2B software headcount; ~12:1 sales reps to RevOps ratio; RevOps person supports a bigger seller base over time | docs/foundations/06-revenue-operations.md |
| 200 | OpenView | 2023 | Lenny's x OpenView x Pendo 1,000+ product survey (Aug 2023): freemium self-serve 3-8%, freemium+sales-assist 5-15%, free-trial 8-25%, signup 5% trial vs 9% freemium, 44% of trial companies route ov... | docs/case-studies/01-product-led.md |
| 201 | Onely ABM Agency | 2025 | 73% of B2B websites lost traffic; avg 34% YoY decline (zero-click search) | docs/channels/02-inbound.md |
| 202 | Notion | 2024 | 20M users, 1M+ community members (Sept 2023); ran support for 20M users with fewer than 10 customer success people; 20->200+ ambassadors in 23+ countries; 300k+ subreddit members and 32 recognized ... | docs/case-studies/04-community-led.md |
| 203 | Mailforge/Instantly via Martal | 2026 | 50-125 word emails earn ~50% higher reply rates; message-length sweet spot | docs/flows/02-agentic-outbound.md |
| 204 | HubSpot Upmarket Referral | 2026 | Referral/affiliate commission ~20% of first-year value | docs/channels/04-partner.md |
| 205 | Huble 111 ABM statistics | 2026 | ABM deal size ~20% larger than traditional demand gen; revenue attribution up to 73% of total revenue in some orgs | docs/channels/09-abm.md |
| 206 | Highspot Agentic AI | 2026 | Agentic AI 'is bigger than' [next gen GTM]; leaders must frame agentic AI culture; operating model toward intelligent automation with minimal human oversight | docs/agentic/00-agentic-gtm-overview.md |
| 207 | Gainsight Product-Led Growth Index | 2022 | Free trials using PQLs convert 2.8x higher | docs/case-studies/01-product-led.md |
| 208 | Extole 50 Referral Stats | 2026 | Global referral rate 2.35% of customers make at least one referral; top-quartile referral rate over 5%; referred customers convert 4x and retain 37% better (vendor source) | docs/channels/08-referral-viral.md |
| 209 | DigitalApplied CAC | 2026 | CAC self-serve $702 / sales-led $11,400 median; CAC payback 12 months (was 18-24 months 2020-22); B2B SaaS paid-search CAC $1,180 (Meta $890, TikTok $540, organic $348, outbound $3,210); paid-searc... | docs/data/01-gtm-metrics.md |
| 210 | Demand Gen Report 2025 ABM | 2025 | 71% of practitioners use an ABM strategy; top challenges marketing 43% and scaling 40%; 72% [rate ABM] + challenges | docs/channels/09-abm.md |
| 211 | Community ROI roundup | 2026 | Aggregated community ROI studies: 72% of community-led deals close within 90 days vs 42% for sales/marketing-led | docs/channels/05-community-led.md |
| 212 | ChurnZero Expansion Revenue | 2026 | Net revenue retention median ~102%; expansion revenue rate good/steady 10-30%; top performers exceed 60% of new MRR from expansion | docs/data/01-gtm-metrics.md |
| 213 | Business of Apps Zoom | 2026 | 192,600 enterprise customers in 2024 (Zoom statistics) | docs/case-studies/01-product-led.md |
| 214 | Business of Apps Slack | 2026 | 640,000 organizations used Slack in 2019 (Slack statistics) | docs/case-studies/01-product-led.md |
| 215 | Belkins 2025 | 2024 | B2B reps hitting quota 27-30% (2024); cold reply rates between 1% and 5% (Belkins 2025 via Haus Advisors) | docs/data/05-outbound-response-rates.md |
| 216 | Artemis GTM Pipeline Metrics | 2026 | Pipeline metrics reference: coverage, velocity, win rate, cycle length, board KPIs with formulas and directional benchmarks (as of 2026) | docs/data/01-gtm-metrics.md |
| 217 | AriseGTM Agentic GTM | 2026 | The Agentic GTM Operating Model: five specialist agents; autonomous AI agents as primary operators of high-volume GTM work, humans as designers/coaches | docs/agentic/00-agentic-gtm-overview.md |
| 218 | Anura | 2024 | Global ad-fraud losses above $140B in 2024; programmatic fraud ~50%, affiliate ~45%, general digital ~25% | docs/channels/06-paid.md |
| 219 | Ven | 2025 | Pipeline coverage ratio: 3x–5x open pipeline to quota rule of thumb; coverage by win-rate segment | docs/foundations/06-revenue-operations.md |
| 220 | SaaS Mag | 2026 | Partner-sourced revenue median 24%, top-quartile 40% for B2B SaaS (ecosystem-led growth) | docs/channels/04-partner.md |
| 221 | Peak | 2026 | SaaS M&A customer retention: gross dollar retention 85–95%, net dollar retention 110–120% | docs/data/04-pricing-as-gtm.md |
| 222 | The Cold Start Problem | 2021 | Viral growth as a flavor of network effect; cold-start theory of network effects (Andrew Chen) | docs/channels/08-referral-viral.md |
| 223 | Fullcast | 2026 | 3-layer AI GTM engine architecture (unified data / intelligence / orchestration); 5-step build blueprint; RevOps as natural owner; governance + human oversight; phased implementation | docs/agentic/07-building-a-gtm-copilot.md |
| 224 | Product Marketing Alliance | n/a | Messaging principles: lead with the problem, be specific, use the buyer's language, proof beats claims, one idea per asset | docs/skills/03-messaging.md |
| 225 | Geoffrey Moore | n/a | Crossing the Chasm positioning template: "For [target] who [need], our product is a [category] that [benefit]" | docs/skills/03-messaging.md |
| 226 | dailyintelservice | 2026 | BAB vs FAB vs 4Ps vs PASTOR: framework structures + decision-based selection (BAB transformation, FAB product logic, 4Ps short-form, PASTOR trust/long-form) | docs/skills/03-messaging.md |
| 227 | assetacademy.io | 2026 | Copywriting frameworks: PAS as beginner default, PASTOR skipped-Story step, copy-paste AI prompts | docs/skills/03-messaging.md |
| 228 | Ray Edwards | n/a | PAS and PASTOR frameworks (Problem/Agitate/Solution; Problem/Amplify/Story/Transformation/Offer/Response); honest agitation | docs/skills/03-messaging.md |
| 229 | readstoleads | n/a | From AIDA to PAS: AIDA attributed to E. St. Elmo Lewis; problem-first PAS structure | docs/skills/03-messaging.md |
| 230 | cloudclicks | n/a | Ray Edwards PASTOR framework acronym; role in trust-based selling | docs/skills/03-messaging.md |
| 231 | GTMnow | 2025 | GTM AI Operating System: coordinated AI-driven backbone connecting marketing, sales, CS, product; 4 build models (internal operators as system designers, cross-functional tiger teams, internal AI+GTM hires, external agencies); signal-to-action loops; winners design systems not buy tools | docs/agentic/08-gtm-os-architecture.md |
| 232 | GTM Savants | 2026 | 6-step AI go-to-market operating system (market/product/signal diagnosis, positioning as a system, messaging architecture, demand/sales/journey orchestration, adoption/retention/expansion, dashboards to decisions); competitive advantage = designing GTM as a system that learns faster than the market | docs/agentic/08-gtm-os-architecture.md |
| 233 | SaaS Hero | 2026 | Unified GTM OS: five core components (centralized data layer, RevOps workflows with SLAs, AI-driven insights, orchestration platforms, revenue KPIs); 5-step build framework; siloed teams 2x CAC + slower pipeline velocity, unified 20-40% CAC reduction + 2x workflow speed + 17%+ ARR predictability | docs/agentic/08-gtm-os-architecture.md |
| 234 | ZoomInfo GTM Predictions | 2026 | GTM evolves to a unified operating system; AI as "truth teller" exposing broken handoffs and misaligned metrics; unified data architecture non-negotiable; AI-native GTM (teams build custom purpose-specific agents); AI judged on revenue not promise | docs/agentic/08-gtm-os-architecture.md |

### Onboarding playbook batch (vetted 2026-08-26)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 235 | Amplitude (Product Benchmark Report) | 2025 | 7% day-7 return rule (top quartile); 69% of strong day-7 performers also strong at 3 months; more than 98% of value-less users churn within 2 weeks; top products retain 18.5% of users vs 3.8% median at 3 months; top-performer day-1 activation ~21%, day-7 ~12%, day-14 ~9% | docs/playbooks/customer-onboarding.md |
| 236 | DigitalApplied (TTV framework) | 2026 | Avg B2B SaaS activation 37.5%, median 37% (Userpilot 2024, 62 companies); vertical spread 54.8% AI/ML to 5% FinTech; mid-scale cliff 17.6% at $10-50M ARR; TTV tier ladder (under 24h / 1-3d / 4-7d / 8-14d / over 14d); four-instrument measurement stack; expansion ARR ~25% of new ARR (2022) to ~40% (2024); McKinsey late-2025: ~18% of B2B SaaS set explicit onboarding goals at outset | docs/playbooks/customer-onboarding.md |
| 237 | RevenueCat | 2026 | Activation-event validity: three tests (retention divergence, holds across segments, improving it moves outcomes); completion rate is a compliance metric, not activation | docs/playbooks/customer-onboarding.md |

235| Digital Silk | 2026 | 69% of startup project failures can be attributed to marketing-related causes when you combine ICP misalignment, messaging failure, poor positioning, and channel inefficiency | docs/foundations/03-positioning-and-messaging.md

### Founders / first-sales-hire batch (vetted 2026-08-27)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 238 | Techstars (Steve Walsh) | Mar 2026 | Founder-led sales critical in first two years; first sales hire often a mistake too early; hire when you have pattern recognition to teach it (who we sell to, how the conversation goes, why customers buy) | docs/roles/founders/index.md |
| 239 | Estner & Blank (MRR Unlocked) | Oct 2024 | Win first 10–100 customers yourself before hiring; first sales hire only after message-market fit; deal size drives structure (up to 10K ACV no SDRs, 10–100K mixed, over 100K specialized); full-cycle vs specialization by stage | docs/roles/founders/index.md |
| 240 | Stage 2 Capital (Liz Christo) | 2024 | First GTM hire isn't always sales (marketer/CS possible); define success for next 9–12 months + scorecard (max 5 must-haves); hire for your stage not too senior (Oracle vet unlikely to find first 5 customers); don't step away from founder-led sales too soon | docs/roles/founders/index.md |
| 241 | Hyrise (via Estner & Blank) | 2024 | Entrepreneur-in-residence profile for first seller: experimental mindset, quick adaptability, willing to do outbound; not a big-logo rep | docs/roles/founders/index.md |

### SDR role batch (vetted 2026-08-27)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 242 | SalesHive (SDR Best Practices) | Jul 2026 | Benchmark 15 meetings booked/month with 80% show rate (12 held); ~83% of SDRs miss quota monthly; cold-call connect 3-10% and ~2.3% dial-to-meeting; SDRs generate 46-73% of pipeline conversion; avg rep 94.4 activities/day; ~2 hrs/day selling; ramp 3.1 months, tenure 1.8 years; structured onboarding cuts ramp to 6-8 weeks; base ~$60K median, OTE ~$85K, base 60-70% of pay; multi-channel lifts engagement ~287% | docs/roles/sdrs/index.md |
| 243 | Crunchbase / The Bridge Group | Dec 2025 | Average SDR produces ~$3M pipeline/yr in SaaS; SDRs generate 30-45% of new revenue; outbound 15 SALs/month with ~20% drop-off (12 attended); 1 in 2 SALs leads to a next step; inbound low-intent conversion 5-10%, high-intent 75-80%; inbound rep handles ~15 leads/day | docs/roles/sdrs/index.md |
| 244 | Martal (SDR Salary) | 2026 | Standard SDR comp 60-70% base / 30-40% commission; OTE ~$85K (base ~$55K); average SDR turnover ~40%; commission-heavy plans drive burnout and poor lead quality | docs/roles/sdrs/index.md |
| 245 | SV Academy (SDR Salary Guide) | 2026 | SDR base salary by level: entry (0-1 yr) $50-60K, mid (1-3 yr) $60-75K, senior (3+ yr) $70-90K | docs/roles/sdrs/index.md |
## Claim-verification status

- ✅ **Seeded from RESEARCH files** (rows 1–39): each row's backing file holds the
  number. These are the ones I can stand behind today.
- 🔶 **Cited in live pages but not yet in my RESEARCH files** (rows 40 + the ABM
  rows pulled from the live page): the numbers render on the live site but I
  have NOT yet moved the source bytes into RESEARCH. These are the next to
  harden (flag before a page's True-gate final pass depends on them).
- ⛔ **FAILS the registry by design:** the TOFU 36%→15% and cost-per-dollar
  .24→.01 numbers circulating in-thread. Not in this registry, not in my
  RESEARCH files. Any page citing them must either get a real source row here
  or drop the claim. This is the system catching the exact class of thing that
  slips past eyeballs.

## Validation

`validate-sources` (when wired into Fizz's L1/L2) cross-checks every
`[Name](url)` citation and every `Source:`-table cell in `docs/` against this
registry. Unregistered citation → build failure.

### Contributing / open-source process batch (vetted 2026-08-27)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 246 | GitHub Open Source Guide | 2024 | Canonical contributor checklist: check the project's CONTRIBUTING docs before contributing, open substantial-work issues before starting, open draft PRs early, test changes, contribute in the project's style | docs/contributing.md |
| 247 | GitHub Octoverse | 2025 | March 2025 was the largest single month of new open-source contributors in GitHub history at 255,000 first-timers; nearly 20% of the top first-timer projects were AI-focused | docs/contributing.md |
| 248 | GitClear | 2024 | Most teams target PR review under 3 business days; recommend PRs stay under 500 diff delta | docs/contributing.md |
| 249 | Creative Commons | 2024 | Creative Commons aims to review pull requests within 5 business days | docs/contributing.md |
| 250 | The Mom Test (Rob Fitzpatrick) | 2013 | People lie to be nice; three rules of customer conversation; commitment is the only reliable signal; past behavior beats future predictions; market risk is the biggest startup risk; run the numbers to separate usage from politeness; learning goals for first 3-5 conversations | docs/foundations/02-icp-definition.md, docs/playbooks/outbound-from-zero.md |
| 251 | Predictable Revenue (Aaron Ross & Marylou Tyler) | 2011 | Ross's outbound methodology generated $100M in recurring revenue at Salesforce.com; Cold Calling 2.0 (cold email to get an internal referral, then a call, instead of cold calling); specialization (SDRs only prospect, MRRs only qualify inbound, AEs only close - no AE prospecting, no SDR closing); one SDR feeds 2-5 quota-carrying AEs (1:1 or 1:2 for large deals); cadence of 50-100 cold emails/day, 2-3 days/week (150-250/week) targeting ~8-12% response rate; a ramped full-time outbound rep generates 10-20 excellent leads/month; the biggest myth is that more salespeople drive revenue (lead generation does); 5-step process (build ICP, build list, run outbound email, sell the dream, pass the baton); Seeds/Nets/Spears lead-gen model (seeds = word-of-mouth/PR, nets = marketing programs, spears = targeted outbound) | docs/channels/01-outbound.md, docs/playbooks/outbound-from-zero.md, docs/foundations/02-icp-definition.md |

### Book ingest batch (vetted 2026-08-27)

| # | Source | As-of | Key claims | Backing |
|---|--------|-------|-----------|---------|
| 252 | Traction (Gabriel Weinberg & Justin Mares) | 2014 | Startups fail from lack of customers/traction, not lack of product ("Almost every failed startup has a product. What failed startups don't have is enough customers."); 50/50 rule - spend 50% of time on product and 50% on traction from the start; traction is measurable evidence of customer demand (downloads, subscribers, sales); 19 traction channels; the Bullseye framework (brainstorm across all 19 channels, rank into 3 rings - inner/potential/long shots, pick 3 from inner ring, test cheaply, then focus/double down on the single winning channel); most startups find the majority (~70%) of their traction from a single channel; Critical Path framework (define traction, set quantifiable goal, list essential milestones, focus resources strictly on it); the most underutilized channels in an industry are often the most promising; traction is the best way to improve startup success odds and attracts investors/talent/partners/publicity | docs/foundations/01-gtm-channels-bullseye.md, docs/channels/index.md, docs/foundations/00-what-is-gtm.md, docs/foundations/00-gtm-strategy-framework.md |
| 253 | Hacking Growth (Sean Ellis & Morgan Brown) | 2017 | Sean Ellis coined "growth hacker" in 2010 while at Dropbox; growth hacking is a systematic method (cross-functional team + data-driven experimentation), not a single silver-bullet hack. Test product-market fit before scaling marketing - survey users "How would you feel if you could no longer use this product?"; 40%+ "very disappointed" = must-have PMF, 25-40% = tweak product/messaging. The "aha moment" is when a user first experiences core value; direct ~30% of effort at getting more users to that moment faster. High-tempo testing: leading growth teams run 20-30 experiments/week; most experiments fail so volume matters; set a minimum tests-per-week cadence and start slow, then speed up. A 5% conversion improvement every month compounds to ~80% over a year. Growth teams must be cross-functional (product + engineering + data + marketing), report to execs, and own one funnel area (acquisition, activation, or retention) - a lone-ranger growth hacker is not enough. Growth hacking cycle: analyze data → insight → ideate → prioritize → test → review → decide; double down on winners, take "moonshots" past local maxima. Virality = Payload × Conversion Rate × Frequency; funnel spans acquisition, activation, retention, revenue, referral | docs/gtm-engineering/experimentation.md, docs/foundations/05-gtm-metrics.md, docs/foundations/07-gtm-funnel.md |
| 254 | From Impossible to Inevitable (Aaron Ross & Jason Lemkin) | Feb 2016 | Seven Ingredients of Hypergrowth (Nail a niche, Create predictable pipeline, Make sales scalable, Double your deal size, Do the time, Embrace employee ownership, Define your destiny); nail a niche before scaling - scaling too early wastes capital; predictable pipeline = seeds (existing customers)/nets (inbound marketing)/spears (targeted outbound); sales scalability = specialization into 4 functions (inbound lead handling, outbound prospecting, closing, post-sales/CS); balanced deal mix = run-rate average deals topped up with lumpier enterprise deals; ~8 years to $100M ARR in a great case, often longer, with a "Year of Hell" expected; playbook scope ~$500K-$4M ARR; ~30% of content is updated SaaStr material plus new case studies | docs/foundations/00-gtm-strategy-framework.md, docs/channels/01-outbound.md, docs/channels/02-inbound.md, docs/foundations/06-revenue-operations.md |
