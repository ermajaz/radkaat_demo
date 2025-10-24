export type OrderStatus = "All" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

export interface OrderProduct {
  id: string;
  title: string;
  sku?: string;
  price: number;
  qty: number;
  image?: string;
}

export interface Order {
  id: string;
  date: string;
  month: string;
  total: number;
  status: OrderStatus;
  items: number;
  address?: string;
  payment?: string;
  products?: OrderProduct[];
}
