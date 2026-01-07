<template>
  <footer class="global-footer">
    <span class="global-footer__label">{{ labels.hosted }}</span>
    <a
      class="global-footer__link"
      href="https://vegtips.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >
      Netlify
    </a>
    <span class="global-footer__sep">/</span>
    <a
      class="global-footer__link"
      href="https://zzzzzz9125.github.io/VegTips/"
      target="_blank"
      rel="noreferrer"
    >
      GitHub Pages
    </a>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const labels = computed(() => {
  const lv = (lang.value || '').toLowerCase()
  if (lv.startsWith('zh-hant') || lv.startsWith('zh-tw') || lv.startsWith('zh-hk') || lv.startsWith('zh-mo')) return { hosted: '託管於' }
  if (lv.startsWith('zh')) return { hosted: '托管于' }
  if (lv.startsWith('ja')) return { hosted: 'ホスティング先:' }
  if (lv.startsWith('ko')) return { hosted: '호스팅:' }
  if (lv.startsWith('de')) return { hosted: 'Gehostet bei' }
  if (lv.startsWith('fr')) return { hosted: 'Hébergé sur' }
  return { hosted: 'Hosted on' }
})
</script>
