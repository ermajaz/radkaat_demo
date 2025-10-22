"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Stepper } from "@/components/common/Stepper";

/**
 * Shared layout for all cart pages (cart, address, payment)
 * Handles consistent sticky top stepper and smooth transitions.
 */
export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // determine current step dynamically
  let step: 1 | 2 | 3 = 1;
  if (pathname.includes("/address")) step = 2;
  if (pathname.includes("/payment") || pathname.includes("/confirmation")) step = 3;

  return (
    <main className="min-h-screen text-white">
      {/* 🧭 Sticky Stepper Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          sticky top-0 z-40
          backdrop-blur-md
          border-b border-[#1a1a1a]
          px-6 md:px-12
          py-4 md:py-5
        "
      >
        <div className="max-w-7xl mx-auto">
          <Stepper step={step} />
        </div>
      </motion.div>

      {/* Page Content (cart/address/payment) */}
      <div className="w-full mx-auto px-5">
        {children}
      </div>
    </main>
  );
}
