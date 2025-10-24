"use client";

import { Order } from "@/app/orders/page";
import OrderCard from "./OrderCard";

export default function OrderList({ orders }: { orders: Order[] }) {
  return (
    <div className="grid grid-cols-1 gap-5">
      {orders?.map((order, idx) => (
        <OrderCard key={idx} order={order} />
      ))}
    </div>
  );
}
