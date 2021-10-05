module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/ringo.png' }],
    ['meta', { name: 'twitter:card', content: 'https://guide.suisei.cc/ringo.png' }],
    ['meta', { name: 'twitter:site', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { name: 'twitter:image', content: 'https://guide.suisei.cc/ringo.png' }],
    ['meta', { name: 'twitter:description', content: 'This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Suisei Archive Guide | Treasure every moment' }],
    ['meta', { property: 'og:site_name', content: 'Suisei Archive Guide' }],
    ['meta', { property: 'og:url', content: 'https://guide.suisei.cc/' }],
    ['meta', { property: 'og:image', content: 'https://guide.suisei.cc/ringo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#bb4036' }],
    ['script',{ 
      async: true, 
      defer: true,   
      src: 'https://insight.suisei.cc/app.js',
      "data-cache": "true",
      "data-domains": "guide.suisei.cc",
      "data-website-id": "2083a443-de78-42e6-b0e4-78f637797310",
    }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '8732d493d581edbc05f7b1bd4075a2b8',
        indexName: 'suisei',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
          },
          '/zh/': {
            placeholder: '搜索文档',
          },
          '/zh-tw/': {
            placeholder: '搜尋',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-shiki',
      {
        Lang: [
          "bash",
          "powershell",
        ],
        theme: "material-default",
      },
    ],
  ],
  locales: {
    '/': {
      lang: "en-US",
      title: "Suisei Archive Guide",
      description: "This is a brief archiving guide written for Hoshiyomis to archive every stream of Suisei.",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: "Suisei Archive Guide",
      description: "为星咏者们书写的存档指南。",
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: "Suisei Archive Guide",
      description: "為星詠者提供一份存檔指南供參考。", // 修改为繁中
    },
  },
  themeConfig: {
    logo: '/ringo.png',
    contributors: false,
    lastUpdated: false,
    locales: {
      '/': {
        navbar: [
          {
            text: "Preparation",
            link: "/preparation/",
          },
          {
            text: "Tools",
            link: "/tools/",
            children: [
              "/tools/youtube/",
              "/tools/minyami/",
              "/tools/kkr/",
              "/tools/radigo/",
              "/tools/rget/",
              "/tools/m3u8/",
            ],
          },
          {
            text: "Storage",
            link: "/storage/",
            children: [
              "/storage/rclone/",
            ],
          },
          {
            text: "Credit",
            link: "/credit/",
          },
        ],
        sidebar: {
          "/": [""],
          "/tools/": [
            {
              text: "Tools",
              children: [
                "/tools/youtube/",
                "/tools/minyami/",
                "/tools/kkr/",
                "/tools/radigo/",
                "/tools/rget/",
                "/tools/m3u8/",
              ],
            }
          ],
          "/preparation/": ["/preparation/"],
          "/storage/": [
            {
              text: "Storage",
              children: [
                "/storage/rclone/"
              ]
            }
          ],
        },
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Languages',
      },
      '/zh/': {
        navbar: [
          {
            text: "准备工作",
            link: "/zh/preparation/",
          },
          {
            text: "常用工具",
            link: "/zh/tools/",
            children: [
              "/zh/tools/youtube/",
              "/zh/tools/minyami/",
              "/zh/tools/kkr/",
              "/zh/tools/radigo/",
              "/zh/tools/rget/",
              "/zh/tools/m3u8/",
            ],
          },
          {
            text: "存储管理",
            link: "/zh/storage/",
            children: [
              "/zh/storage/rclone/",
            ],
          },
          {
            text: "制作团队",
            link: "/zh/credit/",
          },
        ],
        sidebar: {
          "/zh/": [""],
          "/zh/tools/": [
            {
              text: "常用工具",
              children: [
                "/zh/tools/youtube/",
                "/zh/tools/minyami/",
                "/zh/tools/kkr/",
                "/zh/tools/radigo/",
                "/zh/tools/rget/",
                "/zh/tools/m3u8/",
              ],
            }
          ],
          "/zh/preparation/": ["/zh/preparation/"],
          "/zh/storage/": [
            {
              text: "存储管理",
              children: [
                "/zh/storage/rclone/"
              ]
            }
          ],
        },
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: '选择语言',
      },
      '/zh-tw/': {
        navbar: [
          {
            text: "準備工作", // 修改为繁中
            link: "/zh-tw/preparation/",
          },
          {
            text: "常用工具", // 修改为繁中
            link: "/zh-tw/tools/",
            children: [
              "/zh-tw/tools/youtube/",
              "/zh-tw/tools/minyami/",
              "/zh-tw/tools/kkr/",
              "/zh-tw/tools/radigo/",
              "/zh-tw/tools/rget/",
              "/zh-tw/tools/m3u8/",
            ],
          },
          {
            text: "儲存管理", // 修改为繁中
            link: "/zh-tw/storage/",
            children: [
              "/zh-tw/storage/rclone/",
            ],
          },
          {
            text: "製作團隊",
            link: "/zh-tw/credit/",
          },
        ],
        sidebar: {
          "/zh-tw/": [""],
          "/zh-tw/tools/": [
            {
              text: "常用工具", // 修改为繁中
              children: [
                "/zh-tw/tools/youtube/",
                "/zh-tw/tools/minyami/",
                "/zh-tw/tools/kkr/",
                "/zh-tw/tools/radigo/",
                "/zh-tw/tools/rget/",
                "/zh-tw/tools/m3u8/",
              ],
            }
          ],
          "/zh-tw/preparation/": ["/zh-tw/preparation/"],
          "/zh-tw/storage/": [
            {
              text: "儲存管理", // 修改为繁中
              children: [
                "/zh-tw/storage/rclone/"
              ]
            }
          ],
        },
        selectLanguageText: '選擇語言', // 修改为繁中
        selectLanguageName: '繁體中文', // 修改为繁中
        selectLanguageAriaLabel: '選擇語言', // 修改为繁中
      },
    },
  }
}
