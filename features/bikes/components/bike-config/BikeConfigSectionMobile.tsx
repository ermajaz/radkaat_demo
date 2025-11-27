"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BikeConfigSectionMobile() {
    const [openImage, setOpenImage] = useState<string | null>(null);

    const featureImages = [
        "https://www.roadbikerider.com/wp-content/uploads/2018/11/bike-diagram-600x369.png",
        "https://i.ytimg.com/vi/yaHEntLjmkk/sddefault.jpg",
        "https://fitwerx.com/wp-content/uploads/2024/11/Screen-Shot-2024-11-12-at-1.58.46-PM.png",
    ];

    return (
        <>
            {/* ===========================
                MAIN SECTION
            ============================ */}
            <section
                id="bike-config"
                className="
                w-full
                bg-superblack text-white
                px-5 pt-10 pb-16
                flex flex-col items-center
                relative overflow-hidden
            "
            >

                {/* Glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] h-48 bg-sandstorm/10 blur-[80px] rounded-full z-0" />

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full text-center mb-8"
                >
                    <h2 className="
                        text-[28px] font-extrabold uppercase leading-tight
                        bg-linear-to-r from-white to-sandstorm/70 bg-clip-text text-transparent
                    ">
                        Engineer Your Ride
                    </h2>

                    <p className="mt-2 text-[13px] text-white/60 leading-relaxed">
                        Explore components. Visualize upgrades. Build your ride.
                    </p>
                </motion.div>

                {/* 🎥 MAIN VIDEO TEASER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
                        relative w-full h-[260px] rounded-xl overflow-hidden
                        border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)]
                        bg-black
                    "
                >
                    <Image
                        src="https://m.media-amazon.com/images/I/81xtd9KWxTL._AC_SL1500_.jpg"
                        alt="Bike Config Teaser"
                        fill
                        className="object-cover scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Play Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="
                            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            w-14 h-14 rounded-full
                            bg-sandstorm/20 backdrop-blur-sm
                            border border-sandstorm/40
                            flex items-center justify-center
                        "
                    >
                        <svg width="25" height="25" fill="white" className="translate-x-0.5">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </motion.button>
                </motion.div>

                {/* 🖼️ 3 FEATURE CARDS BELOW */}
                <div className="w-full grid grid-cols-3 gap-3 mt-6 relative z-10">
                    {featureImages.map((src, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setOpenImage(src)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="
                                relative h-[110px] rounded-lg overflow-hidden
                                border border-white/10 bg-black cursor-pointer
                                shadow-[0_0_20px_rgba(0,0,0,0.35)]
                            "
                        >
                            <Image
                                src={src}
                                fill
                                alt="Bike config image"
                                className="object-cover scale-150"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===========================
                FULLSCREEN IMAGE MODAL
            ============================ */}
            <AnimatePresence>
                {openImage && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            fixed inset-0 bg-black/80 backdrop-blur-md
                            flex items-center justify-center z-999
                        "
                        onClick={() => setOpenImage(null)} // close when clicking outside
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            className="relative w-[95%] h-[300px] bg-white rounded-sm overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // don't close when clicking image
                        >
                            <Image
                                src={openImage}
                                alt="Full preview"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
