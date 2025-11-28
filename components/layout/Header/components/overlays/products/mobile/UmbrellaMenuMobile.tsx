"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Boxes, Sparkles, Users } from "lucide-react";
import { useEffect } from "react";

export default function UmbrellaMenuMobile({
    onClose,
    onProductsOpen,
    anchorX,
    anchorY,
}: {
    onClose: () => void;
    onProductsOpen: () => void;
    anchorX: number;
    anchorY: number;
}) {
    const menu = [
        { id: "products", icon: Boxes, color: "#E4D27C", action: onProductsOpen },
        { id: "experiences", icon: Sparkles, color: "#36D7B7", href: "/experiences" },
        { id: "community", icon: Users, color: "#FF5E9E", href: "/community" },
    ];

    useEffect(() => {
        const close = () => onClose();
        window.addEventListener("scroll", close, { passive: true });
        return () => window.removeEventListener("scroll", close);
    }, [onClose]);

    // small arc above icon
    const radius = 70;
    const angles = [-90, -50, -130]; // nice arc layout

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="bg"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.28 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-110"
            />

            {/* Anchor container */}
            <motion.div
                key="anchor"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                style={{ left: anchorX, top: anchorY }}
                className="fixed z-120 pointer-events-none w-0 h-0"
            >
                {menu.map((item, i) => {
                    const Icon = item.icon;
                    const deg = angles[i];
                    const rad = (deg * Math.PI) / 180;
                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    return (
                        <motion.button
                            key={item.id}
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
                            animate={{ x, y, opacity: 1, scale: 1 }}
                            exit={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: i * 0.04,
                            }}
                            onClick={() => {
                                if (item.href) window.location.href = item.href;
                                else item?.action && item.action();
                                onClose();
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_0_14px_rgba(0,0,0,0.45)] border border-white/10"
                                style={{ background: `${item.color}22` }}
                            >
                                <Icon size={22} color={item.color} />
                            </div>
                        </motion.button>
                    );
                })}
            </motion.div>
        </AnimatePresence>
    );
}
