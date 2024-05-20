import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo-slice";
import sideDrawerReducer from "./features/sidedrawer-state-slice";

export const store = configureStore({
  reducer: {
    todoReducer,
    sideDrawerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
