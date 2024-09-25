import * as React from "react";
import { useFetchWeather } from "@/hooks/use-fetch-weather";
import { getWeatherForToday, getWeatherFor5day } from "@/lib/weather";

export const useWeather = (location: string) => {
  const { data, isLoading, isError, error } = useFetchWeather(location);

  const weatherToday = data ? getWeatherForToday(data.list) : null;
  const weatherIn5Day = data ? getWeatherFor5day(data) : [];

  React.useEffect(() => {
    if (location) {
      console.log("Searching weather for:", location);
    }
  }, [location]);

  return {
    weatherToday,
    weatherIn5Day,
    data,
    isLoading,
    isError,
    error,
  };
};
