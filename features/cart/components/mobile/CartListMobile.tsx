"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { CartProduct } from "../common";
import { CartItemMobile } from "./CartItemMobile";
import { CartEmptyMobile } from "./CartEmptyMobile";

type Props = {
  products: CartProduct[];
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onVariantChange: (
    id: string,
    variant: { model?: string; color?: string }
  ) => void;
};

export const CartListMobile: React.FC<Props> = ({
  products,
  onQtyChange,
  onRemove,
  onVariantChange,
}) => {
  if (!products || products.length === 0) return <CartEmptyMobile />;

  return (
    <div className="space-y-5">
      <AnimatePresence initial={false}>
        {products.map((p) => (
          <CartItemMobile
            key={p.id}
            product={p}
            onQtyChange={onQtyChange}
            onRemove={onRemove}
            onVariantChange={onVariantChange}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
