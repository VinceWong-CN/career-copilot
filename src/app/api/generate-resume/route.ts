import { NextRequest, NextResponse } from "next/server";
import { buildResumeTailoringPrompt } from "@/lib/prompts/resume-tailoring";

export async function POST(request: NextRequest) {
  try {
    const { resumeText, jobDescription, matchAnalysis } = await request.json();

    if (!resumeText || !jobDescription || !matchAnalysis) {
      return NextResponse.json(
        { error: "resumeText, jobDescription, and matchAnalysis are required" },
        { status: 400 },
      );
    }

    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { error: "DEEPSEEK_API_KEY not configured" },
        { status: 500 },
      );
    }

    const prompt = buildResumeTailoringPrompt(
      resumeText,
      jobDescription,
      matchAnalysis.matchScore,
      matchAnalysis.strengths ?? [],
      matchAnalysis.gaps ?? [],
      matchAnalysis.suggestions ?? [],
    );

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        { error: "DeepSeek API error", details: errorBody },
        { status: response.status },
      );
    }

    const data = await response.json();
    const resume = data.choices?.[0]?.message?.content || "";

    return NextResponse.json({ resume: resume.trim() });
  } catch (error) {
    console.error("Generate resume error:", error);
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 });
  }
}
