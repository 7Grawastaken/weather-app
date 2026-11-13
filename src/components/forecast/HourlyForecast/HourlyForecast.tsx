import type { JSX } from "@emotion/react/jsx-runtime";
import HourlyCard from "../HourlyCard/HourlyCard";
import { useWeatherData } from "../../../services/WeatherDataContext";
import { Fragment } from "react/jsx-runtime";

export default function HourlyForecast(): JSX.Element {
  const data = useWeatherData();
  const hours = data?.days[0].hours;
  return (
    <div className="flex overflow-x-auto scrollbar-gutter-stable w-full gap-5 mb-15 py-1">
      {hours?.map((hour, i) => {
        return (
          <Fragment key={i}>
            <HourlyCard hour={hour} />
          </Fragment>
        );
      })}
    </div>
  );
}
