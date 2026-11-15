import { useSelector } from "react-redux";

export function useUnits() {
  const selectedUnit = useSelector(
    (state: { selectedUnit: { value: "metric" | "us" } }) =>
      state.selectedUnit.value,
  );

  const units = {
    temp: selectedUnit === "metric" ? "C" : "F",
    speed: selectedUnit === "metric" ? "km/h" : "mph",
    distance: selectedUnit === "metric" ? "km" : "mi",
  };

  return units;
}
