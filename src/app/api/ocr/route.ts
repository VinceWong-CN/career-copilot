import { NextRequest, NextResponse } from "next/server";
import { getOcrProvider } from "@/lib/ocr/provider";

export async function POST(request: NextRequest) {
  console.log("[OCR] Request received");

  let formData;
  try {
    formData = await request.formData();
  } catch (e) {
    console.error("[OCR] FormData error:", e);
    return NextResponse.json({ error: "Failed to parse request" }, { status: 400 });
  }

  const file = formData.get("image") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const fileName = file.name.toLowerCase();
  const allowedExt = [".png", ".jpg", ".jpeg"];
  const allowedMime = ["image/png", "image/jpeg"];

  if (
    !allowedExt.some((ext) => fileName.endsWith(ext)) &&
    !allowedMime.includes(file.type)
  ) {
    return NextResponse.json(
      { error: "Only PNG and JPG images are supported" },
      { status: 400 },
    );
  }

  let buffer;
  try {
    buffer = Buffer.from(await file.arrayBuffer());
  } catch (e) {
    console.error("[OCR] ArrayBuffer error:", e);
    return NextResponse.json({ error: "Failed to read image" }, { status: 500 });
  }
  console.log("[OCR] Image loaded");

  const provider = getOcrProvider();
  console.log("[OCR] OCR started");

  let text;
  try {
    text = await provider.recognize(buffer);
  } catch (e) {
    console.error("[OCR] Recognize error:", e);
    return NextResponse.json({ error: "OCR failed" }, { status: 500 });
  }
  console.log("[OCR] OCR finished");

  console.log("[OCR] Response returned");
  return NextResponse.json({ text });
}
