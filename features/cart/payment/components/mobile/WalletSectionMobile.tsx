"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, X, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  walletAmount: number;
  setWalletAmount: (v: number) => void;
  walletBalance: number;
}

export default function WalletSectionMobile({
  walletAmount,
  setWalletAmount,
  walletBalance,
}: Props) {
  const [open, setOpen] = useState(true);
  const [applied, setApplied] = useState(false);

  const handleChange = (e: any) => {
    const raw = Number(e.target.value.replace(/\D/g, ""));
    const safe = Math.min(raw, walletBalance);
    setWalletAmount(safe);
  };

  const handleApply = () => {
    if (!walletAmount) return;
    setApplied(true);
    setOpen(false);
  };

  const handleClear = () => {
    setWalletAmount(0);
    setApplied(false);
  };

  return (
    <section className="w-full border border-[#2a2a2a] p-3 rounded-xl">

      {/* ✅ HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2"
      >
        <div className="flex items-center gap-2">
          <Wallet size={18} className="text-sandstorm" />
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Use Wallet Balance
          </h3>
        </div>

        {open ? (
          <ChevronUp size={18} className="text-white/60" />
        ) : (
          <ChevronDown size={18} className="text-white/60" />
        )}
      </button>

      {/* ✅ COLLAPSIBLE CONTENT */}
      <AnimatePresence initial={false}>
        {open && !applied && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-3 space-y-4">

              {/* ✅ Balance */}
              <div className="flex justify-between text-xs text-white/50 mb-1 px-1">
                <span>Available</span>
                <span className="text-sandstorm font-semibold">
                  ₹{walletBalance.toLocaleString()}
                </span>
              </div>

              {/* ✅ Input + Apply */}
              <div className="relative w-full">
                <input
                  value={walletAmount || ""}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="
                    w-full h-11 pl-4 pr-24 rounded-lg
                    bg-[#121212] text-white text-xs
                    border border-[#2a2a2a] focus:border-sandstorm/60
                    outline-none transition-all placeholder:text-white/30
                  "
                />

                <button
                  onClick={handleApply}
                  disabled={!walletAmount}
                  className="
                    absolute right-1 top-1 h-9 px-4 rounded-md text-[11px]
                    uppercase font-semibold tracking-wide
                    bg-sandstorm text-black
                    disabled:bg-white/10 disabled:text-white/30
                    disabled:cursor-not-allowed
                    transition-all active:scale-95
                  "
                >
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ APPLIED SUMMARY CARD */}
      <AnimatePresence>
        {applied && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.28 }}
            className="
              mt-4 p-4 rounded-lg border border-sandstorm/40
              bg-sandstorm/10 backdrop-blur-sm
              flex items-start justify-between
            "
          >
            <div className="space-y-1">
              <p className="text-sandstorm text-sm font-semibold tracking-wide">
                ₹{walletAmount.toLocaleString()} applied
              </p>

              <p className="text-[11px] text-white/50">
                Remaining balance: ₹{(walletBalance - walletAmount).toLocaleString()}
              </p>
            </div>

            <button
              onClick={handleClear}
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
