import { defineConfig } from 'vitepress'

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

const languageRedirectScript = `
(function () {
  if (typeof window === 'undefined') return;

  const storageKey = 'vegTips-lang';
  const path = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;
  const params = new URLSearchParams(search);
  const isZhPath = path.startsWith('/zh/') || path === '/zh';
  const isHome = path === '/' || path === '/index.html' || path === '/zh/' || path === '/zh';

  let preferred = localStorage.getItem(storageKey);
  const requested = params.get('lang');

  if (requested === 'zh' || requested === 'en') {
    preferred = requested;
    localStorage.setItem(storageKey, preferred);
    params.delete('lang');
  }

  if (!preferred) {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    preferred = isZhPath || browserLang.startsWith('zh') ? 'zh' : 'en';
    localStorage.setItem(storageKey, preferred);
  }

  if (!isHome) return;

  const targetLocale = preferred === 'zh' ? 'zh' : 'en';
  const onZh = isZhPath;
  const targetPath = targetLocale === 'zh' ? '/zh/' : '/';

  const needsRedirect = (targetLocale === 'zh' && !onZh) || (targetLocale === 'en' && onZh);
  if (!needsRedirect) return;

  const nextSearch = params.toString();
  const nextUrl = targetPath + (nextSearch ? '?' + nextSearch : '') + hash;
  window.location.replace(nextUrl);
})();
`

const outlineDepthScript = `
(function () {
  if (typeof document === 'undefined') return;

  try {
    const key = 'vegTips-outline-depth';
    const saved = localStorage.getItem(key);
    const depth = saved && ['2', '3', '4'].includes(saved) ? saved : '2';
    document.documentElement.dataset.outlineDepth = depth;
    if (!saved) localStorage.setItem(key, depth);
  } catch (err) {
    document.documentElement.dataset.outlineDepth = '2';
  }
})();
`

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  base: '/vegtips/',
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
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'script',
      {},
      languageRedirectScript
    ],
    [
      'script',
      {},
      outlineDepthScript
    ]
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
