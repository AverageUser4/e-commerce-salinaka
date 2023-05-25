import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;