import type { JSX } from "react/jsx-runtime";
import sunrise from "../../../assets/sunrise.svg";
import sunset from "../../../assets/sunset.svg";
import { useWeatherData } from "../../../hooks/useWeatherData";

export default function SunriseSunsetCard(): JSX.Element {
  const { data } = useWeatherData();

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Sunrise & Sunset</h1>
      {data ? (
        <>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <img src={sunrise} alt="Sunrise Time" className="size-12" />
              <div className="flex flex-col">
                <span>{data?.currentConditions.sunrise}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={sunset} alt="Sunset Time" className="size-12" />
              <div className="flex flex-col">
                <span>{data?.currentConditions.sunset}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-400">No wind data available</p>
      )}
    </div>
  );
}
