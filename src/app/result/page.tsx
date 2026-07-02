"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMatchAnalysis } from "@/features/match-analysis/match-analysis-context";

const SHOW_DEBUG_PANEL = false;

export default function ResultPage() {
  const router = useRouter();
  const {
    matchAnalysis,
    debugPromptTokens,
    debugCompletionTokens,
    debugResponseTime,
    debugRawJson,
  } = useMatchAnalysis();

  useEffect(() => {
    if (!matchAnalysis) {
      router.replace("/master-resume");
    }
  }, [matchAnalysis, router]);

  if (!matchAnalysis) {
    return null;
  }

  const scoreColor =
    matchAnalysis.matchScore >= 70
      ? "text-green-600"
      : matchAnalysis.matchScore >= 40
        ? "text-yellow-600"
        : "text-red-600";

  const scoreBg =
    matchAnalysis.matchScore >= 70
      ? "bg-green-100"
      : matchAnalysis.matchScore >= 40
        ? "bg-yellow-100"
        : "bg-red-100";

  return (
    <div className="mx-auto max-w-2xl py-12">
      <h1 className="mb-8 text-center text-2xl font-semibold">匹配分析结果</h1>

      <div className="mb-8 text-center">
        <span
          className={`inline-flex items-center justify-center rounded-full ${scoreBg} px-6 py-3 text-4xl font-bold ${scoreColor}`}
        >
          {matchAnalysis.matchScore}
          <span className="ml-1 text-lg">/ 100</span>
        </span>
      </div>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-medium text-green-700">优势</h2>
        <ul className="space-y-2">
          {matchAnalysis.strengths.map((s, i) => (
            <li key={i} className="rounded-md bg-green-50 p-3 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-medium text-red-700">差距</h2>
        <ul className="space-y-2">
          {matchAnalysis.gaps.map((g, i) => (
            <li key={i} className="rounded-md bg-red-50 p-3 text-sm">
              {g}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-medium text-blue-700">优化建议</h2>
        <ul className="space-y-2">
          {matchAnalysis.suggestions.map((s, i) => (
            <li key={i} className="rounded-md bg-blue-50 p-3 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {SHOW_DEBUG_PANEL && (
        <details className="mt-12 rounded-md border p-4">
          <summary className="cursor-pointer text-sm font-medium text-muted-foreground">
            Debug Panel
          </summary>
          <div className="mt-4 space-y-2 text-xs text-muted-foreground">
            <p>AI Provider: DeepSeek Chat</p>
            <p>Prompt Tokens: {debugPromptTokens}</p>
            <p>Completion Tokens: {debugCompletionTokens}</p>
            <p>Response Time: {debugResponseTime} ms</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-medium">
                Raw JSON
              </summary>
              <pre className="mt-2 max-h-60 overflow-auto whitespace-pre-wrap rounded bg-gray-100 p-3 text-xs">
                {debugRawJson}
              </pre>
            </details>
          </div>
        </details>
      )}
    </div>
  );
}
