"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Bike } from "lucide-react";
import { TableBikeName, TableModelName } from "../geometry/utils/geometry.types";

interface BikeStripMobileProps {
    name: string;
    model: string;
    onBuy?: () => void;
    onBookTestRide?: () => void;
    selectedBike: TableBikeName;
    selectedModel: TableModelName;
}

const navItems = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "geometry", label: "Geometry" },
    { id: "bike-config", label: "Configure" },
    { id: "ride", label: "Ride" },
];

export default function BikeStripMobile({
    name,
    model,
    onBuy,
    onBookTestRide,
    selectedBike,
    selectedModel
}: BikeStripMobileProps) {

    const [active, setActive] = useState("overview");
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const visible = navItems.find((item) => {
                const el = document.getElementById(item.id);
                if (!el) return false;
                const top = el.offsetTop - 140;
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
            const y = el.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const activeIndex = Math.max(0, navItems.findIndex((it) => it.id === active));

    return (
        <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
                fixed bottom-0 left-0 z-50 w-full
                bg-[#121212]/80 backdrop-blur-2xl
                border-t border-[#2a2a2a]
                shadow-[0_-8px_35px_rgba(0,0,0,0.7)]
                flex flex-col
                rounded-t-3xl
            "
            style={{ WebkitBackdropFilter: "blur(18px)" }}
        >

            {/* Header */}
            <div className="w-full px-6 py-4 flex items-center justify-between">

                <div className="flex flex-col uppercase">
                    <span className="text-[#E4D27C] text-[13px] tracking-wider font-semibold">
                        {selectedBike}
                    </span>
                    <span className="text-white text-[19px] font-extrabold leading-none">
                        {selectedModel}
                    </span>
                </div>

                <div className="flex items-center gap-3">

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={onBuy}
                        className="
                            h-10 px-5 rounded-full
                            bg-sandstorm
                            text-black text-[13px] font-semibold
                            flex items-center gap-1
                        "
                    >
                        <ShoppingBag className="w-4 h-4" /> Buy
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={onBookTestRide}
                        className="
                            h-10 px-5 rounded-full border border-sandstorm/50
                            text-[#E4D27C] bg-transparent
                            font-semibold text-[13px] flex items-center gap-1
                        "
                    >
                        <Bike className="w-4 h-4" /> Ride
                    </motion.button>

                </div>
            </div>

            {/* Liquid Navigation */}
            <div className="
                relative flex justify-between items-center
                py-3 px-4 border-t border-sandstorm/20
                text-[12px] font-medium tracking-wide uppercase
            ">

                {/* Magnetic liquid indicator */}
                <motion.div
                    layoutId="liquidBubble"
                    transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                    }}
                    className="
                        absolute top-1.5 bottom-1.5
                        bg-sandstorm/20
                        backdrop-blur-xl rounded-full
                    "
                    style={{
                        width: `calc((100% - 32px) / ${navItems.length})`,
                        left: `calc(16px + ${activeIndex} * ((100% - 32px) / ${navItems.length}))`,
                    }}
                />

                {/* Tabs */}
                {navItems.map((item) => {
                    const isActive = active === item.id;
                    const isHover = hovered === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative z-10 w-[20%] flex flex-col items-center"
                        >

                            <motion.span
                                className={`
                                    transition-all duration-300
                                    ${isActive ? "text-sandstorm" : isHover ? "text-white" : "text-gray-400"}
                                `}
                            >
                                {item.label}
                            </motion.span>

                            {isActive && (
                                <motion.div
                                    layoutId="goldUnderline"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 28,
                                    }}
                                    className="
                                        w-7 h-1 rounded-full mt-1
                                        bg-[#E4D27C]
                                        shadow-[0_0_10px_rgba(228,210,124,0.4)]
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
