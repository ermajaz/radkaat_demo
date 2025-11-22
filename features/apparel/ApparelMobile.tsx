"use client";

import ApparelCategoryGrid from "./components/ApparelCategoryGrid";
import ApparelHero from "./components/ApparelHero";
import ApparelShowcaseStrip from "./components/ApparelShowcaseStrip";
import ApparelTechSection from "./components/ApparelTechSection";


export default function ApparelMobile() {
  return (
    <div className="space-y-12">
      <ApparelHero />
      <ApparelCategoryGrid />
      <ApparelTechSection />
      <ApparelShowcaseStrip />
    </div>
  );
}
