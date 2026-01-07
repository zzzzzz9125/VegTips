import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS ? '/VegTips/' : '/'

const enNav = [
  { text: 'Vegas Troubleshooting', link: '/' },
  { text: 'Video FX List', link: '/videofxlist' },
  { text: 'UltraPaste! Extension', link: '/ultrapaste' }
]

const zhNav = [
  { text: 'Vegas 疑难杂症', link: '/zh/' },
  { text: '视频 FX 效果列表', link: '/zh/videofxlist' },
  { text: '超级粘贴! 扩展', link: '/zh/ultrapaste' }
]

const zhHantNav = [
  { text: 'Vegas 疑難雜症', link: '/zh-hant/' },
  { text: '影片 FX 效果列表', link: '/zh-hant/videofxlist' },
  { text: 'UltraPaste! 擴充套件', link: '/zh-hant/ultrapaste' }
]

const jaNav = [
  { text: 'Vegas トラブルシューティング', link: '/ja/' },
  { text: 'ビデオ FX リスト', link: '/ja/videofxlist' },
  { text: 'UltraPaste! 拡張機能', link: '/ja/ultrapaste' }
]

const koNav = [
  { text: 'Vegas 문제 해결', link: '/ko/' },
  { text: 'Video FX 목록', link: '/ko/videofxlist' },
  { text: 'UltraPaste! 확장', link: '/ko/ultrapaste' }
]

const deNav = [
  { text: 'Vegas Fehlerbehebung', link: '/de/' },
  { text: 'Video‑FX‑Liste', link: '/de/videofxlist' },
  { text: 'UltraPaste! Erweiterung', link: '/de/ultrapaste' }
]

const frNav = [
  { text: 'Vegas Dépannage', link: '/fr/' },
  { text: 'Liste des FX vidéo', link: '/fr/videofxlist' },
  { text: 'UltraPaste! Extension', link: '/fr/ultrapaste' }
]

const enSidebar = [
  {
    text: 'Articles',
    items: [
      { text: 'Vegas Troubleshooting', link: '/' },
      { text: 'Video FX List', link: '/videofxlist' },
      { text: 'UltraPaste! Extension', link: '/ultrapaste' }
    ]
  }
]

const zhSidebar = [
  {
    text: '文章',
    items: [
      { text: 'Vegas 疑难杂症', link: '/zh/' },
      { text: '视频 FX 效果列表', link: '/zh/videofxlist' },
      { text: '超级粘贴! 扩展', link: '/zh/ultrapaste' }
    ]
  }
]

const zhHantSidebar = [
  {
    text: '文章',
    items: [
      { text: 'Vegas 疑難雜症', link: '/zh-hant/' },
      { text: '影片 FX 效果列表', link: '/zh-hant/videofxlist' },
      { text: 'UltraPaste! 擴充套件', link: '/zh-hant/ultrapaste' }
    ]
  }
]

const jaSidebar = [
  {
    text: '記事',
    items: [
      { text: 'Vegas トラブルシューティング', link: '/ja/' },
      { text: 'Video FX リスト', link: '/ja/videofxlist' },
      { text: 'UltraPaste! 拡張機能', link: '/ja/ultrapaste' }
    ]
  }
]

const koSidebar = [
  {
    text: '문서',
    items: [
      { text: 'Vegas 문제 해결', link: '/ko/' },
      { text: 'Video FX 목록', link: '/ko/videofxlist' },
      { text: 'UltraPaste! 확장', link: '/ko/ultrapaste' }
    ]
  }
]

const deSidebar = [
  {
    text: 'Artikel',
    items: [
      { text: 'Vegas Fehlerbehebung', link: '/de/' },
      { text: 'Video‑FX‑Liste', link: '/de/videofxlist' },
      { text: 'UltraPaste! Erweiterung', link: '/de/ultrapaste' }
    ]
  }
]

const frSidebar = [
  {
    text: 'Articles',
    items: [
      { text: 'Vegas Dépannage', link: '/fr/' },
      { text: 'Liste des FX vidéo', link: '/fr/videofxlist' },
      { text: 'UltraPaste! Extension', link: '/fr/ultrapaste' }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  base,
  vite: {
    publicDir: '../public'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'VegTips',
      description: 'Some practical tips for VEGAS Pro',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'VegTips',
      description: 'VEGAS Pro 的实用技巧',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outlineTitle: '页面导航',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
      }
    },
    'zh-hant': {
      label: '繁體中文',
      lang: 'zh-Hant',
      title: 'VegTips',
      description: 'VEGAS Pro 的實用技巧',
      link: '/zh-hant/',
      themeConfig: {
        nav: zhHantNav,
        sidebar: zhHantSidebar,
        outlineTitle: '頁面導覽',
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'VegTips',
      description: 'VEGAS Pro の実用的なヒント',
      link: '/ja/',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        outlineTitle: 'ページナビゲーション',
        docFooter: {
          prev: '前へ',
          next: '次へ'
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'VegTips',
      description: 'VEGAS Pro 실용 팁',
      link: '/ko/',
      themeConfig: {
        nav: koNav,
        sidebar: koSidebar,
        outlineTitle: '페이지 탐색',
        docFooter: {
          prev: '이전',
          next: '다음'
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'VegTips',
      description: 'Praktische Tipps für VEGAS Pro',
      link: '/de/',
      themeConfig: {
        nav: deNav,
        sidebar: deSidebar,
        outlineTitle: 'Seitennavigation',
        docFooter: {
          prev: 'Zurück',
          next: 'Weiter'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'VegTips',
      description: 'Astuces pratiques pour VEGAS Pro',
      link: '/fr/',
      themeConfig: {
        nav: frNav,
        sidebar: frSidebar,
        outlineTitle: 'Navigation de page',
        docFooter: {
          prev: 'Précédent',
          next: 'Suivant'
        }
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['script', { src: base + 'js/lang-redirect.js', defer: '' }],
    ['script', { src: base + 'js/outline-depth.js', defer: '' }]
  ],
  themeConfig: {
    nav: enNav,
    sidebar: enSidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzzzzz9125/VegTips' }
    ],
    outline: [2, 4]
  }
})
