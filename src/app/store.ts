import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productsReducer from '../features/products/productsSlice';
import filtersReducer from '../features/filters/filtersSlice';
import basketReducer from '../features/basket/basketSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    basket: basketReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
