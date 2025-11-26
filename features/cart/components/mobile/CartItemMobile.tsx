"use client";

import React from "react";
import { motion, useAnimationControls, PanInfo } from "framer-motion";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { ChevronDown, Bike } from "lucide-react";
import { FormattedNumber } from "@/utils/numberFlow";
import { CartProduct } from "../common";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { QuantityStepperMobile } from "./QuantityStepperMobile";

type Props = {
    product: CartProduct;
    onQtyChange: (id: string, qty: number) => void;
    onRemove: (id: string) => void;
    onVariantChange: (
        id: string,
        variant: { model?: string; color?: string }
    ) => void;
};

export const CartItemMobile: React.FC<Props> = ({
    product,
    onQtyChange,
    onRemove,
    onVariantChange,
}) => {
    const subtotal = product.price * product.qty;
    const controls = useAnimationControls();

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -60) {
            controls.start({ x: -80, transition: { type: "spring", stiffness: 260, damping: 26 } });
        } else {
            controls.start({ x: 0, transition: { type: "spring", stiffness: 260, damping: 26 } });
        }
    };

    return (
        <div className="relative">
            {/* Background: remove area */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                    onClick={() => onRemove(product.id)}
                    className="px-4 py-2 rounded-md bg-red-600 text-[11px] uppercase tracking-wide text-white font-semibold shadow-md active:scale-95 transition"
                >
                    Remove
                </button>
            </div>

            {/* Foreground swipeable card */}
            <motion.div
                layout
                initial={{ opacity: 0, y: 10 }} 
                exit={{ opacity: 0, y: -10 }}
                drag="x"
                dragConstraints={{ left: -80, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={controls}
                className="relative z-10 rounded-xl border border-[#2a2a2a] bg-[#121212]/95 px-3 py-3 flex gap-3 shadow-lg"
            >
                {/* Image */}
                <div className="flex flex-col items-center w-[88px]">

                    {/* ✅ Image */}
                    <div className="w-[88px] h-20 rounded-lg bg-[#0c0c0c] overflow-hidden flex items-center justify-center">
                        <Image
                            src={product.image ?? "/images/placeholder-product.png"}
                            alt={product.title}
                            width={88}
                            height={80}
                            className="object-contain"
                        />
                    </div>

                    {/* ✅ Refined Test Ride CTA */}
                    <button
                        onClick={() => window.open("/test-ride", "_blank")}
                        className="
      mt-2 w-full
      flex items-center justify-center gap-1.5
      rounded-md
      bg-[#141414]
      border border-[#2a2a2a]
      py-1.5
      active:scale-[0.97]
      transition-all duration-300
      hover:border-sandstorm/40 hover:bg-[#1c1c1c]
    "
                    >
                        <Bike size={14} className="text-sandstorm" />
                        <span className="text-[10px] font-medium text-sandstorm">
                            Test Ride
                        </span>
                    </button>

                </div>


                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                    {/* Title + desc + SKU */}
                    <div>
                        <h3 className="text-[16px] font-semibold text-white leading-snug">
                            {product.title}
                        </h3>

                        <div className="mt-1 space-y-0.5">
                            <p className="text-[12px] text-gray-300 leading-snug">
                                {product.selectedModel && <span>{product.selectedModel}</span>}
                                {product.selectedColor && (
                                    <span>, {product.selectedColor.toUpperCase()}</span>
                                )}
                                {product.desc && <span>, {product.desc}</span>}
                            </p>

                            {product.sku && (
                                <p className="text-[10px] tracking-wide text-white/35 uppercase">
                                    SKU: {product.sku} • {product.selectedModel}/{product.selectedColor}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Variants row: model + colors */}
                    <div className="flex items-center gap-3 mt-1">
                        {/* Model selector */}
                        {product.models && (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className="px-3 py-2 rounded-md bg-[#181818] text-[10px] text-white/80 flex items-center gap-1 border border-[#2a2a2a] hover:border-white/30 active:scale-95 transition">
                                        {product.selectedModel ?? "Model"}
                                        <ChevronDown size={10} />
                                    </button>
                                </PopoverTrigger>

                                <PopoverContent className="p-0 w-36 bg-[#121212] border border-[#2a2a2a]">
                                    <Command>
                                        <CommandList>
                                            <CommandGroup>
                                                {product.models.map((m) => (
                                                    <CommandItem
                                                        key={m}
                                                        onSelect={() => {
                                                            onVariantChange(product.id, { model: m });
                                                            document.body.click(); // close popover
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

                        {/* Color dots */}
                        {product.colors && (
                            <div className="flex items-center gap-2">
                                {product.colors.map((c) => {
                                    const isActive = product.selectedColor === c.name;
                                    return (
                                        <button
                                            key={c.name}
                                            onClick={() => onVariantChange(product.id, { color: c.name })}
                                            className={`
                        w-6 h-6 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${isActive ? "ring-2 ring-sandstorm ring-offset-2 ring-offset-[#121212]" : ""}
                      `}
                                            aria-label={c.name}
                                        >
                                            <span
                                                className="w-5 h-5 rounded-full border border-white/15"
                                                style={{ backgroundColor: c.hex }}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Price row */}
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-[12px] text-white/40 uppercase tracking-wide">
                            Sale
                        </span>
                        <span className="text-[18px] font-semibold text-gray-100">
                            <FormattedNumber value={product.price} />
                        </span>
                        <span className="text-[12px] text-white/30 line-through">
                            ₹{Math.round(product.price * 1.5).toLocaleString("en-IN")}
                        </span>
                    </div>

                    {/* Bottom row: quantity + subtotal + test ride */}
                    <div className="mt-2 flex items-center justify-between gap-2">
                        <QuantityStepperMobile
                            value={product.qty}
                            onChange={(q) => onQtyChange(product.id, q)}
                        />

                        <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] text-white/40 uppercase tracking-wide">
                                Subtotal
                            </span>
                            <span className="text-[15px] font-semibold text-white">
                                <FormattedNumber value={subtotal} />
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
