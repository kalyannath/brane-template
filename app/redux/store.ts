import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./features/sidedrawer-state-slice";

export const store = configureStore({
  reducer: {
    sideDrawerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
