"use client";

import { Search, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserMenuModal from "./UserMenuModal";

interface Props {
  onSearchOpen: () => void;
  onProductsOpen: () => void;
  userMenuOpen: boolean;
  onUserMenuOpen: () => void;
  onUserMenuClose: () => void;
  onLogoutClick: () => void;
}

export default function HeaderIcons({
  onSearchOpen,
  userMenuOpen,
  onUserMenuOpen,
  onUserMenuClose,
  onLogoutClick
}: Props) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex items-center gap-6">

      {/* Search */}
      <button
        onClick={onSearchOpen}
        className="relative group cursor-pointer"
      >
        <Search
          size={22}
          strokeWidth={1.7}
          className="transition-all duration-200 mb-1.5 group-hover:text-army"
        />
        <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-army/30 transition-all" />
      </button>

      {/* User */}
      <div
        className="relative"
        onMouseEnter={() => {
          setIsHovering(true);
          onUserMenuOpen();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          onUserMenuClose();
        }}
      >
        <button
          onClick={() => router.push("/signin")}
          className="relative group cursor-pointer"
        >
          <User
            size={22}
            strokeWidth={1.7}
            className="group-hover:text-army transition"
          />
        </button>

        <UserMenuModal
          open={userMenuOpen}
          onClose={onUserMenuClose}
          onLogoutClick={onLogoutClick}
        />
      </div>

    </div>
  );
}
