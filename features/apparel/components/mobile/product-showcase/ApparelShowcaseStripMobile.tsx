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

export default function ApparelShowcaseStripMobile() {
  return (
    <section className="relative w-full bg-superblack text-white py-2 overflow-hidden">

      {/* ✅ Header */}
      <div className="px-5 mb-8 md:hidden">
        <h2 className="text-2xl font-light leading-snug">
          Apparel built for
          <br />
          <span className="font-semibold">real riding conditions.</span>
        </h2>
      </div>

      {/* ✅ Snap Carousel */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:hidden hide-scrollbar pb-4">
        {showcase.map((s, i) => (
          <motion.div
            key={s.title}
            whileTap={{ scale: 0.97 }}
            className="
              snap-center
              relative min-w-[85%] h-[65vh]
              rounded-2xl overflow-hidden
              bg-white/5 border border-[#2a2a2a] backdrop-blur-xl
              shadow-[0_12px_50px_rgba(0,0,0,0.55)]
            "
          >
            {/* ✅ Image Parallax */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover object-center"
              />
            </motion.div>

            {/* ✅ Dark Mesh Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* ✅ Floating Tag */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                absolute top-5 right-5 
                px-3 py-1 rounded-full text-[10px]
                uppercase tracking-[0.28em]
                bg-sandstorm/25 text-sandstorm
                border border-sandstorm/30 backdrop-blur-md
              "
            >
              {s.tag}
            </motion.span>

            {/* ✅ Glass Bottom Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="
                absolute bottom-5 left-1/2 -translate-x-1/2
                w-[85%] rounded-xl p-4
                bg-black/40 backdrop-blur-xl border border-[#2a2a2a]
              "
            >
              <p className="text-[14px] font-medium leading-snug">
                {s.title}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
