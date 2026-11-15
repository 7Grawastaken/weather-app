import type { JSX } from "react/jsx-runtime";
import HeaderMainPanel from "../HeaderMainPanel/HeaderMainPanel";
import WeekForecast from "../../forecast/WeekForecast/WeekForecast";
import Highlights from "../../highlights/Highlights/Highlights";
import HourlyForecast from "../../forecast/HourlyForecast/HourlyForecast";
import { useState } from "react";

export default function MainPanel(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<"today" | "week">("today");

  return (
    <div className="h-full w-full min-w-0 overflow-y-auto bg-[#F7F6F9] p-10 rounded-b-4xl lg:rounded-r-4xl lg:rounded-l-none scrollbar-gutter-stable no-scrollbar flex flex-col justify-between">
      <HeaderMainPanel
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <div className="">
        {selectedTab === "today" ? <HourlyForecast /> : <WeekForecast />}
      </div>

      <div>
        <p className="text-lg font-medium mb-5">Today's Highlights</p>
        <Highlights />
      </div>
    </div>
  );
}
