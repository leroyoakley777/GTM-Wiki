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
    desc: 'How to run the same playbooks with agents, harnesses, and automation. Where leverage is, and where guardrails stay.',
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
    desc: 'Full end-to-end motions, runnable start to finish, artifacts at every step.',
    to: '/docs/flows',
  },
  {
    index: '09',
    title: 'Contribute',
    desc: 'Help improve the wiki by adding new pages, fixing errors, or suggesting improvements.',
    to: '/docs/contributing',
  },
];

const stats = {
  sections: '16',
  pages: '98',
  openSource: '100%',
};

export default function Home() {
  return (
    <Layout title="Open GTM Wiki" description="Open-source Go-to-Market resource for founders, operators, and builders. Last updated: 2026-08-27.">
      <div className="container">
        {/* HERO */}
        <header className="gtm-hero">
          <h1>Open GTM Wiki</h1>
          <p className="gtm-hero__thesis">
            building the best place to learn GTM
          </p>
          <p className="gtm-hero__actions">
            <Link className="gtm-hero__action gtm-hero__action--primary" to={useBaseUrl('/docs/intro')}>
              Start reading
            </Link>
            <Link className="gtm-hero__action gtm-hero__action--ghost" to={useBaseUrl('/docs/map')}>
              See the map
            </Link>
          </p>
          <p className="gtm-hero__note">
            Collaborating? Email <a href="mailto:leroy.oakley777@gmail.com">leroy.oakley777@gmail.com</a>.
          </p>
        </header>

        {/* STATS */}
        <div className="gtm-stats">
          <div className="gtm-stat">
            <div className="gtm-stat__number">{stats.pages}</div>
            <div className="gtm-stat__label">Pages and growing</div>
          </div>
          <div className="gtm-stat">
            <div className="gtm-stat__number">{stats.sections}</div>
            <div className="gtm-stat__label">Reference sections</div>
          </div>
          <div className="gtm-stat">
            <div className="gtm-stat__number">{stats.openSource}</div>
            <div className="gtm-stat__label">Open source</div>
          </div>
        </div>

        {/* EXPLORE GRID */}
        <section className="gtm-explore">
          <div className="gtm-section-label">EXPLORE</div>
          <h2>Browse all sections</h2>
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

        {/* RECENT UPDATES */}
        <section className="gtm-updates">
          <div className="gtm-section-label">RECENT UPDATES</div>
          <ul>
            <li><strong>2026-08-27</strong> - Added AE role page, updated og-image, refreshed homepage.</li>
            <li><strong>2026-08-26</strong> - Added OS-first architecture pages (engagement flow, examiner, autonomy ladder, quality gate, build order, controls, idea stub, intake-capture).</li>
            <li><strong>2026-08-20</strong> - Added GTM OS Architecture and Engagement Flow pages.</li>
            <li><strong>2026-08-18</strong> - Initial launch of the GTM Wiki with core frameworks and playbooks.</li>
          </ul>
        </section>

        {/* OUR VIEW */}
        <section className="gtm-manifesto">
          <div className="gtm-section-label">OUR VIEW</div>
          <p className="gtm-manifesto__text">
            A living, open-source guide to go-to-market strategy, tactics, and execution - built by practitioners, for practitioners.
          </p>
        </section>
      </div>
    </Layout>
  );
}
