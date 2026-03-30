"use client";

import { motion } from "framer-motion";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "HomeShield Roofing",
    quote:
      "We were spending $800/month on a freelance designer just for Facebook ads. Raddivus replaced that overnight. Our cost-per-click dropped 40% in the first month.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Marcus Johnson",
    role: "Owner",
    company: "Apex HVAC",
    quote:
      "I used another tool for months. Constant bugs, clunky interface, overpriced. Switched to Raddivus and had professional ads running within the hour. The difference is night and day.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    company: "Bloom E-Commerce",
    quote:
      "The Ad Copier feature alone is worth the subscription. I upload a high-performing competitor ad and get our branded version in under two minutes. It's borderline unfair.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
  },
  {
    name: "James Park",
    role: "Agency Director",
    company: "Spark Digital",
    quote:
      "We manage ads for 12 clients. Raddivus's Brand Kit lets us switch identities instantly. What took our designer three days now takes under thirty minutes.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
  {
    name: "Aisha Patel",
    role: "Owner",
    company: "Urban Fitness Studio",
    quote:
      "Zero design experience here. I described my studio, hit generate, and got ads that looked like a professional made them. Those campaigns signed my first 50 members.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Momentum Moving Co.",
    quote:
      "Local businesses don't have marketing budgets. Raddivus changed that. We're running professional Meta ads for the first time and booking more jobs than ever.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
];

export function Testimonials() {
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
          Loved by business owners everywhere
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Business owners and agencies are replacing their design spend with
          Raddivus. Here&apos;s what they&apos;re saying.
        </p>
      </motion.div>

      <div className="max-w-[1100px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            {...scrollFadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              ...transitions.default,
              ...staggerDelay(index),
            }}
            className="break-inside-avoid rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full bg-white/10"
              />
              <div>
                <p className="text-foreground text-sm font-medium">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
