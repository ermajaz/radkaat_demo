"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, Package, ShoppingBag, Heart, Settings, HelpCircle, LogOut, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MobileMenuBar({ open, onClose }: Props) {
    const router = useRouter();

    const menuItems = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "My Orders", icon: Package, href: "/orders" },
  { label: "Cart", icon: ShoppingBag, href: "/cart" },
  { label: "Pre-Order", icon: Clock, href: "/preorder" },
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Support", icon: HelpCircle, href: "/support" },
];

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* ✅ BACKDROP */}
                    <motion.div
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-superblack/80 backdrop-blur-md z-10"
                    />

                    {/* ✅ RIGHT SLIDE FULLSCREEN PANEL */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="fixed top-13 right-0 bottom-0 w-full max-w-screen bg-superblack z-500 flex flex-col"
                    >
                        {/* ✅ TOP BAR FOR FULLSCREEN MENU */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="
    flex items-center justify-between
    px-5 py-4
    border-b border-white/10
    bg-superblack
  "
                        >
                            {/* Subtle Title */}
                            <p className="text-[12px] uppercase tracking-[0.28em] text-neutral-400">
                                Your Space
                            </p>

                            {/* ✅ Close Button (Elegant Chevron) */}
                            <button onClick={onClose}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    className="text-white/70"
                                >
                                    <path
                                        d="M6 9l6 6 6-6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </motion.div>


                        {/* ✅ USER SECTION */}
                        <div className="relative px-6 py-7 border-b border-white/10">
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-sandstorm/40">
                                    <Image
                                        src="/images/manali/rider-img.jpg"
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* User Info */}
                                <div className="flex flex-col">
                                    <p className="text-white font-semibold text-base leading-tight">
                                        John Doe
                                    </p>

                                    <p className="text-white/60 text-xs mt-1">
                                        john.doe@example.com
                                    </p>

                                    {/* ✅ Mobile Number */}
                                    <p className="text-sandstorm text-xs mt-1 font-medium tracking-wide">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            {/* ✅ "Manage Account" CTA */}
                            <button
                                className="
      mt-5 w-full text-center py-3
      bg-white/5 border border-white/10
      rounded-lg text-xs text-neutral-300
      tracking-[0.18em] uppercase
      hover:bg-white/10 transition
    "
                            >
                                Manage Account
                            </button>
                        </div>


                        {/* ✅ MENU GRID */}
                        <div className="grid grid-cols-2 gap-4 p-6 overflow-y-auto flex-1">
                            {menuItems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            router.push(item.href);
                                            onClose();
                                        }}
                                        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-5 flex flex-col items-center justify-center gap-3 text-white hover:bg-white/10 transition"
                                    >
                                        <Icon size={22} className="w-10 h-10 p-2 text-sandstorm border border-white/10 rounded-lg" />
                                        <span className="text-sm">{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ✅ LOGOUT CTA */}
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            whileHover={{ opacity: 1 }}
                            // onClick={() => {
                            //     onClose();
                            //     router.push("/auth/logout");
                            // }}
                            className="
    relative w-full py-4
    flex items-center justify-center gap-2
    text-sm font-semibold tracking-wide
    text-red-400
    bg-white/3
    backdrop-blur-xl
    border-t border-white/10
  "
                        >
                            {/* Glow Pulse */}
                            <span className="
    absolute inset-0
    bg-[radial-gradient(circle,rgba(255,80,80,0.05) 0%,rgba(255,80,80,0) 70%)]
    opacity-60 blur-xl
    pointer-events-none
  " />

                            {/* Icon */}
                            <LogOut size={18} className="text-red-400" />

                            {/* Label */}
                            Logout
                        </motion.button>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
