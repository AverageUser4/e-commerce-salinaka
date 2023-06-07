import { createSlice } from "@reduxjs/toolkit";
import { BasketItemType } from "../../app/types";
import { propertiesMatch } from "../../app/utils";
import { RootState } from "../../app/store";

function findExisting(state: BasketItemType[], payload: Object) {
  return state.find(item => propertiesMatch(item, payload, ['id', 'size', 'color']));
}

interface Action {
  payload: {
    id: string,
    color: string,
    size: string,
  }
}

const initialState: BasketItemType[] = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action: Action) {
      const existing = findExisting(state, action.payload);
      if(existing) {
        existing.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    subtractFromBasket(state, action: Action) {
      const existing = findExisting(state, action.payload);
      if(existing?.quantity && (existing.quantity > 1)) {
        existing.quantity--;
      } else {
        return state;
      }
    },
    removeFromBasket(state, action: Action) {
      const existing = findExisting(state, action.payload);
      if(existing) {
        state.splice(state.indexOf(existing), 1);
      } else {
        return state;
      }
    },
    clearBasket() {
      return initialState;
    }
  },
});

export const { addToBasket, subtractFromBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;