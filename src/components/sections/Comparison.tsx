"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface ComparisonRow {
  hardWay: string;
  smartWay: string;
}

const rows: ComparisonRow[] = [
  {
    hardWay: "Hiring a designer takes days and costs thousands",
    smartWay: "Ad Generator creates branded ads in under 2 minutes",
  },
  {
    hardWay: "Reverse-engineering a competitor's ad is impossible",
    smartWay: "Ad Copier recreates any ad with your identity in seconds",
  },
  {
    hardWay: "Generic templates make your brand look cheap",
    smartWay: "Brand Kit ensures every output is 100% yours",
  },
  {
    hardWay: "One ad per campaign — no time to A/B test",
    smartWay: "4 variations generated in a single click",
  },
  {
    hardWay: "Wrong format, wrong resolution — back to the designer",
    smartWay: "Every Meta format and ratio, output-ready",
  },
  {
    hardWay: "Clunky tools that crash and bug out constantly",
    smartWay: "Rock-solid platform built for everyday use",
  },
];

export function Comparison() {
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
          The difference is clear.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Stop doing it the hard way.
        </p>
      </motion.div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Hard Way */}
        <motion.div
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(0) }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
        >
          <h3 className="text-base font-medium text-muted-foreground/70 mb-6">
            The Hard Way
          </h3>
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <div
                key={row.hardWay}
                className="flex items-start gap-3 text-sm text-muted-foreground/60"
              >
                <X className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />
                <span>{row.hardWay}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/50 italic mt-6">
            Frustration, wasted budget, and missed campaigns.
          </p>
        </motion.div>

        {/* The Smart Way */}
        <motion.div
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(1) }}
          className="rounded-2xl border border-white/20 bg-white/[0.06] p-8"
        >
          <h3 className="text-base font-medium text-foreground mb-6">
            The Smart Way — Raddivus
          </h3>
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <div
                key={row.smartWay}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <Check className="w-4 h-4 text-green-400/80 flex-shrink-0 mt-0.5" />
                <span>{row.smartWay}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/80 font-medium mt-6 mb-4">
            Results, confidence, and ads that actually run.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/waitlist">Join Waiting List</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
