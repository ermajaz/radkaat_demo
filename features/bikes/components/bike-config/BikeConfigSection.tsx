"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BikeConfigSection() {
  return (
    <section className="w-full bg-superblack text-white flex flex-col items-center px-6 md:px-10 py-5 relative">

      {/* ✅ Top Bar: Heading + Toggle */}
      <div className="w-full flex items-start justify-between mb-5">

        {/* ✅ Advanced Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[34px] md:text-4xl font-black tracking-tight leading-[1.1]
                       bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent"
          >
            ENGINEER YOUR RIDE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-1 text-[12px] md:text-[15px] text-white/60 tracking-wide"
          >
            Explore every component. Understand every upgrade—your way.
          </motion.p>
        </div>
      </div>

      {/* ✅ Main Layout */}
      <div className="flex w-full gap-5 items-start">

        {/* ✅ LEFT — Video Thumbnail */}
        <div className="relative w-[520px] h-[500px] overflow-hidden border border-[#2a2a2a] bg-black rounded-md">
          <Image
            src="https://m.media-amazon.com/images/I/81xtd9KWxTL._AC_SL1500_.jpg"
            alt="Bike Configuration Video"
            fill
            className="object-cover"
          />

          {/* ✅ Centered Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center group"
            onClick={() => console.log("Play video")}
          >
            <div
              className="
                w-16 h-16 rounded-full bg-sandstorm/15 backdrop-blur-sm
                flex items-center justify-center border border-sandstorm/40
                transition-all duration-300 group-hover:scale-110
              "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="var(--color-sandstorm)"
                className="translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>

        {/* ✅ RIGHT — 2x2 image grid */}
        <div className="grid grid-cols-2 gap-5 w-[800px]">
          {[
            "https://www.roadbikerider.com/wp-content/uploads/2018/11/bike-diagram-600x369.png",
            "https://i.ytimg.com/vi/yaHEntLjmkk/sddefault.jpg",
            "https://www.weizeus.com/cdn/shop/files/Avatar_7.jpg?v=1747985890",
            "https://fitwerx.com/wp-content/uploads/2024/11/Screen-Shot-2024-11-12-at-1.58.46-PM.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-60 overflow-hidden border border-[#2a2a2a] bg-black rounded-md"
            >
              <Image src={src} alt="" fill className="object-cover scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
