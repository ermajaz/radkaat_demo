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
