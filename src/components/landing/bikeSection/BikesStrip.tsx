"use client";

import { Star } from "lucide-react";

export default function BikesStrip() {
  return (
    <div className="w-full h-[37px] flex items-center justify-center z-40 bg-gradient-to-r from-sandstorm to-sandstorm-1">
      <div className="flex items-center gap-2">
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
        <span className="font-bold text-[14px] uppercase tracking-[1.5px] text-black">
          Introducing Goat Features
        </span>
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
      </div>
    </div>
  );
}
