"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Address } from "./AddressListMobile";

interface AddressCardMobileProps {
  address: Address;
  isSelected: boolean;
  onSelect: () => void;
}

export default function AddressCardMobile({
  address,
  isSelected,
  onSelect,
}: AddressCardMobileProps) {
  return (
    <motion.div
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full p-4 rounded-lg border 
        bg-[#121212]/95 text-white
        active:bg-[#181818]
        transition
        ${isSelected ? "border-army" : "border-[#2a2a2a]"}
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-semibold">{address.fullName}</h3>

        {isSelected && (
          <CheckCircle2 size={18} className="text-army" />
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">
        {address.addressLine1}, {address.city}, {address.state} -{" "}
        {address.postalCode}
      </p>

      <p className="text-sm text-gray-500 mt-1">{address.phone}</p>

      {address.landmark && (
        <p className="text-[11px] text-gray-500 mt-1 italic">
          Landmark: {address.landmark}
        </p>
      )}

      {address.addressType && (
        <span className="
          inline-block mt-3 text-[10px] uppercase tracking-widest
          text-army border border-army/40 px-2 py-0.5 rounded
        ">
          {address.addressType}
        </span>
      )}
    </motion.div>
  );
}
