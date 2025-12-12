"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Bike } from "../../utils/bicycle-showcase";

export default function MobileBikesStrip({ bike }: { bike: Bike }) {
    const gradient = bike?.colors?.gradient
        ? `linear-gradient(90deg, ${bike.colors.gradient})`
        : "linear-gradient(90deg, #ccc, #999)";

    return (
        <motion.div
            className="w-full h-8 flex items-center justify-center text-black font-semibold text-xs uppercase tracking-wide z-50"
            style={{ backgroundImage: gradient }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex items-center gap-2">
                <Star className="w-3 h-3 fill-black text-black" strokeWidth={0} />
                Introducing Goat Series
                <Star className="w-3 h-3 fill-black text-black" strokeWidth={0} />
            </div>
        </motion.div>
    );
}
