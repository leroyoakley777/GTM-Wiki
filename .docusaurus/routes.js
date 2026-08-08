import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0bb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '13c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7f1'),
            routes: [
              {
                path: '/docs/agentic/',
                component: ComponentCreator('/docs/agentic/', '7c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/agentic/agentic-outbound',
                component: ComponentCreator('/docs/agentic/agentic-outbound', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/agentic/agentic-stack',
                component: ComponentCreator('/docs/agentic/agentic-stack', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/agentic/guardrails-and-measurement',
                component: ComponentCreator('/docs/agentic/guardrails-and-measurement', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contributing',
                component: ComponentCreator('/docs/contributing', '0cf'),
                exact: true
              },
              {
                path: '/docs/frameworks/',
                component: ComponentCreator('/docs/frameworks/', '82d'),
                exact: true
              },
              {
                path: '/docs/frameworks/gtm-channels-bullseye',
                component: ComponentCreator('/docs/frameworks/gtm-channels-bullseye', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/frameworks/gtm-strategy-framework',
                component: ComponentCreator('/docs/frameworks/gtm-strategy-framework', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map',
                component: ComponentCreator('/docs/map', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/playbooks/',
                component: ComponentCreator('/docs/playbooks/', 'fa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/playbooks/outbound-from-zero',
                component: ComponentCreator('/docs/playbooks/outbound-from-zero', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/founders/',
                component: ComponentCreator('/docs/roles/founders/', 'cb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/head-of-platforms/',
                component: ComponentCreator('/docs/roles/head-of-platforms/', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
