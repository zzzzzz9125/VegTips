(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  var CHECK_INTERVAL_MS = 120;
  var MAX_RETRY = 36;
  var STABLE_ROUNDS = 4;
  var RETRY_DELAY_MS = 80;

  var runToken = 0;
  var lastObservedPath = window.location.pathname + window.location.search;
  var lastMutationAt = 0;
  var mutationObserver = null;

  function decodeHash(hash) {
    if (!hash || hash.length < 2) return '';
    var raw = hash.slice(1);
    try {
      return decodeURIComponent(raw);
    } catch (err) {
      return raw;
    }
  }

  function getAnchorTarget() {
    var id = decodeHash(window.location.hash);
    if (!id) return null;

    var byId = document.getElementById(id);
    if (byId) return byId;

    var escaped = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(id) : id.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, '\\$1');
    var byName = document.querySelector('[name="' + escaped + '"]');
    return byName || null;
  }

  function scheduleStabilization(delay) {
    var wait = typeof delay === 'number' ? delay : 0;
    window.setTimeout(function () {
      stabilizeHashPosition();
    }, wait);
  }

  function getHeaderOffset() {
    var nav = document.querySelector('.VPNav') || document.querySelector('.VPNavBar') || document.querySelector('header');
    var navHeight = 0;

    if (nav && typeof nav.getBoundingClientRect === 'function') {
      var rect = nav.getBoundingClientRect();
      navHeight = Math.max(0, Math.round(rect.height));
    }

    var cssNavHeight = 0;
    try {
      var cssValue = getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height').trim();
      if (cssValue) {
        cssNavHeight = Math.round(parseFloat(cssValue));
      }
    } catch (err) {}

    var baseOffset = Math.max(navHeight, cssNavHeight);
    return baseOffset > 0 ? baseOffset + 12 : 72;
  }

  function alignTargetWithOffset(target) {
    var offset = getHeaderOffset();
    var targetTop = window.scrollY + target.getBoundingClientRect().top;
    var nextY = Math.max(0, Math.round(targetTop - offset));
    window.scrollTo({ top: nextY, behavior: 'auto' });
    return offset;
  }

  function stabilizeHashPosition() {
    if (!window.location.hash) return;

    runToken += 1;
    var token = runToken;
    var retries = 0;
    var stableCount = 0;
    var prevTop = null;
    var timerId = null;

    function cleanup() {
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
      window.removeEventListener('wheel', cancelByUser, true);
      window.removeEventListener('touchstart', cancelByUser, true);
      window.removeEventListener('keydown', cancelByUser, true);
    }

    function cancelByUser() {
      if (token !== runToken) return;
      runToken += 1;
      cleanup();
    }

    function tick() {
      if (token !== runToken) {
        cleanup();
        return;
      }

      var target = getAnchorTarget();
      if (!target) {
        retries += 1;
        if (retries > MAX_RETRY) {
          cleanup();
          return;
        }
        timerId = window.setTimeout(tick, RETRY_DELAY_MS);
        return;
      }

      var offset = alignTargetWithOffset(target);

      var currentTop = Math.round(target.getBoundingClientRect().top);
      if (prevTop !== null && Math.abs(currentTop - prevTop) <= 1 && Math.abs(currentTop - offset) <= 2) {
        stableCount += 1;
      } else {
        stableCount = 0;
      }
      prevTop = currentTop;

      retries += 1;
      if (stableCount >= STABLE_ROUNDS || retries > MAX_RETRY) {
        cleanup();
        return;
      }

      timerId = window.setTimeout(tick, CHECK_INTERVAL_MS);
    }

    window.addEventListener('wheel', cancelByUser, { capture: true, passive: true });
    window.addEventListener('touchstart', cancelByUser, { capture: true, passive: true });
    window.addEventListener('keydown', cancelByUser, true);
    tick();
  }

  function watchContentChanges() {
    var root = document.getElementById('app') || document.body;
    if (!root || mutationObserver) return;

    mutationObserver = new MutationObserver(function () {
      if (!window.location.hash) return;
      var now = Date.now();
      if (now - lastMutationAt < 250) return;
      lastMutationAt = now;
      scheduleStabilization(40);
    });

    mutationObserver.observe(root, { childList: true, subtree: true });
  }

  window.addEventListener('DOMContentLoaded', function () {
    watchContentChanges();
    scheduleStabilization(0);
    scheduleStabilization(240);
  });

  window.addEventListener('load', function () {
    scheduleStabilization(0);
  });

  window.addEventListener('hashchange', function () {
    scheduleStabilization(0);
    scheduleStabilization(200);
  });

  window.setInterval(function () {
    var currentPath = window.location.pathname + window.location.search;
    if (currentPath !== lastObservedPath) {
      lastObservedPath = currentPath;
      watchContentChanges();
      if (window.location.hash) {
        scheduleStabilization(80);
        scheduleStabilization(320);
      }
    }
  }, 300);
})();
