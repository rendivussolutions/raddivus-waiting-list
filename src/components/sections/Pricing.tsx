"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/effects/Particles";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface PricingTier {
  name: string;
  description: string;
  features: string[];
  diamond: string;
  highlighted: boolean;
  buttonVariant: "primary" | "glass";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Perfect for solo business owners getting started with Meta ads.",
    features: [
      "50 credits/month",
      "Ad Generator",
      "Ad Copier",
      "1 Brand Kit",
      "Standard resolution (1080p)",
      "Email support",
    ],
    diamond: "/images/landing/diamond-white.png",
    highlighted: false,
    buttonVariant: "glass",
  },
  {
    name: "Professional",
    description:
      "For serious advertisers who need more volume and premium quality.",
    features: [
      "200 credits/month",
      "Ad Generator + Copier",
      "Unlimited Brand Kits",
      "2K resolution output",
      "All ad formats & ratios",
      "Priority support",
      "Up to 4 ad variations",
    ],
    diamond: "/images/landing/diamond-orange.png",
    highlighted: true,
    buttonVariant: "primary",
  },
  {
    name: "Enterprise",
    description:
      "For agencies managing multiple clients who need full power and flexibility.",
    features: [
      "Everything in Pro",
      "Unlimited credits",
      "Multi-client workspace",
      "Dedicated support",
      "Custom AI instructions",
      "SLA guarantee",
      "Bulk download",
      "Agency invoicing",
    ],
    diamond: "/images/landing/diamond-pink.png",
    highlighted: false,
    buttonVariant: "glass",
  },
];

export function Pricing() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-28 relative">
      <Particles variant="default" />

      <motion.div
        {...scrollFadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={transitions.slow}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Choose the plan that fits your needs. Pricing details coming soon.
        </p>
      </motion.div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            {...scrollFadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              ...transitions.default,
              ...staggerDelay(index),
            }}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              tier.highlighted
                ? "border-white/20 bg-white/[0.06] scale-[1.02]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={tier.diamond}
                alt={`${tier.name} tier`}
                width={32}
                height={32}
              />
              <h3 className="text-lg font-medium text-foreground">
                {tier.name}
              </h3>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-semibold text-foreground/70">
                Coming Soon
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              {tier.description}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant={tier.buttonVariant} size="full" asChild>
              <Link href="/waitlist">Join Waiting List</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
