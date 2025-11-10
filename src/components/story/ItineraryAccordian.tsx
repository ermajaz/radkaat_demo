"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ItineraryItem } from "@/types";

interface ItineraryAccordionProps {
  items: ItineraryItem[];
  homepageLink?: string;
  nextTourName?: string;
  onNextTourClick?: () => void;
}

export default function ItineraryAccordion({
  items,
  homepageLink = "/",
  nextTourName = "Next Tour",
  onNextTourClick,
}: ItineraryAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto text-white">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8 tracking-tight"
      >
        Trip Itinerary
      </motion.h2>

      <div className="relative flex flex-col gap-5 before:absolute before:top-5 before:bottom-5 before:left-[28px] md:before:left-[35px] before:w-[2px] before:bg-gradient-to-b before:from-[#E4D27C]/60 before:to-transparent">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "relative overflow-hidden border border-neutral-800/70 bg-gradient-to-b from-[#141414] to-[#0B0B0B] transition-all duration-500 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(228,210,124,0.15)]"
              )}
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 md:px-8 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Day Badge */}
                  <div className="relative bg-gradient-to-r from-[#E4D27C]/20 to-[#E4D27C]/10 text-[#E4D27C] text-sm font-semibold  px-4 py-1.5 border border-[#E4D27C]/40 shadow-[0_0_10px_rgba(228,210,124,0.15)]">
                    Day {item.day}
                  </div>

                  <h3 className="text-[17px] md:text-[19px] font-semibold tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 text-[#E4D27C] transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 md:px-8 pb-6 text-[15px] leading-relaxed text-stone-300 border-t border-neutral-800/60"
                  >
                    {item.highlights && (
                      <p className="text-[15px] font-semibold mb-3 text-[#E4D27C]">
                        Highlights:{" "}
                        <span className="font-normal text-stone-200">
                          {item.highlights.join(", ")}
                        </span>
                      </p>
                    )}
                    {item.description && (
                      <p className="text-stone-300">{item.description}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800/70 mt-12 mb-8" />

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-between items-center"
      >
        <Link
          href={homepageLink}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          Homepage
        </Link>

        <button
          onClick={onNextTourClick}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          {nextTourName}
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  );
}
