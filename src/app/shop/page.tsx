import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shop | Purium Health Products",
  description:
    "Shop Quantum Wellness Warrior's recommended Purium health products. Plant-based nutrition, cleanses, and supplements selected by our team.",
};

const products = [
  {
    title: "30-Day Ultimate Lifestyle Transformation",
    description:
      "The signature Purium cleanse program. 30 days of plant-based nutrition designed to reset your body at the cellular level. The same program our residents use on arrival.",
    href: "https://ishoppurium.com/collections/30-day-ult?giftcard=Quantumwellnesswarrior",
    cta: "Shop 30-Day ULT",
  },
  {
    title: "90-Day Ultimate Lifestyle Transformation",
    description:
      "For those ready to go deeper. Three months of structured nutritional transformation. Recommended for Forge Your Life graduates continuing their practice at home.",
    href: "https://ishoppurium.com/collections/90-day-ult?giftcard=Quantumwellnesswarrior",
    cta: "Shop 90-Day ULT",
  },
  {
    title: "Full Purium Shop",
    description:
      "Browse the complete Purium catalog — individual superfoods, protein powders, greens, and more. All organic, plant-based, non-GMO.",
    href: "https://ishoppurium.com?giftcard=Quantumwellnesswarrior",
    cta: "Browse All Products",
  },
  {
    title: "Become a Brand Partner",
    description:
      "Interested in sharing Purium with your community? Learn about the brand partner program and build a nutrition-based income stream.",
    href: "https://ishoppurium.com?giftcard=Quantumwellnesswarrior",
    cta: "Learn About Partnership",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide">
            <span className="text-quantum-gold">Shop</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            The fuel matters. We partner with Purium for plant-based nutrition
            that supports the kind of transformation we demand. These are the
            same products we use on the volcanic land.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card
                key={product.title}
                className="bg-volcanic-ash border-quantum-gold/10 hover:border-quantum-gold/30 transition-colors"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-mist/70 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase"
                    >
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.cta}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            QWW is a Purium affiliate partner. Purchases through our links
            support the transformational center at no extra cost to you.
          </p>
        </div>
      </section>
    </>
  );
}
