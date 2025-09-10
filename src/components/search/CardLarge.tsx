"use client";

import { Recommendation } from "@/types";
import Image from "next/image";
import { Star } from "lucide-react";

export default function CardLarge({ rec }: { rec: Recommendation }) {
  return (
    <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      {/* Image */}
      <Image
        src={rec.image}
        alt={rec.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-4 left-4 space-y-2 text-white">
        {/* Price */}
        {rec.price && (
          <span className="mt-1 block text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow">
            {rec.price}
          </span>
        )}
        <h4 className="text-3xl font-bold line-clamp-1 transition-all duration-300 group-hover:text-pink-400">
          {rec.title}
        </h4>
        <p className="text-sm text-gray-200 line-clamp-2">{rec.subtitle}</p>

        <div className="flex items-center gap-2 mt-1">
          {/* Badge */}
          {rec.badge && (
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 px-3 py-1 rounded-full text-[10px] font-semibold drop-shadow">
              {rec.badge}
            </span>
          )}

          {/* Rating */}
          {rec.rating !== undefined && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < Math.round(rec.rating ?? 0)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
              <span className="text-[10px] text-gray-300">
                {(rec.rating ?? 0).toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
