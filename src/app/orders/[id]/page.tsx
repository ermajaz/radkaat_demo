"use client";

import { motion } from "framer-motion";
import OrderDetailsHeader from "@/components/orders/OrderDetailsHeader";
import OrderProductItem from "@/components/orders/OrderProductItem";
import OrderSummary from "@/components/orders/OrderSummary";
import OrderTimeline from "@/components/orders/OrderTimeline";
import { Order } from "@/types/order";

const order: Order = {
  id: "ORD12345",
  date: "22 Oct 2025",
  month: "October",
  total: 14500,
  status: "Processing",
  items: 2,
  address: "123 Marine Drive, Mumbai, India",
  payment: "Credit Card",
  deliveryDate: "30 Oct 2025",
  priceBreakdown: {
    mrp: 13999,
    gst: 1200,
    delivery: 0,
    coupon: -500,
    wallet: -199,
    total: 14500,
  },
  products: [
    {
      id: "1",
      title: "Radkaat X1 Jacket",
      sku: "RKTXJ-22",
      price: 7999,
      qty: 1,
      image: "/images/bikes/bike-highlight-1.jpg",
      variant: "Size: L", // 🏷️ new field
      color: "#1E90FF", // 🎨 Blue variant (hex or color name)
    },
    {
      id: "2",
      title: "Radkaat Carbon Helmet",
      sku: "RKH-23",
      price: 6500,
      qty: 1,
      image: "/images/bikes/bike-highlight-1.jpg",
      variant: "Finish: Matte Black", // 🏷️ new field
      color: "#000000", // 🎨 Black variant
    },
  ],
};

export default function OrderDetailsPage() {
  return (
    <main className="min-h-screen bg-superblack text-white px-6 md:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <OrderDetailsHeader order={order} />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5">
            {order.products?.map((p) => (
              <OrderProductItem key={p.id} product={p} />
            ))}
          </div>

          <div className="space-y-6">
            <OrderSummary order={order} />
          </div>
        </div>
        <OrderTimeline status={order.status} />
      </motion.div>
    </main>
  );
}
