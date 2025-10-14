
"use client";
import { useRouter } from "next/navigation";
import BikeHero from "@/components/bikes/hero/BikeHero";
import BikeStrip from "@/components/bikes/strip/BikeStrip";
import FeelTheFuture from "@/components/bikes/goat/FeelTheFuture";
import FeaturesFirstSection from "@/components/bikes/features/FeaturesFirstSection";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import TestRideSection from "@/components/landing/testRide/TestRideSection";
import FeatureShowcase from "@/components/bikes/features/FeatureShowcase";
import SpecsCompareSection from "@/components/bikes/geometry/SpecsCompareSection";
import SpecsExperienceSection from "@/components/bikes/specsToExperience/SpecsExperienceSection";
export default function SaolaPage() {
  const router = useRouter();
  const handleBuy = () => {
    console.log("Buy clicked");
  };
  const handleBookTestRide = () => {
    router.push("/experience");
  };
  return (
    <main className="z-100">
      <ParallaxWrapper>
        {/* Overview Section */}
        <section id="overview">
          <BikeHero
            branding="SAOLA"
            model="M10"
             variants={[
              { name: "M10", front: 130, rear: 120, wheel: "30/MX" },
              { name: "M12", front: 150, rear: 140, wheel: "29/MX" },
              { name: "M14", front: 170, rear: 160, wheel: "32/MX" },
            ]}
            colors={["black", "var(--color-rust)"]}
            icon="/images/Saola-white.png"
            image="/images/bikes/serow-hero.png"
          />
        </section>
        {/* Sticky Nav */}
        <BikeStrip
          name="SEROW"
          model="M10"
          onBuy={handleBuy}
          onBookTestRide={handleBookTestRide}
        />
        <FeelTheFuture />
        {/* Features */}
        <section id="features">
          <FeaturesFirstSection />
          <FeatureShowcase
            features={[
              {
                index: 1,
                label: "Lorem Ipsum",
                title: "Lightweight Alloy Frame",
                points: [
                  "Material: 6061 Aluminum Alloy",
                  "Weight: 11.8kg (medium size frame)",
                  "Benefit: Easy handling and better speed on roads",
                ],
                image: "/images/bikes/frameset.png",
              },
              {
                index: 2,
                label: "Lorem Ipsum",
                title: "21-Speed Shimano Gear System",
                points: [
                  "Type: Shimano Tourney TZ",
                  "Gears: 3 front * 7 rear = 21-speed",
                  "Benefit: Smooth gear shifting for uphill climbs & flat roads",
                ],
                image: "/images/bikes/crank.png",
              },
              {
                index: 3,
                label: "Lorem Ipsum",
                title: "Responsiveness Stability",
                points: [
                  "Steel: 67.3",
                  "Alloy Non Boost: 67",
                  "Alloy Boost: 67",
                ],
                image: "/images/bikes/cycle-f.png",
              },
              {
                index: 4,
                label: "Lorem Ipsum",
                title: "Range of User Height How Tall A Bike Feels",
                points: [
                  "Steel: 525mm",
                  "Alloy Non Boost: 625mm",
                  "Alloy Boost: 625mm",
                ],
                image: "/images/bikes/cycle-f.png",
              },
              {
                index: 5,
                label: "Lorem Ipsum",
                title: "Bike Control How Long A Bike Feels",
                points: [
                  "Steel: 380mm",
                  "Alloy Non Boost: 440mm",
                  "Alloy Boost: 440mm",
                ],
                image: "/images/bikes/cycle-f.png",
              },
            ]}
          />
        </section>
        {/* Geometry */}
        <section id="geometry">
          <SpecsCompareSection />
        </section>
        {/* Experience */}
        <section id="experience">
          <SpecsExperienceSection />
        </section>
        {/* Test Ride */}
        <section id="ride" className="py-5">
          <TestRideSection />
        </section>
      </ParallaxWrapper>
    </main>
  );
}
