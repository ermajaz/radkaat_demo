"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import gsap from "gsap";
import NavItem from "./NavItem";
import SearchOverlay from "../search/SearchOverlay";
import ProductsOverlay from "../productOverlay/ProductsOverlay";
import Logo from "./Logo";

const navItems = ["Products", "Experience", "Community"];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);

  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate header using GSAP
  useEffect(() => {
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      y: showHeader ? 0 : -headerRef.current.offsetHeight,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [showHeader]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <NavItem
              key={item}
              label={item}
              onClick={() => item === "Products" && setProductsOpen(true)}
            />
          ))}
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <button onClick={() => setSearchOpen(true)} className="hover:text-rust cursor-pointer">
            <Search size={24}/>
          </button>
        </div>
      </header>

      {/* Overlays */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && <ProductsOverlay onClose={() => setProductsOpen(false)} />}
    </>
  );
}
