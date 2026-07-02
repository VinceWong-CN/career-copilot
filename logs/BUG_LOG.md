 # BUG_LOG.md
 
 ## Task 001 — Project Setup
 
 ### Bug 001: components.json 语法错误（悬挂 JSON 字段）
 
 - **日期**: 2026-07-01
 - **Task**: 001
 - **描述**: `components.json` 第 17 行存在悬挂的 `"cssVariables": true`，超出 JSON 对象闭合括号，导致文件为无效 JSON。
 - **根因**: `apply_patch` 工具的 `+` 指令在当前文件行后追加新行，而非替换匹配行。执行 `+   "cssVariables": true` 后，原 `"cssVariables": false` 未被删除，新行被追加到文件末尾的 `}` 外部。
 - **解决方案**: 重写 `components.json`，统一设为 `cssVariables: true`。
 - **状态**: Closed

---

## Task 002 — Resume Upload

### Bug 002: layout.tsx 被 apply_patch "*** Move to:" 覆写为默认模板

- **日期**: 2026-07-02
- **Task**: 002
- **症状（Symptom）**: 所有页面 UI 丢失 — Header、Footer 消失，CSS 不加载，页面纯白无样式。
- **根因（Root Cause）**: 使用 `apply_patch` 的 `*** Move to: src/app/layout.tsx` 语法时，工具未写入补丁内容，而是将文件替换为 Next.js 默认模板。导致 `import "./globals.css"`、`Header`、`Footer`、`MasterResumeProvider`、flex 布局类全部丢失。
- **解决方案（Resolution）**: 通过 `exec_command` 配合 `cat >` 完整重写 `layout.tsx`。
- **状态（Status）**: Closed

---

### Bug 003: pdf-parse ESM 动态导入崩溃（module.parent 检查）

- **日期**: 2026-07-02
- **Task**: 002
- **症状（Symptom）**: PDF 文件上传后解析失败，API 返回 500 错误。`pnpm build` 通过但运行时崩溃。
- **根因（Root Cause）**: `pdf-parse/index.js` 执行 `let isDebugMode = !module.parent`。通过 ESM `import()` 动态加载时，`module.parent` 为 `undefined`，触发 debug 模式，尝试 `Fs.readFileSync('./test/data/05-versions-space.pdf')`。该文件不存在，抛出 `ENOENT` 错误。
- **解决方案（Resolution）**: 跳过有 debug 代码的 `index.js`，直接导入 `pdf-parse/lib/pdf-parse.js`（实际的解析函数，不包含 `module.parent` 检查）。
- **状态（Status）**: Closed

---

### Bug 004: apply_patch "+" 语义导致 route.ts 中新旧代码共存

- **日期**: 2026-07-02
- **Task**: 002
- **症状（Symptom）**: 更新 `parse-resume/route.ts` 使用 `normalizeResumeText()` 后，构建通过但运行时行为异常。旧 `text.trim()` 返回语句与新 `normalizeResumeText(text)` 返回语句同时存在于文件中。
- **根因（Root Cause）**: `apply_patch` 的 `@@` 上下文匹配后，`+` 行仅追加新内容而不删除匹配行。旧返回语句被保留，新返回语句被追加到函数闭括号之后。
- **解决方案（Resolution）**: 使用 `sed -i ''` 删除多余的旧返回语句和函数外部的悬空代码。
- **状态（Status）**: Closed

### Bug 005: DOCX 含图片时解析结果产生过量空行

- **日期**: 2026-07-02
- **Task**: 002
- **症状（Symptom）**: DOCX 文件中包含图片时，`mammoth.extractRawText()` 输出大量连续空行，预览区域显示异常。
- **根因（Root Cause）**: `mammoth` 在处理非文本元素（如图片、嵌入式对象）时输出额外的空行标记。原始代码直接返回解析结果，未做任何后处理清理。
- **解决方案（Resolution）**: 创建 `src/lib/resume-normalizer.ts`，在解析后统一应用文本正常化：去除连续空行、统一换行符（`\r\n` → `\n`）、修剪每行首尾空白、保留段落分隔（单空行）、去除末尾多余空行。
- **状态（Status）**: Closed
