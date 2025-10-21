// components/cart/CartList.tsx
"use client";

import React from "react";
import { CartItem, CartProduct } from "./CartItem";
import { AnimatePresence } from "framer-motion";

type Props = {
  products: CartProduct[];
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export const CartList: React.FC<Props> = ({ products, onQtyChange, onRemove }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-12 text-center text-gray-400">
        Your cart is empty.
      </div>
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
