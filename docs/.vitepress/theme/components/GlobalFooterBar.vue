<template>
  <footer class="global-footer">
    <span class="global-footer__label">{{ labels.hosted }}</span>
    <a
      class="global-footer__link"
      href="https://vegtips.readthedocs.io/"
      target="_blank"
      rel="noreferrer"
    >
      Read the Docs
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
import { useI18n } from '../composables/useI18n'

const { t: labels } = useI18n({
  en: { hosted: 'Hosted on' },
  zh: { hosted: '托管于' },
  'zh-hant': { hosted: '託管於' },
  ja: { hosted: 'ホスティング先:' },
  ko: { hosted: '호스팅:' },
  de: { hosted: 'Gehostet bei' },
  fr: { hosted: 'Hébergé sur' },
  ru: { hosted: 'Размещено на' }
})
</script>
