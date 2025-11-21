"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface StoryStripMobileProps {
  name: string;
  price?: number;
  onBuy?: () => void;
}

export const StoryStripMobile: React.FC<StoryStripMobileProps> = ({
  name,
  price,
  onBuy,
}) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        sticky bottom-0 left-0 w-full z-999 
        flex items-center justify-between 
        px-4 py-3 sm:py-4 
        bg-[#0E0E0E]/80 backdrop-blur-xl 
        border-t border-[#E4D27C]/10
        shadow-[0_-4px_25px_rgba(0,0,0,0.4)]
      "
      style={{
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Left side: Tour name & price */}
      <div className="flex flex-col justify-center">
        <p className="text-[#E4D27C] text-[15px] font-semibold leading-tight">
          {name}
        </p>
        {price && (
          <p className="text-white text-[18px] font-bold leading-snug">
            ₹{price.toLocaleString("en-IN")}
          </p>
        )}
      </div>

      {/* Right side: Buy Now Button */}
      <Button
        onClick={onBuy}
        className="
          flex items-center gap-2 
          bg-linear-to-r from-[#E4D27C] to-[#D2B95C] 
          text-black text-[15px] font-semibold
          px-5 py-3 rounded-lg 
          shadow-[0_0_20px_rgba(228,210,124,0.3)] 
          hover:shadow-[0_0_25px_rgba(228,210,124,0.5)]
          active:scale-95 transition-all duration-300
        "
      >
        <ShoppingBag size={18} />
        Buy Now
      </Button>
    </motion.div>
  );
};
