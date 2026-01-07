(function () {
  if (typeof window === 'undefined') return;

  const storageKey = 'vegTips-lang';
  const path = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;
  const params = new URLSearchParams(search);
  const supported = ['en', 'zh', 'zh-hant', 'ja', 'ko', 'de', 'fr'];

  // Respect VitePress base (GitHub Pages uses /VegTips/, Netlify uses /)
  const base = (() => {
    const raw = (window.__VP_SITE_DATA__ && window.__VP_SITE_DATA__.site && window.__VP_SITE_DATA__.site.base) || '/';
    const withSlash = raw.endsWith('/') ? raw : raw + '/';
    return withSlash.startsWith('/') ? withSlash : '/' + withSlash;
  })();
  const baseNoSlash = base.endsWith('/') ? base.slice(0, -1) : base;

  const stripBase = (p) => {
    if (p.startsWith(base)) return p.slice(base.length);
    if (baseNoSlash && p.startsWith(baseNoSlash)) return p.slice(baseNoSlash.length);
    return p;
  };

  // Normalize path relative to base for locale detection
  const relative = stripBase(path);
  const relWithSlash = relative.startsWith('/') ? relative : '/' + relative;

  // detect current locale from URL path (after base)
  const match = relWithSlash.match(/^\/(zh-hant|zh|ja|ko|de|fr)(?:\/|$)/);
  const currentLocale = match ? match[1] : 'en';

  const isRoot = relWithSlash === '/' || relWithSlash === '/index.html';
  const isLocaleRoot = /^(?:\/(zh-hant|zh|ja|ko|de|fr))(?:\/(?:index\.html)?|\/?$)/.test(relWithSlash);
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
  const basePath = base === '/' ? '/' : base;
  const targetPath = targetLocale === 'en' ? basePath : basePath + targetLocale + '/';

  const needsRedirect = targetLocale !== currentLocale;
  if (!needsRedirect) return;

  const nextSearch = params.toString();
  const nextUrl = targetPath + (nextSearch ? '?' + nextSearch : '') + hash;
  window.location.replace(nextUrl);
})();
