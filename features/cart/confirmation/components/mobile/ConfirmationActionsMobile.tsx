"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ConfirmationActionsMobile() {
  const router = useRouter();

  return (
    <div className="space-y-4 pt-4">
      <motion.button
        onClick={() => router.push("/")}
        whileTap={{ scale: 0.96 }}
        className="
          w-full h-12 rounded-full border border-army/60 text-army
          uppercase text-xs tracking-widest flex items-center justify-center gap-2
        "
      >
        <ArrowLeft size={16} />
        Continue Shopping
      </motion.button>

      <motion.button
        onClick={() => router.push("/orders")}
        whileTap={{ scale: 0.96 }}
        className="
          w-full h-12 rounded-full bg-army text-black font-semibold
          uppercase text-xs tracking-widest flex items-center justify-center gap-2
        "
      >
        View Order
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
}
