const THEME_SYNC_FLAG = '__vpReadTheDocsThemeSyncInitialized'
const SHADOW_SYNC_FLAG = '__vpReadTheDocsShadowSyncObserver'
const HOST_SELECTOR = 'readthedocs-flyout, readthedocs-search'

function isDarkTheme() {
  return document.documentElement.classList.contains('dark')
}

function styleReadTheDocsImages(root: ShadowRoot, darkTheme: boolean) {
  const images = root.querySelectorAll('img')

  for (const image of images) {
    const htmlImage = image as HTMLImageElement
    const altText = (htmlImage.getAttribute('alt') || '').toLowerCase()
    const source = htmlImage.getAttribute('src') || ''

    if (!altText.includes('read the docs') && !source.includes('data:image/svg+xml')) {
      continue
    }

    if (darkTheme) {
      htmlImage.style.filter = 'brightness(0) invert(1)'
      htmlImage.style.opacity = '0.96'
    } else {
      htmlImage.style.filter = ''
      htmlImage.style.opacity = ''
    }
  }
}

function syncHost(host: Element, darkTheme: boolean) {
  const shadowRoot = (host as HTMLElement).shadowRoot
  if (!shadowRoot) {
    return false
  }

  styleReadTheDocsImages(shadowRoot, darkTheme)

  if (!(host as HTMLElement)[SHADOW_SYNC_FLAG]) {
    const observer = new MutationObserver(() => {
      styleReadTheDocsImages(shadowRoot, isDarkTheme())
    })

    observer.observe(shadowRoot, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'class', 'style']
    })

    ;(host as HTMLElement)[SHADOW_SYNC_FLAG] = observer
  }

  return true
}

export function initReadTheDocsThemeSync() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const globalWindow = window as Window & {
    [THEME_SYNC_FLAG]?: boolean
    __vpReadTheDocsThemeSyncSchedule?: number
  }

  if (globalWindow[THEME_SYNC_FLAG]) {
    return
  }

  globalWindow[THEME_SYNC_FLAG] = true

  const syncAll = () => {
    const darkTheme = isDarkTheme()
    const hosts = document.querySelectorAll(HOST_SELECTOR)

    for (const host of hosts) {
      syncHost(host, darkTheme)
    }
  }

  const scheduleSync = () => {
    if (globalWindow.__vpReadTheDocsThemeSyncSchedule !== undefined) {
      window.clearTimeout(globalWindow.__vpReadTheDocsThemeSyncSchedule)
    }

    globalWindow.__vpReadTheDocsThemeSyncSchedule = window.setTimeout(() => {
      syncAll()
    }, 0)
  }

  const documentObserver = new MutationObserver(() => {
    scheduleSync()
  })

  documentObserver.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true
  })

  window.addEventListener('load', scheduleSync, { once: true })
  scheduleSync()
}