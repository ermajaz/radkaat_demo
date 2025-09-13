import AdventureSection from "@/components/adventures/AdventureSection";
import BikeComparison from "@/components/bikeComparison/BikeComparison";
import BikesShowcase from "@/components/bikeSection/BikesShowcase";
import FlagSection from "@/components/flagSection/FlagSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import OurProducts from "@/components/ourProducts/OurProducts";
import StoriesSection from "@/components/StoriesSection";
import TestRideSection from "@/components/testRide/TestRideSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BikesShowcase />
      <BikeComparison />
      <TestRideSection />
      <FlagSection />
      <OurProducts />
      <AdventureSection />
      <StoriesSection />
      <Footer />
    </main>
  );
}
