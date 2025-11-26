"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plus } from "lucide-react";

type Props = {
  onAddNew: () => void;
};

export const AddressEmptyStateMobile: React.FC<Props> = ({ onAddNew }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        bg-[#121212]/95 border border-[#2a2a2a] rounded-xl relative flex flex-col items-center justify-center text-center
        py-5 px-4 space-y-4
      "
    >
      {/* ✅ Soft Background Aura */}
      <div className="absolute inset-0 -z-10">
        <div className="w-40 h-40 bg-army/10 blur-3xl mx-auto mt-10 rounded-full" />
      </div>

      {/* ✅ Icon */}
      <div
        className="
          w-14 h-14 flex items-center justify-center rounded-full
          bg-army/15 border border-army/40 text-army
        "
      >
        <MapPin size={28} strokeWidth={1.4} />
      </div>

      {/* ✅ Text */}
      <div className="space-y-1 px-4">
        <h3 className="text-lg font-semibold text-white">
          No Saved Addresses
        </h3>
        <p className="text-[13px] text-white/60 leading-relaxed">
          Add a delivery address to continue with your checkout.
        </p>
      </div>

      {/* ✅ Full-Width Button */}
      <motion.button
        onClick={onAddNew}
        whileTap={{ scale: 0.96 }}
        className="
          w-full max-w-xs flex items-center justify-center gap-2
          px-4 py-3 rounded-md
          border border-army text-army text-[13px] font-medium uppercase
          tracking-wide active:scale-95
          transition-all duration-300
        "
      >
        <Plus size={15} />
        Add Address
      </motion.button>
    </motion.div>
  );
};

export default AddressEmptyStateMobile;
