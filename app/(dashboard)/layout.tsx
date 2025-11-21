// src/app/(dashboard)/layout.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Very small client-side guard. In production prefer server-side middleware or JWT cookie checks.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // SIMPLE auth check (replace with your auth logic)
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    // if (!token) {
    //   router.push("/signin");
    // }
  }, [router]);

  return (
    <div className="min-h-screen container mx-auto py-8">
      {/* optionally a dashboard sidebar/nav */}
      {children}
    </div>
  );
}
