// app/cart/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { CartList } from "@/components/cart/CartList";
import { CartSummary } from "@/components/cart/CartSummary";
import type { CartProduct } from "@/components/cart/CartItem";
import { motion } from "framer-motion";

const initial: CartProduct[] = [
  {
    id: "p1",
    title: "SB120 TI2 2026",
    desc: "SM, TURQUOISE, DT Swiss XMC 1700 30MM Carbon Wheelset",
    sku: "B26120TSMPTUFAT1243W0",
    price: 9000,
    qty: 1,
    image: "/images/hero-bike-new.png",
  },
  {
    id: "p2",
    title: "SB160 TEAM ISSUE 2025",
    desc: "MD, TEAM ISSUE, Stock",
    sku: "B25160TMDPTMDNTIM6700",
    price: 13500,
    qty: 3,
    image: "/images/hero-bike-new.png",
  },
  {
    id: "p3",
    title: "SB160 TEAM ISSUE 2025",
    desc: "MD, TEAM ISSUE, Stock",
    sku: "B25160TMDPTMDNTIM6700",
    price: 13500,
    qty: 3,
    image: "/images/hero-bike-new.png",
  },
  {
    id: "p4",
    title: "SB160 TEAM ISSUE 2025",
    desc: "MD, TEAM ISSUE, Stock",
    sku: "B25160TMDPTMDNTIM6700",
    price: 13500,
    qty: 3,
    image: "/images/hero-bike-new.png",
  },
  {
    id: "p5",
    title: "SB160 TEAM ISSUE 2025",
    desc: "MD, TEAM ISSUE, Stock",
    sku: "B25160TMDPTMDNTIM6700",
    price: 13500,
    qty: 3,
    image: "/images/hero-bike-new.png",
  },
  {
    id: "p6",
    title: "SB160 TEAM ISSUE 2025",
    desc: "MD, TEAM ISSUE, Stock",
    sku: "B25160TMDPTMDNTIM6700",
    price: 13500,
    qty: 3,
    image: "/images/hero-bike-new.png",
  },
];

export default function CartPage() {
  const [products, setProducts] = useState<CartProduct[]>(initial);

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
    // connect to checkout flow
    alert(`Checkout pressed — subtotal ₹$${subtotal.toLocaleString()}`);
  };

  return (
    <main className="min-h-screen text-white">
      <div className="w-full mx-auto py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0.5">
          {/* left column - items */}
          <section className="flex-1 bg-transparent">
            <div className=" border border-[#2b2b2b]">
              {/* 🚚 Stylish Free Shipping Banner */}
              <div
                className="
        relative overflow-hidden
        text-center text-[13px] uppercase tracking-[0.15em]
        font-medium text-army py-4 mb-8
        bg-[#0f0f0f] border border-army/40
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-army/10 before:via-transparent before:to-army/10
        shadow-[0_0_25px_rgba(139,169,137,0.15)]
        transition-all duration-300
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
                  className="absolute inset-y-0 w-[60%] bg-gradient-to-r from-transparent via-army/10 to-transparent blur-xl"
                />
              </div>

              <div className="p-6 pt-0">
                <CartList
                  products={products}
                  onQtyChange={handleQtyChange}
                  onRemove={handleRemove}
                />
              </div>

              {/* subtotal small on mobile */}
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

          {/* right column - summary */}
          <aside className="w-full md:w-[450px] h-screen md:sticky md:top-20">
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
  );
}
