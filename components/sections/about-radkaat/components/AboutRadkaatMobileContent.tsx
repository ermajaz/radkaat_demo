"use client";

import { motion } from "framer-motion";

export default function AboutMobileContent() {
  return (
    <>
      <motion.div
        className="absolute top-16 right-10 w-40 h-40 rounded-full bg-[#E4D27C]/20 blur-[90px] opacity-30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative z-10 px-6 py-8 
          flex flex-col items-start justify-end
          text-left
          bg-linear-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent
          backdrop-blur-[10px]
          border-t border-[#E4D27C]/15
          rounded-t-[30px]
        "
      >
        {/* Heading */}
        <motion.h2
          className="
            heading text-[27px] sm:text-[30px] leading-[34px]
            font-extrabold text-stone uppercase 
            tracking-wider drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]
          "
        >
          THE FLAG WE CARRY
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="
            subheading text-[#E4D27C] text-[15px] sm:text-[16px]
            font-semibold mt-2 mb-2 leading-snug
          "
        >
          They call us different; we call it making a difference.
        </motion.p>

        {/* Body */}
        <motion.div
          className="
            body text-stone-300 text-[13px] sm:text-[14px]
            leading-relaxed tracking-wide space-y-2 pr-1
          "
        >
          <p>
            The Himalayas are our playground, the world our canvas,
            Mother Nature our compass.
          </p>
          <p>We don’t stand still. We move forward. We move together.</p>
          <p>
            We are{" "}
            <span className="text-[#E4D27C] font-semibold">Radkaat</span> — a
            fierce community of athletes, adventurers, and seekers from the
            Indian Himalaya.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="
            text-[#E4D27C] text-[15px] sm:text-[17px] font-bold mt-4 italic
            drop-shadow-[0_0_10px_rgba(228,210,124,0.25)]
          "
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Every trail. Every peak. Every now.
        </motion.p>
      </motion.div>
    </>
  );
}
