import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community | The Forged Circle",
  description:
    "Join the Quantum Wellness Warrior community — a lifelong network of Forge graduates, Breath Circle members, and residents. The Forged Circle.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            The <span className="text-quantum-gold">Forged</span> Circle
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Transformation doesn&apos;t end when you leave the volcanic land. The
            Forged Circle is our lifelong community — a network of warriors who hold each
            other accountable and continue the work together.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Forge Graduates",
                description:
                  "Every Forge Your Life graduate becomes one of The Forged. Share your journey, support new apprentices, and stay connected to the practice.",
              },
              {
                title: "Breath Circle Members",
                description:
                  "Weekly breathwork creates weekly connection. The circle is both a practice community and a support system. Remote or local — you belong here.",
              },
              {
                title: "Residents & Work Traders",
                description:
                  "Those who have lived and worked on the volcanic land carry a unique bond. The resident network is the backbone of the QWW community.",
              },
            ].map((tier) => (
              <Card
                key={tier.title}
                className="bg-volcanic-ash/50 border-quantum-gold/10"
              >
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide">
                    {tier.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed">
                    {tier.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Join the <span className="text-quantum-gold">Conversation</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed max-w-xl mx-auto">
            Our community lives on Mighty Networks — a dedicated platform for
            deep conversation, resource sharing, event coordination, and mutual
            support. No social media noise. Just real connection.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-10 py-6"
            >
              <Link href="/apply">Join The Forged</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Community access included with all programs.
          </p>
        </div>
      </section>
    </>
  );
}
