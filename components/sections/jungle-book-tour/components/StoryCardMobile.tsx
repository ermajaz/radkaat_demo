"use client";

import { useState } from "react";
import CardImage from "./CardImage";

export default function StoryCardMobile({ destination, isActive }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(destination.link, "_blank")}
      className={`relative w-[85vw] h-[420px] shrink-0 rounded-xl overflow-hidden shadow-xl transition-all duration-500
                ${isActive ? "scale-[1.02] shadow-gold/30" : ""}`}
    >
      <CardImage destination={destination} hovered={hovered} />
    </div>
  );
}
