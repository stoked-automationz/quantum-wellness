import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center sacred-geometry-bg">
      <div className="text-center px-4">
        <div className="text-quantum-gold text-6xl font-heading mb-6">&#937;</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white-fire tracking-wide">
          Lost in the <span className="text-quantum-gold">Lava Fields</span>
        </h1>
        <p className="mt-4 text-silver-mist/70 max-w-md mx-auto">
          This page doesn&apos;t exist — but The Forge does. Let&apos;s get you
          back on the path.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            asChild
            className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest text-xs uppercase"
          >
            <Link href="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-widest text-xs uppercase"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
