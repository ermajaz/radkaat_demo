"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { LogOut, User, Package, Heart, Bell, LucideIcon } from "lucide-react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserData {
  name?: string;
  avatar?: string;
  email?: string;
}

interface UserMenuModalProps {
  open: boolean;
  onClose: () => void;
  onLogoutClick: () => void;  // NEW
  user?: UserData;
}

const menuItems = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "My Orders", icon: Package, href: "/orders" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Logout", icon: LogOut, href: "/auth/logout", confirm: true },
];

export default function UserMenuModal({
  open,
  onClose,
  onLogoutClick,
  user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/manali/rider-img.jpg",
  },
}: UserMenuModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close if click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  // GSAP animation
  useEffect(() => {
    if (open && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  const handleMenuClick = (item: any) => {
    if (item.confirm) {
      onLogoutClick();    // 🔥 call parent to show ConfirmDialog
      return;
    }

    router.push(item.href);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "absolute top-14 right-0 w-64 p-4 z-200",
            "bg-[rgba(15,15,15,0.6)] border border-white/20",
            "backdrop-blur-2xl shadow-lg rounded-md"
          )}
        >
          {/* User info */}
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={user.avatar || "/images/default-avatar.png"}
                alt={user.name || "User"}
                fill
                sizes="40px"
                className="object-cover rounded-full border border-white/20"
              />
            </div>

            <div>
              <p className="text-white font-semibold">{user.name}</p>
              <p className="text-white/60 text-xs">{user.email}</p>
            </div>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-1">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleMenuClick(item)}
                  className="flex items-center gap-3 cursor-pointer px-3 py-2 text-white/80 hover:bg-white/10 rounded"
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
