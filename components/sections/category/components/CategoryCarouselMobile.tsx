"use client";

import { ourProducts } from "@/utils/category";
import CategoryTileMobile from "./CategoryTileMobile";

export default function CategoryCarouselMobile({
  onClose,
}: {
  onClose?: () => void;
}) {
  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar flex gap-4 px-4">
      {ourProducts.map((product) => (
        <CategoryTileMobile
          key={product.id}
          product={product}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
