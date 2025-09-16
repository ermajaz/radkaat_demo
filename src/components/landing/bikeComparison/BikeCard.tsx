"use client";
import Image from "next/image";
import clsx from "clsx";
import { Bikee } from "@/types";

interface Props {
  bike: Bikee;
  isActive: boolean;
}

export default function BikeCard({ bike, isActive }: Props) {
  const bikeBgColors: Record<string, string> = {
    SEROW: "bg-sandstorm",
    SAOLA: "bg-rust",
    TAKIN: "bg-army",
  };

  const activeBg = bikeBgColors[bike.name] || "bg-transparent";

  return (
    <div
      className={clsx(
        "flex flex-col px-5 gap-6 items-center justify-center w-full h-full",
        isActive ? `${activeBg} ` : "bg-transparent"
      )}
    >
      {/* Bike Image */}
      <div className="relative w-full h-[40%]">
        <Image
          src={bike.img}
          alt={bike.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Bike Logo & Name */}
      <div className="flex items-center gap-3 mt-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={bike.logo}
            alt={`${bike.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-4xl font-bold">{bike.name}</h2>
      </div>
    </div>
  );
}
