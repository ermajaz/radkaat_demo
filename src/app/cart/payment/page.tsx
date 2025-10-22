"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CouponSection } from "@/components/payment/CouponSection";
import { WalletSection } from "@/components/payment/WalletSection";
import { PaymentOptions } from "@/components/payment/PaymentOptions";

export default function PaymentPage() {
  const router = useRouter();

  /** Global Payment States */
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
    expiry: string;
    usage: number;
  } | null>(null);

  const [walletAmount, setWalletAmount] = useState<number>(0);
  const [walletBalance] = useState<number>(1500);
  const [selectedMethod, setSelectedMethod] = useState<"wallet" | "cashfree" | null>(null);

  /** Proceed Payment */
  const handleConfirmPayment = () => {
    alert("Proceeding to Cashfree Payment...");
    router.push("/cart/confirmation");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col lg:flex-row"
      >
        {/* Left Side – Payment Form */}
        <div className="flex-1 p-8 md:p-12 border-r border-[#222] space-y-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-8">
            Complete Your Payment
          </h2>

          {/* Coupon Section */}
          <CouponSection
            coupon={coupon}
            setCoupon={setCoupon}
            appliedCoupon={appliedCoupon}
            setAppliedCoupon={setAppliedCoupon}
          />

          {/* Wallet Section */}
          <WalletSection
            walletAmount={walletAmount}
            setWalletAmount={setWalletAmount}
            walletBalance={walletBalance}
          />

          {/* Payment Options */}
          <PaymentOptions
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            onConfirm={handleConfirmPayment}
          />
        </div>

        {/* Right Side – Aesthetic Summary Panel */}
        <div className="hidden lg:flex w-[45%] relative bg-gradient-to-b from-[#111] via-[#0b0b0b] to-black border-l border-[#2b2b2b] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center p-10 max-w-lg"
          >
            <h3 className="text-3xl font-bold tracking-wide mb-4 text-army">
              Radkaat Checkout
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Secure, seamless payments powered by Cashfree. Apply coupons, use wallet credits, and
              enjoy exclusive Radkaat rewards on every ride.
            </p>
            <div className="text-sm uppercase text-gray-500 tracking-widest">
              Safe • Encrypted • Instant
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
