"use client";

import BikeBranding from "./BikeBranding";
import BikeDetails from "./BikeDetails";
import BikeImage from "./BikeImage";

interface BikeHeroProps {
  branding: string;
  model: string;
  specs: { front: number; rear: number; wheel: string };
  colors: string[];
  image: string;
}

export default function BikeHero({
  branding,
  model,
  specs,
  colors,
  image,
}: BikeHeroProps) {
  return (
    <section
      className="w-full relative flex items-center justify-between h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bikes/bike-hero-bg.png')",
      }}
    >
      {/* Left Vertical Branding */}
      <BikeBranding text={branding} />


      {/* Center Image */}
      <BikeImage src={image} alt={`${branding} ${model}`} />

      {/* Right Details */}
      <BikeDetails model={model} specs={specs} colors={colors} />
    </section>
  );
}
