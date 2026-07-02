 "use client";
 
 import { createContext, useContext, useState, type ReactNode } from "react";
 
 interface MasterResumeContextType {
   fileName: string;
   resumeText: string;
   setFileName: (name: string) => void;
   setResumeText: (text: string) => void;
 }
 
 const MasterResumeContext = createContext<MasterResumeContextType | null>(null);
 
 export function MasterResumeProvider({ children }: { children: ReactNode }) {
   const [fileName, setFileName] = useState("");
   const [resumeText, setResumeText] = useState("");
 
   return (
     <MasterResumeContext.Provider
       value={{ fileName, resumeText, setFileName, setResumeText }}
     >
       {children}
     </MasterResumeContext.Provider>
   );
 }
 
 export function useMasterResume() {
   const ctx = useContext(MasterResumeContext);
   if (!ctx) {
     throw new Error("useMasterResume must be used within MasterResumeProvider");
   }
   return ctx;
 }
