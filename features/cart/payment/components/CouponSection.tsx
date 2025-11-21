"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TicketPercent } from "lucide-react";
import { validateCoupon } from "../utils/coupon.utils";

interface Props {
  coupon: string;
  setCoupon: (v: string) => void;
  appliedCoupon: any;
  setAppliedCoupon: (v: any) => void;
}

export const CouponSection: React.FC<Props> = ({
  coupon,
  setCoupon,
  appliedCoupon,
  setAppliedCoupon,
}) => {
  const handleApply = () => {
    const result = validateCoupon(coupon);
    if (!result) return alert("Invalid or expired coupon!");

    setAppliedCoupon(result);
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <TicketPercent size={20} className="text-army" />
        <h3 className="text-lg font-semibold uppercase tracking-widest">
          Apply Coupon
        </h3>
      </div>

      <div className="flex gap-3 max-w-md">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon Code"
          className="w-full px-4 py-2 bg-transparent border border-white/20 text-white uppercase outline-none"
        />
        <button
          onClick={handleApply}
          className="px-5 py-2 bg-army text-black uppercase tracking-widest"
        >
          Apply
        </button>
      </div>

      <AnimatePresence>
        {appliedCoupon && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 border border-army/40 bg-army/10 p-4 rounded-md"
          >
            <p className="text-army text-sm font-semibold">
              {appliedCoupon.code} — {appliedCoupon.discount}% OFF
            </p>
            <p className="text-gray-400 text-xs">
              Expires on {appliedCoupon.expiry}
            </p>

            <button
              onClick={() => setAppliedCoupon(null)}
              className="mt-3 px-3 py-1 text-xs border border-army text-army uppercase"
            >
              Remove
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
