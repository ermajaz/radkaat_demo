"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantityStepper } from "./QuantityStepper";
import Image from "next/image";

export type CartProduct = {
  id: string;
  title: string;
  desc?: string;
  sku?: string;
  price: number;
  qty: number;
  image?: string;
};

type Props = {
  product: CartProduct;
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export const CartItem: React.FC<Props> = ({
  product,
  onQtyChange,
  onRemove,
}) => {
  const subtotal = product.price * product.qty;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="border-t border-[#2a2a2a] py-6 flex gap-6 group"
    >
      {/* Image */}
      <div className="w-[110px] h-[90px] bg-[#101010] overflow-hidden shrink-0 flex items-center justify-center">
        <Image
          src={product.image ?? "/images/placeholder-product.png"}
          alt={product.title}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
          width={110}
          height={90}
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title & Info */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide leading-snug group-hover:text-army transition-colors duration-300">
            {product.title}
          </h3>

          {product.desc && (
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              {product.desc}
            </p>
          )}
          {product.sku && (
            <p className="text-xs text-gray-500 mt-1 tracking-wide">
              SKU: {product.sku}
            </p>
          )}
        </div>

        {/* Controls + Price */}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex items-center gap-5">
            <QuantityStepper
              value={product.qty}
              onChange={(q) => onQtyChange(product.id, q)}
            />
            <button
              onClick={() => onRemove(product.id)}
              className="text-[11px] cursor-pointer uppercase tracking-wider border-b border-transparent text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
              aria-label={`Remove ${product.title}`}
            >
              Remove
            </button>
          </div>

          <div className="text-right space-y-1">
            <div className="text-[13px] text-gray-400 font-light">
              ₹{product.price.toLocaleString("en-IN")}
            </div>
            <div className="text-xl font-semibold text-white">
              ₹{subtotal.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
