"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LogOut, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutConfirmModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-800"
          />

          {/* MODAL */}
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="
              fixed bottom-10 left-1/2 -translate-x-1/2
              w-[92%] max-w-sm
              bg-[#0f0f0f]
              border border-white/10
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.75)]
              z-810
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <LogOut size={18} className="text-red-400" />
                </div>
                <p className="text-white font-medium text-sm">
                  Confirm Logout
                </p>
              </div>

              <button onClick={onClose} className="text-white/60">
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="px-5 py-4">
              <p className="text-white/80 text-sm leading-relaxed">
                Are you sure you want to logout?
              </p>
              <p className="text-white/40 text-xs mt-1">
                You will need to login again to access your account.
              </p>
            </div>

            {/* Actions */}
            <div className="px-4 pb-4 flex gap-3">
              <button
                onClick={onClose}
                className="
                  flex-1 py-3
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  text-white/80 text-sm
                  active:scale-95
                  transition
                "
              >
                No
              </button>

              <button
                onClick={onConfirm}
                className="
                  flex-1 py-3
                  rounded-xl
                  bg-red-500/15
                  border border-red-500/30
                  text-red-400 text-sm font-semibold
                  active:scale-95
                  transition
                "
              >
                Yes, Logout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
