"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../layout/Header/components/Logo";

interface StepperProps {
  step: 1 | 2 | 3 | 4;
}

export const Stepper: React.FC<StepperProps> = ({ step }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine steps based on pathname
  const isPreorder = pathname.startsWith('/preorder');
  const steps = isPreorder
    ? [
        { label: "Preorder", route: "/preorder" },
        { label: "Customize", route: "/preorder/customization" },
        { label: "Address", route: "/preorder/address" },
        { label: "Payment", route: "/preorder/payment" },
      ]
    : [
        { label: "Cart", route: "/cart" },
        { label: "Address", route: "/cart/address" },
        { label: "Payment", route: "/cart/payment" },
      ];

  const handleStepClick = (current: number, route: string) => {
    // ✅ OPTIONAL RULE: Prevent skipping ahead
    // If you want users to be allowed to jump freely, remove this:
    if (current > step) return;

    router.push(route);
  };

  return (
    <div className="flex items-center justify-between w-full">
      
      {/* ✅ Website Logo */}
      <Logo />

      {/* ✅ Stepper */}
      <div className="flex items-center gap-4 md:gap-8 mx-auto">
        {steps.map((item, index) => {
          const current = index + 1;
          const isActive = current <= step;

          return (
            <motion.button
              key={item.label}
              onClick={() => handleStepClick(current, item.route)}
              className="flex items-center gap-3 cursor-pointer"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#E4D27C] bg-[#E4D27C] text-black shadow-[0_0_10px_rgba(228,210,124,0.5)]"
                    : "border-gray-700 text-gray-500"
                }`}
              >
                {current}
              </div>

              <span
                className={`text-xs uppercase tracking-widest ${
                  isActive ? "text-[#E4D27C]" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>

              {index < steps.length - 1 && (
                <div
                  className={`w-10 md:w-20 h-0.5 transition-all ${
                    isActive ? "bg-[#E4D27C]" : "bg-gray-700"
                  }`}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
