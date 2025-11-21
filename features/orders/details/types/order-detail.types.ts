export interface OrderProduct {
  id: string;
  title: string;
  sku: string;
  price: number;
  qty: number;
  image?: string;
  variant?: string;
  color?: string;
}

export interface PriceBreakdown {
  mrp: number;
  gst: number;
  delivery: number;
  coupon: number;
  wallet: number;
  total: number;
}

export interface Order {
  id: string;
  date: string;
  month: string;
  total: number;
  status: string;
  items: number;
  address: string;
  payment: string;
  deliveryDate?: string;
  priceBreakdown: PriceBreakdown;
  products: OrderProduct[];
}
