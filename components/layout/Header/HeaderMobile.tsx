"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useHeaderScrollBehavior } from "./useHeaderScrollBehaviour";
import Logo from "./components/Logo";
import HeaderIcons from "./components/HeaderIcons";
import SearchOverlay from "./components/SearchOverlay";
import UserMenuModal from "./components/UserMenuModal";
import ProductsOverlay from "./components/overlays/products/ProductsOverlay";
export default function HeaderMobile() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { showHeader } = useHeaderScrollBehavior();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // 🔥 When logout is clicked (from menu)
  const handleLogoutClick = () => {
    setUserMenuOpen(false);   // close menu first
    setConfirmOpen(true);     // show confirm modal
  };

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      y: showHeader ? 0 : -headerRef.current.offsetHeight,
      duration: 0.35,
      ease: "power3.out",
    });
  }, [showHeader]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 text-white left-0 w-full z-50 px-6 py-3 bg-black/40 backdrop-blur-md flex items-center justify-between"
      >
        <Logo />
        <HeaderIcons
          onSearchOpen={() => setSearchOpen(true)}
          onProductsOpen={() => setProductsOpen(true)}
          userMenuOpen={userMenuOpen}
          onUserMenuOpen={() => setUserMenuOpen(true)}
          onUserMenuClose={() => setUserMenuOpen(false)}
          onLogoutClick={handleLogoutClick}
        />
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && <ProductsOverlay onClose={() => setProductsOpen(false)} onSearchOpen={() => setSearchOpen(true)} />}
    </>
  );
}
