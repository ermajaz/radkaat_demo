"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import OrderList from "@/components/orders/OrderList";
import EmptyOrdersState from "@/components/orders/EmptyOrderState";

// --------------------
// 🔹 Types
// --------------------
export type OrderStatus =
  | "All"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";
export type MonthFilter = "All" | "October" | "September" | "August";

export interface OrderProduct {
  id: string;
  title: string;
  image?: string;
}

export interface Order {
  id: string;
  date: string;
  month: string;
  total: number;
  status: OrderStatus;
  items: number;
  products?: OrderProduct[];
}

// --------------------
// 📦 Mock Orders with Product Images
// --------------------
const orders: Order[] = [
  {
    id: "ORD12345",
    date: "22 Oct 2025",
    month: "October",
    total: 14500,
    status: "Delivered",
    items: 3,
    products: [
      {
        id: "1",
        title: "Radkaat X1 Jacket",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
      {
        id: "2",
        title: "Radkaat Carbon Helmet",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
      {
        id: "3",
        title: "Radkaat Riding Gloves",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
    ],
  },
  {
    id: "ORD12346",
    date: "15 Oct 2025",
    month: "October",
    total: 2999,
    status: "Shipped",
    items: 1,
    products: [
      {
        id: "4",
        title: "Radkaat Touring Backpack",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
    ],
  },
  {
    id: "ORD12347",
    date: "12 Oct 2025",
    month: "October",
    total: 8799,
    status: "Processing",
    items: 2,
    products: [
      {
        id: "5",
        title: "Radkaat Riding Boots",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
      {
        id: "6",
        title: "Radkaat Carbon Gloves",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
    ],
  },
  {
    id: "ORD12348",
    date: "25 Sep 2025",
    month: "September",
    total: 6500,
    status: "Cancelled",
    items: 1,
    products: [
      {
        id: "7",
        title: "Radkaat Bluetooth Helmet",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
    ],
  },
  {
    id: "ORD12349",
    date: "02 Sep 2025",
    month: "September",
    total: 4300,
    status: "Delivered",
    items: 1,
    products: [
      {
        id: "8",
        title: "Radkaat Urban Riding Pants",
        image: "/images/bikes/bike-highlight-1.jpg",
      },
    ],
  },
];

// --------------------
// ⚙️ Filters
// --------------------
const statuses: OrderStatus[] = [
  "All",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];
const months: MonthFilter[] = ["All", "October", "September", "August"];

// --------------------
// 🧭 Component
// --------------------
export default function OrdersPage() {
  const [activeStatus, setActiveStatus] = useState<OrderStatus>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMonth, setSortMonth] = useState<MonthFilter>("All");

  // 🧠 Filter + Search + Sort Logic
  const filteredOrders = useMemo(() => {
    return orders
      .filter((o) =>
        activeStatus === "All" ? true : o.status === activeStatus
      )
      .filter((o) => o.id.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((o) => (sortMonth === "All" ? true : o.month === sortMonth));
  }, [activeStatus, searchTerm, sortMonth]);

  return (
    <main className="min-h-screen bg-superblack text-white px-6 md:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* 🧭 Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-wide mb-2 flex items-center gap-3">
              My Orders
              <span className="text-sm font-medium text-white/60 border border-white/10 bg-white/5 px-3 py-1">
                {filteredOrders.length} Total
              </span>
            </h1>
          </div>

          {/* 🔍 Search + Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-white/40"
                size={16}
              />
              <input
                type="text"
                placeholder="Search Order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border border-white/10 pl-9 pr-3 py-2 text-sm text-white/90 placeholder:text-white/50 focus:outline-none focus:border-army transition-all"
              />
            </div>

            {/* Sort */}
            <div className="relative flex items-center gap-2">
              <Filter size={16} className="text-white/50" />
              <select
                value={sortMonth}
                onChange={(e) => setSortMonth(e.target.value as MonthFilter)}
                className="bg-white/10 border cursor-pointer border-white/10 text-sm px-3 py-2 focus:outline-none focus:border-army transition-all"
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

        {/* 🏷️ Status Filters */}
        <div className="flex flex-wrap gap-3 pt-4">
          {statuses.map((status) => (
            <motion.button
              key={status}
              onClick={() => setActiveStatus(status)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 text-sm font-medium cursor-pointer border ${
                activeStatus === status
                  ? "bg-army text-black border-army"
                  : "border-white/10 text-white/70 hover:bg-white/10"
              } transition-all`}
            >
              {status}
            </motion.button>
          ))}
        </div>

        {/* 🧾 Orders List */}
        {filteredOrders.length > 0 ? (
          <OrderList orders={filteredOrders} />
        ) : (
          <EmptyOrdersState />
        )}
      </motion.div>
    </main>
  );
}
