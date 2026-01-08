"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Stepper } from "@/components/common/Stepper";
import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import StepperMobile from "@/components/common/StepperMobile";

export default function PreorderLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let step: 1 | 2 | 3 | 4 = 1;
  if (pathname.includes("/customization")) step = 2;
  if (pathname.includes("/address")) step = 3;
  if (pathname.includes("/payment") || pathname.includes("/confirmation")) step = 4;

  return (
    <main className="min-h-screen text-white">
      {/* 🧭 Sticky Stepper Header with Enhanced Styling */}
      <motion.div
                initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          sticky top-0 z-40 max-w-[1440px]
          backdrop-blur-md
          border-b border-[#1a1a1a]
          px-0 md:px-12
          md:py-4
        "
      >
        <div className="w-full mx-auto flex items-center">
          {useResponsiveComponent(<StepperMobile step={step} />, <Stepper step={step} />)}
        </div>
      </motion.div>

      {/* ✅ FULL PAGE SCROLLING CONTENT with Advanced Background */}
      <div className="w-full mx-auto md:px-5 md:py-6 relative">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 bg-[#E4D27C]/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-[#E4D27C]/3 rounded-full blur-xl"
          />
        </div>
        {children}
      </div>
    </main>
  );
}