// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open GTM Wiki',
  tagline: 'The best open-source Go-to-Market resource for founders, operators, and builders',
  favicon: 'img/favicon.ico',

  url: 'https://gtmwiki.com',
  baseUrl: '/',

  organizationName: 'opengtm',
  projectName: 'gtm-wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/opengtm/gtm-wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.jpg',
      navbar: {
        title: 'Open GTM Wiki',
        logo: {
          alt: 'Open GTM Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/opengtm/gtm-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              { label: 'Getting Started', to: '/docs/intro' },
              { label: 'Frameworks', to: '/docs/frameworks' },
              { label: 'Playbooks', to: '/docs/playbooks' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/opengtm/gtm-wiki' },
              { label: 'Contributing', to: '/docs/contributing' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open GTM Wiki. Built with ❤️ for the community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;