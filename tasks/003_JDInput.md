# Task 003 — JD Input

## Goal

将 /job 从占位页面升级为完整的 JD 输入页面。

支持两种输入方式：

1. 粘贴 JD 文本
2. 上传 JD 图片（PNG/JPG/JPEG）

所有输入最终统一为可编辑文本，并保存到 JobDescriptionContext。

---

## User Story

作为求职者，

我希望能够通过复制 JD 或上传岗位截图快速导入岗位信息，

无需手动输入，

并且可以在 OCR 后继续修改内容。

---

## Scope

### In Scope

- JD 文本输入（Textarea）
- JD 图片上传（PNG/JPG/JPEG）
- 图片 OCR 提取文本
- OCR 后自动填充 Textarea
- 用户继续编辑
- 实时字符统计
- 保存 JobDescriptionContext
- Continue 按钮

### Out of Scope

- PDF JD
- DOCX JD
- 多图片上传
- 拖拽上传
- 自动分析
- AI 匹配
- Resume Rewrite

---

## Step 1

新增：

src/app/api/parse-jd-image/route.ts

POST：

接收图片

调用 OCR（Vision Model）

返回：

{
  "text": "..."
}

---

## Step 2

更新：

src/features/jd/jd-context.tsx

保持结构不变。

OCR 结果与 Textarea 输入统一保存：

jobDescription

---

## Step 3

更新：

src/app/job/page.tsx

页面展示：

标题

目标岗位

说明

请输入岗位描述，或上传岗位截图自动识别。

输入区域：

Textarea

支持长文本

显示：

字符数

---

新增：

上传图片 Button

支持：

PNG

JPG

JPEG

上传成功：

自动调用：

/api/parse-jd-image

OCR 完成：

自动填充 Textarea

用户仍可继续编辑。

---

Continue Button

默认 Disabled

当：

jobDescription.trim().length > 0

Enable

点击：

保存 Context

跳转：

/generate

---

## OCR Requirements

支持：

- 招聘网站截图
- 浏览器截图
- 微信截图
- 飞书截图
- 本地图片

不限制来源。

OCR 输出必须进入 Textarea。

不得直接进入 Analysis。

---

## Acceptance Criteria

- 文本输入正常
- 图片上传正常
- OCR 成功返回文本
- Textarea 自动填充
- 用户可继续编辑
- Continue 正常跳转
- pnpm build 零错误
- pnpm dev 正常启动
- 提供测试地址

---

## Manual Verification

验证：

① 手动输入 JD

Continue 可正常进入 Generate。

② 上传岗位截图

OCR 成功。

Textarea 自动填充。

③ 修改 OCR 内容

保存成功。

④ Continue 后

JobDescriptionContext 内容正确。

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