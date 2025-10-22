"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ConfirmationActions: React.FC = () => {
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
        className="flex items-center gap-3 border border-army/70 text-army px-7 py-3 uppercase tracking-wider text-sm 
        cursor-pointer transition-all duration-300 group"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
        Continue Shopping
      </button>

      <button
        onClick={() => router.push("/user/orders")}
        className="flex items-center gap-3 bg-army text-black px-7 py-3 uppercase tracking-wider cursor-pointer text-sm font-semibold 
        hover:bg-army/90 transition-all duration-300 group shadow-[0_0_20px_rgba(139,169,137,0.3)]"
      >
        View Order
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </button>
    </motion.div>
  );
};
