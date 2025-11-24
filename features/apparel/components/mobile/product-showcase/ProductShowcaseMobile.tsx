"use client";

import { ApparelProduct } from "@/features/apparel/types/apparel.types";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  product: ApparelProduct;
  onCustomize: () => void;
}

export default function ProductShowcaseMobile({ product, onCustomize }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-screen bg-black text-white flex flex-col justify-between"
    >
      {/* IMAGE */}
      <div className="relative h-[65vh]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Fade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* DETAILS */}
      <div className="px-6 pb-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-sandstorm">
          {product.brand}
        </p>

        <h2 className="mt-3 text-3xl font-light leading-tight">
          {product.name}
        </h2>

        <p className="mt-2 text-neutral-300 text-sm">
          {product.tagline}
        </p>

        <p className="mt-4 text-2xl font-semibold text-sandstorm">
          ₹{product.variants[0].price.toLocaleString()}
        </p>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onCustomize}
          className="mt-6 w-full py-3 bg-white text-black rounded-full font-semibold text-xs tracking-[0.25em]"
        >
          Customize Fit
        </motion.button>
      </div>
    </motion.section>
  );
}
