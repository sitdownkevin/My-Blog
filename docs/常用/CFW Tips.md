---
title: Clash for Windows Tips
---
# {{ $frontmatter.title }}

## Mixin

切换到 JavaScript 模式

```js
module.exports.parse = async (
  { content, name, url }, 
  { axios, yaml, notify }
) => {
  const extra = { 
    rules: [
      'DOMAIN-SUFFIX,easyscholar.cc,DIRECT',
      'DOMAIN-SUFFIX,heywhale.com,DIRECT',
      'DOMAIN-SUFFIX,wolai.com,DIRECT',
      'DOMAIN-SUFFIX,sitdownkevin.xyz,DIRECT',
      'DOMAIN-SUFFIX,cotticoffee.com,DIRECT',
      'DOMAIN-SUFFIX,chibaidao.com,DIRECT',
      ...content.rules,
    ],
  }
  return { ...content, ...extra }
}
```