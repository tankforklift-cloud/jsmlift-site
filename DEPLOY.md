# JSM LIFT 网站部署指南

## 🚀 方案一：GitHub Pages（推荐，最简单）

### 1. 推送代码到 GitHub

```bash
cd jsmlift-site

# 初始化 git
git init
git add .
git commit -m "JSM LIFT 叉车配件展示站 - 初始版本"

# 创建 GitHub 仓库后在网页上操作：
# https://github.com/new
# 仓库名建议: jsmlift-site

git remote add origin https://github.com/你的用户名/jsmlift-site.git
git branch -M main
git push -u origin main
```

### 2. 在 GitHub 仓库中启用 Pages

- Settings → Pages → Source 选 "GitHub Actions"
- Astro 会自动生成 GitHub Actions 配置文件

### 3. 绑定自定义域名

- Settings → Pages → Custom domain → 输入 `jsmlift.com`
- 在阿里云 DNS 中添加一条 CNAME 记录：
  - 主机记录：`www`
  - 记录类型：CNAME
  - 记录值：`你的用户名.github.io`

---

## ☁️ 方案二：Cloudflare Pages（速度更快，推荐）

### 1. 推送代码到 GitHub（同上）

### 2. 注册 Cloudflare
- https://dash.cloudflare.com/sign-up

### 3. 创建 Pages 项目
- Workers & Pages → Create → Pages → Connect to Git
- 选择 GitHub 仓库 `jsmlift-site`
- 构建设置：
  - Framework: Astro
  - Build command: `npm run build`
  - Build output directory: `dist`

### 4. 绑定自定义域名
- 在 Cloudflare Pages 项目 → Custom domains → 添加 `jsmlift.com`
- 把域名 DNS 迁移到 Cloudflare 管理（推荐），或在阿里云添加 CNAME 记录

---

## 📧 配置联系表单（Formspree，免费）

1. 访问 https://formspree.io/register
2. 用 `tan@jsmlift.com` 注册
3. 创建新表单 → 获取 Form ID（类似 `xqkrgqgb`）
4. 修改 `src/components/ContactForm.astro` 第 50 行：
   ```
   'https://formspree.io/f/FORM_ID'  →  'https://formspree.io/f/你的FORM_ID'
   ```
5. 重新构建部署：`npm run build`

---

## 🔧 本地开发

```bash
cd jsmlift-site
npm install
npm run dev    # 开发模式，热更新
npm run build  # 构建生产版本
npm run preview # 预览生产版本
```

---

## 📁 项目结构

```
jsmlift-site/
├── public/            # 静态资源（图片、favicon）
├── src/
│   ├── components/    # Header, Footer, ProductCard, ContactForm
│   ├── data/          # products.ts（产品数据）
│   ├── layouts/       # BaseLayout.astro（全局布局）
│   ├── pages/         # 页面（首页/产品/关于/联系）
│   └── styles/        # global.css（全局样式）
├── astro.config.mjs   # Astro 配置
└── package.json
```

---

## 🌐 jsmlift.com 域名 DNS 配置（阿里云）

将 DNS 服务器改为 Cloudflare 的（推荐）：
- 在 Cloudflare 添加域名，获取分配的 Name Server
- 到阿里云域名控制台 → DNS 修改 → 改为 Cloudflare 的 NS

或在阿里云直接添加 CNAME：
- 这是 GitHub Pages 配置方式（见上方方案一第3步）
