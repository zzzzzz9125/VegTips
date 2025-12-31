import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import OutlineDepthToggle from './components/OutlineDepthToggle.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(OutlineDepthToggle)
    })
  }
}
