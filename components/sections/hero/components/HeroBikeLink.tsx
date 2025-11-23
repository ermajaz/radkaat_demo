"use client";

import { motion } from "framer-motion";

interface HeroBikeLinkProps {
  modelName: string;
  brand?: string;
  year?: string;
}

export default function HeroBikeLink({
  modelName,
  brand,
  year,
}: HeroBikeLinkProps) {
  const handleScroll = () => {
    const el = document.getElementById("bike-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="absolute bottom-5 right-10 z-20 text-right select-none"
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-100 text-xs tracking-[0.15em] uppercase font-medium"
      >
        {brand ? `${brand} • ` : ""}{modelName}{year ? ` • ${year}` : ""}
      </motion.p>

      {/* Scroll Link */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="group inline-flex items-center gap-1.5 text-sandstorm text-[13px] font-semibold tracking-wide transition-all cursor-pointer bg-transparent"
      >
        <span className="relative">
          View Bike
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-sandstorm transition-all duration-300 group-hover:w-full"></span>
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 translate-x-0 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
