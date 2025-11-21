"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpecsTable from "./SpecsTable";
import CompareTable from "./CompareTable";
import { TableBikeName, TableModelName } from "./utils/geometry.types";

export default function SpecsCompareSection({
  selectedBike,
  selectedModel,
}: {
  selectedBike: TableBikeName;
  selectedModel: TableModelName;
}) {
  const [activeTab, setActiveTab] = useState<"specs" | "compare">("specs");

  return (
    <section className="relative w-full bg-superblack min-h-[calc(100vh-70px)] p-5 text-stone">
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#101010] to-[#1A1A1A] opacity-90 pointer-events-none" /> */}
      {/* Toggle Header */}
      <div className="flex items-center px-6 py-6">
        <div className="relative flex w-[220px] h-10 border border-stone/40 overflow-hidden">
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
      {activeTab === "specs" ? <SpecsTable selectedBike={selectedBike} selectedModel={selectedModel} /> : <CompareTable selectedBike={selectedBike} selectedModel={selectedModel} />}
    </section>
  );
}
