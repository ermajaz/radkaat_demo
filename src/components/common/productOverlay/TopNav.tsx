"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import NavItem from "../NavItem";
import SearchOverlay from "../search/SearchOverlay";
import ProductsOverlay from "./ProductsOverlay";

const navItems = ["Products", "Experiences", "Community"];

export default function TopNav({ onClose }: { onClose: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <header className="w-full z-50 flex items-center bg-superblack justify-between px-6 py-4">
        <X onClick={onClose} className="w-15 h-15 cursor-pointer hover:text-rust" />

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
          <button
            onClick={() => setSearchOpen(true)}
            className="hover:text-rust cursor-pointer"
          >
            <Search size={40} />
          </button>
        </div>
      </header>

      {/* Overlays */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && (
        <ProductsOverlay onClose={() => setProductsOpen(false)} />
      )}
    </>
  );
}
