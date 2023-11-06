---
title: NPM
layout: doc
---
# {{ $frontmatter.title }}

## 换源

```shell
# 临时使用
npm --registry https://registry.npm.taobao.org install express

# 永久使用
npm config set registry https://registry.npm.taobao.org  // [!code warning]

# 配置 CNPM
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 恢复默认
npm config set registry https://registry.npmjs.org
```

## 其他

```shell
# 验证是否设置成功
npm info express # npm config get registry
```
