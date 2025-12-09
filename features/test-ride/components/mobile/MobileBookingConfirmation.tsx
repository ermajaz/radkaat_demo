"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  contact: { firstName: string; lastName: string };
  setShowRideDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileBookingConfirmation({
  contact,
  setShowRideDetails,
}: Props) {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowGif(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center">

      {/* -------------------------------------------------- */}
      {/*     CONFETTI — FLOATING PREMIUM PARTICLES         */}
      {/* -------------------------------------------------- */}
      <AnimatePresence>
        {!showGif &&
          Array.from({ length: 28 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={{
                y: [0, -120 - Math.random() * 70],
                x: [0, (Math.random() - 0.5) * 180],
                opacity: 0,
                rotate: Math.random() * 180,
              }}
              transition={{
                duration: 1.8 + Math.random() * 0.4,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background:
                  ["#F8D48A", "#FFD27A", "#FFE3B0"][
                    Math.floor(Math.random() * 3)
                  ],
                top: "50%",
                left: "50%",
              }}
            />
          ))}
      </AnimatePresence>

      {/* -------------------------------------------------- */}
      {/*                     SUCCESS CARD                   */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="
          relative w-full max-w-md 
          rounded-4xl 
          px-8 pt-12 pb-16
          text-center
        "
      >
        {/* -------------------------------------------------- */}
        {/*                CHECKMARK ANIMATION                */}
        {/* -------------------------------------------------- */}
        {showGif ? (
          <Image
            src="/gif/tick-animation.gif"
            alt="Success Animation"
            width={140}
            height={140}
            className="mx-auto mb-4 w-28 h-28 object-contain"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 16,
            }}
            className="
              w-28 h-28 mx-auto mb-6
              rounded-full border-[5px] border-sandstorm
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,193,110,0.4)]
              relative overflow-hidden
            "
          >
            {/* Glow ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 rounded-full bg-sandstorm/40 blur-xl"
            />

            {/* SVG checkmark */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="w-12 h-12 text-sandstorm z-10"
            >
              <motion.path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
        )}

        {/* -------------------------------------------------- */}
        {/*                        TITLE                       */}
        {/* -------------------------------------------------- */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-[28px] font-extrabold text-white leading-snug"
        >
          Test Ride Confirmed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-sandstorm font-semibold text-lg mt-1"
        >
          {contact.firstName} {contact.lastName}
        </motion.p>

        {/* -------------------------------------------------- */}
        {/*                        SUBTEXT                     */}
        {/* -------------------------------------------------- */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-white/65 text-sm max-w-xs mx-auto mt-4 leading-relaxed"
        >
          Thank you for choosing Radkaat.  
          Your ride details are ready anytime you need them.
        </motion.p>

        {/* -------------------------------------------------- */}
        {/*                 ACTION BUTTONS (FLOATING)          */}
        {/* -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-col gap-4"
        >
          <Button
            onClick={() => setShowRideDetails(true)}
            className="w-full rounded-full bg-sandstorm text-black py-4 font-semibold shadow-lg hover:bg-sandstorm/90"
          >
            View Ride Details
          </Button>

          <Button
            onClick={() => window.location.href = "/"}
            className="w-full rounded-full bg-white/10 text-white border border-white/20 py-4 font-semibold backdrop-blur-xl hover:bg-white/20"
          >
            Continue to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
