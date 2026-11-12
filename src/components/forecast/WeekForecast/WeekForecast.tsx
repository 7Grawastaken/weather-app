import type { JSX } from "react/jsx-runtime";
import DayCard from "../DayCard/DayCard";

export default function WeekForecast(): JSX.Element {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return (
    <div className="grid grid-cols-7 gap-2 mb-15">
      {days.map((day, i) => (
        <DayCard day={day} key={i} />
      ))}
    </div>
  );
}
