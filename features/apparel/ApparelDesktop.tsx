"use client";

import ApparelCategoryGrid from "./components/ApparelCategoryGrid";
import ApparelHero from "./components/ApparelHero";
import ApparelShowcaseStrip from "./components/ApparelShowcaseStrip";
import ApparelTechSection from "./components/ApparelTechSection";


export default function ApparelDesktop() {
  return (
    <>
      <ApparelHero />
      <ApparelCategoryGrid />
      <ApparelTechSection />
      <ApparelShowcaseStrip />
    </>
  );
}
