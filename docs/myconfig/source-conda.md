---
title: Conda | PyPI | NPM 换国内源
layout: doc
---

# {{ $frontmatter.title }}

## 快速操作

```shell
conda config --set show_channel_urls yes
```

```shell
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

```shell
npm config set registry https://registry.npm.taobao.org
```

## Conda

### 临时使用

```shell
conda install package -c <url>
```

### 设为默认

#### 方法一：将下列内容粘贴至`.condarc`文件中

```shell
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

`.condarc` 文件地址

> Windows -> `C:\\Users\\username\\`

```shell
# Windows系统默认无 .condarc 文件，需要执行代码生成 .condarc，例如：
conda config --set show_channel_urls yes
```

> macOS -> `/users/username/`

> Linux -> `/home/username/`

#### 方法二：命令行内替换

```shell
conda config --add channels <url>
```

### 其他操作

清除索引缓存 `conda clean -i`

## PyPI

### 临时使用

```shell
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

### 设为默认

```shell
# 确保pip更新至最新版本
# python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### 配置多个镜像源

```shell
pip config set global.extra-index-url "<url1> <url2>..."
```

### 其他镜像源

```shell
# 中国科学技术大学
https://pypi.mirrors.ustc.edu.cn/simple/

# 华中理工大学
http://pypi.hustunique.com/

# 山东理工大学
http://pypi.sdutlinux.org/

# 豆瓣
http://pypi.douban.com/simple/

# 阿里云
http://mirrors.aliyun.com/pypi/simple/
```

（更多镜像站可参考清华大学开源软件镜像站下的[校园网联合镜像站](https://mirrors.cernet.edu.cn/site)）

## NPM

### 临时使用

```shell
npm --registry https://registry.npm.taobao.org install express
```

### 永久使用

```shell
npm config set registry https://registry.npm.taobao.org
```

### 配置 CNPM

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 恢复使用

```shell
npm config set registry https://registry.npmjs.org
```

### 验证是否设置成功

```shell
npm info express
or
npm config get registry
```
