// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import Layout from './Layout.vue'
import './style.css'

export default {
  extends: Theme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
