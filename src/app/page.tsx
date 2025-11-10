import AdventureSection from "@/components/landing/adventure/AdventureSection";
import BikeComparison from "@/components/landing/bikeComparison/BikeComparison";
import BikesShowcase from "@/components/landing/bikeSection/BikesShowcase";
import FlagSection from "@/components/landing/flag/FlagSection";
import FlagSectionMobile from "@/components/landing/flag/FlagSectionMobile";
import HeroSection from "@/components/landing/hero/HeroSection";
import GridProduct from "@/components/landing/ourProduct/GridProduct";
import StoriesSection from "@/components/landing/storySection/StoriesSection";
import TestRideSection from "@/components/landing/testRide/TestRideSection";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import GridProductMobile from "@/components/landing/ourProduct/GridProductMobile";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <BikesShowcase />
      <BikeComparison />

      <ParallaxWrapper>
        <div>
          {/* Desktop / Tablet View */}
          <div className="hidden md:block">
            <GridProduct />
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <GridProductMobile />
          </div>
        </div>
        <TestRideSection className="md:h-[600px]" />

        {/* ✅ Flag Section — responsive split */}
        <div>
          {/* Desktop / Tablet View */}
          <div className="hidden md:block">
            <FlagSection />
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <FlagSectionMobile />
          </div>
        </div>

        <StoriesSection />
        <AdventureSection />
      </ParallaxWrapper>
    </main>
  );
}
