"use client";

import React, { useState } from "react";

interface PaymentMethodsProps {
  onPay: () => void;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onPay }) => {
  const [coupon, setCoupon] = useState("");
  const [walletUsed, setWalletUsed] = useState(false);

  return (
    <div className="space-y-6">
      {/* Coupon Section */}
      <div>
        <label className="block text-sm text-gray-400 mb-2 uppercase">
          Apply Coupon
        </label>
        <div className="flex gap-2">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 px-3 py-2 bg-transparent border border-white/20 text-white focus:border-army outline-none"
          />
          <button className="px-4 py-2 bg-army text-black uppercase font-semibold">
            Apply
          </button>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="flex items-center justify-between border-t border-b border-white/10 py-4">
        <span className="text-sm uppercase tracking-wider text-gray-400">
          Use Wallet Balance
        </span>
        <input
          type="checkbox"
          checked={walletUsed}
          onChange={() => setWalletUsed(!walletUsed)}
          className="accent-army w-5 h-5"
        />
      </div>

      {/* Cashfree Section */}
      <div className="mt-6 text-center">
        <button
          onClick={onPay}
          className="w-full py-3 bg-army text-black uppercase tracking-wider font-semibold hover:bg-army/90 transition-all"
        >
          Proceed to Pay with Cashfree
        </button>
      </div>
    </div>
  );
};
