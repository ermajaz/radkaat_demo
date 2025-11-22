"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcase = [
  {
    title: "Night loops in the city.",
    tag: "Urban",
    image: "/images/apparel-showcase-urban.png",
  },
  {
    title: "Race day climbs.",
    tag: "Race",
    image: "/images/apparel-showcase-race.png",
  },
  {
    title: "Cold sunrise commutes.",
    tag: "Weather",
    image: "/images/apparel-showcase-weather.png",
  },
];

export default function ApparelShowcaseStrip() {
  return (
    <section className="relative w-full bg-black text-white py-24 overflow-hidden">
      
      {/* ✅ Soft edge gradient */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 h-full bg-linear-to-r from-black via-45% to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-40 h-full bg-linear-to-l from-black via-45% to-transparent z-10" />

      {/* ✅ Title */}
      <div className="max-w-6xl mx-auto px-8 mb-10">
        <h2 className="text-3xl md:text-5xl font-light leading-tight">
          Apparel made for
          <br />
          <span className="font-semibold">real riding conditions.</span>
        </h2>
      </div>

      {/* ✅ Horizontal Motion Strip */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex gap-8 overflow-x-auto mx-auto px-20 pb-4 snap-x snap-mandatory"
      >
        {showcase.map((s, i) => (
          <motion.div
            key={s.title}
            whileHover={{ y: -10, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative hide-scrollbar snap-start min-w-[500px] h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] cursor-pointer group"
          >
            {/* ✅ Image */}
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover object-center rounded-3xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* ✅ Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

            {/* ✅ Tag */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] bg-sandstorm/20 text-sandstorm border border-sandstorm/30 backdrop-blur-md"
            >
              {s.tag}
            </motion.span>

            {/* ✅ Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="absolute bottom-6 left-6 text-lg font-medium max-w-[220px] leading-snug"
            >
              {s.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
