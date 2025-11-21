"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Address } from "./AddressList";

interface AddressCardProps {
  address: Address;
  isSelected: boolean;
  onSelect: () => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  address,
  isSelected,
  onSelect,
}) => {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`
        relative cursor-pointer border p-6 md:p-7 rounded-none
        bg-linear-to-b from-[#111] to-[#0a0a0a] overflow-hidden
        transition-all duration-500 group
        ${
          isSelected
            ? "border-army shadow-[0_0_25px_rgba(139,169,137,0.3)]"
            : "border-[#2b2b2b]"
        }
      `}
    >
      {/* Animated Check Icon */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 text-army"
        >
          <CheckCircle2 size={22} strokeWidth={1.6} />
        </motion.div>
      )}

      {/* Address Details */}
      <div className="relative z-10 space-y-2">
        <h3 className="font-semibold text-lg text-white tracking-wide">
          {address.fullName}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {address.addressLine1}, {address.city}, {address.state} -{" "}
          {address.postalCode}
        </p>
        <p className="text-sm text-gray-500">{address.phone}</p>

        {address.landmark && (
          <p className="text-xs text-gray-500 italic">
            Landmark: {address.landmark}
          </p>
        )}

        {address.addressType && (
          <span className="text-[10px] uppercase tracking-widest text-army border border-army/40 px-2 py-0.5 mt-2 inline-block">
            {address.addressType}
          </span>
        )}
      </div>

      {/* Subtle Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-army/10 to-transparent blur-md"
      />
    </motion.div>
  );
};
