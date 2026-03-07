import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Programs | All Training Paths",
  description:
    "Explore all Quantum Wellness Warrior programs: Forge Your Life apprenticeship, Vital Breath Circle, Permaculture Residency, and Work Trade. Find your path to volcanic transformation.",
};

const allPrograms = [
  {
    title: "Forge Your Life",
    subtitle: "Week-Long Apprenticeship",
    price: "$5,555",
    duration: "7 days",
    description:
      "The flagship rite-of-passage program. Seven days of volcanic immersion, breathwork mastery, permaculture training, and personal transformation under direct mentorship.",
    href: "/forge-your-life",
    cta: "Enter The Forge",
    featured: true,
  },
  {
    title: "Vital Breath Circle",
    subtitle: "Biweekly Breathwork Training",
    price: "$33/mo",
    duration: "Ongoing",
    description:
      "Biweekly live breathwork sessions — join from anywhere in the world on our international platform, or in person if you're on the Big Island. Full archive access.",
    href: "/breath-circle",
    cta: "Join the Circle",
    featured: false,
  },
  {
    title: "Permaculture Residency",
    subtitle: "Extended Land Training",
    price: "$600/mo",
    duration: "1–12 months",
    description:
      "Live on the volcanic land. Learn regenerative agriculture, food forestry, and land stewardship. Open only to Forge Your Life graduates — you must be Forged to live here.",
    href: "/programs/permaculture-residency",
    cta: "Explore Residency",
    featured: false,
  },
  {
    title: "Work Trade",
    subtitle: "The Proving Ground",
    price: "Earn your place",
    duration: "1–3 months",
    description:
      "30 hours/week of land work in exchange for room, board, and training access. Not a vacation — a test of commitment. Limited positions available.",
    href: "/programs/work-trade",
    cta: "Learn More",
    featured: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide">
            Choose Your <span className="text-quantum-gold">Path</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Four ways to step onto the volcanic training ground. Each one
            designed for a different level of commitment — but all demanding the
            same thing: that you show up fully.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allPrograms.map((program) => (
              <Card
                key={program.title}
                className={`bg-volcanic-ash border-quantum-gold/10 hover:border-quantum-gold/30 transition-all relative overflow-hidden ${
                  program.featured ? "ring-1 ring-quantum-gold/20" : ""
                }`}
              >
                {program.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 forge-gradient" />
                )}
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white-fire tracking-wide">
                        {program.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-quantum-gold/70 mt-1">
                        {program.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xl font-bold text-quantum-gold">
                        {program.price}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {program.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-silver-mist/70 leading-relaxed flex-grow">
                    {program.description}
                  </p>

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

      {/* Not Sure */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Not Sure Where to <span className="text-quantum-gold">Start</span>?
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed max-w-xl mx-auto">
            Start with the Vital Breath Circle. It&apos;s the lowest commitment
            entry point and gives you a direct experience of QWW&apos;s approach.
            From there, the path reveals itself.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest text-xs uppercase gold-glow"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-widest text-xs uppercase"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
