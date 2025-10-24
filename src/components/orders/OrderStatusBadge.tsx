"use client";

export default function OrderStatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: "bg-green-500/20 text-green-400 border-green-400/20",
    Shipped: "bg-blue-500/20 text-blue-400 border-blue-400/20",
    Processing: "bg-yellow-500/20 text-yellow-400 border-yellow-400/20",
    Cancelled: "bg-red-500/20 text-red-400 border-red-400/20",
  };

  return (
    <span
      className={`text-xs px-3 py-2 border font-semibold tracking-wide uppercase ${colors[status] || "bg-white/10 text-white/70 border-white/10"}`}
    >
      {status}
    </span>
  );
}
