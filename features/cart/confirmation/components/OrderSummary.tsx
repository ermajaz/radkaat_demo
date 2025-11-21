"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Wallet, TicketPercent, Calendar } from "lucide-react";

interface OrderSummaryProps {
  order: {
    orderId: string;
    amount: number;
    discount: number;
    paymentMethod: string;
  } | null;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  if (!order) return null;

  const finalAmount = order.amount - (order.amount * order.discount) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        relative border border-[#2b2b2b] bg-linear-to-b from-[#111]/80 to-[#090909]/80
        backdrop-blur-md p-8 md:p-10 space-y-5 shadow-[inset_0_0_15px_rgba(139,169,137,0.1)]
      "
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-army/40 to-transparent" />

      <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-army mb-2">
        Order Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <SummaryRow icon={<Package size={16} />} label="Order ID" value={order.orderId} />
        <SummaryRow
          icon={<Calendar size={16} />}
          label="Order Date"
          value={new Date().toLocaleDateString()}
        />
        <SummaryRow
          icon={<TicketPercent size={16} />}
          label="Discount"
          value={`${order.discount}%`}
        />
        <SummaryRow
          icon={<Wallet size={16} />}
          label="Payment Method"
          value={order.paymentMethod}
        />
      </div>

      <div className="pt-4 mt-4 border-t border-[#2b2b2b] flex justify-between items-center text-lg font-semibold">
        <span className="text-gray-300">Total Paid</span>
        <span className="text-army text-2xl font-bold">₹{finalAmount.toLocaleString()}</span>
      </div>
    </motion.div>
  );
};

const SummaryRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between items-center border-b border-[#222] py-2">
    <div className="flex items-center gap-2 text-gray-400">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-white font-medium">{value}</span>
  </div>
);
