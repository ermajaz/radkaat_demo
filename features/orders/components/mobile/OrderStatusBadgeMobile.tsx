"use client";

export default function OrderStatusBadgeMobile({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: "text-green-400 bg-green-500/15 border-green-500/20",
    Shipped: "text-blue-400 bg-blue-500/15 border-blue-500/20",
    Processing: "text-yellow-400 bg-yellow-500/15 border-yellow-500/20",
    Cancelled: "text-red-400 bg-red-500/15 border-red-500/20",
  };

  return (
    <span
      className={`
        text-[10px] px-2 py-1 rounded-full border
        ${colors[status] || "text-white/60 bg-white/10 border-[#2a2a2a]"}
      `}
    >
      {status}
    </span>
  );
}
