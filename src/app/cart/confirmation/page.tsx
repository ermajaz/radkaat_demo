"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PaymentStatus } from "@/components/confirmation/PaymentStatus";
import { OrderSummary } from "@/components/confirmation/OrderSummary";
import { ConfirmationActions } from "@/components/confirmation/ConfirmationActions";
import dynamic from "next/dynamic";

// Lazy-load confetti for performance
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfirmationPage() {
  const [orderData, setOrderData] = useState<{
    orderId: string;
    amount: number;
    discount: number;
    paymentMethod: string;
  } | null>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("radkaat-order");
    if (stored) setOrderData(JSON.parse(stored));
    else {
      setOrderData({
        orderId: "RK-" + Math.floor(Math.random() * 1000000),
        amount: 28799,
        discount: 20,
        paymentMethod: "Cashfree",
      });
    }

    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden flex items-center justify-center py-8 md:py-14">
      {/* 🎊 Confetti Celebration */}
      {showConfetti && (
        <Confetti recycle={false} numberOfPieces={250} gravity={0.2} />
      )}

      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 "
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl w-full border border-[#222] bg-gradient-to-b from-[#111]/90 to-[#090909]/90 backdrop-blur-xl 
         p-8 md:p-14 text-center overflow-hidden"
      >
        {/* Floating top accent glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-army to-transparent"
        />

        <div className="relative z-10 space-y-12">
          <PaymentStatus success />

          <OrderSummary order={orderData} />

          <ConfirmationActions />
        </div>
      </motion.div>
    </main>
  );
}
