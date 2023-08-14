# Flask

## 环境变量

- `.env`

  私有变量

- `.flaskenv`

  公共变量

  ```python
  # .flaskenv
  FLASK_APP=<app.py>
  
  ```

  

# Nginx

## 常用命令

```shell
nginx -s <signal>
```

- `quit`
- `stop`
- `reload`
- `reopen`

```shell
nginx -V

nginx -t
```

## 配置文件

### 1. 全局配置

### 2. `events`

### 3. `http`（修改最频繁）

```nginx
http {
    <...>
}
```

## 反向代理和负载均衡

```nginx
# nginx.conf

upstream <name> {
    ip_hash; # 负载均衡
    server 127.0.0.1:5000 weight=3;
    server 127.0.0.1:5001 weight=1;
}

server {
    <...>
    
    location /app {
        proxy_pass http://<name>; # 默认轮询
    }
    
}
```

## HTTPS配置

好麻烦，暂时放弃

## 虚拟主机



# Docker

- build 
- run 
- share
