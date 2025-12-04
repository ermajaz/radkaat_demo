"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ItineraryItem } from "../types/story.types";
interface ItineraryAccordionProps {
  items: ItineraryItem[];
}

export default function ItineraryAccordion({
  items,
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

      <div className="relative flex flex-col gap-5 before:absolute before:top-5 before:bottom-5 before:left-7 md:before:left-[35px] before:w-0.5 before:bg-linear-to-b before:from-[#E4D27C]/60 before:to-transparent">
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
                "relative overflow-hidden border border-neutral-800/70 bg-linear-to-b from-[#141414] to-[#0B0B0B] transition-all duration-500",
                "shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(228,210,124,0.15)]",
                // Rounded only on mobile
                "rounded-xl md:rounded-none"
              )}
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={cn(
                  "w-full flex justify-between items-center text-left select-none transition-all duration-300",
                  "px-4 sm:px-6 md:px-8 py-4 sm:py-5", // responsive padding
                  "min-h-[72px]" // ensures uniform tap zone height on mobile
                )}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  {/* Day Badge */}
                  <div className="relative shrink-0 bg-linear-to-r from-[#E4D27C]/20 to-[#E4D27C]/10 text-[#E4D27C]
                    text-[13px] sm:text-sm font-semibold px-3 sm:px-4 py-1.5
                    border border-[#E4D27C]/40 shadow-[0_0_10px_rgba(228,210,124,0.15)]
                    rounded-md sm:rounded-none leading-none text-center">
                    Day {item.day}
                  </div>

                  {/* Title */}
                  <h3
                    className="truncate text-[15.5px] sm:text-[17px] md:text-[19px]
                 font-semibold tracking-wide text-stone-200 leading-snug"
                    style={{
                      lineHeight: "1.4",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <ChevronDown
                  className={cn(
                    "shrink-0 ml-3 h-5 w-5 sm:h-6 sm:w-6 text-[#E4D27C] transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>


              {/* Animated Content */}
              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 md:px-8 py-4 text-[15px] leading-relaxed text-stone-300 border-t border-neutral-800/60"
                  >
                    {/* Highlights */}
                    {item.title && (
                      <p className="text-[15px] font-semibold mb-4 text-[#E4D27C]">
                        Highlights:
                        <span className="font-normal text-stone-200 ml-1">
                          {item.title}
                        </span>
                      </p>
                    )}

                    {/* DESCRIPTION LIST */}
                    {Array.isArray(item.description) && (
                      <ul className="space-y-2">
                        {item.description.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.06, duration: 0.3 }}
                            className="flex items-start gap-3"
                          >
                            {/* Bullet Icon */}
                            <span className="mt-1 h-2 w-2 rounded-full bg-[#E4D27C]/80 shadow-[0_0_6px_rgba(228,210,124,0.7)]" />

                            {/* Bullet Text */}
                            <span className="text-stone-300 leading-[1.55] tracking-[0.2px]">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* FALLBACK if someone passes a string */}
                    {typeof item.description === "string" && (
                      <p className="text-stone-300">{item.description}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
