(function () {
  if (typeof window === 'undefined') return;

  const storageKey = 'vegTips-lang';
  const path = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;
  const params = new URLSearchParams(search);
  const supported = ['en', 'zh', 'zh-hant', 'ja', 'ko', 'de', 'fr'];

  // detect current locale from URL path (base-agnostic)
  const match = path.match(/\/(zh-hant|zh|ja|ko|de|fr)(?:\/|$)/);
  const currentLocale = match ? match[1] : 'en';

  const isRoot = /\/(?:index\.html)?$/.test(path);
  const isLocaleRoot = /\/(zh-hant|zh|ja|ko|de|fr)(?:\/(?:index\.html)?|$)/.test(path) && /\/(zh-hant|zh|ja|ko|de|fr)\/?(?:index\.html)?$/.test(path);
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
  const targetPath = targetLocale === 'en' ? '/' : '/' + targetLocale + '/';

  const needsRedirect = targetLocale !== currentLocale;
  if (!needsRedirect) return;

  const nextSearch = params.toString();
  const nextUrl = targetPath + (nextSearch ? '?' + nextSearch : '') + hash;
  window.location.replace(nextUrl);
})();
