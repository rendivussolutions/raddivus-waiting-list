"use client";

import { motion } from "framer-motion";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface Stat {
  value: string;
  label: string;
  context: string;
}

const stats: Stat[] = [
  {
    value: "3.2x",
    label: "Higher ROI",
    context: "Average return for ads created with Raddivus",
  },
  {
    value: "25K+",
    label: "Ads Generated",
    context: "Professional creatives produced on the platform",
  },
  {
    value: "22%",
    label: "Higher CTR",
    context: "Average click-through rate improvement",
  },
  {
    value: "12 sec",
    label: "Ad Creation",
    context: "Average time to generate a complete ad",
  },
];

export function PlatformResults() {
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
          Results that speak for themselves
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Numbers from real Raddivus users and campaigns.
        </p>
      </motion.div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            {...scrollFadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              ...transitions.default,
              ...staggerDelay(index),
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl md:text-5xl font-semibold text-foreground mb-1">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-foreground/80 mb-2">
              {stat.label}
            </span>
            <span className="text-xs text-muted-foreground leading-relaxed">
              {stat.context}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
