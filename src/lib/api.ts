import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0",
});
