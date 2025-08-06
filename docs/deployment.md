# Nginx部署配置

本文档介绍如何使用Nginx部署"我的AI工坊"项目。

## 🚀 快速部署

### 1. 构建项目

```bash
npm run build
```

### 2. 上传文件

将 `dist/` 目录下的所有文件上传到服务器的网站根目录（通常是 `/var/www/html` 或 `/usr/share/nginx/html`）。

### 3. 配置Nginx

将 `nginx.conf` 配置文件复制到Nginx配置目录并重启服务。

## 📋 配置说明

### 基本配置特性

- ✅ **SPA路由支持** - 处理Vue Router的History模式
- ✅ **静态资源缓存** - 优化CSS/JS/图片等资源加载
- ✅ **Gzip压缩** - 减少传输数据量
- ✅ **安全头设置** - 基本的Web安全防护
- ✅ **HTTPS就绪** - 支持SSL证书配置

### 配置文件结构

```
/etc/nginx/
├── nginx.conf              # 主配置文件
├── conf.d/
│   └── my-ai-workshop.conf  # 站点配置
└── ssl/                     # SSL证书目录（可选）
    ├── cert.pem
    └── key.pem
```

## 🔧 自定义配置

### 域名修改

在 `nginx.conf` 中修改 `server_name` 字段：

```nginx
server_name your-domain.com www.your-domain.com;
```

### SSL证书配置

取消注释SSL相关配置并更新证书路径：

```nginx
listen 443 ssl http2;
ssl_certificate /etc/nginx/ssl/cert.pem;
ssl_certificate_key /etc/nginx/ssl/key.pem;
```

### 自定义缓存策略

根据需要调整静态资源缓存时间：

```nginx
# 图片缓存1年
location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# CSS/JS缓存1个月
location ~* \.(css|js)$ {
    expires 1M;
    add_header Cache-Control "public";
}
```

## 🛠️ 部署步骤

### Ubuntu/Debian系统

```bash
# 1. 安装Nginx
sudo apt update
sudo apt install nginx

# 2. 复制配置文件
sudo cp docs/nginx.conf /etc/nginx/sites-available/my-ai-workshop
sudo ln -s /etc/nginx/sites-available/my-ai-workshop /etc/nginx/sites-enabled/

# 3. 测试配置
sudo nginx -t

# 4. 重启Nginx
sudo systemctl restart nginx
```

### CentOS/RHEL系统

```bash
# 1. 安装Nginx
sudo yum install nginx

# 2. 复制配置文件
sudo cp docs/nginx.conf /etc/nginx/conf.d/my-ai-workshop.conf

# 3. 测试配置
sudo nginx -t

# 4. 重启Nginx
sudo systemctl restart nginx
```

## 📊 性能优化

配置文件已包含以下性能优化：

- **Gzip压缩** - 减少70%+的传输大小
- **静态资源缓存** - 减少重复请求
- **HTTP/2支持** - 提升加载速度
- **文件句柄优化** - 提高并发处理能力

## 🔍 故障排除

### 常见问题

1. **404错误** - 检查SPA路由配置是否正确
2. **静态资源加载失败** - 验证文件路径和权限
3. **HTTPS证书错误** - 检查证书文件路径和权限

### 日志查看

```bash
# 查看错误日志
sudo tail -f /var/log/nginx/error.log

# 查看访问日志
sudo tail -f /var/log/nginx/access.log
```

## 🔐 安全建议

- 定期更新Nginx版本
- 使用强SSL证书配置
- 启用防火墙保护
- 定期备份配置文件
- 监控访问日志异常

## 📱 监控和维护

### 配置监控

```bash
# 检查Nginx状态
sudo systemctl status nginx

# 测试配置文件
sudo nginx -t

# 重新加载配置
sudo nginx -s reload
```

### 性能监控

建议安装以下工具进行监控：
- **htop** - 系统资源监控
- **iotop** - 磁盘I/O监控  
- **nginx-module-vts** - Nginx状态监控

---

如需更多帮助，请参考 [Nginx官方文档](https://nginx.org/en/docs/) 或提交Issue。