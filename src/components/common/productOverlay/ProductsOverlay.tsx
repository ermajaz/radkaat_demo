"use client";

import { X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { overlayBikes } from "@/utils/data";
import Sidebar from "./Sidebar";
import BikeDisplay from "./BikeDisplay";
import RelatedSkus from "./RelatedSkus";

type Props = {
  onClose: () => void;
};

export default function ProductsOverlay({ onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedBike, setSelectedBike] = useState(overlayBikes[0]);

  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "-100%" },
      { y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Disable background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-superblack z-50 flex overflow-hidden"
    >
      {/* Close button */}
      <button
        className="absolute top-6 left-6 z-[60] text-white cursor-pointer transition"
        onClick={onClose}
      >
        <X size={52} />
      </button>

      {/* Sidebar */}
      <Sidebar
        bikes={overlayBikes}
        selected={selectedBike.id}
        onSelect={setSelectedBike}
      />

      {/* Main Display */}
      <div className="w-full flex-1 p-20 flex flex-col items-center justify-center relative z-50">
        <BikeDisplay bike={selectedBike} />
        <RelatedSkus skus={selectedBike.skus} />
      </div>
    </div>
  );
}
