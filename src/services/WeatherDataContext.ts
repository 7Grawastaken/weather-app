import { createContext, useContext } from "react";
import type { WeatherData } from "../types/DataJSON";
import { UNITS, type UnitSystem } from "../utils/units";

type WeatherContextValue = {
  data?: WeatherData | undefined;
  selectedUnit: UnitSystem;
};

const WeatherDataContext = createContext<WeatherContextValue | undefined>(
  undefined,
);

export const WeatherDataProvider = WeatherDataContext.Provider;

function useWeatherContext(): WeatherContextValue {
  const ctx = useContext(WeatherDataContext);
  if (!ctx) {
    throw new Error("Weather hooks must be used inside <WeatherDataProvider>");
  }
  return ctx;
}

export const useWeatherData = (): WeatherData | undefined =>
  useWeatherContext().data;

export const useUnits = () => UNITS[useWeatherContext().selectedUnit];
