"use client";
const { useState, useEffect } = require("react");

const FETCH_URL = "https://api.spacexdata.com/v3/launches";

const useLaunches = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(FETCH_URL);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};

export default useLaunches;
