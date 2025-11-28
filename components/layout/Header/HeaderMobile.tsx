"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, Heart, MapPin, Menu } from "lucide-react";
import Logo from "./components/Logo";
import MobileMenuBar from "./components/overlays/MobileMenuBar";
import BottomNavMobile from "./components/BottomNavMobile";

export default function HeaderMobile() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Detect scroll beyond 500px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = scrolled || menuOpen;

  return (
    <>
      {/* ⭐ TOP MOBILE HEADER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          px-5 py-3 flex items-center justify-between
          transition-all duration-300
          ${isActive
            ? "bg-black/50 backdrop-blur-sm shadow-lg"
            : "bg-transparent backdrop-blur-xs shadow-none"
          }
        `}
      >
        {/* LOGO */}
        <Logo />

        {/* ACTION ICONS */}
        <div className="flex items-center gap-4">

          {/* 📍 Location */}
          <button className="flex items-center gap-1 text-xs text-white/80">
            <MapPin size={16} className="text-sandstorm" />
            <span>Location</span>
          </button>

          {/* 🔔 Notifications */}
          <button className="relative">
            <Bell size={20} className="text-white/80" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-sandstorm rounded-full" />
          </button>

          {/* ❤️ Wishlist */}
          <button>
            <Heart size={20} className="text-white/80" />
          </button>

          {/* ☰ Menu */}
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={22} className="text-white" />
          </button>
        </div>
      </motion.header>

      {/* ⭐ SIDE MENU */}
      {menuOpen && (
        <MobileMenuBar open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}

      {/* ⭐ BOTTOM NAV */}
      <BottomNavMobile
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
