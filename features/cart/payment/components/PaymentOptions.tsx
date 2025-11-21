"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  selectedMethod: "wallet" | "cashfree" | null;
  setSelectedMethod: (v: any) => void;
  onConfirm: () => void;
}

export const PaymentOptions: React.FC<Props> = ({
  selectedMethod,
  setSelectedMethod,
  onConfirm,
}) => {
  return (
    <section className="border-t border-[#2b2b2b] pt-8 space-y-6">
      <div className="flex items-center gap-3">
        <CreditCard size={20} className="text-army" />
        <h3 className="text-lg font-semibold uppercase tracking-widest">
          Select Payment Option
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => setSelectedMethod("wallet")}
          className={cn(
            "p-4 border uppercase text-sm tracking-widest",
            selectedMethod === "wallet"
              ? "border-army text-army bg-army/10"
              : "border-[#333] text-gray-400"
          )}
        >
          Wallet + Coupon
        </button>

        <button
          onClick={() => setSelectedMethod("cashfree")}
          className={cn(
            "p-4 border uppercase text-sm tracking-widest",
            selectedMethod === "cashfree"
              ? "border-army text-army bg-army/10"
              : "border-[#333] text-gray-400"
          )}
        >
          Cashfree
        </button>
      </div>

      <button
        onClick={onConfirm}
        disabled={!selectedMethod}
        className={cn(
          "px-8 py-3 uppercase tracking-widest font-semibold",
          selectedMethod
            ? "bg-army text-black"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        )}
      >
        Proceed to Payment
      </button>
    </section>
  );
};
