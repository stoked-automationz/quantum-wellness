import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-forge-red/10 to-obsidian" />
        <div className="absolute inset-0 sacred-geometry-bg" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        {/* Omega */}
        <div className="mb-8">
          <span className="text-quantum-gold/30 text-5xl font-heading">&#937;</span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white-fire tracking-wide leading-tight">
          Ready to Be{" "}
          <span className="forge-flame forge-gradient-text">Forged</span>?
        </h2>

        <p className="mt-6 text-lg text-silver-mist/80 leading-relaxed max-w-2xl mx-auto">
          The volcano doesn&apos;t wait. The transformation doesn&apos;t happen
          from your couch. If you feel the call, answer it. Apply for The Forge
          and begin the most important week of your life.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-12 py-6"
          >
            <Link href="/apply">I&apos;m Ready — Apply Now</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Limited to 10–12 apprentices per cohort. 100% substance-free.
        </p>
      </div>
    </section>
  );
}
