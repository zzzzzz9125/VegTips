import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import OutlineDepthToggle from './components/OutlineDepthToggle.vue'
import VideoFxTable from './components/VideoFxTable.vue'
import ScriptApiExplorer from './components/ScriptApiExplorer.vue'
import ImageDirect from './components/ImageDirect.vue'
import GlobalFooterBar from './components/GlobalFooterBar.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(OutlineDepthToggle),
      'layout-bottom': () => h(GlobalFooterBar)
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('VideoFxTable', VideoFxTable)
    app.component('ScriptApiExplorer', ScriptApiExplorer)
    app.component('ImageOnDemand', ImageDirect)
  }
}
