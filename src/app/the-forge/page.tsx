import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Forge | Volcanic Training Ground on Hawaii's Big Island",
  description:
    "Explore the volcanic land that is Quantum Wellness Warrior's training ground — 6 acres of raw earth on Kīlauea's slopes, ancient Ōhi'a forest, lava tube caves, and permaculture gardens.",
  keywords: [
    "volcanic land Hawaii",
    "Big Island property",
    "Kilauea retreat center",
    "Ohia forest Hawaii",
    "lava tube meditation",
    "permaculture Hawaii",
  ],
};

const landmarks = [
  {
    title: "Epic Hiking Grounds",
    description:
      "Less than 5 minutes away from one of the most private trails to access the vast preserve. Direct access to the cave. Mauna Loa National Park and Volcanoes National Park have countless trails to choose from.",
    image: "/images/sunrise/predawn-lava-flow-sunrise.jpg",
    alt: "Pre-dawn volcanic landscape with warm glow on the horizon",
  },
  {
    title: "Ancient Ōhi'a Forest",
    description:
      "Old-growth Ōhi'a lehua trees — some over a century old — form a living cathedral on the property, alongside the rare and ancient Hāpu'u fern. A legitimately Jurassic forest. Sacred to Hawaiian culture, these trees are survivors. They teach resilience by existing.",
    image: "/images/forest/ohia-lehua-on-lava.jpg",
    alt: "ʻŌhiʻa lehua tree with red blossoms growing on dark volcanic lava rock",
  },
  {
    title: "The Cave",
    description:
      "A vast lava tube system beneath the property. Used for meditation, breathwork, and the silence practices that are part of every Forge Your Life cohort. With three entrances, we still haven't found the end of this cave system. In complete darkness, underground, there is nowhere to hide from yourself.",
    image: "/images/lava-tubes/dark-lava-tube-interior.jpg",
    alt: "Dark lava tube cave interior with textured volcanic rock walls",
  },
  {
    title: "The Training Ground",
    description:
      "A vital, open campus — a sanctuary for physical training, movement, and outdoor work. Raw volcanic earth underfoot. No mirrors, no machines — just the body and the land.",
    image: "/images/sunrise/haleakala-silhouette-clouds.jpg",
    alt: "Silhouette of person standing above the clouds at volcanic summit",
  },
  {
    title: "Permaculture Gardens",
    description:
      "Regenerative food forests and garden beds that demonstrate what's possible when you work with volcanic soil rather than against it. Residents and apprentices grow the food they eat.",
    image: "/images/hands-in-dirt/hands-holding-dirt.jpg",
    alt: "Hands cupping rich volcanic soil — regenerative gardening",
  },
  {
    title: "Ceremonial Space",
    description:
      "A Kahiko Kumu — an ancient form of hula tied to deep spiritual beliefs, genealogy, and the raw natural kingdom. Using instruments and rigid symbolic movements to create transformation through communion with nature and the natural ways. This kumu-blessed space is used for opening and closing ceremonies, community gatherings, and the culminating rite of passage that ends each Forge Your Life cohort.",
    image: "/images/forest/tropical-canopy-lookup.jpg",
    alt: "Looking up through tropical forest canopy with light filtering through leaves",
  },
];

export default function TheForgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide leading-tight">
            The <span className="forge-flame forge-gradient-text">Forge</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Six acres of raw volcanic earth on the slopes of Kīlauea, adjacent
            to over 350,000 acres of Hawai&apos;i Volcanoes National Park. Ancient
            forest. Lava tubes. Training grounds carved by eruption and renewal.
            This is where transformation happens — not in a conference room, but
            on the living body of the planet.
          </p>
        </div>
      </section>

      {/* Photo Essay */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-6xl px-4">
          {/* Main panorama image */}
          <div className="aspect-[21/9] rounded-lg bg-volcanic-ash border border-quantum-gold/10 overflow-hidden relative mb-16">
            <Image
              src="/images/usgs/summit-caldera-aerial-wide-fullres.jpg"
              alt="Aerial panorama of Kīlauea summit caldera with volcanic landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
          </div>

          {/* Grid images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/forest/olaa-forest.jpg", alt: "Dense ōhiʻa rainforest canopy at Olaʻa Forest", label: "Ōhi'a forest canopy" },
              { src: "/images/lava-tubes/thurston-lava-tube-interior.jpg", alt: "Warm-lit interior of Thurston Lava Tube", label: "Lava tube entrance" },
              { src: "/images/sunrise/haleakala-sunrise-clouds.jpg", alt: "Volcanic landscape with epic hiking grounds above the clouds", label: "Epic hiking grounds" },
            ].map((img) => (
              <div
                key={img.label}
                className="aspect-[4/3] rounded-lg bg-volcanic-ash border border-quantum-gold/10 overflow-hidden relative group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs text-silver-mist/80 font-heading tracking-wider uppercase">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
              Sacred <span className="text-quantum-gold">Ground</span>
            </h2>
          </div>

          <div className="space-y-16">
            {landmarks.map((landmark, index) => (
              <div
                key={landmark.title}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Landmark image */}
                <div className="w-full md:w-2/5 shrink-0">
                  <div className="aspect-[4/3] rounded-lg bg-volcanic-ash border border-quantum-gold/10 overflow-hidden relative group">
                    <Image
                      src={landmark.image}
                      alt={landmark.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-white-fire tracking-wide">
                    {landmark.title}
                  </h3>
                  <p className="mt-4 text-silver-mist/70 leading-relaxed">
                    {landmark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation */}
      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-8">
            <div className="h-px w-16 mx-auto forge-gradient" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Stewardship, Not <span className="text-quantum-gold">Ownership</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 leading-relaxed">
            We are not only owners of this land — we are its current stewards.
            Every structure we build, every garden we plant, every path we clear
            is done with the understanding that we are guests on ancient ground
            — and that the land will outlast every one of us.
          </p>
          <p className="mt-4 text-silver-mist/80 leading-relaxed">
            Our conservation practices include protecting the native Ōhi&apos;a
            forest, removing invasive species, building with sustainable
            materials, and operating on permaculture principles that give back
            more to the land than they take.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-fire tracking-wide">
            Walk This <span className="forge-flame forge-gradient-text">Ground</span>
          </h2>
          <p className="mt-6 text-silver-mist/80 max-w-xl mx-auto">
            The land is waiting. Apply for a program and come see what volcanic
            earth feels like under your feet.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow text-sm uppercase px-12 py-6"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
