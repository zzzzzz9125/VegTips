import { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VideoFxTable from './components/VideoFxTable.vue'
import ScriptApiExplorer from './components/ScriptApiExplorer.vue'
import ImageDirect from './components/ImageDirect.vue'
import MyLayout from './Layout.vue'
import './style.css'
import './view-transitions.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('VideoFxTable', VideoFxTable)
    app.component('ScriptApiExplorer', ScriptApiExplorer)
    app.component('ImageOnDemand', ImageDirect)

    if (!inBrowser) return

    const enableTransitions = () =>
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let resolver: PromiseWithResolvers<void> | undefined
    const locales = Object.keys(siteData.value.locales).filter(lang => lang !== 'root')

    router.onBeforeRouteChange = toWithSearchAndHash => {
      if (!globalThis.location) return
      const from = location.pathname,
        to = toWithSearchAndHash.replace(/[?#].*/, '')
      if (!enableTransitions() || from === to) return

      const localeChanged = isLocaleChanged(from, to, locales)
      resolver = Promise.withResolvers<void>()
      if (localeChanged) document.documentElement.classList.add('locale-changing')

      const vt = document.startViewTransition(async () => await resolver!.promise)
      vt.finished.finally(() => {
        document.documentElement.classList.remove('locale-changing')
      })
    }

    router.onAfterRouteChange = () => {
      if (!enableTransitions() || !resolver) return
      resolver.resolve()
      handleHashOpenAndScroll()
    }
  },
} satisfies Theme

function isLocaleChanged(from: string, to: string, locales: string[]) {
  const [fromLocale, toLocale] = [from, to].map(route =>
    locales.find(locale => route.startsWith('/' + locale))
  )
  return fromLocale !== toLocale
}

function handleHashOpenAndScroll() {
  const hash = location.hash.slice(1)
  if (!hash) return

  const targetId = decodeURIComponent(hash)
  const heading = document.getElementById(targetId)

  if (heading && heading.matches('details > summary > :is(h1, h2, h3, h4, h5, h6)')) {
    heading.closest('details')!.open = true
  }
}
