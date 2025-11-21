import { Order } from "../types/order.types";


export const orders: Order[] = [
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
        image: "/images/bike-highlight-1.jpg",
      },
      {
        id: "2",
        title: "Radkaat Carbon Helmet",
        image: "/images/bike-highlight-1.jpg",
      },
      {
        id: "3",
        title: "Radkaat Riding Gloves",
        image: "/images/bike-highlight-1.jpg",
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
        image: "/images/bike-highlight-1.jpg",
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
        image: "/images/bike-highlight-1.jpg",
      },
      {
        id: "6",
        title: "Radkaat Carbon Gloves",
        image: "/images/bike-highlight-1.jpg",
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
        image: "/images/bike-highlight-1.jpg",
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
        image: "/images/bike-highlight-1.jpg",
      },
    ],
  },
];
