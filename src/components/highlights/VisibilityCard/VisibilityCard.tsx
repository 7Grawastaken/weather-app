import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../services/WeatherDataContext";

function visibilityCategory(vis: number) {
  if (vis < 1) return { label: "Very Poor", color: "#ff0000" };
  if (vis < 4) return { label: "Poor", color: "#ff7e00" };
  if (vis < 10) return { label: "Moderate", color: "#ffd000" };
  if (vis < 20) return { label: "Good", color: "#00e400" };
  return { label: "Excellent", color: "#00b894" };
}

export default function VisibilityCard(): JSX.Element {
  const data = useWeatherData();
  const visibility = data?.currentConditions?.visibility;
  const category = visibility != null ? visibilityCategory(visibility) : null;


  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Visibility</h1>
      {category ? (
        <>
          <span className="text-5xl">
            {visibility}
            <span className="text-xl"> Km</span>
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
        <p className="text-gray-400">No visibility data available</p>
      )}
    </div>
  );
}
