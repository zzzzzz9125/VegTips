import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import OutlineDepthToggle from './components/OutlineDepthToggle.vue'
import VideoFxTable from './components/VideoFxTable.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(OutlineDepthToggle)
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('VideoFxTable', VideoFxTable)
  }
}
