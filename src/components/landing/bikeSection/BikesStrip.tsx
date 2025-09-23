"use client";

import { Star } from "lucide-react";

interface Bike {
  logo: string;
  name: string;
  image: string;
  features: { label: string; value: string }[];
  specs: Record<string, string>;
  colors: {
    gradient: string; // e.g. "from-red-500 via-yellow-500 to-green-500"
    cta: string; // e.g. "#c6b783"
  };
}

export default function BikesStrip({ bike }: { bike: Bike }) {
  return (
    <div
      className={`w-full h-[30px] flex items-center justify-center z-40`}
      style={{
        backgroundImage:
          bike.name.toLowerCase() === "serow"
            ? "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
            : bike.name.toLowerCase() === "saola"
            ? "linear-gradient(90deg, var(--color-airforce), var(--color-petrol))"
            : bike.name.toLowerCase() === "takin"
            ? "linear-gradient(90deg, #75911c, var(--color-army))"
            : "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
      }}
    >
      <div className="flex items-center gap-2">
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
        <span className="font-bold text-[14px] uppercase tracking-[1.5px] text-black">
          Introducing Goat Features
        </span>
        <Star className="text-black w-4.5 h-4.5 fill-black/80" />
      </div>
    </div>
  );
}
