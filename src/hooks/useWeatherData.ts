import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchWeather } from "../services/weatherApi";
import type { WeatherData } from "../types/DataJSON";
import { useSelector } from "react-redux";

export function useWeatherData() {
  const location = useSelector(
    (state: {
      location: {
        value: string;
      };
    }) => state.location.value,
  );
  const selectedUnit = useSelector(
    (state: { selectedUnit: { value: "metric" | "us" } }) =>
      state.selectedUnit.value,
  );

  return useQuery<WeatherData>({
    queryKey: ["weather", location, selectedUnit],
    queryFn: () => fetchWeather(location, selectedUnit),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
