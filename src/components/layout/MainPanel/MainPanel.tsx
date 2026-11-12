import type { JSX } from "react/jsx-runtime";
import HeaderMainPanel from "../HeaderMainPanel/HeaderMainPanel";
import WeekForecast from "../../forecast/WeekForecast/WeekForecast";
import Highlights from "../../highlights/Highlights/Highlights";

export default function MainPanel(): JSX.Element {
  return (
    <div className="min-h-full w-full bg-[#F7F6F9] p-10 rounded-r-4xl">
      <HeaderMainPanel />
      <WeekForecast />
      <p className="text-lg font-medium mb-5">Today's Highlights</p>
      <Highlights />
    </div>
  );
}
