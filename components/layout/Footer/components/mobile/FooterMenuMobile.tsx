"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const linkItems = [
  { label: "Help & FAQ", href: "/support/help" },
  { label: "Support Center", href: "/support/supportcenter" },
  { label: "About Us", href: "/support/aboutUs" },
];

export default function FooterMenuMobile() {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[#2a2a2a] pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-sm font-semibold"
      >
        Support
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-3 ml-1 flex items-center gap-8"
          >
            {linkItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
