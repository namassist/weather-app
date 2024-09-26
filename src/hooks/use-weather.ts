import * as React from "react";
import { useFetchWeather } from "@/hooks/use-fetch-weather";
import { getWeatherForToday, getWeatherFor5day } from "@/lib/weather";
import { useAppContext } from "@/context/app-context";

export const useWeather = () => {
  const { location, units, setUnits } = useAppContext();
  const { data, isLoading, isError, error, refetch } = useFetchWeather(
    location,
    units
  );

  const weatherToday = data ? getWeatherForToday(data.list) : null;
  const weatherIn5Day = data ? getWeatherFor5day(data) : [];

  React.useEffect(() => {
    if (location) {
      console.log("Searching weather for:", location);
    }

    refetch();
  }, [location, units, refetch]);

  const handleUnitToggle = (newUnits: string) => {
    setUnits((prevUnits: string) => {
      if (prevUnits !== newUnits) {
        const params = new URLSearchParams(window.location.search);
        params.set("units", newUnits);
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${params}`
        );
        return newUnits;
      }
      return prevUnits;
    });
  };

  return {
    weatherToday,
    weatherIn5Day,
    data,
    isLoading,
    isError,
    error,
    refetch,
    handleUnitToggle,
  };
};
