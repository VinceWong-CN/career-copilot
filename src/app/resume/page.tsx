"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import { useMasterResume } from "@/features/master-resume/master-resume-context";
import { useJobDescription } from "@/features/jd/jd-context";
import { useMatchAnalysis } from "@/features/match-analysis/match-analysis-context";
import { Copy, Check } from "lucide-react";

function stripCodeFence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^```(?:markdown)?\n?([\s\S]*?)\n?```$/);
  return match ? match[1].trim() : trimmed;
}

const markdownComponents: Components = {
  h1: ({ children, ...props }: any) => (
    <h1 {...props} className="mb-1 text-center text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 {...props} className="mb-1 text-center text-xl text-muted-foreground">{children}</h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 {...props} className="mb-2 mt-6 border-b pb-1 text-lg font-semibold">{children}</h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 {...props} className="mb-1 mt-4 text-base font-medium">{children}</h4>
  ),
  p: ({ children, ...props }: any) => (
    <p {...props} className="mb-2 text-sm leading-relaxed">{children}</p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul {...props} className="mb-2 list-disc pl-5">{children}</ul>
  ),
  li: ({ children, ...props }: any) => (
    <li {...props} className="text-sm leading-relaxed">{children}</li>
  ),
  hr: () => <hr className="my-4" />,
  strong: ({ children, ...props }: any) => (
    <strong {...props} className="font-semibold">{children}</strong>
  ),
};

export default function ResumePage() {
  const router = useRouter();
  const { resumeText } = useMasterResume();
  const { jobDescription } = useJobDescription();
  const { matchAnalysis } = useMatchAnalysis();
  const [resume, setResume] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;

    if (!resumeText || !jobDescription || !matchAnalysis) {
      router.replace("/master-resume");
      return;
    }

    calledRef.current = true;

    const generate = async () => {
      setError("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/generate-resume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeText, jobDescription, matchAnalysis }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.details || data.error || "生成失败");
          return;
        }

        setResume(stripCodeFence(data.resume));
      } catch {
        setError("网络错误，请重试");
      } finally {
        setIsLoading(false);
      }
    };

    generate();
  }, [resumeText, jobDescription, matchAnalysis, router]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="mx-auto max-w-3xl py-12">
      <h1 className="mb-8 text-center text-2xl font-semibold">定制简历</h1>

      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground border-t-transparent" />
          <p className="text-sm text-muted-foreground">正在生成定制简历……</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center gap-4 py-20">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => {
              calledRef.current = false;
              setError("");
              setIsLoading(true);
            }}
            className="rounded-md bg-primary px-6 py-2 text-sm text-primary-foreground"
          >
            重试
          </button>
        </div>
      )}

      {resume && (
        <>
          <div className="mb-4 text-right">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-accent"
            >
              {copied ? (
                <><Check className="h-4 w-4" /> 已复制</>
              ) : (
                <><Copy className="h-4 w-4" /> 复制</>
              )}
            </button>
          </div>

          <div className="min-h-[60vh] rounded-md border p-8">
            <ReactMarkdown components={markdownComponents}>
              {resume}
            </ReactMarkdown>
          </div>

          {copied && (
            <div className="fixed bottom-6 right-6 rounded-md bg-green-600 px-4 py-2 text-sm text-white shadow-lg">
              复制成功
            </div>
          )}
        </>
      )}
    </div>
  );
}
