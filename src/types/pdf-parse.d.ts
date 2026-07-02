declare module "pdf-parse" {
  export default function pdfParse(
    dataBuffer: Buffer,
    options?: object,
  ): Promise<{
    text: string;
    numpages: number;
    info: Record<string, unknown>;
    metadata: Record<string, unknown>;
    version: string;
  }>;
}

declare module "pdf-parse/lib/pdf-parse.js" {
  export default function pdfParse(
    dataBuffer: Buffer,
    options?: object,
  ): Promise<{
    text: string;
    numpages: number;
    info: Record<string, unknown>;
    metadata: Record<string, unknown>;
    version: string;
  }>;
}
