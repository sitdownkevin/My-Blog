---
title: 使用Git的一些步骤
---
# {{ $frontmatter.title }}

> 参考资料：https://www.liaoxuefeng.com/wiki/896043488029600

## 安装Git
```shell
sudo apt-get install git
```

## 配置邮箱和用户名


```shell
git config --global user.name "<user_name>"
git config --global user.email "<user_email>"
```

## 常规操作

### 初始化 | 添加文件 | 提交文件

```shell
# 仓库初始化
git init

# 添加文件
git add <file_name>
git add *

# 提交文件
git commit -m "<commit_message>"
```

### 查看信息

```shell
# 查看状态
git status

# 查看不同
git diff <file_name>
```

## 远程仓库（Github）

### SSH 连接

```shell
# 创建 SSH Key
ssh-keygen -t rsa -C "<user_email>"
```

然后把这个公钥设置到Github中

### 推送到远程仓库

```shell
# 添加远程仓库
git remote add origin git@github.com:<user_name>/<repo_name>.git

# 推送到远程仓库
git push -u origin master

# (只有第一次推送需要参数 -u)
git push origin master
```

### 更改远程仓库

> 注意是用的SSH还是HTTP协议，如果是ssh需要在Github添加公钥，如果是http只需要输入账号密码登录，我喜欢用SSH

```shell
git remote set-url origin git@github.com:<user_name>/<repo_name>.git
```

### 删除远程库

```shell
# 查看远程库信息
git remote -v

# 删除远程库
git remote rm <origin>
```

## 额外的：配置代理

```shell
# http
git config --global http.proxy 'http://127.0.0.1:7890'

# https
git config --global https.proxy 'http://127.0.0.1:7890'

# 查看配置
git config --list
```

## 常见问题

