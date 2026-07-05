<template>
  <figure class="image-direct">
    <img :src="currentSrc" :alt="alt" class="image-direct__image" />
    <figcaption v-if="alt" class="image-direct__caption">{{ alt }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  src: string
  alt?: string
}>()

const { locale } = useI18n({})

const normalizePath = (path: string) => path.replace(/^\/+/, '')
const ensureImgPrefix = (path: string) => (path.startsWith('img/') ? path : `img/${path}`)

const baseRelativePath = computed(() => ensureImgPrefix(normalizePath(props.src)))

const localePrefix = computed(() => (locale.value === 'en' ? '' : locale.value))

const localizedRelativePath = computed(() => {
  if (!localePrefix.value) return null
  const withoutImg = baseRelativePath.value.replace(/^img\//, '')
  return `img/${localePrefix.value}/${withoutImg}`
})

const resolvedDefaultSrc = computed(() => withBase(`/${baseRelativePath.value}`))
const resolvedLocalizedSrc = computed(() =>
  localizedRelativePath.value ? withBase(`/${localizedRelativePath.value}`) : null
)

const currentSrc = ref(resolvedDefaultSrc.value)

let probeTimer: ReturnType<typeof setTimeout> | null = null
let probeImg: HTMLImageElement | null = null

function tryLocalizedImage() {
  if (typeof Image === 'undefined') return
  const localizedSrc = resolvedLocalizedSrc.value
  if (!localizedSrc) return

  cleanupProbe()

  probeImg = new Image()
  let done = false

  probeImg.onload = () => {
    if (!done) {
      done = true
      currentSrc.value = localizedSrc
      cleanupProbe()
    }
  }

  probeImg.onerror = () => {
    done = true
    cleanupProbe()
  }

  probeImg.src = localizedSrc

  probeTimer = setTimeout(() => {
    if (!done) {
      done = true
      cleanupProbe()
    }
  }, 3000)
}

function cleanupProbe() {
  if (probeTimer) {
    clearTimeout(probeTimer)
    probeTimer = null
  }
  if (probeImg) {
    probeImg.onload = null
    probeImg.onerror = null
    probeImg = null
  }
}

watch(locale, () => {
  currentSrc.value = resolvedDefaultSrc.value
  tryLocalizedImage()
})

onMounted(() => {
  tryLocalizedImage()
})

onUnmounted(() => {
  cleanupProbe()
})
</script>

<style scoped>
.image-direct {
  margin: 1.25rem 0;
}

.image-direct__image {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.image-direct__caption {
  margin-top: 0.35rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
