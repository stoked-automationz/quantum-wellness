import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Vital Breath Circle | Weekly Breathwork Training in Hilo, Hawaii",
  description:
    "Join Quantum Wellness Warrior's weekly breathwork training — live from Hilo, Hawaii or from anywhere in the world. $33/month for unlimited access to live sessions and the full archive.",
  keywords: [
    "breathwork training Hawaii",
    "breathwork class Hilo",
    "online breathwork course",
    "weekly breathwork",
    "vital breathwork",
    "breathwork retreat Big Island",
  ],
};

const features = [
  {
    title: "Live Weekly Sessions",
    description:
      "Every week, Amrit leads a live breathwork session from the volcanic land. Join in person in Hilo or stream from anywhere in the world.",
  },
  {
    title: "Full Archive Access",
    description:
      "Every past session recorded and available on demand. Build your practice on your schedule with a library that grows every week.",
  },
  {
    title: "In-Person + Remote",
    description:
      "Hilo locals can attend in person on the volcanic land. Remote members join via high-quality livestream. Same session, same energy.",
  },
  {
    title: "Community Connection",
    description:
      "You're not practicing alone. Connect with fellow Breath Circle members, share breakthroughs, and support each other's practice.",
  },
];

export default function BreathCirclePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6">
            <span className="inline-block border border-quantum-cyan/40 bg-quantum-cyan/10 px-5 py-1.5 text-xs uppercase tracking-[0.3em] text-quantum-cyan font-heading rounded-full shadow-[0_0_15px_rgba(0,212,255,0.15),0_0_30px_rgba(0,212,255,0.08)]">
              Weekly Practice
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            Vital Breath{" "}
            <span className="text-quantum-cyan wind-swirl wind-particles">Circle</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Your breath is the first and last thing you own. Learn to wield it.
            Weekly live breathwork training from Hawai&apos;i&apos;s volcanic
            coast — join from Hilo or anywhere on Earth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="font-mono text-4xl md:text-5xl font-bold text-quantum-cyan">
              $33
            </span>
            <span className="text-silver-mist/60 text-lg">/month</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Cancel anytime &middot; Unlimited access
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-quantum-cyan text-obsidian hover:bg-quantum-cyan/90 font-heading tracking-widest text-sm uppercase px-10 py-6"
            >
              <Link href="/apply">Join the Circle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-volcanic-ash/50 border-quantum-gold/10 hover:border-quantum-cyan/20 transition-colors"
              >
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Breathwork */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Why <span className="text-quantum-cyan">Breathwork</span>?
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed">
            Breathwork is the oldest technology for human transformation. It
            predates every therapy, every supplement, every biohack. When you
            learn to control your breath, you learn to control your nervous
            system, your emotional state, and your response to stress.
          </p>
          <p className="mt-4 text-silver-mist/80 leading-relaxed">
            The Vital Breath Circle isn&apos;t gentle &ldquo;relaxation
            breathing.&rdquo; It&apos;s structured training — progressive,
            demanding, and transformational. You&apos;ll learn techniques drawn
            from Wim Hof, pranayama, and combat breathing, adapted for volcanic
            training conditions.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { value: "52+", label: "Sessions / Year" },
              { value: "Live", label: "Every Week" },
              { value: "∞", label: "Archive Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl font-bold text-quantum-cyan">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-silver-mist/60 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Start <span className="text-quantum-cyan">Breathing</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed max-w-xl mx-auto">
            Join the Vital Breath Circle and begin building the most fundamental
            practice of your life. Your first session is waiting.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-quantum-cyan text-obsidian hover:bg-quantum-cyan/90 font-heading tracking-widest text-sm uppercase px-10 py-6"
            >
              <Link href="/apply">Join for $33/mo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
