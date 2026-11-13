import { Fragment, type JSX } from "react/jsx-runtime";
import DayCard from "../DayCard/DayCard";
import { useWeatherData } from "../../../services/WeatherDataContext";

export default function WeekForecast(): JSX.Element {
  const data = useWeatherData();
  const days = data?.days.slice(1, 8);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mb-15">
      {days?.map((day, i) => {
        return (
          <Fragment key={i}>
            <DayCard day={day} />
          </Fragment>
        );
      })}
    </div>
  );
}
