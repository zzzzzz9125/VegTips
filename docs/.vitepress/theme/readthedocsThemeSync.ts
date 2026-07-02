const THEME_SYNC_FLAG = '__vpReadTheDocsThemeSyncInitialized'
const DATA_SCHEME_ATTR = 'data-scheme'

function isDarkTheme() {
  return document.documentElement.classList.contains('dark')
}

function updateRootThemeState(darkTheme: boolean) {
  const html = document.documentElement
  html.dataset.scheme = darkTheme ? 'dark' : 'light'
  html.setAttribute(DATA_SCHEME_ATTR, darkTheme ? 'dark' : 'light')
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
    updateRootThemeState(isDarkTheme())
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