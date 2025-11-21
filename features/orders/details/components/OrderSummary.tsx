"use client";

import { CreditCard } from "lucide-react";
import { Order } from "../types/order-detail.types";

export default function OrderSummary({ order }: { order: Order }) {
  const breakdown = order.priceBreakdown ?? {
    mrp: 0,
    gst: 0,
    delivery: 0,
    coupon: 0,
    wallet: 0,
    total: order.total ?? 0,
  };

  return (
    <div className="bg-white/6 backdrop-blur-xl border border-white/10 p-6 space-y-5">
      <h3 className="text-lg font-semibold border-b border-white/10 pb-2">
        Order Summary
      </h3>

      {/* 🧮 Price Breakdown */}
      <div className="text-sm text-white/70 space-y-3">
        <div className="flex justify-between">
          <span>MRP Total</span>
          <span>₹{breakdown.mrp.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{breakdown.gst.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>
            {breakdown.delivery > 0
              ? `₹${breakdown.delivery}`
              : "Free"}
          </span>
        </div>
        <div className="flex justify-between text-green-400">
          <span>Coupon Discount</span>
          <span>
            -₹{Math.abs(breakdown.coupon).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="flex justify-between text-yellow-400">
          <span>Wallet Used</span>
          <span>
            -₹{Math.abs(breakdown.wallet).toLocaleString("en-IN")}
          </span>
        </div>

        <div className="border-t border-white/10 pt-3 flex justify-between font-semibold text-white">
          <span>Total Payable</span>
          <span>₹{breakdown.total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* 💳 Payment Info */}
      <div className="flex items-center gap-2 text-green-400 text-sm mt-3">
        <CreditCard size={14} />{" "}
        {order.payment
          ? `Payment Successful via ${order.payment}`
          : "Payment Method: N/A"}
      </div>
    </div>
  );
}
