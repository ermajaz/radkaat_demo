"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MobileColorSelector({ colors }: { colors: string[] }) {
    const [active, setActive] = useState(colors[1]);

    return (
        <div className="flex items-center gap-2">
            {colors.map((c) => {
                const selected = active === c;
                return (
                    <motion.button
                        key={c}
                        onClick={() => setActive(c)}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-8 h-8 flex items-center justify-center"
                    >
                        {selected && (
                            <motion.div
                                layoutId="colorRing"
                                className="
                                    absolute inset-0 rounded-full 
                                    border-2 border-white/80
                                "
                                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            />
                        )}

                        <div
                            className="w-5 h-5 rounded-full shadow-sm"
                            style={{ backgroundColor: c }}
                        />
                    </motion.button>
                );
            })}
        </div>
    );
}
