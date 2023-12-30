import { configureStore } from "@reduxjs/toolkit";
import { fetchInitialData, launchesSlice } from "./slices/launchesSlice";
import launchModalSlice from "./slices/launchModalSlice";

export const store = configureStore({
  reducer: {
    launches: launchesSlice.reducer,
    launchModal: launchModalSlice,
  },
});

// Dispatch the fetchInitialData action after configuring the store
store.dispatch(fetchInitialData());
