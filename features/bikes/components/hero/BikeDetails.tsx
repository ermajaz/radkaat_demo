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
  backgroundImage?: string; // ✅ NEW
}

export default function BikeDetails({
  model,
  branding,
  icon,
  variants,
  colors,
  backgroundImage = "/icons/bike-bg-img.png",
}: Props) {
  const [activeVariant, setActiveVariant] = useState(0);
  const active = variants[activeVariant];

  const valueAnim = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="absolute py-10 top-[42%] -translate-y-[58%] right-[15px] 
                 flex flex-col gap-y-3 items-center text-center 
                 w-full max-w-sm text-white overflow-hidden"
    >
      {/* ✅ BACKGROUND IMAGE */}
      <div className="absolute bottom-0 inset-0 -z-10">
        <Image
          src="/icons/bike-bg-img.png"
          alt="Bike background"
          fill
          className="object-contain scale-100 object-center pointer-events-none select-none"
        />
      </div>

      {/* ✅ Model Name */}
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

      {/* ✅ Variant Selector */}
      <div className="relative flex items-center justify-center space-x-2 rounded-full bg-[#333337] backdrop-blur-md border border-white/6 px-2 py-1">
        <motion.div
          layout
          layoutId="variant-glow"
          className="absolute top-0 bottom-0 rounded-full bg-white"
          style={{
            left: `${(activeVariant * 100) / variants.length}%`,
            width: `${100 / variants.length}%`,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />

        {variants.map((v, i) => (
          <button
            key={v.name}
            onClick={() => setActiveVariant(i)}
            className={`relative z-10 px-[18px] h-[25px] rounded-full uppercase text-sm font-semibold transition-colors duration-300 ${activeVariant === i ? "text-black" : "text-stone"
              }`}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* ✅ Specs */}
      <motion.div
        key={active.name}
        className="flex space-x-9 uppercase font-medium mt-1"
      >
        {[
          { label: "Front (MM)", value: active.front },
          { label: "Rear (MM)", value: active.rear },
          { label: "Wheel Size", value: active.wheel },
        ].map((spec) => (
          <div key={spec.label} className="flex flex-col items-center">
            <p className="text-[14px]">{spec.label}</p>
            <motion.span
              variants={valueAnim}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-extrabold text-[24px]"
            >
              {spec.value}
            </motion.span>
          </div>
        ))}
      </motion.div>

      {/* ✅ Color Selector */}
      <div className="flex items-center space-x-2 mt-1">
        <p className="uppercase text-sm tracking-wider font-bold">Color:</p>
        <BikeColorSelector colors={colors} />
      </div>

      {/* ✅ Buy Button */}
      <Button
        className="relative overflow-hidden group w-[120px] h-[42px] mt-2
                   border border-[#999999]/80 rounded-none uppercase font-bold
                   text-[15px] tracking-wide text-white cursor-pointer"
      >
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/80 to-white translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
        <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-650 group-hover:scale-x-100" />
        <span className="relative z-10 group-hover:text-black transition-colors duration-500">
          Buy Now
        </span>
      </Button>
      {/* ✅ Divider */}
      {/* ✅ Centered OR Divider */}
      <div className="flex items-center justify-center w-full">
        <div className="w-8 border-t border-white/20" />

        <span className="mx-3 text-[11px] uppercase tracking-wider text-white/40">
          or
        </span>

        <div className="w-8 border-t border-white/20" />
      </div>

      {/* ✅ Advanced Test Ride CTA (NOT a button) */}
      <motion.div
        whileHover={{ opacity: 1 }}
        className="text-[13px] ml-1 font-semibold uppercase tracking-wide
             text-sandstorm cursor-pointer select-none
             flex items-center gap-2"
        onClick={() => window.open("/test-ride", "_blank")}
      >
        <span className="relative">
          Test Ride
          {/* subtle underline glow */}
          <motion.span
            className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-sandstorm/50"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </span>

        {/* minimal arrow shimmer */}
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.25 }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
