"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { scrollFadeInUp, transitions, viewportOnce } from "@/lib/animations";

type CellValue = string | boolean;

interface FeatureRow {
  feature: string;
  starter: CellValue;
  professional: CellValue;
  enterprise: CellValue;
}

const features: FeatureRow[] = [
  {
    feature: "Monthly credits",
    starter: "50",
    professional: "200",
    enterprise: "Unlimited",
  },
  {
    feature: "Ad Generator",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Ad Copier",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Brand Kits",
    starter: "1",
    professional: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Ad variations per generation",
    starter: "1",
    professional: "Up to 4",
    enterprise: "Up to 4",
  },
  {
    feature: "Output resolution",
    starter: "1080p",
    professional: "2K",
    enterprise: "2K",
  },
  {
    feature: "Ad formats & ratios",
    starter: "Standard",
    professional: "All",
    enterprise: "All",
  },
  {
    feature: "Priority processing",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Multi-client workspace",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Custom AI instructions",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Bulk download",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority",
    enterprise: "Dedicated + SLA",
  },
  {
    feature: "Agency invoicing",
    starter: false,
    professional: false,
    enterprise: true,
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 text-green-400/80 mx-auto" />
    ) : (
      <Minus className="w-4 h-4 text-white/20 mx-auto" />
    );
  }
  return <span className="text-foreground text-sm">{value}</span>;
}

export function FeatureComparison() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 pb-20 md:pb-28">
      <motion.p
        {...scrollFadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={transitions.default}
        className="text-muted-foreground text-sm text-center mb-6"
      >
        Compare all features
      </motion.p>

      <motion.div
        {...scrollFadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={transitions.slow}
        className="w-full max-w-[900px] mx-auto border border-white/10 rounded-2xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-white/[0.04]">
              <th className="text-left px-4 md:px-6 py-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Feature
              </th>
              <th className="text-center px-3 md:px-4 py-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Starter
              </th>
              <th className="text-center px-3 md:px-4 py-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Pro
              </th>
              <th className="text-center px-3 md:px-4 py-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, index) => (
              <tr
                key={row.feature}
                className={
                  index % 2 === 1 ? "bg-white/[0.02]" : "bg-transparent"
                }
              >
                <td className="px-4 md:px-6 py-3.5 text-sm text-muted-foreground">
                  {row.feature}
                </td>
                <td className="px-3 md:px-4 py-3.5 text-center">
                  <CellContent value={row.starter} />
                </td>
                <td className="px-3 md:px-4 py-3.5 text-center">
                  <CellContent value={row.professional} />
                </td>
                <td className="px-3 md:px-4 py-3.5 text-center">
                  <CellContent value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
