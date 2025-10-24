export type OrderStatus = "All" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

export interface OrderProduct {
  id: string;
  title: string;
  sku?: string;
  price: number;
  qty: number;
  image?: string;
  variant?: string;
  color?: string;
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
  deliveryDate?: string;
  priceBreakdown?: {
    mrp: number;
    gst: number;
    delivery: number;
    coupon: number;
    wallet: number;
    total: number;
  };
  products?: OrderProduct[];
}
