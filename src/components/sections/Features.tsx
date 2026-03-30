"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface BentoCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const bentoCards: BentoCard[] = [
  {
    image: "/images/landing/bento-1.png",
    alt: "Ad Generator",
    title: "Ad Generator",
    description:
      "Describe your business, set your offer, and let AI build a scroll-stopping ad. No brief, no designer, no waiting — just results.",
  },
  {
    image: "/images/landing/bento-2.png",
    alt: "Ad Copier",
    title: "Ad Copier",
    description:
      "Upload any competitor ad and get a unique, branded version. Same concept, your identity. Zero design skills needed.",
  },
  {
    image: "/images/landing/bento-3.png",
    alt: "Brand Kit",
    title: "Brand Kit",
    description:
      "Save your logo, colors, and business details once. Every ad you generate is automatically built around your brand.",
  },
  {
    image: "/images/landing/bento-4.png",
    alt: "Multiple ad variations",
    title: "Multiple variations at once",
    description:
      "Generate up to four unique ad variations in one click. Test what works, scale what converts.",
  },
  {
    image: "/images/landing/bento-5.png",
    alt: "Ad formats and ratios",
    title: "Every format Facebook needs",
    description:
      "From 1:1 feed to 9:16 stories — output ads at the exact ratio and resolution your campaigns require.",
  },
];

export function Features() {
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
          Everything you need to create great ads
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          From scratch or from a competitor&apos;s ad — Raddivus gives you the
          tools to create, brand, and launch professional Meta creatives in
          minutes.
        </p>
      </motion.div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        {/* Card 1: Tall left card spanning 2 rows */}
        <motion.div
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(0) }}
          className="md:row-span-2 rounded-2xl border border-white/10 gradient-card p-6 pb-0 pr-0 flex flex-col overflow-hidden"
        >
          <h3 className="text-lg font-medium text-foreground mb-1">
            {bentoCards[0].title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 pr-6">
            {bentoCards[0].description}
          </p>
          <div className="flex-1 flex items-end justify-end">
            <Image
              src={bentoCards[0].image}
              alt={bentoCards[0].alt}
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Cards 2-5: Four smaller cards in 2x2 grid */}
        {bentoCards.slice(1).map((card, index) => (
          <motion.div
            key={card.title}
            {...scrollFadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              ...transitions.default,
              ...staggerDelay(index + 1),
            }}
            className="rounded-2xl border border-white/10 bg-card-fill p-6 flex flex-col"
          >
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.alt}
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-1">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
