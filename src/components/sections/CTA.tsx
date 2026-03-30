"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/effects/Particles";
import { fadeInUp, transitions } from "@/lib/animations";

export function CTA() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-28">
      <div className="gradient-card rounded-[35px] relative overflow-hidden">
        <Particles variant="default" />

        <div className="flex flex-col items-center justify-center px-6 py-20 md:py-28 text-center relative z-10">
          <motion.div
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.1 }}
            className="mb-8"
          >
            <Image
              src="/images/landing/logo-icon.png"
              alt="Logo"
              width={64}
              height={64}
            />
          </motion.div>

          <motion.h2
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 max-w-[700px]"
          >
            Still scrolling? Your next winning ad is right here.
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-[500px] mb-6"
          >
            Join the business owners and agencies creating professional Meta ads
            — without a designer, without a big budget, without the wait.
          </motion.p>

          <motion.ul
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.35 }}
            className="flex flex-col gap-2 mb-8"
          >
            {[
              "No designer. No brief. No waiting.",
              "Branded to your business in under 2 minutes.",
              "Facebook-ready format, every time.",
            ].map((item) => (
              <li
                key={item}
                className="text-muted-foreground/80 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.4 }}
            className="flex items-center gap-3.5"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/waitlist">Join Waiting List</Link>
            </Button>
            <Button variant="glass" size="lg">
              Book a Demo
            </Button>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, #7877C6 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />
      </div>
    </section>
  );
}
