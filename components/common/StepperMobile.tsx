"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface StepperMobileProps {
  step: 1 | 2 | 3 | 4;
}

export default function StepperMobile({ step }: StepperMobileProps) {
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

  const handleClick = (current: number, route: string) => {
    if (current > step) return;
    router.push(route);
  };

  return (
    <div className="w-full px-4 py-3 bg-[#0b0b0b] border-b border-[#2a2a2a]">
      <div className="flex items-center justify-between w-full">

        {steps.map((item, index) => {
          const current = index + 1;
          const isActive = current <= step;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={item.label}
              className="flex items-center flex-1 min-w-0"
            >
              {/* ✅ Step Circle */}
              <motion.button
                onClick={() => handleClick(current, item.route)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`
                  flex items-center justify-center
                  w-10 h-10 shrink-0 rounded-full text-sm font-semibold
                  transition-all duration-300
                  ${isActive
                    ? "bg-[#E4D27C] text-black"
                    : "bg-[#1a1a1a] text-gray-500 border border-gray-700"
                  }
                `}
              >
                {current}
              </motion.button>

              {/* ✅ Label */}
              <span
                className={`
                  ml-2 text-[12px] uppercase tracking-wide
                  ${isActive ? "text-[#E4D27C]" : "text-gray-600"}
                `}
              >
                {item.label}
              </span>

              {/* ✅ Connector Line */}
              {!isLast && (
                <div
                  className={`
                    flex-1 h-0.5 mx-2
                    ${isActive ? "bg-[#E4D27C]" : "bg-gray-700"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
