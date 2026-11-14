import type { JSX } from "react/jsx-runtime";
import { useWeatherData, useUnits } from "../../../services/WeatherDataContext";

const KM_PER_MILE = 1.609344;

function visibilityCategory(visKm: number) {
  if (visKm < 1) return { label: "Very Poor", color: "#ff0000" };
  if (visKm < 4) return { label: "Poor", color: "#ff7e00" };
  if (visKm < 10) return { label: "Moderate", color: "#ffd000" };
  if (visKm < 20) return { label: "Good", color: "#00e400" };
  return { label: "Excellent", color: "#00b894" };
}

export default function VisibilityCard(): JSX.Element {
  const data = useWeatherData();
  const units = useUnits();

  const visibility = data?.currentConditions?.visibility;

  const visibilityKm =
    visibility != null
      ? units.distance === "km"
        ? visibility
        : visibility * KM_PER_MILE
      : null;

  const roundedKm =
    visibilityKm != null ? Math.round(visibilityKm * 2) / 2 : null;

  const category = roundedKm != null ? visibilityCategory(roundedKm) : null;

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Visibility</h1>
      {category ? (
        <>
          <span className="text-5xl">
            {visibility}
            <span className="text-xl"> {units.distance}</span>
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
