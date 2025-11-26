"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AddressCardMobile from "./AddressCardMobile";

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

interface AddressListMobileProps {
  addresses: Address[];
  selectedId?: string | null;
  onSelect: (address: Address) => void;
  onAddNew: () => void;
}

export default function AddressListMobile({
  addresses,
  selectedId,
  onSelect,
  onAddNew,
}: AddressListMobileProps) {
  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence>
        {addresses.map((address) => (
          <motion.div
            key={address.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <AddressCardMobile
              address={address}
              isSelected={selectedId === address.id}
              onSelect={() => onSelect(address)}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ✅ Add New Button (Mobile-friendly) */}
      <button
        onClick={onAddNew}
        className="
          flex items-center justify-center gap-2
          w-full py-4 rounded-lg border border-dashed border-army/40
          text-army text-sm uppercase tracking-wide
          active:scale-95 transition
        "
      >
        <Plus size={18} />
        Add New Address
      </button>
    </div>
  );
}
