"use client";

import { Order } from "@/types/order";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderDetailsHeader({ order }: { order: Order }) {
  return (
    <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">Order #{order.id}</h2>
          <p className="text-sm text-white/60 mt-1">
            Placed on {order.date} • {order?.products?.length} items
          </p>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>
    </div>
  );
}
