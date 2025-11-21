"use client";

import { BikeModel, ComparisonCategory } from "@/types/bikeComparison";
import React from "react";
import SidebarProfilesDesktop from "./components/SidebarProfilesDesktop";
import CategoryTabsDesktop from "./components/CategoryTabsDesktop";
import { ComparisonTableDesktop } from "./components/ComparisonTableDesktop";
import { RadarChartDesktop } from "./components/RadarChartDesktop";
import { BikeComparisonData } from "@/utils/bikeComparisonData";


export default function BicycleComparisonDesktop() {
  const categories: ComparisonCategory[] = [
    "Comfort & Ergonomics",
    "Performance",
    "Durability & Build",
    "Utility & Convenience",
    "Terrain Adaptability",
    "Price",
  ];

  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0]);
  const [selectedBikes, setSelectedBikes] = React.useState<BikeModel[]>([
    "Serow City",
    "Saola Urban",
    "Takin Lite",
  ]);

  return (
    <section className="w-full min-h-screen z-10 bg-superblack text-white flex">
      <SidebarProfilesDesktop profiles={BikeComparisonData.profiles} />

      <div className="flex-1 p-8">
        <CategoryTabsDesktop
          categories={categories}
          active={activeCategory}
          setActive={setActiveCategory}
        />

        <ComparisonTableDesktop
          category={activeCategory}
          selectedBikes={selectedBikes}
          data={BikeComparisonData}
          onSelectBike={(index, value) => {
            const arr = [...selectedBikes];
            arr[index] = value;
            setSelectedBikes(arr);
          }}
        />

        <div className="mt-0 flex justify-center">
          <RadarChartDesktop selectedBikes={selectedBikes} data={BikeComparisonData} />
        </div>
      </div>
    </section>
  );
}
