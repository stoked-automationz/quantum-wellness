import type { Metadata } from "next";
import { ApplicationForm } from "@/components/forms/application-form";

export const metadata: Metadata = {
  title: "Apply | Enter The Forge",
  description:
    "Apply for Quantum Wellness Warrior programs. This is not a booking — it's a commitment. Begin the most important transformation of your life.",
};

export default function ApplyPage() {
  return (
    <section className="relative py-24 md:py-32 min-h-screen sacred-geometry-bg">
      <div className="mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-quantum-gold text-4xl font-heading">&#937;</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Cross the <span className="forge-flame forge-gradient-text">Threshold</span>
          </h1>
          <p className="mt-4 text-silver-mist/70 max-w-lg mx-auto">
            This application is the first step. Not everyone is accepted. We
            look for readiness, not perfection.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}
