---
title: PyPI
layout: doc
---
# {{ $frontmatter.title }}
:::info
更多镜像站可参考清华大学开源软件镜像站下的[校园网联合镜像站](https://mirrors.cernet.edu.cn/site)
:::


## 临时使用

```shell
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

## 设为默认

```shell
# 确保pip更新至最新版本
python -m pip install --upgrade pip

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple // [!code warning]
```

## 配置多个镜像源

```shell
pip config set global.extra-index-url "<url1> <url2>..."
```

## 其他镜像源

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
