import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ac3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c18'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7ad'),
            routes: [
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
