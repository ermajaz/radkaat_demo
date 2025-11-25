"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";

export const CartEmptyMobile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-white/70">
      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4">
        <ShoppingBag size={22} className="text-white/80" />
      </div>
      <h3 className="text-[18px] font-semibold mb-1">Your cart is empty</h3>
      <p className="text-[12px] text-white/50 max-w-[260px]">
        Add a bike, gear, or accessories to start your Radkaat journey.
      </p>
    </div>
  );
};
