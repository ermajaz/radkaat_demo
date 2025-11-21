"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import MapContainer from "./MapContainer";
import CardImage from "./CardImage";

export default function StoryCardDesktop({ destination, isActive }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-120px", once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(destination.link, "_blank")}
      className={`relative w-full mx-auto h-[560px] cursor-pointer flex overflow-hidden shadow-2xl group transition-all duration-500 
                border ${isActive ? "bg-[#111] border-white/30" : "bg-black/20 border-white/10"}`}
    >
      {/* CardImage → 70% width */}
      <div className="relative w-[70%] h-full">
        <CardImage destination={destination} hovered={hovered} />
      </div>

      {/* MapContainer → 30% width */}
      <div className="relative w-[30%] h-full">
        <MapContainer destination={destination} isInView={isInView} />
      </div>
    </div>
  );
}
