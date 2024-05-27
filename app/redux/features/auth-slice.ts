import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  isLoggedIn: true,
};

export const authStateToggle = createSlice({
  name: "authState",
  initialState,
  reducers: {
    login: (state) => {
      console.log("auth state:::", state.isLoggedIn);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      console.log("auth state:::", state.isLoggedIn);
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authStateToggle.actions;
export default authStateToggle.reducer;

