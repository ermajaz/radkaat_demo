"use client";

import NavGroup from "./NavGroup";
import { ProductKey } from "./utils/product-overlay-data";

export default function NavSection({
  products,
  activeProduct,
  setActiveProduct,
}: {
  products: any[];
  activeProduct: ProductKey;
  setActiveProduct: (p: ProductKey) => void;
}) {
  return (
    <NavGroup title="PRODUCTS">
      {products.map((p) => (
        <p
          key={p.id}
          onClick={() => setActiveProduct(p.id as ProductKey)}
          className={`cursor-pointer flex justify-between items-center py-1 text-base tracking-wide 
            ${activeProduct === p.id ? "text-white font-bold" : "text-white/60 hover:text-white"}
          `}
        >
          {p.label}
          <span className="text-2xl">›</span>
        </p>
      ))}
    </NavGroup>
  );
}
