"use client";

import { motion } from "framer-motion";
import OrderDetailsHeader from "@/components/orders/OrderDetailsHeader";
import OrderProductItem from "@/components/orders/OrderProductItem";
import OrderSummary from "@/components/orders/OrderSummary";
import OrderTimeline from "@/components/orders/OrderTimeline";
import { Order } from "@/types/order";

// 🧱 Mock Data (replace with dynamic fetch later)
const order: Order = {
  id: "ORD12345",
  date: "22 Oct 2025",
  month: "October",
  total: 14500,
  status: "Delivered",
  items: 2,
  address: "123 Marine Drive, Mumbai, India",
  payment: "Credit Card",
  products: [
    {
      id: "1",
      title: "Radkaat X1 Jacket",
      sku: "RKTXJ-22",
      price: 7999,
      qty: 1,
      image: "/images/products/jacket.jpg",
    },
    {
      id: "2",
      title: "Radkaat Carbon Helmet",
      sku: "RKH-23",
      price: 6500,
      qty: 1,
      image: "/images/products/helmet.jpg",
    },
  ],
};

export default function OrderDetailsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0a0a0a] text-white px-6 md:px-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-10"
      >
        {/* 🧾 Header */}
        <OrderDetailsHeader order={order} />

        <div className="grid md:grid-cols-3 gap-10">
          {/* 🛒 Products List */}
          <div className="md:col-span-2 space-y-5">
            {order.products && order.products.length > 0 ? (
              order.products.map((p) => (
                <OrderProductItem key={p.id} product={p} />
              ))
            ) : (
              <p className="text-white/60 text-sm">No products found in this order.</p>
            )}
          </div>

          {/* 📦 Summary + Tracking */}
          <div className="space-y-6">
            <OrderSummary order={order} />
            <OrderTimeline status={order.status} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
