"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const routes = [
  { name: "Contact Us", path: "/support/contact" },
  { name: "About Us", path: "/support/aboutUs" },
  { name: "Terms & Conditions", path: "/support/terms" },
  { name: "Privacy Policy", path: "/support/privacy" },
  { name: "Help & FAQ", path: "/support/help" },
  { name: "Support Center", path: "/support/supportcenter" },
];

const SupportNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-60 w-full bg-superblack/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h2 className="text-white font-bold text-lg">Support</h2>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex gap-6">
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                scroll={false}
                className={`relative px-3 py-2 font-medium transition-colors ${
                  isActive
                    ? "text-sandstorm-1"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {route.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sandstorm-1"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-superblack/90 p-4 flex flex-col gap-4"
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              scroll={false}
              onClick={() => setOpen(false)}
              className={`font-semibold ${
                pathname === route.path ? "text-sandstorm-1" : "text-white"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default SupportNav;
