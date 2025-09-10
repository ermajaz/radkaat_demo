"use client";
import Image from "next/image";
import clsx from "clsx";
import { Bike } from "@/types";

interface Props {
  bike: Bike;
  isActive: boolean;
  onHover: () => void;
}

export default function BikeCard({ bike, isActive, onHover }: Props) {
  return (
    <div
      onMouseEnter={onHover}
      className={clsx(
        "flex flex-col px-5 items-center justify-center cursor-pointer transition-all duration-300 w-full h-full",
        isActive ? "bg-sandstorm/50 shadow-lg" : "bg-transparent"
      )}
    >
      {/* Bike Image */}
      <div className="relative w-full h-[65%]">
        <Image
          src={bike.img}
          alt={bike.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
        />
      </div>

      {/* Bike Logo */}
      <div className="flex items-center gap-2 mt-4">
        {/* Logo */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={bike.logo}
            alt={`${bike.name} logo`}
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
        {/* Name */}
        <p className="text-lg font-bold">{bike.name}</p>
      </div>
    </div>
  );
}
