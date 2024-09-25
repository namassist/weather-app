import {
  WeathersData,
  WeatherAPIResponse,
  ForecastingWeatherData,
  WeatherVariant,
} from "@/types/weather";
import { getTimeOfDay } from "@/lib/date";

export const getWeatherForToday = (data: WeathersData[]) => {
  const today = new Date().toISOString().split("T")[0];

  const todayData = data?.filter((item) => item.dt_txt.startsWith(today));

  if (todayData?.length === 0) return null;

  return todayData?.reduce<WeathersData | null>((closest, current) => {
    const currentDate = new Date(current.dt_txt);
    return !closest ||
      Math.abs(currentDate.getTime() - Date.now()) <
        Math.abs(new Date(closest.dt_txt).getTime() - Date.now())
      ? current
      : closest;
  }, null);
};

export const getWeatherFor5day = (
  apiData: WeatherAPIResponse
): ForecastingWeatherData[] => {
  const groupedData: Record<string, ForecastingWeatherData> = {};

  const today = new Date().toISOString().split("T")[0];

  apiData.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];

    if (date === today) {
      return;
    }

    if (!groupedData[date]) {
      groupedData[date] = {
        day: date,
        temp_max: entry.main.temp_max,
        temp_min: entry.main.temp_min,
        condition: entry.weather[0].main.toLowerCase(),
        icon: entry.weather[0].icon,
      };
    } else {
      groupedData[date].temp_max = Math.max(
        groupedData[date].temp_max,
        entry.main.temp_max
      );
      groupedData[date].temp_min = Math.min(
        groupedData[date].temp_min,
        entry.main.temp_min
      );
    }
  });

  return Object.values(groupedData).slice(0, 5);
};

export const getWeatherVariant = (
  weather: string,
  time: string
): WeatherVariant => {
  const timeOfDay = getTimeOfDay(time);
  const weatherLower = weather.toLowerCase();

  if (!timeOfDay) return "default";

  switch (weatherLower) {
    case "clear":
      return `clear-${timeOfDay}` as WeatherVariant;
    case "clouds":
      return `clouds-${timeOfDay}` as WeatherVariant;
    case "rain":
      return `rain-${timeOfDay}` as WeatherVariant;
    case "snow":
      return `snow-${timeOfDay}` as WeatherVariant;
    case "thunderstorm":
      return `thunderstorm-${timeOfDay}` as WeatherVariant;
    default:
      return "default";
  }
};
