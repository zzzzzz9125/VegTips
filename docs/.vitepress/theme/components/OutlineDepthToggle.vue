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

const labels = computed(() => {
  const isZh = (lang.value || '').toLowerCase().startsWith('zh')
  return isZh
    ? { depth: '目录层级', autoExpand: '自动展开' }
    : { depth: 'Outline depth', autoExpand: 'Auto expand' }
})

const applyDepthDataset = (value: number) => {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.outlineDepth = String(value)
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
  requestAnimationFrame(applyOutlineFilter)

  const observer = new MutationObserver(applyOutlineFilter)
  const startObserving = () => {
    observer.disconnect()
    const listRoot = document.querySelector('.VPDocAsideOutline .VPDocOutlineItem.root')
    if (listRoot) {
      observer.observe(listRoot, { childList: true, subtree: true })
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
      })
    }
  )

  onBeforeUnmount(() => {
    observer.disconnect()
    document.removeEventListener('click', handleOutlineClick, true)
  })
})

watch(depth, (value) => {
  applyDepthDataset(value)
  applyOutlineFilter()
})
</script>
