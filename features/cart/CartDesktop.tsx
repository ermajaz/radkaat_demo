"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CartList, CartProduct, CartSummary } from "./components/common";

export default function CartDesktop({initial}: {initial: CartProduct[]}) {
    const [products, setProducts] = useState<CartProduct[]>(initial);
    const router = useRouter();

    const handleQtyChange = (id: string, qty: number) => {
        setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
    };

    const handleRemove = (id: string) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    const subtotal = useMemo(
        () => products.reduce((s, p) => s + p.price * p.qty, 0),
        [products]
    );

    const itemCount = useMemo(
        () => products.reduce((s, p) => s + p.qty, 0),
        [products]
    );

    const handleCheckout = () => {
        // ✅ Go to address step
        router.push("/cart/address");
    };

    const handleVariantChange = (
        id: string,
        variant: { model?: string; color?: string }
    ) => {
        setProducts(prev =>
            prev.map(p => {
                if (p.id !== id) return p;

                return {
                    ...p,
                    selectedModel: variant.model ?? p.selectedModel,
                    selectedColor: variant.color ?? p.selectedColor,
                };
            })
        );
    };

    return (
        <main className="h-full text-white">
            <div className="w-full mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0.5">
                    {/* 🛒 Left Section - Cart Items */}
                    <section className="flex-1 bg-transparent">
                        <div className="border border-[#2b2b2b]">
                            {/* 🚚 Stylish Free Shipping Banner */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="
                  relative overflow-hidden
                  text-center text-[13px] uppercase tracking-[0.15em]
                  font-medium text-sandstorm py-4 mb-8
                  bg-[#0f0f0f] border border-sandstorm/40
                  before:absolute before:inset-0 before:bg-linear-to-r before:from-sandstorm/10 before:via-transparent before:to-sandstorm/10
                  shadow-[0_0_25px_rgba(139,169,137,0.15)]
                "
                            >
                                <span className="relative z-10">
                                    Free Ground Shipping for Orders Over{" "}
                                    <span className="text-white">₹10,000</span>
                                </span>

                                {/* Animated Shimmer Overlay */}
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "linear",
                                        repeatDelay: 4,
                                    }}
                                    className="absolute inset-y-0 w-[60%] bg-linear-to-r from-transparent via-army/10 to-transparent blur-xl"
                                />
                            </motion.div>

                            {/* Cart List */}
                            <div className="p-6 pt-0">
                                <CartList
                                    products={products}
                                    onQtyChange={handleQtyChange}
                                    onRemove={handleRemove}
                                    onVariantChange={handleVariantChange}
                                />

                            </div>

                            {/* Subtotal (Mobile Only) */}
                            <div className="mt-8 md:hidden text-right">
                                <div className="text-sm text-gray-300 uppercase tracking-wider">
                                    Subtotal
                                </div>
                                <div className="text-2xl font-bold">
                                    ₹{subtotal.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 💳 Right Section - Summary */}
                    <aside className="w-full md:w-[450px] h-full md:sticky md:top-20">
                        <CartSummary
                            subtotal={subtotal}
                            onCheckout={handleCheckout}
                            image="/images/bikes/bike-highlight-1.jpg"
                            itemCount={itemCount}
                        />
                    </aside>
                </div>
            </div>
        </main>
    )
}