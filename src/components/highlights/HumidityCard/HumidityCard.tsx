import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../hooks/useWeatherData";

function humidityCategory(humidity: number) {
  if (humidity < 30) return { label: "Dry", color: "#ff7e00" };
  if (humidity <= 60) return { label: "Comfortable", color: "#00e400" };
  if (humidity <= 70) return { label: "Humid", color: "#ffd000" };
  return { label: "Very Humid", color: "#ff0000" };
}

export default function HumidityCard(): JSX.Element {
  const { data } = useWeatherData();
  const humidity = data?.currentConditions?.humidity;
  const category = humidity != null && humidityCategory(humidity);

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Humidity</h1>
      {category ? (
        <>
          <span className="text-5xl">
            {Math.round(humidity!)}
            <span className="align-super text-xl"> %</span>
          </span>
          <p className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            {category.label}
          </p>
        </>
      ) : (
        <p className="text-gray-400">No humidity data available</p>
      )}
    </div>
  );
}
