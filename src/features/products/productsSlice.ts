import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Filters, Product } from "../../app/types";

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    readProductsData(state, action) {
      return action.payload;
    }
  },
});

export const { readProductsData } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;
export const selectFilteredProducts = createSelector(
  [
    selectProducts,
    (state: RootState, filters: Filters) => filters
  ],
  (products: Product[], filters: Filters) => {
    let usedProducts = [...products];

    if(filters.brand) {
      usedProducts = usedProducts.filter(product => product.company === filters.brand);
    }
    if(filters.sort) {
      usedProducts.sort((a, b) => {
        if(filters.sort === 'nameAsc') {
          return a.name.localeCompare(b.name);
        }
        if(filters.sort === 'nameDesc') {
          return b.name.localeCompare(a.name);
        }
        if(filters.sort === 'priceAsc') {
          return a.price - b.price;
        }
        if(filters.sort === 'priceDesc') {
          return b.price - a.price;
        }

        return 0;
      });
    }
    if(filters.price.length) {
      const min = Math.min(...filters.price);
      const max = Math.max(...filters.price);
      usedProducts = usedProducts.filter(product => product.price >= min && product.price <= max);
    }

    return usedProducts;
  },
);

export default productsSlice.reducer;