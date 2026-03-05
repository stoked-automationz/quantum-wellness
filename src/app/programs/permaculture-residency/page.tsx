import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Permaculture Residency | Extended Land Training on Hawaii's Big Island",
  description:
    "Live on Quantum Wellness Warrior's volcanic land and learn regenerative agriculture, food forestry, and land stewardship. $600/month extended training residency.",
  keywords: [
    "permaculture training Hawaii",
    "permaculture residency Big Island",
    "regenerative agriculture Hawaii",
    "food forest training",
    "land stewardship program",
  ],
};

export default function PermacultureResidencyPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hands-in-dirt/farmer-preparing-soil.jpg"
            alt="Farmer's hands preparing volcanic soil for planting"
            fill
            className="object-cover"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-obsidian/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-quantum-gold/70 font-heading">
              Extended Training
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            Permaculture{" "}
            <span className="text-quantum-gold">Residency</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Live on the volcanic land. Work the soil with your hands. Learn
            regenerative agriculture not from a textbook but from the earth
            itself. 1–12 months of land-based training that changes how you
            relate to food, place, and purpose.
          </p>
          <p className="mt-4 text-sm text-quantum-gold/70 max-w-xl mx-auto">
            Residency is only available to graduates of the Forge Your Life
            Apprenticeship. You must be Forged before you can live on the land.
          </p>
          <div className="mt-10">
            <span className="font-mono text-4xl font-bold text-quantum-gold">
              $600
            </span>
            <span className="text-silver-mist/60 text-lg">/month</span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white-fire tracking-wide text-center mb-12">
            What You&apos;ll <span className="text-quantum-gold">Learn</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Volcanic soil management & amendment",
              "Food forest design & implementation",
              "Tropical permaculture zone planning",
              "Water harvesting & irrigation on lava",
              "Composting & soil biology",
              "Native Hawaiian plant identification",
              "Sustainable building with natural materials",
              "Seed saving & propagation",
              "Community-scale food production",
              "Integration of permaculture with personal practice",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-quantum-gold shrink-0" />
                <span className="text-silver-mist/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — hands in dirt */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hands-in-dirt/hands-holding-dirt.jpg"
          alt="Hands cupping rich volcanic soil"
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian/30" />
      </section>

      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white-fire tracking-wide">
            Includes <span className="text-quantum-gold">Everything</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed">
            Room on the volcanic property. Whole-food meals. Access to all
            Breath Circle sessions. Mentorship with Amrit. Use of all tools and
            training resources. Community membership. The only additional cost is
            getting yourself to the Big Island.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-12 py-6"
            >
              <Link href="/apply">Apply for Residency</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
