"use client";

import { Order } from "@/types/order";
import { CreditCard } from "lucide-react";

export default function OrderSummary({ order }: { order: Order }) {
  return (
    <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
      <div className="text-sm text-white/70 space-y-2">
        <p>Total: ₹{order.total.toLocaleString("en-IN")}</p>
        <p>Payment: {order.payment}</p>
        <p>Address: {order.address}</p>
      </div>
      <div className="flex items-center gap-2 text-green-400 text-sm mt-3">
        <CreditCard size={14} /> Payment Successful
      </div>
    </div>
  );
}
