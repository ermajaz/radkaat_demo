"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  className?: string;
};

export const QuantityStepper: React.FC<Props> = ({
  value,
  min = 1,
  max = 999,
  onChange,
  className,
}) => {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={clsx(
        "inline-flex items-center border border-[#2a2a2a]",
        "select-none text-white",
        "transition-all duration-200 hover:border-army/60",
        className
      )}
    >
      {/* Decrease Button */}
      <button
        type="button"
        onClick={dec}
        aria-label="Decrease quantity"
        className={clsx(
          "w-8 h-8 md:w-9 md:h-9 text-[20px] flex cursor-pointer items-center justify-center font-light",
          "bg-[#0b0b0b] text-gray-400 hover:text-army hover:bg-army/10",
          "transition-all duration-200 focus:outline-none active:scale-95"
        )}
      >
        −
      </button>

      {/* Value Display */}
      <div
        className={clsx(
          "min-w-12 px-2 py-1.5 text-sm font-semibold text-center tracking-wide",
          "bg-[#141414] text-white border-x border-[#2a2a2a]"
        )}
      >
        {value}
      </div>

      {/* Increase Button */}
      <button
        type="button"
        onClick={inc}
        aria-label="Increase quantity"
        className={clsx(
          "w-8 h-8 md:w-9 md:h-9 text-[20px] flex cursor-pointer items-center justify-center font-light",
          "bg-[#0b0b0b] text-gray-400 hover:text-army hover:bg-army/10",
          "transition-all duration-200 focus:outline-none active:scale-95"
        )}
      >
        +
      </button>
    </div>
  );
};
