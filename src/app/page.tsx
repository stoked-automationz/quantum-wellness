import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { ProgramCards } from "@/components/sections/program-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { LandShowcase } from "@/components/sections/land-showcase";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <ProgramCards />
      <LandShowcase />
      <Testimonials />
      <FinalCta />
    </>
  );
}
