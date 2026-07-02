"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMasterResume } from "@/features/master-resume/master-resume-context";
import { useJobDescription } from "@/features/jd/jd-context";
import { useMatchAnalysis } from "@/features/match-analysis/match-analysis-context";

export default function GeneratePage() {
  const router = useRouter();
  const { fileName, resumeText } = useMasterResume();
  const { jobDescription } = useJobDescription();
  const { setMatchAnalysis, setDebugInfo } = useMatchAnalysis();
  const [error, setError] = useState("");
  const calledRef = useRef(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (calledRef.current) return;

    if (!resumeText && !jobDescription) {
      router.replace("/master-resume");
      return;
    }
    if (!resumeText) {
      router.replace("/master-resume");
      return;
    }
    if (!jobDescription) {
      router.replace("/job");
      return;
    }

    calledRef.current = true;

    const doAnalysis = async () => {
      setError("");

      try {
        const res = await fetch("/api/match-analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeText, jobDescription }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.details || data.error || "分析失败");
          calledRef.current = false;
          return;
        }

        setMatchAnalysis({
          matchScore: data.matchScore,
          strengths: data.strengths,
          gaps: data.gaps,
          suggestions: data.suggestions,
        });

        setDebugInfo({
          promptTokens: data.debug.promptTokens,
          completionTokens: data.debug.completionTokens,
          responseTime: data.debug.responseTime,
          rawJson: data.debug.rawJson,
        });

        router.replace("/result");
      } catch {
        setError("网络错误，请重试");
        calledRef.current = false;
      }
    };

    doAnalysis();
  }, [resumeText, jobDescription, router, setMatchAnalysis, setDebugInfo, retryCount]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
      {error ? (
        <>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => {
              calledRef.current = false;
              setRetryCount((c) => c + 1);
            }}
            className="rounded-md bg-primary px-6 py-2 text-sm text-primary-foreground"
          >
            重试
          </button>
        </>
      ) : (
        <>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground border-t-transparent" />
          <p className="text-muted-foreground">正在分析你的简历与岗位匹配度……</p>
        </>
      )}
    </div>
  );
}
