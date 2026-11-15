import type React from "react";
import type { JSX } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { setSelectedUnit } from "../../../slices/selectedUnitSlice";
import { useSelector } from "react-redux";

interface HeaderMainPanelProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<"today" | "week">>;
  selectedTab: "today" | "week";
}

export default function HeaderMainPanel({
  setSelectedTab,
  selectedTab,
}: HeaderMainPanelProps): JSX.Element {
  const dispatch = useDispatch();
  const selectedUnit = useSelector(
    (state: { selectedUnit: { value: "metric" | "us" } }) =>
      state.selectedUnit.value,
  );

  function goTodayTab() {
    setSelectedTab("today");
  }

  function goWeekTab() {
    setSelectedTab("week");
  }

  function switchToMetric() {
    dispatch(setSelectedUnit("metric"));
  }

  function switchToUsUnit() {
    dispatch(setSelectedUnit("us"));
  }

  return (
    <div className="flex justify-between mb-15">
      <div className="flex gap-5">
        <button
          className={`${selectedTab === "today" ? "active-tab" : "no-underline text-gray-400"} cursor-pointer`}
          onClick={goTodayTab}
        >
          Today
        </button>
        <button
          className={`${selectedTab === "week" ? "active-tab" : "no-underline text-gray-400"} cursor-pointer`}
          onClick={goWeekTab}
        >
          Week
        </button>
      </div>
      <div className="flex gap-5">
        <button
          className={`rounded-full ${selectedUnit === "metric" ? "active-unit" : "bg-white text-black border"} px-2 py-1.5 text-sm cursor-pointer hover:scale-110 duration-200`}
          onClick={switchToMetric}
        >
          <span className="font-bold">°</span>C
        </button>
        <button
          className={`rounded-full ${selectedUnit === "us" ? "active-unit" : "bg-white text-black border"} px-2 text-sm cursor-pointer hover:scale-110 duration-200`}
          onClick={switchToUsUnit}
        >
          <span className="font-bold">°</span>F
        </button>
      </div>
    </div>
  );
}
