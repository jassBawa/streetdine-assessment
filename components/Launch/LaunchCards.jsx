"use client";

import React from "react";
import LaunchCard from "./LaunchCard";
import useLaunches from "@/hooks/useLaunches";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const LaunchCards = () => {
  const launches = useSelector((state) => state.launches);

  if (launches.loading) return <Loader />;

  if (launches.data.length === 0)
    return (
      <div className="text-4xl text-center text-white">No launches to show</div>
    );

  return (
    <div className="cards flex flex-col gap-16 mt-8">
      {launches.data?.slice(0, 10).map((project, index) => (
        <LaunchCard key={index} project={project} />
      ))}
    </div>
  );
};

export default LaunchCards;
