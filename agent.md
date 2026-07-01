# AGENTS.md

# Career Copilot AI 开发规范

本文件定义所有 AI 开发 Agent（Codex、Claude Code、Cursor 等）在本项目中的统一开发规范。

所有开发任务必须遵循以下规则。

---

# 一、开发前（Before Every Task）

开始任何开发任务之前，必须依次阅读以下文件：

1. docs/PROJECT_STATE.md（当前项目状态）
2. sprint/sprint.md（当前 Sprint 状态）
3. 当前对应的 Task 文件（tasks/xxx.md）
4. 相关产品文档（如有需要）

只有充分理解当前开发背景后，才能开始编码。

---

# 二、开发过程中（During Development）

开发过程中必须遵循以下原则：

- 严格控制在 MVP 范围内开发
- 不得擅自增加产品功能
- 不得修改产品边界
- 保持代码简单、清晰、易维护
- 优先复用已有组件
- 遵循现有项目目录结构
- 所有代码必须保持可读性

如果出现不明确的问题，应记录下来，而不是自行假设。

---

# 三、开发完成后（After Completing a Task）

每完成一个 Task，必须更新以下文件：

- sprint/sprint.md
- docs/PROJECT_STATE.md
- CHANGELOG.md

如果开发过程中发现 Bug，则必须更新：

- logs/BUG_LOG.md

如果开发过程中形成新的技术决策，则更新：

- logs/DECISION_LOG.md

如果开发过程中积累了经验或踩坑，则更新：

- logs/LESSONS_LEARNED.md

---

# 四、错误日志（Error Logging）

所有异常问题必须记录。

每条 Bug 至少包含以下内容：

- 日期
- Task 编号
- Bug 描述
- 根本原因（Root Cause）
- 解决方案（Resolution）
- 当前状态（Open / Closed）

禁止删除历史 Bug。

---

# 五、开发日志（Development Log）

每次开发结束后，记录当天完成内容。

包括：

- 完成了哪些 Task
- 修改了哪些模块
- 当前存在的问题
- 下一步计划

保持开发过程可追踪。

---

# 六、禁止事项（Never）

开发过程中禁止：

- 跳过文档阅读
- 跳过 Sprint 更新
- 跳过 Project State 更新
- 修改已冻结的产品文档
- 擅自扩大 MVP 范围
- 为未来需求进行过度设计（Over Engineering）
- 引入未经讨论的新技术方案

任何超出当前 Task 范围的内容，应记录到 Backlog，而不是直接开发。

---

# 七、开发优先级（Priority）

始终遵循以下优先级：

可运行的软件（Working Software）
>
代码质量（Code Quality）
>
架构设计（Architecture）
>
未来扩展（Future Expansion）

优先保证产品能够运行，再考虑架构优化。

---

# 八、项目目录说明

docs/

产品设计文档（长期维护）

tasks/

开发任务（逐个完成）

sprint/

当前 Sprint 状态（持续更新）

logs/

开发日志、Bug、决策记录

src/

项目源代码

---

# 九、AI 开发工作流（Development Workflow）

所有开发任务必须遵循以下流程：

读取项目状态（PROJECT_STATE）

↓

读取 Sprint

↓

读取当前 Task

↓

开始开发

↓

本地测试

↓

记录 Bug（如有）

↓

更新开发日志

↓

更新 Sprint

↓

更新 Project State

↓

提交代码（Commit）

禁止跳过任何步骤。

---

# 十、项目核心原则（North Star）

Career Copilot 的目标不是生成简历。

Career Copilot 的目标是帮助用户达到 **Offer Ready**。

所有开发任务都必须围绕以下核心流程展开：

Master Resume

↓

Job Description

↓

Match Assessment

↓

Tailored Resume

↓

Interview Preparation

↓

Offer Ready

任何与该流程无关的功能，都不属于当前 MVP。

---

# 十一、MVP 开发原则

每开发一个功能前，请先回答两个问题：

**1. 这个功能是否能帮助用户更快达到 Offer Ready？**

如果不能，不开发。

**2. 这个功能是否属于当前 Sprint？**

如果不是，不开发。

所有未来想法统一放入 Backlog，不影响当前开发。

---

# 十二、开发目标

当前阶段目标只有一个：

**做出第一版真正可用（Usable）的 Career Copilot MVP。**

不是做最完善的产品。

不是做最复杂的架构。

而是尽快交付一个能够完整完成：

Resume → JD → Analysis → Resume → Interview

全流程的产品。

# 产品规范优先级（Specification Hierarchy）

如果多个文档存在冲突，应按照以下优先级执行：

1. AGENTS.md（开发规范）
2. 当前 Task（tasks/）
3. PROJECT_STATE.md
4. sprint.md
5. docs/（产品设计文档）

任何与当前 Task 无关的设计，不应影响当前开发。

产品文档只有在 Product Owner 确认后才能修改。