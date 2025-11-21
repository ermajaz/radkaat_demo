"use client";

import { Package } from "lucide-react";
import { motion } from "framer-motion";

export const EmptyOrdersState = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center py-32 text-center"
  >
    <Package size={48} className="text-white/40 mb-4" />
    <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
    <p className="text-white/60 text-sm max-w-xs">
      You haven’t placed any orders yet. Once you do, they’ll appear here.
    </p>
  </motion.div>
);
