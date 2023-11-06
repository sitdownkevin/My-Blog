---
title: Yarn
layout: doc
---
# {{ $frontmatter.title }}

:::info
配置为淘宝源
:::

## 换源
### 方法一：命令行
```shell
# 换为淘宝源
yarn config set registry https://registry.npm.taobao.org // [!code warning]

# 恢复默认
yarn config set registry https://registry.yarnpkg.com
```
### 方法二：修改配置文件
:::code-group
```shell [.yarnrc]
registry "https://registry.npm.taobao.org"

sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl "http://cnpmjs.org/downloads"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
```
:::


## 其他
```shell
# 查询当前源
yarn config get registry
```