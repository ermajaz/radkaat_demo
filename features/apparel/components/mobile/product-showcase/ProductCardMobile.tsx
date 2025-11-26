"use client";

import { ApparelProduct } from "@/features/apparel/types/apparel.types";
import { motion } from "framer-motion";
import Image from "next/image";
import { calculateDiscount } from "./utils/price";

interface Props {
    product: ApparelProduct;
    index: number;
    onOpenSheet: (product: ApparelProduct) => void;
}

export default function ProductCardMobile({ product, index, onOpenSheet }: Props) {
    const variant = product.variants.find((v) => v.inStock) || product.variants[0];
    const mrp = variant.price * 1.5;
    const { discountPercent } = calculateDiscount(mrp, variant.price);

    return (
        <article className="snap-start h-[220px] bg-white/5 border border-[#2a2a2a] rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_14px_50px_rgba(0,0,0,0.55)] mx-4 mb-5 flex">

            {/* ✅ LEFT IMAGE COLUMN */}
            <div className="relative w-[42%] h-full rounded-l-2xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                />

                {/* Dark fade */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/10" />

                {/* ✅ DISCOUNT BADGE */}
                {discountPercent > 0 && (
                    <div className="absolute top-2 left-2 bg-sandstorm text-black text-[9px] font-bold px-2 py-1 rounded-full shadow-md">
                        {discountPercent}% OFF
                    </div>
                )}
            </div>

            {/* ✅ RIGHT DETAILS COLUMN */}
            <div className="flex-1 px-4 py-3 flex flex-col justify-between">

                <div>
                    {/* BRAND */}
                    <p className="text-[9px] uppercase tracking-[0.32em] text-sandstorm">
                        {product.brand}
                    </p>

                    {/* NAME */}
                    <h3 className="mt-1 text-[16px] font-light leading-tight line-clamp-1">
                        {product.name}
                    </h3>

                    {/* ✅ PRICE ROW */}
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-base font-semibold text-sandstorm">
                            ₹{variant.price.toLocaleString()}
                        </span>

                        {discountPercent > 0 && (
                            <span className="text-[10px] line-through text-neutral-500">
                                ₹{mrp.toLocaleString()}
                            </span>
                        )}
                    </div>

                    {/* ✅ FEATURE BADGES */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[9px] px-2 py-1 rounded-full bg-white/10 border border-[#2a2a2a] uppercase tracking-wide text-neutral-300">
                            Aero Fit
                        </span>
                        <span className="text-[9px] px-2 py-1 rounded-full bg-white/10 border border-[#2a2a2a] uppercase tracking-wide text-neutral-300">
                            All-Weather
                        </span>
                        <span className="text-[9px] px-2 py-1 rounded-full bg-white/10 border border-[#2a2a2a] uppercase tracking-wide text-neutral-300">
                            Breathable
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mt-2" />

                {/* ✅ WATER-DROP SANDSTORM BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => onOpenSheet(product)}
                    className="
    relative w-full py-2.5 rounded-full
    bg-transparent
    flex items-center justify-center
    overflow-hidden
  "
                >
                    {/* ✅ Outer Liquid Sandstorm Ring */}
                    <div className="
    absolute inset-0 rounded-full
    border border-sandstorm/80
    shadow-[0_0_18px_rgba(255,209,92,0.45)]
  " />

                    {/* ✅ Inner Glass Droplet Core */}
                    <div className="
    absolute inset-[3px] rounded-full
    bg-sandstorm/15 
    backdrop-blur-xl
    shadow-[inset_0_0_25px_rgba(255,209,92,0.25)]
  " />

                    {/* ✅ Inner Opacity Gradient (Water Depth) */}
                    <div className="
    absolute inset-1.5 rounded-full
    bg-linear-to-b from-sandstorm/25 via-sandstorm/5 to-transparent
    blur-md opacity-60
  " />

                    {/* ✅ Subtle Liquid Highlight */}
                    <div className="
    absolute top-0 left-0 right-0 h-1/2
    rounded-t-full
    bg-white/30 blur-lg opacity-35
  " />

                    {/* ✅ Label */}
                    <span className="relative z-10 text-[10px] font-semibold tracking-[0.25em] text-sandstorm">
                        Customize
                    </span>
                </motion.button>

            </div>
        </article>
    );
}
