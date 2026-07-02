import { defineConfig } from 'vitepress'

const readTheDocsCanonicalUrl = process.env.READTHEDOCS_CANONICAL_URL

function getReadTheDocsBase() {
  if (!readTheDocsCanonicalUrl) {
    return undefined
  }

  try {
    const pathname = new URL(readTheDocsCanonicalUrl).pathname
    if (!pathname || pathname === '/') {
      return '/'
    }

    return pathname.endsWith('/') ? pathname : `${pathname}/`
  } catch {
    return undefined
  }
}

const isReadTheDocs = Boolean(process.env.READTHEDOCS)
const base = process.env.GITHUB_ACTIONS ? '/VegTips/' : (getReadTheDocsBase() ?? '/')

const enNav = [
  { text: 'Vegas Troubleshooting', link: '/' },
  { text: 'Video FX List', link: '/videofxlist' },
  { text: 'UltraPaste! Extension', link: '/ultrapaste' },
  { text: 'Script API', link: '/scriptapi' }
]

const zhNav = [
  { text: 'Vegas 疑难杂症', link: '/zh/' },
  { text: '视频 FX 效果列表', link: '/zh/videofxlist' },
  { text: '超级粘贴! 扩展', link: '/zh/ultrapaste' },
  { text: '脚本 API', link: '/zh/scriptapi' }
]

const zhHantNav = [
  { text: 'Vegas 疑難雜症', link: '/zh-hant/' },
  { text: '影片 FX 效果列表', link: '/zh-hant/videofxlist' },
  { text: 'UltraPaste! 擴充套件', link: '/zh-hant/ultrapaste' },
  { text: '指令碼 API', link: '/zh-hant/scriptapi' }
]

const jaNav = [
  { text: 'Vegas トラブルシューティング', link: '/ja/' },
  { text: 'ビデオ FX リスト', link: '/ja/videofxlist' },
  { text: 'UltraPaste! 拡張機能', link: '/ja/ultrapaste' },
  { text: 'スクリプト API', link: '/ja/scriptapi' }
]

const koNav = [
  { text: 'Vegas 문제 해결', link: '/ko/' },
  { text: 'Video FX 목록', link: '/ko/videofxlist' },
  { text: 'UltraPaste! 확장', link: '/ko/ultrapaste' },
  { text: '스크립트 API', link: '/ko/scriptapi' }
]

const deNav = [
  { text: 'Vegas Fehlerbehebung', link: '/de/' },
  { text: 'Video‑FX‑Liste', link: '/de/videofxlist' },
  { text: 'UltraPaste! Erweiterung', link: '/de/ultrapaste' },
  { text: 'Skript-API', link: '/de/scriptapi' }
]

const frNav = [
  { text: 'Vegas Dépannage', link: '/fr/' },
  { text: 'Liste des FX vidéo', link: '/fr/videofxlist' },
  { text: 'UltraPaste! Extension', link: '/fr/ultrapaste' },
  { text: 'API de script', link: '/fr/scriptapi' }
]

const ruNav = [
  { text: 'Vegas Устранение неполадок', link: '/ru/' },
  { text: 'Список видеоэффектов', link: '/ru/videofxlist' },
  { text: 'Расширение UltraPaste!', link: '/ru/ultrapaste' },
  { text: 'Скриптовый API', link: '/ru/scriptapi' }
]

const enSidebar = [
  {
    text: 'Articles',
    items: [
      { text: 'Vegas Troubleshooting', link: '/' },
      { text: 'Video FX List', link: '/videofxlist' },
      { text: 'UltraPaste! Extension', link: '/ultrapaste' },
      { text: 'Script API', link: '/scriptapi' }
    ]
  }
]

const zhSidebar = [
  {
    text: '文章',
    items: [
      { text: 'Vegas 疑难杂症', link: '/zh/' },
      { text: '视频 FX 效果列表', link: '/zh/videofxlist' },
      { text: '超级粘贴! 扩展', link: '/zh/ultrapaste' },
      { text: '脚本 API', link: '/zh/scriptapi' }
    ]
  }
]

const zhHantSidebar = [
  {
    text: '文章',
    items: [
      { text: 'Vegas 疑難雜症', link: '/zh-hant/' },
      { text: '影片 FX 效果列表', link: '/zh-hant/videofxlist' },
      { text: 'UltraPaste! 擴充套件', link: '/zh-hant/ultrapaste' },
      { text: '指令碼 API', link: '/zh-hant/scriptapi' }
    ]
  }
]

const jaSidebar = [
  {
    text: '記事',
    items: [
      { text: 'Vegas トラブルシューティング', link: '/ja/' },
      { text: 'Video FX リスト', link: '/ja/videofxlist' },
      { text: 'UltraPaste! 拡張機能', link: '/ja/ultrapaste' },
      { text: 'スクリプト API', link: '/ja/scriptapi' }
    ]
  }
]

const koSidebar = [
  {
    text: '문서',
    items: [
      { text: 'Vegas 문제 해결', link: '/ko/' },
      { text: 'Video FX 목록', link: '/ko/videofxlist' },
      { text: 'UltraPaste! 확장', link: '/ko/ultrapaste' },
      { text: '스크립트 API', link: '/ko/scriptapi' }
    ]
  }
]

const deSidebar = [
  {
    text: 'Artikel',
    items: [
      { text: 'Vegas Fehlerbehebung', link: '/de/' },
      { text: 'Video‑FX‑Liste', link: '/de/videofxlist' },
      { text: 'UltraPaste! Erweiterung', link: '/de/ultrapaste' },
      { text: 'Skript-API', link: '/de/scriptapi' }
    ]
  }
]

const frSidebar = [
  {
    text: 'Articles',
    items: [
      { text: 'Vegas Dépannage', link: '/fr/' },
      { text: 'Liste des FX vidéo', link: '/fr/videofxlist' },
      { text: 'UltraPaste! Extension', link: '/fr/ultrapaste' },
      { text: 'API de script', link: '/fr/scriptapi' }
    ]
  }
]

const ruSidebar = [
  {
    text: 'Материалы',
    items: [
      { text: 'Vegas Устранение неполадок', link: '/ru/' },
      { text: 'Список видеоэффектов', link: '/ru/videofxlist' },
      { text: 'Расширение UltraPaste!', link: '/ru/ultrapaste' },
      { text: 'Скриптовый API', link: '/ru/scriptapi' }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Read the Docs static hosting does not guarantee rewrite rules for extensionless URLs.
  cleanUrls: !isReadTheDocs,
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
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'VegTips',
      description: 'Практические советы для VEGAS Pro',
      link: '/ru/',
      themeConfig: {
        nav: ruNav,
        sidebar: ruSidebar,
        outlineTitle: 'Навигация по странице',
        docFooter: {
          prev: 'Назад',
          next: 'Далее'
        }
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['script', { src: `${base}js/language-redirect.js` }],
    ['script', { src: `${base}js/outline-depth.js` }],
    ['script', { src: `${base}js/hash-stabilizer.js` }]
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
