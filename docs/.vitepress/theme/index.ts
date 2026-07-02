import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import VideoFxTable from './components/VideoFxTable.vue'
import ScriptApiExplorer from './components/ScriptApiExplorer.vue'
import ImageDirect from './components/ImageDirect.vue'
import MyLayout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('VideoFxTable', VideoFxTable)
    app.component('ScriptApiExplorer', ScriptApiExplorer)
    app.component('ImageOnDemand', ImageDirect)
  }
}
