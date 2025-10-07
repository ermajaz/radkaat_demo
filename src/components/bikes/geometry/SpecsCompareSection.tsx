"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpecsTable from "./SpecsTable";
import CompareTable from "./CompareTable";

export default function SpecsCompareSection() {
  const [activeTab, setActiveTab] = useState<"specs" | "compare">("specs");

  return (
    <section className="w-full bg-superblack min-h-[calc(100vh-70px)] text-stone">
      {/* Toggle Header */}
      <div className="flex items-center px-6 py-6">
        <div className="relative flex w-[220px] h-[40px] border border-stone/40 overflow-hidden">
          {/* Moving Highlight */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-sandstorm"
            animate={{ x: activeTab === "compare" ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Tabs */}
          <button
            className={`relative z-10 flex-1 uppercase cursor-pointer text-sm font-semibold flex items-center justify-center transition-colors ${
              activeTab === "specs" ? "text-black" : "text-stone/60"
            }`}
            onClick={() => setActiveTab("specs")}
          >
            Specs
          </button>
          <button
            className={`relative z-10 flex-1 uppercase cursor-pointer text-sm font-semibold flex items-center justify-center transition-colors ${
              activeTab === "compare" ? "text-black" : "text-stone/60"
            }`}
            onClick={() => setActiveTab("compare")}
          >
            Compare
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "specs" ? <SpecsTable /> : <CompareTable />}
    </section>
  );
}
