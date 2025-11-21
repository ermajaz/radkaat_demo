"use client";

import React from "react";
import SidebarProfilesMobile from "./components/mobile/SidebarProfilesMobile";
import CategoryTabsMobile from "./components/mobile/CategoryTabsMobile";
import BikeSelectorMobile from "./components/mobile/BikeSelectorMobile";
import ComparisonTableMobile from "./components/mobile/ComparisonTableMobile";
import RadarChartMobile from "./components/mobile/RadarChartMobile";
import { BikeComparisonData } from "@/utils/bikeComparisonData";

export default function BicycleComparisonMobile() {
  const categories = Object.keys(BikeComparisonData.table);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [selectedBikes, setSelectedBikes] = React.useState([
    "Serow City",
    "Saola Urban",
  ]);

  return (
    <section className="w-full bg-superblack text-white py-6 px-4 space-y-8">

      <SidebarProfilesMobile profiles={BikeComparisonData.profiles} />

      <CategoryTabsMobile
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <BikeSelectorMobile
        bikes={selectedBikes}
        options={BikeComparisonData.models}
        onChange={(i, val) => {
          const arr = [...selectedBikes];
          arr[i] = val;
          setSelectedBikes(arr);
        }}
      />

      <ComparisonTableMobile
        category={activeCategory}
        selectedBikes={selectedBikes}
        data={BikeComparisonData}
      />

      <RadarChartMobile
        selectedBikes={selectedBikes}
        data={BikeComparisonData}
      />

    </section>
  );
}
