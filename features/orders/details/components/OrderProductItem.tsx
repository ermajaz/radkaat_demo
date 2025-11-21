"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { OrderProduct } from "../types/order-detail.types";

export default function OrderProductItem({
  product,
}: {
  product: OrderProduct;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🛒 Product Item Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-white/10 bg-white/4 backdrop-blur-lg p-5 flex gap-5 hover:bg-white/[0.07] transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* 🖼️ Image */}
        <div className="relative w-[100px] h-[90px] overflow-hidden shrink-0 bg-[#101010] border border-white/10 flex items-center justify-center">
          <Image
            src={product.image ?? "/images/placeholder-product.png"}
            alt={product.title}
            width={100}
            height={90}
            className="object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 🧾 Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold leading-snug">
                {product.title}
              </h3>

              {/* 🏷️ Variant Badge */}
              {product.variant && (
                <span className="flex items-center gap-2 bg-white/10 border border-white/10 text-xs px-3 py-1.5 text-white/70 font-medium">
                  {/* 🎨 Color Dot */}
                  {product.color && (
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: product.color }}
                    />
                  )}
                  {product.variant}
                </span>
              )}
            </div>

            <p className="text-xs text-white/50 mt-1">SKU: {product.sku}</p>
          </div>

          <div className="mt-3 flex items-end justify-between">
            <span className="text-sm text-white/60">Qty: {product.qty}</span>
            <span className="text-lg font-semibold">
              ₹{(product.price * product.qty).toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </motion.div>

      {/* 🪟 Modal — Product Quick View */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} // click outside = close
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // prevent inside clicks from closing
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-[#111] border border-white/10 max-w-lg w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition"
              >
                <X size={22} />
              </button>

              {/* 🖼️ Product Image */}
              <div className="relative w-full h-[260px] bg-[#0b0b0b] flex items-center justify-center border-b border-white/10">
                <Image
                  src={product.image ?? "/images/placeholder-product.png"}
                  alt={product.title}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* 🧾 Scrollable Product Info */}
              <div className="relative flex-1 overflow-y-auto max-h-[65vh] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-white/60 text-sm">SKU: {product.sku}</p>

                  {/* 🏷️ Variant & Color */}
                  <div className="flex items-center gap-3 mt-2">
                    {product.color && (
                      <div
                        className="w-5 h-5 rounded-full border border-white/30"
                        style={{ backgroundColor: product.color }}
                      />
                    )}
                    {product.variant && (
                      <span className="text-sm text-white/80 bg-white/10 px-3 py-1 border border-white/10">
                        {product.variant}
                      </span>
                    )}
                  </div>

                  {/* 🔍 Extra Info (mock long content for scrolling) */}
                  <div className="text-white/60 text-sm leading-relaxed space-y-3 pt-2">
                    <p>
                      The <span className="text-white">Radkaat X1 Jacket</span>{" "}
                      is engineered for extreme performance with high-grade
                      armor padding, abrasion-resistant shell, and all-weather
                      adaptability.
                    </p>
                    <p>
                      Featuring precision stitching and ergonomic design, this
                      jacket ensures maximum comfort during long rides while
                      maintaining premium style aesthetics.
                    </p>
                    <p>
                      Available in multiple color finishes and customizable
                      protection levels to match your riding style.
                    </p>
                  </div>

                  {/* 💰 Pricing Section */}
                  <div className="flex justify-between items-center pt-5 border-t border-white/10 mt-3">
                    <p className="text-sm text-white/60">
                      Quantity: {product.qty}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      ₹{(product.price * product.qty).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* ✨ Gradient Fades (Top/Bottom) */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-[#111] to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#111] to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
