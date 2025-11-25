"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Stepper } from "@/components/common/Stepper";
import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import StepperMobile from "@/components/common/StepperMobile";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
          px-0 md:px-12
          md:py-4
        "
      >
        <div className="w-full mx-auto flex items-center">
          {useResponsiveComponent(<StepperMobile step={step} />, <Stepper step={step} />)}
        </div>
      </motion.div>

      {/* ✅ FULL PAGE SCROLLING CONTENT */}
      <div className="w-full mx-auto md:px-5 py-6">
        {children}
      </div>
    </main>
  );
}
