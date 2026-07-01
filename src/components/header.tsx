 import Link from "next/link";
 
 export function Header() {
   return (
     <header className="border-b">
       <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
         <Link href="/" className="font-semibold">
           Career Copilot
         </Link>
          <nav className="ml-auto flex gap-4 text-sm text-muted-foreground">
           <Link href="/master-resume">简历</Link>
           <Link href="/job">职位</Link>
           <Link href="/result">结果</Link>
        </nav>
       </div>
     </header>
   );
 }
