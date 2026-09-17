import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import stats from '../../pages/stats.json';

// Custom Footer: academic-brutalist metadata footer (DESIGN.md SITE face).
// Replaces the default theme footer outright — themeConfig.footer stays in
// docusaurus.config.js only as the link source of truth, rendered below.
export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const footer = siteConfig.themeConfig.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="gtm-footer">
      <div className="container">
        <div className="gtm-footer__meta">
          <span>{stats.pages} pages</span>
          <span>·</span>
          <span>{stats.sections} sections</span>
          <span>·</span>
          <span>open source</span>
          <span>·</span>
          <span>built in public</span>
        </div>
        <div className="gtm-footer__cols">
          {footer &&
            footer.links.map((group) => (
              <div key={group.title} className="gtm-footer__col">
                <div className="gtm-footer__title">{group.title}</div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href}>{item.label}</a>
                      ) : (
                        <Link to={useBaseUrl(item.to)}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="gtm-footer__col">
            <div className="gtm-footer__title">Contact</div>
            <ul>
              <li>
                <a href="mailto:leroy.oakley777@gmail.com">leroy.oakley777@gmail.com</a>
              </li>
              <li>
                <Link to={useBaseUrl('/docs/contributing')}>Contribute</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="gtm-footer__copy">
          Copyright © {year} GTM Wiki. No vendor decks.
        </div>
      </div>
    </footer>
  );
}
