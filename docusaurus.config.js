// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open GTM Wiki',
  tagline: 'The best open-source Go-to-Market resource for founders, operators, and builders',
  favicon: 'img/favicon.png',

  url: 'https://gtm-wiki-nu.vercel.app',
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
          editUrl: 'https://github.com/leroyoakley777/gtm-wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.jpg',
      metadata: [{ name: 'color-scheme', content: 'light dark' }],
      navbar: {
        title: 'Open GTM Wiki',
        logo: {
          alt: 'Open GTM Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gtmWiki',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/leroyoakley777/gtm-wiki',
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
              { label: 'Foundations', to: '/docs/foundations' },
              { label: 'Playbooks', to: '/docs/playbooks' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/leroyoakley777/gtm-wiki' },
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
