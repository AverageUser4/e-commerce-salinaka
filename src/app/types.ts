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