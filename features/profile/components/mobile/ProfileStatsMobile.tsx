"use client";

import { motion } from "framer-motion";
import { Package, Heart, CreditCard, Star } from "lucide-react";

const stats = [
  { icon: Package, label: "Orders", value: "24" },
  { icon: Heart, label: "Wishlist", value: "8" },
  { icon: CreditCard, label: "Wallet", value: "₹ 4,560" },
  { icon: Star, label: "Rewards", value: "1,200 pts" },
];

export default function ProfileStatsMobile() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="relative bg-[#121212]/95  border border-[#2a2a2a] rounded-xl p-4 flex flex-col items-center"
          >
            <Icon size={22} className="text-white/80 mb-2" />
            <p className="text-lg font-semibold">{stat.value}</p>
            <span className="text-[11px] text-white/50 tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
