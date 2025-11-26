"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BikeProfile } from "@/types/bikeComparison";

export default function ProfileCarouselMobile({
    profiles,
    selectedBikes,
    onSelect,
}: {
    profiles: BikeProfile[];
    selectedBikes: string[];
    onSelect: (v: string[]) => void;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const handleSelect = (p: BikeProfile, index: number) => {
        const active = selectedBikes.includes(p.title);

        // ✅ Remove if already active
        if (active) {
            onSelect(selectedBikes.filter((b) => b !== p.title));
            return;
        }

        // ✅ Add without reordering existing ones
        if (selectedBikes.length < 3) {
            onSelect([...selectedBikes, p.title]);
        }
    };


    return (
        <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-3 py-5 hide-scrollbar snap-x snap-mandatory"
        >
            {profiles.map((p, i) => {
                const active = selectedBikes.includes(p.title);

                return (
                    <motion.button
                        key={p.id}
                        ref={(el) => {
                            itemRefs.current[i] = el;
                        }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => handleSelect(p, i)}
                        className={`
              snap-center shrink-0 px-3 py-2 rounded-lg border
              w-[180px] text-left transition-all
              ${active
                                ? "bg-sandstorm text-black border-sandstorm"
                                : "bg-[#121212]/95 border-[#2a2a2a] text-white/80"}
            `}
                    >
                        <p className="text-sm font-extrabold leading-tight">{p.title}</p>
                        <p className="text-[12px] opacity-60 mt-1 font-medium">{p.level}</p>
                    </motion.button>
                );
            })}
        </div>
    );
}
