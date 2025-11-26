"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Order } from "../../types/order.types";
import OrderStatusBadgeMobile from "./OrderStatusBadgeMobile";

export default function OrderCardMobile({ order }: { order: Order }) {
  const preview = order.products?.[0];

  // ✅ Mock invoice link (replace with real API URL)
  const invoiceUrl = `/invoices/${order.id}.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-xl border border-[#2a2a2a]
        bg-[#121212]/95 backdrop-blur-md
        p-4 space-y-4
      "
    >
      {/* ✅ Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-white/50">{order.date}</p>
        <OrderStatusBadgeMobile status={order.status} />
      </div>

      {/* ✅ Product Preview Section */}
      <div className="flex gap-3 items-center">
        <div className="w-16 h-16 rounded-lg bg-[#181818] border border-[#2a2a2a] overflow-hidden">
          <Image
            src={preview?.image || "/images/placeholder-product.png"}
            alt="product"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold">
            Order <span className="text-sandstorm">#{order.id}</span>
          </p>
          <p className="text-xs text-white/60 mt-1">
            {order.items} item — ₹{order.total.toLocaleString()}
          </p>
        </div>
      </div>

      {/* ✅ Action Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        {/* 📄 Invoice Download */}
        <Link
          href={invoiceUrl}
          download
          className="
            flex items-center gap-1 text-[11px]
            text-white/70 px-2 py-1.5
            border border-white/15 rounded-md
            hover:text-sandstorm hover:border-sandstorm/40
            transition-all
          "
        >
          <Download size={14} />
          Invoice
        </Link>

        {/* 🔍 View Details */}
        <Link
          href={`/orders/${order.id}`}
          className="
            flex items-center gap-1 text-[11px]
            uppercase tracking-wide text-sandstorm
          "
        >
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
