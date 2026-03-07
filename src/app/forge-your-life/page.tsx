import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Forge Your Life Apprenticeship | Week-Long Transformation Training — Hawaii's Big Island",
  description:
    "The flagship rite-of-passage program at Quantum Wellness Warrior. A 7-day volcanic apprenticeship combining breathwork mastery, permaculture training, and personal transformation. $5,555.",
  keywords: [
    "transformation retreat Hawaii",
    "men's transformation retreat Big Island",
    "life transformation program",
    "week-long retreat Hawaii",
    "warrior training Hawaii",
    "breathwork retreat Big Island",
  ],
};

const journeyStages = [
  {
    stage: "01",
    title: "Raw Material",
    subtitle: "Day 1–2: Arrival & Assessment",
    description:
      "You arrive as you are — with your stories, your patterns, your armor. We meet you where you stand. Orientation, baseline breathwork assessment, intention setting with Amrit, and your first walk on the volcanic land.",
  },
  {
    stage: "02",
    title: "The Forge",
    subtitle: "Day 3–5: Breaking & Rebuilding",
    description:
      "The fire begins. Daily sunrise breathwork on the Forge. Permaculture labor that puts your body in contact with the earth. Cave meditation in the lava tubes. One-on-one mentorship sessions that cut through decades of conditioning.",
  },
  {
    stage: "03",
    title: "The Warrior",
    subtitle: "Day 6: Integration & Emergence",
    description:
      "What survives the forge is forged steel. A culminating ceremony with kumu blessing. You articulate your new operating system. You claim your warrior name. You are witnessed by the cohort.",
  },
  {
    stage: "04",
    title: "The Forged",
    subtitle: "Day 7+: Lifelong Connection",
    description:
      "Departure is not the end. You leave Forged — a permanent member of the Quantum Wellness Warrior circle, with ongoing Breath Circle access, community membership, and a re-entry protocol designed to prevent backsliding.",
  },
];

const included = [
  "7 nights volcanic land accommodation",
  "All meals — whole-food, plant-forward, locally sourced",
  "Daily sunrise breathwork sessions on the Forge",
  "One-on-one mentorship with Amrit",
  "Permaculture hands-on training",
  "Lava tube cave meditation sessions",
  "Kumu blessing ceremony",
  "Lifetime membership in The Forged Circle",
  "30 days post-program Breath Circle access",
  "Personal transformation protocol & integration guide",
];

export default function ForgeYourLifePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6">
            <span className="shimmer-hover inline-block text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-quantum-gold font-heading font-bold px-6 py-2 border border-quantum-gold/30 rounded-sm cursor-default">
              The Flagship Program
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white-fire tracking-wide leading-tight">
            <span className="forge-flame">Forge</span> Your{" "}
            <span className="forge-flame forge-gradient-text">Life</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            A 7-day volcanic apprenticeship. Not a retreat you attend — a rite
            of passage you survive. You arrive as raw material. You leave as a
            warrior.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <span className="font-mono text-4xl md:text-5xl font-bold text-quantum-gold">
              $5,555
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Or 5 payments of $1,111 &middot; Limited to 10–12 per cohort
          </p>
        </div>
      </section>

      {/* Journey Visualization */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              The Journey Through{" "}
              <span className="text-quantum-gold">The Forge</span>
            </h2>
          </div>

          <div className="space-y-0">
            {journeyStages.map((stage, index) => (
              <div key={stage.stage} className="relative">
                {/* Connecting line */}
                {index < journeyStages.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-0 w-px bg-gradient-to-b from-quantum-gold/30 to-quantum-gold/5" />
                )}

                <div className="flex gap-6 md:gap-8 pb-16">
                  {/* Stage number */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-quantum-gold/30 flex items-center justify-center bg-obsidian">
                      <span className="font-mono text-sm md:text-base font-bold text-quantum-gold">
                        {stage.stage}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white-fire tracking-wide">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-quantum-gold/70">
                      {stage.subtitle}
                    </p>
                    <p className="mt-4 text-silver-mist/70 leading-relaxed max-w-2xl">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Anchoring */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              The <span className="text-quantum-gold">Investment</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Forge Your Life — The Flagship */}
            <Card className="bg-volcanic-ash border-quantum-gold/30 text-center ring-1 ring-quantum-gold/20 relative md:order-2 md:-mt-4 md:mb-4">
              <div className="absolute top-0 left-0 right-0 h-1 forge-gradient" />
              <CardContent className="p-8 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-quantum-gold mb-2">
                  The Apprenticeship
                </p>
                <p className="font-mono text-3xl font-bold text-quantum-gold">
                  $5,555
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  7 days, total transformation
                </p>
                <p className="mt-4 text-sm text-silver-mist/70 leading-relaxed">
                  The rite of passage. One week on volcanic ground that
                  changes everything. You leave as one of The Forged.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase gold-glow"
                  >
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Or 5 payments of $1,111
                </p>
              </CardContent>
            </Card>

            {/* Live on the Land — Residency */}
            <Card className="bg-volcanic-ash/50 border-quantum-gold/10 text-center md:order-1 group hover:border-quantum-gold/30 transition-all duration-300">
              <CardContent className="p-8 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Live on the Land
                </p>
                <p className="font-mono text-2xl font-bold text-white-fire">
                  $600<span className="text-base text-silver-mist/50">/mo</span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Permaculture Residency
                </p>
                <p className="mt-4 text-sm text-silver-mist/70 leading-relaxed">
                  For the man who&apos;s ready to go all in. Live on volcanic
                  ground. Train daily. Build something real with your hands.
                  Room, board, and mentorship included.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-wider text-xs uppercase"
                  >
                    <Link href="/programs/permaculture-residency">Learn More</Link>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Requires completion of Forge Your Life
                </p>
              </CardContent>
            </Card>

            {/* Invest in the Vision */}
            <Card className="bg-volcanic-ash/50 border-quantum-gold/10 text-center md:order-3 group hover:border-quantum-gold/30 transition-all duration-300">
              <CardContent className="p-8 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Invest in the Vision
                </p>
                <p className="font-mono text-2xl font-bold text-white-fire">
                  Inquire
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Future Luxury Infrastructure
                </p>
                <p className="mt-4 text-sm text-silver-mist/70 leading-relaxed">
                  We&apos;re building Hawaii&apos;s first volcanic
                  transformational center. Invest in the next phase —
                  premium lodging, expanded facilities, and a legacy
                  on sacred ground.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-quantum-gold/30 text-quantum-gold hover:bg-quantum-gold/10 font-heading tracking-wider text-xs uppercase"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  For aligned investors and partners
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What's included */}
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide text-center mb-8">
              Everything Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-quantum-gold shrink-0" />
                  <span className="text-sm text-silver-mist/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kumu & Cultural Partnership */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <div className="h-px w-16 mx-auto forge-gradient" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Rooted in <span className="text-quantum-gold">Respect</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed max-w-2xl mx-auto">
            Every Forge Your Life cohort includes a blessing ceremony led by a
            kumu (Hawaiian cultural practitioner). We operate on this land not only as
            owners but as stewards, honoring the traditions of the people who
            have called these volcanic slopes home for centuries.
          </p>
          <p className="mt-4 text-silver-mist/80 leading-relaxed max-w-2xl mx-auto">
            Our permaculture practices are rooted in indigenous Hawaiian
            land-stewardship principles. Transformation here isn&apos;t a
            Western invention applied to a tropical backdrop — it&apos;s a
            collaboration with the land and its original caretakers.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Enter{" "}
            <span className="forge-flame forge-gradient-text">The Forge</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed max-w-xl mx-auto">
            Apply now — limited to 10 to 12 apprentices per cohort. 100% substance-free.
            Application required — this is not a booking, it&apos;s a commitment.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-12 py-6"
            >
              <Link href="/apply">Apply for The Forge</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Forge Your Life — Week-Long Volcanic Apprenticeship",
            description:
              "A 7-day rite-of-passage program combining breathwork mastery, permaculture training, and personal transformation on Hawaii's Big Island.",
            provider: {
              "@type": "Organization",
              name: "Quantum Wellness Warrior",
              url: "https://quantumwellnesswarrior.com",
            },
            offers: {
              "@type": "Offer",
              price: "5555",
              priceCurrency: "USD",
              url: "https://quantumwellnesswarrior.com/forge-your-life",
              availability: "https://schema.org/LimitedAvailability",
            },
            courseMode: "onsite",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              location: {
                "@type": "Place",
                name: "The Forge — Volcanic Training Ground",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Hilo",
                  addressRegion: "HI",
                  addressCountry: "US",
                },
              },
            },
          }),
        }}
      />
    </>
  );
}
