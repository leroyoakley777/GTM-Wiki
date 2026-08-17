import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const sections = [
  {
    index: '01',
    title: 'Foundations',
    desc: 'What stays true in 2015 and in 2035. Strategy, ICP, positioning, the funnel, metrics. Load-bearing ideas.',
    to: '/docs/foundations',
  },
  {
    index: '02',
    title: 'Playbooks',
    desc: 'What to do against a specific situation. Outbound from zero, sales process, pricing experiments.',
    to: '/docs/playbooks',
  },
  {
    index: '03',
    title: 'Agentic GTM',
    desc: 'How to run the same playbooks with agents, harnesses, and automation. Where leverage is — and where guardrails stay.',
    to: '/docs/agentic',
  },
  {
    index: '04',
    title: 'Channels',
    desc: 'Where. Outbound, inbound, product-led, partner, community, paid, events, referral.',
    to: '/docs/channels',
  },
  {
    index: '05',
    title: 'Roles',
    desc: 'Who does it. Founder to VP Sales to Head of Platforms to investor.',
    to: '/docs/roles',
  },
  {
    index: '06',
    title: 'Tools & Data',
    desc: 'GTM tools landscape and benchmark data behind decisions.',
    to: '/docs/tools',
  },
  {
    index: '07',
    title: 'Case Studies',
    desc: 'Before → after. Working builds, the playbook applied, and transferable lessons.',
    to: '/docs/case-studies',
  },
  {
    index: '08',
    title: 'Flows',
    desc: 'Full end-to-end motions, runnable start to finish — artifacts at every step.',
    to: '/docs/flows',
  },
];

export default function Home() {
  return (
    <Layout title="Open GTM Wiki" description="Open-source Go-to-Market resource for founders, operators, and builders.">
      <div className="container">
        {/* HERO */}
        <header className="gtm-hero">
          <div className="gtm-hero__label">REFERENCE — NOT A BLOG</div>
          <h1>GTM Playbook</h1>
          <p className="gtm-hero__thesis">
            Every concept has a page. Every page ships the artifact itself —
            copy, math, tooling, agentic layer — not a summary of it.
            Every number is named and dated. From time to time a number goes
            stale. When that happens we update the page and the new source is
            named and dated too. Built for founders, operators, and the
            agents that run the motions.
          </p>
          <div className="gtm-hero__actions">
            <Link className="gtm-hero__action gtm-hero__action--primary" to={useBaseUrl('/docs/intro')}>
              Start reading
            </Link>
            <Link className="gtm-hero__action gtm-hero__action--ghost" to={useBaseUrl('/docs/map')}>
              See the map
            </Link>
          </div>
        </header>

        {/* STATS */}
        <div className="gtm-stats">
          <div className="gtm-stat">
            <div className="gtm-stat__number">8</div>
            <div className="gtm-stat__label">Reference sections</div>
          </div>
          <div className="gtm-stat">
            <div className="gtm-stat__number">60</div>
            <div className="gtm-stat__label">Pages and growing</div>
          </div>
          <div className="gtm-stat">
            <div className="gtm-stat__number">100%</div>
            <div className="gtm-stat__label">Open source</div>
          </div>
          <div className="gtm-stat">
            <div className="gtm-stat__number">0</div>
            <div className="gtm-stat__label">Vendor decks</div>
          </div>
        </div>

        {/* EXPLORE GRID */}
        <section className="gtm-explore">
          <div className="gtm-section-label">EXPLORE</div>
          <h2>Browse all eight domains</h2>
          <div className="gtm-grid">
            {sections.map((s) => (
              <Link key={s.index} className="gtm-card" to={useBaseUrl(s.to)}>
                <div className="gtm-card__index">{s.index} / SECTION</div>
                <div className="gtm-card__title">{s.title}</div>
                <p className="gtm-card__desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="gtm-manifesto">
          <div className="gtm-section-label">THESIS</div>
          <blockquote>
            Every production line has a Growth Formula: a sequence of volume metrics and
            conversion rates spanning the entire customer lifecycle. Benchmark it, fix the
            leak, compound.
          </blockquote>
          <div className="gtm-manifesto__cite">— REVENUE ARCHITECTURE, THE GROWTH FORMULA</div>
        </section>
      </div>
    </Layout>
  );
}
