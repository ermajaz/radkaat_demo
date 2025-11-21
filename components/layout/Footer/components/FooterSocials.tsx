"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className="flex text-[12px] justify-center sm:justify-start gap-6 mb-1 max-sm:pb-2">
      <Link
        href="https://facebook.com"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Facebook size={15} /> Facebook
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Instagram size={15} /> Instagram
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Youtube size={15} /> YouTube
      </Link>
    </div>
  );
}
