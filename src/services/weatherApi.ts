import { useQuery } from "@tanstack/react-query";

const API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL: string = import.meta.env.VITE_WEATHER_BASE_URL;

export async function fetchWeather(
  location: string,
  unit: "metric" | "us" = "metric",
) {}
