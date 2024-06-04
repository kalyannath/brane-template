import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TeamsState = {
  teamName: string;
};

const initialState: TeamsState = {
  teamName: "",
};

export const TeamsStateToggle = createSlice({
  name: "TeamsState",
  initialState,
  reducers: {
    setTeam: (state, action: PayloadAction<string>) => {
      state.teamName = action.payload;
    },
  },
});

export const { setTeam } = TeamsStateToggle.actions;
export default TeamsStateToggle.reducer;

