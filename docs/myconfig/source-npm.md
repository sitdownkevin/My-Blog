---
title: NPM
layout: doc
---

# {{ $frontmatter.title }}

## 临时使用

```shell
npm --registry https://registry.npm.taobao.org install express
```

## 永久使用

```shell
npm config set registry https://registry.npm.taobao.org
```

## 配置 CNPM

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 恢复使用

```shell
npm config set registry https://registry.npmjs.org
```

## 验证是否设置成功

```shell
npm info express
or
npm config get registry
```
