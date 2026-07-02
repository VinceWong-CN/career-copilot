 export function normalizeResumeText(text: string): string {
   const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
 
   const lines = normalized.split("\n").map((l) => l.trim());
   const result: string[] = [];
 
   for (const line of lines) {
     if (line === "") {
       if (result.length > 0 && result[result.length - 1] !== "") {
         result.push("");
       }
     } else {
       result.push(line);
     }
   }
 
   while (result.length > 0 && result[result.length - 1] === "") {
     result.pop();
   }
 
   return result.join("\n");
 }
