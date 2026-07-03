<template>
  <figure class="image-direct">
    <img :src="currentSrc" :alt="alt" class="image-direct__image" @error="handleImageError" />
    <figcaption v-if="alt" class="image-direct__caption">{{ alt }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  src: string
  alt?: string
  buttonText?: string
}>()

const { lang } = useData()
const { locale } = useI18n({})

const normalizePath = (path: string) => path.replace(/^\/+/, '')
const ensureImgPrefix = (path: string) => (path.startsWith('img/') ? path : `img/${path}`)

const baseRelativePath = computed(() => ensureImgPrefix(normalizePath(props.src)))

const localePrefix = computed(() => {
  if (locale.value === 'en') return ''
  return locale.value
})

const localizedRelativePath = computed(() => {
  if (!localePrefix.value) return null
  const withoutImg = baseRelativePath.value.replace(/^img\//, '')
  return `img/${localePrefix.value}/${withoutImg}`
})

const resolvedDefaultSrc = computed(() => withBase(`/${baseRelativePath.value}`))
const resolvedLocalizedSrc = computed(() =>
  localizedRelativePath.value ? withBase(`/${localizedRelativePath.value}`) : null
)

const currentSrc = ref<string>(resolvedLocalizedSrc.value ?? resolvedDefaultSrc.value)
const hasTriedDefaultFallback = ref(false)

watch([resolvedLocalizedSrc, resolvedDefaultSrc], ([localized, fallback]) => {
  currentSrc.value = localized ?? fallback
  hasTriedDefaultFallback.value = false
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement

  if (
    !hasTriedDefaultFallback.value &&
    currentSrc.value === resolvedLocalizedSrc.value &&
    resolvedLocalizedSrc.value
  ) {
    hasTriedDefaultFallback.value = true
    currentSrc.value = resolvedDefaultSrc.value
    img.src = currentSrc.value
  }
}
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
