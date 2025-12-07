"use client";

export default function ViewProductButton({ link }: { link: string }) {
  return (
    <a
      href={link}
      className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-black whitespace-nowrap w-fit text-sm font-semibold"
    >
      View Product
    </a>
  );
}
