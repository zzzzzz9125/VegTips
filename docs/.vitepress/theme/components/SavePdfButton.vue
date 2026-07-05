<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const C = 1200
const justClicked = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

function printViaNewWindow() {
  if (justClicked.value) return
  justClicked.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => { justClicked.value = false }, C)

  const vpDoc = document.querySelector('.vp-doc')
  if (!vpDoc) {
    window.print()
    return
  }

  const win = window.open('', '_blank')
  if (!win) {
    window.print()
    return
  }

  const html = vpDoc.outerHTML

  win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${document.title}</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Microsoft YaHei", "Hiragino Sans", "Meiryo", "Malgun Gothic", sans-serif;
    line-height: 1.7;
    color: #1a1a1a;
    max-width: 100%;
    padding: 2cm;
    margin: 0;
    font-size: 14px;
  }
  img { max-width: 100%; height: auto; }
  pre, code, kbd {
    white-space: pre-wrap;
    word-break: break-word;
    background: #f5f5f5;
    border: 1px solid #ddd;
    font-family: "Cascadia Code", "Fira Code", "JetBrains Mono", "SF Mono", Consolas, "Liberation Mono", monospace;
    font-size: 0.9em;
  }
  pre { padding: 1em; line-height: 1.5; }
  code { padding: 0.2em 0.4em; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; vertical-align: top; }
  th { background: #f5f5f5; font-weight: 600; }
  thead { display: table-header-group; }
  tr { break-inside: avoid; }
  a { color: #3451b2; }
  blockquote { border-left: 3px solid #aaa; margin: 1em 0; padding: 0.5em 1em; color: #555; }
  h1, h2, h3, h4, h5, h6 { break-after: avoid; }
  h1 { font-size: 1.8em; margin: 0 0 0.5em; }
  h2 { font-size: 1.4em; margin: 2em 0 0.5em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
  h3 { font-size: 1.15em; margin: 1.5em 0 0.4em; }
  p { margin: 0.8em 0; }
  ul, ol { padding-left: 1.5em; margin: 0.8em 0; }
  li { margin: 0.3em 0; }
  .header-anchor { display: none; }
  .vp-doc { max-width: none; }
  @media print {
    @page { margin: 2cm; }
  }
</style>
</head>
<body>${html}</body>
</html>`)

  win.document.close()

    try { win.history.replaceState({}, '', window.location.href.replace(/#.*/, '')) } catch {}

  const doPrint = () => {
    win.print()
    setTimeout(() => { try { win.close() } catch {} }, 500)
  }

  // Wait for images to load before printing
  const imgs = win.document.images
  if (imgs.length > 0) {
    let loaded = 0
    const onLoad = () => {
      loaded++
      if (loaded >= imgs.length) doPrint()
    }
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].complete) loaded++
      else imgs[i].addEventListener('load', onLoad, { once: true })
      imgs[i].addEventListener('error', onLoad, { once: true })
    }
    if (loaded >= imgs.length) doPrint()
  } else {
    doPrint()
  }
}

const { t } = useI18n({
  en:    { label: 'Save as PDF',  tooltip: 'Print / Save as PDF' },
  zh:    { label: '保存为 PDF',   tooltip: '打印 / 保存为 PDF' },
  'zh-hant': { label: '儲存為 PDF', tooltip: '列印 / 儲存為 PDF' },
  ja:    { label: 'PDF として保存', tooltip: '印刷 / PDF 形式で保存' },
  ko:    { label: 'PDF로 저장',     tooltip: '인쇄 / PDF로 저장' },
  de:    { label: 'Als PDF speichern', tooltip: 'Drucken / Als PDF speichern' },
  fr:    { label: 'Enregistrer en PDF', tooltip: 'Imprimer / Enregistrer en PDF' },
  ru:    { label: 'Сохранить как PDF', tooltip: 'Печать / Сохранить как PDF' },
})
</script>

<template>
  <div class="save-pdf-btn" role="toolbar" :aria-label="t.label">
    <button
      class="save-pdf-btn__button"
      type="button"
      :title="t.tooltip"
      :aria-label="t.tooltip"
      @click="printViaNewWindow"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
        <path d="M8 18h8" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.save-pdf-btn {
  display: flex;
  align-items: center;
}

.save-pdf-btn__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;
}

.save-pdf-btn__button:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
}

.save-pdf-btn__button svg {
  width: 20px;
  height: 20px;
}
</style>
