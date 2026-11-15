import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../hooks/useWeatherData";

function usAqiCategory(aqi: number) {
  if (aqi <= 50) return { label: "Good", color: "#00e400" };
  if (aqi <= 100) return { label: "Moderate", color: "#ffff00" };
  if (aqi <= 150) return { label: "Unhealthy", color: "#ff7e00" };
  if (aqi <= 200) return { label: "Unhealthy", color: "#ff0000" };
  if (aqi <= 300) return { label: "Very Unhealthy", color: "#8f3f97" };
  return { label: "Hazardous", color: "#7e0023" };
}

export default function AirQualityCard(): JSX.Element {
  const { data } = useWeatherData();
  const aqi = data?.currentConditions?.aqius;
  const category = aqi != null ? usAqiCategory(aqi) : null;

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Air Quality</h1>
      {category ? (
        <>
          <span className="text-5xl">{aqi}</span>
          <p className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            {category.label}
          </p>
        </>
      ) : (
        <p className="text-gray-400">No air quality data available</p>
      )}
    </div>
  );
}
