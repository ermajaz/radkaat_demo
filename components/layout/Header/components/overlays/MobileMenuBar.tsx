"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    UserRound,
    ShoppingCart,
    Settings,
    HelpCircle,
    LogOut,
    ShoppingBasket,
    Ship,
    Sparkles,
    Users,
    MoveRight,
} from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoutConfirmModal from "./LogoutConfirmModal";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MobileMenuBar({ open, onClose }: Props) {
    const router = useRouter();
    const [logoutOpen, setLogoutOpen] = useState<boolean>(false);


    const menuItems = [
        { label: "Profile", icon: UserRound, href: "/profile" },
        { label: "My Orders", icon: ShoppingBasket, href: "/orders" },
        { label: "Cart", icon: ShoppingCart, href: "/cart" },
        { label: "Pre-Order", icon: Ship, href: "/preorder" },
        { label: "Settings", icon: Settings, href: "/settings" },
        { label: "Support", icon: HelpCircle, href: "/support/contact" },
    ];

    const specialItems = [
        {
            label: "Experiences",
            icon: Sparkles,
            href: "/experiences",
            bg: "bg-[linear-gradient(145deg,#1b1b1b_0%,#262320_100%)]",
            glow:
                "bg-[radial-gradient(circle,#FFC36A_0%,rgba(255,195,106,0)_60%)]",
        },
        {
            label: "Community",
            icon: Users,
            href: "/community",
            bg: "bg-[linear-gradient(145deg,#16161a_0%,#1d1f24_100%)]",
            glow:
                "bg-[radial-gradient(circle,#6AB8FF_0%,rgba(106,184,255,0)_60%)]",
        },
    ];

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
                        className="fixed inset-0 bg-superblack/80 backdrop-blur-md z-500"
                    />

                    {/* MAIN PANEL */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="
              fixed top-0 right-0
              w-full h-dvh
              bg-superblack
              z-600
              flex flex-col
              overflow-hidden
            "
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#2a2a2a]">
                            <p className="text-[12px] uppercase tracking-[0.28em] text-neutral-400">
                                Your Space
                            </p>
                            <button onClick={onClose} className="text-white/70">
                                ✕
                            </button>
                        </div>

                        {/* USER SECTION */}
                        <div className="px-6 py-3 border-b border-[#2a2a2a]">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-sandstorm/40">
                                    <Image
                                        src="/images/manali/rider-img.jpg"
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-white font-semibold">John Doe</p>
                                    <p className="text-white/60 text-xs mt-1">
                                        john.doe@example.com
                                    </p>
                                    <p className="text-sandstorm text-xs mt-1">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <button className="mt-4 w-full py-2.5 text-xs uppercase tracking-widest text-neutral-300 bg-white/5 border border-[#2a2a2a] rounded-lg">
                                Manage Account
                            </button>
                        </div>

                        {/* SPECIAL SECTION */}
                        <div className="px-6 py-4 space-y-3">
                            {specialItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.button
                                        key={item.label}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => {
                                            router.push(item.href);
                                            onClose();
                                        }}
                                        className={`
                      relative w-full h-14
                      flex items-center gap-4 px-4
                      rounded-xl border border-white/10
                      backdrop-blur-xl overflow-hidden
                      ${item.bg}
                    `}
                                    >
                                        <div
                                            className={`absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-24 blur-2xl opacity-30 ${item.glow}`}
                                        />

                                        <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/15 flex items-center justify-center">
                                            <Icon size={18} className="text-sandstorm" />
                                        </div>

                                        <div className="flex flex-col text-left">
                                            <span className="text-sm text-white font-medium">
                                                {item.label}
                                            </span>
                                            <span className="text-[11px] text-white/50">
                                                Discover & explore
                                            </span>
                                        </div>

                                        <span className="ml-auto text-white/80 text-xs"><MoveRight size={15} /></span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* MENU GRID (ONLY SCROLLABLE AREA) */}
                        <div
                            className="
                flex-1 overflow-y-auto
                grid grid-cols-2 gap-3
                px-6 py-4
                overscroll-contain
                scrollbar-none
                [@media(max-height:720px)]:px-4
                [@media(max-height:720px)]:gap-2
              "
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            {menuItems.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            router.push(item.href);
                                            onClose();
                                        }}
                                        className="
                      min-h-[90px]
                      bg-white/5 border border-[#2a2a2a]
                      backdrop-blur-xl rounded-xl
                      flex flex-col items-center justify-center gap-2
                      text-white
                    "
                                    >
                                        <Icon
                                            size={20}
                                            className="w-9 h-9 p-2 rounded-lg border border-[#2a2a2a] text-sandstorm"
                                        />
                                        <span className="text-[13px] text-center leading-tight">
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* LOGOUT */}
                        <button
                            onClick={() => setLogoutOpen(true)}
                            className="
                w-full py-4
                flex items-center justify-center gap-2
                text-sm font-semibold bg-rust
                border-t border-[#2a2a2a] text-white
              "
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </motion.div>
                </>
            )}
            <LogoutConfirmModal
                open={logoutOpen}
                onClose={() => setLogoutOpen(false)}
                onConfirm={() => {
                    setLogoutOpen(false);
                    onClose();

                    // 🔐 your logout logic here
                    // example:
                    // dispatch(logout());
                    // router.push("/login");
                }}
            />

        </AnimatePresence>
    );
}
