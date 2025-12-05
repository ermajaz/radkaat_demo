"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocialsMobile() {
  return (
    <div className="flex justify-center gap-6 text-white/80">
      <Link href="https://www.facebook.com/profile.php?id=100083101911813&_rdr" target="_blank">
        <Facebook size={18} />
      </Link>
      <Link href="https://www.instagram.com/radkaatofficial" target="_blank">
        <Instagram size={18} />
      </Link>
      <Link href="http://youtube.com/@cyclecircle5922" target="_blank">
        <Youtube size={18} />
      </Link>
    </div>
  );
}
