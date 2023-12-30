import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  launchModalOpen: true,
  selectedLaunch: null,
};

export const launchesSlice = createSlice({
  name: "launchModal",
  initialState,
  reducers: {
    openLaunchModal: (state, action) => {
      state.launchModalOpen = true;
      state.selectedLaunch = action.payload;
    },
    closeLaunchModal: (state) => {
      state.launchModalOpen = false;
      state.selectedLaunch = null;
    },
  },
});

export const { openLaunchModal, closeLaunchModal } = launchesSlice.actions;
export default launchesSlice.reducer;

// LaunchModalSelector.js
export const selectLaunchModalOpen = (state) =>
  state.launchModal.launchModalOpen;
export const selectSelectedLaunch = (state) => state.launchModal.selectedLaunch;
