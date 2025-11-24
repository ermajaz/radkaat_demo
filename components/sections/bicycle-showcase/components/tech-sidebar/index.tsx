"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GeometryImage from "./GeometryImage";
import CategoryTabs from "./CategoryTabs";
import SpecTable from "./SpecTable";
import ViewToggle from "./ViewToggle";
import Header from "./Header";

import {
  SPEC_CATEGORIES,
  SPEC_TABLE,
} from "../../utils/bicycle-showcase";

export default function TechSidebar({ onClose }: { onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState("Geometry");
  const [onlyDiff, setOnlyDiff] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed inset-y-0 right-0 w-full bg-superblack text-white flex flex-col z-500"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
    >
      <Header onClose={onClose} />

      <div className="px-10 py-10 overflow-y-auto flex-1 py-32">
        <div className="grid grid-cols-12 gap-10">

          {/* ✅ Left Categories */}
          <div className="col-span-2">
            <CategoryTabs
              categories={SPEC_CATEGORIES}
              active={activeCategory}
              setActive={setActiveCategory}
            />
          </div>

          {/* ✅ Middle Image */}
          <div className="col-span-4 flex items-start justify-center">
            <GeometryImage hoveredImage={hoveredImage} />
          </div>

          {/* ✅ Right Table */}
          <div className="col-span-6">
            <SpecTable
              category={activeCategory}
              showDiff={onlyDiff}
              DATA={SPEC_TABLE}
              onHover={setHoveredImage}
            />
          </div>

        </div>
      </div>

      {/* ✅ Bottom Toggle */}
      <div className="w-full flex justify-center py-8 bg-superblack">
        <ViewToggle onlyDiff={onlyDiff} setOnlyDiff={setOnlyDiff} />
      </div>
    </motion.div>
  );
}
