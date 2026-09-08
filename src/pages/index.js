import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import stats from './stats.json';

const paths = [
  {
    kicker: '01 / Start',
    title: 'Start here',
    desc: 'What GTM is, how the wiki is laid out, and the first pages worth reading.',
    to: '/docs/intro',
  },
  {
    kicker: '02 / Do the job',
    title: 'Run a motion',
    desc: 'Playbooks and end-to-end flows: outbound, inbound, sales process, pricing.',
    to: '/docs/playbooks',
  },
  {
    kicker: '03 / Look it up',
    title: 'Find a number',
    desc: 'Conversion, cycle time, outbound reply rates, pricing, and funnel benchmarks.',
    to: '/docs/data',
  },
];

const sections = [
  { index: '01', title: 'Foundations', desc: 'Strategy, ICP, positioning, funnel, metrics.', to: '/docs/foundations' },
  { index: '02', title: 'Copywriting', desc: 'Positioning, messaging, and frameworks. No recommended email copy.', to: '/docs/copywriting' },
  { index: '03', title: 'Playbooks', desc: 'What to do against a named situation.', to: '/docs/playbooks' },
  { index: '04', title: 'Agentic GTM', desc: 'Same playbooks with agents and guardrails.', to: '/docs/agentic' },
  { index: '05', title: 'Channels', desc: 'Outbound, inbound, PLG, partner, paid, referral.', to: '/docs/channels' },
  { index: '06', title: 'Roles', desc: 'Founder to VP Sales to Head of Platforms.', to: '/docs/roles' },
  { index: '07', title: 'Tools & Data', desc: 'Stack map and the benchmarks behind calls.', to: '/docs/tools' },
  { index: '08', title: 'Case Studies', desc: 'Before to after. What transferred.', to: '/docs/case-studies' },
  { index: '09', title: 'Flows', desc: 'Full motions with artifacts at each step.', to: '/docs/flows' },
];

function latestLine() {
  const first = (stats.updates || [])[0];
  if (!first) return `Updated ${stats.generatedAt}`;
  const names = (first.items || []).slice(0, 3).map((i) => i.label);
  if (names.length === 0) return `${first.date} · ${first.text}`;
  return `${first.date} · ${names.join(', ')}`;
}

export default function Home() {
  const updates = stats.updates || [];
  return (
    <Layout description={`Playbooks, benchmarks, and agentic loops for B2B GTM. Last updated ${stats.generatedAt}.`}>
      <div className="container">
        <header className="gtm-hero">
          <div className="gtm-hero__label">Living reference · {stats.pages} pages</div>
          <h1>GTM Wiki</h1>
          <p className="gtm-hero__thesis">
            Playbooks, benchmarks, and agentic loops for B2B go-to-market.
          </p>
          <p className="gtm-hero__actions">
            <Link className="gtm-hero__action gtm-hero__action--primary" to={useBaseUrl('/docs/intro')}>
              Start reading
            </Link>
            <Link className="gtm-hero__action gtm-hero__action--ghost" to={useBaseUrl('/docs/map')}>
              See the map
            </Link>
          </p>
        </header>

        <div className="gtm-ship">
          <div className="gtm-ship__kicker">Last ship</div>
          <div className="gtm-ship__line">{latestLine()}</div>
          <div className="gtm-ship__meta">{stats.pages} pages · {stats.sections} sections · open source</div>
        </div>

        <section className="gtm-paths">
          <div className="gtm-section-label">Three doors</div>
          <h2>Pick a job, not a catalog</h2>
          <div className="gtm-paths__grid">
            {paths.map((p) => (
              <Link key={p.to} className="gtm-path" to={useBaseUrl(p.to)}>
                <div className="gtm-path__kicker">{p.kicker}</div>
                <div className="gtm-path__title">{p.title}</div>
                <p className="gtm-path__desc">{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="gtm-updates">
          <div className="gtm-section-label">Recent ships</div>
          <ul className="gtm-updates__list">
            {updates.map((u) => (
              <li key={u.date} className="gtm-updates__row">
                <div className="gtm-updates__date">{u.date}</div>
                <div className="gtm-updates__body">
                  {(u.items || []).length > 0 ? (
                    <div className="gtm-updates__pages">
                      {u.items.slice(0, 5).map((item) => (
                        <Link key={item.href} to={useBaseUrl(item.href)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="gtm-updates__text">{u.text}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="gtm-explore">
          <div className="gtm-section-label">All sections</div>
          <h2>Browse the shelf</h2>
          <div className="gtm-grid">
            {sections.map((s) => (
              <Link key={s.index} className="gtm-card" to={useBaseUrl(s.to)}>
                <div className="gtm-card__index">{s.index} / section</div>
                <div className="gtm-card__title">{s.title}</div>
                <p className="gtm-card__desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="gtm-foot">
          <div>Built in public. {stats.pages} pages, no vendor decks.</div>
          <div>
            <Link to={useBaseUrl('/docs/contributing')}>Contribute</Link>
            {' · '}
            <a href="mailto:leroy.oakley777@gmail.com">leroy.oakley777@gmail.com</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
