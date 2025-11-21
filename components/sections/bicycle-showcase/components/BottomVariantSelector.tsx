"use client";

import React from "react";
import Image from "next/image";

interface Variant {
    model: string;
    colors: string[];
    productLink: string;
}

export default function BottomVariantSelector({
    variants,
    activeModel,
    setActiveModel,
    activeColor,
    setActiveColor,
}: {
    variants: Variant[];
    activeModel: string;
    setActiveModel: (m: string) => void;
    activeColor: string;
    setActiveColor: (m: string) => void;
}) {
    const currentVariant = variants.find((v) => v.model === activeModel)!;

    return (
        <div className="absolute bottom-5 left-0 right-0 max-w-7xl mx-auto bg-[#1A1A1A]/80 border border-white/6 rounded-sm p-4 flex items-center justify-between">

            <div className="w-full mx-auto flex items-center justify-between">
                {/* ------------------- MODEL SWITCH TABS ------------------- */}
                <div className="flex items-center gap-6">
                    {variants.map((v) => {
                        const active = v.model === activeModel;
                        return (
                            <button
                                key={v.model}
                                onClick={() => setActiveModel(v.model)}
                                className={`text-lg cursor-pointer font-medium transition-all ${active ? "text-white" : "text-white/50 hover:text-white/70"
                                    }`}
                            >
                                {v.model.toUpperCase()}
                            </button>
                        );
                    })}
                </div>

                {/* ------------------- COLOR SWATCHES ------------------- */}
                <div className="flex items-center gap-4">
                    {currentVariant.colors.map((clr) => {
                        const active = clr === activeColor;

                        return (
                            <button
                                key={clr}
                                onClick={() => setActiveColor(clr)}
                                className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
                                aria-label="color-swatch"
                            >
                                {/* Outer ring when active */}
                                {active && (
                                    <span className="absolute w-8 h-8 rounded-full border-2 border-white" />
                                )}

                                {/* Color circle */}
                                <span
                                    className="w-5 h-5 rounded-full shadow-[inset_0_0_6px_rgba(0,0,0,0.4)]"
                                    style={{ backgroundColor: clr }}
                                />
                            </button>
                        );
                    })}

                    <a
                        href={currentVariant.productLink}
                        target="_blank"
                        className="px-6 py-2 bg-white rounded-xs text-black text-xs font-semibold hover:bg-white/90 transition"
                    >
                        View Product
                    </a>
                </div>
            </div>
        </div>
    );
}
