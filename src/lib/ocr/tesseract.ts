import { createWorker } from "tesseract.js";
import type { OcrProvider } from "./provider";

export class TesseractOcrProvider implements OcrProvider {
  private worker: any = null;

  async recognize(buffer: Buffer): Promise<string> {
    if (!this.worker) {
      console.log("[OCR] Creating worker...");
      try {
        this.worker = await createWorker("chi_sim+eng", 1, {
        workerPath: require.resolve("tesseract.js/src/worker-script/node/index.js"),
      });
      } catch (e) {
        console.error("[OCR] Worker creation error:", e);
        throw e;
      }
      console.log("[OCR] Worker ready");
    }

    console.log("[OCR] Start recognize...");
    try {
      const { data } = await this.worker.recognize(buffer);
      console.log("[OCR] Recognize finished");
      return data.text.trim();
    } catch (e) {
      console.error("[OCR] Recognize error:", e);
      throw e;
    }
  }
}
