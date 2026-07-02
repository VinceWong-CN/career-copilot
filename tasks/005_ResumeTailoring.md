# Task 005 — Resume Tailoring

## Background

当前 MVP 已完成：

- Task001 — Master Resume Upload
- Task002 — Resume Parsing & Context
- Task003 — JD Input
- Task004 — Match Analysis + Result UI

用户已经能够：

- 上传主简历
- 输入目标 JD
- 获得 AI 匹配分析（Score / Strengths / Gaps / Suggestions）

下一步实现 Career Copilot MVP 的核心能力：

根据 Master Resume、Job Description 和 Match Analysis，生成一份针对目标岗位优化后的 Resume。

本 Task 仅实现 MVP，不增加编辑、导出、Explainability 等能力。

---

## Goal

用户在 Result 页面点击：

【生成定制简历】

系统调用 AI：

Master Resume
+
Job Description
+
Match Analysis

生成一份可直接投递的 Tailored Resume（Markdown）。

---

## User Flow

Result

↓

点击【生成定制简历】

↓

/resume

↓

Loading

↓

AI 生成 Resume

↓

Resume Preview

↓

Copy

---

## Scope

### Step 1

新增 API：

POST /api/generate-resume

输入：

- Master Resume
- Job Description
- Match Analysis

输出：

Markdown Resume

---

### Step 2

修改 Result 页面

新增按钮：

【生成定制简历】

点击：

router.push("/resume")

---

### Step 3

新增页面：

src/app/resume/page.tsx

负责：

- Loading
- 调用 API
- Error
- Markdown Resume Preview
- Copy Button

---

### Step 4

Resume Preview

展示：

- Header
- Summary
- Experience
- Skills
- Education（如存在）

Markdown 渲染即可。

---

## Design Principles

### Authenticity First

允许：

- 调整表达
- 调整结构
- 调整顺序
- 强调与 JD 匹配内容
- 优化 Resume 可读性

禁止：

- 编造项目
- 编造技能
- 编造经历
- 编造数据

AI 必须保持用户经历真实可信。

---

### Output Ready

输出必须是一份可直接投递的 Resume。

不得输出：

- 修改原因
- AI 推理过程
- Diff
- Explainability
- 建议说明

---

## In Scope

✅ AI Resume Generation

✅ Markdown Resume

✅ Loading

✅ Error Handling

✅ Copy Button

---

## Out of Scope

❌ Resume Editor

❌ Why Changed

❌ Explainability

❌ Diff View

❌ PDF Export

❌ DOCX Export

❌ ATS Score

❌ Career Memory

❌ Resume Version History

---

## Acceptance Criteria

- 点击按钮可进入 /resume
- AI 成功生成 Tailored Resume
- Resume Markdown 正常展示
- Copy Button 可正常复制
- Loading / Error 正常
- 不影响 Task001~Task004

---

## Verification

完整流程：

/

↓

Master Resume

↓

Job

↓

Generate（Match Analysis）

↓

Result

↓

Resume（Tailored Resume）

↓

Copy

全部验证通过。

---

## Documentation

完成后更新：

- sprint/sprint.md
- docs/PROJECT_STATE.md
- CHANGELOG.md