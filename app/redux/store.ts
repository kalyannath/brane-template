import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./features/sidedrawer-state-slice";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  reducer: {
    sideDrawerReducer,
    authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
