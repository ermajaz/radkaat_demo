"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TicketPercent, X, ChevronDown, ChevronUp } from "lucide-react";
import { validateCoupon } from "../../utils/coupon.utils";

interface Props {
  coupon: string;
  setCoupon: (v: string) => void;
  appliedCoupon: any;
  setAppliedCoupon: (v: any) => void;
}

export default function CouponSectionMobile({
  coupon,
  setCoupon,
  appliedCoupon,
  setAppliedCoupon,
}: Props) {
  const [open, setOpen] = useState(true);

  const suggestedCoupons = ["RIDE10", "RADKAAT5", "WELCOME15"];

  const handleApply = () => {
    const result = validateCoupon(coupon.trim());
    if (!result) return;

    setAppliedCoupon(result);
    setCoupon("");
    setOpen(false);
  };

  return (
    <section className="w-full p-3 border border-[#2a2a2a] rounded-xl">
      {/* ✅ HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2"
      >
        <div className="flex items-center gap-2">
          <TicketPercent size={18} className="text-sandstorm" />
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Apply Coupon
          </h3>
        </div>

        {open ? (
          <ChevronUp size={18} className="text-white/60" />
        ) : (
          <ChevronDown size={18} className="text-white/60" />
        )}
      </button>

      {/* ✅ COLLAPSIBLE BODY */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-3 space-y-4">

              {/* ✅ Input Field */}
              <div className="relative">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon"
                  className="
                    w-full h-11 pl-4 pr-24 rounded-lg
                    bg-[#121212]/95 text-white text-xs uppercase
                    border border-[#2a2a2a] focus:border-sandstorm/60
                    outline-none transition-all placeholder:text-white/30
                  "
                />

                <button
                  onClick={handleApply}
                  disabled={!coupon.trim()}
                  className="
                    absolute right-1 top-1 h-9 px-4 rounded-md text-[11px]
                    uppercase font-semibold tracking-wide
                    transition-all duration-300
                    bg-sandstorm text-black
                    disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed
                    active:scale-95
                  "
                >
                  Apply
                </button>
              </div>

              {/* ✅ Suggested coupons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {suggestedCoupons.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCoupon(c)}
                    className="
                      text-[11px] px-3 py-1 rounded-md 
                      bg-white/5 border border-[#2a2a2a]
                      text-white/70 whitespace-nowrap
                      hover:border-sandstorm/40 hover:text-sandstorm 
                      transition-all
                    "
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Applied Coupon Card (Outside Collapse) */}
      <AnimatePresence>
        {appliedCoupon && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.28 }}
            className="
              mt-4 p-4 rounded-lg border border-sandstorm/40
              bg-sandstorm/10 backdrop-blur-sm flex items-start justify-between
            "
          >
            <div className="space-y-1">
              <p className="text-sandstorm text-sm font-semibold tracking-wide">
                {appliedCoupon.code} — {appliedCoupon.discount}% OFF
              </p>
              <p className="text-[11px] text-white/50">
                Expires on {appliedCoupon.expiry}
              </p>
            </div>

            <button
              onClick={() => setAppliedCoupon(null)}
              className="p-1 text-white/50 hover:text-white transition"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
