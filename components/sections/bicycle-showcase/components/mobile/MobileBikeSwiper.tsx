"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RotateCw } from "lucide-react";
import type { Bike } from "../../utils/bicycle-showcase";

type Props = {
  bikes: Bike[];
  activeBikeId: string;
  onChange: (id: string) => void;
  onOpen360: () => void;
};

export default function MobileBikeSwiper({
  bikes,
  activeBikeId,
  onChange,
  onOpen360,
}: Props) {
  const activeIndex = bikes.findIndex((b) => b.id === activeBikeId);
  const bike = bikes[activeIndex];

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 70;
    if (info.offset.x < -threshold && activeIndex < bikes.length - 1) {
      onChange(bikes[activeIndex + 1].id);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      onChange(bikes[activeIndex - 1].id);
    }
  };

  const [from, to] = bike?.colors?.gradient.split(",").map((c) => c.trim());

  return (
    <div className="mt-3 px-0">
      {/* FULL WIDTH ADVANCED TABS */}
      <div className="grid grid-cols-3 gap-2 px-4">
        {bikes.map((b) => {
          const active = b.id === activeBikeId;
          return (
            <motion.button
              key={b.id}
              onClick={() => onChange(b.id)}
              className="relative flex items-center justify-center p-2 gap-2 rounded-lg"
              whileTap={{ scale: 0.96 }}
              layout
              data-id={b.id}
            >
              {/* 🔥 sliding highlight */}
              {active && (
                <motion.div
                  layoutId="bikeActiveHighlight"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="absolute inset-0 rounded-lg bg-sandstorm/20 border border-sandstorm/70"
                />
              )}

              {/* icon */}
              <Image
                src={b.logo}
                alt={b.uiName}
                width={22}
                height={22}
                className={`relative z-10 transition ${active ? "opacity-100" : "opacity-40"
                  }`}
              />

              {/* label */}
              <span
                className={`relative z-10 text-[10px] font-semibold uppercase tracking-wide
        ${active ? "text-white" : "text-white/40"}`}
              >
                {b.uiName}
              </span>
            </motion.button>
          );
        })}

      </div>

      {/* DESCRIPTION BELOW TABS */}
      <div className="mt-3 px-4">
        <p className="text-xs text-white/70 mt-1 line-clamp-2">
          {bike.description}
        </p>
      </div>

      {/* IMAGE DRAG SWIPER */}
      <motion.div
        key={bike.id}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-5 border border-white/10 bg-[#0c0c0c]/90 overflow-hidden relative"
      >
        {/* GRADIENT BACKGROUND WORD */}
        <div className="absolute bottom-[50%] left-10 right-0 flex items-center justify-center pointer-events-none">
          <p
            className="text-[80px] font-extrabold tracking-[20px] select-none
                   bg-clip-text text-transparent opacity-[0.5]"
             style={{
          backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
        }}
        aria-hidden
          >
            {bike.bgWord}
          </p>
        </div>

        {/* BIKE IMAGE + 360 BUTTON */}
        <div className="relative z-10 pt-5 px-4 pb-5 flex flex-col items-center">
          <div className="relative w-full h-[230px]">
            <Image
              src={bike.image}
              alt={bike.uiName}
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="mt-4 w-full flex justify-end">
            <motion.button
              onClick={onOpen360}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center w-16 h-16
                rounded-full bg-white/5 backdrop-blur-md
                border border-white/20 shadow-[0_0_22px_rgba(255,255,255,0.08)]
                text-[10px] uppercase tracking-[0.12em]"
            >
              <RotateCw size={18} className="mb-0.5" />
              360°
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
