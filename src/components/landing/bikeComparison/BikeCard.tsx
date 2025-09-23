"use client";
import Image from "next/image";
import clsx from "clsx";
import { Bikee } from "@/types";

interface Props {
  bike: Bikee & { logoBlack?: string }; // logoBlack optional: supply a ready-made black logo for best results
  isActive: boolean;
}

export default function BikeCard({ bike, isActive }: Props) {
  const bikeBgColors: Record<string, string> = {
    SEROW: "bg-sandstorm",
    SAOLA: "bg-petrol",
    TAKIN: "bg-army",
  };

  const activeBg = bikeBgColors[bike.name] || "bg-transparent";

  // Prefer a pre-made black logo if available. If not, we'll apply CSS filter to force black.
  const logoSrc = isActive && bike.logoBlack ? bike.logoBlack : bike.logo;

  return (
    <div
      className={clsx(
        "flex flex-col px-5 gap-6 items-center justify-center w-full h-full",
        isActive ? activeBg : "bg-transparent"
      )}
    >
      {/* Bike Image */}
      <div className="relative w-[180px] h-[250px]">
        <Image src={bike.img} alt={bike.name} fill className="object-contain" />
      </div>

      {/* Bike Logo & Name */}
      <div className="absolute left-1/2 bottom-[15%] -translate-x-1/2 -ml-2 flex items-center gap-3">
        <div className="relative w-[48px] h-[68px] flex-shrink-0">
          <Image
            src={logoSrc}
            alt={`${bike.name} logo`}
            fill
            // Important: include `filter` so brightness/invert utilities actually work.
            // If we are using the fallback filter (no `logoBlack`), then apply `filter brightness-0`.
            className={clsx(
              "object-contain",
              
            )}
          />
        </div>

        <h2
          className={clsx(
            "text-[42px] font-bold transition-all duration-300",
            // selected card name should be black; otherwise keep default (adjust as needed)
            isActive ? "text-black" : "text-white"
          )}
        >
          {bike.name}
        </h2>
      </div>
    </div>
  );
}
