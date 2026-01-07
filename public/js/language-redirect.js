(function () {
  if (typeof window === 'undefined') return;

  var storageKey = 'vegTips-lang';
  var path = window.location.pathname;
  var search = window.location.search;
  var hash = window.location.hash;
  var params = new URLSearchParams(search);
  var supported = ['en', 'zh', 'zh-hant', 'ja', 'ko', 'de', 'fr'];

  // detect current locale from URL path (base-agnostic)
  var match = path.match(/\/(zh-hant|zh|ja|ko|de|fr)(?:\/|$)/);
  var currentLocale = match ? match[1] : 'en';

  var isRoot = /\/(?:index\.html)?$/.test(path);
  var isLocaleRoot = /\/(zh-hant|zh|ja|ko|de|fr)(?:\/(?:index\.html)?|$)/.test(path) && /\/(zh-hant|zh|ja|ko|de|fr)\/?(?:index\.html)?$/.test(path);
  var isHome = isRoot || isLocaleRoot;

  var preferred = localStorage.getItem(storageKey) || '';
  var requested = params.get('lang');

  if (requested && supported.indexOf(requested) !== -1) {
    preferred = requested;
    localStorage.setItem(storageKey, preferred);
    params.delete('lang');
  }

  if (!preferred) {
    var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.indexOf('zh-hant') === 0 || browserLang.indexOf('zh-tw') === 0 || browserLang.indexOf('zh-hk') === 0 || browserLang.indexOf('zh-mo') === 0) preferred = 'zh-hant';
    else if (browserLang.indexOf('zh') === 0) preferred = 'zh';
    else if (browserLang.indexOf('ja') === 0) preferred = 'ja';
    else if (browserLang.indexOf('ko') === 0) preferred = 'ko';
    else if (browserLang.indexOf('de') === 0) preferred = 'de';
    else if (browserLang.indexOf('fr') === 0) preferred = 'fr';
    else preferred = 'en';
    localStorage.setItem(storageKey, preferred);
  }

  if (!isHome) return;

  var targetLocale = supported.indexOf(preferred) !== -1 ? preferred : 'en';
  var targetPath = targetLocale === 'en' ? '/' : '/' + targetLocale + '/';

  var needsRedirect = targetLocale !== currentLocale;
  if (!needsRedirect) return;

  var nextSearch = params.toString();
  var nextUrl = targetPath + (nextSearch ? '?' + nextSearch : '') + hash;
  window.location.replace(nextUrl);
})();
