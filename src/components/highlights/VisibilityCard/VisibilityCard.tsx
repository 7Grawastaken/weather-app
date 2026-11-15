import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../hooks/useWeatherData";
import { useUnits } from "../../../hooks/useUnits";
import { useSelector } from "react-redux";

function visibilityCategory(visibility: number) {
  if (typeof visibility === "number") {
    if (visibility >= 0 && visibility < 1)
      return { label: "Very Poor", color: "bg-red-500" };
    else if (visibility >= 1 && visibility < 4)
      return { label: "Poor", color: "bg-orange-500" };
    else if (visibility >= 4 && visibility < 10)
      return { label: "Moderate", color: "bg-yellow-500" };
    else if (visibility >= 10 && visibility < 16)
      return { label: "Good", color: "bg-green-400" };
    return { label: "Very Good", color: "bg-green-500" };
  }
}

export default function VisibilityCard(): JSX.Element {
  const { data } = useWeatherData();
  const unit = useUnits();
  const selectedUnit = useSelector(
    (state: { selectedUnit: { value: "metric" | "us" } }) =>
      state.selectedUnit.value,
  );
  const rawVisibility = data?.currentConditions?.visibility ?? 0;
  const visibility =
    (selectedUnit === "metric" ? rawVisibility : rawVisibility * 1.609) ?? 0;
  const category =
    rawVisibility !== undefined ? visibilityCategory(visibility) : undefined;

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Visibility</h1>
      {rawVisibility && category ? (
        <>
          <span className="text-5xl">
            {rawVisibility}
            <span className="text-xl"> {unit.distance}</span>
          </span>
          <p className="flex items-center gap-2">
            <span
              className={`inline-block h-3 w-3 rounded-full ${category.color} `}
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
