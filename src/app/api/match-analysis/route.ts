 import { NextRequest, NextResponse } from "next/server";
 import { buildMatchAnalysisPrompt } from "@/lib/prompts/match-analysis";
 
 export async function POST(request: NextRequest) {
   try {
     const { resumeText, jobDescription } = await request.json();
 
     if (!resumeText || !jobDescription) {
       return NextResponse.json(
         { error: "resumeText and jobDescription are required" },
         { status: 400 },
       );
     }
 
     if (!process.env.DEEPSEEK_API_KEY) {
       return NextResponse.json(
         {
           error: "DEEPSEEK_API_KEY not configured",
           details: "请在项目根目录 .env.local 文件中配置 DEEPSEEK_API_KEY",
         },
         { status: 500 },
       );
     }
 
     const prompt = buildMatchAnalysisPrompt(resumeText, jobDescription);
     const startTime = Date.now();
 
     const response = await fetch("https://api.deepseek.com/chat/completions", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
       },
       body: JSON.stringify({
         model: "deepseek-chat",
         messages: [{ role: "user", content: prompt }],
         response_format: { type: "json_object" },
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
     const endTime = Date.now();
 
     const content = data.choices?.[0]?.message?.content;
     if (!content) {
       return NextResponse.json(
         { error: "Empty response from DeepSeek API" },
         { status: 500 },
       );
     }
 
     const analysis = JSON.parse(content);
 
     return NextResponse.json({
       matchScore: analysis.matchScore ?? 0,
       strengths: analysis.strengths ?? [],
       gaps: analysis.gaps ?? [],
       suggestions: analysis.suggestions ?? [],
       debug: {
         promptTokens: data.usage?.prompt_tokens ?? 0,
         completionTokens: data.usage?.completion_tokens ?? 0,
         responseTime: endTime - startTime,
         rawJson: content,
       },
     });
   } catch (error) {
     console.error("Match analysis error:", error);
     const message =
       error instanceof SyntaxError
         ? "AI 返回了非法 JSON，请重试"
         : "Match analysis failed";
     return NextResponse.json({ error: message }, { status: 500 });
   }
 }
