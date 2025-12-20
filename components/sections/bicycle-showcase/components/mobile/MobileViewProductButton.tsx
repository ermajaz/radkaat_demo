"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MobileViewProductButton({ link }: { link: string }) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link
        href={link}
        className="
          group
          relative
          inline-flex items-center gap-3
          text-yellow-500
          font-semibold text-sm
          overflow-hidden
        "
      >
        {/* Subtle sliding light */}
        <span
          className="
            absolute inset-0
            bg-linear-to-r
            from-transparent
            via-black/10
            to-transparent
            -translate-x-full
            group-hover:translate-x-full
            transition-transform
            duration-700
          "
        />

        {/* Text */}
        <span className="relative z-10 tracking-wide">
          View Product
        </span>

        {/* Arrow */}
        <motion.span
          className="relative z-10 flex items-center"
          initial={{ x: -4 }}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </Link>
    </motion.div>
  );
}
