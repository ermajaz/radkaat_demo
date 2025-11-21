"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CouponSection } from "@/features/cart/payment/components/CouponSection";
import { WalletSection } from "@/features/cart/payment/components/WalletSection";
import { PaymentOptions } from "@/features/cart/payment/components/PaymentOptions";

export default function PaymentPage() {
  const router = useRouter();

  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
    expiry: string;
    usage: number;
  } | null>(null);

  const [walletAmount, setWalletAmount] = useState<number>(0);
  const [walletBalance] = useState<number>(1500);
  const [selectedMethod, setSelectedMethod] =
    useState<"wallet" | "cashfree" | null>(null);

  const handleConfirmPayment = () => {
    router.push("/cart/confirmation");
  };

  return (
    <main className="min-h-screen text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col lg:flex-row"
      >
        {/* LEFT */}
        <div className="flex-1 p-8 md:p-12 border-r border-[#222] space-y-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-8">
            Complete Your Payment
          </h2>

          <CouponSection
            coupon={coupon}
            setCoupon={setCoupon}
            appliedCoupon={appliedCoupon}
            setAppliedCoupon={setAppliedCoupon}
          />

          <WalletSection
            walletAmount={walletAmount}
            setWalletAmount={setWalletAmount}
            walletBalance={walletBalance}
          />

          <PaymentOptions
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            onConfirm={handleConfirmPayment}
          />
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex w-[45%] bg-linear-to-b from-[#111] to-black items-center justify-center">
          <div className="p-10 max-w-lg text-center">
            <h3 className="text-3xl font-bold mb-4 text-army">Radkaat Checkout</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Secure, seamless payments powered by Cashfree. Apply coupons, use wallet
              credits and enjoy rewards.
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Safe • Encrypted • Instant
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
