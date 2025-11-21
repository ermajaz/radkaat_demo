"use client";

import { motion } from "framer-motion";
import HeroBackground from "./components/HeroBackground";
import HeroLogoSection from "./components/HeroLogoSection";
import HeroTagline from "./components/HeroTagline";
import HeroImage from "./components/HeroImage";


export default function HeroDesktop() {
  return (
    <section className="relative w-full h-screen z-10 bg-superblack overflow-hidden flex items-center justify-start">

      <HeroBackground />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-[45%] gap-1 h-full flex flex-col items-center justify-center"
      >
        <HeroLogoSection />
        <HeroTagline />
      </motion.div>

      {/* Right Image */}
      <HeroImage />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#000000bb] pointer-events-none" />
    </section>
  );
}
