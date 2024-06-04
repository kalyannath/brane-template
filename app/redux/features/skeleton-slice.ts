import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SkeletonState = {
  companyDetailsSkeleton: boolean;
  activeProjectsSkeleton: boolean;
  teamsSkeleton: boolean;
  rightSidebarSkeleton: boolean;
};

const initialState: SkeletonState = {
  companyDetailsSkeleton: true,
  activeProjectsSkeleton: true,
  teamsSkeleton: true,
  rightSidebarSkeleton: true
};

export const skeletonStateToggle = createSlice({
  name: "skeletonState",
  initialState,
  reducers: {
    toggleCompanyDetailsSkeleton: (state, action: PayloadAction<boolean>) => {
      state.companyDetailsSkeleton = action.payload;
    },
    toggleActiveProjectsSkeleton: (state, action: PayloadAction<boolean>) => {
      state.activeProjectsSkeleton = action.payload;
    },
    toggleTeamsSkeleton: (state, action: PayloadAction<boolean>) => {
      state.teamsSkeleton = action.payload;
    },
    toggleRightSidebarSkeleton: (state, action: PayloadAction<boolean>) => {
      state.rightSidebarSkeleton = action.payload;
    },
  },
});

export const { toggleCompanyDetailsSkeleton, toggleActiveProjectsSkeleton, toggleTeamsSkeleton, toggleRightSidebarSkeleton } = skeletonStateToggle.actions;
export default skeletonStateToggle.reducer;

