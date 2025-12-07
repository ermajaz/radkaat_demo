"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ViewProductButton from "../ViewProductButton";

export default function BikeImage({ image }: { image: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      {/* BIKE ANIMATION */}
      <motion.div
        key={image}
        initial={{ opacity: 0, scale: 0.6, x: -120, y: 120 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-full max-w-[900px] max-h-[600px]"
      >
        <Image
          src={image}
          alt="Bike"
          fill
          className="object-contain"
          quality={100}
        />
      </motion.div>

      {/* BUTTON ANIMATION — FIXED OVERLAY */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}      // fully below
        animate={{ opacity: 1, y: 0 }}       // move to final spot
        transition={{
          duration: 0.65,
          delay: 0.35,                       // starts after bike animation begins
          ease: "easeOut",
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        <ViewProductButton link={`/bikes/serow/model-1`} />
      </motion.div>

    </div>
  );
}
