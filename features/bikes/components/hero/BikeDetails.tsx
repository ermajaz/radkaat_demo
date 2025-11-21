"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BikeColorSelector from "./BikeColorSelector";
import Image from "next/image";

interface Variant {
  name: string;
  front: number;
  rear: number;
  wheel: string;
}

interface Props {
  model: string;
  branding: string;
  icon: string;
  variants: Variant[];
  colors: string[];
}

export default function BikeDetails({
  model,
  branding,
  icon,
  variants,
  colors,
}: Props) {
  const [activeVariant, setActiveVariant] = useState(0);
  const active = variants[activeVariant];

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="absolute top-[42%] -translate-y-[58%] right-[15px] flex flex-col gap-y-2 items-center text-center w-full max-w-sm text-white"
    >
      {/* Model Name */}
      <span className="text-[36px] font-black uppercase flex items-center space-x-2">
        {icon && (
          <Image
            src={icon}
            alt={`${branding} logo`}
            width={48}
            height={48}
            quality={100}
            className="w-12 h-12 object-contain"
          />
        )}
        {branding} - {active.name}
      </span>

      {/* Variant Selector */}
      <div className="relative flex items-center justify-center space-x-2 rounded-full bg-[#333337] backdrop-blur-md border border-white/6 px-2 py-1">
        {/* Background highlight (animated horizontally) */}
        <motion.div
          layout
          layoutId="variant-glow"
          className="absolute top-0 bottom-0 rounded-full bg-white"
          style={{
            left: `${(activeVariant * 100) / variants.length}%`,
            width: `${100 / variants.length}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
        />
        {variants.map((v, i) => {
          const isActive = activeVariant === i;
          return (
            <button
              key={v.name}
              onClick={() => setActiveVariant(i)}
              className={`relative z-10 px-[18px] h-[25px] rounded-full cursor-pointer uppercase text-sm font-semibold transition-colors duration-300 ${
                isActive ? "text-black" : "text-stone"
              }`}
            >
              {v.name}
            </button>
          );
        })}
      </div>

      {/* Animated Variant Specs */}
      <motion.div
        key={active.name}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
        className="flex space-x-9 uppercase font-medium mt-1"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Front (MM)</p>
          <span className="font-extrabold text-[24px]">{active.front}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Rear (MM)</p>
          <span className="font-extrabold text-[24px]">{active.rear}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Wheel Size</p>
          <span className="font-extrabold text-[24px]">{active.wheel}</span>
        </div>
      </motion.div>

      {/* Color Selector */}
      <div className="flex items-center space-x-2 mt-1">
        <p className="uppercase text-sm tracking-wider font-bold">Color:</p>
        <BikeColorSelector colors={colors} />
      </div>

      {/* Buy Button */}
      <Button
        className="
    relative overflow-hidden group
    w-[120px] h-[42px] mt-2
    border border-[#999999]/80 rounded-none
    uppercase font-medium text-[15px]
    tracking-wide text-white
    transition-colors duration-300 cursor-pointer
  "
      >
        {/* Animated gradient background */}
        <span
          className="
      absolute inset-0 
      bg-linear-to-r from-transparent via-white/80 to-white
      translate-x-full group-hover:translate-x-0
      transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
    "
        />

        {/* Solid fill layer for smooth white appearance */}
        <span
          className="
      absolute inset-0
      bg-white scale-x-0 origin-left
      transition-transform duration-650 ease-[cubic-bezier(0.77,0,0.175,1)]
      group-hover:scale-x-100
    "
        />

        {/* Text Layer */}
        <span
          className="
      relative z-10
      transition-colors duration-500 font-bold ease-[cubic-bezier(0.77,0,0.175,1)]
      group-hover:text-black
    "
        >
          Buy Now
        </span>
      </Button>
    </motion.div>
  );
}
