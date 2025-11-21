"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, PackageOpen, Download } from "lucide-react";
import OrderStatusBadge from "./OrderStatusBadge";
import Link from "next/link";
import Image from "next/image";
import { Order } from "../types/order.types";

export default function OrderCard({ order }: { order: Order }) {
  const previewProducts = order.products?.slice(0, 3) ?? [];
  const extraCount =
    order.products && order.products.length > 3
      ? order.products.length - 3
      : 0;

  // Mock invoice link (replace with actual API endpoint or static URL)
  const invoiceUrl = `/invoices/${order.id}.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden border border-white/10 bg-white/4 hover:bg-white/[0.07] transition-all duration-500 backdrop-blur-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] group"
    >
      {/* ✨ Ambient Glow */}
      <motion.div
        className="absolute inset-0 -z-10 bg-linear-to-br from-white/5 via-transparent to-transparent blur-2xl opacity-30"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Calendar size={14} /> {order.date}
          </div>
          <h3 className="text-xl font-semibold tracking-wide leading-snug">
            Order <span className="text-army">#{order.id}</span>
          </h3>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      {/* Product Previews */}
      {previewProducts.length > 0 && (
        <div className="relative h-[100px] mb-6 flex items-center">
          <div className="relative flex items-center justify-start w-full">
            {previewProducts.map((p, idx) => {
              const rotation = [-6, 0, 6][idx] || 0;
              const offset = idx * 45;
              const zIndex = 10 - idx;

              return (
                <motion.div
                  key={p.id}
                  className="absolute"
                  style={{
                    left: `${offset}px`,
                    zIndex,
                    rotate: rotation,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    rotate: rotation / 2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative w-[90px] h-[90px] rounded-xl overflow-hidden border border-white/10 bg-[#101010] shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] transition-all">
                    <Image
                      src={
                        p.image && p.image.startsWith("http")
                          ? p.image
                          : p.image
                          ? p.image
                          : "/images/placeholder-product.png"
                      }
                      alt={p.title || "Product"}
                      fill
                      sizes="90px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* +N more badge */}
            {extraCount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute left-40 w-20 h-20 bg-white/10 border border-white/20 flex items-center justify-center text-sm text-white/80 backdrop-blur-md"
              >
                +{extraCount} more
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-4">
        {/* Order Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center shadow-[inset_0_0_6px_rgba(255,255,255,0.1)]">
            <PackageOpen size={18} className="text-white/70" />
          </div>
          <div>
            <p className="text-sm text-white/60">
              {order.items} item{order.items > 1 ? "s" : ""}
            </p>
            <p className="text-lg font-semibold text-white">
              ₹{order.total.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* 🧾 Invoice Button */}
          <Link
            href={invoiceUrl}
            download
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-army border border-army  bg-army/20 hover:text-white hover:shadow-[0_0_12px_rgba(154,205,50,0.4)] transition-all duration-300"
          >
            <Download size={16} /> Invoice
          </Link>

          {/* 🔍 View Details */}
          <Link
            href={`/orders/${order.id}`}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 px-4 py-2 border border-white/15 hover:bg-white/10 hover:text-army transition-all duration-300"
          >
            View Details
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <ArrowRight size={16} className="text-army" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
