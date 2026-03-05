import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    title: "Forge Your Life",
    subtitle: "Week-Long Apprenticeship",
    price: "$5,555",
    description:
      "The flagship rite-of-passage program. Seven days of volcanic immersion, breathwork mastery, permaculture training, and personal transformation. You arrive as raw material. You leave as a warrior.",
    href: "/forge-your-life",
    cta: "Enter The Forge",
    accent: "forge-red",
    featured: true,
  },
  {
    title: "Vital Breath Circle",
    subtitle: "Weekly Breathwork Training",
    price: "$33/mo",
    description:
      "Weekly live breathwork sessions — join from Hilo or anywhere in the world. Access the full archive of past sessions. Build your practice one breath at a time.",
    href: "/breath-circle",
    cta: "Join the Circle",
    accent: "quantum-cyan",
    featured: false,
  },
  {
    title: "Permaculture Residency",
    subtitle: "Extended Land Training",
    price: "$600/mo",
    description:
      "Live on the volcanic land. Learn regenerative agriculture, food forestry, and land stewardship. Open only to Forge Your Life graduates — you must be Forged to live here.",
    href: "/programs/permaculture-residency",
    cta: "Explore Residency",
    accent: "quantum-gold",
    featured: false,
  },
];

export function ProgramCards() {
  return (
    <section className="relative py-24 md:py-32 bg-volcanic-ash/50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white-fire tracking-wide">
            Choose Your <span className="text-quantum-gold">Path</span>
          </h2>
          <p className="mt-4 text-silver-mist/70 max-w-xl mx-auto">
            Three ways to step onto the volcanic training ground. Each one a
            different depth of transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card
              key={program.title}
              className={`relative bg-volcanic-ash border-quantum-gold/10 hover:border-quantum-gold/30 transition-all duration-300 group overflow-hidden ${
                program.featured ? "md:-mt-4 md:mb-4 ring-1 ring-quantum-gold/20" : ""
              }`}
            >
              {program.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 forge-gradient" />
              )}

              <CardContent className="p-8 flex flex-col h-full">
                {/* Price */}
                <div className="mb-4">
                  <span className="font-mono text-3xl font-bold text-quantum-gold">
                    {program.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-heading text-2xl font-bold text-white-fire tracking-wide ${program.featured ? "shimmer-hover" : ""}`}>
                  {program.featured ? (
                    <><span className="forge-flame">Forge</span> Your Life</>
                  ) : (
                    program.title
                  )}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-quantum-gold/70">
                  {program.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-silver-mist/70 leading-relaxed flex-grow">
                  {program.description}
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    asChild
                    className={`w-full font-heading tracking-wider text-xs uppercase ${
                      program.featured
                        ? "bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 gold-glow"
                        : "bg-transparent border border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10"
                    }`}
                  >
                    <Link href={program.href}>{program.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
