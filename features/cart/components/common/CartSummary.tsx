"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "@/features/auth/components/LoginForm";

type Props = {
  subtotal: number;
  onCheckout: () => void;
  image?: string;
  itemCount: number;
};

// Simulated login check — replace this with your auth logic
const isUserLoggedIn = true;

export const CartSummary: React.FC<Props> = ({
  subtotal,
  onCheckout,
  image = "/images/bike-highlight-1.jpg",
  itemCount,
}) => {
  const el = useRef<HTMLDivElement | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  // Animate entrance for entire component
  useEffect(() => {
    if (!el.current) return;
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
    );
  }, []);

  const handleProceed = () => {
    if (!isUserLoggedIn) setShowLogin(true);
    else onCheckout();
  };

  return (
    <div
      ref={el}
      className="
        w-full md:w-[450px]
        min-h-screen relative overflow-hidden 
        flex flex-col justify-between
        bg-[#0a0a0a] text-white
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
        md:sticky md:top-20
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bike-highlight-1.jpg"
          alt="Cart background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/80" />
      </div>

      {/* Foreground Animated Content Switcher */}
      <div className="relative z-10 flex flex-col h-full justify-between px-5 py-5 select-none overflow-hidden">
        <AnimatePresence mode="wait">
          {/* ✅ Cart Summary View */}
          {!showLogin && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col h-full justify-between"
            >
              {/* Header Section */}
              <div className="flex-1 flex flex-col justify-center text-center mt-10">
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

              {/* Checkout Section */}
              <div className="flex flex-col items-center justify-end mt-10 pb-2 px-5">
                <button
                  onClick={handleProceed}
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
            </motion.div>
          )}

          {/* ✅ Login Sidebar View */}
          {showLogin && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-5">
                <h3 className="text-sm uppercase tracking-widest font-semibold">
                  Login to Continue
                </h3>
                <button
                  onClick={() => setShowLogin(false)}
                  className="hover:text-army transition cursor-pointer"
                  aria-label="Close login sidebar"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Login Form */}
              <div className="flex-1">
                <LoginForm />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
