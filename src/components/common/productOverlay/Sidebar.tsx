"use client";
import Image from "next/image";
import { OverlayBike } from "@/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  bikes: OverlayBike[];
  selected: string;
  onSelect: (bike: OverlayBike) => void;
};

export default function Sidebar({ bikes, selected, onSelect }: Props) {
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!underlineRef.current) return;

    // Animate underline width smoothly
    gsap.to(underlineRef.current, {
      width: "100%",
      duration: 0.8,
      ease: "power3.out",
    });
  }, [selected]);

  return (
    <div className="w-80 bg-superblack text-white flex flex-col items-start justify-center gap-16 px-8 h-screen relative">
      {bikes.map((bike) => (
        <button
          key={bike.id}
          onClick={() => onSelect(bike)}
          className={`flex items-center gap-4 text-2xl cursor-pointer font-bold transition-all relative uppercase
            ${
              selected === bike.id
                ? "text-yellow-400"
                : "text-gray hover:text-white"
            }
          `}
        >
          {/* Logo */}
          <div className="w-16 h-16 relative flex-shrink-0">
            <Image
              src={bike.logo}
              alt={bike.name}
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl !tracking-[5px]">
            {bike.name.split("-")[0]}
          </h1>

          {/* Underline for selected */}
          {selected === bike.id && (
            <div
              ref={underlineRef}
              className="absolute -bottom-2 left-0 h-[3px] bg-yellow-400 rounded w-0"
            />
          )}
        </button>
      ))}

      {/* View All */}
      <button
        className={`text-lg font-bold ml-5 cursor-pointer relative transition-all
          ${
            selected === "all"
              ? "text-yellow-400"
              : "text-gray hover:text-white"
          }
        `}
        onClick={() => onSelect({ id: "all", name: "All", logo: "" } as OverlayBike)}
      >
        View All
        <div
          ref={selected === "all" ? underlineRef : null}
          className="absolute bottom-0 left-0 w-0 h-[2px] bg-white rounded"
        />
      </button>
    </div>
  );
}
