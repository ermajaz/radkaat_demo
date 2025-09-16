"use client";

import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function SearchHeader({ onClose }: Props) {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <div className="flex items-center pt-2">
        <Image src="/images/website-logo.png" alt="Logo" width={60} height={60} className="w-[60px] h-auto"/>
      </div>

      {/* Close */}
      <button
        className="flex items-center cursor-pointer text-white hover:text-gray-300 transition"
        onClick={onClose}
      >
        <X size={50} />
      </button>
    </header>
  );
}
