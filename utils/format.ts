// Format currency: ₹12,345.67
export function formatCurrency(
  amount: number | string,
  currency: string = "INR",
  locale: string = "en-IN"
): string {
  const value = typeof amount === "string" ? Number(amount) : amount;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

// Format number with commas: 12,345
export function formatNumber(num: number | string): string {
  const value = typeof num === "string" ? Number(num) : num;
  return value.toLocaleString("en-IN");
}

// Format date: 05 Jan 2025
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Format time: 10:45 PM
export function formatTime(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Convert full name: “majazul haque” → “Majazul Haque”
export function formatName(name: string): string {
  return name
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .join(" ");
}

// Mask phone: 9876543210 → 98*****210
export function maskPhone(phone: string): string {
  return phone.replace(/(\d{2})\d{5}(\d{3})/, "$1*****$2");
}

// Trim and normalize whitespace
export function normalizeString(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}
