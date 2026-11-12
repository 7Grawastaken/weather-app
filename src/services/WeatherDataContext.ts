// src/context/WeatherDataContext.tsx
import { createContext, useContext } from "react";
import type { WeatherData } from "../types/DataJSON";

const WeatherDataContext = createContext<WeatherData | undefined>(undefined);

export const WeatherDataProvider = WeatherDataContext.Provider;

export const useWeatherData = (): WeatherData => {
  const ctx = useContext(WeatherDataContext);
  if (!ctx) {
    throw new Error("useWeatherData must be used inside <WeatherDataProvider>");
  }
  return ctx;
};
