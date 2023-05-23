import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Filters {
  brand: string,
  sort: string,
  price: number[],
}

const initialState: Filters = {
  brand: '',
  sort: '',
  price: [0, 1_000_000],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersUpdated(state, action) {
      state = action.payload;
    }
  },
});

export const selectFilters = (state: RootState) => state.filters;

export const { filtersUpdated } = filtersSlice.actions;

export default filtersSlice.reducer;