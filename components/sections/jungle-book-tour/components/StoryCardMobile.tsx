"use client";

import { motion } from "framer-motion";
import CardImageMobile from "./CardImageMobile";
import { Tour } from "@/features/story/types/story.types";

export default function StoryCardMobile({
  destination,
  isActive,
}: {
  destination: Tour;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1 : 0.97,
        y: 0,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`
        relative rounded-3xl overflow-hidden shadow-xl
        bg-[#121212]/60 backdrop-blur-xl border
        ${isActive ? "border-sandstorm/60" : "border-[#2a2a2a]"}
      `}
    >
      <CardImageMobile destination={destination} />
    </motion.div>
  );
}
