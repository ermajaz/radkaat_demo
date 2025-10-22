"use client";

import React from "react";
import { Wallet } from "lucide-react";

interface WalletSectionProps {
  walletAmount: number;
  setWalletAmount: React.Dispatch<React.SetStateAction<number>>;
  walletBalance: number;
}

export const WalletSection: React.FC<WalletSectionProps> = ({
  walletAmount,
  setWalletAmount,
  walletBalance,
}) => {
  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, ""); // Only digits
    const numeric = Math.min(Number(val), walletBalance);
    setWalletAmount(numeric);
  };

  return (
    <section className="border-t border-[#2b2b2b] pt-8">
      <div className="flex items-center gap-3 mb-4">
        <Wallet size={20} className="text-army" />
        <h3 className="text-lg font-semibold tracking-widest uppercase">Use Wallet Balance</h3>
      </div>

      <div className="max-w-md">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Available Balance:</span>
          <span className="text-army font-semibold">₹{walletBalance.toLocaleString()}</span>
        </div>

        <input
          type="text"
          value={walletAmount || ""}
          onChange={handleWalletChange}
          placeholder="Enter amount to use"
          className="w-full px-4 py-2 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-army outline-none tracking-wider"
        />
        <p className="text-xs text-gray-500 mt-2">
          You can use up to ₹{walletBalance.toLocaleString()} from your wallet.
        </p>
      </div>
    </section>
  );
};
