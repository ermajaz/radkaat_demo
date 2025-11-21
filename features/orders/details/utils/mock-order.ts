import { Order } from "../types/order-detail.types";


export const order: Order = {
  id: "ORD12345",
  date: "22 Oct 2025",
  month: "October",
  total: 14500,
  status: "Processing",
  items: 2,
  address: "123 Marine Drive, Mumbai, India",
  payment: "Credit Card",
  deliveryDate: "30 Oct 2025",
  priceBreakdown: {
    mrp: 13999,
    gst: 1200,
    delivery: 0,
    coupon: -500,
    wallet: -199,
    total: 14500,
  },
  products: [
    {
      id: "1",
      title: "Radkaat X1 Jacket",
      sku: "RKTXJ-22",
      price: 7999,
      qty: 1,
      image: "/images/bike-highlight-1.jpg",
      variant: "Size: L",
      color: "#1E90FF",
    },
    {
      id: "2",
      title: "Radkaat Carbon Helmet",
      sku: "RKH-23",
      price: 6500,
      qty: 1,
      image: "/images/bike-highlight-1.jpg",
      variant: "Finish: Matte Black",
      color: "#000000",
    },
  ],
};
