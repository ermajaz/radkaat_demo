"use client";

import React from "react";
import { StoryContentCard } from "@/components/story/StoryContentCard";
import WhatToPackSection from "@/components/story/WhatToPackSection";
import TestimonialSection from "@/components/story/TestimonialSection";
import StoryGallerySection from "@/components/story/StoryGallerySection";
import ItineraryAccordion from "./ItineraryAccordian";

interface Props {
    section: any;
    nextTourName?: string;
    onNextTourClick?: () => void;
}

export const StoryContentRenderer: React.FC<Props> = ({
    section,
    nextTourName,
    onNextTourClick,
}) => {
    switch (section.type) {
        case "story":
            return (
                <StoryContentCard
                    content={section.data}
                    nextTourName={nextTourName}
                    onNextTourClick={onNextTourClick}
                />
            );

        case "itinerary":
            return (
                <ItineraryAccordion items={section.data} />
            );

        case "packing":
            return (
                <WhatToPackSection title={section.title} items={section.data} />
            );

        case "testimonial":
            return (
                <TestimonialSection title={section.title} testimonials={section.data} />
            );

        case "gallery":
            return (
                <StoryGallerySection title={section.title} images={section.data} />
            );

        default:
            return (
                <div className="text-gray-400 text-center py-10">
                    Unknown section type: {section.type}
                </div>
            );
    }
};
