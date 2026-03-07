import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-volcanic-ash/30 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 volcanic-texture" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="mb-6">
              <div className="h-px w-16 forge-gradient" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white-fire tracking-wide leading-tight">
              The Land{" "}
              <span className="text-quantum-gold">Chose Us</span>
            </h2>

            <p className="mt-6 text-silver-mist/80 leading-relaxed">
              Six acres of raw volcanic earth on the slopes of Kīlauea —
              Hawai&apos;i&apos;s most active volcano, adjacent to over 350,000
              acres of Hawai&apos;i Volcanoes National Park. Ancient Ōhi&apos;a
              old-growth forest. Lava tubes that wind beneath the surface.
              Training grounds carved by millennia of eruption and renewal.
            </p>

            <p className="mt-4 text-silver-mist/80 leading-relaxed">
              This isn&apos;t a manicured wellness campus. This is the forge —
              raw, powerful, and alive. The land itself is the first teacher.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Ancient Ōhi'a old-growth forest canopy",
                "Lava tube cave system for meditation & breathwork",
                "Volcanic Training Ground nestled next to over 550,000 acres of preserve",
                "Permaculture food forest & regenerative gardens",
                "Kumu-blessed ceremonial spaces",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-quantum-gold shrink-0" />
                  <span className="text-sm text-silver-mist/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                className="border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-widest text-xs uppercase"
              >
                <Link href="/the-forge">Explore The Land</Link>
              </Button>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg bg-volcanic-ash border border-quantum-gold/10 overflow-hidden relative">
              <Image
                src="/images/forest/olaa-forest.jpg"
                alt="Dense ōhiʻa rainforest canopy at Olaʻa Forest, Hawaii Volcanoes National Park"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-quantum-gold/10 rounded-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-forge-red/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
