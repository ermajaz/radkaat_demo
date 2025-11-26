"use client";

import { BikeProfile } from "@/types/bikeComparison";
import React from "react";
import { motion } from "framer-motion";

export default function SidebarProfilesDesktop({
  profiles,
}: {
  profiles: BikeProfile[];
}) {
  const [isSelected, setIsSelected] = React.useState<number | null>(0);

  return (
    <div className="w-100 border-r border-[#2a2a2a] p-5 py-10 flex flex-col gap-1 relative">
      {profiles.map((p) => {
        const active = isSelected === p.id;

        return (
          <button
            key={p.id}
            onClick={() => setIsSelected(p.id)}
            className="relative p-2 rounded-md cursor-pointer text-left transition-all"
          >
            {/* ✅ Sliding background */}
            {active && (
              <motion.div
                layoutId="activeProfile"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="absolute inset-0 bg-sandstorm rounded-md shadow-xl"
              />
            )}

            {/* ✅ Content stays above background */}
            <div className="relative z-10">
              <span
                className={`text-sm font-extrabold ${
                  active ? "text-black" : "text-white"
                }`}
              >
                {p.title}
              </span>

              <p
                className={`text-xs mt-1 font-semibold ${
                  active ? "text-black/60" : "text-white/60"
                }`}
              >
                {p.level}
              </p>

              <p
                className={`mt-1 text-xs font-semibold ${
                  active ? "text-black/70" : "text-white/80"
                }`}
              >
                {p.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
