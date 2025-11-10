"use client";
import React, { useEffect, useState } from "react";
import { LoaderOne } from "@/components/common/LoaderOne";
import SmoothScroll from "./SmoothScroll";
import { useIsMobile } from "@/hooks/useInMobile";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-superblack/80">
        {!isMobile && <SmoothScroll />}
        <LoaderOne />
      </div>
    );
  }

  return <>{children}</>;
}
