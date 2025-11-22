"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { ApparelDetails } from "../types/apparel-details.types";
import { X } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    data: ApparelDetails | null;
}

export default function ApparelDetailsModal({ open, onClose, data }: Props) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    if (!data) return null;

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* ✅ BLUR BACKDROP */}
                    <motion.div
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* ✅ MODAL */}
                    <motion.div
                        className="fixed inset-0 z-210 flex items-center justify-center px-4"
                        initial={{ scale: 0.92, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.92, opacity: 0, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="bg-[#0C0C0C] border border-white/10 shadow-2xl max-w-xl w-full overflow-hidden">

                            {/* IMAGE */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    fill
                                    className="object-cover"
                                />
                                <X className="absolute top-4 right-4 cursor-pointer text-white" onClick={onClose} />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 space-y-2">
                                {/* TITLE */}
                                <h2 className="text-xl font-semibold tracking-wide">
                                    {data.name}
                                </h2>
                                {data.price && (
                                    <p className="text-sandstorm font-semibold text-xl">
                                        ₹{data.price.toLocaleString()}
                                    </p>
                                )}


                                {/* DESCRIPTION */}
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    {data.description}
                                </p>

                                {/* ✅ FEATURE CHIPS */}
                                <div>
                                    <h3 className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                                        Key Features
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {data.features.map((f) => (
                                            <motion.div
                                                key={f}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="px-3 py-1 text-[11px] bg-white/5 border border-white/10 rounded-sm text-neutral-200 backdrop-blur-sm"
                                            >
                                                {f}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* MATERIALS */}
                                <div className="text-sm text-neutral-400">
                                    <span className="font-semibold text-neutral-300">Materials:</span>{" "}
                                    {data.materials}
                                </div>

                                {/* CARE */}
                                <div className="text-sm text-neutral-400">
                                    <span className="font-semibold text-neutral-300">Care:</span>{" "}
                                    {data.care}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
