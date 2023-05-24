import { createSelector, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Filters, Product } from "../../app/types";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState();

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    readProductsData(state, action) {
      const entities: { [key: string]: Product } = {};
      const ids: string[] = [];

      action.payload.forEach((product: Product) => {
        ids.push(product.id);
        entities[product.id] = product;
      });

      return { entities, ids };
    }
  },
});

export const { readProductsData } = productsSlice.actions;

export const {
  selectAll,
  selectById: selectProductsById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);

export const selectAllProducts = (state: RootState) => selectAll(state) as Product[];

export const selectFilteredProducts = createSelector(
  [
    selectAllProducts,
    (state: RootState, filters: Filters) => filters
  ],
  (products: any[], filters: Filters) => {
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