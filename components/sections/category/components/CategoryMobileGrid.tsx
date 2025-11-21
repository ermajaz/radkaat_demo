"use client";

import { ourProducts } from "@/utils/category";
import CategoryMobileTile from "./CategoryMobileTile";
import { motion } from "framer-motion";


export default function CategoryMobileGrid() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[320px] h-80 bg-[#E4D27C]/10 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          text-[22px] font-extrabold uppercase tracking-widest text-center
          bg-linear-to-r from-[#E4D27C] via-[#FFF8C0] to-[#E4D27C]
          bg-clip-text text-transparent mb-3
        "
      >
        Our Products
      </motion.h2>

      {/* Card Stack (3 cards fit in 80vh) */}
      <div className="relative flex flex-col gap-4 w-full max-w-[500px] h-full justify-center">
        {ourProducts?.map((product, index) => (
          <CategoryMobileTile key={product.id} product={product} delay={index * 0.1} />
        ))}
      </div>
    </>
  );
}
