"use client";
import React, { useEffect, useState } from "react";
import { LoaderOne } from "@/components/common/LoaderOne";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-superblack/80">
        <LoaderOne />
      </div>
    );
  }

  return <>{children}</>;
}
