"use client";

import { motion } from "framer-motion";
import { CalendarDays, Truck, Download } from "lucide-react";
import Link from "next/link";
import { Order } from "../types/order-detail.types";
import OrderStatusBadge from "../../components/OrderStatusBadge";

export default function OrderDetailsHeader({ order }: { order: Order }) {
  // Mock invoice link (replace with real API/URL)
  const invoiceUrl = `/invoices/${order.id}.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden bg-white/6 backdrop-blur-xl border border-white/10 p-6 shadow-lg"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Section — Order Info */}
        <div>
          <h2 className="text-2xl font-semibold">
            Order <span className="text-army">#{order.id}</span>
          </h2>

          <p className="text-sm text-white/60 mt-1 flex items-center gap-2">
            <CalendarDays size={14} /> Placed on {order.date} •{" "}
            {order?.products?.length} items
          </p>

          {order.deliveryDate && (
            <p className="text-xs text-green-400 mt-2 flex items-center gap-2">
              <Truck size={14} /> Expected delivery by {order.deliveryDate}
            </p>
          )}
        </div>

        {/* Right Section — Status + Invoice */}
        <div className="flex items-center gap-3">
          <OrderStatusBadge status={order.status} />

          {/* 🧾 Invoice Download Button */}
          <Link
            href={invoiceUrl}
            download
            className="flex items-center gap-2 px-4 py-1.5 border border-army bg-army/15 text-army text-sm font-medium
                       hover:bg-army/20 hover:text-white hover:shadow-[0_0_12px_rgba(154,205,50,0.4)]
                       transition-all duration-300"
          >
            <Download size={16} />
            Invoice
          </Link>
        </div>
      </div>

      {/* Decorative Glow */}
      <motion.div
        className="absolute inset-0 bg-linear-to-tr from-army/10 via-transparent to-transparent blur-2xl opacity-30 -z-10"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
