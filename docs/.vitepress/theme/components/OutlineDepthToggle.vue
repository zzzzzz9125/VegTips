<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { inBrowser } from 'vitepress'
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
    <div class="row">
      <span class="label">{{ labels.depth }}</span>
      <div class="depth-slider">
        <input type="range" min="2" max="6" step="1" v-model="depth" />
      </div>
    </div>
    <label class="row auto-expand">
      <span class="label">{{ labels.autoExpand }}</span>
      <span class="switch">
        <input
          type="checkbox"
          v-model="autoExpand"
          role="switch"
          :aria-checked="autoExpand"
          :aria-label="labels.autoExpand"
        />
        <span class="slider" aria-hidden="true"></span>
      </span>
    </label>
  </div>
</template>

<style scoped>
.outline-depth-toggle {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.25rem 0.5rem 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.outline-depth-toggle:has(~ .VPDocAsideOutline:not(.has-outline)) {
  display: none;
}

.outline-depth-toggle .row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
}

.outline-depth-toggle .label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  flex-shrink: 0;
}

.outline-depth-toggle .depth-slider {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex: 1;
  min-width: 0;
}

.outline-depth-toggle .depth-slider input[type='range'] {
  width: 100%;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
}

.outline-depth-toggle .auto-expand {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  gap: 0.35rem;
  justify-content: space-between;
}

.outline-depth-toggle .switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
}

.outline-depth-toggle .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.outline-depth-toggle .switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: 0.2s;
  border-radius: 34px;
}

.outline-depth-toggle .switch .slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 2px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 50%;
  transition: 0.2s;
}

.outline-depth-toggle .switch input:checked + .slider {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.outline-depth-toggle .switch input:checked + .slider:before {
  transform: translateX(16px);
  border-color: var(--vp-c-brand-1);
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
