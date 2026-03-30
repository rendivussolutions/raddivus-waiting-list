"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  scrollFadeInUp,
  transitions,
  viewportOnce,
  staggerDelay,
} from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer:
      "You start with a free credit balance — no credit card required. Use those credits to generate ads and explore the platform before committing to a paid plan.",
  },
  {
    question: "Do I need any design experience?",
    answer:
      "None at all. Describe your business and offer in plain English, and Raddivus handles the rest. If you can type, you can create professional-quality Facebook ads.",
  },
  {
    question: "What makes Raddivus different from other AI ad tools?",
    answer:
      "Most AI tools generate generic images. Raddivus is built specifically for Facebook and Meta ad creatives — with features like Ad Copier, Brand Kit, and psychology-driven ad types engineered to convert, not just look good.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express). All payments are processed securely through Stripe. Upgrade, downgrade, or cancel anytime — no lock-in.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "You can purchase additional credit packs anytime, or your credits reset automatically with your monthly subscription. We'll give you a heads-up before your balance runs low.",
  },
  {
    question: "Can I download ads in the right format for Facebook?",
    answer:
      "Yes. Raddivus outputs ads at the exact ratio and resolution your campaigns require — 1:1 for feed, 9:16 for stories, and more — ready to upload directly to Meta Ads Manager.",
  },
];

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      {...scrollFadeInUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...transitions.default, ...staggerDelay(index) }}
      className="border-b border-white/10"
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-foreground text-sm md:text-base font-medium pr-4 group-hover:text-foreground/80 transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-foreground/50" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Everything you need to know about the platform and billing.
        </p>
      </motion.div>

      <div className="max-w-[700px] mx-auto">
        {faqItems.map((item, index) => (
          <FAQAccordionItem
            key={item.question}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
