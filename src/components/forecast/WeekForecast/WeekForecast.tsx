import { type JSX } from "react/jsx-runtime";
import DayCard from "../DayCard/DayCard";
import { useWeatherData } from "../../../hooks/useWeatherData";

export default function WeekForecast(): JSX.Element {
  const { data } = useWeatherData();
  const days = data?.days.slice(1, 8);
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-15">
      {days?.map((day, i) => {
        return <DayCard day={day} key={i} />;
      })}
    </div>
  );
}
