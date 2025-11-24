"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Bell, Heart, MapPin, Menu } from "lucide-react";
import BottomNavMobile from "./components/BottomNavMobile";
import MobileMenuBar from "./components/overlays/MobileMenuBar";
import Logo from "./components/Logo";

export default function HeaderMobile() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ TOP HEADER */}
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`
          fixed top-0 left-0 right-0 z-50 px-5 py-3
          flex items-center justify-between
          ${scrolled || menuOpen ? "bg-superblack backdrop-blur-xl shadow-lg" : "bg-transparent"}
        `}
      >
        {/* ✅ LOGO */}
        <Logo />

        {/* ✅ ACTION ICONS */}
        <div className="flex items-center gap-4">

          {/* ✅ Location */}
          <button className="flex items-center gap-1 text-xs text-white/80">
            <MapPin size={16} className="text-sandstorm" />
            <span>Location</span>
          </button>

          {/* ✅ Notifications */}
          <button className="relative">
            <Bell size={20} className="text-white/80" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-sandstorm rounded-full" />
          </button>

          {/* ✅ Wishlist */}
          <button>
            <Heart size={20} className="text-white/80" />
          </button>

          {/* ✅ Menu */}
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={22} className="text-white" />
          </button>
        </div>
      </motion.header>

      {/* ✅ MENU SHEET */}
      {menuOpen && (
        <MobileMenuBar open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}

      {/* ✅ BOTTOM NAV */}
      <BottomNavMobile open={menuOpen} onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}/>
    </>
  );
}
