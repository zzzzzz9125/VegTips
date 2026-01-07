<template>
  <div class="outline-depth-toggle">
    <div class="row">
      <span class="label">{{ labels.depth }}</span>
      <div class="depth-slider" role="group" :aria-label="labels.depth">
        <input
          type="range"
          min="2"
          max="4"
          step="1"
          :value="depth"
          @input="setDepthFromRange($event)"
        />
      </div>
    </div>
    <label class="row auto-expand">
      <span class="label">{{ labels.autoExpand }}</span>
      <span class="switch">
        <input
          type="checkbox"
          :checked="autoExpand"
          @change="toggleAutoExpand($event)"
          role="switch"
          :aria-checked="autoExpand"
          :aria-label="labels.autoExpand"
        />
        <span class="slider" aria-hidden="true"></span>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const storageKey = 'vegTips-outline-depth'
const storageKeyAuto = 'vegTips-outline-auto-expand'
const levels = [2, 3, 4]
const depth = ref(2)
const expandedH2Href = ref<string | null>(null)
const autoExpand = ref(true)
const { lang } = useData()
const route = useRoute()
let outlineObserver: MutationObserver | null = null
let activeMarkerObserver: MutationObserver | null = null
let proxyActiveLink: HTMLAnchorElement | null = null
let activeMarkerRaf = 0

const labels = computed(() => {
  const lv = (lang.value || '').toLowerCase()
  if (lv.startsWith('zh')) return { depth: '目录层级', autoExpand: '自动展开' }
  if (lv.startsWith('ja')) return { depth: 'アウトラインの深さ', autoExpand: '自動展開' }
  if (lv.startsWith('ko')) return { depth: '개요 깊이', autoExpand: '자동 펼치기' }
  if (lv.startsWith('de')) return { depth: 'Gliederungstiefe', autoExpand: 'Automatisch erweitern' }
  if (lv.startsWith('fr')) return { depth: 'Profondeur du plan', autoExpand: 'Dépliage automatique' }
  return { depth: 'Outline depth', autoExpand: 'Auto expand' }
})

const applyDepthDataset = (value: number) => {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.outlineDepth = String(value)
}

const isHiddenByDisplay = (el: HTMLElement | null) => {
  if (!el) return true
  let node: HTMLElement | null = el
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node)
    if (style.display === 'none' || style.visibility === 'hidden') return true
    node = node.parentElement as HTMLElement | null
  }
  return false
}

const findVisibleAncestorLink = (link: HTMLAnchorElement | null) => {
  let li = link?.closest('li') as HTMLElement | null
  while (li) {
    li = li.parentElement?.closest('li') as HTMLElement | null
    if (!li) break
    if (window.getComputedStyle(li).display === 'none') continue
    const ancestorLink = li.querySelector(':scope > a.outline-link') as HTMLAnchorElement | null
    if (ancestorLink) return ancestorLink
  }
  return null
}

const syncActiveMarker = () => {
  if (typeof document === 'undefined') return
  const outline = document.querySelector('.VPDocAsideOutline') as HTMLElement | null
  if (!outline) return

  const marker = outline.querySelector('.outline-marker') as HTMLElement | null
  const active = outline.querySelector('a.outline-link.active') as HTMLAnchorElement | null

  if (!active) {
    if (proxyActiveLink) {
      proxyActiveLink.classList.remove('outline-proxy-active')
      proxyActiveLink = null
    }
    return
  }

  const visibleTarget = isHiddenByDisplay(active) ? findVisibleAncestorLink(active) : active
  const nextTarget = visibleTarget || active

  if (proxyActiveLink && proxyActiveLink !== nextTarget) {
    proxyActiveLink.classList.remove('outline-proxy-active')
    proxyActiveLink = null
  }

  if (nextTarget !== active) {
    nextTarget.classList.add('outline-proxy-active')
    proxyActiveLink = nextTarget
  }

  if (marker) {
    marker.style.top = `${nextTarget.offsetTop + 39}px`
    marker.style.opacity = '1'
  }
}

const scheduleSyncActiveMarker = () => {
  if (typeof window === 'undefined' || typeof requestAnimationFrame === 'undefined') return
  if (activeMarkerRaf) cancelAnimationFrame(activeMarkerRaf)
  activeMarkerRaf = requestAnimationFrame(() => {
    activeMarkerRaf = 0
    syncActiveMarker()
  })
}

const startActiveMarkerObserver = () => {
  if (typeof MutationObserver === 'undefined') return
  activeMarkerObserver?.disconnect()
  const outline = document.querySelector('.VPDocAsideOutline') as HTMLElement | null
  if (!outline) return

  activeMarkerObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' || mutation.type === 'childList') {
        scheduleSyncActiveMarker()
        break
      }
    }
  })

  activeMarkerObserver.observe(outline, {
    subtree: true,
    attributes: true,
    attributeFilter: ['class'],
    childList: true
  })
}

const applyOutlineFilter = () => {
  if (typeof document === 'undefined') return
  const listRoot = document.querySelector('.VPDocAsideOutline .VPDocOutlineItem.root') as HTMLElement | null
  if (!listRoot) return

  const targetDepth = depth.value

  const walk = (node: Element, level: number, underExpanded: boolean) => {
    const items = node.querySelectorAll(':scope > li')
    items.forEach((li) => {
      const link = li.querySelector(':scope > a.outline-link') as HTMLAnchorElement | null
      const isExpandedRoot =
        level === 2 &&
        link !== null &&
        expandedH2Href.value !== null &&
        link.getAttribute('href') === expandedH2Href.value
      const nextUnderExpanded = underExpanded || isExpandedRoot

      const show = (autoExpand.value && nextUnderExpanded) || level <= targetDepth
      ;(li as HTMLElement).style.display = show ? '' : 'none'
      const childList = li.querySelector(':scope > ul, :scope > ol')
      if (childList) {
        walk(childList, level + 1, nextUnderExpanded)
      }
    })
  }

  // Outline root corresponds to H2 depth.
  walk(listRoot, 2, false)
  scheduleSyncActiveMarker()
}

const setDepth = (value: number) => {
  depth.value = value
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(storageKey, String(value))
  }
}

const toggleAutoExpand = (event: Event) => {
  const target = event.target as HTMLInputElement | null
  if (!target) return
  autoExpand.value = target.checked
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(storageKeyAuto, target.checked ? '1' : '0')
  }
  applyOutlineFilter()
}

const setDepthFromRange = (event: Event) => {
  const target = event.target as HTMLInputElement | null
  if (!target) return
  const value = Number(target.value)
  if (!levels.includes(value)) return
  setDepth(value)
}

const hydrateFromStorage = () => {
  if (typeof localStorage === 'undefined') return 2
  const stored = localStorage.getItem(storageKey)
  const saved = stored && levels.includes(Number(stored)) ? Number(stored) : 2
  return saved
}

const hydrateAutoExpand = () => {
  if (typeof localStorage === 'undefined') return true
  const stored = localStorage.getItem(storageKeyAuto)
  if (stored === null) return true
  return stored === '1'
}

onMounted(() => {
  depth.value = hydrateFromStorage()
  autoExpand.value = hydrateAutoExpand()
  applyDepthDataset(depth.value)
  requestAnimationFrame(() => {
    applyOutlineFilter()
    startActiveMarkerObserver()
  })

  outlineObserver = new MutationObserver(applyOutlineFilter)
  const startObserving = () => {
    outlineObserver?.disconnect()
    const listRoot = document.querySelector('.VPDocAsideOutline .VPDocOutlineItem.root')
    if (listRoot) {
      outlineObserver?.observe(listRoot, { childList: true, subtree: true })
    }
  }

  startObserving()

  const handleOutlineClick = (event: Event) => {
    const target = event.target as HTMLElement | null
    if (!target) return
    const outline = target.closest('.VPDocAsideOutline') as HTMLElement | null
    if (!outline) return
    const listRoot = outline.querySelector('.VPDocOutlineItem.root') as HTMLElement | null
    if (!listRoot) return

    const link = target.closest('a.outline-link') as HTMLAnchorElement | null
    if (!link) return

    // determine outline level (root list is level 2)
    let level = 2
    let cursor: HTMLElement | null = link.parentElement
    while (cursor && cursor !== listRoot) {
      if (cursor.tagName === 'UL' || cursor.tagName === 'OL') {
        level += 1
      }
      cursor = cursor.parentElement as HTMLElement | null
    }

    if (level === 2) {
      expandedH2Href.value = link.getAttribute('href')
      applyOutlineFilter()
    }
  }

  document.addEventListener('click', handleOutlineClick, true)

  watch(
    () => route.path,
    () => {
      // route change may recreate outline, so wait a tick then reapply
      requestAnimationFrame(() => {
        expandedH2Href.value = null
        applyOutlineFilter()
        startObserving()
        startActiveMarkerObserver()
      })
    }
  )

  onBeforeUnmount(() => {
    if (activeMarkerRaf) cancelAnimationFrame(activeMarkerRaf)
    outlineObserver?.disconnect()
    activeMarkerObserver?.disconnect()
    if (proxyActiveLink) {
      proxyActiveLink.classList.remove('outline-proxy-active')
      proxyActiveLink = null
    }
    document.removeEventListener('click', handleOutlineClick, true)
  })
})

watch(depth, (value) => {
  applyDepthDataset(value)
  applyOutlineFilter()
  scheduleSyncActiveMarker()
})
</script>
