"use client";

import { OrderDetailsHeader, OrderProductItem, OrderSummary, OrderTimeline } from "@/features/orders/details/components";
import { order } from "@/features/orders/details/utils/mock-order";
import { motion } from "framer-motion";



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
            {order.products.map((p) => (
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
