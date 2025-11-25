"use client";

import React from "react";
import clsx from "clsx";
import { AnimatedQuantity } from "@/utils/numberFlow";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  className?: string;
};

export const QuantityStepperMobile: React.FC<Props> = ({
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
        "inline-flex items-center rounded-full bg-[#151515] border border-[#2b2b2b]",
        "select-none text-white shadow-[0_0_0_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <button
        type="button"
        onClick={dec}
        aria-label="Decrease quantity"
        className="
          w-9 h-9 flex items-center justify-center
          text-lg text-gray-300
          active:scale-95 rounded-l-full
        "
      >
        −
      </button>

      <div className="min-w-8 px-1.5 text-[13px] font-semibold text-center">
        <AnimatedQuantity value={value} />
      </div>

      <button
        type="button"
        onClick={inc}
        aria-label="Increase quantity"
        className="
          w-9 h-9 flex items-center justify-center
          text-lg text-gray-300
          active:scale-95 rounded-r-full
        "
      >
        +
      </button>
    </div>
  );
};
