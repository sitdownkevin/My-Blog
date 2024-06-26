import { defineConfig } from 'vitepress'
// import markdownItMathjax3 from 'markdown-it-mathjax3'

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

import { scanDir } from "./scanDir.mjs";
const root_dir = './docs'
const nav = scanDir(root_dir)
// console.log(nav)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "k's Space",
  publicPath: './',
  description: "My personal blog",
  base: '/My-Blog/',
  themeConfig: {
    logo: '/icons/k-avt.jpg',
    nav: nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sitdownkevin' },
      { icon: 'twitter', link: 'https://twitter.com/sitdownkevin' },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="sina-weibo"><path d="M23.977 8.171c.103 1.315-.123 2.891-1.006 2.969-1.442.127-.69-1.435-.671-2.375.053-2.725-2.312-4.618-4.629-4.618-.656 0-2.181.438-1.946-.924.106-.6.623-.592 1.14-.66 3.897-.51 6.838 2.125 7.112 5.608zM17.604 11.337c1.675.901 3.687 1.35 3.354 4.024-.614 4.929-11.054 8.24-17.575 4.618-1.788-.994-3.639-2.448-3.354-5.344.246-2.493 1.95-4.424 3.623-6.069 1.596-1.57 3.278-2.798 5.567-3.364 2.484-.614 3.218 1.422 2.549 3.43 1.439-.095 4.488-1.674 5.836-.132.594.68.367 1.897 0 2.837zm-1.811 6.333c.537-.598 1.076-1.51 1.073-2.572-.01-4.395-7.635-5.376-11.806-2.969-4.747 2.74-2.743 7.664 3.086 8.048 3.088.204 6.179-.868 7.647-2.507z"></path><path d="M19.952 10.084c-.977.064-.612-.658-.671-1.517-.037-.529-.483-1.14-.872-1.32-.763-.352-1.945.256-1.945-.791 0-.778.686-.697 1.074-.726 3.555-.266 3.775 4.265 2.414 4.354zM12.842 14.768c1.429 4.248-6.017 6.223-7.379 2.573-.911-2.441 1.277-4.383 3.555-4.618 1.945-.201 3.395.775 3.824 2.045zm-3.422.726c.303.516 1 .145.939-.264-.073-.473-.945-.403-.939.264zm-1.207 2.243c1.252-.293 1.42-2.612-.47-2.177-1.587.364-1.28 2.586.47 2.177z"></path></svg>'}, link: 'https://weibo.com/sitdownkevin' }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/sitdownkevin/My-Blog/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    returnToTopLabel: 'Back to top',
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  // toc: { level: [1, 2, 3] },
  markdown: {
    math: true
  },
  head: [
    ['link', { rel: 'icon', href: '/icons/k-avt-favicon.png'}]
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      }
    }
  }
})
