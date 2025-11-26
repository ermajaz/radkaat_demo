"use client";

import { Order } from "../../types/order.types";
import OrderCardMobile from "./OrderCardMobile";


export default function OrderListMobile({ orders }: { orders: Order[] }) {
  return (
    <div className="mt-6 space-y-4">
      {orders.map((order) => (
        <OrderCardMobile key={order.id} order={order} />
      ))}
    </div>
  );
}
