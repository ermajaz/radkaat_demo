"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plus } from "lucide-react";

type Props = {
  onAddNew: () => void;
};

export const AddressEmptyState: React.FC<Props> = ({ onAddNew }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative flex flex-col items-center justify-center text-center 
        py-24 px-6 space-y-6 overflow-hidden
      "
    >
      {/* ✨ Background Glow Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-army/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-army/5 blur-[160px] rounded-full" />

      {/* 📍 Animated Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          w-20 h-20 flex items-center justify-center rounded-full 
          bg-linear-to-br from-army/30 to-transparent border border-army/50
          text-army shadow-[0_0_25px_rgba(139,169,137,0.25)]
        "
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <MapPin size={34} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* 📝 Text */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-2xl font-semibold tracking-wide text-white">
          No Saved Addresses Yet
        </h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Add a new shipping address to proceed with your order.
          We’ll make sure your next ride gets delivered smoothly.
        </p>
      </div>

      {/* ➕ Add Address Button */}
      <motion.button
        onClick={onAddNew}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          mt-6 flex items-center gap-2 px-6 py-3 
          border border-army text-army uppercase text-sm font-medium tracking-wider 
          cursor-pointer 
          transition-all duration-300 relative overflow-hidden
        "
      >
        <Plus size={16} />
        Add New Address

        {/* Glow Line Effect */}
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          className="
            absolute inset-0 bg-linear-to-r from-transparent via-army/20 to-transparent
            blur-md
          "
        />
      </motion.button>
    </motion.div>
  );
};
