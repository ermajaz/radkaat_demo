import AboutRadkaat from "@/components/sections/about-radkaat";
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";
import BicycleShowcase from "@/components/sections/bicycle-showcase/BicycleShowcase";
import Category from "@/components/sections/category";
import HeroSection from "@/components/sections/hero";
import JungleBook from "@/components/sections/jungle-book-tour/JungleBook";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutRadkaat />
      <BicycleShowcase />
      <BicycleRide />
      <Category/>
      <JungleBook />
    </div>
  );
}
