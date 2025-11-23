"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Category from "@/components/sections/category";
import NavList from "./NavList";
import ProductsOverlay from "./overlays/products/ProductsOverlay";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-200 bg-superblack text-white flex flex-col h-screen mx-auto max-w-[1440px] overflow-y-auto"
    >
      {/* ✅ FIXED HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0 h-[72px]">
        <Image
          src="/images/website-logo.png"
          alt="Radkaat"
          width={48}
          height={48}
        />
        <NavList
          onProductsOpen={() => setProductsOpen(true)}
          isProductsOpen={productsOpen}
        />
        <button onClick={onClose} className="p-2 cursor-pointer">
          <X size={40} />
        </button>
      </div>

      {/* ✅ VARIABLE HEIGHT SEARCH (AUTO) */}
      <div className="shrink-0 flex-1 w-full px-6 py-10 flex justify-center">
        <SearchInput />
      </div>

      {/* ✅ FIXED CATEGORY HEIGHT (NEVER SCROLLS) */}
      <div className="shrink-0 h-auto px-6 pb-6">
        <Category onClose={onClose} />
      </div>

      {productsOpen && (
        <ProductsOverlay
          onClose={() => setProductsOpen(false)}
          onSearchOpen={() => {}}
        />
      )}
    </div>
  );
}
