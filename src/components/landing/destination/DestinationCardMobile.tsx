"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Destination } from "@/types";

interface DestinationCardMobileProps {
  destination: Destination;
  isActive?: boolean;
}

export const DestinationCardMobile: React.FC<DestinationCardMobileProps> = ({
  destination,
  isActive,
}) => {
  const [hovered, setHovered] = useState(false);

  // ⭐ Render Stars
  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#E4D27C] text-[#E4D27C]"
          strokeWidth={0}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      layout
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        window.open(`${destination?.link}`, "_blank")
      }
      className={`
        relative w-full max-h-[60vh] min-h-[430px] rounded-lg overflow-hidden
        bg-[#0A0A0A] border border-[#E4D27C]/10
        shadow-[0_6px_30px_rgba(0,0,0,0.5)]
        transition-all duration-500
        ${isActive ? "scale-[1.02] shadow-[0_0_40px_rgba(228,210,124,0.15)]" : ""}
      `}
    >
      {/* 🖼️ Background Image */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: hovered ? 1.06 : 1,
          filter: hovered ? "brightness(0.75)" : "brightness(0.9)",
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={destination.leftImage}
          alt={destination.title}
          fill
          quality={100}
          className="object-cover"
        />
        {/* Golden cinematic gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#E4D27C]/5 via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* ✨ Floating Info Card */}
      <motion.div
        className="absolute bottom-6 left-4 right-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 shadow-[0_0_25px_rgba(228,210,124,0.15)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Title & Subtitle */}
        <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white leading-snug">
          {destination.title}
        </h3>
        <p className="text-[#E4D27C] italic text-[13px] mt-1 mb-3">
          “{destination.subtitle}”
        </p>

        {/* ⭐ Ratings */}
        <div className="flex flex-col gap-2 mb-4">
          {destination.reviews?.slice(0, 2).map((review, idx) => {
            const progress = (review.rating / review.max) * 100;
            return (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <p className="text-[12px] text-white font-semibold">
                    {review.category}
                  </p>
                  {renderStars(review.rating)}
                </div>
                <div className="relative w-full h-[5px] bg-[#222]/80 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-[#E4D27C] to-[#C4B04D]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-[#E4D27C]/10 blur-md" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 🟡 CTA Button */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            className="w-full bg-linear-to-r from-[#E4D27C] to-[#D8C05C] text-black text-[14px] font-semibold py-2.5 rounded-lg shadow-[0_0_25px_rgba(228,210,124,0.25)] active:scale-[0.97] transition-all duration-300"
          >
            View Story
          </Button>
        </motion.div>
      </motion.div>

      {/* 🌟 Subtle Hover Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.25 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#E4D27C]/10 blur-2xl pointer-events-none"
      />
    </motion.div>
  );
};
