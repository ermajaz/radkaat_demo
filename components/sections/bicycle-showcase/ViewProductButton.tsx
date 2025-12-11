"use client";

import Link from "next/link";

export default function ViewProductButton({ link }: { link: string }) {
  return (
    <Link
      href={link}
      className="
        px-6 py-2 
        bg-white text-black 
        whitespace-nowrap 
        text-sm font-semibold cursor-pointer
        rounded-none
        inline-block
      "
    >
      View Product
    </Link>
  );
}
