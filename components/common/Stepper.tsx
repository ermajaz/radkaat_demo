"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepperProps {
  step: 1 | 2 | 3;
}

export const Stepper: React.FC<StepperProps> = ({ step }) => {
  const steps = ["Cart", "Address", "Payment"];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {steps.map((label, index) => {
        const current = index + 1;
        const isActive = current <= step;

        return (
          <motion.div
            key={label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-army bg-army text-black shadow-[0_0_10px_rgba(139,169,137,0.5)]"
                  : "border-gray-700 text-gray-500"
              }`}
            >
              {current}
            </div>
            <span
              className={`text-xs uppercase tracking-widest ${
                isActive ? "text-army" : "text-gray-500"
              }`}
            >
              {label}
            </span>

            {index < steps.length - 1 && (
              <div
                className={`w-10 md:w-20 h-0.5 transition-all ${
                  isActive ? "bg-army" : "bg-gray-700"
                }`}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
