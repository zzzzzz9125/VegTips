<template>
  <figure class="image-direct">
    <img :src="src" :alt="alt" class="image-direct__image" />
    <figcaption v-if="alt" class="image-direct__caption">{{ alt }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
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
