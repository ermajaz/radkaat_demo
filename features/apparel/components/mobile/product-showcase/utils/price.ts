export function calculateDiscount(
  mrp: number,
  offerPrice: number
): { discountPercent: number } {
  if (!mrp || !offerPrice || offerPrice >= mrp) {
    return { discountPercent: 0 };
  }

  const discountPercent = Math.round(((mrp - offerPrice) / mrp) * 100);

  return { discountPercent };
}
