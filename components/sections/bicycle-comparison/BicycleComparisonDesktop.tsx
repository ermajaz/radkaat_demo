"use client";

import { BikeModel, ComparisonCategory } from "@/types/bikeComparison";
import React from "react";
import SidebarProfilesDesktop from "./components/SidebarProfilesDesktop";
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
   <section className="w-full h-screen bg-superblack text-white flex overflow-hidden">
      <SidebarProfilesDesktop profiles={BikeComparisonData.profiles} />

      <div className="h-full w-full m-auto pl-5 pt-10 flex flex-col">
        <ComparisonTableDesktop
          category={activeCategory}
          setCategory={setActiveCategory}
          selectedBikes={selectedBikes}
          data={BikeComparisonData}
          onSelectBike={(index, value) => {
            const arr = [...selectedBikes];
            arr[index] = value;
            setSelectedBikes(arr);
          }}
        />

        <div className="flex-1 flex justify-center py-4">
          <RadarChartDesktop selectedBikes={selectedBikes} data={BikeComparisonData} />
        </div>
      </div>
    </section>
  );
}
