"use client";

import { Recommendation } from "@/types";
import { Heart } from "lucide-react";

export default function CardMinimal({ rec }: { rec: Recommendation }) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-xl border border-white/20 p-4 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      
      {/* Title & Discount */}
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-semibold text-sm text-white line-clamp-1">
          {rec.title}
        </h4>
        {rec.discount && (
          <span className="text-[10px] font-bold text-red-400 bg-red-900/30 px-2 py-0.5 rounded-full uppercase">
            {rec.discount}
          </span>
        )}
      </div>

      {/* Subtitle */}
      <p className="text-[11px] text-gray-300 line-clamp-2">{rec.subtitle}</p>

      {/* Price & Save */}
      <div className="flex items-center justify-between mt-3">
        <span className="font-extrabold text-lg bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow">
          {rec.price}
        </span>

        <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 group-hover:scale-105">
          <Heart size={14} className="text-pink-400" /> Save
        </button>
      </div>
    </div>
  );
}
