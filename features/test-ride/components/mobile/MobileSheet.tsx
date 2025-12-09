// components/test-ride/mobile/MobileSheet.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";

interface MobileSheetProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  initialHeight?: number; // collapsed height
  expandedHeight?: number; // expanded height
  className?: string;
}

export default function MobileSheet({
  children,
  open,
  onClose,
  initialHeight = 220,
  expandedHeight = 720,
  className = "",
}: MobileSheetProps) {
  const y = useMotionValue(0);

  useEffect(() => {
    // reset on mount/open
    y.set(0);
  }, [open]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    // swipe down quickly or drag below threshold -> close
    if (velocity > 800 || offset > 120) {
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`absolute left-0 right-0 bottom-0 rounded-t-3xl bg-[#0b0b0b]/90 border-t border-white/6 ${className}`}
        style={{ maxHeight: expandedHeight, height: open ? "auto" : initialHeight }}
      >
        {/* Drag handle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 9999 }}
          dragElastic={0.2}
          style={{ y }}
          onDragEnd={handleDragEnd}
          className="px-6 pt-3 pb-2"
        >
          <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-3" />
          <div className="px-4 pb-6 overflow-y-auto" style={{ maxHeight: expandedHeight - 64 }}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
