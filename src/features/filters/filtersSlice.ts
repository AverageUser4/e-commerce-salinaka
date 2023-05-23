import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Filters } from "../../app/types";

const initialState: Filters = {
  brand: '',
  sort: '',
  price: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersChanged(state, action) {
      return action.payload;
    },
    brandReset(state) {
      state.brand = initialState.brand;
    },
    sortReset(state) {
      state.sort = initialState.sort;
    },
    priceReset(state) {
      state.price = initialState.price;
    },
  },
});

export const selectFilters = (state: RootState) => state.filters;

export const { filtersChanged, brandReset, sortReset, priceReset } = filtersSlice.actions;

export default filtersSlice.reducer;