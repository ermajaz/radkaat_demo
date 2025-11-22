"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { apparelProducts } from "../utils/apparel-data";
import type { ApparelProduct, ApparelVariant } from "../types/apparel.types";
import ApparelDetailsModal from "./ApparelDetailsModal";
import { apparelDetailsData } from "../utils/apparel-details";

interface Props {
  product: ApparelProduct;
  onOpen: () => void;
}

export function ProductCard({ product, onOpen }: Props) {
  const [activeVariant, setActiveVariant] = useState<ApparelVariant | null>(product?.variants[0] || null);

  const handleEquip = () => {
    if (!activeVariant) {
      alert(`Select a size & color first for ${product.name}`);
      return;
    }

    alert(
      `✅ Selected:\nProduct: ${product.name}\nSize: ${activeVariant.size}\nColor: ${activeVariant.colors[0]}`
    );
  };

  return (
    <motion.article
      whileHover={{ y: -12, scale: 1.03, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="group bg-white/3 border border-white/8 overflow-hidden backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.65)] cursor-pointer relative"
    >
      {/* Image Area */}
      <div className="relative h-64 overflow-hidden" onClick={onOpen}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />

        {/* Shine Sweep */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            {product.brand}
          </span>
        </div>

        <p className="text-sm text-neutral-300">{product.tagline}</p>

        {/* ✅ Variant Selector */}
        <div className="flex gap-8 mt-2">

          <div className="flex flex-col gap-4">
            {/* Step Label */}
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500">
              Select Size
            </p>

            {/* Sizes */}
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v)}
                  className={`
          px-3 py-1.5 rounded-full text-[11px] cursor-pointer uppercase font-medium transition-all
          border backdrop-blur-md
          ${!v.inStock
                      ? "border-white/10 text-neutral-600 line-through cursor-not-allowed"
                      : activeVariant?.id === v.id
                        ? "bg-sandstorm/20 border-sandstorm text-sandstorm shadow-[0_0_12px_rgba(255,210,150,0.3)]"
                        : "border-white/20 text-neutral-200 hover:border-sandstorm/60"
                    }
        `}
                  disabled={!v.inStock}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          {activeVariant && (
            <div className="flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500">
                Select Color
              </p>
              <div className="flex gap-3">
                {activeVariant.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setActiveVariant({
                        ...activeVariant,
                        colors: [color, ...activeVariant.colors],
                      })
                    }
                    className={`
              w-6 h-6 rounded-full cursor-pointer border transition-all
              ${color === activeVariant.colors[0]
                        ? "border-sandstorm shadow-[0_0_10px_rgba(255,210,150,0.5)] scale-110"
                        : "border-white/30 opacity-80 hover:opacity-100"
                      }
            `}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {activeVariant && (
          <p className="text-xl font-semibold text-sandstorm tracking-wide">
            ₹{activeVariant.price.toLocaleString()}
          </p>
        )}


        {/* ✅ CTA Button */}
        <motion.button
          onClick={handleEquip}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="mt-2 w-full py-3 bg-linear-to-r cursor-pointer from-sandstorm/80 to-sandstorm text-black text-xs uppercase tracking-[0.25em] font-semibold shadow-[0_8px_26px_rgba(255,210,150,0.35)] transition-all flex items-center justify-center gap-2"
        >
          Equip This Fit
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="text-[10px]"
          >
            →
          </motion.span>
        </motion.button>

      </div>
    </motion.article>
  );
}

export default function ApparelCategoryGrid() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#050505] text-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sandstorm">
              Collections
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-light">
              From city rides to race days.
            </h2>
          </div>

          <p className="hidden md:block text-sm text-neutral-400 max-w-sm text-right">
            Explore Radkaat’s engineered apparel families — built to match your pace.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {apparelProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={() => {
                setActiveId(p.id);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* ✅ MODAL RENDERED ONCE */}
      <ApparelDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        data={activeId ? apparelDetailsData[activeId] : null}
      />
    </section>
  );
}
