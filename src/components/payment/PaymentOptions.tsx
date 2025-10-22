"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentOptionsProps {
  selectedMethod: "wallet" | "cashfree" | null;
  setSelectedMethod: React.Dispatch<
    React.SetStateAction<"wallet" | "cashfree" | null>
  >;
  onConfirm: () => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  selectedMethod,
  setSelectedMethod,
  onConfirm,
}) => {
  return (
    <section className="border-t border-[#2b2b2b] pt-8 space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <CreditCard size={20} className="text-army" />
        <h3 className="text-lg font-semibold tracking-widest uppercase">
          Select Payment Option
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => setSelectedMethod("wallet")}
          className={cn(
            "border p-4 text-sm uppercase cursor-pointer tracking-widest transition-all",
            selectedMethod === "wallet"
              ? "border-army bg-army/10 text-army shadow-[0_0_15px_rgba(139,169,137,0.2)]"
              : "border-[#2b2b2b] hover:border-army/40 text-gray-400"
          )}
        >
          Wallet + Coupon
        </button>
        <button
          onClick={() => setSelectedMethod("cashfree")}
          className={cn(
            "border p-4 text-sm uppercase cursor-pointer tracking-widest transition-all",
            selectedMethod === "cashfree"
              ? "border-army bg-army/10 text-army shadow-[0_0_15px_rgba(139,169,137,0.2)]"
              : "border-[#2b2b2b] hover:border-army/40 text-gray-400"
          )}
        >
          Pay via Cashfree
        </button>
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={onConfirm}
          disabled={!selectedMethod}
          className={cn(
            "px-8 py-3 font-semibold cursor-pointer uppercase tracking-wider transition-all",
            selectedMethod
              ? "bg-army text-black hover:bg-army/90"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          )}
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
};
