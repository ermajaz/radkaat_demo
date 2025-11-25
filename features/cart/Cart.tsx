"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import CartDesktop from "./CartDesktop";
import { CartProduct } from "./components/common";
import CartMobile from "./CartMobile";




const initial: CartProduct[] = [
    {
        id: "p1",
        title: "SB120 TI2 2026",
        desc: "DT Swiss XMC 1700 30MM Carbon Wheelset",
        sku: "B26120TSMPTUFAT1243W0",
        price: 9000,
        qty: 1,
        image: "/images/hero-bike-new.png",

        models: ["SM", "MD", "LG"],

        colors: [
            { name: "Turquoise", hex: "#2EC4B6" },
            { name: "Black", hex: "#0A0A0A" },
            { name: "Army Green", hex: "#4B5320" },
        ],

        selectedModel: "SM",
        selectedColor: "Turquoise",
    },

    {
        id: "p2",
        title: "SB160 TEAM ISSUE 2025",
        desc: "DT Swiss XMC 1700 30MM Carbon Wheelset",
        sku: "B26120TSMPTUFAT1243W0",
        price: 13500,
        qty: 3,
        image: "/images/hero-bike-new.png",

        models: ["MD", "LG", "XL"],

        colors: [
            { name: "Team Red", hex: "#A30000" },
            { name: "Stealth Black", hex: "#111111" },
        ],

        selectedModel: "SM",
        selectedColor: "Turquoise",
    },
    {
        id: "p3",
        title: "SB160 TEAM ISSUE 2025",
        desc: "DT Swiss XMC 1700 30MM Carbon Wheelset",
        sku: "B26120TSMPTUFAT1243W0",
        price: 13500,
        qty: 3,
        image: "/images/hero-bike-new.png",

        models: ["MD", "LG", "XL"],

        colors: [
            { name: "Team Red", hex: "#A30000" },
            { name: "Stealth Black", hex: "#111111" },
        ],

        selectedModel: "SM",
        selectedColor: "Turquoise",
    },
];

export default function Cart() {

    return (
        <>
            {useResponsiveComponent(
                <CartMobile initial={initial} />,
                <CartDesktop initial={initial} />
            )}
        </>
    );
}