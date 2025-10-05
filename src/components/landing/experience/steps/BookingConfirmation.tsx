"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BookingConfirmationProps {
  contact: { firstName: string; lastName: string };
}

export default function BookingConfirmation({ contact }: BookingConfirmationProps) {
  const router = useRouter();
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const GIF_DURATION = 1200; // match GIF length
    const timer = setTimeout(() => setShowGif(false), GIF_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative flex justify-center items-center px-4">
      {/* Subtle Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-full h-full rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2"
      />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="relative flex flex-col justify-center items-center text-center space-y-6 p-10 pt-0 h-full w-full max-w-md overflow-hidden rounded-3xl"
      >
        {/* Confetti Effect (simple floating circles) */}
        <AnimatePresence>
          {!showGif &&
            Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -200, opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.05 }}
                className="absolute w-2 h-2 rounded-full bg-rust"
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: `${Math.random() * 200 - 100}px`,
                  translateY: `${Math.random() * 100 - 50}px`,
                }}
              />
            ))}
        </AnimatePresence>

        {/* Tick Animation */}
        {showGif ? (
          <Image quality={100}
            src="/gif/tick-animation.gif"
            alt="Tick Animation"
            width={160}
            height={160}
            className="w-40 h-40 mx-auto object-contain"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-green-400"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-16 h-16 text-green-400"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.svg>
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-400/40"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </motion.div>
        )}

        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold text-white drop-shadow-lg"
        >
          Hey {contact.firstName} {contact.lastName}, your test ride is booked!
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/70 text-sm"
        >
          Thank you for choosing <span className="text-rust font-semibold">Radkaat 🚴</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-rust hover:bg-rust/90 text-white font-semibold py-5 cursor-pointer shadow-lg rounded-full transition"
            >
              Go Home
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
