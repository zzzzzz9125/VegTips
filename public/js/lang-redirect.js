(function () {
  if (typeof window === 'undefined') return;

  const storageKey = 'vegTips-lang';
  const path = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;
  const params = new URLSearchParams(search);
  const supported = ['en', 'zh', 'zh-hant', 'ja', 'ko', 'de', 'fr'];

  const localeRE = /\/(zh-hant|zh|ja|ko|de|fr)(?:\/|$)/;
  const localeMatch = path.match(localeRE);
  const currentLocale = localeMatch ? localeMatch[1] : 'en';

  // prefer base derived from script src to be accurate on GitHub Pages (/VegTips/) and Netlify root
  const scriptBase = (() => {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i -= 1) {
      const src = scripts[i].getAttribute('src') || '';
      if (src.includes('lang-redirect.js')) {
        try {
          const { pathname } = new URL(src, window.location.href);
          const marker = '/js/lang-redirect.js';
          const idx = pathname.lastIndexOf(marker);
          if (idx >= 0) return pathname.slice(0, idx + 1);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  })();

  // derive base path with trailing slash
  const base = (() => {
    if (scriptBase) return scriptBase;
    if (localeMatch) return path.slice(0, localeMatch.index + 1);
    const lastSlash = path.lastIndexOf('/');
    if (lastSlash >= 0) {
      const candidate = path.slice(0, lastSlash + 1);
      return candidate || '/';
    }
    return '/';
  })();

  const escapeRE = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const baseEscaped = escapeRE(base);
  const isRoot = new RegExp(`^${baseEscaped}(?:index\\.html)?$`).test(path);
  const isLocaleRoot = new RegExp(`^${baseEscaped}(?:zh-hant|zh|ja|ko|de|fr)\\/?(?:index\\.html)?$`).test(path);
  const isHome = isRoot || isLocaleRoot;

  let preferred = localStorage.getItem(storageKey) || '';
  const requested = params.get('lang');

  if (requested && supported.includes(requested)) {
    preferred = requested;
    localStorage.setItem(storageKey, preferred);
    params.delete('lang');
  }

  if (!preferred) {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('zh-hant') || browserLang.startsWith('zh-tw') || browserLang.startsWith('zh-hk') || browserLang.startsWith('zh-mo')) preferred = 'zh-hant';
    else if (browserLang.startsWith('zh')) preferred = 'zh';
    else if (browserLang.startsWith('ja')) preferred = 'ja';
    else if (browserLang.startsWith('ko')) preferred = 'ko';
    else if (browserLang.startsWith('de')) preferred = 'de';
    else if (browserLang.startsWith('fr')) preferred = 'fr';
    else preferred = 'en';
    localStorage.setItem(storageKey, preferred);
  }

  if (!isHome) return;

  const targetLocale = supported.includes(preferred) ? preferred : 'en';
  const basePath = base.endsWith('/') ? base : base + '/';
  const targetPath = targetLocale === 'en' ? basePath : basePath + targetLocale + '/';

  const needsRedirect = targetLocale !== currentLocale;
  if (!needsRedirect) return;

  const nextSearch = params.toString();
  const nextUrl = targetPath + (nextSearch ? '?' + nextSearch : '') + hash;
  window.location.replace(nextUrl);
})();
