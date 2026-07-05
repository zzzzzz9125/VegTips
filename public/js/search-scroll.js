(function () {
  'use strict'
  var KEY = '__vp_search_query'

  // ---- capture search query when user clicks a result ----
  document.addEventListener('click', function (e) {
    var el = e.target.closest('.VPLocalSearchBox .result') || e.target.closest('[data-search-result]')
    if (!el) return
    // try to extract the query from the still-visible search input
    var input = document.querySelector('.VPLocalSearchBox input[type="search"], .DocSearch-Input')
    if (input && input.value) {
      sessionStorage.setItem(KEY, input.value.trim())
    }
  }, true)

  // ---- on page load, scroll to match if query was stored ----
  function scrollToMatch() {
    var query = sessionStorage.getItem(KEY)
    if (!query) return
    sessionStorage.removeItem(KEY)

    // Give the page a moment to render (VitePress hydration)
    setTimeout(function () {
      var body = document.querySelector('.vp-doc')
      if (!body) return
      var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null)
      var node, found = null
      var lower = query.toLowerCase()
      while ((node = walker.nextNode())) {
        if (node.textContent && node.textContent.toLowerCase().indexOf(lower) !== -1) {
          found = node
          break
        }
      }
      if (!found) return

      // Walk up to nearest block-level parent for better scroll target
      var target = found.parentElement
      while (target && target !== body && getComputedStyle(target).display === 'inline') {
        target = target.parentElement
      }

      if (target && target !== body) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // Brief highlight
        target.style.transition = 'background 0.3s'
        target.style.background = 'var(--vp-c-brand-soft, rgba(100,108,255,0.14))'
        setTimeout(function () {
          target.style.background = ''
        }, 2000)
      }
    }, 300)
  }

  // Handle both initial load and client-side navigation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollToMatch)
  } else {
    scrollToMatch()
  }

  // Also handle VitePress client-side route changes
  var pushState = history.pushState
  history.pushState = function () {
    pushState.apply(history, arguments)
    scrollToMatch()
  }
  window.addEventListener('popstate', scrollToMatch)
})()
