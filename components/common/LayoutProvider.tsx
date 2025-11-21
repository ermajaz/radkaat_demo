"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // routes where BOTH header and footer are hidden
  const noLayoutRoutes = [
    "/cart",
    "/cart/address",
    "/cart/payment",
    "/experience",
    "/test-ride",
  ];

  // routes where ONLY footer is hidden (header visible)
  const headerOnlyRoutes = [
    "/signin",
    "/signup",
    "/reset-password",
  ];

  const isNoLayout = noLayoutRoutes.some((path) => pathname.startsWith(path));
  const isHeaderOnly = headerOnlyRoutes.some((path) => pathname.startsWith(path));

  return (
    <>
      {/* Render Header only if not in NO-LAYOUT routes */}
      {!isNoLayout && <Header />}

      {children}

      {/* Render Footer only if NOT in: noLayout OR headerOnly routes */}
      {!isNoLayout && !isHeaderOnly && <Footer />}
    </>
  );
};
