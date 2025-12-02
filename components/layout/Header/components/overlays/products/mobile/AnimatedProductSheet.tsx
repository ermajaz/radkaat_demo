"use client";
import { motion } from "framer-motion";
export default function AnimateProductSheet({
    open,
    onClose,
    children,
}: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-120"
            />

            {/* Bottom Sheet */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                }}
                className="
          fixed bottom-0 left-0 w-full h-[92vh]
          z-130 rounded-t-[28px]
          bg-[#0d0d0d] shadow-xl overflow-hidden
        "
            >
                {/* Pull handle */}
                <div className="w-full flex justify-center py-3">
                    <div
                        onClick={onClose}
                        className="w-10 h-1.5 rounded-full bg-white/20"
                    />
                </div>

                {/* Content */}
                <div className="h-[calc(92vh-40px)] overflow-y-auto custom-scroll">
                    {children}
                </div>
            </motion.div>
        </>
    );
}