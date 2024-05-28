import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

type AuthState = {
  access_token: string;
};

const initialState: AuthState = {
  access_token: Cookies.get('access_token') ?? "",
};

export const authStateToggle = createSlice({
  name: "authState",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      return {access_token: action.payload.access_token};
    },
    logout: (state) => {
      return { access_token: "" };
    },
  },
});

export const { login, logout } = authStateToggle.actions;
export default authStateToggle.reducer;

