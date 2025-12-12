"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu } from "lucide-react";

import Logo from "./components/Logo";
import MobileMenuBar from "./components/overlays/MobileMenuBar";
import BottomNavMobile from "./components/BottomNavMobile";
import { useScroll } from "@/hooks/useScroll";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  /* --------------------------------------------
        SHOW / HIDE TOP STRIP ON SCROLL
  -------------------------------------------- */
  const showTopStrip = (direction === "up" || direction === null);

  /* --------------------------------------------
        SPECIAL ROUTES WHERE STRIP MUST HIDE
  -------------------------------------------- */
  const hideStrip =
    pathname.startsWith("/bikes/") ||
    pathname.startsWith("/apparel") ||
    pathname.startsWith("/stories") ||
    pathname.startsWith("/accessories");


  // BOTTOM NAV SHOULD HIDE ON SOME ROUTES
  const hideBottomNav =
    pathname.startsWith("/stories") ||
    pathname.startsWith("/bikes") ||
    pathname.startsWith("/carts") ||
    pathname.startsWith("/address") ||
    pathname.startsWith("/payment") ||
    pathname.startsWith("/confirmation");


  /* --------------------------------------------
        ACTIVE CHECK FOR STRIP BUTTONS
  -------------------------------------------- */
  const isExp = pathname.startsWith("/experiences");
  const isCommunity = pathname.startsWith("/community");

  /* --------------------------------------------
        HEADER TRANSPARENCY LOGIC
  -------------------------------------------- */
  const headerBg =
    scrollY < window.innerHeight * 0.8
      ? "bg-transparent backdrop-blur-0 shadow-none"
      : "bg-black/50 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]";

  /* --------------------------------------------
        STRIP BUTTON STYLES
  -------------------------------------------- */
  const getBtnClasses = (active: boolean) =>
    `
      flex items-center justify-center flex-1 py-2 rounded-sm 
      border border-white/10 relative transition-all duration-75
      bg-[linear-gradient(135deg,#1A1A1A,#0D0D0D)]
      ${active ? "opacity-100" : "opacity-70"}
      active:scale-95
    `;

  return (
    <>
      {/* ⭐ MAIN HEADER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 px-5 py-3 
          flex items-center justify-between transition-all 
          ${headerBg}
        `}
      >
        <Logo />

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-xs text-white/80">
            <MapPin size={16} className="text-sandstorm" />
            <span>Location</span>
          </button>

          <button onClick={() => setMenuOpen(true)}>
            <Menu size={22} className="text-white" />
          </button>
        </div>
      </motion.header>

      {/* ⭐ EXPERIENCE + COMMUNITY STRIP */}
      {/* <AnimatePresence>
        {!hideStrip && showTopStrip && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              fixed top-[63px] left-0 right-0 z-40 px-4 py-2
              flex items-center justify-between gap-4
              ${headerBg}
            `}
          >
            <button
              onClick={() => router.push("/experiences")}
              className={getBtnClasses(isExp)}
            >
              {isExp && (
                <motion.div
                  layoutId="strip-active"
                  className="
                    absolute inset-0 rounded-sm
                    bg-[radial-gradient(circle,rgba(255,204,102,0.15),rgba(255,204,102,0.03))]
                    border border-sandstorm/40
                  "
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
              )}
              <span className="relative text-xs text-white/80 tracking-wide">
                Experiences
              </span>
            </button>

            <button
              onClick={() => router.push("/community")}
              className={getBtnClasses(isCommunity)}
            >
              {isCommunity && (
                <motion.div
                  layoutId="strip-active"
                  className="
                    absolute inset-0 rounded-sm
                    bg-[radial-gradient(circle,rgba(102,204,255,0.18),rgba(102,204,255,0.03))]
                    border border-[#6acbff]/40
                  "
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
              )}
              <span className="relative text-xs text-white/80 tracking-wide">
                Community
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* ⭐ SIDE MENU */}
      {menuOpen && (
        <MobileMenuBar open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}

      {/* ⭐ BOTTOM NAVIGATION */}
      {/* ⭐ BOTTOM NAVIGATION */}
      {!hideBottomNav && (
        <BottomNavMobile
          open={menuOpen}
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
        />
      )}

    </>
  );
}
