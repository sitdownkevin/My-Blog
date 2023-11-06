---
title: Conda
layout: doc
---

# {{ $frontmatter.title }}

:::info
换成清华源
:::

## 临时使用

```shell
conda install package -c <source_url>
```

## 设为默认

### 方法一：将下列内容粘贴至 `.condarc` 文件中

::: code-group

```shell [.condarc]
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

:::

:::tip `.condarc` 文件地址

- Windows -> `C:\\Users\\<user_name>\\`

  ```shell
  # Windows系统默认无 .condarc 文件，需要执行代码生成 .condarc，例如：
  conda config --set show_channel_urls yes
  ```

- macOS -> `/users/<user_name>/`

- Linux -> `/home/<user_name>/`

:::

### 方法二：命令行内替换

```shell
conda config --add channels <source_url>
```

## 其他

```shell
# 清除索引缓存
conda clean -i
```
