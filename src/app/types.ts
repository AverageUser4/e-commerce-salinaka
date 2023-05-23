export interface ProductColor {
  value: string,
  quantity: number,
}

export interface Product {
  company: string,
  name: string,
  description: string,
  colors: ProductColor[],
  isFeatured: boolean,
  isRecommended: boolean,
  price: number,
  id: string,
  src: string,
}

export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

export interface Filters {
  brand: string,
  sort: 'nameAsc' | 'nameDesc' | 'priceAsc' | 'priceDesc' | '',
  price: number[],
}