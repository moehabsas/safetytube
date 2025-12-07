import Link from "next/link";
import { FileText } from "lucide-react";
import WebLogo from "@/components/logo";
import Button from "@/components/ui/button";
import manifest, { type Manifest } from "@/content/manifest";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-between gap-10 p-15 pt-30">
      <WebLogo size={150} />
      <Introduction {...manifest} />
      <Navbar />
    </main>
  );
}

function Introduction({ motto, note }: Pick<Manifest, "motto" | "note">) {
  return (
    <section className="max-w-md flex flex-col items-center gap-6">
      <h1 className="font-semibold text-3xl leading-10">{motto}</h1>
      <p className="font-mono text-lg text-center text-muted-foreground leading-8">
        {note}
      </p>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="flex gap-4 max-sm:flex-col">
      <Button size="lg" className="rounded-full" asChild>
        <Link href="/docs">
          <FileText />
          قراءة التعليمات
        </Link>
      </Button>
      <Button size="lg" variant="outline" className="rounded-full" asChild>
        <Link href="/flashcards">قراءة البطاقات التعليمية</Link>
      </Button>
    </nav>
  );
}
