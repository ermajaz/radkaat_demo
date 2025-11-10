"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface StoryStripProps {
  name: string;
  price?: number;
  onBuy?: () => void;
}

export default function StoryStrip({ name, price, onBuy }: StoryStripProps) {
  return (
    <div
      className="
        sticky w-full bottom-0 left-0 z-50
        bg-stone backdrop-blur-md
        flex items-center justify-between
        px-6 md:px-10 py-3
      "
    >
      {/* Left Side: Story Name */}
      <div className="text-superblack text-[20px] md:text-[22px] font-semibold truncate">
        {name.toUpperCase()}
      </div>

      {/* Right Side: Price + Buy Now Button */}
      <div className="flex items-center gap-8">
        {price !== undefined && (
          <span className="text-superblack text-[25px] font-bold">
            ₹{price.toLocaleString("en-IN")}/-
          </span>
        )}

        <Button
          className="bg-superblack rounded-none px-6 py-6 cursor-pointer text-white text-[18px] hover:bg-gray-800"
          onClick={onBuy}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
}
