import type { JSX } from "react/jsx-runtime";
import { Cloud, WavesVertical } from "lucide-react";
import { useWeatherData } from "../../../services/WeatherDataContext";

export default function CurrentWeather(): JSX.Element {
  const data = useWeatherData();

  const unFormatedDate =
    data && new Date(data.currentConditions.datetimeEpoch * 1000);
  const day =
    data && unFormatedDate?.toLocaleDateString("en-US", { weekday: "long" });
  const date = data && unFormatedDate?.toLocaleDateString("en-US");

  return (
    <div className="flex flex-col justify-center">
      <img
        src="src/assets/weather-icon.svg"
        alt="Weather Icon"
        className="w-64 h-64"
      />
      <h1 className="text-7xl font-extralight mb-5">
        {data?.currentConditions.temp}
        <span className="font-medium text-5xl align-top">°</span>
        <span className="align-top font-light text-5xl">C</span>
      </h1>
      <p className="flex gap-2">
        {day},<span className="text-[#C9C9C9]">{date}</span>
      </p>

      <hr className="text-gray-200 my-5" />

      <p className="flex gap-2 text-xs items-center font-medium mb-2">
        <Cloud className="text-gray-300" />
        {data?.currentConditions.conditions}
      </p>
      <p className="flex gap-2 text-xs items-center font-medium">
        <WavesVertical className="text-blue-700" />
        Rain - <span>{data?.currentConditions.precipprob}%</span>
      </p>
    </div>
  );
}
