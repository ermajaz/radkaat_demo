"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ModelDetails = {
    id: string;
    label: string; // "model-1"
    image: string;
    title: string; // "SEROW-1"
    price: string; // "₹10,000"
    colors: string[]; // ["#A3B17A", "#D9C98A", "#8A2C2C"]
};

export default function ProductPreview({
    details,
    activeVariant,
    setActiveVariant,
}: {
    details: { models: string[] } & Partial<ModelDetails>;
    activeVariant: string;
    setActiveVariant: (v: string) => void;
}) {
    // derive models array -> if details.models provided, use that (labels),
    // otherwise fallback to hardcoded three models
    const modelLabels: string[] =
        details.models ??
        ["model-1", "model-2", "model-3"];

    const baseImage = (details as any).image || "/images/product-overlay-img.png";
    const baseTitle = (details as any).title || "SEROW-1";
    const basePrice = (details as any).price || "₹10,000";
    const baseColors: string[] = (details as any).colors || ["#8EA23A", "#D9C98A", "#8B2B2B"];

    const [activeModelIndex, setActiveModelIndex] = useState(0);

    return (
        <div className="w-full h-full relative flex flex-col justify-between items-stretch">

            {/* Big image container */}
            <div className="w-full h-full bg-[#0b0b0b] overflow-hidden relative flex items-center justify-center">
                <Image
                    src={baseImage}
                    alt={baseTitle}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* ✅ Bottom Variant Strip */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute bottom-3 left-0 right-0 max-w-[95%] mx-auto bg-[#1A1A1A]/80 border border-white/6 rounded-sm p-2 flex items-center justify-between"
            >

                {/* ✅ LEFT SIDE — Title + Price + Models */}
                <div className="flex items-center gap-10 ml-2">

                    {/* Title + Price */}
                    <div className="text-left">
                        <div className="text-xl font-bold text-white">{baseTitle}</div>
                        <div className="text-sm text-white/60 mt-1">From: {basePrice}</div>
                    </div>

                    {/* ✅ Model Tabs (NO UNDERLINE) */}
                    <div className="flex items-center gap-6">
                        {modelLabels.map((m, idx) => {
                            const active = idx === activeModelIndex;
                            return (
                                <button
                                    key={m}
                                    onClick={() => setActiveModelIndex(idx)}
                                    className={`text-lg cursor-pointer font-medium transition-all ${active ? "text-white" : "text-white/50 hover:text-white/70"
                                    }`} 
                                >
                                    {m}
                                </button>
                            );
                        })}
                    </div>

                </div>

                {/* ✅ RIGHT SIDE — Colors + CTA */}
                <div className="flex items-center gap-4">

                    {/* Color Swatches */}
                    <div className="flex items-center gap-3">
                        {baseColors.map((c) => {
                            const active = c === activeVariant;
                            return (
                                <button
                                    key={c}
                                    onClick={() => setActiveVariant(c)}
                                    className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
                                >
                                   {/* Outer ring when active */}
                                {active && (
                                    <span className="absolute w-8 h-8 rounded-full border-2 border-white" />
                                )}

                                {/* Color circle */}
                                <span
                                    className="w-5 h-5 rounded-full shadow-[inset_0_0_6px_rgba(0,0,0,0.4)]"
                                    style={{ backgroundColor: c }}
                                />
                                </button>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/serow/model-1"
                        className="px-6 py-2 bg-white rounded-xs text-black text-xs font-semibold hover:bg-white/90 transition"
                    >
                        View Product
                    </Link>

                </div>
            </motion.div>

        </div>
    );
}
