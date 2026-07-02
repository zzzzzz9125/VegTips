<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted } from 'vue'
import flyoutShadowStyle from './readthedocs-flyout-shadow.css?inline'
import OutlineDepthToggle from './components/OutlineDepthToggle.vue'
import GlobalFooterBar from './components/GlobalFooterBar.vue'

const { isDark } = useData()

onMounted(async () => {
  // Inject custom styles into the Read the Docs flyout Shadow DOM,
  // following the same approach as otomad/OtomadHelper.
  if (!location.hostname.includes('readthedocs')) return

  const FLYOUT_TAG = 'readthedocs-flyout'

  // Wait for the flyout element to appear and have its shadow root ready
  await new Promise<void>((resolve) => {
    if (document.querySelector(FLYOUT_TAG)?.shadowRoot) {
      resolve()
      return
    }
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (
              node instanceof HTMLElement &&
              node.tagName.toLowerCase() === FLYOUT_TAG &&
              node.shadowRoot
            ) {
              resolve()
              observer.disconnect()
              return
            }
          }
        }
      }
    })
    observer.observe(document.body, { childList: true })
  })

  const flyout = (document.querySelector(FLYOUT_TAG) as HTMLElement).shadowRoot!
  const stylesheet = new CSSStyleSheet()
  stylesheet.replaceSync(flyoutShadowStyle)
  flyout.adoptedStyleSheets.push(stylesheet)
  flyout.firstElementChild?.setAttribute('part', 'flyout')
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-outline-before>
      <OutlineDepthToggle />
    </template>
    <template #layout-bottom>
      <GlobalFooterBar />
    </template>
  </DefaultTheme.Layout>
</template>
