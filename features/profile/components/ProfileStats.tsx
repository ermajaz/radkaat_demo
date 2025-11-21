"use client";

import { motion } from "framer-motion";
import { Package, Heart, CreditCard, Star } from "lucide-react";

const stats = [
  { icon: Package, label: "Orders", value: "24" },
  { icon: Heart, label: "Wishlist", value: "8" },
  { icon: CreditCard, label: "Wallet Balance", value: "₹ 4,560" },
  { icon: Star, label: "Rewards", value: "1,200 pts" },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center justify-center bg-white/8 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/12 transition-all duration-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
          >
            {/* Glow layer */}
            <motion.div
              className="absolute inset-0 bg-linear-to-b from-white/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="mb-3"
            >
              <Icon size={26} className="text-white/80" />
            </motion.div>

            {/* Value */}
            <motion.span
              className="text-xl font-semibold text-white mb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {stat.value}
            </motion.span>

            {/* Label */}
            <span className="text-[12px] text-white/60 tracking-wide">
              {stat.label}
            </span>

            {/* Animated underline accent */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-white/20 via-white/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
