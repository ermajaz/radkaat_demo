"use client";

import { CalendarDays, Truck, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Order } from "@/features/orders/details/types/order-detail.types";
import OrderStatusBadgeMobile from "@/features/orders/components/mobile/OrderStatusBadgeMobile";

export default function OrderDetailsHeaderMobile({ order }: { order: Order }) {
  const invoiceUrl = `/invoices/${order.id}.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-[#111]/80 border border-white/10 p-5 space-y-4"
    >
      {/* ✅ TOP ROW — TITLE + STATUS */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Order <span className="text-sandstorm">#{order.id}</span>
        </h2>

        {/* ✅ STATUS BADGE NOW VISIBLE */}
        <OrderStatusBadgeMobile status={order.status} />
      </div>

      {/* ✅ DATE + ITEMS */}
      <p className="text-xs text-white/60 flex items-center gap-2">
        <CalendarDays size={14} /> Placed on {order.date} •{" "}
        {order.products.length} items
      </p>

      {/* ✅ DELIVERY INFO IF EXISTS */}
      {order.deliveryDate && (
        <p className="text-xs text-green-400 flex items-center gap-2">
          <Truck size={14} /> Delivery by {order.deliveryDate}
        </p>
      )}

      {/* ✅ INVOICE DOWNLOAD CTA */}
      <Link
        href={invoiceUrl}
        download
        className="
          w-full flex items-center justify-center gap-2 py-2 mt-2
          border border-sandstorm/40 text-sandstorm rounded-md
          text-xs uppercase tracking-wide active:scale-95 transition
        "
      >
        <Download size={14} /> Download Invoice
      </Link>
    </motion.div>
  );
}
