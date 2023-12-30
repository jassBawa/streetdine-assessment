"use client";

import React from "react";
import LaunchCard from "./LaunchCard";
import useLaunches from "@/hooks/useLaunches";

const LaunchCards = () => {
  const { isLoading, data, error } = useLaunches();
  console.log(data);
  return (
    <div className="cards flex flex-col gap-16">
      {data?.slice(0, 5).map((project) => (
        <LaunchCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default LaunchCards;
