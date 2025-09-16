"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    const GIF_DURATION = 1200; // adjust to your GIF length
    const timer = setTimeout(() => setShowGif(false), GIF_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center mt-10 px-4 bg-black w-full h-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="relative flex flex-col items-center text-center space-y-6 bg-black/70 p-10 max-w-md w-full overflow-hidden rounded-2xl shadow-2xl"
      >
        {showGif ? (
          <Image
            src="/gif/tick-animation.gif"
            alt="Tick Animation"
            width={128}
            height={128}
            className="w-32 h-32 mx-auto object-contain"
          />
        ) : (
          <div className="text-green-400 border-4 border-green-400 mt-2 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-16 h-16 mx-auto"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Hey {contact.firstName} {contact.lastName}, your test ride is booked!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/70 text-sm"
        >
          Thank you for choosing Radkaat 🚴
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full"
        >
          <Button
            onClick={() => router.push("/")}
            className="w-full bg-rust hover:bg-rust text-white font-semibold py-3 cursor-pointer shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Go Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
