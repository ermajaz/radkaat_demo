"use client";

import { useState } from "react";
import { BikeComparisonData } from "@/utils/bikeComparisonData";
import CategoryTabsMobile from "./components/mobile/CategoryTabsMobile";
import ComparisonTableMobile from "./components/mobile/ComparisonTableMobile";
import RadarChartMobile from "./components/mobile/RadarChartMobile";
import ProfileCarouselMobile from "./components/mobile/ProfileCarouselMobile";
import { ComparisonCategory } from "@/types/bikeComparison";

const categories: ComparisonCategory[] = [
    "Comfort & Ergonomics",
    "Performance",
    "Durability & Build",
    "Utility & Convenience",
    "Terrain Adaptability",
    "Price",
  ];

export default function BicycleComparisonMobile() {

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedBikes, setSelectedBikes] = useState([
    "Serow City",
    "Saola Urban",
    "Takin Lite"
  ]);

  return (
    <section className="w-full min-h-screen bg-superblack text-white p-4">
      {/* ✅ Profiles */}
      <ProfileCarouselMobile
        profiles={BikeComparisonData.profiles}
        selectedBikes={selectedBikes}
        onSelect={setSelectedBikes}
      />

      {/* ✅ Category Tabs */}
      <CategoryTabsMobile
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      {/* ✅ Comparison Table */}
      <ComparisonTableMobile
        category={activeCategory}
        selectedBikes={selectedBikes}
        data={BikeComparisonData}
      />

      {/* ✅ Radar */}
      <RadarChartMobile
        selectedBikes={selectedBikes}
        data={BikeComparisonData}
      />
    </section>
  );
}
