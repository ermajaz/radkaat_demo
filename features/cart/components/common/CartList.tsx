// components/cart/CartList.tsx
"use client";

import React from "react";
import { CartItem, CartProduct } from "./CartItem";
import { AnimatePresence } from "framer-motion";
import { CartEmpty } from "./CartEmpty";

type Props = {
  products: CartProduct[];
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export const CartList: React.FC<Props> = ({ products, onQtyChange, onRemove }) => {
  if (!products || products.length === 0) {
    return (
      <CartEmpty/>
    );
  }

  return (
    <div>
      <AnimatePresence initial={false}>
        {products.map((p) => (
          <CartItem key={p.id} product={p} onQtyChange={onQtyChange} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
};
