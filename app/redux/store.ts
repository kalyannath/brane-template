import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./features/sidedrawer-state-slice";
import skeletonStateReducer from "./features/skeleton-slice";
import authReducer from "./features/auth-slice";
import TeamsStateReducer from "./features/teams-slice";

export const store = configureStore({
  reducer: {
    sideDrawerReducer,
    authReducer,
    skeletonStateReducer,
    TeamsStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
