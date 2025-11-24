"use client";

import { useState } from "react";
import { AccessoryProduct, AccessoryVariant } from "../../types/accessories.types";
import { accessoriesProducts } from "../../utils/accessories-data";
import ProductCardMobile from "./ProductCardMobile";
import VariantBottomSheet from "./VarientBottomSheet";

export default function AccessoriesCategoryMobile() {
  const [openProduct, setOpenProduct] = useState<AccessoryProduct | null>(null);
  const [activeVariant, setActiveVariant] = useState<AccessoryVariant | null>(null);

  const handleOpenSheet = (product: AccessoryProduct) => {
    const firstAvailable =
      product.variants.find((v) => v.inStock) || product.variants[0];

    setOpenProduct(product);
    setActiveVariant(firstAvailable);
  };

  const handleEquip = (qty: number) => {
    if (!openProduct || !activeVariant) return;

    alert(
      `✅ Equipped:\n${openProduct.name}\nSize: ${activeVariant.size}\nColor: ${activeVariant.colors[0]}\nQty: ${qty}`
    );
  };

  return (
    <section className="w-full bg-superblack text-white md:hidden">
      {/* Header */}
      <div className="max-w-md mx-auto px-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-sandstorm">
          Collections
        </p>
        <h2 className="mt-3 text-2xl font-light leading-snug">
          From city spins to race days.
        </h2>
        <p className="mt-2 text-xs text-neutral-400">
          Swipe through Radkaat&apos;s engineered apparel, one kit at a time.
        </p>
      </div>

      {/* Product List */}
      <div className="mt-6 h-auto overflow-y-auto flex flex-col gap-5 snap-y snap-mandatory">
        {accessoriesProducts.map((p, i) => (
          <ProductCardMobile
            key={p.id}
            product={p}
            index={i}
            onOpenSheet={handleOpenSheet}
          />
        ))}
      </div>

      {/* ✅ Bottom Sheet Outside The Card */}
      {openProduct && activeVariant && (
        <VariantBottomSheet
          product={openProduct}
          activeVariant={activeVariant}
          onVariantChange={setActiveVariant}
          onEquip={handleEquip}
          onClose={() => setOpenProduct(null)}
        />
      )}
    </section>
  );
}
