 # Changelog
 
 ## Sprint 1
 
 
 ### 2026-07-02 — Task 002 Resume Upload
 
 - 创建 /api/parse-resume API 路由，支持 PDF 和 DOCX 解析
 - 创建 MasterResumeContext，存储 fileName 和 resumeText
 - 改造 /master-resume 页面：上传区域 → 解析 → 预览 → 继续按钮
 - 安装 mammoth (DOCX) 和 pdf-parse (PDF) 解析库
 - 通过 pnpm build 零错误验证
 
 ### 2025-07-01 — Task 001 Project Setup
 
 - 初始化 Next.js 项目（App Router, TypeScript, Tailwind CSS）
 - 集成 shadcn/ui 和 Lucide React
 - 配置 ESLint, Prettier, pnpm
 - 创建统一页面布局（Header / Main / Footer）
 - 创建 5 个页面路由：Landing, /master-resume, /job, /generate, /result
 - 配置 Vercel 部署（构建验证通过）
