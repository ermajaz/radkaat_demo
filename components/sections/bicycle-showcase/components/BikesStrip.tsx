"use client";

import { Star } from "lucide-react";
import { Bike } from "../utils/bicycle-showcase";


export default function BikesStrip({ bike }: { bike: Bike }) {
  return (
    <div
      className={`w-full h-7 flex items-center justify-center z-40`}
      style={{
        backgroundImage:
          bike.uiName.toLowerCase() === "serow"
            ? "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
            : bike.uiName.toLowerCase() === "saola"
            ? "linear-gradient(90deg, var(--color-airforce), var(--color-petrol))"
            : bike.uiName.toLowerCase() === "takin"
            ? "linear-gradient(90deg, #75911c, var(--color-army))"
            : "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
      }}
    >
      <div className="flex items-center gap-2">
        <Star className="text-superblack w-4 h-4 fill-superblack" strokeWidth={0}/>
        <span className="font-bold text-[13px] uppercase tracking-[1.5px] mt-px text-superblack">
          Introducing Goat Series
        </span>
        <Star className="text-superblack w-4 h-4 fill-superblack" strokeWidth={0}/>
      </div>
    </div>
  );
}
