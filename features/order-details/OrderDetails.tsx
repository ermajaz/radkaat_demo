"use client";
import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import OrderDetailsDesktop from "./OrderDetailsDesktop";
import OrderDetailsMobile from "./OrderDetailsMobile";

export default function OrderDetails() {

    return (
        <>{useResponsiveComponent(<OrderDetailsMobile />, <OrderDetailsDesktop />)}</>
    )

}