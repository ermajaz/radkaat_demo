"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PaymentStatusMobile({ success }: { success: boolean }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <motion.div
        initial={{ scale: 0.8, rotate: -6 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 flex items-center justify-center rounded-full bg-army/15"
      >
        <CheckCircle2 size={64} className="text-army" />
      </motion.div>

      <h1 className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-army to-white">
        Payment Successful
      </h1>

      <p className="text-white/60 text-sm leading-relaxed max-w-xs">
        Your order is confirmed and now being prepared for shipment.
      </p>
    </div>
  );
}
