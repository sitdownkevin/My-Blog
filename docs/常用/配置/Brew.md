---
title: Homebrew
---

# {{ $frontmatter.title }}
:::info emmmm
Brew 居然没有一键更新所有 Cask 的命令，自己写一个：

`brew list --cask | xargs -I {} brew upgrade --cask {}`
:::

## 安装 | 清华源

直接看 [Homebrew / Linuxbrew 镜像使用帮助 - mirrors.tuna](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)


## 常用命令

```shell
brew update

brew upgrade

brew install --force

```



### 更新所有 Cask

```shell
brew list --cask | xargs -I {} brew upgrade --cask {}
```