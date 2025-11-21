"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface PaymentStatusProps {
  success: boolean;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({ success }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center space-y-5"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 10 }}
        className={`w-28 h-28 flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(139,169,137,0.2)] ${
          success ? "bg-army/20" : "bg-red-500/20"
        }`}
      >
        {success ? (
          <CheckCircle2 size={70} className="text-army drop-shadow-lg" />
        ) : (
          <XCircle size={70} className="text-red-500 drop-shadow-lg" />
        )}
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide bg-clip-text text-transparent bg-linear-to-r from-army to-white">
        {success ? "Payment Successful" : "Payment Failed"}
      </h1>

      <p className="text-gray-400 text-base max-w-lg leading-relaxed">
        {success
          ? "Thank you for your purchase! Your order has been confirmed and is being prepared for shipping."
          : "Your payment could not be processed. Please try again."}
      </p>
    </motion.div>
  );
};
