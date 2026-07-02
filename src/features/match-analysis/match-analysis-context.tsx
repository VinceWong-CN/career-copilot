 "use client";
 
 import { createContext, useContext, useState, type ReactNode } from "react";
 
 export interface MatchAnalysisData {
   matchScore: number;
   strengths: string[];
   gaps: string[];
   suggestions: string[];
 }
 
 interface MatchAnalysisContextType {
   matchAnalysis: MatchAnalysisData | null;
   setMatchAnalysis: (data: MatchAnalysisData) => void;
   debugPromptTokens: number;
   debugCompletionTokens: number;
   debugResponseTime: number;
   debugRawJson: string;
   setDebugInfo: (info: {
     promptTokens: number;
     completionTokens: number;
     responseTime: number;
     rawJson: string;
   }) => void;
 }
 
 const MatchAnalysisContext = createContext<MatchAnalysisContextType | null>(null);
 
 export function MatchAnalysisProvider({ children }: { children: ReactNode }) {
   const [matchAnalysis, setMatchAnalysis] = useState<MatchAnalysisData | null>(null);
   const [debugPromptTokens, setDebugPromptTokens] = useState(0);
   const [debugCompletionTokens, setDebugCompletionTokens] = useState(0);
   const [debugResponseTime, setDebugResponseTime] = useState(0);
   const [debugRawJson, setDebugRawJson] = useState("");
 
   const setDebugInfo = (info: {
     promptTokens: number;
     completionTokens: number;
     responseTime: number;
     rawJson: string;
   }) => {
     setDebugPromptTokens(info.promptTokens);
     setDebugCompletionTokens(info.completionTokens);
     setDebugResponseTime(info.responseTime);
     setDebugRawJson(info.rawJson);
   };
 
   return (
     <MatchAnalysisContext.Provider
       value={{
         matchAnalysis,
         setMatchAnalysis,
         debugPromptTokens,
         debugCompletionTokens,
         debugResponseTime,
         debugRawJson,
         setDebugInfo,
       }}
     >
       {children}
     </MatchAnalysisContext.Provider>
   );
 }
 
 export function useMatchAnalysis() {
   const ctx = useContext(MatchAnalysisContext);
   if (!ctx) {
     throw new Error("useMatchAnalysis must be used within MatchAnalysisProvider");
   }
   return ctx;
 }
