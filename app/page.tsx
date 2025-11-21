import AboutRadkaat from "@/components/sections/about-radkaat";
import BicycleComparison from "@/components/sections/bicycle-comparison/BicycleComparison";
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";
import BicycleShowcase from "@/components/sections/bicycle-showcase/BicycleShowcase";
import Category from "@/components/sections/category";
import HeroSection from "@/components/sections/hero";
import JungleBook from "@/components/sections/jungle-book-tour/JungleBook";

export default function LandingPage() {
  return (
    <div> landing page
      <HeroSection />
      <BicycleShowcase />
      <BicycleComparison />
      <BicycleRide />
      <Category />
      <JungleBook />
      <AboutRadkaat />
    </div>
  );
}
