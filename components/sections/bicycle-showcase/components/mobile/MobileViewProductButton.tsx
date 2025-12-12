"use client";

import Link from "next/link";

export default function MobileViewProductButton({ link }: any) {
  return (
    <Link
      href={link}
      className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-full"
    >
      View Product
    </Link>
  );
}
