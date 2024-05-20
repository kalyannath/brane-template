import { createSlice } from "@reduxjs/toolkit";

type SideDrawState = {
  isOpen: boolean;
};

const initialState: SideDrawState = {
  isOpen: false,
};

export const sideDrawerToggle = createSlice({
  name: "sideDrawer",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
    },
  },
});

export const { toggle } = sideDrawerToggle.actions;
export default sideDrawerToggle.reducer;

