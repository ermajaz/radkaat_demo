"use client";

import { order } from "../orders/details/utils/mock-order";
import OrderDetailsHeaderMobile from "./component/mobile/OrderDetailsHeaderMobile";
import OrderProductItemMobile from "./component/mobile/OrderProductItemMobile";
import OrderSummaryMobile from "./component/mobile/OrderSummaryMobile";
import OrderTimelineMobile from "./component/mobile/OrderTimelineMobile";

export default function OrderDetailsMobile() {
  return (
    <main className="min-h-screen bg-superblack text-white px-4 py-6 space-y-6">
      <OrderDetailsHeaderMobile order={order} />

      <div className="space-y-4">
        {order.products.map((p) => (
          <OrderProductItemMobile key={p.id} product={p} />
        ))}
      </div>

      <OrderSummaryMobile order={order} />

      <OrderTimelineMobile status={order.status} />

      <div className="h-10" /> {/* safe bottom padding */}
    </main>
  );
}
