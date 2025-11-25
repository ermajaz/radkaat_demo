"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMobile() {
  const handleScroll = () => {
    document.getElementById("bike-showcase")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[77vh] overflow-hidden bg-superblack flex items-center justify-center">

      {/* ✅ Soft spotlight behind bike */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(255,215,140,0.28)_0%,rgba(0,0,0,0.9)_60%)]" />
      </div>

      {/* ✅ Bike with cinematic entrance */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 1.15 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <Image
          src="/images/hero-cycle.png"
          alt="Radkaat Bike"
          width={900}
          height={550}
          priority
          className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        />
      </motion.div>

      {/* ✅ Floating glass info card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[20%] w-[85%] mx-auto text-center"
      >
        <Image
          src="/images/website-logo.png"
          alt="Radkaat"
          width={65}
          height={50}
          className="mx-auto mb-2"
        />

        <h1 className="text-[30px] font-extrabold text-white tracking-wide">
          RADKAAT
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sandstorm text-[22px] font-bold uppercase mt-1 leading-tight"
        >
          #Nothing But Now
        </motion.p>
      </motion.div>

      {/* ✅ Liquid-glass CTA */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 w-[200px] h-12 rounded-full
                  bg-sandstorm text-black font-semibold text-sm
                  tracking-wide backdrop-blur-md
                  active:scale-95 transition-all"
      >
        Explore Bike
      </motion.button>

      {/* ✅ Soft top + bottom fade */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/30 via-transparent to-transparent" />
    </section>
  );
}
