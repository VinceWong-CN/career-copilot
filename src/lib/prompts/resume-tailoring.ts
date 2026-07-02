export function buildResumeTailoringPrompt(
  resumeText: string,
  jobDescription: string,
  matchScore: number,
  strengths: string[],
  gaps: string[],
  suggestions: string[],
): string {
  const strengthsText = strengths.map((s) => `- ${s}`).join("\n");
  const gapsText = gaps.map((g) => `- ${g}`).join("\n");
  const suggestionsText = suggestions.map((s) => `- ${s}`).join("\n");

  return `你是一位专业的简历优化顾问。请根据以下材料，为目标岗位生成一份可直接投递的定制简历（Markdown 格式）。

## 原始简历
${resumeText}

## 目标岗位描述
${jobDescription}

## 匹配分析
匹配分数：${matchScore}/100

### 优势
${strengthsText}

### 差距
${gapsText}

### 优化建议
${suggestionsText}

## 原则
1. 真实第一（Authenticity First）：**不得编造任何经历、项目、技能或数据**。仅优化表达方式、结构顺序和与 JD 的相关性。
2. 输出一份可直接投递的完整简历。**不得包含**：修改原因、AI 推理过程、Diff、Explainability 或建议说明。
3. Output ONLY the final resume in Markdown. Do NOT wrap the output inside markdown code fences. Return pure Markdown only.
   Use # headings, ## section titles, - list items for standard Markdown syntax.
4. 结构建议：Summary → Skills → Experience → Education。
5. 对于经验部分，优先展示与目标岗位 JD 高度匹配的经历。
6. 量化成果保持原始数据不变，仅优化表述。`;
}
