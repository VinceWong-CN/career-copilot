 # LESSONS_LEARNED.md
 
 ## Task 001 — Project Setup
 
 ### 1. shadcn Button 的 asChild 属性需要额外依赖
 
 **问题**：在 `page.tsx` 中使用 `<Button asChild>` 模式时报 TypeScript 错误，提示 `asChild` 不存在。
 
 **原因**：shadcn/ui 的默认 Button 组件通过 Radix Slot（`@radix-ui/react-slot`）实现 `asChild`。
 如果仅通过常规方式创建 Button，不会包含 Slot 依赖，`asChild` 属性不会存在。
 
 **解决方案**：改用 `<Link>` 包裹 `<Button>` 的模式代替 `asChild`，或引入 `@radix-ui/react-slot` 并实现 Slot 逻辑。
 MVP 阶段选择前者，代码更简单直接。
 
 ---
 
 ### 2. shadcn cssVariables 与 Tailwind 主题配置的关系
 
 **问题**：`text-muted-foreground`、`bg-primary` 等 shadcn 样式类在构建后未正确生效。
 
 **原因**：
 - `components.json` 中 `cssVariables: false` 时，Tailwind 不会自动生成 shadcn 颜色类的 CSS 变量引用
 - 即使在 `globals.css` 中声明了 CSS 变量，还需要在 `tailwind.config.ts` 中通过 `theme.extend.colors` 将这些变量映射到 Tailwind 主题
 - 此外，`borderColor`、`ringColor` 等 Tailwind 专有主题属性需要单独扩展，仅设置 `colors` 不足够
 
 **解决方案**：
 1. 在 `globals.css` 中声明所有需要的 CSS 变量
 2. 在 `tailwind.config.ts` 中逐一映射到 `theme.extend.colors`
 3. 将 `components.json` 的 `cssVariables` 设为 `true`
 4. 额外检查 `borderColor`、`ringColor`、`backgroundColor` 等专有主题属性是否需要独立扩展
 
 **当前状态**：`colors` 已正确配置，`borderColor` 和 `ringColor` 未独立扩展（当前颜色值与 Tailwind 默认值相同，无视觉差异，但未来修改 CSS 变量时需注意）。
 
 ## Task 002 — Resume Upload
 
 ### 3. apply_patch 的 "*** Move to:" 语法会删除或覆写文件
 
 **问题**：两次使用 `apply_patch` 的 `*** Move to:` 语法均导致文件损坏或被删除。
 - `components.json` 被删除
 - `master-resume/page.tsx` 被删除
 - `layout.tsx` 被覆写为 Next.js 默认模板（导致完整 UI 丢失）
 
 **原因**：`apply_patch` 工具的 `*** Move to:` 指令执行重命名操作，当 `+` 行（新内容）与重命名同时使用时，工具不会写入补丁内容，而是将目标文件替换为默认模板。此外 `+` 行仅追加内容而非替换，导致新旧代码共存。
 
 **解决方案**：
 - 完整文件重写：使用 `exec_command` 配合 `cat > file << 'EOF' ... EOF` 写入
 - 行级修改：使用 `sed -i ''` 进行精确替换
 - 避免使用 `*** Move to:` 语法
 
 **当前状态**：已修复。`layout.tsx` 恢复正确内容，`components.json` 重新创建。
 
 ---
 
 ### 4. pdf-parse 的 module.parent 检查导致 ESM 导入崩溃
 
 **问题**：`pdf-parse` 通过动态 `import()` 加载时崩溃，报 `ENOENT: test/data/05-versions-space.pdf`。
 
 **原因**：`pdf-parse/index.js` 在文件顶部执行 `let isDebugMode = !module.parent`。在 ESM 上下文（动态 `import()`）中，`module.parent` 为 `undefined`，触发 debug 模式，尝试读取不存在的测试文件。
 
 **解决方案**：跳过 `index.js` 的 debug 代码，直接导入 `pdf-parse/lib/pdf-parse.js`。该文件是实际解析库，不包含 `module.parent` 检查。
 
 **当前状态**：已修复。API 路由使用 `import("pdf-parse/lib/pdf-parse.js")`。
