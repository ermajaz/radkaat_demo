"use client";

import { useRouter } from "next/navigation";
import BikeHero from "@/components/bikes/hero/BikeHero";
import BikeStrip from "@/components/bikes/strip/BikeStrip";
import FeelTheFuture from "@/components/bikes/goat/FeelTheFuture";
import FeaturesFirstSection from "@/components/bikes/features/FeaturesFirstSection";
import FeatureBlock from "@/components/bikes/features/FeatureBlock";
import GeometryTable from "@/components/bikes/features/GeometryTable";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import TestRideSection from "@/components/landing/testRide/TestRideSection";
import Highlights from "@/components/bikes/features/Highlights";

export default function TakinPage() {
  const router = useRouter();

  const handleBuy = () => {
    // Dummy function, does nothing
    console.log("Buy clicked");
  };

  const handleBookTestRide = () => {
    router.push("/experience");
  };

  return (
    <main className="z-100">
      <ParallaxWrapper>
        {/* Hero Section */}
        <BikeHero
          branding="SEROW"
          model="M10"
          specs={{ front: 200, rear: 208, wheel: "29/MX" }}
          colors={["black", "var(--color-rust)"]}
          image="/images/bikes/serow-hero.png"
        />
        {/* Bike Strip */}
        <BikeStrip
          name="SEROW"
          model="M10"
          onBuy={handleBuy}
          onBookTestRide={handleBookTestRide}
        />
        <FeelTheFuture />
        <FeaturesFirstSection />
        <FeatureBlock
          index={1}
          label="Lorem Ipsum"
          title="Lightweight Alloy Frame"
          points={[
            "Material: 6061 Aluminum Alloy",
            "Weight: 11.8kg(medium size frame",
            "Benefit: Easy handling and better speed on roads",
          ]}
          image="/images/bikes/frameset.png"
        />
        <FeatureBlock
          index={2}
          label="Lorem Ipsum"
          title="21-Speed Shimano Gear System"
          points={[
            "Type: Shimano Tourney TZ",
            "Gears: 3 front * 7 rear = 21-speed",
            "Benefit: Smooth gear shifting for upchill climbs & flat roads",
          ]}
          image="/images/bikes/crank.png"
        />
        <FeatureBlock
          index={3}
          label="Lorem Ipsum"
          title="Responsiveness Stability"
          points={["Steel: 67.3", "Alloy Non Boost: 67", "Alloy Boost: 67"]}
          image="/images/bikes/cycle-f.png"
        />
        <FeatureBlock
          index={4}
          label="Lorem Ipsum"
          title="Range of User Height How Tall A Bike Feels"
          points={[
            "Steel: 525mm",
            "Alloy Non Boost: 625mm",
            "Alloy Boost: 625mm",
          ]}
          image="/images/bikes/cycle-f.png"
        />
        <FeatureBlock
          index={5}
          label="Lorem Ipsum"
          title="Bike Control How Long A Bike Feels"
          points={[
            "Steel: 380mm",
            "Alloy Non Boost: 440mm",
            "Alloy Boost: 440mm",
          ]}
          image="/images/bikes/cycle-f.png"
        />
        <GeometryTable />
        <Highlights
          images={[
            "/images/bikes/bike-highlight-1.jpg",
            "/images/bikes/bike-highlight-2.jpg",
            "/images/bikes/bike-highlight-3.jpg",
          ]}
        />
        <div className="py-5">
          <TestRideSection />
        </div>
      </ParallaxWrapper>
    </main>
  );
}
