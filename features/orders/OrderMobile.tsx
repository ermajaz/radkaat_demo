"use client";

import { useMemo, useState } from "react";
import { MonthFilter, OrderStatus } from "./types/order.types";
import { orders } from "./utils/mock-orders";
import OrderSearchBarMobile from "./components/mobile/OrderSearchBarMobile";
import OrderStatusTabsMobile from "./components/mobile/OrderStatusTabsMobile";
import OrderMonthFilterMobile from "./components/mobile/OrderMonthFilterMobile";
import OrderListMobile from "./components/mobile/OrderListMobile";
import EmptyOrdersStateMobile from "./components/mobile/EmptyOrdersStateMobile";

const months: MonthFilter[] = ["All", "October", "September", "August"];

const statuses: OrderStatus[] = [
  "All",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function OrderMobile() {
  const [activeStatus, setActiveStatus] = useState<OrderStatus>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMonth, setSortMonth] = useState<MonthFilter>("All");

  const filteredOrders = useMemo(() => {
    return orders
      .filter((o) =>
        activeStatus === "All" ? true : o.status === activeStatus
      )
      .filter((o) => o.id.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((o) => (sortMonth === "All" ? true : o.month === sortMonth));
  }, [activeStatus, searchTerm, sortMonth]);

  return (
    <main className="min-h-screen bg-superblack text-white px-4 pb-24">
      {/* ✅ Sticky Header */}
      <div className="sticky top-0 z-30 bg-superblack backdrop-blur-md pt-5 pb-3">
        <h1 className="text-xl font-semibold tracking-wide flex items-center gap-2">
          My Orders
          <span className="text-[10px] text-white/60 bg-white/10 px-2 py-1 rounded-full">
            {filteredOrders.length}
          </span>
        </h1>

        <OrderSearchBarMobile value={searchTerm} onChange={setSearchTerm} />
        <OrderStatusTabsMobile
          active={activeStatus}
          setActive={setActiveStatus}
          statuses={statuses}
        />
      </div>

      {/* ✅ Month Filter */}
      <OrderMonthFilterMobile
        months={months}
        active={sortMonth}
        setActive={setSortMonth}
      />

      {/* ✅ List */}
      {filteredOrders.length > 0 ? (
        <OrderListMobile orders={filteredOrders} />
      ) : (
        <EmptyOrdersStateMobile />
      )}
    </main>
  );
}
