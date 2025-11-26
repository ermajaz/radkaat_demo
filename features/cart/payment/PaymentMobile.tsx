"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import CouponSectionMobile from "./components/mobile/CouponSectionMobile";
import WalletSectionMobile from "./components/mobile/WalletSectionMobile";
import PaymentOptionsMobile from "./components/mobile/PaymentOptionsMobile";

export default function PaymentMobile() {
  const router = useRouter();

  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);

  const [walletAmount, setWalletAmount] = useState(0);
  const walletBalance = 1500;

  const [selectedMethod, setSelectedMethod] =
    useState<"wallet" | "cashfree" | null>(null);

  const handleConfirmPayment = () => {
    if (!selectedMethod) return;
    router.push("/cart/confirmation");
  };

  return (
    <main className="w-full min-h-screen bg-superblack text-white pb-28 pt-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="px-5 space-y-5"
      >
        {/* ✅ PAGE TITLE */}
        <header>
          <h1 className="text-[22px] font-bold uppercase tracking-wide leading-tight">
            Complete Payment
          </h1>
          <p className="text-xs text-white/40 mt-1">
            Secure checkout with wallet & Cashfree
          </p>
        </header>

        {/* ✅ COUPON */}
        <CouponSectionMobile
          coupon={coupon}
          setCoupon={setCoupon}
          appliedCoupon={appliedCoupon}
          setAppliedCoupon={setAppliedCoupon}
        />

        {/* ✅ WALLET */}
        <WalletSectionMobile
          walletAmount={walletAmount}
          setWalletAmount={setWalletAmount}
          walletBalance={walletBalance}
        />

        {/* ✅ PAYMENT METHODS */}
        <PaymentOptionsMobile
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          onConfirm={handleConfirmPayment}
        />
      </motion.div>
    </main>
  );
}
