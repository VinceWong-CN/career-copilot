 "use client";
 
 import { createContext, useContext, useState, type ReactNode } from "react";
 
 interface JobDescriptionContextType {
   jobDescription: string;
   setJobDescription: (text: string) => void;
 }
 
 const JobDescriptionContext = createContext<JobDescriptionContextType | null>(null);
 
 export function JobDescriptionProvider({ children }: { children: ReactNode }) {
   const [jobDescription, setJobDescription] = useState("");
 
   return (
     <JobDescriptionContext.Provider value={{ jobDescription, setJobDescription }}>
       {children}
     </JobDescriptionContext.Provider>
   );
 }
 
 export function useJobDescription() {
   const ctx = useContext(JobDescriptionContext);
   if (!ctx) {
     throw new Error("useJobDescription must be used within JobDescriptionProvider");
   }
   return ctx;
 }
