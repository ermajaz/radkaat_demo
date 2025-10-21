"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

type Props = {
  subtotal: number;
  onCheckout: () => void;
  image?: string;
  itemCount: number;
};

export const CartSummary: React.FC<Props> = ({
  subtotal,
  onCheckout,
  image = "/images/bikes/bike-highlight-1.jpg",
  itemCount,
}) => {
  const el = useRef<HTMLDivElement | null>(null);

  // Subtle GSAP entrance animation
  useEffect(() => {
    if (!el.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={el}
      className="
        w-full md:w-[450px]
        min-h-screen
        relative overflow-hidden 
        flex flex-col justify-between
        bg-[#0a0a0a] text-white
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
      "
    >
      {/* Background Image (with low opacity & subtle gradient) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Cart background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </div>

      {/* Foreground Content (CRISP) */}
      <div className="relative z-10 flex flex-col h-full justify-between px-10 py-14 select-none">
        {/* Header Section */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Order Summary
          </h2>

          <h3 className="text-5xl md:text-[2.8rem] font-bold text-white tracking-tight mb-2">
            ₹{subtotal.toLocaleString("en-IN")}
          </h3>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-gray-400">
              Excludes taxes & shipping
            </span>
            <span className="text-[11px] uppercase tracking-widest text-gray-400">
              {itemCount} {itemCount === 1 ? "Item" : "Items"}
            </span>
          </div>
        </div>

        {/* Checkout Section (anchored at bottom) */}
        <div className="flex flex-col items-center justify-end mt-10 pb-2">
          <button
            onClick={onCheckout}
            className="
              w-full py-3 bg-army text-black 
              font-semibold uppercase tracking-wider text-[13px] cursor-pointer
              hover:bg-army/90 active:scale-[0.98]
              transition-all duration-300
            "
          >
            Proceed to Checkout
          </button>

          <div className="mt-6 text-[11px] text-white uppercase tracking-widest text-center">
            Free ground shipping for orders ₹10,000+
          </div>

          <div className="w-full mt-10 border-t border-white/80 pt-6 text-center text-[10px] text-white tracking-widest uppercase">
            Radkaat — Built to Perform
          </div>
        </div>
      </div>
    </div>
  );
};
