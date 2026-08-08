// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'map'],
    },
    {
      type: 'category',
      label: 'Core Frameworks',
      collapsed: false,
      items: [
        'frameworks/gtm-strategy-framework',
        'frameworks/gtm-channels-bullseye',
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
      collapsed: false,
      items: [
        'playbooks/index',
        'playbooks/outbound-from-zero',
      ],
    },
    {
      type: 'category',
      label: 'Agentic GTM',
      collapsed: false,
      items: [
        'agentic/index',
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
      ],
    },
  ],
};

module.exports = sidebars;
