"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className="flex text-[12px] justify-center max-sm:pb-3 sm:justify-start gap-6 mt-3">
      <Link
        href="https://www.facebook.com/profile.php?id=100083101911813&_rdr"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Facebook size={15} /> Facebook
      </Link>
      <Link
        href="https://www.instagram.com/radkaatofficial"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Instagram size={15} /> Instagram
      </Link>
      <Link
        href="http://youtube.com/@cyclecircle5922"
        target="_blank"
        className="flex items-center gap-2 hover:text-rust transition-colors"
      >
        <Youtube size={15} /> YouTube
      </Link>
    </div>
  );
}
