import { useAppContext } from "@/context/app-context";
import { getDayName } from "@/lib/date";
import { ForecastingWeatherData } from "@/types/weather";

export const WeatherForecasts = ({
  data,
}: {
  data: ForecastingWeatherData;
}) => {
  const { units } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-heading-xs text-gray-200">{getDayName(data?.day)}</p>
      <div className="w-24 h-24 sm:w-16 sm:h-16 flex justify-center items-center">
        <img
          src={`https://openweathermap.org/img/wn/${data?.icon}@4x.png`}
          alt="storm night"
          className="w-full h-full"
        />
      </div>
      <p className="text-sm text-gray-200">{data?.condition}</p>
      <p className="text-gray-100 text-heading-xs">
        {Math.round(data?.temp_max)}°{units === "metric" ? "c" : "f"}{" "}
        <span className="text-gray-400 ml-1">
          {Math.round(data?.temp_min)}°{units === "metric" ? "c" : "f"}
        </span>
      </p>
    </div>
  );
};
