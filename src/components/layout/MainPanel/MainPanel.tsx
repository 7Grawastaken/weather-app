import type { JSX } from "react/jsx-runtime";
import HeaderMainPanel from "../HeaderMainPanel/HeaderMainPanel";
import WeekForecast from "../../forecast/WeekForecast/WeekForecast";
import Highlights from "../../highlights/Highlights/Highlights";
import HourlyForecast from "../../forecast/HourlyForecast/HourlyForecast";
import { useState } from "react";

interface MainPanelProps {
  selectedUnit: "metric" | "us";
  setSelectedUnit: React.Dispatch<React.SetStateAction<"metric" | "us">>;
}

export default function MainPanel({
  selectedUnit,
  setSelectedUnit,
}: MainPanelProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<"today" | "week">("today");

  return (
    <div className="h-full w-full min-w-0 overflow-y-auto bg-[#F7F6F9] p-10 rounded-b-4xl lg:rounded-r-4xl scrollbar-gutter-stable">
      <HeaderMainPanel
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        setSelectedUnit={setSelectedUnit}
        selectedUnit={selectedUnit}
      />
      <div className="h-55">
        {selectedTab === "today" ? <HourlyForecast /> : <WeekForecast />}
      </div>

      <p className="text-lg font-medium mb-5">Today's Highlights</p>
      <Highlights />
    </div>
  );
}
