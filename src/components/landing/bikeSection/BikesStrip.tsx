"use client";

import { Star } from "lucide-react";

export default function BikesStrip() {
  return (
    <div className="w-full bg-sandstorm h-10 flex items-center justify-center z-40">
      <div className="flex items-center gap-4">
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
        <span className="font-bold text-[16px] uppercase tracking-[2px] text-black">
          Introducing Goat Features
        </span>
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
      </div>
    </div>
  );
}
