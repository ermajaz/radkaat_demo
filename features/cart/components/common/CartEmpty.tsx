"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const CartEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-6 text-center text-white">
      {/* Icon / Illustration */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-28 h-28 flex items-center justify-center bg-superblack border border-white/10 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.25)]"
      >
        <ShoppingBag size={52} className="text-stone" strokeWidth={1.5} />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-8 text-3xl font-bold uppercase tracking-widest"
      >
        Your Cart is Empty
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-3 max-w-md text-gray-400 text-sm leading-relaxed"
      >
        Looks like you haven’t added anything yet.  
        Explore our bikes, gear up, and start your journey!
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <Link href="/products">
          <button
            className="
              mt-8 px-8 py-3 bg-army text-black font-semibold uppercase
              tracking-wider text-sm cursor-pointer
              hover:bg-army/90 active:scale-[0.97]
              transition-all duration-300
            "
          >
            Explore Bikes
          </button>
        </Link>
      </motion.div>

      {/* Subtle bottom glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-army/10 via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
};
