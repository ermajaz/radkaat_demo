"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import SearchHeader from "./SearchHeader";
import SearchInput from "./SearchInput";
import SearchRecommendations from "./SearchRecommendations";

type Props = {
  onClose: () => void;
};

export default function SearchOverlay({ onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

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
      className="fixed bg-black top-0 left-0 w-full h-full z-50 flex flex-col text-white overflow-hidden"
    >
      {/* Background splash */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/splosh.png"
          alt="Background splash"
          fill
          priority
          className="object-contain object-right h-full w-full"
        />

        {/* Gradient overlay for beauty */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Subtle dark glass for readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header */}
      <SearchHeader onClose={onClose} />

      {/* Input Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <SearchInput />
      </div>

      {/* Recommendations */}
      <SearchRecommendations />
    </div>
  );
}
