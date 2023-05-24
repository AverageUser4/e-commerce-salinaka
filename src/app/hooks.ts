import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import { productsData } from './database';
import { readProductsData } from "../features/products/productsSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useProductsData() {
  const products = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  if(!products.ids.length) {
    dispatch(readProductsData(productsData));
  }
}