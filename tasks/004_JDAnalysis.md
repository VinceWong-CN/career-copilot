# Task 004 — Match Analysis

## Goal

基于用户主简历（Master Resume）与目标岗位（Job Description），调用 AI 完成岗位匹配分析（Match Analysis）。

本 Task 仅负责分析，不修改简历。

---

## User Story

作为一名求职者，

我希望系统能够分析我的主简历与目标岗位之间的匹配程度，

帮助我了解优势、差距以及后续优化方向。

---

## Scope

本 Task 仅实现：

- 读取 Resume
- 读取 JD
- 调用 AI
- 输出 Match Analysis
- 保存 Analysis Result
- 自动跳转 Result 页面

---

## Architecture

Resume

+

JD

↓

Next.js API

↓

DeepSeek API

↓

Match Analysis JSON

↓

MatchAnalysisContext

↓

Result Page

---

## Step 1 — Prompt

新增：

src/lib/prompts/match-analysis.ts

创建统一 Prompt。

Prompt 仅负责：

- Match Score
- Strengths
- Gaps
- Suggestions

不得包含 Resume Rewrite。

---

## Step 2 — API

新增：

src/app/api/match-analysis/route.ts

POST：

输入：

- resumeText
- jobDescription

调用：

DeepSeek Chat API

返回：

Match Analysis JSON

---

## Step 3 — MatchAnalysisContext

新增：

src/features/match-analysis/match-analysis-context.tsx

保存：

- matchScore
- strengths
- gaps
- suggestions

供 Result 页面读取。

---

## Step 4 — Generate Page

修改：

src/app/generate/page.tsx

进入页面后：

自动：

读取：

- MasterResumeContext
- JobDescriptionContext

调用：

/api/match-analysis

成功后：

保存：

MatchAnalysisContext

自动：

router.push("/result")

页面仅显示：

- Loading
- 正在分析你的简历与岗位匹配度...

无需展示分析结果。

---

## Step 5 — Result Page

修改：

src/app/result/page.tsx

展示：

Match Score

Strengths

Gaps

Suggestions

仅展示分析结果。

不得修改 Resume。

---

## AI Output Schema

AI 必须返回合法 JSON：

```json
{
  "matchScore": 82,
  "strengths": [
    "...",
    "...",
    "..."
  ],
  "gaps": [
    "...",
    "...",
    "..."
  ],
  "suggestions": [
    "...",
    "...",
    "..."
  ]
}
```

---

## Debug Panel（Development Only）

仅开发环境显示。

建议：

```ts
const SHOW_DEBUG =
process.env.NODE_ENV === "development";
```

Result 页面底部显示：

AI Provider：

DeepSeek Chat

Prompt Tokens：

xxxx

Completion Tokens：

xxxx

Response Time：

xxxx ms

Raw JSON：

完整 JSON（可折叠）

Debug Panel 必须与业务 UI 完全解耦。

上线时无需删除代码。

Production 自动隐藏。

---

## Functional Requirements

### Read Context

读取：

- MasterResumeContext
- JobDescriptionContext

---

### AI Analysis

调用：

DeepSeek Chat API

完成：

Match Analysis

---

### Save Result

保存：

MatchAnalysisContext

---

### Navigation

分析完成：

自动：

router.push("/result")

---

## Acceptance Criteria

- 成功读取 Resume
- 成功读取 JD
- 成功调用 DeepSeek API
- AI 返回合法 JSON
- MatchAnalysisContext 保存成功
- 自动跳转 Result 页面
- pnpm build 零错误
- pnpm dev 正常运行
- 提供本地测试地址

---

## Manual Verification

准备两组不同数据：

Resume A + JD A

Resume A + JD B

验证：

① Match Score 不同

② Strengths 不同

③ Gaps 不同

④ Suggestions 不同

⑤ AI 内容能够引用 Resume 内容

例如：

Boss直聘

↓

互联网平台市场经验

⑥ AI 内容能够引用 JD 内容

例如：

JD：

要求 SQL

↓

Gap：

缺少 SQL 项目经验

证明：

AI 真正完成分析，而不是固定返回。

---

## Out of Scope

本 Task 不实现：

- Resume Rewrite
- Cover Letter
- Interview Coach
- Career Memory
- Skill Graph
- 历史记录
- 登录系统

---

## Deliverables

完成后输出：

- 修改文件列表
- Self Review
- Manual Verification
- Technical Debt（如无输出 None）
- pnpm build 结果
- pnpm dev 结果
- 本地测试地址
- Recommended Commit Message

如发现 Bug：

更新：

logs/BUG_LOG.md

如形成长期经验：

同步更新：

logs/LESSONS_LEARNED.md

等待 Product Review。

未经批准：

不得 git commit。

不得 git push。

---

## Notes

本 Task 仅完成 Match Analysis。

不得提前开发：

- Resume Rewrite
- Cover Letter
- Interview Coach

遵循原则：

One Task = One User Capability