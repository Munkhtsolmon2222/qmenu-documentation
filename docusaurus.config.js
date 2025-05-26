/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'гарын авлага',
  tagline: 'Qmenu гарын авлага, Зааврууд, Шинэчлэлтүүд, болон API',
  favicon: 'img/favicon.ico',

  url: 'https://help.qmenu.mn',
  baseUrl: '/',

  organizationName: 'Qmenu Help',
  projectName: 'Qmenu guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  future: { experimental_faster: true },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem'
        },
        blog: {
          path: 'blog',
          editLocalizedFiles: false,
          blogTitle: 'Шинэчлэлтүүд',
          blogDescription: 'Манай системийн өөрчлөлтүүд болон шинэчлэлтүүд',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'List blog',
          routeBasePath: 'blog',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**'
          ],
          postsPerPage: 6,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
          editUrl: 'https://github.com/Uuganaab/qmenu-help',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
        },
        theme: { customCss: './src/css/custom.css' }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/favicon.ico',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Заавар',
            className: 'custom-navbar-item'
          },
          {
            to: '/blog',
            label: 'Шинэчлэлт',
            position: 'left',
            className: 'custom-navbar-item'
          },
          {
            to: '/docs/category/qmenu-api',
            label: 'API',
            position: 'left',
            className: 'custom-navbar-item'
          }
        ]
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Бүтээгдэхүүн',
            items: [
              { label: 'Шийдлүүд', to: 'https://www.qmenu.mn/for-business#solution' },
              { label: 'Үнийн санал', to: 'https://www.qmenu.mn/for-business/#pricing' },
              { label: 'Интеграци', to: 'https://www.qmenu.mn/for-business/#products' },
              { label: 'Түгээмэл асуултууд', to: 'https://www.qmenu.mn/for-business/#faq' }
            ]
          },
          {
            title: 'Компани',
            items: [
              { label: 'Бидний тухай', to: 'https://www.qmenu.mn/for-business/' },
              { label: 'Мэдлэг', to: 'https://www.qmenu.mn/for-business/#knowledge' },
              { label: 'Холбоо барих', to: 'https://www.qmenu.mn/for-business/#contact' },
              { label: 'Түншүүд', to: 'https://www.qmenu.mn/for-business/#partners' }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} QMenu. Бүх эрх хуулиар хамгаалагдсан.`
      },
      prism: {
        additionalLanguages: [
          'ruby',
          'csharp',
          'php',
          'java',
          'powershell',
          'json',
          'bash',
          'dart',
          'objectivec',
          'r'
        ]
      },
      languageTabs: [
        { highlight: 'python', language: 'python', logoClass: 'python' },
        { highlight: 'bash', language: 'curl', logoClass: 'curl' },
        { highlight: 'csharp', language: 'csharp', logoClass: 'csharp' },
        { highlight: 'go', language: 'go', logoClass: 'go' },
        { highlight: 'javascript', language: 'nodejs', logoClass: 'nodejs' },
        { highlight: 'ruby', language: 'ruby', logoClass: 'ruby' },
        { highlight: 'php', language: 'php', logoClass: 'php' },
        { highlight: 'java', language: 'java', logoClass: 'java', variant: 'unirest' },
        { highlight: 'powershell', language: 'powershell', logoClass: 'powershell' },
        { highlight: 'dart', language: 'dart', logoClass: 'dart' },
        { highlight: 'javascript', language: 'javascript', logoClass: 'javascript' },
        { highlight: 'c', language: 'c', logoClass: 'c' },
        { highlight: 'objective-c', language: 'objective-c', logoClass: 'objective-c' },
        { highlight: 'ocaml', language: 'ocaml', logoClass: 'ocaml' },
        { highlight: 'r', language: 'r', logoClass: 'r' },
        { highlight: 'swift', language: 'swift', logoClass: 'swift' },
        { highlight: 'kotlin', language: 'kotlin', logoClass: 'kotlin' },
        { highlight: 'rust', language: 'rust', logoClass: 'rust' }
      ]
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['ru', 'en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ],
    'docusaurus-theme-openapi-docs'
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          qmenu: {
            specPath: 'api-swagger/qmenu.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            },
            downloadUrl: '/qmenu.yaml',
            hideSendButton: false,
            showSchemas: true
          }
        }
      }
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true
      })
    ]
  ]
}

export default config
