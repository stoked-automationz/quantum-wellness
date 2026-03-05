import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Why This Is Not a Retreat | Quantum Wellness Warrior — Big Island, Hawaii",
  description:
    "Quantum Wellness Warrior is not a retreat. It's a volcanic transformational center — a rite-of-passage training facility on Hawaii's Big Island. Here's why the distinction matters.",
  keywords: [
    "not a retreat",
    "transformational center vs retreat",
    "men's transformation Hawaii",
    "rite of passage program",
    "warrior training Big Island",
    "sober retreat alternative Hawaii",
  ],
};

const comparisons = [
  {
    retreat: "You go to relax",
    forge: "You go to be challenged",
  },
  {
    retreat: "Comfort is the product",
    forge: "Growth is the product",
  },
  {
    retreat: "Optional activities",
    forge: "Structured apprenticeship",
  },
  {
    retreat: "You're a guest",
    forge: "You're an apprentice",
  },
  {
    retreat: "Spa treatments",
    forge: "Breathwork & land training",
  },
  {
    retreat: "Leave feeling relaxed",
    forge: "Leave fundamentally changed",
  },
  {
    retreat: "Substances often available",
    forge: "100% substance-free",
  },
  {
    retreat: "Consumer transaction",
    forge: "Rite of passage",
  },
];

export default function NotARetreatPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white-fire tracking-wide leading-tight">
            This Is{" "}
            <span className="text-forge-red">Not</span>{" "}
            a Retreat
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re looking for a vacation with yoga, this isn&apos;t
            it. If you&apos;re looking to be genuinely, permanently transformed
            — keep reading.
          </p>
        </div>
      </section>

      {/* The Distinction */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              Retreat vs.{" "}
              <span className="text-quantum-gold">Transformational Center</span>
            </h2>
            <p className="mt-4 text-silver-mist/70 max-w-2xl mx-auto">
              The wellness industry has collapsed everything into &ldquo;retreats.&rdquo;
              But a retreat is a step backward. What we offer is a step through.
            </p>
          </div>

          <div className="space-y-3">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 px-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-heading">
                A Retreat
              </div>
              <div className="text-xs uppercase tracking-widest text-quantum-gold font-heading">
                The Forge
              </div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-volcanic-ash/50 border border-quantum-gold/5"
              >
                <div className="text-sm text-silver-mist/50 line-through decoration-silver-mist/20">
                  {row.retreat}
                </div>
                <div className="text-sm text-silver-mist/90 font-medium">
                  {row.forge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <div className="h-px w-16 mx-auto forge-gradient" />
          </div>

          <div className="space-y-8 text-silver-mist/80 leading-relaxed text-lg">
            <p>
              The modern wellness industry has a problem. It sells comfort as
              transformation. It offers &ldquo;retreats&rdquo; that are really vacations
              with mantras. You arrive, you relax, you eat clean food for a week,
              and you return to your life exactly the same person — just with
              better Instagram content.
            </p>
            <p>
              <strong className="text-white-fire">
                We reject this model entirely.
              </strong>
            </p>
            <p>
              Quantum Wellness Warrior is a transformational center. The
              distinction is not semantic — it&apos;s structural. A retreat is
              designed around the consumer&apos;s comfort. A transformational
              center is designed around the participant&apos;s growth. These are
              fundamentally different objectives, and they produce fundamentally
              different outcomes.
            </p>
            <p>
              When you come to The Forge, you are not a guest. You are an
              apprentice. You wake at sunrise. You breathe in the cold volcanic
              morning air. You work the land with your hands. You sit in the
              darkness of a lava tube and confront whatever you&apos;ve been
              running from. You are mentored — not entertained.
            </p>
            <p>
              This is not for everyone. It&apos;s not supposed to be. It&apos;s
              for the people who are done with half-measures. Done with
              self-improvement books they never finish. Done with meditation apps
              that don&apos;t stick. Done with the comfortable lie that change
              can happen without discomfort.
            </p>
            <p>
              <strong className="text-quantum-gold">
                If that&apos;s you — The Forge is waiting.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              Common <span className="text-quantum-gold">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is this safe?",
                a: "Yes. We provide safety — not comfort. All activities are supervised. Medical screening is part of the application process. The challenge is emotional and physical, not reckless.",
              },
              {
                q: "Why substance-free?",
                a: "Because real transformation doesn't need chemicals. Plant medicines, microdosing, and alcohol are crutches that create dependence, not resilience. We train your nervous system — not bypass it.",
              },
              {
                q: "Is this only for men?",
                a: "No. While much of our language resonates with men seeking transformation, Forge Your Life is open to all genders. The fire doesn't discriminate.",
              },
              {
                q: "What if I'm not physically fit?",
                a: "Good. You don't need to be. The program meets you where you are. The volcanic land is the gym, and the only competition is with yourself.",
              },
              {
                q: "How is this different from therapy?",
                a: "Therapy is valuable. This is not a replacement. This is a rite of passage — an immersive, embodied, land-based experience that complements therapeutic work. Many participants continue therapy alongside their QWW practice.",
              },
            ].map((faq) => (
              <Card
                key={faq.q}
                className="bg-volcanic-ash/50 border-quantum-gold/10"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white-fire tracking-wide">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Ready for Something{" "}
            <span className="forge-flame forge-gradient-text">Real</span>?
          </h2>
          <p className="mt-6 text-silver-mist/80 max-w-xl mx-auto">
            Stop retreating. Start forging.
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

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Quantum Wellness Warrior safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide safety — not comfort. All activities are supervised. Medical screening is part of the application process.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Quantum Wellness Warrior substance-free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because real transformation doesn't need chemicals. We train your nervous system — not bypass it.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a retreat and a transformational center?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A retreat is designed around the consumer's comfort. A transformational center is designed around the participant's growth. These are fundamentally different objectives with fundamentally different outcomes.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
