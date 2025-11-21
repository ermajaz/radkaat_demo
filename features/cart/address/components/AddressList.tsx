"use client";

import React from "react";
import { motion } from "framer-motion";
import { AddressCard } from "./AddressCard";
import { Plus } from "lucide-react";

/** Shared Address type */
export interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  landmark?: string;
  alternatePhone?: string;
  addressType?: "Home" | "Office" | "Other";
}

interface AddressListProps {
  addresses: Address[];
  selectedId?: string | null;
  onSelect: (address: Address) => void;
  onAddNew: () => void;
}

export const AddressList: React.FC<AddressListProps> = ({
  addresses,
  selectedId,
  onSelect,
  onAddNew,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/* Address Cards */}
      {addresses.map((address) => (
        <motion.div
          key={address.id}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="h-full"
        >
          <AddressCard
            address={address}
            isSelected={selectedId === address.id}
            onSelect={() => onSelect(address)}
          />
        </motion.div>
      ))}

      {/* Add New Address Card */}
      <motion.button
        onClick={onAddNew}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(139,169,137,0.25)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="
          relative flex flex-col items-center justify-center gap-3 
          border border-dashed border-army/40 text-army 
          h-full min-h-[220px] md:min-h-60
          bg-linear-to-b from-[#111] to-[#0a0a0a]
          hover:bg-army/10 transition-all duration-300 
          cursor-pointer group overflow-hidden
        "
      >
        {/* Glow on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-linear-to-tr from-army/5 via-transparent to-army/10 blur-xl"
        />

        {/* Icon */}
        <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full border border-army/40 bg-army/10 group-hover:bg-army/20 transition-all duration-300">
          <Plus size={26} strokeWidth={1.6} />
        </div>

        {/* Text */}
        <span className="relative z-10 uppercase text-xs font-medium tracking-[0.25em] group-hover:text-army transition-colors duration-300">
          Add New Address
        </span>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "40%" }}
          transition={{ duration: 0.4 }}
          className="relative z-10 h-0.5 bg-army rounded-full"
        />
      </motion.button>
    </motion.div>
  );
};
