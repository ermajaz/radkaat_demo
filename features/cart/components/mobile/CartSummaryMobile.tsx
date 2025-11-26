"use client";

import React from "react";
import { FormattedNumber } from "@/utils/numberFlow";
import { motion } from "framer-motion";

type Props = {
  subtotal: number;
  itemCount: number;
  onCheckout: () => void;
};

export const CartSummaryMobile: React.FC<Props> = ({
  subtotal,
  itemCount,
  onCheckout,
}) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed bottom-0 left-0 right-0
        bg-[#050505]/95 border-t border-[#2a2a2a]
        px-4 py-3 pb-5
        backdrop-blur-md
        z-40
      "
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/40 uppercase tracking-[0.16em]">
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="text-[20px] font-semibold text-white leading-tight">
            <FormattedNumber value={subtotal} />
          </span>
        </div>

        <div className="text-right text-[10px] text-white/40 uppercase tracking-[0.12em]">
          <div>Excludes taxes & shipping</div>
          <div className="mt-1 text-sandstorm">
            Free shipping over ₹10,000
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="
          mt-2 w-full h-11 rounded-full
          bg-army text-black font-semibold text-[13px] uppercase tracking-[0.18em]
          shadow-[0_12px_30px_rgba(0,0,0,0.65)]
          active:scale-[0.98] transition-all duration-200
        "
      >
        Proceed to Checkout
      </button>
    </motion.div>
  );
};
