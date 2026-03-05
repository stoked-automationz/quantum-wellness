import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work Trade Program | The Proving Ground",
  description:
    "Earn your place at Quantum Wellness Warrior through 30 hours/week of volcanic land work. Room, board, and training access in exchange for commitment and sweat.",
};

export default function WorkTradePage() {
  return (
    <>
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-forge-red font-heading">
              The Proving Ground
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            Work <span className="text-forge-red">Trade</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            No money? Bring sweat. 30 hours per week of volcanic land work in
            exchange for room, board, and access to all QWW training. This is
            not a vacation program. This is where you prove you belong.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide mb-6">
                What You <span className="text-quantum-gold">Give</span>
              </h2>
              <div className="space-y-4">
                {[
                  "30 hours/week of physical land work",
                  "Permaculture maintenance & building",
                  "Trail clearing & invasive species removal",
                  "Garden management & food production",
                  "Property maintenance & improvement",
                  "Community support duties",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-forge-red shrink-0" />
                    <span className="text-silver-mist/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide mb-6">
                What You <span className="text-quantum-gold">Get</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Room on the volcanic property",
                  "Whole-food plant-forward meals",
                  "Access to all Breath Circle sessions",
                  "Permaculture training alongside residents",
                  "Mentorship and community membership",
                  "The transformation that comes from real work",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-quantum-gold shrink-0" />
                    <span className="text-silver-mist/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white-fire tracking-wide">
            This Is a <span className="text-forge-red">Test</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed">
            Work trade at QWW is not a hostel arrangement. It&apos;s an audition
            for commitment. We accept very few positions. Those who thrive here
            often become long-term members of the QWW community — some transition
            to paid staff or permaculture residency. But it starts with
            proving you can show up, work hard, and do it sober.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-12 py-6"
            >
              <Link href="/apply">Apply for Work Trade</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            1–3 month commitment required &middot; 100% substance-free
          </p>
        </div>
      </section>
    </>
  );
}
