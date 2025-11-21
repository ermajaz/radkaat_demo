"use client";

import { Order } from "../types/order.types";
import OrderCard from "./OrderCard";



export const OrderList = ({ orders }: { orders: Order[] }) => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};
