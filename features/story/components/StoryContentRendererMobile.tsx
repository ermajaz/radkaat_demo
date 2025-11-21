"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StoryContentCard } from "./StoryContentCard";
import ItineraryAccordion from "./ItineraryAccordian";
import WhatToPackSection from "./WhatToPackSection";
import TestimonialSection from "./TestimonialSection";
import StoryGallerySection from "./StoryGallerySection";

interface Props {
    section: any;
    nextTourName?: string;
    onNextTourClick?: () => void;
    homepageLink?: string;
}

export const StoryContentRendererMobile: React.FC<Props> = ({
    section,
    nextTourName,
    onNextTourClick,
    homepageLink = "/",
}) => {
    return (
        <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full px-1 mb-20 sm:px-2"
        >
            {section.type === "story" && (
                <StoryContentCard
                    content={section.data}
                />
            )}
            {section.type === "itinerary" && <ItineraryAccordion items={section.data} />}
            {section.type === "packing" && (
                <WhatToPackSection title={section.title} items={section.data} />
            )}
            {section.type === "testimonial" && (
                <TestimonialSection title={section.title} testimonials={section.data} />
            )}
            {section.type === "gallery" && (
                <StoryGallerySection title={section.title} images={section.data} />
            )}

            {/* Divider */}
            <div className="border-t border-gray-800/70 mt-12 mb-8" />
            {/* Bottom Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="
            flex flex-col sm:flex-row 
            justify-between items-center gap-4 sm:gap-0 mt-6
          "
            >
                {/* Homepage link */}
                <Link
                    href={homepageLink}
                    className="
              w-full sm:w-auto 
              flex items-center justify-center gap-2
              border border-stone/20
              text-stone font-semibold
              px-5 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-none
              active:scale-[0.98]
              transition-all duration-300
            "
                >
                    <ArrowLeft size={18} />
                    Homepage
                </Link>

                {/* Next Tour CTA (more prominent on mobile) */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    onClick={onNextTourClick}
                    className="
              w-full sm:w-auto 
              flex items-center justify-center gap-2
              bg-linear-to-r from-[#E4D27C]/90 to-[#E4D27C]/70 
              text-black font-semibold
              px-5 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-none
              active:scale-[0.98]
              transition-all duration-300
            "
                >
                    {nextTourName}
                    <ArrowRight size={18} />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};
