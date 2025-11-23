"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  "+91-9429693000",
  "support@cyclecircle.one",
];

const linkItems = [
  { label: "Help & FAQ", href: "/support/help" },
  { label: "Support Center", href: "/support/supportcenter" },
  { label: "About Us", href: "/support/aboutUs" },
];

export default function FooterMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="cursor-pointer flex flex-col">
        <h3 className="uppercase font-bold tracking-widest text-white mb-1">
          Support
        </h3>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hovered ? "100%" : 0 }}
          className="h-0.5 bg-rust rounded"
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 pt-4 flex flex-col gap-3 text-white whitespace-nowrap"
          >
            {/* Contact Section */}
            <div className="flex flex-col gap-1">
              {contactInfo.map((text, i) => (
                <p key={i} className="text-[12px] text-gray-300 leading-tight">
                  {text}
                </p>
              ))}
            </div>

            {/* Horizontal Links */}
            <div className="flex gap-6 mt-1">
              {linkItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="hover:text-rust text-[13px] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
