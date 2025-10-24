"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmLabel = "Yes, Continue",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🩶 Fullscreen Overlay */}
          <motion.div
            className="fixed w-screen h-[calc(100vh+80px)] inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onCancel}
          />

          {/* 🪩 Centered Dialog */}
          <motion.div
            className={cn(
              "fixed top-[calc(50vh-40px)] left-1/2 z-[1001] -translate-x-1/2 -translate-y-[calc(50vh+40px)]",
              "w-[90%] sm:w-96 p-6",
              "bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl",
              "border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center"
            )}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: "50vh", scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* ✨ Title */}
            <motion.h3
              className="text-white text-lg font-semibold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>

            {/* 💬 Description */}
            <motion.p
              className="text-white/70 text-sm mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {description}
            </motion.p>

            {/* 🧭 Buttons */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                onClick={onCancel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm cursor-pointer bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all"
              >
                {cancelLabel}
              </motion.button>
              <motion.button
                onClick={onConfirm}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 18px rgba(255,255,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm cursor-pointer bg-white text-black font-semibold transition-all"
              >
                {confirmLabel}
              </motion.button>
            </div>

            {/* 🌫 Glow Animation Layer */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
