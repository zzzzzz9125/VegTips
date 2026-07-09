<script setup lang="ts">
import { ref, watch, useId, onMounted, onUnmounted } from 'vue'
import { inBrowser } from 'vitepress'
import VPSwitch from './Switch.vue'
import Slider from './Slider.vue'
import { useI18n } from '../composables/useI18n'

const labels = useI18n({
  en: { depth: 'Outline depth', autoExpand: 'Auto expand' },
  zh: { depth: '目录层级', autoExpand: '自动展开' },
  'zh-hant': { depth: '目錄層級', autoExpand: '自動展開' },
  ja: { depth: 'アウトラインの深さ', autoExpand: '自動展開' },
  ko: { depth: '개요 깊이', autoExpand: '자동 펼치기' },
  de: { depth: 'Gliederungstiefe', autoExpand: 'Automatisch erweitern' },
  fr: { depth: 'Profondeur du plan', autoExpand: 'Dépliage automatique' },
  ru: { depth: 'Глубина оглавления', autoExpand: 'Авторазворачивание' },
}).t

const id = useId()
const depth = ref(2)
const autoExpand = ref(true)

if (inBrowser) {
  try {
    const savedDepth = localStorage.getItem('vegTips-outline-depth')
    if (savedDepth && ['2', '3', '4', '5', '6'].includes(savedDepth)) {
      depth.value = Number(savedDepth)
    }
    const savedAuto = localStorage.getItem('vegTips-outline-auto-expand')
    if (savedAuto !== null) {
      autoExpand.value = savedAuto === '1'
    }
  } catch {
    // localStorage unavailable
  }
}

watch(
  [depth, autoExpand],
  ([d, ae]) => {
    if (!inBrowser) return
    document.body.style.setProperty('--outline-depth', String(d))
    document.body.style.setProperty('--outline-auto-expand', ae ? 'true' : 'false')
    try {
      localStorage.setItem('vegTips-outline-depth', String(d))
      localStorage.setItem('vegTips-outline-auto-expand', ae ? '1' : '0')
    } catch {
      // localStorage unavailable
    }
  },
  { immediate: true },
)

const outlineMarker = ref<HTMLDivElement>()
const observer = ref<MutationObserver>()

onMounted(() => {
  outlineMarker.value = document.querySelector<HTMLDivElement>('.outline-marker')!
  observer.value = new MutationObserver(([mutation]) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      outlineMarker.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        container: 'nearest',
      })
    }
  })
  observer.value.observe(outlineMarker.value, { attributes: true })
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <div class="outline-depth-toggle">
    <label :for="`${id}-depth`">{{ labels.depth }}</label>
    <Slider :id="`${id}-depth`" min="2" max="6" step="1" v-model="depth" />
    <label :for="`${id}-auto-expand`">{{ labels.autoExpand }}</label>
    <label>
      <VPSwitch :id="`${id}-auto-expand`" v-model="autoExpand" />
    </label>
  </div>
</template>

<style scoped>
.outline-depth-toggle {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 6.4px;
  align-items: center;
  padding: 4px 0 6px 16px;
  border-left: 1px solid var(--vp-c-divider);
}

.outline-depth-toggle:has(~ .VPDocAsideOutline:not(.has-outline)) {
  display: none;
}

label {
  white-space: nowrap;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.VPSwitch {
  justify-self: end;
}
</style>

<style>
.VPDocOutlineItem.root ul {
  transition:
    block-size cubic-bezier(0, 0, 0, 1) 250ms,
    visibility 250ms;
  transition-behavior: allow-discrete;
  overflow: clip;

  @starting-style {
    block-size: 0;
  }

  :active-view-transition & {
    transition: none;
  }
}

@container style(--outline-depth < 6) {
  .VPDocOutlineItem.root > li > ul > li > ul > li > ul > li > ul {
    visibility: collapse;
    block-size: 0;
    --collapse: true;
  }
  .VPDocOutlineItem.root > li > ul > li > ul > li > ul > li:has(.outline-link.active) > a {
    color: var(--vp-c-text-1);
    anchor-name: --outline-link-active;
  }
}
@container style(--outline-depth < 5) {
  .VPDocOutlineItem.root > li > ul > li > ul > li > ul {
    visibility: collapse;
    block-size: 0;
    --collapse: true;
  }
  .VPDocOutlineItem.root > li > ul > li > ul > li:has(.outline-link.active) > a {
    color: var(--vp-c-text-1);
    anchor-name: --outline-link-active;
  }
}
@container style(--outline-depth < 4) {
  .VPDocOutlineItem.root > li > ul > li > ul {
    visibility: collapse;
    block-size: 0;
    --collapse: true;
  }
  .VPDocOutlineItem.root > li > ul > li:has(.outline-link.active) > a {
    color: var(--vp-c-text-1);
    anchor-name: --outline-link-active;
  }
}
@container style(--outline-depth < 3) {
  .VPDocOutlineItem.root > li > ul {
    visibility: collapse;
    block-size: 0;
    --collapse: true;
  }
  .VPDocOutlineItem.root > li:has(.outline-link.active) > a {
    color: var(--vp-c-text-1);
    anchor-name: --outline-link-active;
  }
}

@container style(--outline-auto-expand: true) {
  .VPDocOutlineItem.root .outline-link.active + ul,
  .VPDocOutlineItem.root ul:has(.outline-link.active) {
    visibility: visible;
    block-size: auto;
    --collapse: false;
  }
  .VPDocOutlineItem.root a:not(.active, :hover, #\#) {
    color: var(--vp-c-text-2);
    anchor-name: none !important;
  }
}

.outline-link.active {
  anchor-name: --outline-link-active;
}

@container style(--collapse: true) {
  .outline-link {
    anchor-name: none !important;
  }
}

.VPDocAsideOutline > .content {
  .outline-marker:not([style*="opacity: 0"]) {
    position-anchor: --outline-link-active;
    top: calc((anchor(top) + anchor(bottom) - 18px) / 2) !important;
  }
}
</style>
