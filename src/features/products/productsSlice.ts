import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

export default productsSlice.reducer;