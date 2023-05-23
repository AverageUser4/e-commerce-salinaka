export function parsePrice(price: number, cutDecimal?: boolean): string {
  let parsed: number | string = (price / 100);
  if(!cutDecimal) {
    parsed = parsed.toFixed(2);
  }
  
  return '$' + parsed;
}

export function clamp(min: number, actual: number, max: number): number {
  return Math.min(Math.max(min, actual), max);
}