"use client";

import { BikeProfile } from "@/types/bikeComparison";
import React from "react";


export default function SidebarProfilesDesktop({
  profiles,
}: {
  profiles: BikeProfile[];
}) {
  const [isSelected,setIsSelected] = React.useState<number | null>(0);
  return (
    <div className="w-80 bg-[#121212] p-3 py-10 flex flex-col gap-5 relative">
      {profiles.map((p, idx) => (
        <div
          onClick={() => setIsSelected(p.id)}
          key={p.title}
          className={`p-4 rounded-md cursor-pointer transition-all duration-300 shadow-md ${
            isSelected === p.id
              ? "bg-sandstorm text-black shadow-xl"
              : "bg-transparent text-white"
          }`}
        >
          <span
            className={`text-sm font-extrabold ${
              isSelected === p.id ? "text-black" : "text-white"
            }`}
          >
            {p.title}
          </span>

          <p
            className={`text-xs mt-1.5 font-semibold ${
              isSelected === p.id ? "text-black/50" : "text-white/60"
            }`}
          >
            {p.level}
          </p>

          <p
            className={`mt-1.5 text-xs font-semibold ${
              isSelected === p.id ? "text-black/50" : "text-white/80"
            }`}
          >
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
