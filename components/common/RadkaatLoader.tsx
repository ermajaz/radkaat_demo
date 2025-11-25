"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RadkaatLoader() {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setDone(true), 2400);
        return () => clearTimeout(timer);
    }, []);

    if (done) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 bg-black flex items-center justify-center z-9999"
        >
            <div className="flex flex-col items-center w-[140px]">
                <motion.button
                    whileTap={{ scale: 0.94 }}
                    className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center
                   cursor-pointer select-none overflow-hidden bg-[#0A0A0A]/70
                   border border-white/10 backdrop-blur-xl
                   shadow-[0_0_40px_rgba(255,200,80,0.08)]"
                >
                    {/* ✅ Soft Pulse Glow */}
                    <motion.div
                        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-20 h-20 rounded-full bg-sandstorm/25 blur-2xl"
                    />

                    {/* ✅ Thin Rotating Light Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full"
                        style={{
                            border: "2px solid transparent",
                            borderImage:
                                "linear-gradient(90deg, transparent, rgba(255,200,80,0.8), transparent) 1",
                        }}
                    />

                    {/* ✅ Central Spinning Icon */}
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="z-10 w-8 h-8"
                    >
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <Image
                                src="/images/website-logo.png"
                                alt="Radkaat Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </motion.button>
            </div>
        </motion.div>
    );
}
