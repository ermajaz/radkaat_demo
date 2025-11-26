"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocialsMobile() {
  return (
    <div className="flex justify-center gap-6 text-white/80">
      <Link href="https://facebook.com" target="_blank">
        <Facebook size={18} />
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <Instagram size={18} />
      </Link>
      <Link href="https://youtube.com" target="_blank">
        <Youtube size={18} />
      </Link>
    </div>
  );
}
