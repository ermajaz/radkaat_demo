"use client";

import HeroMobileBackground from "./components/HeroMobileBackground";
import HeroMobileContent from "./components/HeroMobileContent";


export default function HeroMobile() {
  return (
    <section className="relative w-full h-[90vh] bg-superblack flex flex-col items-center justify-center overflow-hidden">

      <HeroMobileBackground />

      <HeroMobileContent />

      {/* Dark bottom fade */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 pointer-events-none" />
    </section>
  );
}
