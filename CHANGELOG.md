 # Changelog
 
 ## Sprint 1
 
 
 
 
 
### 2026-07-02 — Task 004 Finalize: Hide Debug Panel

- Debug Panel 默认隐藏（SHOW_DEBUG_PANEL = false）
- 保留完整 Debug Panel 代码，无需删除即可上线
- 后续开发只需将 SHOW_DEBUG_PANEL 改为 true 即可恢复
- pnpm build 零错误验证

  ### 2026-07-02 — Task 004 Match Analysis
 
 - 创建 Match Analysis Prompt（src/lib/prompts/match-analysis.ts）
 - 创建 /api/match-analysis API 路由，调用 DeepSeek Chat API
 - 创建 MatchAnalysisContext，保存分析结果与 Debug 信息
 - 改造 /generate 页面：自动读取上下文 → 调用 AI → 保存结果 → 跳转 /result
 - 改造 /result 页面：展示 Match Score / Strengths / Gaps / Suggestions
 - 新增 Debug Panel（开发环境展示 Prompt Tokens / Completion Tokens / Response Time / Raw JSON）
 - 创建 .env.local（DEEPSEEK_API_KEY 配置模板）
 - 通过 pnpm build 零错误验证
 
 ### 2026-07-02 — Task 003 JD Input
 
 - 创建 JobDescriptionContext，全局共享 jobDescription
 - 改造 /job 页面：多行 Textarea → 实时字符计数 → Continue 按钮 → /generate
 - 更新 RootLayout Provider 嵌套结构
 - 通过 pnpm build 零错误验证
 
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
