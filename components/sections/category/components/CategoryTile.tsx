"use client";

import Image from "next/image";

export default function CategoryTile({ product }: { product: any }) {
  return (
    <div key={product.id} className="relative group cursor-pointer">
              {/* Card */}
              <div className="relative overflow-hidden shadow-2xl h-112 w-full">
                {/* Background Image */}
                <Image
                  quality={100}
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out"
                />

                {/* Blackish Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

                {/* Title Centered */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="relative text-[42px] font-bold uppercase text-white drop-shadow-lg translate-y-10">
                    {product.title}
                    <span className="absolute left-1/2 -bottom-1 h-[3px] w-0 bg-[#b7410e] transition-all duration-500 group-hover:w-full -translate-x-1/2"></span>
                  </h3>
                </div>
              </div>
            </div>
  );
}
