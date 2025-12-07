"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike } from "../utils/bicycle-showcase";

export default function BicycleClosedCard({
  bike,
  onClick,
}: {
  bike: Bike;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className="
        relative w-full h-full bg-[#121212]/95
        border-l border-[#2a2a2a]
        flex flex-col items-center justify-center cursor-pointer
      "
    >
      {/* FRONT BIKE IMAGE */}
      <div className="relative w-[100px] h-[140px]">
        <Image
          src="/images/bike-front.png"
          alt={bike.uiName}
          fill
          className="object-contain opacity-90"
        />
      </div>

      {/* LOGO */}
      <div className="w-full flex items-center gap-0.5 justify-center mt-2">
        <Image
          src={bike.logo}
          alt={bike.uiName + ' logo'}
          width={24}
          height={24}
          className="object-contain opacity-95"
        />
        <span className="uppercase text-white font-bold text-[20px] tracking-wide">
        {bike.uiName}
      </span>
      </div>

    </motion.div>
  );
}
