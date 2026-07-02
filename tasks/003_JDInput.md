# Task 003 — JD Input

## Goal

实现目标岗位（Job Description）输入能力。

用户能够输入目标 JD，并进入下一步，为后续 Match Analysis 做准备。

---

## User Story

作为一名求职者，

我希望输入目标岗位 JD，

以便系统后续能够分析我与岗位的匹配程度。

---

## Scope

本 Task 仅实现 JD 输入能力，包括：

- JD 文本输入
- JobDescriptionContext
- Character Count
- Continue Button
- 页面跳转

---

## Functional Requirements

### 1. JD Input

提供一个多行 Textarea。

用户可以自由粘贴目标岗位 JD。

支持较长文本输入。

---

### 2. Character Count

实时显示当前输入字符数。

示例：

字符数：1250

---

### 3. JobDescriptionContext

新增：

JobDescriptionContext

用于全局保存：

- jobDescription

供后续页面读取。

---

### 4. Continue Button

默认 Disabled。

当：

jobDescription.trim().length > 0

时自动启用。

按钮文案：

下一步：开始分析匹配度

点击后跳转：

/generate

---

## UI

页面结构：

标题：
目标岗位

说明：
请输入目标岗位描述（Job Description）

主体：

- Textarea
- Character Count
- Continue Button

---

## Acceptance Criteria

- 可以输入 JD
- Character Count 实时更新
- JobDescriptionContext 保存成功
- Continue Button 正常启用 / 禁用
- 成功跳转至 /generate
- pnpm build 零错误
- pnpm dev 正常运行
- 提供本地测试地址

---

## Out of Scope

本 Task 不实现：

- JD 文件上传
- JD Parsing
- AI Analysis
- Match Score
- Skill Mapping
- Resume Rewrite
- 数据库存储
- 登录系统

---

## Deliverables

完成后输出：

- 修改文件列表
- Self Review
- Manual Verification
- Technical Debt（如无则输出 None）
- pnpm build 结果
- pnpm dev 测试地址
- Recommended Commit Message

等待 Product Review。

---

## Notes

本 Task 仅完成 **JD Input**。

不得提前开发：

- JD Parsing
- JD Analysis
- Match Score
- AI Workflow

遵循原则：

**One Task = One User Capability**