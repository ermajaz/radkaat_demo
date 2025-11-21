"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { MonthFilter, OrderStatus } from "@/features/orders/types/order.types";
import { orders } from "@/features/orders/utils/mock-orders";
import { OrderList } from "@/features/orders/components/OrderList";
import { EmptyOrdersState } from "@/features/orders/components/EmptyOrdersState";

const statuses: OrderStatus[] = [
  "All",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const months: MonthFilter[] = ["All", "October", "September", "August"];

export default function OrdersPage() {
  const [activeStatus, setActiveStatus] = useState<OrderStatus>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMonth, setSortMonth] = useState<MonthFilter>("All");

  const filteredOrders = useMemo(() => {
    return orders
      .filter((o) =>
        activeStatus === "All" ? true : o.status === activeStatus
      )
      .filter((o) =>
        o.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((o) =>
        sortMonth === "All" ? true : o.month === sortMonth
      );
  }, [activeStatus, searchTerm, sortMonth]);

  return (
    <main className="min-h-screen bg-superblack text-white px-6 md:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-3xl font-bold tracking-wide flex items-center gap-3">
            My Orders
            <span className="text-sm text-white/60 border border-white/10 bg-white/5 px-3 py-1">
              {filteredOrders.length} Total
            </span>
          </h1>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-2.5 text-white/40" />
              <input
                type="text"
                placeholder="Search Order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border border-white/10 pl-9 pr-3 py-2 text-sm text-white/90 placeholder:text-white/50 focus:border-army"
              />
            </div>

            <div className="relative flex items-center gap-2">
              <Filter size={16} className="text-white/50" />
              <select
                value={sortMonth}
                onChange={(e) =>
                  setSortMonth(e.target.value as MonthFilter)
                }
                className="bg-white/10 border border-white/10 text-sm px-3 py-2 cursor-pointer"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m === "All" ? "Sort by Month" : m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-3 pt-4">
          {statuses.map((status) => (
            <motion.button
              key={status}
              onClick={() => setActiveStatus(status)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1.5 text-sm font-medium border cursor-pointer ${
                activeStatus === status
                  ? "bg-army text-black border-army"
                  : "border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {status}
            </motion.button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <OrderList orders={filteredOrders} />
        ) : (
          <EmptyOrdersState />
        )}
      </motion.div>
    </main>
  );
}
