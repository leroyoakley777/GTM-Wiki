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
        'foundations/revenue-architecture',
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
      items: [
        'channels/outbound',
        'channels/inbound',
        'channels/product-led',
        'channels/partner',
        'channels/community-led',
        'channels/paid',
        'channels/events-field',
        'channels/abm',
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
      collapsed: false,
      link: { type: 'doc', id: 'playbooks/index' },
      items: [
        'playbooks/outbound-from-zero',
        'playbooks/inbound-content-engine',
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
        'agentic/agent-vs-human-workflows',
        'agentic/building-a-gtm-copilot',
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      collapsed: false,
      link: { type: 'doc', id: 'skills/index' },
      items: [
        'skills/prospecting',
        'skills/outbound',
        'skills/messaging',
        'skills/signals',
        'skills/abm',
        'skills/pricing',
        'skills/seo',
        'skills/ads',
        'skills/revops',
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
        'case-studies/product-led',
        'case-studies/abm',
        'case-studies/outbound',
        'case-studies/community-led',
        'case-studies/referral-viral',
        'flows/index',
        'flows/outbound',
        'flows/agentic-outbound',
        'flows/sales-process-meddpicc',
        'flows/buyers-journey',
        'contributing',
      ],
    },
  ],
};

module.exports = sidebars;
