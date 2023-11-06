---
title: Docker
date: 2023-11-06 12:00:00 +0800
---
# {{ $frontmatter.title }}

:::info
Alist

:::

## Docker Compose



## Alist

### 启动Alist

```shell
# 官网的指令
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 
	-e PUID=0 -e PGID=0 -e UMASK=022 
	--name="alist" 
	xhofe/alist:latest

# 我的指令
docker run -d --restart=always -v etc-alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

`-v`指定用户`PUID`和`PGID`避免主机和容器之间的权限问题。



### 更新Alist

```shell
# 停止容器
docker stop <alist_container_id>

# 删除容器
docker rm <alist_container_id>

# Pull最新版
docker pull xhofe/alist:latest

# Run最新版
<...>
```

### 配置文件的数据持久化

```shell
# 创建文件夹用以映射容器的配置文件
mkdir -p /etc/alist

# Pull容器
docker pull <alist_container_name>

# Run容器
docker run -d --restart=always --name=alist -p 5244:5244 -v /etc/alist:/alist/config sbwml/alist:v1

```





## 数据持久化

由于docker每次重启都不会保留数据，使用容器时每次都要重新加载一些配置文件和数据。可以使用数据卷挂载的方式完成数据持久化。

### 方式一：数据卷 Volume

```shell
# 创建Volume
docker volume create <volume_name>

# 查看所有Volume
docker volume ls

# 查看特定Volume信息
docker volume inspect <volume_name>

# 挂载Volume
docker run -d -P \
    --name web \
    # -v my-vol:/usr/share/nginx/html \
    --mount source=my-vol,target=/usr/share/nginx/html \
    nginx:alpine
	
# 删除Volume
docker volume rm <volume_name>

# 删除所有无主的Volume
docker volume prune
```

> `-v`和`--mount`的区别
>
> In general, `--mount` is more explicit and verbose. The biggest difference is that the `-v` syntax combines all the options together in one field, while the `--mount` syntax separates them. 
>
> https://docs.docker.com/storage/volumes/

### 方式二：挂载本机目录

