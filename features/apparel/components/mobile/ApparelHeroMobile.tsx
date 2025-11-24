"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ApparelHeroMobile() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // ✅ Background Parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

    // ✅ Title fades out earlier
    const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    // ✅ Card starts visible but subtle
    const cardOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 1]);
    const cardY = useTransform(scrollYProgress, [0.5, 0.8], [40, 0]);

    return (
        <section
            ref={ref}
            className="relative w-full h-[77vh] overflow-hidden bg-black text-white"
        >
            {/* ✅ Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0">
                <Image
                    src="/images/apparel-hero-img-mobile.png"
                    alt="Radkaat apparel"
                    fill
                    priority
                    className="object-cover object-center scale-[1.18]"
                />
            </motion.div>

            {/* ✅ Dark Top Fade */}
            <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/20 to-black/90" />

            {/* ✅ TITLE BLOCK */}
            <motion.div
                style={{ opacity: titleOpacity }}
                className="relative z-10 pt-24 px-6 text-center"
            >
                <p className="text-[15px] font-semibold uppercase tracking-[0.35em] text-sandstorm">
                    Radkaat Apparel
                </p>

                <p className="mt-4 text-[40px] font-serif tracking-wider leading-[1.1] font-semibold">
                    Move Faster.
                    <br />
                    <span className="font-semibold">Feel Lighter.</span>
                </p>

                <p className="mt-4 text-white text-xl max-w-60 mx-auto leading-snug">
                    Performance-built apparel engineered for motion.
                </p>
            </motion.div>

            {/* ✅ PRODUCT CARD (Enhanced + More Visible) */}
            <motion.div
                style={{
                    opacity: cardOpacity,
                    y: cardY,
                }}
                className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[40%] z-10"
            >
                <motion.div
                    initial={{ scale: 0.94, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-40 rounded-2xl overflow-hidden 
               bg-white/8 backdrop-blur-xl 
               border border-white/20 
               shadow-[0_20px_60px_rgba(0,0,0,0.65)]
               hover:shadow-[0_28px_80px_rgba(0,0,0,0.75)]
               transition-shadow"
                >
                    {/* Product Image */}
                    <Image
                        src="/images/apparel.jpg"
                        alt="Radkaat jersey"
                        fill
                        className="object-cover"
                    />

                    {/* ✅ Soft Glow Highlight */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* ✅ Glass Reflection */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/10 opacity-20 blur-lg pointer-events-none" />
                </motion.div>

                {/* ✅ PRO SERIES Badge */}
                <motion.p
                    initial={{ opacity: 0.4, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-4 text-center text-[11px] tracking-[0.38em] text-neutral-300"
                >
                    PRO SERIES
                </motion.p>
            </motion.div>


            {/* ✅ CTA BUTTON */}
            <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-sandstorm text-black font-semibold px-10 py-3 rounded-full text-[13px] shadow-xl active:scale-95"
            >
                Shop Apparel
            </motion.button>
        </section>
    );
}
