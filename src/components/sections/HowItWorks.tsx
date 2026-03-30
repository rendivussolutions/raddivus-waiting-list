"use client";

import { motion } from "framer-motion";
import { Palette, Wand2, Download } from "lucide-react";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Palette,
    title: "Set up your Brand Kit",
    description:
      "Add your logo, colors, and business info once. Every ad is automatically built around your brand from here on.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Describe your ad or upload a competitor's",
    description:
      "Use the Ad Generator to describe your offer, or drop any existing ad into the Copier. Raddivus handles the rest.",
  },
  {
    number: "03",
    icon: Download,
    title: "Download and launch",
    description:
      "Your branded ad is ready in seconds. Download at the exact format and resolution Meta requires, then upload directly to Ads Manager.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-28">
      <motion.div
        {...scrollFadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={transitions.slow}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
          Three steps. Under two minutes. Done.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          No design skills. No briefs. No waiting.
        </p>
      </motion.div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              {...scrollFadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                ...transitions.default,
                ...staggerDelay(index),
              }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-6xl font-bold text-white/[0.06] leading-none select-none pointer-events-none">
                {step.number}
              </span>
              <Icon className="w-8 h-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
