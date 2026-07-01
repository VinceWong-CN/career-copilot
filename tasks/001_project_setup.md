# Task 001 —— 项目初始化（Project Setup）

---

# 目标（Goal）

初始化 Career Copilot MVP 项目，并建立一个可用于正式开发的工程环境。

完成后，项目应具备可运行的基础应用、项目结构、页面路由以及部署能力。

**本任务不涉及任何业务逻辑。**

---

# 背景（Background）

Career Copilot 是一款帮助求职者达到 **Offer Ready（获得 Offer 的准备状态）** 的 AI 产品。

MVP 的核心流程如下：

Master Resume（主简历）

↓

Job Description（目标岗位 JD）

↓

Match Assessment（匹配分析）

↓

Tailored Resume（定制简历）

↓

Interview Preparation（面试准备）

本任务仅负责搭建整个项目的基础框架，为后续开发做好准备。

---

# 用户故事（User Story）

作为一名用户，

我希望能够打开 Career Copilot 网站，

从而开始使用产品。

---

# 本任务范围（Scope）

本任务包括：

- 初始化项目
- 配置开发环境
- 配置部署环境
- 创建基础页面布局
- 创建应用路由
- 验证本地运行

---

# 不包含（Out of Scope）

本任务不包括：

- 用户登录
- 数据库
- AI 能力
- 简历上传
- JD 解析

---

# 技术栈（Tech Stack）

## 前端框架

- Next.js（App Router）

## 开发语言

- TypeScript

## 样式

- Tailwind CSS

## UI 组件

- shadcn/ui

## 图标

- Lucide React

## 部署

- Vercel

## 包管理器

- pnpm

## 代码检查

- ESLint

## 代码格式化

- Prettier

---

# 需要创建的页面（Required Pages）

需要建立以下页面（目前可先放置占位内容）：

| 路由 | 页面 |
|------|------|
| / | 首页（Landing Page） |
| /master-resume | 简历上传页 |
| /job | JD 输入页 |
| /generate | AI 生成中页面 |
| /result | 结果页 |

目前所有页面都可以使用 Placeholder（占位内容）。

---

# 首页（Landing Page）

首页至少包含：

## 产品名称

Career Copilot

---

## 产品简介

帮助求职者更高效地达到 Offer Ready。

---

## 主按钮（Primary CTA）

Start

点击后跳转至：

```
/master-resume
```

---

# 页面布局（Layout）

建立统一页面布局，包括：

- Header（顶部导航）
- Main Content（主体内容）
- Responsive Container（响应式布局）
- Footer（底部）

**MVP 暂不需要 Dark Mode（深色模式）。**

---

# 推荐目录结构（Folder Structure）

```
src/

├── app/
├── components/
├── features/
├── lib/
├── types/
└── styles/
```

未来所有业务逻辑建议统一放在：

```
features/
```

目录下。

---

# 验收标准（Acceptance Criteria）

完成后，应满足以下条件：

- 项目能够正常启动
- 项目能够成功构建（Build）
- 项目能够成功部署到 Vercel
- 所有页面可以正常访问
- 每个页面均显示占位内容
- 无 TypeScript 报错
- 无 ESLint 报错

---

# 完成定义（Definition of Done）

本任务完成意味着：

- 项目可以正常运行
- 所有页面路由已创建
- 可以部署到 Vercel
- 项目目录符合约定结构
- 已准备好进入下一项开发任务