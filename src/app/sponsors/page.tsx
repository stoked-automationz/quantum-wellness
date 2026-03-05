import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sponsors | Who Built The Forge",
  description:
    "Meet the partners and builders behind Quantum Wellness Warrior. The tools, technology, and people who forged this platform.",
};

const sponsors = [
  {
    title: "Stoked Automations",
    role: "Website & Automation",
    description:
      "The team that built this platform from the ground up. Stoked Automations engineered the QWW digital presence — from the volcanic UI to the backend systems that keep the fire burning. Automation, web development, and the technical backbone of the Forge.",
    href: "https://stokedautomations.com",
    cta: "Visit Stoked Automations",
  },
  {
    title: "Purium Health Products",
    role: "Nutrition Partner",
    description:
      "Plant-based nutrition that fuels the transformation. Purium provides the organic superfoods, cleanses, and supplements used by every apprentice on the volcanic land. No synthetics. No shortcuts.",
    href: "https://ishoppurium.com?giftcard=Quantumwellnesswarrior",
    cta: "Shop Purium",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide">
            The{" "}
            <span className="forge-flame forge-gradient-text">Builders</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Nothing is forged alone. These are the partners and builders behind
            Quantum Wellness Warrior — the people who stoke the fire.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.map((sponsor) => (
              <Card
                key={sponsor.title}
                className="bg-volcanic-ash border-quantum-gold/10 hover:border-quantum-gold/30 transition-colors"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <p className="text-xs text-quantum-gold/70 font-heading tracking-widest uppercase mb-2">
                    {sponsor.role}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide">
                    {sponsor.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed flex-grow">
                    {sponsor.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase"
                    >
                      <a
                        href={sponsor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {sponsor.cta}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white-fire tracking-wide">
            Align With the{" "}
            <span className="forge-flame forge-gradient-text">Mission</span>
          </h2>
          <p className="mt-6 text-silver-mist/70 max-w-xl mx-auto leading-relaxed">
            We partner with brands and builders who share the warrior ethos —
            substance over spectacle, transformation over transaction.
          </p>
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-wider text-xs uppercase"
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}