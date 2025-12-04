"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mountain,
  Ruler,
  Bike,
  MapPin,
  UtensilsCrossed,
  BadgeCheck,
  Car
} from "lucide-react";
import { Tour } from "@/features/story/types/story.types";

export default function CardImage({
  destination,
  hovered,
}: {
  destination: Tour;
  hovered: boolean;
}) {
  // Fallback static content (when data missing)
  const title = destination?.title;
  const subtitle =
    destination?.subtitle ||
    "Remarkable experience to inspire the mind";

  const description =
    destination?.description ||
    `Glacial Lakes ; High Passes ; Snowy Peaks ; Green Rivers ; Vast Plains ; Temperate Forests ; 
Cold Deserts ; a culture preserved for centuries!. 
This is the heart of the Himalaya! Manali–Leh is a highly popular cycling jaunt, frequented by cyclists 
from across the world, but accessible only for few months in a year.`;

  const rightPanelDetails = destination?.rightPanelDetails || [];


  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={destination.leftImage}
        alt={title}
        fill
        priority
        quality={100}
        className={`object-cover transition-all duration-700`}
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute right-5 bottom-5 w-[360px] 
                   bg-black/40 backdrop-blur-md border border-[#2a2a2a] 
                   p-5 rounded-lg shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-2xl text-start font-extrabold tracking-wide text-white mb-1">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="italic text-[15px] text-sandstorm leading-snug mb-1">
          “{subtitle}”
        </p>

        {/* Description */}
        <p className="text-xs text-gray-200 leading-relaxed mb-1 whitespace-pre-line">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-1.5">
          {rightPanelDetails.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-start gap-3 text-gray-200">
                <Icon size={16} className="text-sandstorm" />
                <span className="text-[13px]">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
