"use client";

import { motion } from "framer-motion";
import CardImageMobile from "./CardImageMobile";

export default function StoryCardMobile({
  destination,
  isActive,
}: {
  destination: any;
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
        bg-[#111]/60 backdrop-blur-xl border
        ${isActive ? "border-sandstorm/60" : "border-white/10"}
      `}
    >
      <CardImageMobile destination={destination} />
    </motion.div>
  );
}
