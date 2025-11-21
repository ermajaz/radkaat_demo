export const validateCoupon = (code: string) => {
  const formatted = code.trim().toUpperCase();

  if (formatted === "SAVE20") {
    return {
      code: formatted,
      discount: 20,
      expiry: "2025-12-31",
      usage: 42,
    };
  }

  return null;
};
