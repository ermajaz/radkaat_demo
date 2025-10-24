"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LogOut, User, Package, Heart, Bell, LucideIcon } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import ConfirmDialog from "./ConfirmDialog";

interface UserData {
  name?: string;
  avatar?: string | StaticImageData;
  email?: string;
}

interface UserMenuModalProps {
  open: boolean;
  onClose: () => void;
  user?: UserData;
}

export interface MenuItem {
  label: string;
  icon: LucideIcon; // Lucide icons share this base type
  href: string;
  confirm?: boolean; // optional (e.g., for logout)
}

// 🧭 More advanced menu items
const menuItems: MenuItem[] = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "My Orders", icon: Package, href: "/orders" },
  { label: "Wishlist", icon: Heart, href: "/wishlist" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Logout", icon: LogOut, href: "/auth/logout", confirm: true },
];

export default function UserMenuModal({
  open,
  onClose,
  user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/manali/rider-img.jpg",
  },
}: UserMenuModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  // 🧭 Close when mouse leaves modal area
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const handleMouseLeave = () => onClose();
    modal.addEventListener("mouseleave", handleMouseLeave);
    return () => modal.removeEventListener("mouseleave", handleMouseLeave);
  }, [onClose]);

  // 🎞 GSAP entry animation
  useEffect(() => {
    if (open && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  const handleMenuClick = (item: MenuItem) => {
    if (item.confirm) {
      setConfirmOpen(true);
    } else {
      router.push(item.href);
      onClose();
    }
  };

  const handleConfirmLogout = () => {
    setConfirmOpen(false);
    onClose();
    router.push("/");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "absolute top-14 right-0 w-64 p-4 z-[200]",
              "shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
              "bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden"
            )}
          >
            {/* 🧑 User Info Section */}
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3 relative">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={user.avatar || "/images/default-avatar.png"}
                  alt={user.name || "User"}
                  fill
                  sizes="40px"
                  className="object-cover rounded-full border border-white/20"
                />
                {/* Small glow */}
                <div className="absolute inset-0 rounded-full bg-white/10 blur-sm opacity-60" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold leading-tight text-[15px]">
                  {user.name}
                </span>
                <span className="text-white/60 text-xs">{user.email}</span>
              </div>
            </div>

            {/* 🌈 Menu List */}
            <div className="flex flex-col gap-1">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleMenuClick(item)}
                    whileHover={{
                      x: 0,
                      scale: 1.03,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className={cn(
                      "flex items-center cursor-pointer gap-3 px-3 py-2.5 text-sm text-white/90 transition-all relative",
                      "hover:text-white hover:shadow-[0_0_3px_rgba(255,255,255,0.2)]"
                    )}
                  >
                    {/* Icon with motion pulse */}
                    <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={18} className="opacity-80" />
                    </motion.div>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* 💫 Subtle decorative blur glow */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl"
              animate={{ opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧊 Logout Confirmation Dialog */}
      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Logout"
        description="Are you sure you want to log out of your account?"
        confirmLabel="Logout"
        cancelLabel="Cancel"
        onConfirm={handleConfirmLogout}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  );
}
