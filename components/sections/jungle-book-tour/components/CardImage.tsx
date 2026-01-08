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
  Car,
} from "lucide-react";
import { Tour } from "../types/tours.types";

/* ---------------------------------------------
   ICON MAP (string → Lucide icon)
--------------------------------------------- */
const ICON_MAP = {
  Bike,
  Mountain,
  Ruler,
  MapPin,
  UtensilsCrossed,
  BadgeCheck,
  Car,
} as const;

export default function CardImage({
  destination,
  hovered,
}: {
  destination: Tour;
  hovered: boolean;
}) {
  const title = destination?.title;
  const subtitle =
    destination?.subtitle || "Remarkable experience to inspire the mind";

  const description =
    destination?.description ||
    `Glacial Lakes ; High Passes ; Snowy Peaks ; Green Rivers ; Vast Plains ; 
Cold Deserts ; a culture preserved for centuries!.`;

  const rightPanelDetails = destination?.rightPanelDetails || [];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_ASSETS_BASE_URL}${destination?._id}/${process.env.NEXT_PUBLIC_ITERNARY_BG_IMAGE_URL}${destination?.image}`}
        alt={title}
        fill
        priority
        quality={100}
        className="object-cover transition-all duration-700"
      />

      {/* RIGHT INFO PANEL */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          absolute right-5 bottom-5 w-[360px]
          bg-black/40 backdrop-blur-md
          border border-[#2a2a2a]
          p-5 rounded-lg shadow-2xl
        "
      >
        {/* Title */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white mb-1">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="italic text-[15px] text-sandstorm mb-2">
          “{subtitle}”
        </p>

        {/* Description */}
        <p className="text-xs text-gray-200 leading-relaxed mb-3 whitespace-pre-line">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          {rightPanelDetails.map((item, i) => {
            const Icon = ICON_MAP[item.icon]; // ✅ SAFE LOOKUP

            if (!Icon) return null; // extra safety

            return (
              <li key={i} className="flex items-start gap-3 text-gray-200">
                <Icon size={16} className="text-sandstorm shrink-0" />
                <span className="text-[13px] leading-snug">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
