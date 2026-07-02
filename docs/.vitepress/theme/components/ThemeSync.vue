<script setup lang="ts">
/**
 * ThemeSync – mirrors VitePress's active color scheme onto
 * <html data-scheme="dark|light"> so that Read the Docs Addons
 * (flyout, notifications, version switcher) can reliably detect
 * the current theme via the CSS `color-scheme` property and the
 * `data-scheme` attribute.
 *
 * This follows the same pattern used by the reference project
 * otomad/OtomadHelper, which manages its entire UI theme through
 * a root-level `data-scheme` attribute and explicit `color-scheme`
 * declarations.
 */
import { watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

if (typeof document !== 'undefined') {
  watch(isDark, (val) => {
    document.documentElement.dataset.scheme = val ? 'dark' : 'light'
  }, { immediate: true })
}
</script>

<template>
  <!-- This component produces no visible UI -->
</template>
