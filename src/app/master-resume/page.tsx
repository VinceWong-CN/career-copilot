 "use client";
 
 import { useState, useRef } from "react";
 import { useRouter } from "next/navigation";
 import { Upload } from "lucide-react";
 import { Button } from "@/components/ui/button";
import { useMasterResume } from "@/features/master-resume/master-resume-context";
 
 export default function MasterResumePage() {
   const router = useRouter();
   const { setFileName, setResumeText } = useMasterResume();
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [file, setFile] = useState<File | null>(null);
   const [parsedText, setParsedText] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");
 
   const handleUpload = async (selectedFile: File) => {
     setError("");
     setIsLoading(true);
     setParsedText("");
 
     const formData = new FormData();
     formData.append("file", selectedFile);
 
     try {
       const res = await fetch("/api/parse-resume", { method: "POST", body: formData });
       const data = await res.json();
 
       if (!res.ok) {
         setError(data.error || "Parse failed");
         return;
       }
 
       setParsedText(data.text);
       setFileName(data.fileName);
       setResumeText(data.text);
     } catch {
       setError("解析失败，请重试");
     } finally {
       setIsLoading(false);
     }
   };
 
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const f = e.target.files?.[0];
     if (!f) return;
     setFile(f);
     handleUpload(f);
   };
 
   return (
     <div className="mx-auto max-w-2xl py-12">
       <h1 className="mb-8 text-center text-2xl font-semibold">上传主简历</h1>
 
       <div className="mb-8 rounded-lg border-2 border-dashed p-10 text-center">
         <Upload className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
         <p className="mb-2 text-sm text-muted-foreground">
           支持 PDF、DOCX 格式
         </p>
         <input
           ref={fileInputRef}
           type="file"
           accept=".pdf,.docx"
           className="hidden"
           onChange={handleFileChange}
         />
         <Button
           type="button"
           variant="outline"
           onClick={() => fileInputRef.current?.click()}
           disabled={isLoading}
         >
           {isLoading ? "解析中..." : "选择文件"}
         </Button>
         {file && !isLoading && (
           <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>
         )}
       </div>
 
       {error && (
         <div className="mb-6 rounded-md bg-red-50 p-4 text-sm text-red-600">
           {error}
         </div>
       )}
 
       {parsedText && (
         <div className="mb-8">
           <h2 className="mb-3 text-lg font-medium">预览</h2>
           <textarea
             readOnly
             value={parsedText}
             className="h-80 w-full rounded-md border p-4 text-sm leading-relaxed"
           />
         </div>
       )}
 
       <div className="text-center">
         <Button
           size="lg"
           disabled={!parsedText}
           onClick={() => router.push("/job")}
         >
           继续
         </Button>
       </div>
     </div>
   );
 }
