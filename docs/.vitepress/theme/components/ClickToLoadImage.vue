<template>
  <div v-if="useLazyLoad" class="click-to-load">
    <button
      v-if="!loaded"
      type="button"
      class="click-to-load__button"
      @click="handleLoad"
    >
      <span class="click-to-load__cta">{{ buttonLabel }}</span>
      <span v-if="alt" class="click-to-load__alt">{{ alt }}</span>
    </button>
    <figure v-show="loaded" class="click-to-load__figure">
      <img
        ref="imgRef"
        :alt="alt"
        loading="lazy"
        class="click-to-load__image"
      />
      <figcaption v-if="alt" class="click-to-load__caption">{{ alt }}</figcaption>
    </figure>
  </div>
  <figure v-else class="image-direct">
    <img 
      :src="imageSrc" 
      :alt="alt" 
      class="image-direct__image"
      @error="handleImageError"
    />
    <figcaption v-if="alt" class="image-direct__caption">{{ alt }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    buttonText?: string
  }>(),
  {
    alt: '',
    buttonText: '点击加载图片'
  }
)

const imgRef = ref<HTMLImageElement | null>(null)
const loaded = ref(false)

// Check for lazy loading mode - only true if explicitly enabled on Netlify
const useLazyLoad = computed(() => {
  try {
    // Build-time defined variable is safe to check
    return (import.meta.env.VITE_ENABLE_LAZY_IMAGES as string | undefined) === 'true'
  } catch {
    return false
  }
})

// Always use withBase to properly handle base path in all environments
const imageSrc = computed(() => {
  // Ensure path starts with / for withBase to work correctly
  const normalizedPath = props.src.startsWith('/') ? props.src : `/${props.src}`
  return withBase(normalizedPath)
})

const buttonLabel = computed(() => props.buttonText || '点击加载图片')

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error('Image failed to load:', img.src, 'Original:', props.src)
}

const handleLoad = () => {
  if (loaded.value) return
  loaded.value = true
  // Set src after DOM update to ensure img element is visible
  nextTick(() => {
    if (imgRef.value) {
      imgRef.value.src = imageSrc.value
    }
  })
}
</script>

<style scoped>
.click-to-load {
  margin: 1.25rem 0;
}

.click-to-load__button {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 1px dashed var(--vp-c-border);
  background: linear-gradient(90deg, rgba(132, 189, 255, 0.12), rgba(175, 143, 255, 0.1));
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.1s ease;
}

.click-to-load__button:hover {
  border-color: var(--vp-c-brand-1);
  background: linear-gradient(90deg, rgba(132, 189, 255, 0.18), rgba(175, 143, 255, 0.16));
}

.click-to-load__button:active {
  transform: translateY(1px);
}

.click-to-load__cta {
  font-weight: 600;
}

.click-to-load__alt {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.click-to-load__figure {
  margin: 0;
}

.click-to-load__image {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.click-to-load__caption {
  margin-top: 0.35rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

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
