"use client";

import Link from "next/link";

export default function FooterBottomBar() {
  return (
    <div className="flex flex-col pr-5 sm:flex-row sm:items-center justify-between text-xs text-gray border-t border-gray-800 pt-4 gap-2">
      <p className="text-center sm:text-left">
        © Radkaat {new Date().getFullYear()} All Rights Reserved
      </p>
      <div className="flex justify-center sm:justify-end gap-4">
        <Link
          href="/support/terms"
          className="hover:text-rust transition-colors"
        >
          Terms & Conditions
        </Link>
        <Link
          href="support/privacy"
          className="hover:text-rust transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
