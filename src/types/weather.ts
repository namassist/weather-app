export type WeatherVariant =
  | "clear-day"
  | "clear-night"
  | "clouds-day"
  | "clouds-night"
  | "rain-day"
  | "rain-night"
  | "snow-day"
  | "snow-night"
  | "thunderstorm-day"
  | "thunderstorm-night"
  | "default";

export type ForecastingWeatherData = {
  day: string;
  condition: string;
  temp_max: number;
  temp_min: number;
  icon: string;
};

export type WeatherAPIResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: WeathersData[];
  city: City;
};

export type WeathersData = {
  dt: number;
  main: MainWeather;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Clouds = {
  all: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Sys = {
  pod: string;
};

export type City = {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type Coordinates = {
  lat: number;
  lon: number;
};
