"use client";

import { Recommendation } from "@/types";
import Image from "next/image";
import { Star } from "lucide-react";

export default function CardWide({ rec }: { rec: Recommendation }) {
  return (
    <div className="relative col-span-2 rounded-2xl overflow-hidden group flex transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {/* Image */}
      <Image
        src={rec.image}
        alt={rec.title}
        width={300}
        height={160}
        className="object-cover w-1/2 h-full transition-transform duration-500 group-hover:scale-110"
      />

      {/* Content */}
      <div className="flex flex-col justify-between p-4 bg-gradient-to-r from-black/80 to-black/40 w-1/2 text-white backdrop-blur-md">
        <div>
          <h4 className="text-base font-bold line-clamp-1">{rec.title}</h4>
          <p className="text-xs text-gray-300 line-clamp-2">{rec.subtitle}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Price */}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow">
            {rec.price}
          </span>

          {/* Rating */}
          {rec.rating !== undefined && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.round(rec.rating ?? 0)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
              <span className="ml-1 text-xs text-gray-300">
                {(rec.rating ?? 0).toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
