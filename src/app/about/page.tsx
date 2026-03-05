import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Our Story & Mission",
  description:
    "Meet the team behind Quantum Wellness Warrior. Learn about Amrit's vision for volcanic transformation and the mission driving Hawaii's first transformational center.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            The <span className="text-quantum-gold">Story</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Every institution starts with a person who refused to accept the
            world as it was. This is Amrit&apos;s story — and how a patch of
            volcanic earth became the proving ground for human transformation.
          </p>
        </div>
      </section>

      {/* Amrit's Story */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-lg bg-volcanic-ash border border-quantum-gold/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl text-quantum-gold/20 mb-2">&#937;</div>
                  <p className="text-xs text-muted-foreground italic">
                    Amrit — Founder
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="font-heading text-3xl font-bold text-white-fire tracking-wide">
                Amrit&apos;s Path
              </h2>
              <p className="text-silver-mist/80 leading-relaxed">
                Amrit didn&apos;t find wellness in a spa. He found it in the
                fire — through breathwork, through physical discipline, through
                the radical honesty that comes when you strip away every
                comfortable lie you&apos;ve been telling yourself.
              </p>
              <p className="text-silver-mist/80 leading-relaxed">
                After years of studying transformation practices across
                traditions — from Wim Hof Method to ancient pranayama, from
                permaculture design to indigenous land stewardship — he landed
                on the Big Island. Not to retire. To build.
              </p>
              <p className="text-silver-mist/80 leading-relaxed">
                The volcanic land chose him as much as he chose it. Five acres
                of raw earth on the slopes of Kīlauea, surrounded by ancient
                Ōhi&apos;a forest, with lava tubes threading beneath the surface
                like the island&apos;s own nervous system. This wasn&apos;t a
                place for a wellness resort. It was a forge.
              </p>
              <p className="text-silver-mist/80 leading-relaxed">
                Quantum Wellness Warrior was born from a simple conviction: real
                transformation requires real challenge. Not a vacation with yoga.
                Not a seminar with a workbook. A rite of passage — ancient in
                form, modern in method, and relentless in its demand that you
                become who you actually are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <div className="h-px w-16 mx-auto forge-gradient" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            The <span className="text-quantum-gold">Mission</span>
          </h2>
          <blockquote className="mt-8 text-xl md:text-2xl text-silver-mist/90 leading-relaxed italic max-w-3xl mx-auto font-heading">
            &ldquo;To build an institution — not a business — where human beings
            are forged through direct contact with volcanic earth, honest
            mentorship, and the ancient rite of passage that modern life has
            abandoned.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-quantum-gold/70">— Amrit, Founder</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              What We <span className="text-quantum-gold">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Radical Sobriety",
                description:
                  "100% substance-free. No plant medicines, no microdosing, no alcohol. Transformation through discipline, not chemistry.",
              },
              {
                title: "Land Stewardship",
                description:
                  "We don't own this land — we steward it. Permaculture principles guide everything we build. We leave it better than we found it.",
              },
              {
                title: "Cultural Respect",
                description:
                  "We operate in partnership with kumu (cultural practitioners) and honor the Hawaiian traditions of this place. This is their land first.",
              },
              {
                title: "No Spiritual Bypassing",
                description:
                  "We don't sell enlightenment. We sell hard work. The transformation is real because the challenge is real.",
              },
              {
                title: "Institutional Integrity",
                description:
                  "We're building an institution, not a lifestyle brand. Decisions are made for the long game — 50 years, not 5.",
              },
              {
                title: "The Forge Over The Spa",
                description:
                  "Comfort is the enemy of growth. We provide safety, not comfort. You will be challenged. That's the point.",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="bg-volcanic-ash/50 border-quantum-gold/10"
              >
                <CardContent className="p-8">
                  <h3 className="font-heading text-lg font-bold text-white-fire tracking-wide">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            The <span className="forge-flame forge-gradient-text">Vision</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed">
            Quantum Wellness Warrior is the first node in a larger vision: a
            network of volcanic transformational centers — each rooted in local
            ecology, each operating with institutional permanence, each
            producing warriors who return to their communities and build.
          </p>
          <p className="mt-4 text-silver-mist/80 leading-relaxed">
            The Big Island is the origin point. The proving ground. What works
            here will spread — not as a franchise, but as a model. A new
            category of institution for a world that desperately needs one.
          </p>
        </div>
      </section>
    </>
  );
}
