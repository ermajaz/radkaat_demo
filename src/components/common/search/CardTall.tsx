"use client";

import { Recommendation } from "@/types";
import Image from "next/image";

export default function CardTall({ rec }: { rec: Recommendation }) {
  return (
    <div className="relative row-span-2 rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      
      {/* Image */}
      <Image
        src={rec.image}
        alt={rec.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Content */}
      <div className="absolute bottom-4 left-4 flex flex-col space-y-1 text-white">
        {/* Title */}
        <h4 className="text-sm font-bold line-clamp-2 transition-colors duration-300 group-hover:text-pink-400">
          {rec.title}
        </h4>

        {/* Category Badge */}
        {rec.category && (
          <span className="text-[10px] font-semibold bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 rounded-full drop-shadow">
            {rec.category}
          </span>
        )}

        {/* Optional Price */}
        {rec.price && (
          <span className="text-sm font-extrabold mt-1 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow">
            {rec.price}
          </span>
        )}
      </div>
    </div>
  );
}
