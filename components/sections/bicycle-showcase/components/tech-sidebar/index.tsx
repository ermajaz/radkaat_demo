"use client";

import { useStopScroll } from "@/hooks/useStopScroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { SPEC_CATEGORIES, SPEC_MODELS, SPEC_TABLE } from "../../utils/bicycle-showcase";
import Header from "./Header";
import ModelTabs from "./ModelTabs";
import ViewToggle from "./ViewToggle";
import CategoryTabs from "./CategoryTabs";
import SpecTable from "./SpecTable";
import ComparisonGraph from "./ComparisonGraph";

export default function TechSidebar({ onClose }: { onClose: () => void }) {
  useStopScroll(true);

  const [activeModel, setActiveModel] = useState(SPEC_MODELS[0]);
  const [activeCategory, setActiveCategory] = useState(SPEC_CATEGORIES[0]);
  const [onlyDiff, setOnlyDiff] = useState(false);

  return (
    <motion.div
      className="fixed inset-y-0 right-0 w-[85%] bg-[#110d0d] text-white shadow-xl border-l border-white/10 z-1200 overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
    >
      <Header onClose={onClose} />

      <div className="px-10">
        <div className="flex py-5 items-center justify-between">
          <ModelTabs
            models={SPEC_MODELS}
            active={activeModel}
            setActive={setActiveModel}
          />
          <ViewToggle onlyDiff={onlyDiff} setOnlyDiff={setOnlyDiff} />
        </div>

        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="col-span-3">
            <CategoryTabs
              categories={SPEC_CATEGORIES}
              active={activeCategory}
              setActive={setActiveCategory}
            />
          </div>

          <div className="col-span-9">
            <SpecTable
              model={activeModel}
              category={activeCategory}
              showDiff={onlyDiff}
              DATA={SPEC_TABLE}
            />

            {/* 🔥 Advanced Graph Comparison */}
            {/* <ComparisonGraph /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
