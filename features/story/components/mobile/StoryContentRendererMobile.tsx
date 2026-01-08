"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { StoryContentCard } from "../StoryContentCard";
import ItineraryAccordion from "../ItineraryAccordian";
import WhatToPackSection from "../WhatToPackSection";
import TestimonialSection from "../TestimonialSection";
import StoryGallerySection from "../StoryGallerySection";
import ExclusionsSection from "../ExclusionsSection";
import InclusionsSection from "../InclusionsSection";
import { Trip } from "../../types/story.types";

interface Props {
    section: any;
    tour: Trip;
    nextTourName?: string;
    onNextTourClick?: () => void;
    homepageLink?: string;
}

export const StoryContentRendererMobile: React.FC<Props> = ({
    section,
    tour,
    nextTourName,
    onNextTourClick,
    homepageLink = "/",
}) => {
    const pdfUrl = tour?.pdf
        ? `${process.env.NEXT_PUBLIC_AWS_ASSETS_BASE_URL}${tour.id}/${process.env.NEXT_PUBLIC_ITERNARY_PDF_URL}${tour.pdf}`
        : null;

    return (
        <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full px-1 mb-20 sm:px-2"
        >
            {/* PDF Download Button */}
            {pdfUrl && (
                <motion.a
                    href={pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
      w-fit flex items-center gap-2 mb-3 rounded-lg
      bg-linear-to-r from-[#E4D27C]/90 to-[#E4D27C]/70
      text-black font-semibold text-[14px]
      px-4 py-2
      cursor-pointer
    "
                >
                    <Download size={18} />
                    Itinerary Details
                </motion.a>
            )}
            {section.type === "story" && (
                <StoryContentCard
                    content={section.data} tour={tour}
                />
            )}
            {section.type === "itinerary" && <ItineraryAccordion items={section.data} />}
            {section.type === "packing" && (
                <WhatToPackSection title={section.title} items={section.data} />
            )}
            {section.type === "testimonials" && (
                <TestimonialSection title={section.title}
                    tour={tour}
                    testimonials={section.data} />
            )}
            {section.type === "gallery" && (
                <StoryGallerySection title={section.title} images={section.data} />
            )}

            {section.type === "inclusions" && (
                <InclusionsSection title={section.title} data={section.data} />
            )}
            {section.type === "exclusions" && (
                <ExclusionsSection title={section.title} data={section.data} />
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
