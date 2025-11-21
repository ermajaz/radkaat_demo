// components/bike-showcase/Fullscreen360Modal.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useStopScroll } from "@/hooks/useStopScroll";

export default function Fullscreen360Modal({ bike, onClose }: { bike: any; onClose: () => void; }) {
  useStopScroll(true);

  return (
    <motion.div
      className="fixed inset-0 z-1000 bg-black/95 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/90 cursor-pointer bg-white/6 px-3 py-2 rounded"
      >
        <X />
      </motion.button>

      {/* Centered fullscreen image */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        className="w-full max-w-[1200px] h-[80vh] relative"
      >
        {/* If you have a real 360 viewer, mount it here; fallback to image */}
        <Image
          src={bike.image}
          alt={`${bike.uiName} 360`}
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
