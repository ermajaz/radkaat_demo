"use client";

import { motion } from "framer-motion";
import { Package, Wallet, TicketPercent, Calendar } from "lucide-react";

export default function OrderSummaryMobile({
  order,
}: {
  order: {
    orderId: string;
    amount: number;
    discount: number;
    paymentMethod: string;
  } | null;
}) {
  if (!order) return null;

  const finalAmount = order.amount - (order.amount * order.discount) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-[#2a2a2a] bg-[#121212]/95/70 backdrop-blur-md p-5 space-y-5"
    >
      <h2 className="text-sm uppercase tracking-wide text-army font-semibold">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">
        <Row icon={<Package size={14} />} label="Order ID" value={order.orderId} />
        <Row
          icon={<Calendar size={14} />}
          label="Date"
          value={new Date().toLocaleDateString()}
        />
        <Row
          icon={<TicketPercent size={14} />}
          label="Discount"
          value={`${order.discount}%`}
        />
        <Row
          icon={<Wallet size={14} />}
          label="Payment"
          value={order.paymentMethod}
        />
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-[#2a2a2a]">
        <span className="text-white/60 text-sm">Total Paid</span>
        <span className="text-army text-xl font-bold">
          ₹{finalAmount.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
}

const Row = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-white/50">
      {icon}
      {label}
    </div>
    <span className="text-white font-medium">{value}</span>
  </div>
);
