import Footer from "@/components/common/Footer";
import AdventureSection from "@/components/landing/adventure/AdventureSection";
import BikeComparison from "@/components/landing/bikeComparison/BikeComparison";
import BikesShowcase from "@/components/landing/bikeSection/BikesShowcase";
// import DestinationSection from "@/components/landing/destination/DestinationSection";
import FlagSection from "@/components/landing/flag/FlagSection";
import HeroSection from "@/components/landing/hero/HeroSection";
import GridProduct from "@/components/landing/ourProduct/GridProduct";
// import OurProducts from "@/components/landing/ourProduct/OurProducts";
import StoriesSection from "@/components/landing/storySection/StoriesSection";
import TestRideSection from "@/components/landing/testRide/TestRideSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <BikesShowcase />
      <BikeComparison />
      <TestRideSection />
      <FlagSection />
      {/* <OurProducts /> */}
      <GridProduct/>
      <StoriesSection />
      <AdventureSection />
      <Footer />
    </main>
  );
}
