"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

interface Props {
    contents: { title: string }[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

export const StorySidebarMobile: React.FC<Props> = ({
    contents,
    activeIndex,
    onSelect,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    // Smooth auto-scroll to center the active tab
    useEffect(() => {
        const container = containerRef.current;
        const activeButton = buttonRefs.current[activeIndex];
        if (!container || !activeButton) return;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        const offset =
            buttonRect.left -
            containerRect.left -
            containerRect.width / 2 +
            buttonRect.width / 2;

        container.scrollTo({
            left: container.scrollLeft + offset,
            behavior: "smooth",
        });
    }, [activeIndex]);


    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
        sticky top-0 z-40 
        flex overflow-x-auto gap-2 p-2.5 sm:p-3 rounded-lg 
        border border-[#E4D27C]/10
        bg-[#141414]/50 
        backdrop-blur-xl 
        scrollbar-hide
        supports-backdrop-filter:bg-[#141414]/40
      "
            style={{
                WebkitBackdropFilter: "blur(15px)",
                backdropFilter: "blur(15px)",
                scrollBehavior: "smooth",
            }}

        >
            {contents.map((c, i) => {
                const isActive = activeIndex === i;
                return (
                    <motion.button
                        key={i}
                        ref={(el) => {
                            if (el) buttonRefs.current[i] = el;
                        }}
                        onClick={() => onSelect(i)}
                        whileTap={{ scale: 0.96 }}
                        className={cn(
                            "relative whitespace-nowrap px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-300",
                            isActive
                                ? "bg-linear-to-r from-sandstorm/40 to-sandstorm/20 text-sandstorm"
                                : "text-stone-300 hover:text-sandstorm/90 hover:bg-sandstorm/5 border border-stone/10"
                        )}
                        style={{
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            boxShadow: isActive
                                ? "inset 0 0 15px rgba(228,210,124,0.3), 0 0 20px rgba(228,210,124,0.25)"
                                : "0 0 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {c.title}

                        {/* Active glowing ring */}
                        {isActive && (
                            <motion.span
                                layoutId="activeTabGlow"
                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                className="
                  absolute inset-0 rounded-lg
                  border border-sandstorm
                "
                            />
                        )}
                    </motion.button>
                );
            })}
        </motion.div>
    );
};
