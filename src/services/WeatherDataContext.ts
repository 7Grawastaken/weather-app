// WeatherDataContext.ts
import { createContext, useContext } from "react";
import type { WeatherData } from "../types/DataJSON";

type WeatherContextValue = { data: WeatherData | undefined };

const WeatherDataContext = createContext<WeatherContextValue | undefined>(undefined);

export const WeatherDataProvider = WeatherDataContext.Provider;

export const useWeatherData = (): WeatherData | undefined => {
  const ctx = useContext(WeatherDataContext);
  if (!ctx) {
    throw new Error("useWeatherData must be used inside <WeatherDataProvider>");
  }
  return ctx.data;
};