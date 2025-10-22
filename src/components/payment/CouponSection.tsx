"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TicketPercent } from "lucide-react";

interface CouponSectionProps {
  coupon: string;
  setCoupon: React.Dispatch<React.SetStateAction<string>>;
  appliedCoupon: {
    code: string;
    discount: number;
    expiry: string;
    usage: number;
  } | null;
  setAppliedCoupon: React.Dispatch<
    React.SetStateAction<{
      code: string;
      discount: number;
      expiry: string;
      usage: number;
    } | null>
  >;
}

export const CouponSection: React.FC<CouponSectionProps> = ({
  coupon,
  setCoupon,
  appliedCoupon,
  setAppliedCoupon,
}) => {
  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase().replace(/\s+/g, "");
    if (!code) return;

    if (code === "SAVE20") {
      setAppliedCoupon({
        code,
        discount: 20,
        expiry: "2025-12-31",
        usage: 42,
      });
    } else {
      alert("Invalid or expired coupon");
      setAppliedCoupon(null);
    }
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <TicketPercent size={20} className="text-army" />
        <h3 className="text-lg font-semibold tracking-widest uppercase">Apply Coupon</h3>
      </div>

      <div className="flex gap-3 max-w-md">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon Code"
          className="w-full px-4 py-2 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-army outline-none uppercase tracking-wider"
        />
        <button
          onClick={handleApplyCoupon}
          className="px-5 py-2 bg-army cursor-pointer text-black font-semibold uppercase tracking-wider hover:bg-army/90 transition-all duration-300"
        >
          Apply
        </button>
      </div>

      <AnimatePresence>
        {appliedCoupon && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-5 border border-army/40 bg-army/5 p-4 rounded-md flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-army text-sm font-semibold">
                {appliedCoupon.code} — {appliedCoupon.discount}% OFF
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Expires on <span className="text-white">{appliedCoupon.expiry}</span>
              </p>
              <p className="text-gray-400 text-xs">
                Used by <span className="text-white">{appliedCoupon.usage}</span> users
              </p>
            </div>
            <button
              onClick={() => setAppliedCoupon(null)}
              className="mt-4 md:mt-0 px-4 py-1 text-xs uppercase border border-army text-army cursor-pointer transition-all"
            >
              Remove
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
