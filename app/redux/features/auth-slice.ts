import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  access_token: string;
};

const initialState: AuthState = {
  access_token: "",
};

export const authStateToggle = createSlice({
  name: "authState",
  initialState,
  reducers: {
    setTokenFromCookie: (state, action: PayloadAction<AuthState>) => {
      return {access_token: action.payload.access_token};
    },
  },
});

export const { setTokenFromCookie } = authStateToggle.actions;
export default authStateToggle.reducer;

