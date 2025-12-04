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
} from "lucide-react";
import { Tour } from "@/features/story/types/story.types";

export default function CardImageMobile({ destination }: { destination: Tour }) {
  const title =
    destination?.title?.trim()?.split(/\s+/)[0] || "EXPEDITION";

  const subtitle =
    destination?.subtitle || "Unforgettable journeys await";

  const details = [
    { icon: Bike, text: "8 Days" },
    { icon: Mountain, text: "Alt 6,700 ft" },
    { icon: Ruler, text: "~120 km" },
    { icon: MapPin, text: "Lodge + Camp" },
    { icon: UtensilsCrossed, text: "Meals incl." },
    { icon: BadgeCheck, text: "Moderate" },
  ];

  return (
    <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl">

      {/* ✅ Background Image */}
      <Image
        src={destination.leftImage}
        alt={title}
        fill
        quality={100}
        className="object-cover"
      />

      {/* ✅ Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/10" />

      {/* ✅ Content OVER image */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute bottom-0 w-full px-5 pb-5"
      >
        {/* ✅ Title */}
        <h1 className="text-[26px] font-extrabold text-white leading-none tracking-wide">
          {title}
        </h1>

        {/* ✅ Subtitle */}
        <p className="italic text-sandstorm text-xs mt-1 leading-tight">
          “{subtitle}”
        </p>

        {/* ✅ Compact 6-point grid */}
        <div className="grid grid-cols-3 gap-y-3 mt-4">
          {details.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-1.5">
                <Icon size={14} className="text-sandstorm" />
                <span className="text-white/90 text-[11px] font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* ✅ Minimal CTA */}
        <button
          onClick={() => window.open(destination.link, "_blank")}
          className="mt-4 w-full h-10 rounded-full bg-[radial-gradient(circle,rgba(255,204,102,0.04)_30%,rgba(255,204,102,0.1)_100%,rgba(255,204,102,0.6)_100%)] backdrop-blur-xs
                     text-white text-xs font-semibold tracking-wide
                     border border-sandstorm/60 active:scale-95 transition-all"
        >
          VIEW & BOOK
        </button>
      </motion.div>
    </div>
  );
}
