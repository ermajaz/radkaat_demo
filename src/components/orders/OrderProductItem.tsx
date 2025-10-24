"use client";

import { OrderProduct } from "@/types/order";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrderProductItem({ product }: { product: OrderProduct }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-white/10 py-6 flex gap-6 group"
    >
      <div className="w-[110px] h-[90px] bg-[#101010] overflow-hidden flex-shrink-0 flex items-center justify-center">
        <Image
          src={product.image ?? "/images/placeholder-product.png"}
          alt={product.title}
          width={110}
          height={90}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white leading-snug">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">SKU: {product.sku}</p>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <span className="text-sm text-gray-400">Qty: {product.qty}</span>
          <span className="text-lg font-semibold text-white">
            ₹{(product.price * product.qty).toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
