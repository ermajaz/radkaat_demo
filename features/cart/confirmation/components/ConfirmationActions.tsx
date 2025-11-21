"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ConfirmationActions = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10"
    >
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-3 border border-army/70 text-army px-7 py-3 uppercase tracking-wider text-sm transition-all group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Continue Shopping
      </button>

      <button
        onClick={() => router.push("/orders")}
        className="flex items-center gap-3 bg-army text-black px-7 py-3 uppercase tracking-wider text-sm font-semibold hover:bg-army/90 transition-all group shadow-[0_0_20px_rgba(139,169,137,0.3)]"
      >
        View Order
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};
