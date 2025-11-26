"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AccessoryProduct, AccessoryVariant } from "../../types/accessories.types";

interface Props {
  product: AccessoryProduct;
  activeVariant: AccessoryVariant;
  onVariantChange: (variant: AccessoryVariant) => void;
  onEquip: (qty: number) => void;
  onClose: () => void;
}

export default function VariantBottomSheet({
  product,
  activeVariant,
  onVariantChange,
  onEquip,
  onClose,
}: Props) {
  const activeColor = useMemo(
    () => activeVariant.colors?.[0] ?? "#ffffff",
    [activeVariant]
  );

  const [qty, setQty] = useState(1);
  const [swipeX, setSwipeX] = useState(0);
  const SWIPE_LIMIT = 260;

  const progress = Math.min(swipeX / SWIPE_LIMIT, 1);

  const isOutOfStock = !activeVariant.inStock;

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 bg-superblack/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* SHEET */}
      <motion.div
        key="sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-superblack border-t border-[#2a2a2a] p-6 pb-10 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HANDLE */}
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-white/15" />

        {/* ✅ HEADER ROW */}
        <div className="flex items-start gap-4 mb-7">
          {/* LEFT IMAGE */}
          <div className="relative w-[40%] h-30 rounded-xl overflow-hidden border border-white/15 bg-white/5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex-1">
            <p className="text-[9px] uppercase tracking-[0.35em] text-sandstorm">
              {product.brand}
            </p>

            <h3 className="mt-1 text-base font-semibold leading-tight text-white">
              {product.name}
            </h3>

            <p className="mt-2 text-[12px] text-neutral-400 leading-relaxed">
              Crafted for airflow, fit stability, and high-mobility rides. Built
              to perform under every climb and sprint.
            </p>
          </div>
        </div>

        {/* ✅ SIZE SELECTOR */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500">
            Select Size
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => v.inStock && onVariantChange(v)}
                className={`
                  px-3 py-1.5 rounded-full text-[11px] uppercase font-medium border
                  ${
                    !v.inStock
                      ? "border-[#2a2a2a] text-neutral-600 line-through cursor-not-allowed"
                      : activeVariant.id === v.id
                      ? "bg-sandstorm/20 border-sandstorm text-sandstorm"
                      : "border-white/20 text-neutral-200"
                  }
                `}
                disabled={!v.inStock}
              >
                {v.size}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ COLOR SELECTOR */}
        <div className="mt-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500">
            Select Color
          </p>

          <div className="mt-3 flex gap-3 items-center">
            {activeVariant.colors.map((color) => (
              <button
                key={color}
                onClick={() =>
                  onVariantChange({
                    ...activeVariant,
                    colors: [
                      color,
                      ...activeVariant.colors.filter((c) => c !== color),
                    ],
                  })
                }
                className={`
                  w-8 h-8 rounded-full border transition-transform
                  ${
                    color === activeColor
                      ? "border-sandstorm scale-110"
                      : "border-white/30 opacity-80"
                  }
                `}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* ✅ QUANTITY */}
        <div className="mt-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-3">
            Quantity
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              disabled={qty <= 1 || isOutOfStock}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white text-lg disabled:opacity-30"
            >
              –
            </button>

            <span className="text-white font-semibold text-lg w-6 text-center">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              disabled={isOutOfStock}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white text-lg disabled:opacity-30"
            >
              +
            </button>
          </div>

          {/* ✅ OUT OF STOCK */}
          {isOutOfStock && (
            <p className="mt-3 text-[11px] text-red-400 uppercase tracking-widest">
              Out of Stock
            </p>
          )}
        </div>

        {/* ✅ PRICE */}
        <div className="mt-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Total
          </p>

          <p className="mt-1 text-2xl font-semibold text-sandstorm">
            ₹{(activeVariant.price * qty).toLocaleString()}
          </p>
        </div>

        {/* ✅ APPLE STYLE SWIPE */}
        <div className="relative mt-7 rounded-[999px] h-16 w-full bg-sandstorm/60 overflow-hidden backdrop-blur-xl border border-[#2a2a2a]">
          {/* Dynamic Opacity */}
          <motion.div
            style={{ opacity: 0.6 + progress * 0.4 }}
            className="absolute inset-0 bg-sandstorm"
          />

          {/* Text */}
          <p
            className="absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.25em] text-black font-semibold"
            style={{ opacity: progress < 0.7 ? 1 : 0 }}
          >
            Swipe to Equip →
          </p>

          {/* Puck */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: SWIPE_LIMIT }}
            dragElastic={0.05}
            onDrag={(e, info) => setSwipeX(info.offset.x)}
            onDragEnd={(e, info) => {
              if (info.offset.x > SWIPE_LIMIT * 0.85 && !isOutOfStock) {
                onEquip(qty);
                onClose();
              }
              setSwipeX(0);
            }}
            className="absolute top-2 left-2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black font-bold text-lg"
          >
            →
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
