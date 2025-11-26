"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { OrderProduct } from "@/features/orders/details/types/order-detail.types";

export default function OrderProductItemMobile({
    product,
}: {
    product: OrderProduct;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ✅ PRODUCT CARD */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 p-4 bg-[#121212]/95 border border-[#2a2a2a] rounded-xl active:scale-[0.98] transition"
                onClick={() => setOpen(true)}
            >
                {/* IMAGE */}
                <div className="relative w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-md overflow-hidden">
                    <Image
                        src={product.image ?? "/images/placeholder-product.png"}
                        alt={product.title}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* DETAILS */}
                <div className="flex-1 space-y-1">
                    {/* TITLE + PRICE */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold line-clamp-1">
                            {product.title}
                        </p>
                        <span className="text-xs font-semibold text-white">
                            ₹{(product.price * product.qty).toLocaleString("en-IN")}
                        </span>
                    </div>

                    {/* SKU */}
                    <p className="text-[10px] text-white/40 uppercase">
                        SKU: {product.sku}
                    </p>

                    {/* VARIANT + COLOR + QTY */}
                    <div className="flex items-center gap-3 mt-1">
                        {/* COLOR DOT */}
                        {product.color && (
                            <span
                                className="w-4 h-4 rounded-full border border-[#2a2a2a]"
                                style={{ backgroundColor: product.color }}
                            />
                        )}

                        {/* VARIANT / SIZE */}
                        {product.variant && (
                            <span className="text-[11px] text-white/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                {product.variant}
                            </span>
                        )}

                        {/* QTY */}
                        <span className="text-[11px] text-white/60">
                            Qty: {product.qty}
                        </span>
                    </div>
                </div>
            </motion.div>


            {/* ✅ BOTTOM SHEET */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* PANEL */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 140, damping: 20 }}
                            className="
                fixed bottom-0 left-0 w-full z-50
                bg-[#121212] rounded-t-2xl
                border-t border-white/10
                max-h-[70vh] overflow-hidden
                flex flex-col
              "
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute right-4 top-4 text-white/60 bg-[#121212]/40 rounded-full p-1 hover:text-white z-50"
                            >
                                <X size={22} />
                            </button>

                            {/* ✅ IMAGE */}
                            <div className="relative w-full h-60 bg-[#0b0b0b] border-b border-white/10 flex items-center justify-center">
                                <Image
                                    src={product.image ?? "/images/placeholder-product.png"}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* ✅ SCROLL AREA */}
                            <div className="flex-1 overflow-y-auto px-6 py-3 space-y-3 relative">
                                {/* TITLE */}
                                <h3 className="text-xl font-semibold">{product.title}</h3>

                                {/* SKU */}
                                <p className="text-white/60 text-sm">SKU: {product.sku}</p>

                                {/* VARIANT + COLOR */}
                                {(product.variant || product.color) && (
                                    <div className="flex items-center gap-3 mt-3">
                                        {product.color && (
                                            <span
                                                className="w-5 h-5 rounded-full border border-white/30"
                                                style={{ backgroundColor: product.color }}
                                            />
                                        )}

                                        {product.variant && (
                                            <span className="text-sm text-white/80 bg-white/10 px-3 py-1 border border-white/10 rounded-md">
                                                {product.variant}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* DESCRIPTION (same as desktop mock) */}
                                <div className="text-white/60 text-sm leading-relaxed space-y-3 pt-2">
                                    <p>
                                        The <span className="text-white font-medium">{product.title}</span> is engineered for premium performance and durability.
                                    </p>
                                    <p>
                                        Designed with precision stitching, ergonomic shaping, and high-grade materials for long-ride comfort.
                                    </p>
                                </div>

                                {/* PRICE + QTY */}
                                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                                    <span className="text-sm text-white/60">Quantity: {product.qty}</span>
                                    <span className="text-lg font-semibold text-white">
                                        ₹{(product.price * product.qty).toLocaleString("en-IN")}
                                    </span>
                                </div>

                                {/* ✅ Fade edges */}
                                <div className="absolute top-0 left-0 right-0 h-6 bg-linear-to-b from-[#121212] to-transparent pointer-events-none" />
                                <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#121212] to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
