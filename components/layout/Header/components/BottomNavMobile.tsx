"use client";

import { motion } from "framer-motion";
import { Home, Search, ShoppingCart, UserRound, Grid2X2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import MobileMenuBar from "./overlays/MobileMenuBar";
import SearchOverlayMobile from "./overlays/SearchOverlayMobile";
import ProductsOverlayMobile from "./overlays/products/mobile/ProductOverlayMobile";

import { MODEL_DETAILS } from "./overlays/products/utils/product-overlay-data";
import AnimateProductSheet from "./overlays/products/mobile/AnimatedProductSheet";
import { useScroll } from "@/hooks/useScroll";


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
    const { direction } = useScroll();
    const [active, setActive] = useState("Home");
    const [openSearch, setOpenSearch] = useState(false);

    const [productSheetOpen, setProductSheetOpen] = useState(false);

    const modelDetails = MODEL_DETAILS["serow"];
    const [activeVariant, setActiveVariant] = useState(
        modelDetails?.colors?.[0] ?? ""
    );

    const cartCount = 3;

    /* ---------------------------------------------
       AUTO SET ACTIVE
    --------------------------------------------- */
    useEffect(() => {
        if (pathname === "/") return setActive("Home");
        if (pathname.startsWith("/cart")) return setActive("Cart");
        if (pathname.startsWith("/profile")) return setActive("Profile");
    }, [pathname]);

    /* ---------------------------------------------
        HANDLE PRESS
    --------------------------------------------- */

    const handlePress = (item: any) => {
        setActive(item.label);

        if (item.href) return router.push(item.href);

        if (item.label === "Profile") return onOpen();

        if (item.label === "Explore") {
            setOpenSearch(true);
            return;
        }

        if (item.label === "Products") {
            setProductSheetOpen(true);
            return;
        }
    };

    return (
        <>
            {/* 🌟 Bottom Navigation */}
            <motion.nav
                initial={{ y: 90, opacity: 0 }}
                animate={{
                    y: direction === "down" ? 100 : 0,
                    opacity: direction === "down" ? 0 : 1,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
                className="
      fixed bottom-4 left-1/2 -translate-x-1/2 z-50
      w-[94%] h-[70px]
      rounded-[34px]
      bg-transparent backdrop-blur-xl
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
                            {isActive ? (
                                <motion.div
                                    layoutId="water-drop"
                                    animate={{ scale: 1.18 }}
                                    className="
                    absolute w-16 h-10 rounded-[26px]
                    bg-[radial-gradient(circle,rgba(255,204,102,0.05)_30%,rgba(255,204,102,0.1)_100%)]
                    border border-sandstorm/40 flex items-center justify-center
                  "
                                >
                                    <Icon size={20} className="text-sandstorm" />
                                </motion.div>
                            ) : (
                                <Icon size={22} className="text-white/75" />
                            )}

                            {item.label === "Cart" && cartCount > 0 && (
                                <span
                                    className="
                    absolute -top-[5px] -right-[5px]
                    bg-army text-black rounded-full
                    h-5 min-w-5 flex items-center justify-center
                    text-[12px] font-bold
                  "
                                >
                                    {cartCount > 9 ? "9+" : cartCount}
                                </span>
                            )}
                        </button>
                    );
                })}
            </motion.nav>

            {/* 🌟 Profile Sheet */}
            <MobileMenuBar open={open} onClose={onClose} />

            {/* 🌟 Search Overlay */}
            <SearchOverlayMobile
                open={openSearch}
                onClose={() => setOpenSearch(false)}
            />

            {/* 🌟 PRODUCT FULL BOTTOM SHEET */}
            <AnimateProductSheet
                open={productSheetOpen}
                onClose={() => {
                    setProductSheetOpen(false);
                    setActive("Home");
                }}
            >
                <ProductsOverlayMobile
                    onClose={() => {
                        setProductSheetOpen(false);
                        setActive("Home");
                    }}
                    details={modelDetails}
                    activeVariant={activeVariant}
                    setActiveVariant={setActiveVariant}
                />
            </AnimateProductSheet>
        </>
    );
}