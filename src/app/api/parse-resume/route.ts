 import { NextRequest, NextResponse } from "next/server";
 import { normalizeResumeText } from "@/lib/resume-normalizer";
 
 export async function POST(request: NextRequest) {
   try {
     const formData = await request.formData();
     const file = formData.get("file") as File | null;
 
     if (!file) {
       return NextResponse.json({ error: "No file provided" }, { status: 400 });
     }
 
     const fileName = file.name.toLowerCase();
 
     if (!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")) {
       return NextResponse.json(
         { error: "Only PDF and DOCX files are supported" },
         { status: 400 },
       );
     }
 
     const buffer = Buffer.from(await file.arrayBuffer());
     let text = "";
 
     if (fileName.endsWith(".pdf")) {
       const pdfParse = (await import("pdf-parse/lib/pdf-parse.js")).default;
       const pdfData = await pdfParse(buffer);
       text = pdfData.text;
     } else {
       const mammoth = await import("mammoth");
       const result = await mammoth.extractRawText({ buffer });
       text = result.value;
     }
 
     return NextResponse.json({ text: normalizeResumeText(text), fileName: file.name });
   } catch (error) {
     console.error("Parse error:", error);
     return NextResponse.json({ error: "Failed to parse file" }, { status: 500 });
   }
 }
