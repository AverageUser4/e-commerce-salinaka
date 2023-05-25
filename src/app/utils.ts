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

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function propertiesMatch(obj1: { [key: string]: any }, obj2: { [key: string]: any }, properties: string[]) {
  for(let property of properties) {
    if(obj1[property] !== obj2[property]) {
      return false;
    }
  }

  return true;
}