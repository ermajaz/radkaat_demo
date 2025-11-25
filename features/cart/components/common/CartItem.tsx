"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { QuantityStepper } from "./QuantityStepper";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Bike } from "lucide-react";
import { FormattedNumber } from "@/utils/numberFlow";

export type CartProduct = {
  id: string;
  title: string;
  desc?: string;
  sku?: string;
  price: number;
  qty: number;
  image?: string;

  models?: string[];
  colors?: { name: string; hex: string }[];
  selectedModel?: string;
  selectedColor?: string;
};

type Props = {
  product: CartProduct;
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onVariantChange: (
    id: string,
    variant: { model?: string; color?: string }
  ) => void;
};

export const CartItem: React.FC<Props> = ({
  product,
  onQtyChange,
  onRemove,
  onVariantChange,
}) => {
  const subtotal = product.price * product.qty;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="border-t border-[#2a2a2a] py-6 flex gap-6 group"
    >
      {/* ✅ Image */}
      <div className="w-[110px] h-[90px] bg-[#101010] overflow-hidden shrink-0 flex items-center justify-center rounded-md">
        <Image
          src={product.image ?? "/images/placeholder-product.png"}
          alt={product.title}
          width={110}
          height={90}
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* ✅ Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide leading-snug group-hover:text-army transition-colors duration-300">
            {product.title}
          </h3>
          {/* ✅ Desc + SKU */}
          {(product.desc || product.sku) && (
            <div className="mt-1.5 space-y-1">
              <p className="text-sm text-gray-300 leading-snug">
                {product.selectedModel && <span>{product.selectedModel}</span>}
                {product.selectedColor && <span>, {product.selectedColor.toUpperCase()}</span>}
                {product.desc && <span>, {product.desc}</span>}
              </p>


              <p className="text-[11px] tracking-wide text-white/40 uppercase">
                SKU: {product.sku} • {product.selectedModel}/{product.selectedColor}
              </p>

            </div>
          )}

          {/* ✅ Variant Row */}
          <div className="flex items-center gap-4 mt-2">

            {/* ✅ Model Selector */}
            {product.models && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="px-3 py-1.5 rounded-md bg-[#1c1c1c] text-xs text-white/80 flex items-center gap-1 border border-white/10 hover:border-white/30 transition">
                    {product.selectedModel ?? "Model"}
                    <ChevronDown size={12} />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="p-0 w-40 bg-[#111] border border-white/10">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {product.models.map((m) => (
                          <CommandItem
                            key={m}
                            onSelect={(value) => {
                              onVariantChange(product.id, { model: m });
                              // ✅ closes the popover
                              document.body.click();
                            }}
                          >
                            {m}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            )}


            {/* ✅ Color Dots */}
            {product.colors && (
              <div className="flex items-center gap-3">
                {product.colors.map((c) => {
                  const isActive = product.selectedColor === c.name;

                  return (
                    <button
                      key={c.name}
                      onClick={() =>
                        onVariantChange(product.id, { color: c.name })
                      }
                      className={`
            w-5 h-5 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isActive ? "ring-2 ring-sandstorm ring-offset-1 ring-offset-[#0f0f0f]" : ""}
          `}
                      aria-label={c.name}
                    >
                      <span
                        className="w-4.5 h-4.5 border border-white/10 cursor-pointer rounded-full"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ✅ Pricing Block (between variants & quantity) */}
        <div className="mt-3 flex items-center gap-3">

          {/* Label */}
          <span className="text-[11px] text-white/40 uppercase tracking-wide">
            Sale Price
          </span>

          {/* Sale Price */}
          <span className="text-[16px] font-semibold text-gray-200">
            <FormattedNumber value={product.price} />
          </span>


          {/* MRP */}
          <span className="text-[13px] text-white/30 line-through tracking-wide">
            ₹{Math.round(product.price * 1.5).toLocaleString("en-IN")}
          </span>
        </div>


        {/* ✅ Controls + Price + Mini CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <QuantityStepper
              value={product.qty}
              onChange={(q) => onQtyChange(product.id, q)}
            />

            <button
              onClick={() => onRemove(product.id)}
              className="text-[11px] uppercase tracking-wider text-gray-400 hover:text-white transition"
            >
              Remove
            </button>
            {/* ✅ Inline Test Ride CTA */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("/test-ride", "_blank")}
              className="
        flex items-center gap-1.5
        text-xs cursor-pointer font-semibold
        px-5 py-2 rounded-md
        bg-[#141414] border border-white/10
        text-sandstorm
        hover:border-sandstorm/40 hover:bg-[#1d1d1d]
        transition-all duration-300
      "
            >
              <span>Still not sure?</span>
              <span className="hidden sm:inline text-sandstorm">Ride</span>
            </motion.button>
          </div>

          {/* ✅ Price + Test Ride */}
          <div className="flex flex-col items-end gap-1">


            {/* ✅ Subtotal label + value */}
            <div className="flex flex-col items-end mt-1">
              <span className="text-[10px] text-white/40 uppercase tracking-wide">
                Subtotal
              </span>
              <span className="text-xl font-semibold text-white">
                <FormattedNumber value={subtotal} />
              </span>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};
