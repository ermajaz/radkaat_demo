"use client";

import { motion } from "framer-motion";
import { Home, Search, ShoppingCart, UserRound, Grid2X2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MobileMenuBar from "./overlays/MobileMenuBar";
import SearchOverlayMobile from "./overlays/SearchOverlayMobile";

const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Grid2X2, label: "Products" },
    { icon: Search, label: "Explore" },
    { icon: ShoppingCart, label: "Cart", href: "/cart" },
    { icon: UserRound, label: "Profile" },
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
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState("Home");
    const [openSearch, setOpenSearch] = useState(false);
    const cartCount = 3;

    // ✅ Auto-update active tab based on URL
    useEffect(() => {
        if (
            pathname === "/profile" ||
            pathname.startsWith("/orders") ||
            pathname.startsWith("/support")
        ) {
            setActive("Profile");
            return;
        }

        if (pathname === "/cart") {
            setActive("Cart");
            return;
        }

        if (pathname === "/") {
            setActive("Home");
            return;
        }

        if (pathname.startsWith("/products")) {
            setActive("Products");
            return;
        }
    }, [pathname]);

    const handlePress = (item: any) => {
        setActive(item.label);

        if (item.href) {
            router.push(item.href);
            return;
        }

        if (item.label === "Profile") {
            onOpen();
            return;
        }

        if (item.label === "Explore") {
            setOpenSearch(true);
            return;
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
          border border-[#2a2a2a]
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
                            onClick={() => handlePress(item)}
                            className="relative flex items-center justify-center w-10 h-10"
                        >
                            {/* ✅ Active State */}
                            {isActive ? (
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
                            ) : (
                                <motion.div animate={{ scale: 1 }} whileTap={{ scale: 0.86 }}>
                                    <Icon size={22} className="text-white/75" />
                                </motion.div>
                            )}

                            {/* ✅ CART BADGE */}
                            {item.label === "Cart" && cartCount > 0 && (
                                <span
                                    className="
        absolute -top-[5px] -right-[5px]
        bg-army text-black
        rounded-full
        h-5 min-w-5
        flex items-center justify-center
        text-[12px] font-bold
        border border-black/20
      "
                                >
                                    {cartCount > 9 ? "9+" : cartCount}
                                </span>
                            )}
                        </button>

                    );
                })}
            </motion.nav>

            {/* ✅ Profile Sheet */}
            <MobileMenuBar
                open={open}
                onClose={() => {
                    onClose();
                    setActive("Home");
                }}
            />

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
