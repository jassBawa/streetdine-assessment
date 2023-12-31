import {
  filterLaunchesByDateRange,
  filterPastLaunches,
  filterUpcomingLaunches,
  showAllLaunches,
} from "@/lib/slices/launchesSlice";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LaunchFilters = () => {
  const { data: session } = useSession();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const handleUpcomingFilter = () => {
    if (!session?.user) {
      toast.error("Please login first");
      return;
    }
    dispatch(filterUpcomingLaunches());
    toast.success("Launches updated");
  };

  const handlePastFilter = () => {
    if (!session?.user) {
      toast.error("Please login first");
      return;
    }
    dispatch(filterPastLaunches());
    toast.success("Launches updated");
  };

  const handleAllFilter = () => {
    if (!session?.user) {
      toast.error("Please login first");
      return;
    }
    dispatch(showAllLaunches());
    toast.success("Launches updated");
  };

  const handleFilterClick = () => {
    // Convert input dates to UNIX timestamps
    const startDateUnix = Math.floor(new Date(startDate).getTime() / 1000);
    const endDateUnix = Math.floor(new Date(endDate).getTime() / 1000);

    // Dispatch the action with the date range to filter launches
    dispatch(
      filterLaunchesByDateRange({
        startDate: startDateUnix,
        endDate: endDateUnix,
      })
    );
    toast.success("Launches updated");
  };

  return (
    <>
      <div className="filters flex gap-4 text-white mt-8">
        <span className="text-gray-400">More filters:</span>
        <span onClick={handleAllFilter} className="underline cursor-pointer">
          All
        </span>
        <span
          onClick={handleUpcomingFilter}
          className="underline cursor-pointer"
        >
          Upcoming
        </span>
        <span onClick={handlePastFilter} className="underline cursor-pointer">
          Past
        </span>
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          placeholder="End Date"
        />
        <button
          onClick={handleFilterClick}
          className="bg-cyan-500 text-white px-3 py-1 rounded focus:outline-none"
        >
          Filter
        </button>
      </div>
    </>
  );
};

export default LaunchFilters;
