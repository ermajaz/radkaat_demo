"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import BottomBar from "./BottomBar";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import BikeDisplay from "./BikeDisplay";
import { OverlayBike } from "@/types";
import { mockBikes } from "@/utils/data";

export default function ProductsOverlay({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [bikes] = useState<OverlayBike[]>(mockBikes);
  const [selectedBike, setSelectedBike] = useState<OverlayBike>(bikes[0]);

  // Animate slide-down overlay
  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.fromTo(
      overlayRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-[999] flex flex-col text-white overflow-hidden"
      aria-modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 🔝 Top Navigation */}
      <TopNav onClose={onClose} />

      {/* ✨ Dynamic Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0b0b] via-[#111] to-[#000]">
        <motion.div
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,180,80,0.1),transparent_70%)] blur-[120px]"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,100,50,0.08),transparent_70%)] blur-[140px]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🏍️ Main Row */}
      <div className="flex-1 flex overflow-hidden border-t border-white/10">
        {/* Sidebar */}
        <Sidebar
          bikes={bikes}
          selected={selectedBike.id}
          onSelect={(bike) => setSelectedBike(bike)}
        />

        {/* Main Bike Display */}
        <main className="flex-1 relative border-l border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBike.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <BikeDisplay bike={selectedBike} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* 🧭 Bottom Bar */}
      <motion.div
        className="relative w-full border-t border-white/10 bg-black/40 backdrop-blur-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <BottomBar bike={selectedBike} />
      </motion.div>
    </motion.div>
  );
}
