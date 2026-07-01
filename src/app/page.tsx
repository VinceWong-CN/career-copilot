 import Link from "next/link";
 import { Button } from "@/components/ui/button";
 
 export default function HomePage() {
   return (
     <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
       <h1 className="text-4xl font-bold tracking-tight">Career Copilot</h1>
      <p className="max-w-md text-lg text-muted-foreground">
        帮助求职者更高效地达到 Offer Ready。
      </p>
       <Link href="/master-resume">
         <Button size="lg">开始</Button>
      </Link>
    </div>
   );
 }
