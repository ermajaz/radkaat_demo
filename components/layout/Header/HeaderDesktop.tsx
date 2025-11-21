"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useHeaderScrollBehavior } from "./useHeaderScrollBehaviour";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import HeaderIcons from "./components/HeaderIcons";
import SearchOverlay from "./components/SearchOverlay";
import UserMenuModal from "./components/UserMenuModal";
import ProductsOverlay from "./components/overlays/products/ProductsOverlay";
import ConfirmDialog from "./components/ConfirmDialog";

export default function HeaderDesktop() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { showHeader, onHoverStart, onHoverEnd } = useHeaderScrollBehavior();

  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // 🔥 When logout is clicked (from menu)
  const handleLogoutClick = () => {
    setUserMenuOpen(false);   // close menu first
    setConfirmOpen(true);     // show confirm modal
  };

  // GSAP for header
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
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="fixed w-full top-0 left-0 z-50 
        text-white flex items-center justify-between 
        px-12 py-4 bg-black/10 backdrop-blur-sm"
      >
        <Logo />
        <NavList onProductsOpen={() => setProductsOpen(true)} />

        <HeaderIcons
          onSearchOpen={() => setSearchOpen(true)}
          onProductsOpen={() => setProductsOpen(true)}
          userMenuOpen={userMenuOpen}
          onUserMenuOpen={() => setUserMenuOpen(true)}
          onUserMenuClose={() => setUserMenuOpen(false)}
          onLogoutClick={handleLogoutClick}
        />
      </header>

      {/* MODALS */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      {productsOpen && (
        <ProductsOverlay
          onClose={() => setProductsOpen(false)}
          onSearchOpen={() => setSearchOpen(true)}
        />
      )}


      {/* 🔥 CONFIRM LOGOUT DIALOG (GLOBAL) */}
      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Logout"
        description="Are you sure you want to log out of your account?"
        confirmLabel="Logout"
        cancelLabel="Cancel"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          window.location.href = "/"; // or router.push("/")
        }}
      />
    </>
  );
}
