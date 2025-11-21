"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function CategoryMobileTile({ product,delay }: { product: any,delay: number }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 4);
    y.set(offsetY / 4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative h-[22vh] rounded-lg overflow-hidden 
        bg-[#111]/70 border border-[#E4D27C]/10 cursor-pointer
        shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500
        group ${hovered ? "scale-[1.03]" : "scale-[1.0]"}
      `}
    >
      {/* 🖼️ Product Image */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: hovered ? 1.08 : 1,
          filter: hovered ? "brightness(0.7)" : "brightness(0.9)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* 🌈 Radial Gradient Overlay on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,black/20,transparent_80%)] pointer-events-none"
      />

      {/* ✨ Gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* 🏷️ Centered Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
      >
        <h3
          className="
            text-[20px] font-bold uppercase text-white tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]
          "
        >
          {product.title}
        </h3>
        <motion.span
          className="block w-0 h-0.5 bg-[#E4D27C] mt-1 rounded-full group-hover:w-[70px] transition-all duration-500 ease-out"
        />
      </motion.div>

      {/* 🟡 Explore Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="
          absolute bottom-12 left-1/2 -translate-x-1/2 z-30
          bg-linear-to-r from-[#E4D27C] to-[#CBB860]
          text-black font-semibold uppercase text-[12px]
          px-4 py-2 rounded-full shadow-[0_0_25px_rgba(228,210,124,0.25)]
          active:scale-[0.97] transition-all duration-300
        "
      >
        Explore
      </motion.button>

      {/* ✨ Ambient Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-[#E4D27C]/10 blur-[60px] opacity-0 group-hover:opacity-40 transition-all duration-700"
      />
    </motion.div>
  );
}
