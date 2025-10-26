"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

type Props = { onClose: () => void };

export default function SearchOverlay({ onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

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
      document.body.style.overflow = originalOverflow; // ✅ No return value now
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col bg-superblack backdrop-blur-2xl text-white overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Image
            src="/images/website-logo.png"
            alt="Radkaat"
            width={48}
            height={48}
            className="rounded-md"
          />
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full cursor-pointer transition"
        >
          <X size={40} />
        </button>
      </div>

      {/* Search Input */}
      <div className="flex justify-center my-[10%] px-6">
        <SearchInput />
      </div>

      {/* Suggestions */}
      <SearchSuggestions />
    </div>
  );
}
