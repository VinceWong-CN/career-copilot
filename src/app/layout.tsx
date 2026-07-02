import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MasterResumeProvider } from "@/features/master-resume/master-resume-context";
import { JobDescriptionProvider } from "@/features/jd/jd-context";
import { MatchAnalysisProvider } from "@/features/match-analysis/match-analysis-context";

export const metadata: Metadata = {
  title: "Career Copilot",
  description: "帮助求职者更高效地达到 Offer Ready。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col">
        <MasterResumeProvider>
          <JobDescriptionProvider>
            <MatchAnalysisProvider>
              <Header />
              <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
                {children}
              </main>
              <Footer />
            </MatchAnalysisProvider>
          </JobDescriptionProvider>
        </MasterResumeProvider>
      </body>
    </html>
  );
}
