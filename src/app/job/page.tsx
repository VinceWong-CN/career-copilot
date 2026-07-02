 "use client";
 
 import { useState } from "react";
 import { useRouter } from "next/navigation";
 import { Button } from "@/components/ui/button";
 import { useJobDescription } from "@/features/jd/jd-context";
 
 export default function JobPage() {
   const router = useRouter();
   const { setJobDescription } = useJobDescription();
   const [text, setText] = useState("");
 
   const handleContinue = () => {
     setJobDescription(text);
     router.push("/generate");
   };
 
   return (
     <div className="mx-auto max-w-2xl py-12">
       <h1 className="mb-8 text-center text-2xl font-semibold">目标岗位</h1>
 
       <p className="mb-6 text-center text-sm text-muted-foreground">
         请输入目标岗位描述（Job Description）
       </p>
 
       <textarea
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder="在此粘贴或输入目标岗位描述……"
         className="mb-4 h-80 w-full rounded-md border p-4 text-sm leading-relaxed"
       />
 
       <p className="mb-6 text-right text-sm text-muted-foreground">
         字符数：{text.length}
       </p>
 
       <div className="text-center">
         <Button
           size="lg"
           disabled={text.trim().length === 0}
           onClick={handleContinue}
         >
           下一步：开始分析匹配度
         </Button>
       </div>
     </div>
   );
 }
