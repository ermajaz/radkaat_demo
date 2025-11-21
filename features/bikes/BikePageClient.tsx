"use client";

import { useRouter } from "next/navigation";
import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";

// --- Hero & Strip ---
import BikeHero from "@/features/bikes/components/hero/BikeHero";
import BikeStrip from "@/features/bikes/components/strip/BikeStrip";
import BikeStripMobile from "@/features/bikes/components/strip/BikeStripMobile";

// --- Feel The Future ---
import FeelTheFuture from "@/features/bikes/components/goat/FeelTheFuture";
import FeelTheFutureMobile from "@/features/bikes/components/goat/FeelTheFutureMobile";

// --- Features Section ---
import FeaturesFirstSection from "@/features/bikes/components/features/FeaturesFirstSection";
import FeaturesFirstSectionMobile from "@/features/bikes/components/features/FeaturesFirstSectionMobile";

import FeatureShowcase from "@/features/bikes/components/features/FeatureShowcase";
import FeatureShowcaseMobile from "@/features/bikes/components/features/FeatureShowcaseMobile";

import { FEATURES } from "@/features/bikes/utils/bikes-data";

// --- Geometry ---
import SpecsCompareSection from "@/features/bikes/components/geometry/SpecsCompareSection";
import SpecsCompareSectionMobile from "@/features/bikes/components/geometry/SpecsCompareSectionMobile";

// --- Experience ---
import SpecsExperienceSection from "@/features/bikes/components/specsToExperience/SpecsExperienceSection";

// --- Ride ---
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";
import { TableBikeName, TableModelName } from "@/features/bikes/components/geometry/utils/geometry.types";

export default function BikesPageClient({
  bikeName,
  modelName,
}: {
  bikeName: TableBikeName;
  modelName: TableModelName;
}) {
  const router = useRouter();

  const handleBuy = () => console.log("Buy clicked");
  const handleBookTestRide = () => router.push("/experience");

  // Helper for mobile/desktop rendering
  const render = useResponsiveComponent;

  return (
    <main className="z-100">

      {/* ============================
          HERO SECTION
      ============================== */}
      <section id="overview">
        <BikeHero
          branding={bikeName}
          model={modelName}
          variants={[
            { name: "M10", front: 130, rear: 120, wheel: "30/MX" },
            { name: "M12", front: 150, rear: 140, wheel: "29/MX" },
            { name: "M14", front: 170, rear: 160, wheel: "32/MX" },
          ]}
          colors={["black", "var(--color-rust)"]}
          icon="/icons/Takin-white.png"
          image="/images/bikes/serow-hero.png"
        />
      </section>

      {/* ============================
          BUY STRIP
      ============================== */}
      {render(
        <BikeStripMobile
          name="TAKIN"
          model="M10"
          onBuy={handleBuy}
          onBookTestRide={handleBookTestRide}
          selectedBike={bikeName}
          selectedModel={modelName}
        />,
        <BikeStrip
          name="TAKIN"
          model="M10"
          onBuy={handleBuy}
          onBookTestRide={handleBookTestRide}
          selectedBike={bikeName}
          selectedModel={modelName}
        />
      )}

      {/* ============================
          FEEL THE FUTURE
      ============================== */}
      {render(
        <FeelTheFutureMobile />,
        <FeelTheFuture />
      )}

      {/* ============================
          FEATURES SECTION
      ============================== */}
      <section id="features">
        {render(
          <FeaturesFirstSectionMobile />,
          <FeaturesFirstSection />,
        )}

        {render(
          <FeatureShowcaseMobile features={FEATURES} />,
          <FeatureShowcase features={FEATURES} />,
        )}
      </section>

      {/* ============================
          GEOMETRY SECTION
      ============================== */}
      <section id="geometry">
        {render(
          <SpecsCompareSectionMobile />,
          <SpecsCompareSection
            selectedBike={bikeName}
            selectedModel={modelName}
          />,
        )}
      </section>

      {/* ============================
          EXPERIENCE SECTION
      ============================== */}
      <section id="experience">
        <SpecsExperienceSection />
      </section>

      {/* ============================
          RIDE SECTION
      ============================== */}
      <section id="ride">
        <BicycleRide />
      </section>

    </main>
  );
}
