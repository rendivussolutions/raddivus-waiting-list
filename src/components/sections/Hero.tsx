"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { Particles } from "@/components/effects/Particles";
import { fadeInUp, transitions } from "@/lib/animations";

export function Hero() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="gradient-card rounded-b-[35px] flex flex-col items-center justify-center px-6 pt-20 md:pt-28 relative overflow-hidden">
        <Particles variant="extended" />

        <motion.div
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.1 }}
          className="inline-flex items-center gap-2 md:gap-3.5 pl-0.5 pr-3 md:pr-5 py-0.5 bg-white/5 rounded-[10px] border border-neutral-800 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1 md:py-1.5 bg-neutral-950 rounded-lg">
            <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-300" />
            <span className="text-zinc-300 text-2xs md:text-xs font-medium leading-5">
              Coming Soon
            </span>
          </span>
          <span className="text-stone-300 text-2xs md:text-xs font-medium leading-5">
            We&apos;re building something great — Join the waitlist
          </span>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.2 }}
          className="flex flex-col items-center gap-2.5 max-w-[1000px] text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium capitalize leading-tight lg:leading-[69.60px] text-foreground">
            Professional Ad Creatives. No Designer Required.
          </h1>
          <p className="max-w-[541px] text-muted-foreground text-base font-normal leading-7 tracking-tight">
            Describe your business or upload a competitor&apos;s ad. Raddivus
            generates scroll-stopping Facebook creatives in seconds — branded
            and ready to run.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 mt-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/waitlist">Join Waiting List</Link>
          </Button>
          <Button variant="glass" size="lg" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </motion.div>

        <div className="w-full max-w-[1200px] h-60 relative overflow-visible">
          <Particles variant="compact" className="z-10" />
          <div
            className="w-full h-[600px] left-0 top-0 absolute opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70.71% 70.71% at 50% 50%, #7877C6 0%, rgba(0, 0, 0, 0) 70%)",
            }}
          />
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ ...transitions.slow, delay: 0.4 }}
          className="w-full -mt-40 -mb-20"
        >
          <div className="[perspective:1200px] max-w-[1100px] mx-auto translate-x-0 md:translate-x-[10%] lg:translate-x-[5%]">
            <div className="[transform:rotateX(20deg)] scale-[0.85] lg:scale-90 origin-top">
              <div className="relative skew-x-[.36rad]">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
