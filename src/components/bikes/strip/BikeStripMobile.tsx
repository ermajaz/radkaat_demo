"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Bike } from "lucide-react";

interface BikeStripMobileProps {
    name: string;
    model: string;
    onBuy?: () => void;
    onBookTestRide?: () => void;
}

const navItems = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "geometry", label: "Geometry" },
    { id: "experience", label: "Experience" },
    { id: "ride", label: "Ride" },
];

export default function BikeStripMobile({
    name,
    model,
    onBuy,
    onBookTestRide,
}: BikeStripMobileProps) {
    const [active, setActive] = useState("overview");
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const visible = navItems.find((item) => {
                const el = document.getElementById(item.id);
                if (!el) return false;
                const top = el.offsetTop - 120;
                const bottom = top + el.offsetHeight;
                return scrollY >= top && scrollY < bottom;
            });
            if (visible) setActive(visible.id);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    /* -- compute activeIndex somewhere above render -- */
    const activeIndex = Math.max(
        0,
        navItems.findIndex((it) => it.id === active)
    );

    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
        fixed bottom-0 left-0 z-100 w-full
        bg-[#0A0A0A]/85 backdrop-blur-2xl
        border-t border-[#E4D27C]/15
        shadow-[0_-6px_30px_rgba(0,0,0,0.5)]
        flex flex-col
      "
            style={{ WebkitBackdropFilter: "blur(16px)" }}
        >
            {/* Header Info + Buttons */}
            <div className="w-full px-5 py-3 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[#E4D27C] text-[13px] font-medium uppercase tracking-wide">
                        {name}
                    </span>
                    <span className="text-white text-[18px] font-bold leading-none">
                        {model}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        className="h-[38px] px-6! bg-linear-to-r from-[#E4D27C] to-[#CBB860] text-black text-[13px] font-semibold rounded-full shadow-[0_0_15px_rgba(228,210,124,0.25)] active:scale-95 transition-all"
                        onClick={onBuy}
                    >
                        <ShoppingBag className="w-4 h-4 mr-1.5" /> Buy
                    </Button>
                    <Button
                        variant="outline"
                        className="h-[38px] px-6! border-[#E4D27C]/40 text-[#E4D27C] text-[13px] rounded-full active:scale-95 transition-all"
                        onClick={onBookTestRide}
                    >
                        <Bike className="w-4 h-4 mr-1.5" /> Ride
                    </Button>
                </div>
            </div>

            {/* Liquid Tabs */}
            <div
                className="
    relative flex justify-around items-center
    py-3 px-3 border-t border-[#E4D27C]/10 
    text-[12px] font-medium uppercase tracking-wide
  "
            >
                {/* 🫧 Water Drop Background */}
                <motion.div
                    layoutId="activeBubble"
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                    }}
                    className="
      absolute top-1.5 bottom-1.5
      bg-sandstorm/25
      backdrop-blur-md rounded-full
      pointer-events-none
      shadow-[0_0_25px_rgba(228,210,124,0.15)]
    "
                    style={{
                        // Each tab’s usable width (minus total side padding)
                        width: `calc((100% - 24px) / ${navItems.length})`,
                        // Properly offset bubble inside the padded container
                        left: `calc(
        12px + (${activeIndex} * ((100% - 24px) / ${navItems.length}))
      )`,
                    }}
                />

                {navItems.map((item) => {
                    const isActive = active === item.id;
                    const isHovered = hovered === item.id;
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="
          relative z-10 flex flex-col items-center justify-center 
          w-[20%] text-center cursor-pointer transition-all
        "
                        >
                            <motion.span
                                className={`transition-all duration-300 ${isActive
                                        ? "text-[#E4D27C] font-semibold"
                                        : isHovered
                                            ? "text-white"
                                            : "text-gray-400"
                                    }`}
                            >
                                {item.label}
                            </motion.span>

                            {isActive && (
                                <motion.div
                                    layoutId="liquidUnderline"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className="
              w-6 h-1 rounded-full mt-0.5
              bg-[#E4D27C]/80
            "
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

        </motion.div>
    );
}
