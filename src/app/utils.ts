export function parsePrice(price: number): string {
  return '$' + (price / 100).toFixed(2);
}

export function clamp(min: number, actual: number, max: number): number {
  return Math.min(Math.max(min, actual), max);
}