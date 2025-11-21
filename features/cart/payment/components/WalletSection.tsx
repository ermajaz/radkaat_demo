"use client";

import React from "react";
import { Wallet } from "lucide-react";

interface Props {
  walletAmount: number;
  setWalletAmount: (v: number) => void;
  walletBalance: number;
}

export const WalletSection: React.FC<Props> = ({
  walletAmount,
  setWalletAmount,
  walletBalance,
}) => {
  const handleChange = (e: any) => {
    const num = Number(e.target.value.replace(/\D/g, ""));
    setWalletAmount(Math.min(num, walletBalance));
  };

  return (
    <section className="border-t border-[#2b2b2b] pt-8">
      <div className="flex items-center gap-3 mb-4">
        <Wallet size={20} className="text-army" />
        <h3 className="text-lg font-semibold uppercase tracking-widest">
          Use Wallet Balance
        </h3>
      </div>

      <div className="max-w-md">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Available:</span>
          <span className="text-army">₹{walletBalance.toLocaleString()}</span>
        </div>

        <input
          value={walletAmount || ""}
          onChange={handleChange}
          placeholder="Enter amount"
          className="w-full px-4 py-2 bg-transparent border border-white/20 text-white outline-none"
        />
      </div>
    </section>
  );
};
