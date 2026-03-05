export function Mission() {
  return (
    <section className="relative py-24 md:py-32 sacred-geometry-bg">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Section marker */}
        <div className="mb-8">
          <div className="h-px w-16 mx-auto forge-gradient" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white-fire tracking-wide leading-tight">
          The Volcano Doesn&apos;t Negotiate.
          <br />
          <span className="text-quantum-gold">Neither Do We.</span>
        </h2>

        <p className="mt-8 text-lg text-silver-mist/80 leading-relaxed max-w-3xl mx-auto">
          Quantum Wellness Warrior is a volcanic transformational center on
          Hawaii&apos;s Big Island — built on ancient lava flows, surrounded by
          old-growth Ōhi&apos;a forest, and powered by the same primal energy
          that created these islands. This is where you come to be forged, not
          pampered.
        </p>

        <p className="mt-6 text-lg text-silver-mist/80 leading-relaxed max-w-3xl mx-auto">
          Our programs are designed as rites of passage — structured
          apprenticeships that use breathwork, movement, permaculture, and
          volcanic land training to strip away what doesn&apos;t serve you and
          forge what remains into something unbreakable.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Substance-Free" },
            { value: "5 acres", label: "Volcanic Land" },
            { value: "1-on-1", label: "Mentorship" },
            { value: "Kīlauea", label: "Active Volcano" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-quantum-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-silver-mist/60 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
