"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PaymentStatusMobile from "./components/mobile/PaymentStatusMobile";
import OrderSummaryMobile from "./components/mobile/OrderSummaryMobile";
import ConfirmationActionsMobile from "./components/mobile/ConfirmationActionsMobile";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfirmationMobile() {
  const [orderData, setOrderData] = useState<{
    orderId: string;
    amount: number;
    discount: number;
    paymentMethod: string;
  } | null>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("radkaat-order");

    if (stored) {
      setOrderData(JSON.parse(stored));
    } else {
      setOrderData({
        orderId: "RK-" + Math.floor(Math.random() * 1_000_000),
        amount: 28799,
        discount: 20,
        paymentMethod: "Cashfree",
      });
    }

    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen w-full text-white bg-[#121212] relative overflow-hidden p-5">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={180}
          gravity={0.4}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <PaymentStatusMobile success />
        <OrderSummaryMobile order={orderData} />
        <ConfirmationActionsMobile />
      </motion.div>
    </main>
  );
}
