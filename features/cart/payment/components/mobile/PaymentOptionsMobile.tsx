"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Wallet, BadgePercent } from "lucide-react";

interface Props {
  selectedMethod: "wallet" | "cashfree" | null;
  setSelectedMethod: (v: "wallet" | "cashfree") => void;
  onConfirm: () => void;
}

export default function PaymentOptionsMobile({
  selectedMethod,
  setSelectedMethod,
  onConfirm,
}: Props) {
  const methods = [
    { id: "wallet", label: "Wallet + Coupon", icon: <Wallet size={16} /> },
    { id: "cashfree", label: "Cashfree", icon: <CreditCard size={16} /> },
  ];

  return (
    <section className="w-full mt-10 space-y-8 pb-24">

      {/* ✅ HEADER */}
      <div className="flex items-center gap-2">
        <CreditCard size={18} className="text-sandstorm" />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
          Payment Method
        </h3>
      </div>

      {/* ✅ ADVANCED SLIDING SEGMENTED CONTROL */}
      <div className="relative flex items-center gap-2 p-1 bg-[#141414] rounded-full border border-[#2a2a2a]">
        {methods.map((method) => {
          const active = selectedMethod === method.id;
          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id as any)}
              className="
                relative flex-1 h-11 rounded-full flex items-center justify-center gap-2
                text-[11px] font-semibold uppercase tracking-wide
                transition-colors duration-300 z-10
              "
            >
              {method.icon}
              {method.label}

              {/* ✅ SLIDING HIGHLIGHT */}
              {active && (
                <motion.div
                  layoutId="payment-slider"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="
                    absolute inset-0 bg-sandstorm/15 rounded-full
                    border border-sandstorm/40
                  "
                />
              )}

              {/* ✅ Active text styling */}
              <span
                className={`
                  absolute z-20
                  ${active ? "text-sandstorm" : "text-white/50"}
                `}
              />
            </button>
          );
        })}
      </div>

      {/* ✅ HINT BELOW WHEN WALLET SELECTED */}
      <AnimatePresence>
        {selectedMethod === "wallet" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-[11px] text-white/50 pl-1"
          >
            <BadgePercent size={14} className="text-sandstorm" />
            <span>Best savings when combined with coupon</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full px-5 pb-6 bg-linear-to-t from-black/85 to-transparent backdrop-blur-md">
        <motion.button
          onClick={onConfirm}
          disabled={!selectedMethod}
          whileTap={selectedMethod ? { scale: 0.96 } : undefined}
          className={`
            w-full h-12 rounded-full text-xs uppercase tracking-[0.2em] font-semibold
            transition-all duration-300
            ${
              selectedMethod
                ? "bg-sandstorm text-black"
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }
          `}
        >
          Proceed to Payment
        </motion.button>
      </div>
    </section>
  );
}
