import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — volcanic eruption image */}
      <div className="absolute inset-0 bg-obsidian">
        <Image
          src="/images/pexels/dramatic-lava-eruption-kilauea.jpg"
          alt="Dramatic lava eruption at Kīlauea volcano"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Omega Symbol */}
        <div className="mb-8">
          <span className="text-quantum-gold text-7xl md:text-8xl font-heading font-bold tracking-widest">
            &#937;
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white-fire tracking-wide leading-tight">
          Hawaii&apos;s Best Total
          <br />
          <span className="forge-flame forge-gradient-text">
            Transformational Center
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
          Not a retreat. A rite of passage. Forged on the active slopes of
          Kīlauea, where earth&apos;s raw power meets human transformation.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-10 py-6"
          >
            <Link href="/apply">Enter The <span className="forge-flame">Forge</span></Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-widest text-sm uppercase px-10 py-6"
          >
            <Link href="/forge-your-life">Learn More</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-quantum-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
