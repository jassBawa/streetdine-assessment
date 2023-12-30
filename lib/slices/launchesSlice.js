import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  cachedData: null, // New field to hold the cached data
  loading: false,
  error: null,
};

const url = "https://api.spacexdata.com/v3/launches";

export const fetchInitialData = createAsyncThunk(
  "data/fetchInitialData",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    filterUpcomingLaunches: (state) => {
      state.data = state.cachedData.filter(
        (launch) => launch.upcoming === true
      );
    },
    filterPastLaunches: (state) => {
      state.data = state.cachedData.filter(
        (launch) => launch.upcoming === false
      );
    },
    showAllLaunches: (state) => {
      state.data = state.cachedData;
    },

    filterLaunchesByDateRange: (state, action) => {
      const { startDate, endDate } = action.payload; // Payload contains start and end dates

      state.data = state.cachedData.filter(
        (launch) =>
          launch.launch_date_unix >= startDate &&
          launch.launch_date_unix <= endDate
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.loading = false;
        state.cachedData = action.payload; // Cache fetched data
        state.data = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  filterUpcomingLaunches,
  filterPastLaunches,
  showAllLaunches,
  filterLaunchesByDateRange,
} = launchesSlice.actions;
export default launchesSlice.reducer;
