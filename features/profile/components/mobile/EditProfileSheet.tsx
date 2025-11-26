"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EditProfileSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-[#121212] rounded-t-2xl p-5 z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold">Edit Profile</h3>
              <button onClick={onClose}>
                <X size={20} className="text-white/60" />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {["Full Name", "Phone", "Gender"].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-xs text-white/60">{label}</label>
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white"
                    placeholder={`Enter ${label}`}
                  />
                </div>
              ))}
            </div>

            <button className="mt-6 w-full py-3 bg-sandstorm text-black rounded-md font-semibold">
              Save Changes
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
