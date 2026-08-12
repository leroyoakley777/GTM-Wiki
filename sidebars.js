// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gtmWiki: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'map',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      link: { type: 'doc', id: 'foundations/index' },
      items: [
        'foundations/gtm-strategy-framework',
        'foundations/icp-definition',
        'foundations/positioning-and-messaging',
        'foundations/gtm-channels-bullseye',
      ],
    },
    {
      type: 'category',
      label: 'Channels',
      collapsed: false,
      link: { type: 'doc', id: 'channels/index' },
      items: [],
    },
    {
      type: 'category',
      label: 'Playbooks',
      collapsed: false,
      link: { type: 'doc', id: 'playbooks/index' },
      items: [
        'playbooks/outbound-from-zero',
      ],
    },
    {
      type: 'category',
      label: 'Agentic GTM',
      collapsed: false,
      link: { type: 'doc', id: 'agentic/index' },
      items: [
        'agentic/agentic-stack',
        'agentic/agentic-outbound',
        'agentic/guardrails-and-measurement',
      ],
    },
    {
      type: 'category',
      label: 'Roles',
      collapsed: false,
      items: [
        'roles/founders/index',
        'roles/head-of-platforms/index',
        'roles/sdrs/index',
        'roles/aes/index',
        'roles/revops/index',
        'roles/heads-of-gtm/index',
        'roles/vps-sales/index',
        'roles/marketing-leaders/index',
        'roles/investors/index',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Data',
      collapsed: true,
      items: [
        'tools/index',
        'data/index',
        'glossary/index',
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: true,
      items: [
        'case-studies/index',
        'flows/index',
        'contributing',
      ],
    },
  ],
};

module.exports = sidebars;
