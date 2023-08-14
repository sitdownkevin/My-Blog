---
title: Vitepress 的一些配置
---
# {{ $frontmatter.title }}

## LaTeX Support
:::tip
`markdown-it-katex` 和 `markdown-it-mathjax3` 两个插件都支持 LaTeX 公式的引入，前者对 `\begin{aligned}` 等语句的支持不好，后者基于前者有了很多改进。
:::

### 1. 安装 `markdown-it-mathjax3`
> `markdown-it-mathjax3` [主页](https://www.npmjs.com/package/markdown-it-mathjax3) 
```shell
yarn add -D markdown-it-mathjax3
```

### 2. 配置 `vitepress`
```js
// .vitepress/config.js
import { MarkdownItMathjax3 } from 'markdown-it-mathjax3' // [!code focus]

export default {
  markdown: {
    config: (md) => {
      md.use(markdownItMathjax3) // [!code focus]
    },
    lineNumbers: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag), // [!code focus]
      }
    }
  }
}
```
:::details `customElements`
```js
const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];
```
:::

### 3. CSS 中引入
```js
.vitepress/theme/style.css

mjx-container { // [!code focus]
  display: inline-block; // [!code focus]
  margin: auto 2px -2px; // [!code focus]
} // [!code focus]

mjx-container > svg { // [!code focus]
  margin: auto; // [!code focus]
} // [!code focus]
```