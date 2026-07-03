<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, provide } from 'vue'
import flyoutShadowStyle from './readthedocs-flyout-shadow.css?inline'
import OutlineDepthToggle from './components/OutlineDepthToggle.vue'
import GlobalFooterBar from './components/GlobalFooterBar.vue'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition({
    update: async () => {
      isDark.value = !isDark.value
      await nextTick()
    },
    types: ['instant'],
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})

onMounted(async () => {
  // Inject custom styles into the Read the Docs flyout Shadow DOM,
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

<style>
:root:active-view-transition-type(instant) {
  * {
    view-transition-name: none !important;
  }

  &::view-transition-old(root),
  &::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  &::view-transition-old(root),
  &.dark::view-transition-new(root) {
    z-index: 1;
  }

  &::view-transition-new(root),
  &.dark::view-transition-old(root) {
    z-index: 9999;
  }
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

:root.locale-changing * {
  view-transition-name: none !important;
}
</style>
