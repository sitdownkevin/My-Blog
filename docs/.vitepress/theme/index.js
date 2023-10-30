// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import Layout from './Layout.vue'
import './style.css'

import "@fontsource/dancing-script";
import "@fontsource/lobster";
import "@fontsource/vollkorn";
import "@fontsource/vollkorn/400.css";
import "@fontsource/vollkorn/400-italic.css";
import "@fontsource/noto-sans";

export default {
  extends: Theme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
