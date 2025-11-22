"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryTile({
  product,
  onClose,
}: {
  product: any;
  onClose?: () => void;
}) {
  const router = useRouter();

  const handleClick = () => {
    const title = product.title?.toLowerCase();

    if (title === "bikes") {
      const el = document.getElementById("bike-showcase");
      onClose?.();
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // ✅ Route for all other categories
    onClose?.();
    router.push(`/${title}`);
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden shadow-2xl h-112 w-full">
        <Image
          quality={100}
          src={product.image}
          alt={product.title}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h3 className="relative text-[42px] font-bold uppercase text-white drop-shadow-lg translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            {product.title}
            <span className="absolute left-1/2 -bottom-1 h-[3px] w-0 bg-[#b7410e] transition-all duration-500 group-hover:w-full -translate-x-1/2" />
          </h3>
        </div>
      </div>
    </div>
  );
}
