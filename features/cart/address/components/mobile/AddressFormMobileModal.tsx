"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AddressFormMobile, { AddressData } from "./AddressFormMobile";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AddressData) => void;
}

export default function AddressFormMobileModal({
  open,
  onClose,
  onSubmit,
}: Props) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* ✅ BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#121212]/95 z-9998"
          />

          {/* ✅ FULLSCREEN PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed inset-0 z-9999
              bg-superblack
              overflow-y-auto flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 h-14 border-b border-[#2a2a2a]">
              <span className="text-sm  text-white font-semibold tracking-wide uppercase">
                Add New Address
              </span>

              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM */}
            <div className="flex-1 pb-24">
              <AddressFormMobile
                onSubmit={(data) => {
                  onSubmit(data);
                  onClose();
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
