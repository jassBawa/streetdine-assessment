import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  launchModalOpen: false,
  selectedLaunchId: null,
};

export const launchesSlice = createSlice({
  name: "launchModal",
  initialState,
  reducers: {
    openLaunchModal: (state, action) => {
      state.launchModalOpen = true;
      state.selectedLaunchId = action.payload;
    },
    closeLaunchModal: (state) => {
      state.launchModalOpen = false;
      state.selectedLaunchId = null;
    },
  },
});

export const { openLaunchModal, closeLaunchModal } = launchesSlice.actions;
export default launchesSlice.reducer;

// LaunchModalSelector.js
export const selectLaunchModalOpen = (state) =>
  state.launchModal.launchModalOpen;
export const selectSelectedLaunchId = (state) =>
  state.launchModal.selectedLaunchId;
