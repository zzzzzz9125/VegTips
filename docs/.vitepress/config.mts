import { defineConfig } from 'vitepress'

const enNav = [
  { text: 'Home', link: '/' },
  { text: 'Vegas Troubleshooting', link: '/vegas-troubleshooting' }
]

const zhNav = [
  { text: '首页', link: '/zh/' },
  { text: 'Vegas 疑难杂症', link: '/zh/vegas-troubleshooting' }
]

const enSidebar = [
  {
    text: 'Examples',
    items: [
      { text: 'Vegas Troubleshooting', link: '/vegas-troubleshooting' }
    ]
  }
]

const zhSidebar = [
  {
    text: '示例',
    items: [
      { text: 'Vegas 疑难杂症', link: '/zh/vegas-troubleshooting' }
    ]
  }
]

const languageRedirectScript = `
(function () {
  if (typeof window === 'undefined') return;

  const path = window.location.pathname;
  const isZhPath = path.startsWith('/zh/');
  const search = window.location.search;
  const hash = window.location.hash;
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();

  let preferred = localStorage.getItem('vegTips-lang');

  if (!preferred) {
    preferred = isZhPath || browserLang.startsWith('zh') ? 'zh' : 'en';
    localStorage.setItem('vegTips-lang', preferred);

    if (preferred === 'zh' && !isZhPath) {
      window.location.replace('/zh' + path + search + hash);
      return;
    }
  }

  const current = isZhPath ? 'zh' : 'en';

  if (preferred !== current) {
    preferred = current;
    localStorage.setItem('vegTips-lang', preferred);
  }

  if (preferred === 'zh' && !isZhPath) {
    window.location.replace('/zh' + path + search + hash);
  }
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
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'VegTips',
      description: 'Some practical tips for VEGAS Pro'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'VegTips',
      description: 'VEGAS Pro 的实用技巧',
      link: '/zh/'
    }
  },
  head: [
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
      { icon: 'github', link: 'https://github.com/zzzzzz9125' }
    ],
    locales: {
      root: {
        nav: enNav,
        sidebar: enSidebar
      },
      zh: {
        nav: zhNav,
        sidebar: zhSidebar,
        outlineTitle: '页面导航',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
      }
    },
    outline: [2, 4]
  }
})
