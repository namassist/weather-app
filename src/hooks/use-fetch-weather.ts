import { useQuery } from "@tanstack/react-query";
import { getForecastWeatherByCity } from "@/lib/api";
import { WeatherAPIResponse } from "@/types/weather";

export const useFetchWeather = (query: string) => {
  return useQuery<WeatherAPIResponse>({
    queryKey: ["forecast weather", query],
    queryFn: () => getForecastWeatherByCity(query),
    enabled: !!query,
  });
};
