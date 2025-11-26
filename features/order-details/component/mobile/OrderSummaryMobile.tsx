"use client";

import { Order } from "@/features/orders/details/types/order-detail.types";
import { CreditCard } from "lucide-react";

export default function OrderSummaryMobile({ order }: { order: Order }) {
  const breakdown = order.priceBreakdown ?? {
    mrp: 0,
    gst: 0,
    gstPercent: 18, // fallback
    delivery: 0,
    coupon: 0,
    wallet: 0,
    total: order.total ?? 0,
  };

  return (
    <div className="p-5 rounded-xl bg-[#121212]/95 border border-[#2a2a2a] space-y-5">
      {/* TITLE */}
      <h3 className="text-sm font-semibold uppercase tracking-wide">
        Order Summary
      </h3>

      {/* PRICE BREAKDOWN */}
      <div className="space-y-3 text-xs text-white/60">
        {/* MRP */}
        <Row label="MRP" value={`₹${breakdown.mrp.toLocaleString()}`} />

        {/* GST WITH % */}
        <Row
          label={`GST (${18}%)`}
          value={`₹${breakdown.gst.toLocaleString()}`}
        />

        {/* DELIVERY CHARGES */}
        <Row
          label="Delivery Charges"
          value={
            breakdown.delivery > 0
              ? `₹${breakdown.delivery.toLocaleString()}`
              : "Free"
          }
        />

        {/* COUPON APPLIED */}
        {breakdown.coupon !== 0 && (
          <Row
            label="Coupon Applied"
            value={`-₹${Math.abs(breakdown.coupon).toLocaleString()}`}
            className="text-green-400"
          />
        )}

        {/* WALLET USED */}
        {breakdown.wallet !== 0 && (
          <Row
            label="Wallet Used"
            value={`-₹${Math.abs(breakdown.wallet).toLocaleString()}`}
            className="text-yellow-400"
          />
        )}

        {/* TOTAL */}
        <div className="border-t border-white/10 pt-3 flex justify-between text-white font-semibold text-sm">
          <span>Total Paid</span>
          <span>₹{breakdown.total.toLocaleString()}</span>
        </div>
      </div>

      {/* PAYMENT LINE */}
      <p className="text-[11px] text-green-400 flex items-center gap-1">
        <CreditCard size={12} /> Payment Successful
      </p>
    </div>
  );
}

const Row = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className={className}>{value}</span>
  </div>
);
