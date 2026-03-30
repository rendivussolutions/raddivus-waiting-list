import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PlatformResults } from "@/components/sections/PlatformResults";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { FeatureComparison } from "@/components/sections/FeatureComparison";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PlatformResults />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FeatureComparison />
      <FAQ />
      <CTA />
    </>
  );
}
