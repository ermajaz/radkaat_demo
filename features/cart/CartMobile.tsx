"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CartProduct } from "./components/common";
import { CartListMobile } from "./components/mobile/CartListMobile";
import { CartSummaryMobile } from "./components/mobile/CartSummaryMobile";

type Props = {
  initial: CartProduct[];
};

export default function CartMobile({ initial }: Props) {
  const [products, setProducts] = useState<CartProduct[]>(initial);
  const router = useRouter();

  const handleQtyChange = (id: string, qty: number) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handleRemove = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleVariantChange = (
    id: string,
    variant: { model?: string; color?: string }
  ) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              selectedModel: variant.model ?? p.selectedModel,
              selectedColor: variant.color ?? p.selectedColor,
            }
          : p
      )
    );
  };

  const subtotal = useMemo(
    () => products.reduce((s, p) => s + p.price * p.qty, 0),
    [products]
  );

  const itemCount = useMemo(
    () => products.reduce((s, p) => s + p.qty, 0),
    [products]
  );

  const handleCheckout = () => {
    router.push("/cart/address");
  };

  return (
    <section className="relative min-h-screen bg-superblack text-white flex flex-col pt-5">
      {/* Top shipping banner (simpler on mobile) */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-md border border-sandstorm/40 bg-[#101010] py-3 text-center text-[11px] uppercase tracking-[0.18em] text-sandstorm">
          <span className="relative z-10">
            Free shipping over <span className="text-white">₹10,000</span>
          </span>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-sandstorm/10 to-transparent blur-xl opacity-60" />
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-40">
        <CartListMobile
          products={products}
          onQtyChange={handleQtyChange}
          onRemove={handleRemove}
          onVariantChange={handleVariantChange}
        />
      </div>

      {/* Sticky bottom summary */}
      <CartSummaryMobile
        subtotal={subtotal}
        itemCount={itemCount}
        onCheckout={handleCheckout}
      />
    </section>
  );
}
