/*
 * THIS CODE IS OUR OWN WORK, IT WAS WRITTEN WITHOUT CONSULTING
 * A TUTOR OR CODE WRITTEN BY OTHER STUDENTS OUTSIDE OF OUR TEAM.
 * - Danny Chen, Ruilin Chen, Leah Loukedis, Chloe Peyrebrune, Coralynn Yang, Sihao Zhang
 */

// Prices are stored as integer cents (listings.price_cents) so we never do float math on money.
// 0 means the item is free, which gets its own label rather than "$0".
export function formatPrice(cents: number): string {
  if (cents === 0) return "Free";
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(dollars) ? 0 : 2,
  });
}
