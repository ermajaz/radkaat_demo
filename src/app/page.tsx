import AdventureSection from "@/components/landing/adventure/AdventureSection";
import BikeComparison from "@/components/landing/bikeComparison/BikeComparison";
import BikesShowcase from "@/components/landing/bikeSection/BikesShowcase";
import FlagSection from "@/components/landing/flag/FlagSection";
import HeroSection from "@/components/landing/hero/HeroSection";
import GridProduct from "@/components/landing/ourProduct/GridProduct";
import StoriesSection from "@/components/landing/storySection/StoriesSection";
import TestRideSection from "@/components/landing/testRide/TestRideSection";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
// import UpdatedHero from "@/components/landing/hero/UpdatedHero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="w-[calc(100vw-96px)] mx-auto">
        <BikesShowcase />
        <BikeComparison />

        <ParallaxWrapper>
          <GridProduct />
          <TestRideSection />
          <FlagSection />

          <StoriesSection />

          <AdventureSection />
        </ParallaxWrapper>
      </div>
    </main>
  );
}
