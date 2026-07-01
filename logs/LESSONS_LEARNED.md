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
