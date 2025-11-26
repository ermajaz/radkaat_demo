"use client";

import Link from "next/link";

export default function FooterBottomBarMobile() {
  return (
    <div className="text-center border-t border-[#2a2a2a] pt-3 text-[11px] text-white/60 space-y-3">
      <p>© Radkaat {new Date().getFullYear()} All Rights Reserved</p>

      <div className="flex justify-center gap-4 text-xs">
        <Link href="/support/terms" className="hover:text-white">
          Terms & Conditions
        </Link>
        <Link href="/support/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
