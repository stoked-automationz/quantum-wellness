import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I came to Hawaii looking for a retreat. I found something far more demanding — and far more real. The Forge broke me open in the best possible way.",
    name: "Marcus T.",
    role: "Forge Your Life Graduate",
  },
  {
    quote:
      "The breathwork alone changed my relationship with my own body. Doing it on volcanic land, with Amrit guiding you through the fire — there's nothing like it.",
    name: "Sarah K.",
    role: "Breath Circle Member",
  },
  {
    quote:
      "I spent 30 days on the land. No substances, no distractions, just the work. I left with clarity I haven't felt in decades.",
    name: "James R.",
    role: "Permaculture Resident",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 sacred-geometry-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Forged in <span className="text-quantum-gold">Fire</span>
          </h2>
          <p className="mt-4 text-silver-mist/70 max-w-xl mx-auto">
            Words from those who walked through the flame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-volcanic-ash/50 border-quantum-gold/10"
            >
              <CardContent className="p-8">
                {/* Quote mark */}
                <div className="text-4xl text-quantum-gold/30 font-heading leading-none mb-4">
                  &ldquo;
                </div>
                <blockquote className="text-silver-mist/80 text-sm leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-quantum-gold/10 flex items-center justify-center">
                    <span className="text-quantum-gold font-heading text-sm font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white-fire">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-quantum-gold/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
