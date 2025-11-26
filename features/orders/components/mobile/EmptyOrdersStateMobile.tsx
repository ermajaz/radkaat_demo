"use client";

import { Package } from "lucide-react";
import { motion } from "framer-motion";

export default function EmptyOrdersStateMobile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-32 text-center px-6"
    >
      <Package size={42} className="text-white/30 mb-3" />
      <h3 className="text-lg font-semibold mb-1">No Orders Yet</h3>
      <p className="text-white/50 text-xs max-w-xs">
        Once you place an order, it will appear here instantly.
      </p>
    </motion.div>
  );
}
