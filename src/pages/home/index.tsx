import BrandLogo from "@/assets/img/logo-brand.svg";
import { useWeather } from "@/hooks/use-weather";
import { getToday } from "@/lib/date";
import { useClock } from "@/hooks/use-clock";
import { getWeatherVariant } from "@/lib/weather";
import {
  EmptyLocation,
  WeatherDetails,
  WeatherForecasts,
  WeatherCard,
  WeatherCardHeader,
  WeatherCardLocation,
  WeatherCardTime,
  WeatherCardBody,
  WeatherCardDetail,
  WeatherCardTemp,
  WeatherCardIcon,
  Spinner,
  SearchForm,
  ErrorDisplay,
} from "@/components";
import { useAppContext } from "@/context/app-context";

export const Home = () => {
  const currentTime = useClock();
  const { location } = useAppContext();
  const { data, weatherToday, weatherIn5Day, isLoading, isError, error } =
    useWeather(location);

  return (
    <section
      className={`h-auto lg:h-screen overflow-hidden py-10 ${
        !location
          ? "bg-[url('assets/img/background.png')] bg-cover bg-no-repeat bg-top"
          : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto">
        {!location ? (
          <EmptyLocation />
        ) : (
          <div className="w-full h-full overflow-hidden grid grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-6 lg:space-y-0">
            <div className="bg-gray-800 p-5 h-[calc(100vh_-_5rem)] rounded-lg flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="bg-gray-600 w-12 h-12 flex justify-center items-center rounded-lg">
                  <img
                    src={BrandLogo}
                    alt="brand logo of app"
                    className="w-6 h-4"
                  />
                </div>
                <SearchForm />
              </div>

              {isLoading && <Spinner />}
              {isError && <ErrorDisplay message={error?.message} />}

              {weatherToday && (
                <WeatherCard
                  variant={getWeatherVariant(
                    weatherToday.weather[0].main,
                    weatherToday.sys.pod
                  )}
                >
                  <WeatherCardHeader>
                    <WeatherCardLocation>
                      <h4 className="text-heading-md">
                        {data?.city.name}, {data?.city.country}
                      </h4>
                      <p className="text-md">{getToday(new Date())}</p>
                    </WeatherCardLocation>
                    <WeatherCardTime>{currentTime}</WeatherCardTime>
                  </WeatherCardHeader>

                  <WeatherCardBody>
                    <WeatherCardDetail>
                      <WeatherCardTemp>
                        {Math.round(weatherToday.main.temp)}&deg;c
                      </WeatherCardTemp>
                      <div className="flex items-center gap-3">
                        <p className="text-heading-md">
                          {Math.round(weatherToday.main.temp_max)}&deg;c /{" "}
                          {Math.round(weatherToday.main.temp_min)}&deg;c
                        </p>
                        <span className="h-2 w-2 rounded-full bg-white/30 inline-block"></span>
                        <p className="text-lg">
                          {weatherToday.weather[0].main}
                        </p>
                      </div>
                    </WeatherCardDetail>
                    <WeatherCardIcon
                      src={`https://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@2x.png`}
                      alt="weather icon"
                    />
                  </WeatherCardBody>
                </WeatherCard>
              )}
            </div>

            <div className="h-[calc(100vh_-_5rem)] flex flex-col gap-4">
              <div className="bg-gray-800 h-[60%] p-5 rounded-xl overflow-hidden">
                <p className="text-md text-gray-400">Today's weather details</p>

                {isLoading && <Spinner />}
                {isError && <ErrorDisplay message={error?.message} />}

                <div className="mt-2">
                  {weatherToday && (
                    <>
                      <WeatherDetails
                        type="temperature"
                        value={`${Math.round(weatherToday.main.feels_like)}°C`}
                      />
                      <WeatherDetails
                        type="rain"
                        value={`${
                          weatherToday.pop ? weatherToday.pop * 100 : 0
                        }%`}
                      />
                      <WeatherDetails
                        type="wind"
                        value={`${Math.round(
                          weatherToday.wind.speed * 3.6
                        )} km/h`}
                      />
                      <WeatherDetails
                        type="humidity"
                        value={`${weatherToday.main.humidity}%`}
                        className="border-none"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="bg-gray-800 p-5 h-[40%] rounded-xl">
                <p className="text-md text-gray-400">Forecast for 5 days</p>

                {isLoading && <Spinner />}
                {isError && <ErrorDisplay message={error?.message} />}

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-5 xl:mt-8">
                  {weatherIn5Day.map((weather) => (
                    <WeatherForecasts key={weather.day} data={weather} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
