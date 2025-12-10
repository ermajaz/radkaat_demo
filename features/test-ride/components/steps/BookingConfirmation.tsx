"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RideDetailsSummary from "./RideDetailsSummary";

interface BookingConfirmationProps {
  contact: { firstName: string; lastName: string };
  setShowRideDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookingConfirmation({ contact, setShowRideDetails }: BookingConfirmationProps) {
  const router = useRouter();
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGif(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative">

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="
         backdrop-blur-xl
          rounded-sm shadow-2xl
          w-full
          flex flex-col items-center text-center
        "
      >

        {/* Confetti Particles */}
        <AnimatePresence>
          {!showGif &&
            Array.from({ length: 16 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -140, opacity: 0 }}
                transition={{ duration: 1.8, delay: i * 0.05 }}
                className="absolute w-2 h-2 rounded-full bg-sandstorm"
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: `${Math.random() * 180 - 90}px`,
                  translateY: `${Math.random() * 50 - 25}px`,
                }}
              />
            ))}
        </AnimatePresence>

        {/* Tick animation */}
        {showGif ? (
          <Image
            src="/gif/tick-animation.gif"
            alt="Tick Animation"
            width={150}
            height={150}
            className="w-32 h-32 object-contain mb-2"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-sandstorm"
          >
            {/* Clean Checkmark */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-14 h-14 text-sandstorm"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-semibold text-white mt-8 leading-snug"
        >
          Your Test Ride is Confirmed,
          <br />
          <span className="text-sandstorm">{contact.firstName} {contact.lastName}</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-white/60 text-sm max-w-sm mt-2"
        >
          Thank you for choosing <span className="text-sandstorm font-medium">Radkaat</span>.
          Our team will reach out with your ride details shortly.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-10"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button
              onClick={() => router.push("/")}
              className="bg-sandstorm text-black font-semibold py-4 rounded-sm cursor-pointer hover:bg-sandstorm/90 shadow-lg"
            >
              Continue to Home
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button className="bg-sandstorm text-black font-semibold py-4 rounded-sm cursor-pointer hover:bg-sandstorm/90 shadow-lg" onClick={() => setShowRideDetails(true)}>View Ride Details</Button>
          </motion.div>
        </motion.div>


      </motion.div>
    </div>
  );
}
