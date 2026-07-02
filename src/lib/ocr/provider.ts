import { TesseractOcrProvider } from "./tesseract";

export interface OcrProvider {
  recognize(buffer: Buffer, mimeType?: string): Promise<string>;
}

let instance: OcrProvider | null = null;

export function getOcrProvider(): OcrProvider {
  if (!instance) {
    instance = new TesseractOcrProvider();
  }
  return instance;
}
