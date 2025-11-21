"use client";

import { ourProducts } from "@/utils/category";
import CategoryTile from "./CategoryTile";


export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      {ourProducts.map((product) => (
        <CategoryTile key={product.id} product={product} />
      ))}
    </div>
  );
}
