"use client";

import { motion } from "framer-motion";
import { Home, Grid, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import MobileMenuBar from "./overlays/MobileMenuBar";
import SearchOverlayMobile from "./overlays/SearchOverlayMobile";

const items = [
    { icon: Home, label: "Home" },
    { icon: Grid, label: "Products" },
    { icon: Search, label: "Explore" },
    { icon: ShoppingBag, label: "Cart" },
    { icon: User, label: "Profile" },
];

export default function BottomNavMobile({
    open,
    onOpen,
    onClose,
}: {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}) {
    const [active, setActive] = useState("Home");
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const handlePress = (label: string) => {
        setActive(label);

        if (label === "Profile") onOpen();

        if (label === "Explore") {
            setOpenSearch(true);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
          fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          w-[94%] h-[70px]
          rounded-[34px]
          bg-transparent
          backdrop-blur-xl backdrop-saturate-200
          border border-white/10
          shadow-[0_25px_60px_rgba(0,0,0,0.65)]
          flex items-center justify-between px-7
        "
            >
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.label;

                    return (
                        <button
                            key={item.label}
                            onClick={() => handlePress(item.label)}
                            className="relative flex items-center justify-center w-10 h-10"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="water-drop"
                                    initial={{ scale: 0.85 }}
                                    animate={{ scale: 1.18 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                    className="
                    absolute w-16 h-10 rounded-[26px]
                    bg-[radial-gradient(circle,rgba(255,204,102,0.04)_30%,rgba(255,204,102,0.1)_100%,rgba(255,204,102,0.6)_100%)]
                    border border-sandstorm/40
                    flex items-center justify-center
                  "
                                >
                                    <Icon size={20} className="text-sandstorm" />
                                </motion.div>
                            )}

                            {!isActive && (
                                <motion.div animate={{ scale: 1 }} whileTap={{ scale: 0.86 }}>
                                    <Icon size={22} className="text-white/75" />
                                </motion.div>
                            )}
                        </button>
                    );
                })}
            </motion.nav>

            {/* ✅ Profile Sheet */}
            <MobileMenuBar open={open} onClose={() => { onClose(); setActive("Home"); }} />

            {/* ✅ Search Sheet */}
            <SearchOverlayMobile
                open={openSearch}
                onClose={() => {
                    setOpenSearch(false);
                    setActive("Home");
                }}
            />
        </>
    );
}
