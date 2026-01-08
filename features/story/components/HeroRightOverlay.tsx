"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Mountain,
  Ruler,
  MapPin,
  UtensilsCrossed,
  BadgeCheck,
  Car,
} from "lucide-react";
import { Trip } from "@/features/story/types/story.types";

const ICON_MAP = {
  Bike,
  Mountain,
  Ruler,
  MapPin,
  UtensilsCrossed,
  BadgeCheck,
  Car,
} as const;


export default function HeroRightOverlay({
  tour,
  controls
}: {
  tour: Trip;
  controls: any; // motion controls
}) {
  const { subtitle, description, rightPanelDetails } = tour;

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      className="
        absolute top-1/2 -translate-y-1/2 right-6 
        w-[92%] sm:w-[420px] 
        bg-black/45 backdrop-blur-xl 
        border border-[#2a2a2a]/70 
        p-6 rounded-xl shadow-xl
        z-20
      "
    >
      {/* Subtitle (optional) */}
      {subtitle && (
        <p className="italic text-[15px] text-[#E4D27C] leading-tight mb-3">
          “{subtitle}”
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-[13.5px] text-gray-200 leading-relaxed mb-4 whitespace-pre-line">
          {description}
        </p>
      )}

      {/* Bullet Points */}
      {rightPanelDetails?.length > 0 && (
        <ul className="space-y-2">
          {rightPanelDetails.map((item, i) => {
            const Icon = ICON_MAP[item.icon]; // ✅ SAFE LOOKUP

            if (!Icon) return null;

            return (
              <li key={i} className="flex items-start gap-3 text-gray-200 text-[14px]">
                <Icon size={17} className="text-[#E4D27C]" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}
