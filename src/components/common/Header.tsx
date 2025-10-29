"use client";

import { useEffect, useRef, useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import NavItem from "./NavItem";
import Logo from "./Logo";
import SearchOverlay from "./search/SearchOverlay";
import ProductsOverlay from "./productOverlay/ProductsOverlay";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import UserMenuModal from "./UserMenuModal";

const navItems = ["Products", "Experiences", "Community"];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // 🧭 Hide/show based on scroll direction
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false); // hide on scroll down
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true); // show on scroll up
      }
      lastScrollY.current = currentScrollY;

      // 🕒 Reset inactivity timer
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isHovered && currentScrollY > 100) {
          setShowHeader(false);
        }
      }, 3000); // hide if no scroll for 3s
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  // 🎞 GSAP smooth header animation
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
        onMouseEnter={() => {
          setIsHovered(true);
          setShowHeader(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="fixed w-full top-0 left-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-black/50 backdrop-blur-[2px]"
      >
        {/* 🪖 Logo */}
        {pathname === "/" ? (
          <button
            onClick={() => setProductsOpen(true)}
            className="flex items-center cursor-pointer"
          >
            <Logo />
          </button>
        ) : (
          <Link href="/" className="flex items-center cursor-pointer">
            <Logo />
          </Link>
        )}

        {/* 🧭 Navigation */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <NavItem
              key={item}
              label={item}
              onClick={() => {
                if (item === "Products") setProductsOpen(true);
                else if (item === "Community") router.push("/community");
                else if (item === "Experiences") router.push("/community");
              }}
            />
          ))}
        </nav>

        {/* 🔍 + 👤 + 🛒 Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="relative group cursor-pointer"
            aria-label="Search"
          >
            <Search
              size={22}
              strokeWidth={1.7}
              className="transition-all duration-200 group-hover:text-army"
            />
            <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-army/30 transition-all duration-300" />
          </button>

          {/* 🧑‍💼 User Menu Hover */}
          <div
            className="relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <button
              onClick={() => router.push("/auth/login")}
              className="relative group cursor-pointer"
              aria-label="User Menu"
            >
              <User
                size={22}
                strokeWidth={1.7}
                className="transition-all duration-200 group-hover:text-army"
              />
            </button>

            {/* 🧩 User Menu Modal */}
            <UserMenuModal
              open={userMenuOpen}
              onClose={() => setUserMenuOpen(false)}
            />
          </div>

          {/* Cart */}
          <button
            onClick={() => router.push("/cart")}
            className="relative group cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingCart
              size={22}
              strokeWidth={1.7}
              className="transition-all duration-200 group-hover:text-army"
            />
            <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-army/30 transition-all duration-300" />
            {/* Optional item count badge */}
            <span className="absolute -top-1 -right-2 bg-army text-black text-[10px] font-semibold rounded-full px-[6px] py-[2px] leading-none">
              2
            </span>
          </button>
        </div>
      </header>

      {/* 🔮 Overlays */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && (
        <ProductsOverlay onClose={() => setProductsOpen(false)} />
      )}
    </>
  );
}
