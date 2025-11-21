"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpecsTableMobile from "./SpecsTableMobile";
import CompareTableMobile from "./CompareTableMobile";

export default function SpecsCompareSectionMobile() {
  const [activeTab, setActiveTab] = useState<"specs" | "compare">("specs");

  return (
    <section className="relative w-full bg-superblack text-stone py-10 px-4 overflow-hidden">
      {/* ===== Toggle Header ===== */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[90%] h-11 bg-[#111]/50 border border-[#E4D27C]/20 rounded-full flex overflow-hidden backdrop-blur-md">
          {/* Animated Highlight */}
          <motion.div
            layout
            className="absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-sandstorm/20 rounded-full"
            animate={{ x: activeTab === "compare" ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          />
          {["specs", "compare"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "specs" | "compare")}
              className={`relative z-10 flex-1 text-sm font-semibold uppercase tracking-wide transition-all ${
                activeTab === tab
                  ? "text-sandstorm"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Animated Content Switch ===== */}
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          {activeTab === "specs" && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <SpecsTableMobile />
            </motion.div>
          )}

          {activeTab === "compare" && (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <CompareTableMobile />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
