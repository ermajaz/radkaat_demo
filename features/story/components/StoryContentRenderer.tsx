"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ItineraryAccordion from "./ItineraryAccordian";
import { StoryContentCard } from "./StoryContentCard";
import WhatToPackSection from "./WhatToPackSection";
import TestimonialSection from "./TestimonialSection";
import StoryGallerySection from "./StoryGallerySection";

interface Props {
  section: any;
  nextTourName?: string;
  onNextTourClick?: () => void;
  homepageLink?: string;
}

export const StoryContentRenderer: React.FC<Props> = ({
  section,
  nextTourName = "Next Tour",
  onNextTourClick,
  homepageLink = "/",
}) => {
  let content: React.ReactNode;

  // ✅ Render appropriate section
  switch (section.type) {
    case "story":
      content = (
        <StoryContentCard
          content={section.data}
        />
      );
      break;

    case "itinerary":
      content = <ItineraryAccordion items={section.data} />;
      break;

    case "packing":
      content = (
        <WhatToPackSection title={section.title} items={section.data} />
      );
      break;

    case "testimonial":
      content = (
        <TestimonialSection
          title={section.title}
          testimonials={section.data}
        />
      );
      break;

    case "gallery":
      content = <StoryGallerySection title={section.title} images={section.data} />;
      break;

    default:
      content = (
        <div className="text-gray-400 text-center py-10">
          Unknown section type: {section.type}
        </div>
      );
  }

  // ✅ Unified return with Bottom Navigation
  return (
    <div className="flex flex-col w-full">
      {content}

      {/* Divider */}
      <div className="border-t border-gray-800/70 mt-12 mb-8" />

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="
          flex flex-col sm:flex-row 
          justify-between items-center 
          gap-4 sm:gap-0 mt-10 sm:mt-12
        "
      >
        {/* Homepage link */}
        <Link
          href={homepageLink}
          className="
            flex items-center gap-2 
            text-white font-medium  cursor-pointer text-[15px] sm:text-[16px]
            hover:text-[#E4D27C] 
            transition-colors duration-300
          "
        >
          <ArrowLeft size={18} />
          Homepage
        </Link>

        {/* Next Tour CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          onClick={onNextTourClick}
          className="
            w-full sm:w-auto cursor-pointer
            flex items-center justify-center gap-2
            bg-linear-to-r from-[#E4D27C]/90 to-[#E4D27C]/70 
            text-black font-semibold
            px-5 py-2 sm:px-4 sm:py-2 
            rounded-lg sm:rounded-none
            shadow-[0_0_20px_rgba(228,210,124,0.25)]
            active:scale-[0.98]
            transition-all duration-300
          "
        >
          {nextTourName}
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </div>
  );
};
