"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileVariantSelector from "./MobileVariantSelector";
import MobileSpecsRow from "./MobileSpecRow";
import MobileColorSelector from "./MobileColorSelector";
import { MoveRight } from "lucide-react";

interface Variant {
    name: string;
    front: number;
    rear: number;
    wheel: string;
}

interface Props {
    branding: string;
    model: string;
    icon: string;
    image: string;
    variants: Variant[];
    colors: string[];
}

export default function BikeHeroMobile({
    branding,
    model,
    icon,
    image,
    variants,
    colors,
}: Props) {
    const [active, setActive] = useState(0);
    const current = variants[active];

    return (
        <section
            className="relative w-full h-[85vh] flex flex-col justify-between pt-3 pb-4 px-4 overflow-hidden bg-black"
        >
            {/* BG IMAGE */}
            <Image
                src="/images/bikes/bike-hero-bg.png"
                alt="bg"
                fill
                className="object-cover opacity-[0.55] pointer-events-none"
            />

            {/* BIKE IMAGE (FULL ABSOLUTE) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center z-0"
            >
                <Image
                    src={image}
                    alt={model}
                    fill
                    priority
                    className="object-contain scale-120 pointer-events-none select-none"
                />
            </motion.div>

            {/* TOP BRANDING */}
            <div className="relative z-10 flex flex-col items-center justify-center mt-16">

                {/* Logo + Branding */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2"
                >
                    <Image
                        src={icon}
                        alt="logo"
                        width={34}
                        height={34}
                        className="object-contain drop-shadow-lg"
                    />
                    <span className="text-4xl font-extrabold uppercase tracking-widest text-white">
                        {branding}
                    </span>
                </motion.div>

                {/* Model Name */}
                <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    className="mt-2 text-xl font-bold uppercase tracking-[0.18em] text-sandstorm drop-shadow-sm"
                >
                    Model-1
                </motion.span>

            </div>



            {/* LOWER PANEL (MODEL SELECTOR + SPECS + COLOR + CTA) */}
            <div className="relative z-10 w-full mt-auto flex flex-col items-center space-y-2 pb-1">

                {/* MODEL SLIDING SELECTOR */}
                <MobileVariantSelector
                    variants={variants}
                    active={active}
                    setActive={setActive}
                />

                {/* SPECS (ANIMATE ON CHANGE) */}
                <AnimatePresence mode="wait">
                    <MobileSpecsRow key={current.name} variant={current} />
                </AnimatePresence>

                {/* COLOR + CTA — ADVANCED HORIZONTAL LAYOUT */}
                <div className="w-full flex items-center justify-center mt-3 gap-5 relative z-10">

                    <MobileColorSelector colors={colors} />


                    {/* BUY NOW BUTTON */}
                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="relative w-[150px] h-10 rounded-full 
                       flex items-center justify-center
                        text-white border border-white font-semibold uppercase tracking-wide
                       "
                    >
                        Buy Now
                    </motion.button>

                    {/* TEST RIDE LINK */}
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ x: 3 }}
                        onClick={() => window.open("/test-ride", "_blank")}
                        className="flex items-center gap-1.5 text-sandstorm text-[14px] uppercase font-extrabold tracking-wide cursor-pointer"
                    >
                        Test Ride <MoveRight size={16}/>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
