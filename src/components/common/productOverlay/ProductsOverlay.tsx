"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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

  useEffect(() => {
    if (!overlayRef.current) return;
    // slide down animation
    gsap.fromTo(
      overlayRef.current,
      { y: "-100%" },
      { y: 0, duration: 0.6, ease: "power3.out" }
    );

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col bg-superblack text-white"
      aria-modal
    >
      <TopNav onClose={onClose} />

      {/* Full-height flex row */}
      <div className="flex-1 py-8 flex overflow-hidden">
        <Sidebar
          bikes={bikes}
          selected={selectedBike.id}
          onSelect={(bike) => setSelectedBike(bike)}
        />

        {/* BikeDisplay fills remaining space */}
        <main className="flex-1 relative flex border border-white/20">
          <BikeDisplay bike={selectedBike} />
        </main>
      </div>

      <div className="w-full p-5 pt-0">
        <BottomBar bike={selectedBike} />
      </div>
    </div>
  );
}
